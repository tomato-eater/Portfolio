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
export default function Hero() {
    return (
        <section className="hero section" id="hero">
            <div className="container">
                <div className="avater-placeholder">T</div>
                <p className="hero-eyebrow">Portfolio</p>

                <h1 className="hero-name">
                    <span className="gradient">{profiler.name}</span>
                    <span className="hero-name-en">{profiler.nameEn}</span>
                </h1>

                <p className="hero-role">{profiler.role}</p>
                {/*座右の銘表示*/}
                {profiler.motto && (
                    <blockquote className="hero-motto-mark">
                        <span className="hero-motto-mark">"</span>
                        {profiler.motto}
                        <span className="hero-motto-mark"></span>
                    </blockquote>
                )}

                <div className="hero-actions">
                    <a href="#works" className="btn btn-primary">制作物を見る</a>
                    <a href="contact" className="btn btn-outline">連絡する</a>
                </div>

            </div>
            <div className="hero-scroll">Scroll</div>
        </section>
    );
}
