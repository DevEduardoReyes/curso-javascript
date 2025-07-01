document.querySelector('.menu-responsive').addEventListener('click', () => {
    
    document.querySelector('nav ul').classList.toggle('show');
});

document.querySelectorAll('nav ul li a').forEach((enlace) => {
    enlace.addEventListener('click', () => {
      document.querySelector('nav ul').classList.remove('show');
    });
  });


  const prueba = document.getElementById('barra');
  console.log(prueba);