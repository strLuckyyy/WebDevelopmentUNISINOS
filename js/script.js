
import { 
    guitarBlogModal,
    acaciaBlogModal,
    travelBlogModal,
    vehiclePageModal,
    avatarPageModal,
    instaPageModal,
    qrPageModal,
    calculatorPageModal
} from './components.js';

const openModalButtons = document.querySelectorAll('.project-view-button');
const closeModalButton = document.querySelector('#close-modal');

const modal = document.querySelector('#modal');
const fade = document.querySelector('#fade');

const modalMap = {
    'guitar': guitarBlogModal,
    'acacia': acaciaBlogModal,
    'travel': travelBlogModal,
    'vehicle': vehiclePageModal,
    'avatar': avatarPageModal,
    'insta': instaPageModal,
    'qr': qrPageModal,
    'calc': calculatorPageModal
};

const toggleModal = () => {
    [modal, fade].forEach((element) => element.classList.toggle('hide'));
}

// Add event listeners to open modal buttons
// Each button should have a value attribute that corresponds to the key in modalMap
openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const key = button.value;
        const modalFunction = modalMap[key];

        if (modalFunction === undefined) {
            console.error(`No modal function found for key: ${key}`);
            return;
        }

        modalFunction();
        toggleModal();
    });
});

[closeModalButton, fade].forEach(element => {
    element.addEventListener('click', () => {
        toggleModal();
    });
});

