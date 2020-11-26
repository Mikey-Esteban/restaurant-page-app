export const mainHeroData = {
  head: true,
  cta: true,
  slowStart: true,
  class: ['is-primary', 'main-hero', 'is-info'],
  size: 'is-large',
  heights: {
    min: '850px',
    max: '850px'
  },
  titleClass: ['has-text-info', 'has-text-weight-light', 'is-1', 'has-text-shadow'],
  titleText: 'Welcome to Veganic Corner',
  subtitleClass: ["has-text-link", 'has-text-shadow'],
  subtitleText: `come work, talk, commune.. but most importantly be hungry for delicious healthy eats.`
}

export const menuTeaserHeroData = {
  head: false,
  class: ['has-text-centered'],
  size: '',
  titleClass: ['has-text-link', 'is-4'],
  titleText: 'A Brilliant Menu',
  subtitleClass: ['has-text-link', 'is-6'],
  subtitleText: 'Paragraph Text. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.'
}

export const drinksData = {
  items: [
    {
      header: 'Pick me uppers',
      description: `We've partnered with blue bottle to bring you all the finest coffee to get you through to happy hour!`,
      item: 'Espresso $3.99'
    },
    {
      header: 'Time to unwind',
      description: `Domestic & Imported Beer, over 20 wines, and innovative and fun cocktails.`,
      item: 'Gin & Tonic $6.99'
    }
  ],
  imgOne: {
    size: 'is-5by4',
    src: 'assets/food/coffee.jpg'
  },
  imgTwo: {
    size: 'is-3by4',
    src: 'assets/food/cocktail2.jpg'
  }
}

export const foodData = {
  items: [
    {
      header: 'Mains',
      description: `Lisa expertly crafts dishes from local & fresh ingredients to give you that homemade love.`,
      item: 'Broccoli Rabe Fettucine $13.99'
    },
    {
      header: 'Sweets',
      description: `Janes' cookies, brownies, cupcakes are second to none!`,
      item: 'Brownie A la Mode $5.99'
    }
  ],
  imgOne: {
    size: 'is-4by3',
    src: 'assets/food/pasta.jpg'
  },
  imgTwo: {
    size: 'is-3by4',
    src: 'assets/food/brownie.jpg'
  }
}

export const chefOne = {
    title: 'Executive Chef',
    name: 'Lisa Shaw',
    bio: `Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis venenatis efficitur. Sit amet, consectetur adipiscing elit`,
    figColClasses: ["column", "is-3", "is-offset-2", "level-left"],
    infoColClasses: ["column", "is-6", "level-right", "mr-6"],
    figSrc: 'assets/images/chef.jpg',
    figRatio: 'is-2by3',
    infoColor: 'is-success'
  }

export const chefTwo = {
    title: 'Head Pastry Chef',
    name: 'Jane Marshall',
    bio: `Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis venenatis efficitur. Sit amet, consectetur adipiscing elit`,
    figColClasses: ["column", "is-5", "level-right", "mr-6"],
    infoColClasses: ["column", "is-5", "is-offset-1", "level-left"],
    figSrc: 'assets/images/chef2.jpg',
    figRatio: 'is-3by2',
    infoColor: 'is-link',
    reverse: true
  }

export default { mainHeroData, menuTeaserHeroData, drinksData, foodData,chefOne, chefTwo }
