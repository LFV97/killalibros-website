import React from "react";
import Header from "../components/Header";
import { PricingSection } from "../components/PricingSection";
import { ContactForm } from "../components/ContactForm";
import { useTranslation } from 'react-i18next';
import { StoreSection } from "../components/StoreSection";


export default function Home() {
  const { t, i18n } = useTranslation();

  return (
    <div className="container mx-auto">
      <Header />
      {/* <FreeStoryBar /> */}
      <div className="bg-info bg-opacity-75 text-black text-center py-2">
        <p><strong>«Filistín»</strong> Cuentos para apoyar a Palestina. Descarga gratuita <a href="https://drive.google.com/file/d/1kuS6P8fevdrXnNtpkfXWFWoskyOdEgr4/view" className="text-info">aquí</a>.</p>
      </div>
      <main className="p-8">
        <h2>{t("welcome")}</h2>
        <p>{t("description")}</p>
        <div className="carousel">
          {/* <img src="../images/portadas/011.jpg" width={20} alt="Libro destacado" /> */}
        </div>        
      </main>
      <StoreSection />
      <PricingSection />
      <ContactForm />
    </div>
  );
}
