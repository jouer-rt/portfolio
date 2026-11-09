import { buildRootMetadata } from "@/i18n/metadata";
import { RootDocument } from "../root-document";

export const metadata = buildRootMetadata("en");

export default function EnRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootDocument lang="en">{children}</RootDocument>;
}
