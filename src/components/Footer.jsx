import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";
import { FOOTER } from "../data/site";

function Col({ title, children }) {
  return (
    <div>
      <h5 className="font-mono text-[0.72rem] tracking-[0.16em] uppercase text-white/45 m-0 mb-[18px] font-medium">{title}</h5>
      <ul className="list-none m-0 p-0 flex flex-col gap-[11px]">{children}</ul>
    </div>
  );
}
const li = "text-white/75 text-[0.95rem] hover:text-mint transition-colors";

export default function Footer() {
  return (
    <footer className="bg-forest text-white border-t border-white/10 pt-[clamp(56px,7vw,84px)] pb-9">
      <div className="wrap-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] gap-10 pb-12 border-b border-white/10">
          <div>
            <Link to="/" className="font-display font-extrabold text-[1.18rem] tracking-tight text-white inline-block mb-[18px]">
              10x<span className="text-mint">Impact</span>
            </Link>
            <p className="text-white/60 max-w-[34ch] text-[0.95rem]">
              Tech, Data &amp; AI for social impact. Based in Bengaluru, working across the Global South.
            </p>
          </div>
          <Col title="Explore">
            <li><Link className={li} to="/about">About</Link></li>
            <li><Link className={li} to="/what-we-do">What we do</Link></li>
            <li><Link className={li} to="/work">Case studies</Link></li>
            <li><Link className={li} to="/join">Join us</Link></li>
          </Col>
          <Col title="Resources">
            <li><Link className={li} to="/resources">Toolkits</Link></li>
            <li><Link className={li} to="/resources">Articles</Link></li>
            <li><a className={li} href="https://chatmne.ai/" target="_blank" rel="noopener noreferrer">ChatMnE</a></li>
          </Col>
          <Col title="Get in touch">
            <li><a className={li} href="mailto:team@10ximpact.in">team@10ximpact.in</a></li>
            <li><a className={li} href="https://maps.app.goo.gl/1P7a4ioUsMQj9HYB7" target="_blank" rel="noopener noreferrer">Workden, Domlur · Bengaluru</a></li>
            <li className="flex gap-2.5 pt-1.5">
              <a href="https://www.linkedin.com/company/10ximpactlabs/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                 className="w-[38px] h-[38px] rounded-[9px] border border-white/10 flex items-center justify-center transition-all hover:border-mint hover:text-mint hover:-translate-y-0.5">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://x.com/10ximpactlabs" target="_blank" rel="noopener noreferrer" aria-label="X"
                 className="w-[38px] h-[38px] rounded-[9px] border border-white/10 flex items-center justify-center transition-all hover:border-mint hover:text-mint hover:-translate-y-0.5 font-semibold text-sm">
                X
              </a>
            </li>
          </Col>
        </div>
        <div className="flex flex-col md:flex-row flex-wrap justify-between items-start md:items-center gap-4 pt-7 text-[0.84rem] text-white/50">
          <span>Copyright © 2026 10x Impact Labs | All Rights Reserved</span>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {FOOTER.legal.map((l) => (
              <a key={l.t} href={l.href} className="hover:text-mint transition-colors">{l.t}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
