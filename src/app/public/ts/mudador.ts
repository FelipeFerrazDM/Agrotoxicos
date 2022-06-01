const principal = document.getElementById('corpo') as HTMLElement
const botao = document.getElementById('btn-mudador') as HTMLElement

let claro: boolean

if (localStorage.getItem('claro') as null) {

    claro = true
    principal.style.color = "black"
    principal.style.backgroundImage = "linear-gradient(68.15deg, #333c2d 16.62%, #3e551b 85.61%);"
    botao.style.backgroundColor = "#333c2d"
    localStorage.setItem('claro', 'true')
    console.log("tema claro: " + claro);

} else if (localStorage.getItem('claro') as string == "true") {

    claro = true
    principal.style.color = "black"
    principal.style.backgroundImage = "linear-gradient(68.15deg, #333c2d 16.62%, #3e551b 85.61%);"
    botao.style.backgroundColor = "#333c2d"
    console.log("tema claro: " + claro);

} else {

    principal.style.color = "black"
    principal.style.backgroundImage = "linear-gradient(68.15deg, #1F0B47 16.62%, #0B041A 85.61%);"
    botao.style.backgroundColor = "#1F0B47"
    claro = false
    console.log("tema claro: " + claro);

}

function mudarTema(): void {

    if (localStorage.getItem('claro') as string == 'true') {

        claro = false
        principal.style.color = "black"
        principal.style.backgroundImage = "linear-gradient(68.15deg, #1F0B47 16.62%, #0B041A 85.61%);"
        localStorage.setItem('claro', 'false')
        botao.style.backgroundColor = "#1F0B47"
        console.log("tema claro: " + claro);

    } else {

        claro = true
        principal.style.color = "black"
        principal.style.backgroundImage = "linear-gradient(68.15deg, #333c2d 16.62%, #3e551b 85.61%);"
        botao.style.backgroundColor = "#333c2d"
        localStorage.setItem('claro', 'true')
        console.log("tema claro: " + claro);

    }

}