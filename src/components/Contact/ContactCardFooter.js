import { socials } from './helpers/socialsData'

const ContactCardFooter = () => {
  // Create Card Footer
  const FOOTER = document.createElement('FOOTER');
  FOOTER.classList.add('card-footer');


  for (let social of socials) {
    const P = document.createElement('P');
    P.classList.add('card-footer-item');
    const SPAN = document.createElement('SPAN');
    SPAN.innerHTML = social['html'];
    P.append(SPAN);
    FOOTER.append(P);
  }

  return FOOTER
}

export default ContactCardFooter
