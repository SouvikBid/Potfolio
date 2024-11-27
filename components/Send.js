const form = document.getElementById('myForm');
const emailTo = 'souvik.bid1211@gmail.com'; 

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const formData = new FormData(form);
  const emailBody = [];

  for (const [key, value] of formData.entries()) {
    emailBody.push(`${key}: ${value}`);
  }

  const emailSubject = formData.get('subject') || 'Contact Form Submission';

  fetch(`https://api.emailjs.com/api/v1.0/email/send`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YOUR_API_KEY' // Replace with your EmailJS API key
    },
    body: JSON.stringify({
      service_id: 'service_q9njhsf', // Replace with your EmailJS service ID
      template_id: 'template_3quz2fm', // Replace with your EmailJS template ID
      // user_id: 'YOUR_USER_ID', // Replace with your EmailJS user ID
      template_params: {
        to: emailTo,
        subject: emailSubject,
        html: emailBody.join('<br>')
      }
    })
  })
    .then(response => {
      if (response.ok) {
        alert('Email sent successfully!');
        form.reset();
      } else {
        alert('Error sending email. Please try again.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error sending email. Please try again.');
    });
});
