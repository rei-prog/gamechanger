
const contactParagraphs = document.querySelectorAll('.contact-area p');

let currentlyActiveField = null; 


function handleFieldClick(event) {
    event.stopPropagation(); 
    if (currentlyActiveField && currentlyActiveField !== event.currentTarget) {
        currentlyActiveField.style.borderColor = '#ddd'; 
        currentlyActiveField.style.backgroundColor = '#f9f9f9'; 
    }

    currentlyActiveField = event.currentTarget; 
    
    currentlyActiveField.style.borderColor = 'blue'; 
    currentlyActiveField.style.backgroundColor = '#e0f7fa'; 
}

function handleDocumentClick(event) {
    
    if (currentlyActiveField && !event.target.closest('.contact-area')) {
        currentlyActiveField.style.borderColor = '#ddd';
        currentlyActiveField.style.backgroundColor = '#f9f9f9';
        currentlyActiveField = null; 
    }
}

contactParagraphs.forEach(p => {
    p.addEventListener('click', handleFieldClick);
    p.style.cursor = 'pointer'; 
});

document.addEventListener('click', handleDocumentClick);

const submitButton = document.querySelector('.submit-button');

function handleBasicButtonClick() {
  alert('Thank you! Your message (or attempt to send it) has been registered.');
}

if (submitButton) {
  submitButton.addEventListener('click', handleBasicButtonClick);
}