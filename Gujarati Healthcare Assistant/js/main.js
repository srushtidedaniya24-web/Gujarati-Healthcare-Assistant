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
