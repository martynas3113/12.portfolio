import { socialsData } from './data/socialsData.js';
import { renderSocials } from './components/socials/renderSocials.js';
import { cardsData } from './data/cardsData.js';
import { cardsRender } from './components/cards/cardsRender.js';
import { personalDataTech } from './data/personalDataTech.js';
import { personalDataProf } from './data/personalDataProf.js'
import { personalInfo } from './components/personalInfo/personalInfo.js';
import { progressData } from './data/progressData.js';
import { progress } from './components/progress/progress.js';
renderSocials('.container > .hero > .icon-bar', socialsData);
cardsRender('.cards',cardsData);
personalInfo('.left > .inforight',personalDataTech);
personalInfo('.left > .infoleft ', personalDataProf)
progress('.skills > .tech',progressData)


