

import { objectValidation } from '../objectValidation/objectValidation.js';
import { isInputValid } from '../inputValidation/IsInputValid.js';
/**
 * Asmenines informacijos generavimas is pateiktu duomenu i nurodyta vieta DOM'e.
 * @param {string} selector Selectorius, kaip rasti norima vieta, kur bus istatomas sugeneruotas kodas
 * @param {Array} data Duomenu masyvas su objektais, kurie reprezentuoja social nuorodas
 * @returns {boolean} Logikos vykdymo metu radus klaida grazinas `false`, o funkcijai suveikus teisingai - `true`
 */
function personalInfo(selector,data) {
    if(!isInputValid (selector,data)){
        return false;
    }
    
    const personalDOM = document.querySelector(selector);
    if (!personalDOM) {
        console.error('ERROR: nerasta turinio generavimo vieta');
        return false;
    }

    let HTML = '';

    for(let i = 0; i < data.length; i++) {
        const item = data[i];
        if(objectValidation(item)) {
            continue;
        }
        HTML += `<li>${item.data}</li>`
    }
    if(HTML === '') {
        console.error('ERROR: nepavyko sugeneruoti turinio')
        return false;
    }
    personalDOM.innerHTML = HTML;
    return true;
}

export { personalInfo };