"use client";

import { Instagram, Linkedin, MailIcon, MapPinIcon, MessageCircle, MessageCircleDashedIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { motion } from "framer-motion";

const Contact = () => (
  <SectionWrapper className="flex items-center justify-center pt-12 pb-16 md:pt-16">
    <div className="mx-auto w-full max-w-(--breakpoint-xl) px-6 xl:px-0">
      <div className="text-center sm:text-left">
        <b className="font-semibold text-primary text-sm uppercase tracking-wide">
          Get In Touch
        </b>
        <h2 className="mt-3 font-bold text-3xl tracking-tight md:text-4xl">
          Let&apos;s work together
        </h2>
        <p className="mt-4 text-base text-muted-foreground sm:text-lg max-w-2xl">
          Available for freelance projects and collaborations.
        </p>
      </div>

      <div className="mt-14 grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {[
          { icon: MailIcon, title: "Email", desc: "Reach out directly.", link: "mailto:destdevs@gmail.com", label: "destdevs@gmail.com" },
          { icon: Linkedin, title: "Linkedin", desc: "Reach out directly.", link: "https://www.linkedin.com/in/daffa-azka/", label: "Start connecting via Linkedin" },
          { icon: Instagram, title: "Instagram", desc: "Reach out directly.", link: "https://www.instagram.com/dest.code/", label: "Follow me on Instagram" },
          { icon: MessageCircleDashedIcon, title: "Discord", desc: "Reach out directly.", link: "#", label: "destcode" }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="rounded-xl border border-dashed border-border bg-muted/30 p-6 pb-8 hover:bg-muted/50 transition-colors backdrop-blur-sm"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <item.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-8 font-bold text-xl">{item.title}</h3>
            <p className="mt-2.5 mb-4 text-muted-foreground">
              {item.desc}
            </p>
            <Link
              className="font-medium hover:underline decoration-primary underline-offset-4"
              href={item.link}
            >
              {item.label}
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default Contact;
