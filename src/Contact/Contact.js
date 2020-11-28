import EditHero from '../components/EditHero'
import Observer from '../components/Observer'
import ContactSection from './ContactSection'
import { mainHeroData } from './helpers/contactData'

const Contact = () => {

  const mainDIV = document.querySelector('#content');
  Observer();
  EditHero(mainHeroData)
  const contactSECTION = ContactSection();
  mainDIV.append(contactSECTION);

}

export default Contact
