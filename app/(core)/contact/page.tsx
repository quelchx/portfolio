import { ContactForm } from "@/components/partials/contact/contact-form";
import { ContactHero } from "@/components/partials/contact/contact-hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get In Touch",
  description:
    "Contact me for any inquiries or questions. I am always happy to help.",
};

export default function Page() {
  return (
    <section className="page-wrapper">
      <div className="px-12 pt-4 pb-12">
        <ContactHero />

        <div className="mt-12 lg:mt-18 border-t dark:border-neutral-700 lg:pt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start py-12">
            <div>
              <p className="text-lg font-semibold leading-6 text-neutral-900 dark:text-white group-hover:text-blue-400">
                Contact Me
              </p>
              <p className="mt-2 text-base text-neutral-500 dark:text-neutral-400">
                I will get back to you as soon as possible. Feel free to ask me
                anything.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
