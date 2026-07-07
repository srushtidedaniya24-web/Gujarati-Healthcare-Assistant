document.querySelectorAll('.glass-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        const icon = card.querySelector('.material-symbols-outlined');
        if (icon) icon.classList.add('scale-110');
    });
    card.addEventListener('mouseleave', () => {
        const icon = card.querySelector('.material-symbols-outlined');
        if (icon) icon.classList.remove('scale-110');
    });
});

// Mobile menu
const menuBtn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');
const closeBtn = document.getElementById('mobile-menu-close');
const overlay = document.getElementById('mobile-menu-overlay');
const drawer = document.getElementById('mobile-menu-drawer');

function openMenu() {
    menu.style.visibility = 'visible';
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => {
        drawer.classList.remove('translate-x-full');
        drawer.classList.add('translate-x-0');
    });
}

function closeMenu() {
    drawer.classList.remove('translate-x-0');
    drawer.classList.add('translate-x-full');
    setTimeout(() => {
        menu.style.visibility = 'hidden';
        document.body.style.overflow = '';
    }, 300);
}

if (menuBtn && menu) {
    menuBtn.addEventListener('click', openMenu);
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    if (overlay) overlay.addEventListener('click', closeMenu);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menu.style.visibility === 'visible') closeMenu();
    });
}
