const Burger = document.querySelector(".burger"); //Permet d'accéder au logo et de faire des changements depuis main js

Logo.addEventListener("click", (event) => { //quand on va cliquer sur le logo on va lancer l'évènement click Tout ce qui entre crochet est ce qui va se passer en cliquant
    toggle = !toggle; //interrupteur est égal à son contraire
    if(toggle == false)
    {
        suggestions.style.right = "0%"; //si interrupteur est faux, le menu suggestion va se dérouler
    }
    else
    {
        suggestions.style.right = "-50%";
    }
})

bouton.addEventListener("click", (event) => {
    Modal.style.top = "5%";
})

buttonModal.addEventListener("click", (event) => {
    Modal.style.top = "-95%";
});