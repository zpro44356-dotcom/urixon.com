const words = ["BRANDING", "IDENTITY", "TYPOGRAPHY", "ILLUSTRATION", "MOTION", "DIGITAL", "PRINT", "PACKAGING", "EDITORIAL", "ART DIRECTION"];

const MarqueeStrip = () => {
  return (
    <div className="py-8 border-y border-border overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...words, ...words].map((word, i) => (
          <span
            key={i}
            className="font-display text-sm md:text-base tracking-[0.3em] uppercase text-muted-foreground mx-8 flex items-center gap-8"
          >
            {word}
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-muted-foreground" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeStrip;
