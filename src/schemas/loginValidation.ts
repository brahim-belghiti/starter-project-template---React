import { z } from "zod";

const formSchema = z.object({
  email: z
    .string({ required_error: "Email address is required" })
    .email({
      message: "Email address is not valid.",
    })
    .max(50, {
      message: "Email address must not exceed 50 characters",
    }),
  password: z
    .string({ required_error: "Password is required" })
    .min(8, {
      message: "The password must be at least 6 characters long.",
    })
    .max(50, {
      message: "must not exceed 50 characters",
    }),
});

export { formSchema };
