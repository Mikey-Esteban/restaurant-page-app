import { createColumns, createColumn, createFigure, createInfo } from './helpers/chefBioHelpers'
import { chefOne, chefTwo } from './helpers/homeData'

const ChefBio = () => {

  const wrapperCOLUMNS = document.createElement('DIV');
  wrapperCOLUMNS.classList.add('columns', 'mt-6');
  const wrapperCOLUMN = document.createElement('DIV');
  wrapperCOLUMN.classList.add('column', 'is-10', 'is-offset-1');
  wrapperCOLUMNS.append(wrapperCOLUMN);

  const chefs = [chefOne, chefTwo];

  for (let chef of chefs) {
    const FIGURE = createFigure(chef.figRatio, chef.figSrc);
    const INFO = createInfo(chef.infoColor, chef.title, chef.name, chef.bio);
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

  return wrapperCOLUMNS

}

export default ChefBio
