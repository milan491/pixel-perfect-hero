import serviceImage from "@/assets/service_maintenance.jpg";
import sparePartsImage from "@/assets/spare_parts.jpg";
import balticoolSymbol from "@/assets/balticool_symbol.svg";
import checkMark from "@/assets/check_mark.svg";
import readMoreArrow from "@/assets/read_more_arrow.svg";

const navy = "#1B2669";

function ReadMore() {
  return (
    <a
      href="#"
      className="group inline-flex items-center gap-6 text-[12px] font-semibold tracking-[0.2em]"
      style={{ color: navy }}
    >
      <span className="border-l border-current pl-4 py-1">PROČITAJ VIŠE</span>
      <span
        className="flex h-10 w-10 items-center justify-center transition-transform group-hover:-translate-y-0.5"
        style={{ backgroundColor: "#DCF959" }}
      >
        <img src={readMoreArrow} alt="" className="h-3.5 w-3.5" />
      </span>
    </a>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-3 text-[15px]" style={{ color: navy }}>
      <img src={checkMark} alt="" className="h-[19px] w-[19px] shrink-0" />
      <span>{children}</span>
    </li>
  );
}

export function Services() {
  return (
    <section className="w-full bg-white px-6 py-20 md:px-10 md:py-28">
      {/* Header */}
      <div className="relative">
        <p
          className="text-[11px] tracking-[0.25em]"
          style={{ color: navy, fontFamily: '"Roboto Mono", ui-monospace, monospace', fontWeight: 500 }}
        >
          STRUČNA REŠENJA
        </p>
        <h2
          className="mt-6 max-w-[640px] text-[40px] font-semibold leading-[1.15] tracking-[-0.01em] md:text-[48px]"
          style={{ color: navy }}
        >
          Usluge koje drže vašu<br className="hidden sm:block" /> opremu u pogonu
        </h2>
        <p className="mt-6 max-w-[520px] text-[15px] leading-[1.7]" style={{ color: navy }}>
          Redovno i preventivno održavanje industrijske rashladne opreme za
          pouzdan rad, bolju efikasnost i manje zastoja sistema.
        </p>

        <img
          src={balticoolSymbol}
          alt=""
          aria-hidden="true"
          className="absolute right-0 top-0 hidden h-[88px] w-auto md:block"
        />
      </div>

      {/* Row 1: image left, text right */}
      <div className="mt-16 grid grid-cols-1 gap-10 md:mt-24 md:grid-cols-2 md:gap-16 md:items-center">
        <div className="aspect-[4/3] w-full overflow-hidden">
          <img src={serviceImage} alt="Servis i održavanje" className="h-full w-full object-cover" />
        </div>
        <div className="flex flex-col">
          <h3 className="text-[28px] font-semibold leading-[1.2] md:text-[32px]" style={{ color: navy }}>
            Servis i održavanje
          </h3>
          <p className="mt-5 text-[15px] leading-[1.7]" style={{ color: navy }}>
            Redovno održavanje pomaže da industrijska rashladna i HVAC oprema
            radi stabilno i bez zastoja. Kroz dijagnostiku, servis i intervencije
            na terenu brzo rešavamo tehničke kvarove.
          </p>
          <ul className="mt-6 space-y-3">
            <Bullet>Preventivno održavanje opreme</Bullet>
            <Bullet>Servis HVAC sistema</Bullet>
            <Bullet>Dijagnostika i intervencije</Bullet>
          </ul>
          <div className="mt-10 md:mt-16 md:self-end">
            <ReadMore />
          </div>
        </div>
      </div>

      {/* Row 2: text left, image right */}
      <div className="mt-16 grid grid-cols-1 gap-10 md:mt-24 md:grid-cols-2 md:gap-16 md:items-center">
        <div className="flex flex-col md:order-1">
          <h3 className="text-[28px] font-semibold leading-[1.2] md:text-[32px]" style={{ color: navy }}>
            Rezervni delovi
          </h3>
          <p className="mt-5 text-[15px] leading-[1.7]" style={{ color: navy }}>
            Obezbeđujemo originalne rezervne delove i tehničke komponente za
            rashladne i HVAC sisteme. Uz stručne konsultacije biramo delove koji
            odgovaraju opremi i zahtevima sistema.
          </p>
          <ul className="mt-6 space-y-3">
            <Bullet>Originalni rezervni delovi</Bullet>
            <Bullet>Nabavka tehničkih komponenti</Bullet>
            <Bullet>Konsultacije pri izboru</Bullet>
          </ul>
          <div className="mt-10 md:mt-16">
            <ReadMore />
          </div>
        </div>
        <div className="aspect-[4/3] w-full overflow-hidden md:order-2" style={{ backgroundColor: "#E9F0FB" }}>
          <img src={sparePartsImage} alt="Rezervni delovi" className="h-full w-full object-contain" />
        </div>
      </div>
    </section>
  );
}
