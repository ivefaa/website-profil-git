const tombol = document.getElementById("tombolSalam");
const pesan = document.getElementById("pesan");

tombol.addEventListener("click", function () {
  pesan.textContent = "Halo! Saya sedang belajar Git dan GitHub.";
});
