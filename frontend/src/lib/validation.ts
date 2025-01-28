import * as z from "zod";

export const LoginValidation = z.object({
  // TODO
  username: z
    .string()
    .min(3, { message: "Username size should be between 3 and 50 characters." })
    .max(50, { message: "Username size should be between 3 and 50 characters." }),
  // TODO
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." })
    .max(120, { message: "Password maximum size is 120 characters." }),
});

export const ResetPasswordValidation = z.object({
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." })
    .max(120, { message: "Password maximum size is 120 characters." }),
  verificationCode: z
    .string()
    .length(6, { message: "Verification code must be exactly 6 digits." })
    .regex(/^\d{6}$/, { message: "Verification code must be exactly 6 digits." }),
});

export const ResetPasswordContactValidation = z.object({
  contact: z.union([
    z.string().email({ message: "Invalid email address." }),
    z.string().regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number." }),
  ]),
});

export const EmployeeFormValidation = z.object({
  _id: z.string(),
  name: z.string().min(1, { message: "Fullname is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  jobTitle: z.string().min(1, { message: "Job title is required." }),
  properties: z.array(z.any()).optional(),
});

export const AccidentConfigurationValidation = z.object({
  capacityType: z.enum(["time", "count", "space"]),
  timeThreshold: z.number().min(1).optional(),
  countThreshold: z.number().min(10).optional(),
  spaceThreshold: z.number().min(1).optional(),
});

export const CameraFormValidation = z.object({
  ipAddress: z.string().regex(/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/, { message: "Invalid IP address." }),
  cameraType: z.string().min(1, { message: "Camera type is required." }),
  name: z.string().optional(),
  description: z.string().optional(),
});

export const AlertChannelValidation = z.object({
  owner: z.string(),
  channelType: z.enum(["email", "phone"]),
  alertDestination: z.union([
    z.string().email({ message: "Invalid email address." }),
    z.string().regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number." }),
  ]),
  message: z.string().min(1, { message: "Message is required." }),
});
