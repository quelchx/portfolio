import { ContactForm } from "@/components/partials/contact/contact-form";
import { ContactHero } from "@/components/partials/contact/contact-hero";

export default function Page() {
  return (
    <section className="page-wrapper">
      <div className="px-12 pt-4 pb-12">
        <ContactHero />

        <div className="mt-12 lg:mt-18 border-t dark:border-neutral-700 pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start py-12">
            <p className="text-lg font-semibold leading-6 text-neutral-900 dark:text-white group-hover:text-blue-400">
              Contact Me
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
