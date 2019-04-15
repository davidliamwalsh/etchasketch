const number = prompt('Select enter any number to make your grid size');
const resetClear = document.querySelector("button[data-behavior='reset']")
const gridContainer = document.querySelector("div[data-behavior='grid']");

function gridBuild() {

  const gridItemDiv = document.createElement('div');
  gridContainer.appendChild(gridItemDiv)

  gridItemDiv.addEventListener('mouseenter', trail);
  gridItemDiv.classList.add('c-item__border');
  document.body.style.setProperty('--number', number);

  function trail(event) {
    event.target.style.background = 'blue';
  }
}

for (let i = 0; i < number * number; i++) {
  gridBuild()
} 

function clear(event) {
  const refresh = event.view;
  window.location.reload() = refresh;
}

resetClear.addEventListener('click', clear)
