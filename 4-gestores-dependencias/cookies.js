document.addEventListener('DOMContentLoaded', initialize);

function initialize() {
    //Preguntar si el navegador del usuario acepta no cookies.
    if(Cookies.enabled) {
        if( Cookies.get('cookiesaceptadas') != 'aceptadas' )
            launchCookieAdvisor('Tienes que aceptar las cookies');
    } else {
        launchCookieAdvisor('Tú navegador no acepta cookies, por favor activalo');
    }
}
function gestionAceptar() {
    if(Cookies.enabled) {
        Cookies.set('cookiesaceptadas', 'aceptadas', {expires: 60 * 60 * 24 * 365 * 2})
    }
    //capaCookies.remove();
    $(capaCookies).fadeOut(3000);
}

function launchCookieAdvisor(msg) {
    var capaCookies = document.createElement('div');
    capaCookies.setAttribute('id','esteid');
    capaCookies.innerHTML = '<p>' + msg + '<span>Aceptar</span>';
    capaCookies.classList.add('avisoCookies');
    var todosLosSpanEnDiv = capaCookies.getElementsByTagName('span');
    todosLosSpanEnDiv.item(0).addEventListener('click', gestionAceptar);
    document.body.appendChild(capaCookies);
}

