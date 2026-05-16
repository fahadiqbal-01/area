const toggleBtn = document.getElementById('tooglebtn');
const menu = document.getElementById('menu');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});
