import { config } from "dotenv";
config();

export const baseUrl =
  process.env.BASE_URL ?? process.env.NEXT_PUBLIC_BASE_URL ?? "";

export const twak_property_id = process.env.TWAK_PROPERTY_ID;
export const twak_WIDGET_id = process.env.TWAK_WIDGET_ID;

if (!baseUrl) {
  throw new Error("BASE_URL is not set");
}

if (!twak_property_id || !twak_WIDGET_id) {
  throw new Error("TWAK_PROPERTY_ID or TWAK_WIDGET_ID is not set");
}
