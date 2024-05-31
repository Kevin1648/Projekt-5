{
    const burgerMenu = document.getElementById('burger-menu');
    

    const navigation = document.getElementById('navigation');
    

    const navItems = Array.from(document.querySelectorAll('.nav-item'));
   
    burgerMenu.addEventListener('click', function() {
        

        if (navigation.classList.contains('open')) {
           

            navItems.forEach(function(item) {
                item.style.display = 'none';
              
            });
        } else {
           

            navItems.forEach(function(item) {
                item.style.display = 'block';
             
            });
        }
     
        navigation.classList.toggle('open');
    });
    
};
