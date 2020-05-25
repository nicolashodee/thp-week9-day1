//EXERCICE 1 BIS
// 1. trouver et stocker l'element que l'on va ecouter 
var clickerFooter = document.getElementById("footer");
// 2. definir la fonction qui vq repondre a l'evenement 
var x=1;
var onFooterClick = function () {
  clickerFooter.innerHTML = "wooow you clicked me";
  console.log(`clic number ${x}`);
  x++;
}
//3.add the event listener for the leement 
clickerFooter.addEventListener("click", onFooterClick);


//EXERCICE 2 NAVBAR
var clickerNavBar = document.getElementsByClassName("navbar-toggler-icon"); 
var onNavBarClick = function () {
  var navBar = document.getElementById("navbarHeader");
  navBar.classList.toggle("collapse");
}
clickerNavBar[0].addEventListener("click", onNavBarClick);


//EXERCICE 3 TEXTE ROUGE
let firstCard = document.getElementsByClassName('card')[0];
let firstEditBtn = firstCard.getElementsByTagName('button')[1];
firstEditBtn.addEventListener('click', function() {
  firstCard.style.color = 'red'
});

//EXERCICE 4 TEXTE VERT TOGGLE

let secondCard = document.getElementsByClassName('card')[1];
let secondEditBtn = secondCard.getElementsByTagName('button')[1];
secondEditBtn.addEventListener('click', function() {
  if (secondCard.style.color === 'green'){
    secondCard.style.color = '' ;
  }else if (secondCard.style.color === '') {
    secondCard.style.color = 'green';
  }
});

// EXERCICE 5 BOOTSTRAP, pas reussi a faire le reverse, le else if ne marche po :(

let boostrapLink = document.querySelector("link[href*=\"bootstrapcdn\"]");
let header = document.getElementsByTagName('header')[0];

header.addEventListener('dblclick', function() {
let bootstrap=true;

if (bootstrap == true){
  boostrapLink.href = "";
  bootstrap = false;
  console.log(bootstrap);
}   
else if (bootstrap == false){ 
  boostrapLink.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
  bootstrap = true;}
});


//EXERCICE 6 REDUIRE LES CARDS AU SURVOL DE VIEW

let allCards=document.getElementsByClassName('card');


for (i=0; i < allCards.length; i++) {
  let reduced = false;
  let Card = allCards[i];
  let viewBtn = Card.getElementsByTagName('button')[0];
  


  function reduceCard () {
    let CardImg = Card.getElementsByTagName('img')[0];
    let CardParagraph = Card.getElementsByClassName('card-text')[0];

    if (reduced == false) {
      CardImg.style.width = '20%';
      CardParagraph.style.visibility = "hidden";
      reduced=true;
    } else {
      CardImg.style.width = '100%';
      CardParagraph.style.visibility = "visible";
      reduced=false;
    }
  };
  viewBtn.addEventListener("mouseover", reduceCard);
}


/* VERSION pour une card
let firstViewBtn = firstCard.getElementsByTagName('button')[0];
firstViewBtn.addEventListener("mouseover", reduceCard);

let reduced = false;

function reduceCard () {
  let firstCardImg = firstCard.getElementsByTagName('img')[0];
  let firstCardParagraph = firstCard.getElementsByClassName('card-text')[0];
  //firstCardParagraph.classList.toggle("collapse");
  if (reduced == false){
    firstCardImg.style.width = '20%';
    firstCardParagraph.style.visibility = "hidden";
    reduced=true;
  } else {
    firstCardImg.style.width = '100%';
    firstCardParagraph.style.visibility = "visible";
    reduced=false;
  }
};
*/

