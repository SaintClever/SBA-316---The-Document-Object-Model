let container = document.getElementById("container");
let textarea = document.querySelector("#textarea");
let output = document.querySelector("#output");

let snippets = {
"nope:css": '<link rel="stylesheet" href="style.css">',

"nope:red": `<h2>Bye Bye Bye <s style="color: red;">Codesandbox</s> and <s style="color: red;">VSCode</s></h2>

<video controls autoplay width="45%">
  <source src="assets/Deadpool and Wolverine - Bye Bye Bye.mp4" type="video/mp4">
</video>`,

"nope:!":`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>

</body>
</html>`};


// focus
setTimeout(() => {textarea.focus();}, 1000);


// Code snippets
let updateOuput = () => {
  if (textarea.value === "nope:!") {
    textarea.value = snippets["nope:!"];
  }

  if (textarea.value === "nope:css") {
    textarea.value = snippets["nope:css"];
  }

  if (textarea.value === "nope:red") {
    textarea.value = snippets["nope:red"];
  }
  output.innerHTML = textarea.value;
}


// Prevent Default Tab
let preventTab = (e) => {
  if (e.key === "Tab") {
    e.preventDefault();
    textarea.value += "   ";
  }
}


// Themes
let themes = () => {
  if (textarea.value === "nope:theme") {

    let theme = prompt(`
      Available Themes:
      - deadpool
      - halloween
      - manara
      - matrix
      - tishana
    `)

    if (theme.toLowerCase() === "deadpool") {
      textarea.style.backgroundColor = "black";
      textarea.style.color = "red";
      textarea.value = '';
    }

    if (theme.toLowerCase() === "matrix") {
      textarea.style.backgroundColor = "black";
      textarea.style.color = "greenyellow";
      textarea.value = '';
    }

    if (theme.toLowerCase() === "manara") {
      textarea.style.backgroundColor = "black";
      textarea.style.color = "blue";
      textarea.style.background = "url('assets/manara.png') no-repeat center";
      textarea.style.backgroundSize = "cover";
      textarea.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
      textarea.style.backgroundBlendMode = "lighten";
      textarea.value = '';
    }

    if (theme.toLowerCase() === "tishana") {
      textarea.style.backgroundColor = "white";
      textarea.style.color = "hotpink";
      textarea.style.background = "url('assets/jigglypuff.gif') no-repeat center";
      textarea.style.backgroundSize = "cover";
      textarea.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
      textarea.style.backgroundBlendMode = "lighten";
      textarea.value = '';
    }
  }
}


// Orientation
let leftOrRight = () => {
  container.removeChild(textarea);
  textarea.setAttribute("name", "textarea");
  textarea.setAttribute("id", "textarea");
  textarea.setAttribute("placeholder", "🫵 <h1>VSNode: your code goes here</h1> 👈");
  textarea.value = '';
  output.innerHTML = '';
}

let textareaPosition = () => {
  if (textarea.value === "nope:right") {
    leftOrRight();
    container.append(textarea);
    textarea.focus();
  }

  if (textarea.value === "nope:left") {
    leftOrRight();
    container.prepend(textarea);
    textarea.focus();
  }
}


// Save File
let saveFile = () => {
  if (textarea.value === "nope:save") {
    window.open("https://www.youtube.com/watch?v=bFEoMO0pc7k&ab_channel=TheParodyFactory");
    textarea.value = '';
  }
}


// Event Listeners
textarea.addEventListener("keyup", () => {updateOuput(), themes(), saveFile(), textareaPosition()})
textarea.addEventListener("keydown", (e) => {preventTab(e)});