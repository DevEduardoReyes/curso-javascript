document.querySelector('.menu-responsive').addEventListener('click', () => {
    
    document.querySelector('nav ul').classList.toggle('show');
});

document.querySelectorAll('nav ul li a').forEach((enlace) => {
    enlace.addEventListener('click', () => {
      document.querySelector('nav ul').classList.remove('show');
    });
  });