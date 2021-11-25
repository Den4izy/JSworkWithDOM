console.log("start");

const p1 = document.querySelector("#p1");    //Захват елемента за допомогою селектора #id / .class/ teg (получає 1-й елемент)
document.querySelectorAll("selectname");      //тоже саие але получає масів усіх елементів (масів)
document.getElementById("id");                  //по ід   (масів)
document.getElementsByClassName("classname");    //       по класу (масів)
document.getElementsByTagName("nagname");          // по тегу (масів)

p1.style.color = "grey";    // міняєм сss (колір)
p1.style.marginTop = "50px"; // свойство з двох слов( margin-top) пишеться через camelCase (marginTop)

p1.classList.add('colorGreen');   // Присвоїть елементу ще один клас
p1.classList.add('colorGreen', 'class2'); // якщо 2 класа

p1.classList.remove('classname');  //delete class

const b1 = document.querySelector(".but1");

b1.onclick = function () {
    this.classList.toggle('colorGreen');  // міняє клас при другому разі вертає обратно (переключає класи)
}

console.log(p1.getAttribute('id'));     // получаєм атрибуи типу класа айди href ...

p1.setAttribute('data-num', 66);  //присвоїть атрибути
console.log(p1.getAttribute('data-num'));


let buts = document.querySelectorAll(".buttons");   //получаємо масів кнопок
let masa = document.querySelector(".massa");        //получаєм елемент поле
for (let i = 0; i < buts.length; i++) {
    buts[i].onclick = function () {                //присвоюємо кожній кнопці собитіє
        m = masa.value;                            //зчитуємо з поля текст
        let p = this.getAttribute("data-price");   //получаємо параметр поточного елемента який визвав функцію методом this і присвоюєм
        console.log(p * m);                        //виводим
    }
}


let elem = document.createElement('div');          //створюємо новий елемент дів
elem.innerHTML = 'Hello';                          //пишем в нього текст
elem.classList.add('colorGreen');                  //присвоюємо стиль... 

document.querySelector('body').appendChild(elem);   //добавляємо його на сторінку в любий елемент