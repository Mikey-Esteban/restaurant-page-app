import Image from '../Image'

const FoodTeaser = (data) => {

  const DIV = document.createElement('DIV');
  DIV.classList.add('columns');
  const infoCOLUMN = document.createElement('DIV');
  infoCOLUMN.classList.add('column', 'is-one-fifth','aside', 'is-offset-1');

  for (let item of data['items']) {
    const HEADER = document.createElement('P');
    HEADER.classList.add('is-size-7', 'has-text-weight-bold', 'is-uppercase', 'mb-2');
    HEADER.textContent = item['header'];
    const DESCRIPTION = document.createElement('DIV');
    DESCRIPTION.classList.add('is-size-7', 'mb-2');
    DESCRIPTION.textContent = item['description'];
    const ITEM = document.createElement('DIV');
    ITEM.classList.add('is-size-7', 'has-text-weight-bold', 'mb-2');
    ITEM.textContent = item['item'];
    const HR = document.createElement('HR');
    infoCOLUMN.append(HEADER, DESCRIPTION, ITEM, HR);
  }

  const mainImgCOLUMN = document.createElement('DIV');
  mainImgCOLUMN.classList.add('column', 'is-two-fifths','aside');
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
