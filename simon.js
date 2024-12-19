

// Тоглоомын үндсэн container
const gameContainer = document.getElementById("game-container");
// Дүрснүүдийн мэдээлэл
const animals = [
  { name: "dove", image: "dove.png", x: 300, y: 100 },
  { name: "rabbit", image: "rabbit1.gif", x: 320, y: 280 },
  { name: "monkey", image: "monkey.gif", x: 320, y: 440 },
  { name: "elephant", image: "elephant.png", x: 320, y: 600 },
];
// Дүрснүүдийг үүсгэж, байрлуулах функц
function createAnimals() {
  animals.forEach((animal) => {
    // Animal wrapper
    const animalDiv = document.createElement("div");
    animalDiv.classList.add("animal");
    animalDiv.style.left = `${animal.x}px`;
    animalDiv.style.top = `${animal.y}px`;

    // Зураг нэмэх
    const img = document.createElement("img");
    img.src = animal.image;
    img.alt = animal.name;
    // Товчийг эвенттэй болгох
    animalDiv.addEventListener("click", () => {
      alert(`You clicked on the ${animal.name}!`);
    });
    animalDiv.appendChild(img);
    gameContainer.appendChild(animalDiv);
  });
}
// Тоглоом эхлүүлэх
createAnimals();

// //deed talin 3 tovch

 // Элементүүд нэмэх үндсэн container
//  const app = document.querySelector(".app");
// Top Controls Wrapper
const topControls = document.createElement("div");
 topControls.className = "top-controls";
// Нот дүрс ба тоо хэсэг
 const scoreDiv = document.createElement("div");
 scoreDiv.className = "score";
 const noteSpan = document.createElement("span");
 noteSpan.className = "note";
 noteSpan.innerHTML = "&#9835;"; // Нот дүрс
 const numberSpan = document.createElement("span");
 numberSpan.className = "number";
 numberSpan.textContent = "0";
scoreDiv.appendChild(noteSpan);
 scoreDiv.appendChild(numberSpan);

 const soundCloseDiv=document.createElement("div");
 topControls.appendChild(soundCloseDiv)
 soundCloseDiv.classList.add("soundCloseStyle")


 // Дуу товч (Sound Button)
const soundButton = document.createElement("div");
 soundButton.className = "circle-button sound-button";
 const soundIcon = document.createElement("img");
 soundIcon.src = "soundicon.png"; // Дуу дүрсний зам
 soundIcon.alt = "Sound";
 soundButton.appendChild(soundIcon);
 // Хаах товч (Close Button)
 const closeButton = document.createElement("div");
 closeButton.className = "circle-button close-button";
 const closeIcon = document.createElement("img");
 closeIcon.src = "closeicon.png"; // Хаах дүрсний зам
 closeIcon.alt = "Close";
 closeButton.appendChild(closeIcon);
 // Бүх элементийг wrapper-д нэмэх
 topControls.appendChild(scoreDiv);
 soundCloseDiv.appendChild(soundButton);
 soundCloseDiv.appendChild(closeButton);
 // Бүх topControls-ийг app руу нэмэх
 gameContainer.appendChild(topControls);

//  //Эхлэх товч хийх
 const startButton = document.createElement("div");
 startButton.className = "startButton";
 startButton.innerHTML= "START"
 gameContainer.appendChild(startButton);
