/* eslint-disable @next/next/no-head-element */
import '../styles/globals.css';
import '../styles/estilos.scss';

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Bicing</title>
        {/* ICON */}
        <link rel="icon" href={require('../public/bici-bicing.ico')} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        {/* GOOGLE API'S AND FONTS */}
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800&family=Satisfy&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        {/* META */}
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
      </head>

      {/* BODY CONTENTS */}
      <body>{children}</body>
    </html>
  );
}
