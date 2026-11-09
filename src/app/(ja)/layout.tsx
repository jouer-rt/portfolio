import { buildRootMetadata } from "@/i18n/metadata";
import { RootDocument } from "../root-document";

export const metadata = buildRootMetadata("ja");

export default function JaRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootDocument lang="ja">{children}</RootDocument>;
}
