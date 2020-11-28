import { objectValidation } from '../objectValidation/objectValidation.js';
import { isInputValid } from '../inputValidation/IsInputValid.js';


/**
 * Social nuorodu generavimas is pateiktu duomenu i nurodyta vieta DOM'e.
 * @param {string} selector Selectorius, kaip rasti norima vieta, kur bus istatomas sugeneruotas kodas
 * @param {Array} data Duomenu masyvas su objektais, kurie reprezentuoja social nuorodas
 * @returns {boolean} Logikos vykdymo metu radus klaida grazinas `false`, o funkcijai suveikus teisingai - `true`
 */
function renderSocials (selector,data) {
    if(!isInputValid(selector,data)){
        return false
    }
    const socialsDOM = document.querySelector(selector);
        if(!socialsDOM) {
            console.error('ERROR: nerasta turinio generavimo vieta')
        }

    let HTML = '';

    for(let i = 0; i < data.length; i++) {
        const item = data[i];
        if(!objectValidation(item)){
            continue;
        }
        HTML = HTML += `<a href="${item.link}" class="${item.class}"><i class="fa fa-${item.icon}"></i></a>`
    }
    if(HTML ===''){
        console.error('ERROR: Nepavyko sugeneruoti social turinio')
        return false;
    }

    socialsDOM.innerHTML = HTML;
    return true;
}

export { renderSocials };