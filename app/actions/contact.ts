"use server";

import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactFormState = {
  success: boolean;
  message: string;
  field?: "name" | "email" | "message" | null;
};

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must have at least 2 characters"),
  email: z.string().trim().email("Please enter a valid email address"),
  message: z.string().trim().min(5, "Message must have at least 5 characters"),
  company: z.string().trim().max(0, "Spam detected."),
});

export async function sendContactEmail(
  prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
    company: formData.get("company"),
  };

  const parsed = contactSchema.safeParse(rawData);

  if (!parsed.success) {
    const firstIssue = parsed.error.issues[0];

    return {
      success: false,
      message: firstIssue?.message ?? "Invalid form data",
      field:
        firstIssue?.path[0] === "name" ||
        firstIssue?.path[0] === "email" ||
        firstIssue?.path[0] === "message"
          ? firstIssue.path[0]
          : null,
    };
  }

  const { name, email, message } = parsed.data;

  try {
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL as string,
      subject: "New portfolio message",
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    console.log("Resend result:", { data, error });

    if (error) {
      return {
        success: false,
        message: "Something went wrong - Please try again",
      };
    }

    return {
      success: true,
      message: "Message sent successfully",
      field: null,
    };
  } catch (error) {
    console.error("Resend error:", error);

    return {
      success: false,
      message: "Something went wrong - Please try again",
      field: null,
    };
  }
}
