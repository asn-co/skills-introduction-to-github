document.addEventListener("DOMContentLoaded", () => {
    
    const icons = document.querySelectorAll('.icon-item');
  
   //each icon
    icons.forEach((icon, index) => {
      //0.2s
      setTimeout(() => {
        icon.classList.add('show'); // CSS animation
      }, 200 * index);
    });
  });