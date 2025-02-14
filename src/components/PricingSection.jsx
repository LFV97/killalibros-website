export function PricingSection() {
    return (
      <section className="container my-4 text-center">
        <h2 className="text-light">Precios y Servicios</h2>
        <p className="text-light">
          Ofrecemos servicios personalizados para revisión ortotipográfica, de estilo o ambos.
        </p>
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th>Servicio</th>
              <th>Precio por palabra</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Revisión ortotipográfica</td>
              <td>0,015 €</td>
            </tr>
            <tr>
              <td>Revisión de estilo</td>
              <td>0,020 €</td>
            </tr>
            <tr>
              <td>Revisión ortotipográfica y de estilo</td>
              <td>0,030 €</td>
            </tr>
          </tbody>
        </table>
        <p className="text-light mt-3">
          Para solicitar un presupuesto personalizado, envíanos un correo con los siguientes datos:
        </p>
        <pre className="text-light text-start mx-auto col-6" style={{ overflow: "hidden" }}>
        <ul className="text-light text-start mx-auto">
            <li>Título</li>
            <li>Género</li>
            <li>Número de páginas</li>
            <li>¿Has utilizado alguna herramienta de corrección ortográfica o gramatical? (Si/No)</li>
            <li>¿Tienes alguna preferencia de estilo o formato? (Opcional)</li>
            <li>Servicios solicitados:
            <ul>
                <li>Revisión ortotipográfica</li>
                <li>Revisión de estilo</li>
                <li>Revisión ortotipográfica y de estilo</li>
            </ul>
            </li>
        </ul>
        </pre>
        <a href="mailto:info@killalibros.com" className="btn btn-primary">Solicitar presupuesto</a>
      </section>
    );
  }
  