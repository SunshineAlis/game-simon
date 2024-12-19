// const images = ["123.gif", "elephant.png", "monkey.gif", "images.jpeg"];
// // Зураг нэмэх контейнер
// const container = document.getElementById("imageContainer");
// // Массив дахь зураг бүрийг DOM-д нэмэх
// images.forEach((src) => {
//   const img = document.createElement("img");
//   img.src = src; // Зурагны эх сурвалж
//   img.alt = "Uploaded Image";
//   img.classList.add("img");
//   container.appendChild(img); // Контейнэрт зураг нэмэх
// });

// const button = document.createElement("p", "img");
// button.innerHTML = "number";
// button.style.background = "yellow";
// button.style.padding = "10px";
// button.style.width = "50px";
// button.style.marginLeft = "50px";
// button.style.marginTop = "10px";
// button.style.borderRadius = "5px";
// document.getElementById("imageContainer").appendChild(button);

// Тоглоомын үндсэн container
const gameContainer = document.getElementById("game-container");
// Дүрснүүдийн мэдээлэл
const animals = [
  { name: "dove", image: "dove.png", x: 100, y: -110},
  { name: "elephant", image: "elephant.png", x: 100, y: 250 },
  { name: "monkey", image: "monkey.gif", x: 100, y: 130 },
  { name: "rabbit", image: "rabbit1.gif", x: 100, y: 10},
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

// // Элементүүд нэмэх үндсэн container
// const app = document.querySelector(".app");
// // Top Controls Wrapper
// const topControls = document.createElement("div");
// topControls.className = "top-controls";
// // Нот дүрс ба тоо хэсэг
// const scoreDiv = document.createElement("div");
// scoreDiv.className = "score";
// const noteSpan = document.createElement("span");
// noteSpan.className = "note";
// noteSpan.innerHTML = "&#9835;"; // Нот дүрс
// const numberSpan = document.createElement("span");
// numberSpan.className = "number";
// numberSpan.textContent = "0";
// scoreDiv.appendChild(noteSpan);
// scoreDiv.appendChild(numberSpan);
// // Дуу товч (Sound Button)
// const soundButton = document.createElement("div");
// soundButton.className = "circle-button sound-button";
// const soundIcon = document.createElement("img");
// soundIcon.src = "sound-icon.png"; // Дуу дүрсний зам
// soundIcon.alt = "Sound";
// soundButton.appendChild(soundIcon);
// // Хаах товч (Close Button)
// const closeButton = document.createElement("div");
// closeButton.className = "circle-button close-button";
// const closeIcon = document.createElement("img");
// closeIcon.src = "close-icon.png"; // Хаах дүрсний зам
// closeIcon.alt = "Close";
// closeButton.appendChild(closeIcon);
// // Бүх элементийг wrapper-д нэмэх
// topControls.appendChild(scoreDiv);
// topControls.appendChild(soundButton);
// topControls.appendChild(closeButton);
// // Бүх topControls-ийг app руу нэмэх
// app.appendChild(topControls);
