export default function Footer() {
  return (
    <footer className="mt-20 border-t border-black/5 bg-brand-soft">
      <div className="container-page py-10 text-sm text-brand-navy/80">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <div className="font-heading text-brand-navy">BizCom Global</div>
            <div className="mt-2">10 Jalan Besar #06-03 Sim Lim Tower<br/>Singapore 208787</div>
            <div className="mt-2"><a className="link" href="mailto:sales@bizcompl.com">sales@bizcompl.com</a></div>
          </div>
          <div className="sm:text-right">
            <a className="link mr-4" href="/line-card">Line Card</a>
            <a className="link mr-4" href="/about">About</a>
            <a className="link" href="/contact">Contact</a>
          </div>
        </div>
        <div className="mt-6 text-xs opacity-70">© {new Date().getFullYear()} BizCom Global. All rights reserved.</div>
      </div>
    </footer>
  );
}