

function renderSocials (selector,data) {
    const socialsDOM = document.querySelector(selector);

    let HTML = '';

    for(let i = 0; i < data.length; i++) {
        const item = data[i];
        HTML = HTML += `<a href="${item.link}" class="${item.class}"><i class="fa fa-${item.icon}"></i></a>`
    }

    socialsDOM.innerHTML = HTML;
}

export { renderSocials };