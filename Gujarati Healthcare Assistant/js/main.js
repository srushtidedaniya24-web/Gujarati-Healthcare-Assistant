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

function openMenu() {
    menu.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
        const drawer = document.getElementById('mobile-menu-drawer');
        if (drawer) drawer.style.transform = 'translateX(0)';
    }, 10);
}

function closeMenu() {
    const drawer = document.getElementById('mobile-menu-drawer');
    if (drawer) drawer.style.transform = 'translateX(100%)';
    setTimeout(() => {
        menu.classList.add('hidden');
        document.body.style.overflow = '';
    }, 300);
}

if (menuBtn && menu) {
    menuBtn.addEventListener('click', openMenu);
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    if (overlay) overlay.addEventListener('click', closeMenu);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !menu.classList.contains('hidden')) closeMenu();
    });
}
