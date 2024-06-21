"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const schema = z.object({
  firstName: z.string().min(1, {
    message: "First name is required",
  }),
  lastName: z.string().min(1, {
    message: "Last name is required",
  }),
  company: z.string().optional(),
  email: z.string().email({
    message: "Email is invalid",
  }),
  message: z.string().min(1, {
    message: "Message is required",
  }),
});

export function ContactForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      message: "",
    },
  });

  function handleReset() {
    if (form.formState.isDirty) {
      form.reset();
      toast({
        duration: 1000,
        title: "Form reset",
        description: "The form has been reset.",
      });
    }
  }

  const onSubmit = async (values: z.infer<typeof schema>) => {
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      toast({
        duration: 3000,
        title: "Message sent!",
        description: "I'll be in touch soon.",
      });

      form.reset();
    } catch (error) {
      toast({
        duration: 5000,
        title: "Error sending message",
        description:
          "Something went wrong trying to send your message. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <Form {...form}>
      <form className="lg:col-span-2" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sr-only" htmlFor="firstName">
                  First Name
                </FormLabel>
                <FormControl>
                  <Input placeholder="First name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sr-only" htmlFor="lastName">
                  Last Name
                </FormLabel>
                <FormControl>
                  <Input placeholder="Last name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="sm:col-span-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only" htmlFor="email">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="johndoe@acme.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="sm:col-span-2">
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only" htmlFor="company">
                    Company
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Company name (optional)" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="sm:col-span-2">
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only" htmlFor="message">
                    Message
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      rows={6}
                      className="resize-none"
                      placeholder="Your message here..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="flex justify-end mt-6 gap-x-4">
          <Button
            type="submit"
            disabled={!form.formState.isValid || form.formState.isSubmitting}
          >
            Submit
          </Button>
          <Button
            type="reset"
            variant="secondary"
            onClick={handleReset}
            disabled={!form.formState.isDirty}
          >
            Reset
          </Button>
        </div>
      </form>
    </Form>
  );
}
