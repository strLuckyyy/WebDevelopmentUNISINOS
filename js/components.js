function clearModalContent() {
    const modalTitle = document.querySelector('.modal-title');
    if (modalTitle) {
        while (modalTitle.firstChild) {
            modalTitle.removeChild(modalTitle.firstChild);
        }
    }

    const modalBody = document.querySelector('.modal-body');
    if (modalBody) {
        modalBody.innerHTML = '';
    }
}

function createModalElement(title, content) {
    const modalTitle = document.querySelector('.modal-title');
    const modalBody = document.querySelector('.modal-body');

    if (modalTitle) {
        const h2 = document.createElement('h2');
        h2.classList.add('sub-title');
        h2.textContent = title;
        modalTitle.appendChild(h2);
    }
    if (modalBody) modalBody.innerHTML = content;

    console.log('Modal content updated:', title, content);
}

function addGifToModal(gifSrc, altText) {
    const modalImage = document.createElement('img');
    modalImage.src = gifSrc;
    modalImage.alt = altText;
    modalImage.classList.add('gif-view');

    return modalImage;
}

// Exporting the modal functions
// Modal functions for different projects

export function guitarBlogModal() {
    const modalDescription = document.createElement('p');
    modalDescription.textContent = 'First project using HTML and CSS. I independently chose the theme of guitars and structured the page in a simple way to showcase different guitar types.';

    modalDescription.appendChild(addGifToModal('img/gifs/guitar.gif', 'Guitar Blog GIF'));

    modalDescription.innerHTML += '<a href="/pages/Guitar/guitar.html" target="_blank" class="page-link">Link to view the page</a>';

    clearModalContent();

    createModalElement(
        'Guitar Blog',
        modalDescription.innerHTML
    );
}

export function acaciaBlogModal() {
    const modalDescription = document.createElement('p');
    modalDescription.textContent = 'Second project using HTML and CSS. This one followed a layout shared by the teacher, where I focused on organizing content and applying basic styling.';

    modalDescription.appendChild(addGifToModal('img/gifs/acacia.gif', 'Acacia Blog GIF'));

    modalDescription.innerHTML += '<a href="/pages/Acacia/index.html" target="_blank" class="page-link">Link to view the page</a>';

    clearModalContent();

    createModalElement(
        'Acacia Blog',
        modalDescription.innerHTML
    );
}

export function travelBlogModal() {
    const modalDescription = document.createElement('p');
    modalDescription.textContent = 'Sixth project where we used a reference layout again. This time, I brought together everything we had learned so far to build a full blog-style page.';

    modalDescription.appendChild(addGifToModal('img/gifs/travel.gif', 'Travel Blog GIF'));

    modalDescription.innerHTML += '<a href="/pages/Travel/index.html" target="_blank" class="page-link">Link to view the page</a>';

    clearModalContent();

    createModalElement(
        'Travel Blog',
        modalDescription.innerHTML
    );
}

export function vehiclePageModal() {
    const modalDescription = document.createElement('p');
    modalDescription.textContent = 'Third project, also based on a layout from class. The goal was to create a car sales form and practice working with HTML form elements.';

    modalDescription.appendChild(addGifToModal('img/gifs/forms.gif', 'Vehicle Page GIF'));

    modalDescription.innerHTML += '<a href="/pages/Register_Vehicle/index.html" target="_blank" class="page-link">Link to view the page</a>';

    clearModalContent();

    createModalElement(
        'Vehicle Page',
        modalDescription.innerHTML
    );
}

export function avatarPageModal() {
    const modalDescription = document.createElement('p');
    modalDescription.textContent = 'Fourth project using a pre-defined layout. It focused on adding buttons and learning how to make the page responsive across different screen sizes.';
    
    modalDescription.appendChild(addGifToModal('img/gifs/avatar.gif', 'Avatar Page GIF'));
    
    modalDescription.innerHTML += '<a href="/pages/Avatar/index.html" target="_blank" class="page-link">Link to view the page</a>';

    clearModalContent();

    createModalElement(
        'Avatar Page',
        modalDescription.innerHTML
    );
}

export function instaPageModal() {
    const modalDescription = document.createElement('p');
    modalDescription.textContent = 'Fifth project, quite similar to the Avatar one. I followed another layout and kept improving on responsive design, forms, and interactive components.';
    
    modalDescription.appendChild(addGifToModal('img/gifs/instagram.gif', 'Instagram Page GIF'));
    
    modalDescription.innerHTML += '<a href="/pages/Instagram/index.html" target="_blank" class="page-link">Link to view the page</a>';

    clearModalContent();

    createModalElement(
        'Instagram Page',
        modalDescription.innerHTML
    );
}

export function qrPageModal() {
    const modalDescription = document.createElement('p');
    modalDescription.textContent = 'Seventh project and my first one using JavaScript too! I used a layout provided in class and integrated the QRServer API to generate QR codes from links.';
    
    modalDescription.appendChild(addGifToModal('img/gifs/qr.gif', 'QR Page GIF'));
    
    modalDescription.innerHTML += '<a href="/pages/QR_Generator/index.html" target="_blank" class="page-link">Link to view the page</a>';

    clearModalContent();

    createModalElement(
        'QR Page',
        modalDescription.innerHTML
    );
}

export function calculatorPageModal() {
    const modalDescription = document.createElement('p');
    modalDescription.textContent = 'Eighth project with HTML, CSS, and JavaScript. I followed a template to build a simple calculator that shows multiplication tables based on user input.';
    
    modalDescription.appendChild(addGifToModal('img/gifs/calc.gif', 'Calculator Page GIF'));
    
    modalDescription.innerHTML += '<a href="/pages/Calculator/index.html" target="_blank" class="page-link">Link to view the page</a>';

    clearModalContent();

    createModalElement(
        'Calculator Page',
        modalDescription.innerHTML
    );
}
