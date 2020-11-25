import { cardData } from '../helpers/contactData'

const ContactCard = () => {

  const cardCONTENT = document.createElement('DIV');
  cardCONTENT.classList.add('card-content');

  for (let data of cardData) {
    const LEVEL = document.createElement('DIV');
    LEVEL.classList.add('level');
    const levelLEFT = document.createElement('DIV');
    levelLEFT.classList.add('level-left');

    const iconSPAN = document.createElement('SPAN');
    iconSPAN.classList.add('icon', 'is-small', 'is-left', 'mr-2', 'has-text-success');
    const ICON = document.createElement('I');
    ICON.classList.add('fas', data['icon']);
    iconSPAN.append(ICON);
    levelLEFT.append(iconSPAN);

    if (data['different']) {
      const textSPAN = document.createElement('SPAN');
      textSPAN.classList.add('mr-2');
      textSPAN.innerHTML = `<strong>${data['type']}</strong>:`;
      const DIV = document.createElement('DIV');
      for (let hour of data['value']) {
        const P = document.createElement('P');
        P.classList.add('is-size-7');
        P.innerText = hour;
        DIV.append(P);
      }
      levelLEFT.append(iconSPAN,textSPAN,DIV);
    }
    else {
      const textSPAN = document.createElement('SPAN');
      textSPAN.innerHTML = `<strong>${data['type']}</strong>: ${data['value']}`;
      levelLEFT.append(iconSPAN, textSPAN);
    }

    LEVEL.append(levelLEFT);
    cardCONTENT.append(LEVEL);
  }

  return cardCONTENT
  
}

export default ContactCard
