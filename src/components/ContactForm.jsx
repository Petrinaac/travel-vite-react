import './ContactFormStyle.css'

function ContactForm() {
  return(
    <div className="form-container">
      <h1>Send a Message to us!</h1>
      <form>
        <input placeholder='Name' type="text" />
        <input placeholder='Email' type="text" />
        <input placeholder='Subject' type="text" />
        <textarea placeholder='Message' rows={4}></textarea>
        <button>Send Message</button>
      </form>
    </div>
  )
}

export default ContactForm;