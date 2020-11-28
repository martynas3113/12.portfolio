import { objectValidation } from '../objectValidation/objectValidation.js';
import { isInputValid } from '../inputValidation/IsInputValid.js';
/**
 * Progresss bar generavimas is pateiktu duomenu i nurodyta vieta DOM'e.
 * @param {string} selector Selectorius, kaip rasti norima vieta, kur bus istatomas sugeneruotas kodas
 * @param {Array} data Duomenu masyvas su objektais, kurie reprezentuoja social nuorodas
 * @returns {boolean} Logikos vykdymo metu radus klaida grazinas `false`, o funkcijai suveikus teisingai - `true`
 */
function progress (selector,data) {
    if(!isInputValid (selector,data)){
        return false;
    }
    
    const progressDOM = document.querySelector(selector);
    if (!progressDOM) {
        console.error('ERROR: nerasta turinio generavimo vieta');
        return false;
    }

    let HTML = '';

    for(let i = 0; i < data.length; i++) {
        const item = data[i];
        if(objectValidation(item)) {
            continue;
        }
        HTML += `
                    <div class="bar">
                    <label for="${item.labelfor}">${item.name}</label>
                    <label class="percent">${item.percentage}</label>
                    <div class="bar-dark">
                        <div class="bar-light" style="width: ${item.width}"></div>
                    </div>
                </div>`
    }
    if(HTML === '') {
        console.error('ERROR: nepavyko sugeneruoti turinio')
        return false;
    }
    progressDOM.innerHTML = HTML;
    return true;
}

export { progress };