let cat = document.querySelector('.cat');
let fox = document.querySelector('.fox');
let dog = document.querySelector('.dog');
const chk = document.getElementById('chk');

const catBtn = document.querySelector('.get-cat');
const foxBtn = document.querySelector('.get-fox');
const dogBtn = document.querySelector('.get-dog');

catBtn.addEventListener('click', getRandomCat);
foxBtn.addEventListener('click', getRandomFox);
dogBtn.addEventListener('click', getRandomDog);

chk.addEventListener('change', () => {
  document.body.classList.toggle('dark');
  catBtn.classList.toggle('dark');
  foxBtn.classList.toggle('dark');
  dogBtn.classList.toggle('dark');
});

function getRandomCat() {
  fetch('https://aws.random.cat/meow')
    .then((response) => response.json())
    .then(({file}) => {
      cat.innerHTML = `<img class="item" src="${file}" alt="" />`;
    })
    .catch((err) => {
      console.error('Error:', err);
    })
    .catch((err) => {
      console.error('Error:', err);
    });
}

function getRandomFox() {
  fetch('https://randomfox.ca/floof/')
    .then(response => response.json())
    .then(({image}) => {
      fox.innerHTML = `<img class="item" src="${image}" alt="" />`
    })
    .catch((err) => {
      console.error('Error:', err);
    });
}

function getRandomDog() {
  fetch("https://random.dog/woof.json")
    .then(response => response.json())
    .then(({url}) => {
      dog.innerHTML = `<img class="item" src="${url}" alt="" />`
    })
    .catch((err) => {
      console.error('Error:', err);
    });
}