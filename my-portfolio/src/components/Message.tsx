import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

export default function Message(){
    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<'idle'|'sending'|'success'|'error'>('idle');

    const sendEmail = (e: React.SubmitEvent) => {
        e.preventDefault();
        if(!formRef.current) return;

        setStatus('sending');

        const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
        const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
        const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
        .then(() => {
            setStatus('success');
            formRef.current?.reset(); // 送信成功後にフォームの入力をクリア
        })
        .catch((error) => {
            console.error('EmailJS Error:', error);
            setStatus('error');
        });
    };

    return(
        <div style = 
         {{ margin: '0 auto', 
            textAlign: 'center', 
            padding: '40px', 
            border: '1px solid #7b7b7b', 
            borderRadius: '8px' }}>

            <form ref = {formRef} onSubmit = {sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
                <div>
                    <label style = {{ display: 'block', marginBottom: '4px', fontSize: '20px' }}>Your name</label>
                        {/* 💡 name属性（user_name）はEmailJSテンプレート内の {{user_name}} と連動します */}
                    <input 
                     type = "text" 
                     name = "user_name" 
                     required 
                     style = {{ width: '100%', padding: '8px', boxSizing: 'border-box', border: '1px solid #7e000076', borderRadius: '4px' }} 
                    />
                </div>

                <div>
                    <label style = {{ display: 'block', marginBottom: '4px', fontSize: '20px' }}>Your email address</label>
                    {/* 💡 name属性（user_email）はEmailJSテンプレート内の {{user_email}} と連動します */}
                    <input 
                    type = "email" 
                    name = "user_email" 
                    required 
                    style = {{ width: '100%', padding: '8px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' }} 
                    />
                </div>

                <div>
                    <label style = {{ display: 'block', marginBottom: '4px', fontSize: '20px' }}>Message</label>
                    {/* 💡 name属性（message）はEmailJSテンプレート内の {{message}} と連動します */}
                    <textarea 
                    name = "message" 
                    required 
                    rows={7} 
                    style = {{ width: '100%', padding: '8px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' }} 
                    />
                </div>

                <button 
                    type="submit" 
                    disabled={status === 'sending'}
                    style={{ 
                        padding: '10px', 
                        backgroundColor: status === 'sending' ? '#ccc' : '#0070f3', 
                        color: 'white', 
                        border: 'none', 
                        borderRadius: '4px',
                        cursor: status === 'sending' ? 'not-allowed' : 'pointer' 
                    }}
                >
                {status === 'sending' ? '送信中...' : 'メッセージを送信'}
                </button>

            </form>

            {/* 送信ステータスの表示 */}
            {status === 'success' && <p style={{ color: 'green', textAlign: 'center', marginTop: '12px' }}>送信が完了しました！</p>}
            {status === 'error' && <p style={{ color: 'red', textAlign: 'center', marginTop: '12px' }}>送信に失敗しました。再度お試しください。</p>}
        </div>
    );
}