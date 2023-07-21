function checkScreenWidth() {
    // Get the current screen width
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  
    // Define the maximum width at which you want to load the specific content
    var maxWidth = 700; // Set your desired maximum width here (e.g., 768 pixels)
  
    // Check if the screen width is less than or equal to the specified maximum width
    if (screenWidth <= maxWidth) {
      // Hide the default content and show the specific content
      document.getElementById('defaultContent').style.display = 'none';
      document.getElementById('specificContent').style.display = 'block';
    } else {
      // Show the default content and hide the specific content
      document.getElementById('defaultContent').style.display = 'block';
      document.getElementById('specificContent').style.display = 'none';
    }
  }
  
  // Call the checkScreenWidth function on page load and on window resize
  window.addEventListener('load', checkScreenWidth);
  window.addEventListener('resize', checkScreenWidth);
  