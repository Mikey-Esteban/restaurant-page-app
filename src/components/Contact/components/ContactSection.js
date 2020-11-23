import ContactCard from './ContactCard'
import ContactCardFooter from './ContactCardFooter'

const ContactSection = () => {

  const SECTION = document.createElement('DIV');
  SECTION.classList.add('section');
  const COLUMNS = document.createElement('DIV');
  COLUMNS.classList.add('columns');
  const COLUMN = document.createElement('DIV');
  COLUMN.classList.add('column', 'is-6', 'is-offset-3');

  ////fdsaf sfdsafasdf fdsaf
  const CARD = document.createElement('DIV');
  CARD.classList.add('card');

  const cardCONTENT = ContactCard();

  // Create Card Footer
  const FOOTER = ContactCardFooter();

  cardCONTENT.append(FOOTER);
  CARD.append(cardCONTENT);
  COLUMN.append(CARD);
  COLUMNS.append(COLUMN);
  SECTION.append(COLUMNS);

  return SECTION
}

export default ContactSection
