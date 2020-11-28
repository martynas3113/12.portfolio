import { socialsData } from './data/socialsData.js';
import { renderSocials } from './components/socials/renderSocials.js';
import { cardsData } from './data/cardsData.js';
import { cardsRender } from './components/cards/cardsRender.js';
import { personalData } from './data/personalData.js';
import { personalInfo } from './components/personalInfo/personalInfo.js';
renderSocials('.container > .hero > .icon-bar', socialsData);
cardsRender('.cards',cardsData);
personalInfo('.left > .inforight',personalData);

