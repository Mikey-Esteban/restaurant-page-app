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
  titleText: `We'd love to here from you!`,
  subtitleClass: ["has-text-link", 'has-text-shadow'],
  subtitleText: `stop by or follow along any of our socials :)`
}

export const socials = [
  {
    'type': 'Twitter',
    'html': `Updates on <a herf='#'>Twitter</a>`
  },
  {
    'type': 'Facebook',
    'html': `Share on <a href='#'>Facebook</a>`
  },
  {
    'type': 'Instagram',
    'html': `View our <a href='#'>Instagram</a>`
  }
]

export const cardData = [
  {
    'type': 'Email',
    'value': 'VeganicCorner@gmail.com',
    'icon': 'fa-envelope'
  },
  {
    'type': 'Phone',
    'value': '908-555-1234',
    'icon': 'fa-phone-alt'
  },
  {
    'type': 'Address',
    'value': '55 Cherry Lane',
    'icon': 'fa-map-marker-alt'
  },
  {
    'type': 'Hours',
    'value': ['MON-FRI 7am - 10pm', 'SAT-SUN 8am - 7pm'],
    'icon': 'fa-door-open',
    'different': true
  }
]

export default { mainHeroData, socials, cardData }
