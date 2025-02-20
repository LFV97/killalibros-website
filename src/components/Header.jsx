import React from "react";
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { t, i18n } = useTranslation();
  
  return (
    <header className="bg-primary p3 text-center col-12">
      <h1 className="text-2xl font-bold">KillaLibros</h1>
      <nav>
        <a href="/" className="text-light mx-2">Inicio</a>
        <a href="/about" className="text-light mx-2">Acerca de</a>
      </nav>
      <div>
        <button onClick={() => i18n.changeLanguage("es")}>Español</button>
        <button onClick={() => i18n.changeLanguage("pt")}>Português</button>
      </div>
    </header>
  );
}
