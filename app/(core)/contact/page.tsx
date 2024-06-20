import { Heading, SubHeading, Text } from "@/components/base/typography";
import { ContactForm } from "./components/contact-form";

export default function Page() {
  return (
    <section className="page-wrapper">
      <div className="px-12 pt-4 pb-12">
        <Heading>
          <span className="text-blue-600 dark:text-blue-500">Get </span> in
          touch
        </Heading>
        <SubHeading>
          I am open to collaborating on exciting projects with wonderful
          individuals. If you require any assistance, I am more than willing to
          offer my support.
        </SubHeading>

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
