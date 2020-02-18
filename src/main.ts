import "./assets/css/main.css"; 
import { core } from "Game/core";

/* initialize Engine */
document.addEventListener('DOMContentLoaded', () => {
    let game = new core( document.getElementById('game')! );

    game.init();
}, false);

