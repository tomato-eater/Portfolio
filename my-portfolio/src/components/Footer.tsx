import { profile } from "../data/portfolio"

export default function Footer(){
    {/* 現在の年を取得 */}
    const year = new Date().getFullYear()
    return(
        <footer className = "footer">	
       		<div className = "contatiner">
                <p>© {year} {profile.nameEn}</p>
             </div>
        </footer>
    )
}