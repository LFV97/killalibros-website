import { useTranslation } from 'react-i18next';
import Header from '../components/Header';

export function Questions() {
    const { t } = useTranslation();
  
    return (
      <section className="container my-4 text-light">
        <Header />
        <h2 className="text-center my-5">{t("faq.title")}</h2>
        <h3 className='col-8 mx-auto'>{t("faq.description")}</h3>
        {t("faq.questions", { returnObjects: true }).map((q, index) => (
          <div key={index} className="mb-3 col-8 mx-auto">
            <h4>{q.question}</h4>
            <p>{q.answer}</p>
          </div>
        ))}
        <p className="text-center mt-4">
          {t("faq.contact_text")} <a href="mailto:info@killalibros.com" className="text-light">info@killalibros.com</a>
        </p>
      </section>
    );
  }