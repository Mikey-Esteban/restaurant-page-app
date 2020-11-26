import ContactSection from './ContactSection'

const Contact = () => {

  const mainDIV = document.querySelector('#content');
  const contactSECTION = ContactSection();
  mainDIV.append(contactSECTION);

}

export default Contact
