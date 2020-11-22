const ChefBioData = () => {
  const chefOne = {
    bio: `Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet, consectetur adipiscing elit`,
    figColClasses: ["column", "is-3", "is-offset-2", "level-left"],
    infoColClasses: ["column", "is-6", "level-right", "mr-6"],
    figSrc: 'assets/chef.jpg',
    figRatio: 'is-2by3',
    infoColor: 'is-success'
  }

  const chefTwo = {
    bio: `Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet, consectetur adipiscing elit`,
    figColClasses: ["column", "is-5", "level-right", "mr-6"],
    infoColClasses: ["column", "is-5", "is-offset-1", "level-left"],
    figSrc: 'assets/chef2.jpg',
    figRatio: 'is-3by2',
    infoColor: 'is-link',
    reverse: true
  }

  return { chefOne, chefTwo }
  
}

export default ChefBioData
