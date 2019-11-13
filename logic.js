function CloseBurgerMenu(){
        $('.burger-menu__nav').remove();
        $('.beforeBur').append("<span class='glyphicon glyphicon-menu-hamburger'></span>");
}

function OpenBurgerMenu(){
        $('.glyphicon').remove();        
        $('.beforeBur').append(template());
}


document.addEventListener('click', function(event) {
    if (event.target.className === 'glyphicon glyphicon-menu-hamburger'){
        OpenBurgerMenu();
                
    }   else {
        CloseBurgerMenu()
    }     
});


function template(){
    return `
    <nav class="burger-menu__nav">

                        <ul class="menu d-flex justify-content-end">
                            <li class="menu__item">
                                <a href="#" class="fa fa-close">
                                    
                                </a>
                            </li>
                              
                            <li class="menu__item">
                                <a href="#">
                                    home
                                </a>
                            </li>
                            <li class="menu__item">
                                <a href="#guotes">
                                    about me
                                </a></li>
                            <li class="menu__item">
                                <a href="#portfolio">
                                    works
                                </a>
                            </li>
                            <li class="menu__item">
                                <a href="#footer">
                                    resume
                                </a></li>
                        </ul>
                    </nav>`
}
