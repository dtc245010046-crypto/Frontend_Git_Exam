(() => {
    const button = document.querySelector('.menu-toggle');
    const links = document.querySelector('.nav-links');

    button.addEventListener('click', () => {
        const isOpen = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', String(!isOpen));
        button.setAttribute('aria-label', isOpen ? 'Mở menu' : 'Đóng menu');
        links.classList.toggle('is-open', !isOpen);
    });

    links.addEventListener('click', (event) => {
        if (event.target.closest('a')) {
            links.classList.remove('is-open');
            button.setAttribute('aria-expanded', 'false');
            button.setAttribute('aria-label', 'Mở menu');
        }
    });
})();
