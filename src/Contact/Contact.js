import ChefBio from './components/ChefBio'
import ContactSection from './components/ContactSection'

const Contact = () => {

  const mainDIV = document.querySelector('#content');
  const chefBioDIV = ChefBio();
  const contactSECTION = ContactSection();
  mainDIV.append(chefBioDIV, contactSECTION);

}

export default Contact
