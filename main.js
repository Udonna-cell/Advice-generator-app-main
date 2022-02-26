let adviceId = document.querySelector('#advise-id');
let advice =document.querySelector('.advise');
let sktBdy = document.querySelector(".skt-bdy");
let sktBdy2 = document.querySelector(".second");

async function advise() {
  // body...
  let response = await fetch("https://api.adviceslip.com/advice");
  let data = await response.json();
  
  adviceId.innerText = `advise#${data.slip.id}`;
  advice.innerText = `”${data.slip.advice}”`;
  
    sktBdy.style.display = 'none';
  sktBdy2.style.display = 'none';
  adviceId.style.display = 'block';
  advice.style.display = 'block';
  
}
function anim() {
  sktBdy.style.display = 'block';
  sktBdy2.style.display = 'block';
  adviceId.style.display = 'none';
  advice.style.display = 'none';
  advise();
}

anim();