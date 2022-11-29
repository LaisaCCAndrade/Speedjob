function criarCards(objeto){
    let div = document.createElement("div")
    div.classList.add("menu__container1")

    let ul = document.createElement("ul")
    ul.classList.add("menu__section--ul1")

    let li = document.createElement("li")
    li.classList.add("menu__section--li")

    let g = document.createElement("p")
    g.classList.add("menu__g")

    let titulo = document.createElement("h4")
    titulo.classList.add("menu__titulo")

    let desc = document.createElement("p")
    desc.classList.add("menu__descricao")

    let full = document.createElement("span")
    full.classList.add("menu__full")

    let remote = document.createElement("span")
    remote.classList.add("menu__remote")

    g.innerText = "G"
    titulo.innerText = objeto.title
    desc.innerText = objeto.descrription

    for(let i = 0; i < frontEndJobs.length; i++){
        full.innerText = objeto.modality[0]
        remote.innerText = objeto.modality[1]
    }

    li.append(g, titulo, desc, full, remote)
    ul.appendChild(li)
    div.appendChild(ul)

    return div
}

function listas(array){
    let lista = document.querySelector(".menu__section1")
    for(let i = 0; i < array.length; i++){
        lista.appendChild(criarCards(array[i]))
    }
}
listas(frontEndJobs)


function criandoCards(objeto){
    let div = document.createElement("div")
    div.classList.add("menu__container2")

    let ul = document.createElement("ul")
    ul.classList.add("menu__section--ul2")

    let li = document.createElement("li")
    li.classList.add("menu__section--li2")

    let g = document.createElement("p")
    g.classList.add("menu__g2")

    let titulo = document.createElement("h4")
    titulo.classList.add("menu__titulo3")

    let desc = document.createElement("p")
    desc.classList.add("menu__descricao2")

    let full = document.createElement("span")
    full.classList.add("menu__full2")

    let remote = document.createElement("span")
    remote.classList.add("menu__remote2")

    g.innerText = "G"
    titulo.innerText = objeto.title
    desc.innerText = objeto.descrription

    for(let i = 0; i < backEndJobs.length; i++){
        full.innerText = objeto.modality[0]
        remote.innerText = objeto.modality[1]
    }

    li.append(g, titulo, desc, full, remote)
    ul.appendChild(li)
    div.appendChild(ul)

    return div
}

function listass(array){
    let lista = document.querySelector(".menu__section2")
    for(let i = 0; i < array.length; i++){
        lista.appendChild(criandoCards(array[i]))
    }
}
listass(backEndJobs)