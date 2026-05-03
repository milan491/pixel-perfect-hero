import hvacImage from "@/assets/hvac_support.jpg";

const navy = "#1B2669";

export function TechSupport() {
  return (
    <section className="w-full bg-white pl-[30px]">
      <div className="relative w-full">
        <img
          src={hvacImage}
          alt="Tehnička podrška industrijske rashladne i HVAC opreme"
          className="block h-auto w-full"
        />
        <h2
          className="absolute left-6 top-6 max-w-[80%] font-semibold md:left-16 md:top-16 md:max-w-[640px]"
          style={{
            color: navy,
            fontSize: "30px",
            lineHeight: "42px",
          }}
        >
          Tehnička podrška<br />
          industrijske rashladne i<br />
          HVAC opreme
        </h2>
      </div>
    </section>
  );
}
