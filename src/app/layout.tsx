import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#E3000F",
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pasangindihometasik.com"), // Ganti dengan domain asli nanti
  title: "Promo Pasang IndiHome Tasikmalaya | Sales Resmi",
  description: "Sales Force Resmi IndiHome. Melayani pendaftaran pasang baru WiFi IndiHome area Kabupaten Tasikmalaya. Proses cepat, resmi, dan dibantu sampai nyala.",
  keywords: ["pasang indihome tasikmalaya", "promo indihome tasik", "sales indihome tasikmalaya", "wifi murah tasik", "daftar indihome tasikmalaya", "harga paket indihome"],
  authors: [{ name: "Ajat Sudrajat" }],
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "IndiHome Tasik",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    title: "Promo Pasang IndiHome Tasikmalaya | Ajat Sudrajat",
    description: "Daftar IndiHome sekarang! Proses cepat, 100% resmi, dan dibantu sampai WiFi nyala. Promo khusus area Kabupaten Tasikmalaya.",
    url: "/",
    siteName: "Promo IndiHome Tasikmalaya",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Promo Pasang IndiHome Tasikmalaya",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Promo Pasang IndiHome Tasikmalaya",
    description: "Daftar IndiHome sekarang! Proses cepat, resmi, dan dibantu sampai WiFi nyala.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.variable} min-h-full flex flex-col antialiased`}>
        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-NBF7RVK2JJ" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NBF7RVK2JJ');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}
