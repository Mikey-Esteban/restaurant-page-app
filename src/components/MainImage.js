import TwitterCard from './TwitterCard'

const MainImage = () => {

  // Create image container block, tag to float,
  const imgCONTAINER = document.createElement('DIV');
  imgCONTAINER.classList.add('block', 'image-container');


  const twitterPLACER = document.createElement('DIV');
  twitterPLACER.classList.add('tagging');

  const CARD = TwitterCard();

  // CARD done, append to TAG
  twitterPLACER.append(CARD);

  // create Main Restaurant IMG
  const restaurantFIGURE = document.createElement('FIGURE');
  restaurantFIGURE.classList.add('image', 'is-5by4', 'background-image');
    // restaurant img
    const restaurantIMG = document.createElement('IMG');
    restaurantIMG.src = 'assets/openseating.jpg';
  restaurantFIGURE.append(restaurantIMG);

  // TAG and restaurantFIGURE done, append to imgCONTAINER
  imgCONTAINER.append(twitterPLACER, restaurantFIGURE);

  return imgCONTAINER;

}

export default MainImage
