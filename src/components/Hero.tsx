import logoHeader from "@/assets/logo_header.svg";
import bacLogo from "@/assets/bac_logo.png";
import sabianaLogo from "@/assets/sabiana_logo.png";
import symbolDecorative from "@/assets/symbol_decorative.svg";
import buttonArrow from "@/assets/button_arrow.svg";
import eyeIcon from "@/assets/eye_icon.svg";
import heroImage from "@/assets/hero_technician.jpg";

const navItems = ["USLUGE", "BRENDOVI", "O NAMA", "KLIJENTI", "GALERIJA"];

export function Hero() {
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden font-sans text-white"
      style={{ backgroundColor: "#1B2669" }}
    >
      {/* Top bar */}
      <header className="relative z-20 flex h-20 items-center justify-between pl-10 pr-0">
        <a href="/" className="flex h-full items-center">
          <img src={logoHeader} alt="Balticool" className="h-10 w-auto" />
        </a>

        <div className="flex h-full items-center gap-10 ml-auto">
          <nav className="hidden items-center gap-10 lg:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-[13px] font-light tracking-[0.15em] text-white/90 transition-colors hover:text-[#DCF959]"
              >
                {item}
              </a>
            ))}
          </nav>

          <a
            href="#kontakt"
            className="group flex h-full items-center gap-4 px-10 text-[13px] font-semibold tracking-[0.15em] text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#111424" }}
          >
            KONTAKTIRAJTE NAS
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </header>

      {/* Divider */}
      <div className="relative z-20 h-px w-full" style={{ backgroundColor: "#434F97" }} />

      {/* Main grid */}
      <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,640px)]">
        {/* Left content */}
        <div className="relative z-10 flex min-h-[760px] flex-col px-10 pb-10 pt-10">
          {/* Authorized service badge */}
          <div className="flex items-center gap-4">
            <p className="text-[11px] font-medium leading-[1.5] tracking-[0.15em] text-white/85">
              OVLAŠĆENI SERVIS<br />BALTIMORE AIRCOIL<br />&amp; SABIANA
            </p>
            <img src={bacLogo} alt="Baltimore Aircoil" className="h-11 w-11" />
            <img src={sabianaLogo} alt="Sabiana" className="h-11 w-11" />
          </div>

          {/* Headline area */}
          <div className="mt-auto max-w-[640px]">
            <h1 className="text-white font-semibold leading-[1.05] tracking-[-0.02em] text-[58px]">
              Standard pouzdanosti<br />u industrijskom<br />hlađenju
            </h1>

            <p className="mt-8 max-w-[480px] text-[15px] leading-[1.7] text-white/75">
              Stručan servis, održavanje i tehnička podrška za industrijske
              rashladne i HVAC sisteme. Pouzdan rad opreme, manji zastoji
              i dugoročna efikasnost sistema.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#ponuda"
                className="group inline-flex items-center justify-between gap-10 px-7 py-4 text-[14px] font-semibold transition-transform hover:-translate-y-0.5"
                style={{ backgroundColor: "#DCF959", color: "#1B2669" }}
              >
                Zatražite ponudu
                <img src={buttonArrow} alt="" className="h-4 w-auto transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#vise"
                className="group inline-flex items-center justify-between gap-10 border border-white/40 px-7 py-4 text-[14px] font-semibold text-white transition-colors hover:bg-white/5"
              >
                Saznajte više
                <img src={eyeIcon} alt="" className="h-4 w-auto" />
              </a>
            </div>
          </div>
        </div>

        {/* Right hero image */}
        <div className="relative h-[420px] lg:h-auto lg:min-h-[760px]">
          <img
            src={heroImage}
            alt="Balticool tehničar pored industrijskog rashladnog sistema"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        {/* Decorative symbol */}
        <img
          src={symbolDecorative}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-[670px] top-[-34px] hidden w-[396px] opacity-90 lg:block"
        />
      </div>
    </section>
  );
}
