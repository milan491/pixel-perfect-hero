import stepDefinisanje from "@/assets/step_definisanje.jpg";
import stepTerenska from "@/assets/step_terenska.jpg";
import stepRealizacija from "@/assets/step_realizacija.jpg";
import stepPracenje from "@/assets/step_pracenje.jpg";
import checkMark from "@/assets/check_mark_standard.svg";

const navy = "#1B2669";
const lineColor = "#BCD3FF";

const steps = [
  {
    n: "01",
    image: stepDefinisanje,
    title: "Definisanje zahtev",
    text: "Razgovaramo o stanju sistema i očekivanjima kako bismo jasno postavili ciljeve i okvir daljih aktivnosti.",
  },
  {
    n: "02",
    image: stepTerenska,
    title: "Terenska procena",
    text: "Dolazimo na lokaciju i kroz praktičan pregled utvrđujemo stvarno stanje opreme i potencijalne rizike u radu.",
  },
  {
    n: "03",
    image: stepRealizacija,
    title: "Realizacija rešenja",
    text: "Sprovodimo konkretne aktivnosti kroz servis, zamenu ili optimizaciju, u skladu sa prethodno definisanim planom.",
  },
  {
    n: "04",
    image: stepPracenje,
    title: "Praćenje i unapređenje",
    text: "Nakon realizacije dajemo smernice za dalji rad i predlažemo korake za dugoročnu stabilnost sistema.",
  },
];

export function Process() {
  return (
    <section className="w-full bg-[#E8F0FE] p-[30px]">
      <div className="w-full">
        <p
          className="text-[15px] tracking-[0.25em]"
          style={{ color: navy, fontFamily: '"Roboto Mono", ui-monospace, monospace', fontWeight: 500 }}
        >
          STANDARD RADA
        </p>
        <h2
          className="mt-6 max-w-[640px] font-semibold tracking-[-0.01em]"
          style={{ color: navy, fontSize: "44px", lineHeight: "52px" }}
        >
          Naš pristup svakom projektu
        </h2>

        <div className="mt-16 md:mt-20">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="grid grid-cols-12 items-center gap-6 py-8 md:gap-10 md:py-10"
              style={{
                borderTop: `1px solid ${lineColor}`,
                ...(i === steps.length - 1 ? { borderBottom: `1px solid ${lineColor}` } : {}),
              }}
            >
              <div className="col-span-12 md:col-span-5">
                <span
                  style={{
                    color: navy,
                    fontFamily: '"Roboto Mono", ui-monospace, monospace',
                    fontSize: "60px",
                    lineHeight: "70px",
                    fontWeight: 400,
                  }}
                >
                  {s.n}
                </span>
              </div>
              <div className="col-span-4 md:col-span-2">
                <img src={s.image} alt={s.title} className="h-[80px] w-full object-cover md:h-[90px]" />
              </div>
              <div className="col-span-8 md:col-span-5 flex items-start gap-4">
                <img src={checkMark} alt="" className="mt-1 h-[26px] w-[26px] shrink-0" />
                <div>
                  <h3 className="text-[18px] font-semibold" style={{ color: navy }}>
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-[1.6]" style={{ color: navy }}>
                    {s.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
