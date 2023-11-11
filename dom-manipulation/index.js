const container = document.querySelector("#container");
const p = document.createElement("p");
const p1 = document.createElement("p");
const h3 = document.createElement("h3");
const childDiv = document.createElement("div");
const h1 = document.createElement("h1");

p.style.color = "red";
p.textContent = "Hey I'm red";

h3.style.color = "blue";
h3.textContent = "I'm a blue h3";

childDiv.setAttribute('style', 'border: black solid 1px; background-color: pink;');
h1.textContent = "I'm in a div";
p1.textContent = "ME TOO!";

container.appendChild(p);
container.appendChild(h3);
container.appendChild(childDiv);
childDiv.appendChild(h1);
childDiv.appendChild(p1);

// const btn = document.querySelector('#btn');
// btn.addEventListener('click', function (e) {
//   console.log(e.target);
// });
//
// btn.addEventListener('click', function (e) {
//   e.target.style.background = 'blue';
// });
//
// const btn1 = document.querySelector('#btn1');
// btn1.addEventListener('click', () => {
//   alert('Hello World');
// });

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    alert(button.id);
  });
});
