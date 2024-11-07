import localFont from "next/font/local";
import "./globals.css";
import Head from "./head";

export const metadata = {
  title: "수원 개인회생 개인파산 전문 법무법인 에이파트",
  description:
    "수원 개인회생, 수원 개인파산, 수원 개인회생 전문 변호사, 수원 변호사, 수원 회생,",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head></Head>
      <body>
        {/* Google Tag Manager (noscript) - Body */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P9LKW4FQ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
}
