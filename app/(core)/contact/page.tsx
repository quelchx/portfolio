import { Heading, SubHeading, Text } from "@/components/base/typography";
import { PageLink } from "@/components/base/page-link";
import { services } from "@/data/constants";

export default function Page() {
  return (
    <div className="flex flex-col space-y-12">
      <div className="px-10 pt-10 pb-16 mx-auto">
        <Heading>Hire me for your next project</Heading>
        <SubHeading>
          I am available for freelance work in the following areas:
        </SubHeading>
        <div className="border-t border-dashed dark:border-neutral-700 pt-6 mt-4">
          <Text>
            You can hire me to design your website, app, or any other digital
            product. I have a wide range of skills and experience in UI/UX
            design, including wireframing, prototyping, and visual design.
          </Text>
          <ul className="mt-4 text-neutral-500 list-disc text-sm list-inside dark:text-neutral-400">
            {services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
          <div className="flex flex-wrap border-t justify-end dark:border-neutral-700 pt-6 mt-6">
            <PageLink href="/" label="Learn more about my services →" />
          </div>
        </div>
      </div>
    </div>
  );
}
