function flip(cardElement) {
    cardElement.classList.toggle('flipped');
}

const cards = document.querySelectorAll('[data-flip-card]');

cards.forEach(card => {
    card.addEventListener('click', () => {
        flip(card);});

    const flipButton = card.querySelector('.flipButton');
    flipButton.addEventListener('click', (event) => {
        event.stopPropagation();
        flip(card);
    });
});


function openProject1(event) {
    event.stopPropagation();
    window.open('https://github.com/ctimko773/WebGL_Render', '_blank');
}

function openProject2(event) {
    event.stopPropagation();
    window.open('https://github.com/ctimko773/Task_Manager_Application', '_blank');
}

function openProject3(event) {
    event.stopPropagation();
    window.open('https://github.com/ctimko773/Animals_CRUD_Databse', '_blank');
}

function openModal(event, modalId) {
    event.stopPropagation();
    const modal = document.getElementById(modalId);
    modal.style.cssText = 'display: flex; justify-content: center; align-items: center;';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal(modal.id);
        }
    });
});