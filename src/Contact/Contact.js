import Hero from '../components/Hero'
import ContactSection from './ContactSection'
import { mainHeroData } from './helpers/data'

const Contact = () => {

  const mainDIV = document.querySelector('#content');
  const HERO = Hero(mainHeroData)
  const contactSECTION = ContactSection();
  mainDIV.append(HERO, contactSECTION);

}

export default Contact
