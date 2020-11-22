import { createColumns, createColumn, createFigure, createInfo } from './helpers/ChefBioHelpers'
import { chefOne, chefTwo } from './helpers/ChefBioData'

const ChefBio = () => {

  // Set up MAIN COLUMN size 10
  const mainDIV = document.querySelector('#content');
  const wrapperCOLUMNS = document.createElement('DIV');
  wrapperCOLUMNS.classList.add('columns');
  const wrapperCOLUMN = document.createElement('DIV');
  wrapperCOLUMN.classList.add('column', 'is-10', 'is-offset-1');
  wrapperCOLUMNS.append(wrapperCOLUMN);
  mainDIV.append(wrapperCOLUMNS);

  const chefs = [chefOne, chefTwo];

  for (let chef of chefs) {
    const FIGURE = createFigure(chef.figRatio, chef.figSrc);
    const INFO = createInfo(chef.infoColor, chef.bio);
    const figCOLUMN = createColumn(chef.figColClasses);
    const infoCOLUMN = createColumn(chef.infoColClasses);
    figCOLUMN.append(FIGURE);
    infoCOLUMN.append(INFO);
    if (chef.reverse) {
      const COLUMNS = createColumns(infoCOLUMN, figCOLUMN);
      wrapperCOLUMN.append(COLUMNS);
    } else {
      const COLUMNS = createColumns(figCOLUMN, infoCOLUMN);
      wrapperCOLUMN.append(COLUMNS);
    }
  }

}

export default ChefBio
