// Ambil reference untuk elemen button
const button = document.querySelector("button.about");
const buttonPendidikan = document.querySelector("button.pendidikan");
const buttonOrganisasi = document.querySelector("button.organisasi");
const closes = document.querySelector("button.close");
const closesPendidikan = document.querySelector("button.close-pendidikan");
const closesOrganisasi = document.querySelector("button.close-organisasi");
// Ambil reference untuk elemen menu-popup
const menuPopup = document.querySelector("div.container-popup");
const menuPendidikan = document.querySelector("div.container-popup-pendidikan");
const menuOrganisasi = document.querySelector("div.container-popup-organisasi");
const showPopup = document.querySelector("div.popup");
const showPendidikan = document.querySelector("div.popup-pendidikan");
const showOrganisasi = document.querySelector("div.popup-organisasi");

// Tambahkan event listener untuk button ketika diklik about
button.addEventListener("click", () => {
  menuPopup.style.transform = "translateY(0%)";
  showPopup.style.transform = "translateY(0%)";
});
closes.addEventListener("click", () => {
  menuPopup.style.transform = "scale(0%)";
  showPopup.style.transform = "translateY(100%)";
  menuPopup.style.transition = "transform 0.5s ease-in-out";
});

// Tambahkan event listener untuk button ketika diklik pendidikan
buttonPendidikan.addEventListener("click", () => {
  menuPendidikan.style.transform = "translateY(0%)";
  showPendidikan.style.transform = "translateY(0%)";
});
closesPendidikan.addEventListener("click", () => {
  menuPendidikan.style.transform = "scale(0%)";
  showPendidikan.style.transform = "translateY(100%)";
  menuPendidikan.style.transition = "transform 0.5s ease-in-out";
});
// Tambahkan event listener untuk button ketika diklik Organisasi
buttonOrganisasi.addEventListener("click", () => {
  menuOrganisasi.style.transform = "translateY(0%)";
  showOrganisasi.style.transform = "translateY(0%)";
});
closesOrganisasi.addEventListener("click", () => {
  menuOrganisasi.style.transform = "scale(0%)";
  showOrganisasi.style.transform = "translateY(100%)";
  menuOrganisasi.style.transition = "transform 0.5s ease-in-out";
});
