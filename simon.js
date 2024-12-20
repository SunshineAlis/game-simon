

// // Тоглоомын үндсэн container
// const gameContainer = document.getElementById("game-container");
// // Дүрснүүдийн мэдээлэл
// const animals = [
//   { sound: "bird-voice.mp3", image: "dove.png", x: 300, y: 100 },
//   { sound: "rabbit-softlaugh.mp3" , image: "rabbit1.gif", x: 320, y: 280 },
//   { sound: "monkey.mp3", image: "monkey.gif", x: 320, y: 440 },
//   { sound: "elephant-scream.mp3", image: "elephant.png", x: 320, y: 600 },
// ];
// // Дүрснүүдийг үүсгэж, байрлуулах функц
// function createAnimals() {
//   animals.forEach((animal) => {
//     // Animal wrapper
//     const animalDiv = document.createElement("div");
//     animalDiv.classList.add("animal");
//     animalDiv.style.left = `${animal.x}px`;
//     animalDiv.style.top = `${animal.y}px`;

//     // Зураг нэмэх
//     const img = document.createElement("img");
//     img.src = animal.image;
//     img.alt = animal.name;
//     // Товчийг эвенттэй болгох
//     animalDiv.addEventListener("click", () => {
//       alert(`You clicked on the ${animalSounds}!`);
//     });
//     animalDiv.appendChild(img);
//     gameContainer.appendChild(animalDiv);
   
//   });
// }
// // Тоглоом эхлүүлэх
// createAnimals();

// // //deed talin 3 tovch

//  // Элементүүд нэмэх үндсэн container
// // Top Controls Wrapper
// const topControls = document.createElement("div");
//  topControls.className = "top-controls";
// // Нот дүрс ба тоо хэсэг
//  const scoreDiv = document.createElement("div");
//  scoreDiv.className = "score";
//  const noteSpan = document.createElement("span");
//  noteSpan.className = "note";
//  noteSpan.innerHTML = "&#9835;"; // Нот дүрс
//  const numberSpan = document.createElement("span");
//  numberSpan.className = "number";
//  numberSpan.textContent = "0";
// scoreDiv.appendChild(noteSpan);
//  scoreDiv.appendChild(numberSpan);

//  const soundCloseDiv=document.createElement("div");
//  topControls.appendChild(soundCloseDiv)
//  soundCloseDiv.classList.add("soundCloseStyle")


//  // Дуу товч (Sound Button)
// const soundButton = document.createElement("div");
//  soundButton.className = "circle-button sound-button";
//  const soundIcon = document.createElement("img");
//  soundIcon.src = "soundicon.png"; // Дуу дүрсний зам
//  soundIcon.alt = "Sound";
//  soundButton.appendChild(soundIcon);
//  // Хаах товч (Close Button)
//  const closeButton = document.createElement("div");
//  closeButton.className = "circle-button close-button";
//  const closeIcon = document.createElement("img");
//  closeIcon.src = "closeicon.png"; // Хаах дүрсний зам
//  closeIcon.alt = "Close";
//  closeButton.appendChild(closeIcon);
//  // Бүх элементийг wrapper-д нэмэх
//  topControls.appendChild(scoreDiv);
//  soundCloseDiv.appendChild(soundButton);
//  soundCloseDiv.appendChild(closeButton);
//  // Бүх topControls-ийг app руу нэмэх
//  gameContainer.appendChild(topControls);

// //  //Эхлэх товч хийх
//  const startButton = document.createElement("div");
//  startButton.className = "startButton";
//  startButton.innerHTML= "START"
//  gameContainer.appendChild(startButton);

//  //aynuudig hiih function
//  const animalSounds = [
//   { name: "dove", sound: "bird-voice.mp3",  },
//   { name: "rabbit", sound: "rabbit-softlaugh.mp3", },
//   { name: "monkey", sound: "monkey.mp3",},
//   { name: "elephant", sound: "elephant-scream.mp3", },
// ];
// gameContainer.appendChild(animalSounds)

//
// Тоглоомын үндсэн container
const gameContainer = document.getElementById("game-container");

// Дүрснүүдийн мэдээлэл
const animals = [
  { name: "dove", sound: "voilin-music", image: "dove.png", x: 300, y: 100 },
  { name: "rabbit", sound: "guitar.mp3", image: "rabbit1.gif", x: 320, y: 280 },
  { name: "monkey", sound: "piano.mp3", image: "monkey.gif", x: 320, y: 440 },
  { name: "elephant", sound: "cultue.mp3", image: "elephant.png", x: 320, y: 600 },
];

let sequence = []; // Санамсаргүй дууны дараалал
let playerSequence = []; // Тоглогчийн дараалал
let score = 0; // Оноо

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

    // Амьтан дээр дарахад эвент
    animalDiv.addEventListener("click", () => {
      playerSequence.push(animal.name);
      checkPlayerSequence();
    });

    animalDiv.appendChild(img);
    gameContainer.appendChild(animalDiv);
  });
}

// Санамсаргүй дууны дараалал үүсгэх функц
function playSequence() {
  let index = 0;
  sequence = []; // Шинэ дараалал
  playerSequence = []; // Тоглогчийн оролтыг хоослох

  // 3-4 дууг санамсаргүй байдлаар сонгоно
  for (let i = 0; i < 4; i++) {
    const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
    sequence.push(randomAnimal.name);
  }

   // Дууг тоглуулах
   const interval = setInterval(() => {
    const animal = animals.find((a) => a.name === sequence[index]);
    const audio = new Audio(animal.sound);
    audio.currentTime = 2; // Дууг эхнээс тоглуулна
    audio.play(); // Дуу тоглуулах

    index++;
    if (index >= sequence.length) {
      clearInterval(interval);
    }
  }, 10000); // 1 секунд тутамд дараагийн дууг тоглуулна
}

// Тоглогчийн оруулгыг шалгах функц
function checkPlayerSequence() {
  const currentIndex = playerSequence.length - 1;
  if (playerSequence[currentIndex] !== sequence[currentIndex]) {
    alert("Wrong! Game over!");
    resetGame();
    return;
  }

  if (playerSequence.length === sequence.length) {
    alert("Correct! You win this round!");
    score++;
    updateScore();
    resetGame();
  }
}

// Оноог шинэчлэх функц
function updateScore() {
  numberSpan.textContent = score;
}

// Тоглоомыг дахин эхлүүлэх
function resetGame() {
  sequence = [];
  playerSequence = [];
}

// Top Controls үүсгэх
const topControls = document.createElement("div");
topControls.className = "top-controls";

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
topControls.appendChild(scoreDiv);
gameContainer.appendChild(topControls);

// Эхлэх товч үүсгэх
const startButton = document.createElement("div");
startButton.className = "startButton";
startButton.textContent = "START";
startButton.addEventListener("click", () => {
  playSequence();
});
gameContainer.appendChild(startButton);

// Тоглоомыг эхлүүлэх
createAnimals();

