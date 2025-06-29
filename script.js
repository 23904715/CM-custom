
document.addEventListener('DOMContentLoaded', function() {
    const msg = document.getElementById('msg');
    setTimeout(() => msg.classList.add('text'), 500);
    setTimeout(() => {
        msg.classList.remove('text');
        setTimeout(() => msg.remove(), 400); 
    }, 3000);
});

