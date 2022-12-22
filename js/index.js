function openMenu() {
    if(list.style.display == "block"){
        list.style.display = "none"
    } else {
        list.style.display = "block"
    }
}

function windowSizeL() {
    if(window.innerWidth >=768) {
        list.style.display = 'block'
    } else{
        list.style.display = 'none'
    }
}