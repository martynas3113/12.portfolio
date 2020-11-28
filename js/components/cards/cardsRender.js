

function cardsRender(selector,data) {
    
    const cardsDOM = document.querySelector(selector);
    if (!cardsDOM) {
        console.error('ERROR: nerasta turinio generavimo vieta');
        return false;
    }

    let HTML = '';

    for(let i = 0; i < data.length; i++) {
        const item = data[i];
        HTML += `<div><i class="fa fa-${item.icon}" aria-hidden="true"></i><p>${item.name}</p></div>`
    }
    cardsDOM.innerHTML = HTML;
}

export { cardsRender };