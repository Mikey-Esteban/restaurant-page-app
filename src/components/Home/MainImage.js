import TwitterCard from './TwitterCard'

const MainImage = () => {
  console.log('main image ran');
  const mainDiv = document.querySelector('#content');

  // Create image container block, tag to float,
  const imgCONTAINER = document.createElement('DIV');
  imgCONTAINER.classList.add('block', 'image-container');
  const TAG = document.createElement('DIV');
  TAG.classList.add('tag');

  const { CARD } = TwitterCard();

  // CARD done, append to TAG
  TAG.append(CARD);

  // create Main Restaurant IMG
  const restaurantFIGURE = document.createElement('FIGURE');
  restaurantFIGURE.classList.add('image', 'is-5by4');
    // restaurant img
    const restaurantIMG = document.createElement('IMG');
    restaurantIMG.src = 'assets/openseating.jpg';
  restaurantFIGURE.append(restaurantIMG);

  // TAG and restaurantFIGURE done, append to imgCONTAINER
  imgCONTAINER.append(TAG, restaurantFIGURE);
  mainDiv.append(imgCONTAINER);

}

export default MainImage
