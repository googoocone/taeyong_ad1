import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "수원 개인회생 개인파산 전문 법무법인 에이파트",
  description:
    "수원 개인회생 개인파산 전문 법무법인 에이파트 수원 김태용 변호사입니다.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16722031338"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16722031338');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
