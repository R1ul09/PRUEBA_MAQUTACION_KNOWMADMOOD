const menuBtn = document.querySelector('.menu-btn');
const aside = document.querySelector('aside');
const filterButtons = document.querySelectorAll('.tags button');
const cards = document.querySelectorAll('.card');

// para el menu hamburgesa
menuBtn.addEventListener('click', () => {
    aside.classList.toggle('active');
});

// funcion para filtrar los posts por categoria
function filtrarPosts() {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // convertimos el texto del boton a minusculas para comparar mejor
            const category = button.textContent.toLowerCase();
            let postsVisibles = 0;

            cards.forEach(card => {
                // Obtenemos las categorías de la card
                const cardCategories = card.getAttribute('data-category').toLowerCase();

                if (category === 'all posts' || cardCategories.includes(category)) {
                    // aqui lo dejo vacio para que el display original lo use
                    card.style.display = '';
                    postsVisibles++;
                } else {
                    card.style.display = 'none';
                }
            });

            // Si no hay posts visibles, mostrar alert
            if (postsVisibles === 0) {
                alert(`No hay posts en la categoría "${button.textContent}"`);
                // simulo como que le doy click a la primera posicion del filtro para mostrar todos los posts
                filterButtons[0].click();
                // o location.reload() tambien valdria, pero tardaria un poquito
            }
        });
    });
}

filtrarPosts();