import React from "react";
import Header from "../components/Header";
import { FreeStoryBar } from "../components/FreeStoryBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { PricingSection } from "../components/PricingSection";
import { ContactForm } from "../components/ContactForm";
import { useTranslation } from 'react-i18next';
import { StoreSection } from "../components/StoreSection";
import { Footer } from "../components/Footer";
import NavbarTop from "../components/NavbarTop";
import { Helmet } from 'react-helmet-async';


export default function Home() {

  return (
    <>
      <Helmet>
      <script type="application/ld+json">
      {`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "KillaLibros",
          "url": "https://killalibros.com",
          "logo": "https://killalibros.com/assets/logo.png",
          "description": "Editorial de coedición especializada en corrección ortotipográfica y diseño de libros.",
          "sameAs": [
            "https://www.facebook.com/killalibros",
            "https://www.instagram.com/killalibros_editorial/",
            "https://www.threads.net/@killalibros_editorial"
          ]
        }
      `}
      </script>
        <title>KillaLibros - Editorial de Coedición</title>
        <meta name="description" content="Publica tu libro con KillaLibros, una editorial de coedición con servicios profesionales de corrección y diseño." />
        <meta name="keywords" content="Editorial, coedición, publicar libro, corrección ortotipográfica, diseño de portada, autopublicación" />
        <meta name="author" content="KillaLibros" />
        <meta property="og:title" content="KillaLibros - Editorial de Coedición" />
        <meta property="og:description" content="Publica tu libro con KillaLibros. Servicios de edición, corrección y diseño profesional." />
        <meta property="og:image" content="https://killalibros.com/assets/logo.png" />
        <meta property="og:url" content="https://killalibros.com/" />
        <meta name="twitter:title" content="KillaLibros - Editorial de Coedición" />
        <meta name="twitter:description" content="Publica tu libro con KillaLibros. Servicios profesionales de edición y diseño." />
        <meta name="twitter:image" content="https://killalibros.com/assets/logo.png" />
      </Helmet>
      <div className="container mx-auto">
      <NavbarTop />
      <Header />
      {/* <FreeStoryBar /> */}
      <StoreSection />
      {/* <PublishedBooks /> */}
      <PricingSection />
      <ContactForm />
      <Footer />
    </div>
    </>
  );
}
