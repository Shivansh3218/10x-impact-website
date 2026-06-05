import { useState } from "react";
import { Mail, MapPin, Linkedin } from "lucide-react";
import PageHero from "../components/PageHero";
import { Reveal, Eyebrow } from "../components/primitives";
import { Button } from "../components/ui/button";

const field = "w-full px-[15px] py-[13px] border border-[var(--line)] rounded-[10px] text-[0.96rem] bg-white text-ink transition-all focus:outline-none focus:border-mint focus:ring-2 focus:ring-mint/20";
const labelCls = "block text-[0.82rem] font-semibold mb-[7px] text-ink";

export default function Contact() {
  const [form, setForm] = useState({ name: "", org: "", email: "", type: "Non-profit", msg: "" });
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  function submit(e) {
    e.preventDefault();
    const body = `Name: ${form.name}%0D%0AOrganisation: ${form.org}%0D%0AEmail: ${form.email}%0D%0AType: ${form.type}%0D%0A%0D%0A${form.msg}`;
    window.location.href = `mailto:team@10ximpact.in?subject=${encodeURIComponent("Collaboration enquiry — " + form.name)}&body=${body}`;
  }

  const info = [
    { ic: <Mail className="w-4 h-4" />, k: "Email", v: "team@10ximpact.in", href: "mailto:team@10ximpact.in" },
    { ic: <MapPin className="w-4 h-4" />, k: "Studio", v: "Workden, Domlur · Bengaluru", href: "https://maps.app.goo.gl/1P7a4ioUsMQj9HYB7" },
    { ic: <Linkedin className="w-4 h-4" />, k: "LinkedIn", v: "/company/10ximpactlabs", href: "https://www.linkedin.com/company/10ximpactlabs/" },
    { ic: <span className="font-semibold text-sm">X</span>, k: "X", v: "@10ximpactlabs", href: "https://x.com/10ximpactlabs" },
  ];

  return (
    <>
      <PageHero big eyebrow="Let’s build what matters" title="Have a problem worth solving?"
        lede="Tell us about your programme, your data, or the gap you’re trying to close. We read every message." />

      <section className="sec bg-paper">
        <div className="wrap-wide">
          <div className="grid lg:grid-cols-2 gap-[clamp(36px,5vw,72px)]">
            <Reveal>
              <form onSubmit={submit}>
                <div className="mb-[18px]"><label className={labelCls} htmlFor="name">Your name</label>
                  <input id="name" className={field} value={form.name} onChange={set("name")} placeholder="Jane Sharma" required /></div>
                <div className="mb-[18px]"><label className={labelCls} htmlFor="org">Organisation</label>
                  <input id="org" className={field} value={form.org} onChange={set("org")} placeholder="Your NGO / foundation / department" /></div>
                <div className="mb-[18px]"><label className={labelCls} htmlFor="email">Email</label>
                  <input id="email" type="email" className={field} value={form.email} onChange={set("email")} placeholder="you@organisation.org" required /></div>
                <div className="mb-[18px]"><label className={labelCls} htmlFor="type">I am a…</label>
                  <select id="type" className={field} value={form.type} onChange={set("type")}>
                    <option>Non-profit</option><option>Philanthropy / CSR</option>
                    <option>Government / GovTech</option><option>Social enterprise</option><option>Other</option>
                  </select></div>
                <div className="mb-[18px]"><label className={labelCls} htmlFor="msg">What are you trying to solve?</label>
                  <textarea id="msg" className={`${field} min-h-[130px] resize-y`} value={form.msg} onChange={set("msg")}
                    placeholder="A few lines on the challenge, the people it affects, and where you are today." required /></div>
                <Button type="submit" variant="dark">Send message</Button>
                <p className="text-stone text-[0.85rem] mt-3.5">This opens your email app addressed to team@10ximpact.in — no data is stored on this site.</p>
              </form>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="flex flex-col gap-[22px]">
                {info.map((r) => (
                  <div key={r.k} className="flex gap-3.5 items-start">
                    <span className="w-[42px] h-[42px] rounded-[10px] bg-[var(--mint-soft)] flex items-center justify-center shrink-0 text-deep">{r.ic}</span>
                    <div>
                      <div className="text-[0.78rem] uppercase tracking-[0.1em] text-stone mb-1">{r.k}</div>
                      <a className="font-semibold hover:text-mint transition-colors" href={r.href} target="_blank" rel="noopener noreferrer">{r.v}</a>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-9 p-6 border border-[var(--line)] rounded-[16px] bg-white">
                <Eyebrow>Our promise</Eyebrow>
                <p className="text-stone m-0">We treat every conversation like the start of a partnership — practical, honest, and grounded in what your community actually needs.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
