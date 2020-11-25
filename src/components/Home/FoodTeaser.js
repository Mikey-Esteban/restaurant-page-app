import Image from '../Image'

const FoodTeaser = (data) => {

  const DIV = document.createElement('DIV');
  DIV.classList.add('columns');
  const infoCOLUMN = document.createElement('DIV');
  infoCOLUMN.classList.add('column', 'is-one-quarter','aside');

  for (let item of data['items']) {
    const HEADER = document.createElement('P');
    HEADER.classList.add('is-size-7', 'has-text-weight-bold', 'is-uppercase');
    HEADER.textContent = item['header'];
    const DESCRIPTION = document.createElement('SPAN');
    DESCRIPTION.textContent = item['description'];
    infoCOLUMN.append(HEADER, DESCRIPTION);
  }

  const mainImgCOLUMN = document.createElement('DIV');
  mainImgCOLUMN.classList.add('column', 'is-half','aside');
  const mainFIGURE = Image(data['imgOne']);
  mainImgCOLUMN.append(mainFIGURE);

  const sideImgCOLUMN = document.createElement('DIV');
  sideImgCOLUMN.classList.add('column', 'is-one-quarter','aside');
  const sideFIGURE = Image(data['imgTwo']);
  sideImgCOLUMN.append(sideFIGURE);

  DIV.append(infoCOLUMN, mainImgCOLUMN, sideImgCOLUMN);

  return DIV

}

export default FoodTeaser
