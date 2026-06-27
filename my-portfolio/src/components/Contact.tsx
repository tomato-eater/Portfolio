import { profile } from "../data/portfolio";
import type { ReactNode } from "react";
import { FaEnvelope, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Contact(){
    const links:{ label: string; icon: ReactNode; href: string | null}[] = [
        {label:'Github', icon:<FaGithub/>, href:profile.links.github},
        {label:'Emale', icon:<FaEnvelope/>, href:profile.links.email},
        {label:'SNS', icon:<FaXTwitter/>, href:profile.links.twitter}
    ]
    return(
        <section className="section" id ="contact">
            <div className="container">
                <div contact-inner>
                    <h2 className="section-title">
                        <span>Contact</span>
                    </h2>
                    <p className="section-sub">連絡先</p>
                    <div className="contact-links">
                        {links
                            .filter((link): link is typeof link & {href: string}=>link.href !==null)
                            .map((link) => (
                            <a
                                key = {link.label}
                                href = {link.href}
                                className = "contact-link-item"
                                target = {link.href.startsWith('mailt')?undefined:'_blank'}
                                rel = "noreferrer">

                                <span className="contact-link-icon">
                                    {link.icon}
                                </span>
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}