import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoHeader from "@/assets/logo_header.svg";
import bacLogo from "@/assets/bac_logo.png";
import sabianaLogo from "@/assets/sabiana_logo.png";
import symbolDecorative from "@/assets/symbol_decorative.svg";
import buttonArrow from "@/assets/button_arrow.svg";
import eyeIcon from "@/assets/eye_icon.svg";
import heroImage from "@/assets/hero_technician.jpg";
import { BackgroundPaths } from "@/components/ui/background-paths";

const navItems = ["USLUGE", "BRENDOVI", "O NAMA", "KLIJENTI", "GALERIJA"];

export function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden font-sans text-white"
      style={{ backgroundColor: "#1B2669" }}
    >
      {/* Top bar */}
      <header className="relative z-20 flex h-20 items-center justify-between pl-[15px] pr-0 md:pl-10">
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
            className="group hidden h-full items-center gap-4 px-10 text-[13px] font-semibold tracking-[0.15em] text-white transition-opacity hover:opacity-90 md:flex"
            style={{ backgroundColor: "#111424" }}
          >
            KONTAKTIRAJTE NAS
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </a>

          <button
            type="button"
            aria-label="Otvori meni"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-20 w-20 items-center justify-center text-white md:hidden"
            style={{ backgroundColor: "#111424" }}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="relative z-20 lg:hidden" style={{ backgroundColor: "#111424" }}>
          <nav className="flex flex-col px-[15px] py-6 md:px-10">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                onClick={() => setMenuOpen(false)}
                className="py-3 text-[13px] font-light tracking-[0.15em] text-white/90 transition-colors hover:text-[#DCF959]"
              >
                {item}
              </a>
            ))}
            <a
              href="#kontakt"
              onClick={() => setMenuOpen(false)}
              className="mt-4 inline-flex items-center gap-3 py-3 text-[13px] font-semibold tracking-[0.15em] text-white md:hidden"
            >
              KONTAKTIRAJTE NAS <span>→</span>
            </a>
          </nav>
        </div>
      )}

      {/* Divider */}
      <div className="relative z-20 h-px w-full" style={{ backgroundColor: "#434F97" }} />

      {/* Main grid */}
      <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,640px)]">
        {/* Left content */}
        <div className="relative z-10 flex flex-col px-[15px] pb-[30px] pt-10 md:min-h-[760px] md:px-10 md:pb-10">
          {/* Authorized service badge */}
          <div className="flex items-center gap-4">
            <p className="text-[11px] leading-[1.5] tracking-[0.15em] text-white/85" style={{ fontFamily: '"Roboto Mono", ui-monospace, monospace', fontWeight: 500 }}>
              OVLAŠĆENI SERVIS<br />BALTIMORE AIRCOIL<br />&amp; SABIANA
            </p>
            <img src={bacLogo} alt="Baltimore Aircoil" className="h-11 w-11" />
            <img src={sabianaLogo} alt="Sabiana" className="h-11 w-11" />
          </div>

          {/* Headline area */}
          <div className="mt-[60px] max-w-[640px] md:mt-auto">
            <h1 className="text-white font-semibold tracking-[-0.02em] text-[30px] leading-[40px] md:text-[58px] md:leading-[1.05]">
              Standard pouzdanosti<br />u industrijskom<br />hlađenju
            </h1>

            <p className="mt-8 max-w-[480px] text-[15px] leading-[1.7] text-white/75">
              Stručan servis, održavanje i tehnička podrška za industrijske
              rashladne i HVAC sisteme. Pouzdan rad opreme, manji zastoji
              i dugoročna efikasnost sistema.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col items-stretch gap-4 md:flex-row md:flex-wrap md:items-center">
              <a
                href="#ponuda"
                className="group inline-flex w-full items-center justify-center gap-4 px-7 py-4 text-[14px] font-semibold transition-transform hover:-translate-y-0.5 md:w-auto md:justify-between"
                style={{ backgroundColor: "#DCF959", color: "#1B2669" }}
              >
                Zatražite ponudu
                <img src={buttonArrow} alt="" className="h-4 w-auto transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#vise"
                className="group inline-flex w-full items-center justify-center gap-4 border border-white/40 px-7 py-4 text-[14px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/5 md:w-auto md:justify-between"
              >
                Saznajte više
                <img src={eyeIcon} alt="" className="h-4 w-auto transition-transform group-hover:translate-x-1" />
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
          className="pointer-events-none absolute left-1/2 top-[-34px] hidden w-[396px] -translate-x-1/2 opacity-90 lg:block"
        />
      </div>
    </section>
  );
}
