import { useTranslation } from 'react-i18next';
import "../styles/PricingSection.css"; 

export function PricingSection() {
  const { t } = useTranslation();
  return (
    <section className="container my-5 text-center">
      <h2 className="display-5 text-dark mt-5 pricing-title">{t("pricing.title")}</h2>
      <hr className="style-seven" />
      <p className="text-dark">{t("pricing.description")}</p>

      <div className="pricing-table mx-auto">
        <table className="table">
          <thead>
            <tr>
              <th>{t("pricing.service")}</th>
              <th>{t("pricing.price_per_word")}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{t("pricing.orthotypographic_review")}</td>
              <td>0,015 €</td>
            </tr>
            <tr>
              <td>{t("pricing.style_review")}</td>
              <td>0,020 €</td>
            </tr>
            <tr>
              <td>{t("pricing.orthotypographic_and_style_review")}</td>
              <td>0,030 €</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-dark mt-3">{t("pricing.request_quote")}</p>
      <ul className="pricing-list text-dark text-start mx-auto col-8">
        <li>{t("pricing.title_field")}</li>
        <li>{t("pricing.genre")}</li>
        <li>{t("pricing.pages")}</li>
        <li>{t("pricing.spellcheck_used")}</li>
        <li>{t("pricing.style_preference")}</li>
        <li>{t("pricing.requested_services")}:
          <ul>
            <li>{t("pricing.orthotypographic_review")}</li>
            <li>{t("pricing.style_review")}</li>
            <li>{t("pricing.orthotypographic_and_style_review")}</li>
          </ul>
        </li>
      </ul>

      <a href="mailto:info@killalibros.com" className="btn btn-primary request-btn">
        {t("pricing.request_button")}
      </a>
    </section>
  );
  
}

// return (
//   <section className="container my-4 text-center">
//     <h2 className="display-5 text-dark mt-5" style={{overflow: 'hidden'}}>{t("pricing.title")}</h2>
//     <hr className="style-seven" />
//     <p className="text-dark">{t("pricing.description")}</p>
//     <table className="table table-dark table-striped mx-auto" style={{ width: "80%" }}>
//       <thead>
//         <tr>
//           <th>{t("pricing.service")}</th>
//           <th>{t("pricing.price_per_word")}</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>{t("pricing.orthotypographic_review")}</td>
//           <td>0,015 €</td>
//         </tr>
//         <tr>
//           <td>{t("pricing.style_review")}</td>
//           <td>0,020 €</td>
//         </tr>
//         <tr>
//           <td>{t("pricing.orthotypographic_and_style_review")}</td>
//           <td>0,030 €</td>
//         </tr>
//       </tbody>
//     </table>
//     <p className="text-dark mt-3">{t("pricing.request_quote")}</p>
//     <ul className="text-dark text-start mx-auto col-8">
//       <li>{t("pricing.title_field")}</li>
//       <li>{t("pricing.genre")}</li>
//       <li>{t("pricing.pages")}</li>
//       <li>{t("pricing.spellcheck_used")}</li>
//       <li>{t("pricing.style_preference")}</li>
//       <li>{t("pricing.requested_services")}:
//         <ul>
//           <li>{t("pricing.orthotypographic_review")}</li>
//           <li>{t("pricing.style_review")}</li>
//           <li>{t("pricing.orthotypographic_and_style_review")}</li>
//         </ul>
//       </li>
//     </ul>
//     <a href="mailto:info@killalibros.com" className="btn btn-primary">{t("pricing.request_button")}</a>
//   </section>
// );