import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "RK Digital Media · Admin", template: "%s · RK Admin" },
  description: "Private operations dashboard for R.K Digital Media.",
  robots: { index: false, follow: false, noarchive: true, nosnippet: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
