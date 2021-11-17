let main = document.getElementById('main');

main.id = "main2";
main.style.display = "hidden";
main.innerText = "Mon nouveau texte";


let html = main.innerText;
alert(html);

let a = 1;
if (a === 1) {

    console.log("ceci  " + html);
}

else if (a === 0) {
    let test = document.getElementById('test');
    alert(test);
}

main.style.display = "block";


