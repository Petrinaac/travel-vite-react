import Main from '../../components/Main';
import ContactForm from '../../components/ContactForm';

function Contact() {
  return (
    <div>
      <Main 
      class="main-mid"
      mainImg="/img/2.jpg"
      title="About"
      btnClass="hide"
      />
      <ContactForm />
    </div>
  )
}

export default Contact;