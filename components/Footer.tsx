export default function Footer() {
  return (
    <footer className="mt-20 border-t border-black/5 bg-brand-soft">
      <div className="container-page py-10 text-sm text-brand-navy/80">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <div className="flex flex-wrap items-end gap-2 text-lg font-semibold tracking-wide" aria-label="BizCom Global Pte Ltd">
              <span className="text-brand-navy">BizCom</span>
              <span className="text-brand-gold">Global</span>
              <span className="text-brand-navy">Pte</span>
              <span className="text-brand-navy">Ltd</span>
            </div>
            <div className="mt-2">10 Jalan Besar #06-03 Sim Lim Tower<br/>Singapore 208787</div>
            <div className="mt-2"><a className="link" href="mailto:sales@bizcompl.com">sales@bizcompl.com</a></div>
            <div className="mt-2">
              Tel: <a className="link" href="tel:+6563893966">+65 6389 3966</a>
            </div>
          </div>
          <div className="sm:text-right">
            <a className="link mr-4" href="/line-card">Line Card</a>
            <a className="link mr-4" href="/about">About</a>
            <a className="link" href="/contact">Contact</a>
          </div>
        </div>
        <div className="mt-6 text-xs opacity-70">© {new Date().getFullYear()} BizCom Global Pte Ltd. All rights reserved.</div>
      </div>
    </footer>
  );
}