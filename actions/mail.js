import dotenv from "dotenv";
import { Resend } from "resend";
import ContactEmailTemplate from "../components/Contatct/Contatc-email-format";
import VErificationEmailTemplate from "../components/emails/VerificationEmail";
import { resend } from "../lib/resend";

dotenv.config();

console.log("env", process.env.RESEND_API_KEY);

// interface VerificationProps {
//   email: string;
//   username: string;
//   verifyCode: string;
// }

export const sendVerificationEmail = async ({
  email,
  username,
  verifyCode,
}) => {
  try {
    await resend.emails.send({
      from: "sanityesportsindia@gmail.com",
      to: email,
      subject: "Verification Code",
      react: VErificationEmailTemplate({ username, otp: verifyCode }),
    });
    return { success: true, message: "Verification email send successfully" };
  } catch (error) {
    console.log("Error while sending Verification email", error);
    return { success: false, message: "Failed to send verification email" };
  }
};

// interface ContactProps {
//   username: string;
//   fromEmail: string;
//   message: string;
//   subject: string;
// }
export const sendContactEmail = async ({
  username,
  fromEmail,
  message,
  subject,
}) => {
  try {
    console.log("sending contact email");
    console.log(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "djk10525@gmail.com",
      subject: subject,
      react: ContactEmailTemplate({ username, message, fromEmail }),
    });
    console.log("email sent");
    return {
      status: 200,
      message: "Sent successfully",
    };
  } catch (error) {
    return {
      status: 400,
      message: error,
    };
  }
};
