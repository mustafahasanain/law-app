import type { Metadata, Viewport } from "next";
import { Cairo, Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "next-themes";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cairo = Cairo({
  variable: "--font-arabic",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#333333",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "D.Baraa A. Khaleel - Criminal Justice Attorney",
    template: "%s | D.Baraa A. Khaleel",
  },
  description:
    "D.Baraa A. Khaleel - Experienced Criminal Justice Attorney providing aggressive legal representation in criminal defense, personal injury, family law, business disputes, and more. Over 25 years of dedicated service with a 98% success rate. Legal Consultation available 24/7.",
  keywords: [
    "law firm",
    "criminal defense attorney",
    "personal injury lawyer",
    "family law",
    "business disputes",
    "DUI defense",
    "legal representation",
    "Legal Consultation",
    "24/7 emergency lawyer",
    "بغداد, المنصور, شارع مطعم الساعة",
    "litigation",
    "civil rights",
  ],
  authors: [{ name: "D.Baraa A. Khaleel" }],
  creator: "D.Baraa A. Khaleel",
  publisher: "D.Baraa A. Khaleel",
  metadataBase: new URL("https://thelawfirm.com"),
  openGraph: {
    title: "D.Baraa A. Khaleel - Criminal Justice Attorney",
    description:
      "Experienced Criminal Justice Attorneys. Over 25 years of dedicated legal representation with a 98% success rate. Legal Consultation available 24/7.",
    type: "website",
    siteName: "D.Baraa A. Khaleel",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "D.Baraa A. Khaleel - Criminal Justice Attorney",
    description:
      "Experienced Criminal Justice Attorneys. Over 25 years of dedicated legal representation with a 98% success rate.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/images/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/favicon.svg" type="image/svg+xml" />
      </head>
      <body
        className={`${montserrat.variable} ${playfair.variable} ${cairo.variable} antialiased bg-background text-foreground font-sans transition-colors duration-300`}
        style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
