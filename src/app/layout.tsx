import "./globals.css";

/* Import des styles */
import "@/styles/bootstrap.min.css";
import "@/styles/style.css";
import "@/styles/welcome.css";
import "@/styles/about.css";
import "@/styles/values.css";
import "@/styles/goals.css";
import "@/styles/course.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">

      <head>
        <meta charSet="utf-8" />
        <title>Fabien VITRAT</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>

      <body className="light_theme" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}