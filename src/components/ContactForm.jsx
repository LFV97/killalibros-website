import React, { useState } from "react";

export function ContactForm() {
  const [successMessage, setSuccessMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    // window.location.href = `mailto:info@killalibros.com?subject=Mensaje de ${name}&body=${encodeURIComponent(message)}%0A%0AEmail: ${email}`;
    
    setSuccessMessage("¡Tu mensaje ha sido enviado con éxito! Te responderemos pronto.");
    e.target.reset(); // Limpia el formulario después del envío

    // emailjs.sendForm("tu_service_id", "tu_template_id", e.target, "tu_user_id")
    //   .then((result) => {
    //     setSuccessMessage("¡Tu mensaje ha sido enviado con éxito! Te responderemos pronto.");
    //     setFormSubmitted(true);
    //     e.target.reset();
    //   }, (error) => {
    //     setSuccessMessage("Hubo un error al enviar tu mensaje. Inténtalo de nuevo.");
    //   });
  };

  return (
    <section className="container my-4 text-center mt-5">
      <h2 className="text-dark" style={{ overflow: "hidden" }}>Contáctanos</h2>
      <form className="text-start mx-auto" style={{ maxWidth: "600px" }} onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label text-dark">Nombre</label>
          <input type="text" id="name" name="name" className="form-control" required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label text-dark">Correo electrónico</label>
          <input type="email" id="email" name="email" className="form-control" required />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label text-dark">Mensaje</label>
          <textarea id="message" name="message" className="form-control" rows="5" required></textarea>
        </div>
        <button type="submit" className="btn btn-success">Enviar</button>
      </form>
      {successMessage && <p className="text-success mt-3">{successMessage}</p>}
    </section>
  );
}
