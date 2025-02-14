export function ContactForm() {
    return (
      <section className="container my-4 text-center">
        <h2 className="text-light">Contáctanos</h2>
        <form className="text-start mx-auto" style={{ maxWidth: "600px" }}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label text-light">Nombre</label>
            <input type="text" id="name" className="form-control" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label text-light">Correo electrónico</label>
            <input type="email" id="email" className="form-control" required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label text-light">Mensaje</label>
            <textarea id="message" className="form-control" rows="5" required></textarea>
          </div>
          <button type="submit" className="btn btn-success">Enviar</button>
        </form>
      </section>
    );
  }