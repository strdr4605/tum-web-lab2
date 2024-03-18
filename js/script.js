function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav main") {
      x.className += " responsive";
    } else {
      x.className = "topnav main";
    }
  }



  function scroll_top_div(to_where) {
    document.getElementById(to_where).scrollIntoView({ behavior: 'smooth', block: 'center' });

}



document.addEventListener('DOMContentLoaded', () => {
  const popupImage = document.getElementById('mascot');

  // Function to handle the visibility and initial animations
  function showImage() {
    popupImage.style.display = 'block';
    popupImage.classList.add('fadeIn');

    setTimeout(() => {
      popupImage.classList.remove('fadeIn');
      popupImage.classList.add('pulse'); // Start pulse animation after fadeIn completes
    }, 2000); // Match fadeIn duration
  }

  // Initial display of the image after 3 seconds
  setTimeout(showImage, 3000);

  // Disappear after 20 seconds, then reappear after 5 seconds
  setTimeout(() => {
    popupImage.classList.add('fadeOut');

    setTimeout(() => {
      popupImage.classList.remove('fadeOut', 'pulse'); // Remove animations for fade out and pulse
      popupImage.style.display = 'none';

      // Reappear after 5 seconds with pulse animation
      setTimeout(() => {
        showImage(); // Reuse showImage function to manage fadeIn and pulse
      }, 5000);

    }, 2000); // Match fadeOut duration
  }, 20000);

  // Add shake animation every 10 seconds, ensuring it doesn't clash with fade animations
  setInterval(() => {
    // Only add shake if the image is currently displayed
    if (popupImage.style.display !== 'none' && !popupImage.classList.contains('fadeIn') && !popupImage.classList.contains('fadeOut')) {
      popupImage.classList.add('shake');

      setTimeout(() => {
        popupImage.classList.remove('shake');
      }, 800); // Match enhanced shake duration
    }
  }, 10000);
});
