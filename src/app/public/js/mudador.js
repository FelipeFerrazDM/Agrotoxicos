var principal = document.getElementById('corpo');
var botao = document.getElementById('btn-mudador');
var claro;
if (localStorage.getItem('claro')) {
    claro = true;
    principal.style.color = "black";
    principal.style.background = getCssValuePrefix() + getCssValuePrefix() + "linear-gradient(68.15deg, #333c2d 16.62%, #3e551b 85.61%);";
    botao.style.backgroundColor = "#333c2d";
    localStorage.setItem('claro', 'true');
    console.log("tema claro: " + claro);
}
else if (localStorage.getItem('claro') == "true") {
    claro = true;
    principal.style.color = "black";
    principal.style.background = getCssValuePrefix() + "linear-gradient(68.15deg, #333c2d 16.62%, #3e551b 85.61%);";
    botao.style.backgroundColor = "#333c2d";
    console.log("tema claro: " + claro);
}
else {
    principal.style.color = "black";
    principal.style.background = getCssValuePrefix() + "linear-gradient(68.15deg, #1F0B47 16.62%, #0B041A 85.61%);";
    botao.style.backgroundColor = "#1F0B47";
    claro = false;
    console.log("tema claro: " + claro);
}
function mudarTema() {
    if (localStorage.getItem('claro') == 'true') {
        claro = false;
        principal.style.color = "black";
        principal.style.background = getCssValuePrefix() + "linear-gradient(68.15deg, #1F0B47 16.62%, #0B041A 85.61%);";
        localStorage.setItem('claro', 'false');
        botao.style.backgroundColor = "#1F0B47";
        console.log("tema claro: " + claro);
    }
    else {
        claro = true;
        principal.style.color = "black";
        principal.style.background = getCssValuePrefix() + "linear-gradient(68.15deg, #333c2d 16.62%, #3e551b 85.61%);";
        botao.style.backgroundColor = "#333c2d";
        localStorage.setItem('claro', 'true');
        console.log("tema claro: " + claro);
    }
}

function getCssValuePrefix()
{
    var rtrnVal = '';
    var prefixes = ['-o-', '-ms-', '-moz-', '-webkit-'];

    var dom = document.createElement('div');

    for (var i = 0; i < prefixes.length; i++)
    {
        dom.style.background = prefixes[i] + 'linear-gradient(#000000, #ffffff)';

        if (dom.style.background)
        {
            rtrnVal = prefixes[i];
        }
    }

    dom = null;
    delete dom;

    return rtrnVal;
}