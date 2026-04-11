import logo from "@/assets/urixon-logo.png";

const Footer = () => {
  return (
    <footer className="px-6 md:px-12 py-8 border-t border-border">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <img src={logo} alt="URIXON" className="h-4 w-auto" />
        <span className="font-body text-xs tracking-wider text-muted-foreground">
          © 2026 URIXON. All rights reserved. Design is everything.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
