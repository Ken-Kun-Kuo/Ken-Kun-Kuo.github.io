document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        // Check if all fields are filled
        const allFieldsFilled = Array.from(contactForm.elements).every((element) => {
            return (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') && element.value.trim() !== '';
        });

        if (allFieldsFilled) {
            // Disable the submit button to prevent multiple submissions
            const submitButton = contactForm.querySelector('button[type="submit"]');
            submitButton.disabled = true;
            submitButton.textContent = 'Submitting...';

            // Simulate a delay for demonstration purposes
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Submit the form
            contactForm.submit();
        } else {
            alert('Please fill out all fields before submitting.');
        }
    });
});
