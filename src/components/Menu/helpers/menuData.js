const appsNames = ['Garden Medley Salad', 'Butternut Squash Soup'];
const mainsNames = ['Vegan Bowtie Pesto', 'Not Your Moms Fried Chickn', 'Turky Burgers'];
const dessertsNames = ['All Vegan Peanut Butter Cups', 'Fruit Donuts Galore', 'Vegan French Toast'];

export const menuNames = [ 'Light Bites', 'Empty Stomach Quenchers', 'Sweet Tooth Much?'];

export const menuObject = {
  'Light Bites': appsNames,
  'Empty Stomach Quenchers': mainsNames,
  'Sweet Tooth Much?': dessertsNames
};

export const imgSRC = {
    'Garden Medley Salad': 'assets/food/apps/salad.jpg',
    'Butternut Squash Soup': 'assets/food/apps/soup.jpg',
    'Vegan Bowtie Pesto': 'assets/food/mains/pasta.jpg',
    'Not Your Moms Fried Chickn': 'assets/food/mains/chickensandwich.jpg',
    'Turky Burgers': 'assets/food/mains/turkeyburger.jpg',
    'All Vegan Peanut Butter Cups': 'assets/food/desserts/peanutbuttercup.jpg',
    'Fruit Donuts Galore': 'assets/food/desserts/donuts.jpg',
    'Vegan French Toast': 'assets/food/desserts/frenchtoast.jpg'
  }

export default { menuNames, menuObject, imgSRC }
