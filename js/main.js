const label = document.getElementById("minun__label");
const checkbox = document.getElementById("minun__checkbox");

/* first reset checkbox to unchecked */
checkbox.checked = false;
label.onclick = event => {
    if(!checkbox.checked){
        document.title = "Plusle";
        return;
    }
    document.title = "Minun";
}