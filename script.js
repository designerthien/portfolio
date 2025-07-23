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
    
    // Adjust work cards for mobile
    if (window.innerWidth <= 430) {
      const workCards = document.querySelectorAll('.frame-wrapper');
      workCards.forEach(card => {
        const imageWrapper = card.querySelector('.image-wrapper');
        const contentDiv = card.querySelector('.div-3');
        if (imageWrapper && contentDiv) {
          card.querySelector('.div-2').style.flexDirection = 'column';
          imageWrapper.style.width = '100%';
          contentDiv.style.width = '100%';
        }
      });
    }
  }
  
  // Initial call and event listener for resize
  adjustLayout();
  window.addEventListener('resize', adjustLayout);
  
  // Fix for mobile viewport height issues
  function setMobileHeight() {
    // First we get the viewport height and multiply it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  
  setMobileHeight();
  window.addEventListener('resize', setMobileHeight);
});
