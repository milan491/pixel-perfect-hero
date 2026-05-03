import aboutMain from "@/assets/about_main.jpg";
import mission from "@/assets/mission.jpg";
import vision from "@/assets/vision.jpg";
import readMoreArrow from "@/assets/read_more_arrow.svg";

const navy = "#1B2669";
const muted = "#9AA3B8";

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

export function About() {
  return (
    <section className="w-full bg-white px-6 py-[80px] md:px-10 md:py-[112px]">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
        {/* Left column */}
        <div className="flex flex-col self-start md:sticky md:top-0 md:max-h-screen md:pb-[50px]">
          <p
            className="text-[15px] tracking-[0.25em]"
            style={{ color: navy, fontFamily: '"Roboto Mono", ui-monospace, monospace', fontWeight: 500 }}
          >
            O NAMA
          </p>

          <h2
            className="mt-10 text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] md:text-[40px]"
          >
            <span style={{ color: muted }}>Balticool Services</span>{" "}
            <span style={{ color: navy }}>
              obezbeđuje stabilan rad industrijskih rashladnih i HVAC sistema kroz pouzdan servis, održavanje i tehničku podršku.
            </span>
          </h2>

          <div className="mt-10 space-y-5 text-[15px] leading-[1.7]" style={{ color: navy }}>
            <p>
              Industrijski sistemi ne trpe greške — svaki zastoj znači gubitak vremena i resursa. Zato pristupamo svakom projektu kroz preciznu dijagnostiku, planiranje i pravovremenu intervenciju.
            </p>
            <p>
              Radimo direktno na sistemima klijenata, u realnim uslovima, gde je brzina reakcije jednako važna kao i tačnost rešenja. Fokus nam je na stabilnosti rada i dugoročnom pouzdanom funkcionisanju opreme.
            </p>
          </div>

          <div className="mt-auto pt-16">
            <ReadMore />
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-12">
          <img src={aboutMain} alt="Balticool Services" className="w-full object-cover" />

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            <div className="flex flex-col">
              <h3 className="text-[22px] font-semibold" style={{ color: navy }}>Naša misija</h3>
              <p className="mt-5 text-[14px] leading-[1.7]" style={{ color: navy }}>
                Da obezbedimo sigurnost i kontinuitet rada sistema kroz stručan pristup, pouzdane intervencije i odgovornu tehničku podršku u svakom trenutku.
              </p>
              <img src={mission} alt="Naša misija" className="mt-10 w-full max-w-[220px] object-cover" />
            </div>

            <div className="flex flex-col">
              <h3 className="text-[22px] font-semibold" style={{ color: navy }}>Naša Vizija</h3>
              <p className="mt-5 text-[14px] leading-[1.7]" style={{ color: navy }}>
                Da postavimo standard pouzdanosti u industrijskom hlađenju i HVAC sektoru, kroz rad koji donosi merljive rezultate i dugoročno poverenje klijenata.
              </p>
              <img src={vision} alt="Naša vizija" className="mt-10 w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
