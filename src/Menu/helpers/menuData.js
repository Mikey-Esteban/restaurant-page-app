const appsNames = ['Garden Medley Salad', 'Butternut Squash Soup'];
const mainsNames = ['Vegan Gnocchi Pesto', 'Not Your Moms Fried Chickn', 'Turky Burgers'];
const dessertsNames = ['All Vegan Chocolate Chip Cookie', 'Classic Donut', 'Vegan French Toast'];

export const mainHeroData = {
  head: true,
  cta: false,
  slowStart: false,
  class: ['is-primary', 'main-hero', 'is-info'],
  size: '',
  heights: {
    min: '250px',
    max: '300px'
  },
  titleClass: ['has-text-info', 'has-text-weight-light', 'is-3', 'has-text-shadow', 'mt-5'],
  titleText: 'Always fresh & local ingredients made everyday',
  subtitleClass: ["has-text-link", 'has-text-shadow'],
  subtitleText: `...and we're sure you've heard about our coffee`
}

const heroData = {
  head: false,
  class: ['is-primary'],
  size: '',
  titleClass: ['has-text-grey-darker'],
  titleText: 'Always fresh & local ingredients made everyday',
  subtitleClass: [],
  subtitleText: `...and we're sure you've heard about our coffee`
}

export const menuNames = [ 'Light Bites', 'Empty Stomach Quenchers', 'Sweet Tooth Much?'];

export const foodInfo = {
  'Garden Medley Salad': {
    'description': 'fdsafdsafdsafdsa',
    'price': 7.99
  },
  'Butternut Squash Soup': {
    'description': 'fdsafdsafdsafdsa',
    'price': 7.99
  },
  'Vegan Gnocchi Pesto': {
    'description': 'fdsafdsafdsafdsa',
    'price': 7.99
  },
  'Not Your Moms Fried Chickn': {
    'description': 'fdsafdsafdsafdsa',
    'price': 7.99
  },
  'Turky Burgers': {
    'description': 'fdsafdsafdsafdsa',
    'price': 7.99
  },
  'All Vegan Chocolate Chip Cookie': {
    'description': 'fdsafdsafdsafdsa',
    'price': 7.99
  },
  'Classic Donut': {
    'description': 'fdsafdsafdsafdsa',
    'price': 7.99
  },
  'Vegan French Toast': {
    'description': 'fdsafdsafdsafdsa',
    'price': 7.99
  },
}

export const menuObject = {
  'Light Bites': appsNames,
  'Empty Stomach Quenchers': mainsNames,
  'Sweet Tooth Much?': dessertsNames
};

export const imgSRC = {
    'Garden Medley Salad': 'assets/food/apps/salad.jpg',
    'Butternut Squash Soup': 'assets/food/apps/soup.jpg',
    'Vegan Gnocchi Pesto': 'assets/food/mains/pasta.jpg',
    'Not Your Moms Fried Chickn': 'assets/food/mains/chickensandwich.jpg',
    'Turky Burgers': 'assets/food/mains/turkeyburger.jpg',
    'All Vegan Chocolate Chip Cookie': 'assets/food/desserts/cookie.jpg',
    'Classic Donut': 'assets/food/desserts/donut.jpg',
    'Vegan French Toast': 'assets/food/desserts/frenchtoast.jpg'
  }

export default { mainHeroData, heroData, menuNames, menuObject, foodInfo, imgSRC }
