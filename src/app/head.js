// src/app/head.js
export default function Head() {
  return (
    <>
      <title>Your Website Title</title>
      <meta name="description" content="Your Website Description" />
      {/* Google Tag Manager - Head */}
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-P9LKW4FQ');`,
        }}
      />
    </>
  );
}
