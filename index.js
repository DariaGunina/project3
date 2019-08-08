import { appendFile } from "fs";

    const popup = document.querySelector(".collector");
    const buttonOpen = document.querySelector(".button-open");
    const buttonClose = document.querySelector(".button-close");
    
    buttonOpen.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("collector_hidden");
    });
    
    buttonClose.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.add("collector_hidden");
    });

    document.addEventListener('keydown', function(evt) {
        if(evt.keyCode===27) {
          popup.classList.add('collector_hidden');
        }
        
      });
   
      input.oninput = function() {
        result.innerHTML = input.value;
      };