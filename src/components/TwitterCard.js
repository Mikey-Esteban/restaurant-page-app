const TwitterCard = () => {

  // Create CARD
  const CARD = document.createElement('DIV');
  CARD.classList.add('card', 'twitter-card');
    // div for card content
    const cardContentDIV = document.createElement('DIV');
    cardContentDIV.classList.add('card-content');
      // div for media
      const mediaDIV = document.createElement('DIV');
      mediaDIV.classList.add('media');
        // div for media left
        const mediaLeftDIV = document.createElement('DIV');
        mediaLeftDIV.classList.add('media-left');
          // twitter img
          const twitterFIGURE = document.createElement('FIGURE');
          twitterFIGURE.classList.add('image', 'is-48x48');
            const twitterIMG = document.createElement('IMG');
            twitterIMG.src = 'https://bulma.io/images/placeholders/96x96.png';
            twitterIMG.alt= 'Placeholder Image';
          // IMG done, append to FIGURE
          twitterFIGURE.append(twitterIMG);
        // FIGURE done, append to mediaLeftDIV
        mediaLeftDIV.append(twitterFIGURE);
        // div for media content
        const mediaContentDIV = document.createElement('DIV');
        mediaContentDIV.classList.add('media-content');
          // twitter name
          const twitterNameP = document.createElement('P');
          twitterNameP.classList.add('title', 'is-4');
          twitterNameP.innerText = 'John Smith';
          // twitter handle
          const twitterHandleP = document.createElement('P');
          twitterHandleP.classList.add('subtitle', 'is-6');
          twitterHandleP.innerText = '@johnsmith';
        // twitterNameP and twitterHandleP done, append to mediaLeftDIV
        mediaContentDIV.append(twitterNameP, twitterHandleP);
      // mediaLeftDIV, mediaContentDIV, append to mediaDIV
      mediaDIV.append(mediaLeftDIV, mediaContentDIV);

      // div for content
      const contentDIV = document.createElement('DIV');
      contentDIV.classList.add('content');
      contentDIV.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a>@bulmaio</a>.<a href="#">#css</a> <a href="#">#responsive</a><br><time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>';
    // mediaDIV & contentDIV done, append to cardContentDIV
    cardContentDIV.append(mediaDIV, contentDIV);
  // cardContentDIV done, append to CARD
  CARD.append(cardContentDIV);

  return CARD

}

export default TwitterCard
