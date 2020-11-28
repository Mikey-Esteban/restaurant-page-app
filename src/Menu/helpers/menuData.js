const appsNames = ['Garden Medley Salad', 'Butternut Squash Soup'];
const mainsNames = ['Vegan Gnocchi Pesto', 'Not Your Moms Fried Chickn', 'Turky Burgers'];
const dessertsNames = ['All Vegan Chocolate Chip Cookie', 'Classic Donut', 'Vegan French Toast'];

export const mainHeroData = {
  heights: {
    min: '300px',
    max: '350px'
  },
  titleClass: ['has-text-info', 'has-text-weight-light', 'is-3', 'has-text-shadow', 'mt-5'],
  titleText: 'Always fresh & local ingredients made everyday',
  subtitleClass: ["has-text-link", 'has-text-shadow'],
  subtitleText: `...and we're sure you've heard about our coffee`
}

export const menuNames = [ 'Light Bites', 'Empty Stomach Quenchers', 'Sweet Tooth Much?'];

export const foodInfo = {
  'Garden Medley Salad': {
    'description': 'fresh kale, chickpeas, avocado, topped with a light lemon vinaigrette',
    'price': '$7.99'
  },
  'Butternut Squash Soup': {
    'description': 'smooth & creamy squash smooth made with cashew cream, spinkled with pumpkin seeds',
    'price': '$5.99'
  },
  'Vegan Gnocchi Pesto': {
    'description': 'beaufitul potato gnocchi with brocolli rabe and walnuts',
    'price': '$12.99'
  },
  'Not Your Moms Fried Chickn': {
    'description': `toasted seasame bun, housemade slaw, 1000 island dressing with in house 'Chickn'`,
    'price': '$11.99'
  },
  'Turky Burgers': {
    'description': 'in house cibatta bread, tomatoes, lettuce, vegan mayonaise',
    'price': '$9.99'
  },
  'All Vegan Chocolate Chip Cookie': {
    'description': 'with a sprinkle of sea salt to add that delicious kick',
    'price': '2 for $2.99'
  },
  'Classic Donut': {
    'description': 'all your classic flavors. Glazed, Chocolate Frosting, Powdered',
    'price': 'half dozen ($9.99), $2 each'
  },
  'Vegan French Toast': {
    'description': 'topped with your choice of fruit, made with in house syrup',
    'price': '$7.99'
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

export default { mainHeroData, menuNames, menuObject, foodInfo, imgSRC }
