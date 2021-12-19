const label = document.getElementById("minun__label");
/* Needs to be global for checking in function */
const checkbox = document.getElementById("minun__checkbox");
/* first reset checkbox to unchecked on every pageload */
checkbox.checked = false;

/**
 * 
 * @param {*} checkbox that needs to be checked
 * @returns true if checked, false if unchecked
 */
const checkStatusofCheckbox = checkbox => {
    if(checkbox.checked === true){
        return true;
    }
    return false;
}

/**
 * 
 * @param {*} event default event that comes with onclick
 * @returns void. Changes title of page
 * 
 */
label.onclick = event => {
    if(checkStatusofCheckbox(checkbox)){
        document.title = "Minun";
        return;
    }
    document.title = "Plusle";
}

const minun__cry = document.getElementsByClassName("minun__cry")[0];
const plusle__cry = document.getElementsByClassName("plusle__cry")[0];
const soundButton = document.getElementsByClassName("soundButton")[0];

/**
 * 
 * @param {*} event default event that comes with onlick
 * @returns void. Plays the cry of Minun or Plusle depending on which one is on screen. 
 */
soundButton.onclick = event => {
    if(checkStatusofCheckbox(checkbox)){
        plusle__cry.play();
        return;
    }
    minun__cry.play();
    return;
}