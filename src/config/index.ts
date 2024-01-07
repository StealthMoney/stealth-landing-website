import { config } from "dotenv";
config();

export const baseUrl =
  process.env.BASE_URL ?? process.env.NEXT_PUBLIC_BASE_URL ?? "";

if (!baseUrl) {
  throw new Error("BASE_URL is not set");
}
