export const heroData = {
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
    },
    {
      header: 'Time to unwind',
      description: `Domestic & Imported Beer, over 20 wines, and innovative and fun cocktails.`,
    }
  ],
  imgOne: {
    size: 'is-5by4',
    src: 'assets/food/coffee.jpg'
  },
  imgTwo: {
    size: 'is-3by5',
    src: 'assets/food/cocktail.jpg'
  }
}

export default { heroData, drinksData }
