import { headers } from "next/headers";
import { redirect } from "next/navigation";
export default async function Page() {
  const h = await headers();

  const country = h.get("x-vercel-ip-country") || h.get("x-country") || "";
  const acceptLanguage = h.get("accept-language") || "";

  const isSweden = country.toUpperCase() === "SE";
  const prefersSwedish = acceptLanguage.toLowerCase().startsWith("sv");

  if (isSweden || prefersSwedish) {
    redirect("/sv");
  }

  redirect("/en");
}
