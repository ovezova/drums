const drum = document.querySelectorAll('.drum');
console.log(drum)


for(i=0; i<drum.length; i++){
    let currentDrum = drum[i].value;
     drum[i].onclick=()=> new Audio(`sounds/${currentDrum}.mp3`).play(); 
}


document.addEventListener("keypress", function(event) {
    
    let array = ["w","s","l","j","k","a","d"];

   if(array.includes(event.key)){
    new Audio(`sounds/tom-${event.key}.mp3`).play();
   }

   const button = document.querySelector('.'+ event.key);

   button.classList.add("pressed");

   setTimeout(() => {
    button.classList.remove("pressed");
       
   }, 300);

})

