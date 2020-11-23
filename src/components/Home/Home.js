import Hero from './components/Hero'
import MainImage from './components/MainImage'

const Home = () => {

  const mainDIV = document.querySelector('#content');
  const HERO = Hero();
  const imageDIV = MainImage();
  mainDIV.append(HERO, imageDIV);

}

export default Home
