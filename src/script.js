async function handleSubmit(event) {
    event.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        company: document.getElementById('company').value,
        message: document.getElementById('message').value
    };

    try {
        const response = await fetch('/send-message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();

        if (response.ok) {
            alert('Thank you for contacting us! We will get back to you soon.');
            document.getElementById('contactForm').reset();
        } else {
            throw new Error(data.details || data.error || 'Failed to send message');
        }
    } catch (error) {
        alert(`Error: ${error.message}`);
        console.error('Detailed error:', error);
    }
} 