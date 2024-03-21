document.addEventListener('DOMContentLoaded', function() {
    const icon_2 = document.querySelector('.btn_home_marcas');
    const menu_2 = document.querySelector('.menu_nav_2');
  
    icon_2.onclick = () => {
        console.log('Botão "Marcas" clicado');
        closeAllMenusExcept(menu_2);
        menu_2.classList.toggle('ativo');
    };
  
    const icon_3 = document.querySelector('.btn_home_modelos');
    const menu_3 = document.querySelector('.menu_nav_3');
  
    icon_3.onclick = () => {
        console.log('Botão "Modelos" clicado');
        closeAllMenusExcept(menu_3);
        menu_3.classList.toggle('ativo');
    };
  
    const icon_4 = document.querySelector('.btn_home_acessorios');
    const menu_4 = document.querySelector('.menu_nav_4');
  
    icon_4.onclick = () => {
        console.log('Botão "Acessórios" clicado');
        closeAllMenusExcept(menu_4);
        menu_4.classList.toggle('ativo');
    };
  
    const icon_5 = document.querySelector('.btn_home_infantil');
    const menu_5 = document.querySelector('.menu_nav_5');
  
    icon_5.onclick = () => {
        console.log('Botão "Infantil" clicado');
        closeAllMenusExcept(menu_5);
        menu_5.classList.toggle('ativo');
    };
  
    const icon_6 = document.querySelector('.btn_home_vertodos');
    const menu_6 = document.querySelector('.menu_nav_6');
  
    icon_6.onclick = () => {
        console.log('Botão "Ver Todos" clicado');
        closeAllMenusExcept(menu_6);
        menu_6.classList.toggle('ativo');
    };
  
    const icon = document.querySelector('.btn_categorias');
    const menu = document.querySelector('.menu_nav');
  
    icon.onclick = () => {
        console.log('Botão "Categorias" clicado');
        menu.classList.toggle('ativo');
        
        // Fechar todos os menus secundários quando o botão "Categorias" for desselecionado
        if (!menu.classList.contains('ativo')) {
            menu_2.classList.remove('ativo');
            menu_3.classList.remove('ativo');
            menu_4.classList.remove('ativo');
            menu_5.classList.remove('ativo');
            menu_6.classList.remove('ativo');
        }
    };
  
    function closeAllMenusExcept(exceptMenu) {
        const menusSecundarios = document.querySelectorAll('.menu_nav_2, .menu_nav_3, .menu_nav_4, .menu_nav_5, .menu_nav_6');
        menusSecundarios.forEach(menuSecundario => {
            if (menuSecundario !== exceptMenu) {
                menuSecundario.classList.remove('ativo');
            }
        });
    }
  });
  