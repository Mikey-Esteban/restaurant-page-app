import Hero from '../components/Hero'
import Observer from '../components/Observer'
import ContactSection from './ContactSection'
import { mainHeroData } from './helpers/contactData'

const Contact = () => {

  const mainDIV = document.querySelector('#content');
  Observer();
  const HERO = Hero(mainHeroData)
  const contactSECTION = ContactSection();
  mainDIV.append(HERO, contactSECTION);

}

export default Contact
