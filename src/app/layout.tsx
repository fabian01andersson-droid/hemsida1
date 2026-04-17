import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";
import { CookieBanner } from "@/components/CookieBanner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "BridgeToGrants — Europas ledande EU-finansieringspartner",
    template: "%s | BridgeToGrants",
  },
  description:
    "Vi kombinerar seniora EU-experter fran Vinnova och EU-kommissionen med AI-verktyg. 92% success rate, 2.4 miljarder SEK beviljat. Boka en gratis Reality Check.",
  metadataBase: new URL("https://bridgetogrants.se"),
  openGraph: {
    type: "website",
    locale: "sv_SE",
    siteName: "BridgeToGrants",
    title: "BridgeToGrants — Europas ledande EU-finansieringspartner",
    description:
      "Seniora EU-experter + AI-kraft. 92% success rate. Full lifecycle-stod for foretag och kommuner over hela Europa.",
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sv"
      className={`${inter.variable} ${manrope.variable} h-full`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "BridgeToGrants",
                url: "https://bridgetogrants.se",
                logo: "https://bridgetogrants.se/logo.png",
                description:
                  "Sveriges enda EU-finansieringsbyrå som kombinerar seniora experter från Vinnova och EU-kommissionen med AI-verktyg. 68% beviljandegrad — 4× EU-snittet. 842 MSEK säkrad finansiering.",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Stockholm",
                  addressCountry: "SE",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 59.3293,
                  longitude: 18.0686,
                },
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+46700000000",
                  contactType: "customer service",
                  availableLanguage: ["Swedish", "English"],
                },
                areaServed: {
                  "@type": "GeoCircle",
                  geoMidpoint: {
                    "@type": "GeoCoordinates",
                    latitude: 59.3293,
                    longitude: 18.0686,
                  },
                  geoRadius: "3000",
                },
                priceRange: "$$$$",
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "127",
                },
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "EU-finansieringstjänster",
                  itemListElement: [
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "15-min Reality Check",
                        description:
                          "Kostnadsfri 15-minuters bedömning av ert projekts chanser till EU-finansiering.",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Quick Scan",
                        description:
                          "2-sidors analys av er projektidé mot relevanta EU-program. Leverans inom 5 arbetsdagar.",
                        price: "4900",
                        priceCurrency: "SEK",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Strategisk Kapitalisering",
                        description:
                          "Full ansökningsskrivning för Horizon Europe, EIC Accelerator, LIFE, Eurostars m.fl.",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Post-Award Management",
                        description:
                          "Ekonomisk rapportering, timredovisning, revision och slutrapportering för beviljade EU-projekt.",
                      },
                    },
                  ],
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Hur upprätthåller BridgeToGrants en beviljandegrad på 68%?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Vår metodik innefattar en granskningsprocess i flera steg utförd av tidigare EU-utvärderare. Vi driver endast vidare projekt som överstiger de fastställda tröskelvärdena för excellens och impact. Vi tackar nej till 85% av alla förfrågningar.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Erbjuder ni stöd för post-award management och efterlevnad?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Ja. Våra seniora rådgivare erbjuder stöd genom hela livscykeln — ekonomisk rapportering, timredovisning, revision och slutrapportering — för att minimera revisionsrisker och säkra den totala bidragsvolymen.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Vilken är er urvalspolicy för nya klientåtaganden?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Vi tillämpar ett rigoröst 'Quality-First'-mandat. Vi tackar nej till cirka 85% av alla inkommande förfrågningar för att fokusera vårt kapital på de projekt som har högst sannolikhet för framgångsrik finansiering.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Vad kostar BridgeToGrants tjänster?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Vi erbjuder en kostnadsfri 15-minuters Reality Check. Quick Scan kostar 4 900 kr. Ansökningsskrivning prissätts per program med transparent arvodesstruktur. Vi erbjuder även resultatbaserade prismodeller för kvalificerade projekt.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Kan ni bistå med konsortiebygge för Horizon Europe?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Vårt nätverk omfattar ledande industriella och akademiska aktörer i EU. Vi konstruerar strategiskt konsortier för att säkerställa den geografiska och tekniska balans som krävs för att vinna.",
                    },
                  },
                ],
              },
            ]),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Chatbot />
        <CookieBanner />
      </body>
    </html>
  );
}
