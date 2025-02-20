import { useTranslation } from 'react-i18next';
import Header from '../components/Header';

export function AboutUs() {
    const { t } = useTranslation();
  
    return (
      <section className="container my-4 text-light">
        <Header />
        <h2 className="text-center mt-5">{t("about.title")}</h2>
        <h4 className="text-center my-4">{t("about.subtitle")}</h4>
        {t("about.sections", { returnObjects: true }).map((section, index) => (
          <div key={index} className="mb-4 col-8 mx-auto">
            <h5>{section.title}</h5>
            <p>{section.content}</p>
          </div>
        ))}
        <p className="text-center mt-4">
          {t("about.contact_text")} <a href="mailto:info@killalibros.com" className="text-light">info@killalibros.com</a>
        </p>
      </section>
    );
  }
  