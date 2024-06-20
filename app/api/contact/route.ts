import { NextResponse } from "next/server";
import * as nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.BREVO_USER,
    pass: process.env.BREVO_KEY,
  },
});

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      email: string;
      firstName: string;
      lastName: string;
      company: string;
      message: string;
    };

    const info = await transporter.sendMail({
      from: body.email, // sender address
      to: "quelchx@gmail.com",
      subject: `Form submission from ${body.company} - ${body.firstName} ${body.lastName}`, // Subject line
      text: body.message,
    });

    return NextResponse.json({
      message: "Message sent",
      info,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error sending message",
      error,
    });
  }
}
