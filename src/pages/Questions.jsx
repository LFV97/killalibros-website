import { useTranslation } from 'react-i18next';
import NavbarTop from "../components/NavbarTop";

export function Questions() {
    const { t } = useTranslation();
  
    return (
      <section className="container my-4 text-dark">
        <NavbarTop />
        <h2 className="text-center pt-3 mt-5" style={{overflow: 'hidden'}}>{t("faq.title")}</h2>
        <hr className="style-seven" />
        <h3 className='col-8 mx-auto py-3' style={{overflow: 'hidden'}}>{t("faq.description")}</h3>
        {t("faq.questions", { returnObjects: true }).map((q, index) => (
          <div key={index} className="mb-4 col-8 mx-auto">
            <h4 className='h5'><strong>{q.question}</strong></h4>
            <p>{q.answer}</p>
            <hr className="style-seven mt-4 w-70" />
          </div>
        ))}
        <p className="text-center mt-4">
          {t("faq.contact_text")} <a href="mailto:info@killalibros.com" className="text-dark">info@killalibros.com</a>
        </p>
      </section>
    );
  }