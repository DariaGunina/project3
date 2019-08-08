const popup = document.querySelector(".collector");
const buttonOpen = document.querySelector(".button-open");
const buttonClose = document.querySelector(".button-close");
const buttonAdd = document.querySelector(".collector__button");
const input = document.querySelector("#input");
const target = document.querySelector(".item");

buttonOpen.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("collector_hidden");
});

buttonClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("collector_hidden");
});

document.addEventListener('keydown', function(evt) {
  if(evt.keyCode===27) {
    popup.classList.add('collector_hidden');
  }
  
});

buttonAdd.addEventListener('click', function(evt) {
  evt.preventDefault();
  const text = input.value;
  
  if(text) {
    let div = document.createElement('div');
    div.innerHTML = `<div class="card">${text}     <button>Удалить</button></div>`;
    target.append(div);

    input.value = "";
    input.focus();
    
    const deleteButton = div.querySelector('button');
    deleteButton.addEventListener('click', function(evt) {
      evt.preventDefault();
      div.parentNode.removeChild(div);
    })
  }
});