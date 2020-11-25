const appsNames = ['Garden Medley Salad', 'Butternut Squash Soup'];
const mainsNames = ['Vegan Gnocchi Pesto', 'Not Your Moms Fried Chickn', 'Turky Burgers'];
const dessertsNames = ['All Vegan Chocolate Chip Cookie', 'Classic Donut', 'Vegan French Toast'];

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

export default { menuNames, menuObject, foodInfo, imgSRC }
