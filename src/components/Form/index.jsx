
function Form() {
  return (
    <section className="section-form ">
      <form className="section-form_form">
        <label htmlFor="name">Votre nom</label>
        <input type="text" name="name" id="name" required />
        <label htmlFor="message">Votre message</label>
        <textarea id="message" name="message"></textarea>
        <label htmlFor="email">E-mail</label>
        <input type="email" name="email" id="email" required />
        <button type="submit" value="Envoyer">
          Envoyer
        </button>
      </form>
    </section>
    
  );
}
export default Form;
