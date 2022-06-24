const PROJECT_NAME = 'Cute';

const btns = [...document.querySelectorAll('.navbar ul a')];
const text = document.querySelector('#text');
const title = document.querySelector('title');

btns.forEach((btn) => btn.addEventListener('click' , (event) => {
  const btn = event.target;
  text.innerHTML = btn.innerText;
  title.innerHTML = `${PROJECT_NAME} – ${btn.innerText}`;

  console.log(btn.innerText);
}))

