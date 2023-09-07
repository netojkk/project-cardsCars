//ARRAY OBJETO, colocar as informações aqui para criação dos cards de forma dinâmica.

let listCars = [
  {
    name: "BMW Blue",
    img: "img/bmw-a.jpg",
    description: "Um dos carros mais lindo da BMW",
  },
  {
    name: "Carro de Corrida",
    img: "img/carroDeCorrida-v.jpg",
    description: "Carro de corrida brabissimo",
  },
  {
    name: "Ferrari Amarela",
    img: "img/ferrari-a.jpg",
    description: "Um dos carros mais luxuosos do mundo, sem dúvidas.",
  },
  {
    name: "FUSCA",
    img: "img/fusca-l.jpg",
    description:
      "Um dos carros mais conhecidos de todos os tempos (aqui no Brasil).",
  },
  {
    name: "Lamborguine Verde",
    img: "img/Lamborguine-v.jpg",
    description:
      "Não há comentários para esse carro. Uma das marcas mais almejadas do mercado.",
  },
  {
    name: "McLaren",
    img: "img/mcLaren-c.jpg",
    description: "Design lindo e um carro de diversas ocasiões.",
  },
];

//ARROW FUNCTION, que faz uso do .map() para atribuir a função a todos os elementos dentro do array objeto. Passo 1, ligar com a div que mostrara os cards (ela estará vazia no html.). Passo 2, pegar a variavel que foi atribuida com a div, e adicionar pelo js o html (innerHTML) e fazer todo o HTML usando a interpolação ``, e com essa interpolação, usar as informações por meio do array, puxando tudo que for necessário, como 'titulo', 'imagem' e etc

listCars.map((car, position) => {
  let cardCar = document.querySelector(".container-card");
  cardCar.innerHTML += `
    <div class="card">
        <img src="${car.img}" alt=""/>
    <div class="card-body">

      <div class="card-title">
        ${car.name}
      </div>
      


      <a href="#" class="card-button" onClick="zoomModal('${position}')" ><i class="bi bi-search"></i></a>
    
    </div>
</div>
    `

});

function zoomModal (position){  
  let carSelected = listCars[position];
  document.querySelector('#nameCar').innerHTML = carSelected.name
  document.querySelector('#descriptionModal').innerHTML = carSelected.description
  document.querySelector('#imgModal').src = carSelected.img

  new bootstrap.Modal('#zoomModal').show()
}