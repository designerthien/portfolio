document.addEventListener('DOMContentLoaded', function() {
  // Handle form submission
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      // Create mailto link with form data
      const mailtoLink = `mailto:hoangthien2705@gmail.com?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\nMessage:\n' + message)}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      // Optional: Reset form after submission
      contactForm.reset();
    });
  }
  
  // Ensure responsive behavior
  function adjustLayout() {
    const frame = document.querySelector('.frame');
    if (window.innerWidth < 1280) {
      frame.style.width = '100%';
    } else {
      frame.style.width = '1280px';
    }
  }
  
  // Initial call and event listener for resize
  adjustLayout();
  window.addEventListener('resize', adjustLayout);
});
