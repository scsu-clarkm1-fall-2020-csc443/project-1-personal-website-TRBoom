const toastBtn = document.querySelector('#app-toast-btn');

toastBtn.addEventListener('click', () => {
    const toast = document.createElement('div');

    toast.classList.add('toast');
    toast.style.position = 'absolute';
    toast.style.top = '100px';
    toast.style.left = '100px';
    toast.innerHTML = `<div class="toast-body">Hello there! I am a toast.</div>`;

    document.body.prepend(toast);

    $(toast).toast('show');
});

