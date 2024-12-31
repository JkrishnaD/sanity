import VerificationEmail from "./VerificationEmail";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string,
): Promise<any> {
  try {
    await resend.emails.send({
      from: "sanityesportsindia@gmail.com",
      to: email,
      subject: "Verification Code",
      react: VerificationEmail({ username, otp: verifyCode }),
    });
    return { success: true, message: "Verification email send successfully" };
  } catch (emailError) {
    console.log("Error while sending Verification email", emailError);
    return { success: false, message: "Failed to send verification email" };
  }
}
