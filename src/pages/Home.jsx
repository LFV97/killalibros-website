import React from "react";
import Header from "../components/Header";
import { FreeStoryBar } from "../components/FreeStoryBar";
import { PricingSection } from "../components/PricingSection";
import { ContactForm } from "../components/ContactForm";
import { useTranslation } from 'react-i18next';
import { StoreSection } from "../components/StoreSection";
import { Footer } from "../components/Footer";
import NavbarTop from "../components/NavbarTop";


export default function Home() {

  return (
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
  );
}
