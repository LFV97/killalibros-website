import React from "react";
import Header from "../components/Header";
import { FreeStoryBar } from "../components/FreeStoryBar";
import { PricingSection } from "../components/PricingSection";
import { ContactForm } from "../components/ContactForm";
import { useTranslation } from 'react-i18next';
import { StoreSection } from "../components/StoreSection";
import { Footer } from "../components/Footer";


export default function Home() {
  const { t, i18n } = useTranslation();

  return (
    <div className="container mx-auto">
      <Header />
      <FreeStoryBar />
      <main>
        <h2>{t("welcome")}</h2>
        <p>{t("description")}</p>
      </main>
      <StoreSection />
      {/* <PublishedBooks /> */}
      <PricingSection />
      <ContactForm />
      <Footer />
    </div>
  );
}
