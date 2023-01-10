// criar as variáveis de maniputação

let menu_hamburguer = document.querySelector('.menu_hamburguer');
let menu_x = document.querySelector('.menu_x_desativado')


// mudar display

menu_hamburguer.addEventListener('click', ()=>{
    menu_hamburguer.classList.add('menu_hamburguer_desativado')
    menu_x.classList.add('menu_x_ativado')
})

menu_x.addEventListener('click', ()=>{
    menu_x.classList.remove('menu_x_ativado')
    menu_hamburguer.classList.remove('menu_hamburguer_desativado')
})


