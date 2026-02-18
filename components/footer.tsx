import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-background/50 backdrop-blur-sm">
      <div className="mx-auto max-w-(--breakpoint-xl)">
        <div className="flex flex-col-reverse items-center justify-between gap-x-2 gap-y-5 px-6 py-8 sm:flex-row xl:px-0">
          {/* Copyright */}
          <span className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()}{" "}
            <Link href="/" target="_blank" className="hover:text-primary transition-colors">
              Daffa Azka
            </Link>
            . All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
