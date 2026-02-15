import { Instagram, Linkedin, MailIcon, MapPinIcon, MessageCircle, MessageCircleDashedIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";

const Contact = () => (
  <div className="flex min-h-screen items-center justify-center pt-12 pb-16 md:pt-16">
    <div className="mx-auto w-full max-w-(--breakpoint-xl) px-6 xl:px-0">
      <b className="font-semibold text-muted-foreground text-sm uppercase">
        Get In Touch
      </b>
      <h2 className="mt-3 font-semibold text-3xl tracking-tighter md:text-4xl">
        Let&apos;s work together
      </h2>
      <p className="mt-4 text-base text-muted-foreground sm:text-lg">
        Available for freelance projects and collaborations.
      </p>
      <div className="mt-14 grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="rounded-xl border border-dashed bg-muted/40 p-6 pb-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground/5 text-foreground dark:bg-foreground/8">
            <MailIcon />
          </div>
          <h3 className="mt-8 font-bold text-xl">Email</h3>
          <p className="mt-2.5 mb-4 text-muted-foreground">
            Reach out directly.
          </p>
          <Link
            className="font-medium"
            href="mailto:destdevs@gmail.com"
          >
            destdevs@gmail.com
          </Link>
        </div>
        <div className="rounded-xl border border-dashed bg-muted/40 p-6 pb-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground/5 text-foreground dark:bg-foreground/8">
            <Linkedin />
          </div>
          <h3 className="mt-8 font-bold text-xl">Linkedin</h3>
          <p className="mt-2.5 mb-4 text-muted-foreground">
            Reach out directly.
          </p>
          <Link className="font-medium" href="https://www.linkedin.com/in/daffa-azka/">
            Start connecting via Linkedin
          </Link>
        </div>
        <div className="rounded-xl border border-dashed bg-muted/40 p-6 pb-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground/5 text-foreground dark:bg-foreground/8">
            <Instagram />
          </div>
          <h3 className="mt-8 font-bold text-xl">Instagram</h3>
          <p className="mt-2.5 mb-4 text-muted-foreground">
            Reach out directly.
          </p>
          <Link
            className="font-medium"
            href="https://www.instagram.com/dest.code/"
          >
            Follow me on Instagram
          </Link>
        </div>
        <div className="rounded-xl border border-dashed bg-muted/40 p-6 pb-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground/5 text-foreground dark:bg-foreground/8">
            <MessageCircleDashedIcon />
          </div>
          <h3 className="mt-8 font-bold text-xl">Discord</h3>
          <p className="mt-2.5 mb-4 text-muted-foreground">
            Reach out directly.
          </p>
          <Link className="font-medium" href="#">
            destcode
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
