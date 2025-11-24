import { env } from "$env/dynamic/private";
import nodemailer from "nodemailer";

export async function POST({ request, cookies }) {
  const { from, text, name } = await request.json();

  const data = {
    host: env.EMAIL_HOST,
    port: env.EMAIL_PORT,
    secure: env.EMAIL_SECURE == "true",
    auth: {
      user: env.EMAIL_USER,
      pass: env.EMAIL_PASSWORD,
    },
  };

  const transporter = nodemailer.createTransport({
    // @ts-ignore
    host: data.host,
    port: data.port,
    secure: data.secure,
    auth: {
      user: data.auth.user,
      pass: data.auth.pass,
    },
    tls: {
      rejectUnauthorized: env.IGNORE_TLS === "true" ? false : true,
    },
    connectionTimeout: 60000,
    greetingTimeout: 60000,
    socketTimeout: 60000,
  });

  await transporter.sendMail({
    from: `Message from xyzhub <${data.auth.user}>`,
    to: data.auth.user,
    subject: `New message from ${name} <${from}>`,
    text: `Name: ${name}\nEmail: ${from}\nMessage:\n${text}`,
  });

  return new Response(
    JSON.stringify({
      success: true,
      message: "Email has been sent!",
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
