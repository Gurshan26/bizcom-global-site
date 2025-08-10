export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-20 border-t border-slate-200">
      <div className="container py-8 text-sm text-slate-600 grid gap-3 md:grid-cols-3">
        <p className="font-medium">© {year} BizCom Global</p>
        <p className="opacity-80">
          10 Jalan Besar #06-03, Sim Lim Tower, Singapore 208787
        </p>
        <p className="opacity-80">
          <a className="underline" href="mailto:sales@bizcompl.com">sales@bizcompl.com</a>
        </p>
      </div>
    </footer>
  );
}
