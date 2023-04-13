let iconHome = document.querySelector('#home');
let iconCloset = document.querySelector('#closet');
let iconSpg = document.querySelector('#spg');

const elementos = document.querySelectorAll('.link');

// INICIO

iconHome.classList.add('active');

// HOME

iconHome.addEventListener('click', ()=>{
  elementos.forEach(elemento =>{
    elemento.classList.remove('active');
  })

  iconHome.classList.toggle('active');
})

// CLOSET

iconCloset.addEventListener('click', ()=>{

  elementos.forEach(elemento =>{
    elemento.classList.remove('active');
  })
        
  iconCloset.classList.toggle('active');
})

// SPG

iconSpg.addEventListener('click', ()=>{

  elementos.forEach(elemento =>{
    elemento.classList.remove('active');
  })
        
  iconSpg.classList.toggle('active');
})




