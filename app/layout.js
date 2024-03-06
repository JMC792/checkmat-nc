// These styles apply to every route in the application
import Footer from 'app/(Footer)/Footer';
import Navbar from 'app/(Navbar)/Navbar';
import language from '/dictionaries/en.json';
import '@styles/globals.css'
import { Inter } from "next/font/google"
import logo from "public/icons/logo.svg"

export const metadata = {
  title: {
    template: "%s | Dynasty BJJ ",
    default: "Dynasty BJJ",
  },
  description: {default: "Queen City Web Solutions is a dynamic web services provider based in Charlotte, North Carolina. Our dedicated team specializes in delivering top-tier web design and development solutions, seamlessly merging creativity and technology to craft engaging online experiences. With a strong focus on cybersecurity, we ensure that your digital journey is not only visually captivating but also fortified against potential threats."},
  appliationName: "Queen City Web Solutions",
  keywords: ["Queen","City","Web Solutions","Charlotte","North Carolina"],
  creator: 'Mauricio Chavez',
  publisher: 'Queen City Web Solutions',
};

const inter =Inter({subsets:['latin']})

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar
          link1 = {language.navbar.link1}
          link2 = {language.navbar.link2}
          link3 = {language.navbar.link3}
          link4 = {language.navbar.link4}
          link5 = {language.navbar.link5}
          language = {language.navbar.locale.spanish}
          external1 = {[language.navbar.external.title,language.navbar.external.link]}
          logo = {logo}
        />
          {children}
        <Footer
          overview = {[
            language.footer.overview.title,
            language.footer.overview.paragraph,
            logo
          ]}
          internal={[
            language.navbar.link1,
            language.navbar.link2,
            // language.navbar.link3,
            language.navbar.link4,
            language.navbar.link5,
          ]}
          outgoing={[
            [language.footer.socialMedia.media1.title, language.footer.socialMedia.media1.link],
            [language.footer.socialMedia.media2.title, language.footer.socialMedia.media2.link],
            [language.footer.socialMedia.media3.title, language.footer.socialMedia.media3.link],
            // [language.footer.socialMedia.media4.title, language.footer.socialMedia.media4.link],
            // [language.footer.socialMedia.media5.title, language.footer.socialMedia.media5.link]
          ]}
          trademark={[
            language.footer.trademark.year,
            language.footer.trademark.company,
            language.footer.trademark.rights
          ]}
        />
      </body>
    </html>
  );
}
