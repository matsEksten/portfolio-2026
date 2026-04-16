import { notFound } from "next/navigation";

// components
import Navbar from "@/components/Navbar/Navbar";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    lang: string;
  }>;
};

export default async function Layout({ children, params }: LayoutProps) {
  const { lang } = await params;

  if (lang !== "sv" && lang !== "en") {
    notFound();
  }

  return (
    <>
      <Navbar lang={lang} />
      {children}
    </>
  );
}
