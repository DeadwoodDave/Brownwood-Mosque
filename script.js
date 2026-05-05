const images = [
  "https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a2/Donald_Trump_2017.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/3/3f/Donald_Trump_2020.jpg"
];

function openModal(i) {
  document.getElementById("modal").style.display = "block";
  document.getElementById("modalImg").src = images[i];
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}