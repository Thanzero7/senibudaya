AOS.init();

// Loading Screen
window.addEventListener('load', function () {
    const loadingScreen = document.querySelector('.loading-screen');
    loadingScreen.style.display = 'none';
});

// Tambahkan efek scroll smooth
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Carousel Functionality for Produk
const carouselSlideProduk = document.querySelector('.carousel .carousel-slide');
const carouselImagesProduk = document.querySelectorAll('.carousel .carousel-slide img');

// Buttons for Produk
const prevBtnProduk = document.querySelector('.carousel .prev');
const nextBtnProduk = document.querySelector('.carousel .next');

// Counter for Produk
let counterProduk = 0;
const sizeProduk = carouselImagesProduk[0].clientWidth;

carouselSlideProduk.style.transform = `translateX(${-sizeProduk * counterProduk}px)`;

// Button Listeners for Produk
nextBtnProduk.addEventListener('click', () => {
    if (counterProduk >= carouselImagesProduk.length - 1) return;
    counterProduk++;
    carouselSlideProduk.style.transition = "transform 0.5s ease-in-out";
    carouselSlideProduk.style.transform = `translateX(${-sizeProduk * counterProduk}px)`;
});

prevBtnProduk.addEventListener('click', () => {
    if (counterProduk <= 0) return;
    counterProduk--;
    carouselSlideProduk.style.transition = "transform 0.5s ease-in-out";
    carouselSlideProduk.style.transform = `translateX(${-sizeProduk * counterProduk}px)`;
});

carouselSlideProduk.addEventListener('transitionend', () => {
    if (carouselImagesProduk[counterProduk].id === 'lastClone') {
        carouselSlideProduk.style.transition = "none";
        counterProduk = carouselImagesProduk.length - 2;
        carouselSlideProduk.style.transform = `translateX(${-sizeProduk * counterProduk}px)`;
    }
    if (carouselImagesProduk[counterProduk].id === 'firstClone') {
        carouselSlideProduk.style.transition = "none";
        counterProduk = carouselImagesProduk.length - counterProduk;
        carouselSlideProduk.style.transform = `translateX(${-sizeProduk * counterProduk}px)`;
    }
});

// Carousel Functionality for Dokumentasi
const carouselSlideDokumentasi = document.querySelector('.carousel-dokumentasi .carousel-slide');
const carouselImagesDokumentasi = document.querySelectorAll('.carousel-dokumentasi .carousel-slide img');

// Buttons for Dokumentasi
const prevBtnDokumentasi = document.querySelector('.carousel-dokumentasi .prev');
const nextBtnDokumentasi = document.querySelector('.carousel-dokumentasi .next');

// Counter for Dokumentasi
let counterDokumentasi = 0;
const sizeDokumentasi = carouselImagesDokumentasi[0].clientWidth;

carouselSlideDokumentasi.style.transform = `translateX(${-sizeDokumentasi * counterDokumentasi}px)`;

// Button Listeners for Dokumentasi
nextBtnDokumentasi.addEventListener('click', () => {
    if (counterDokumentasi >= carouselImagesDokumentasi.length - 1) return;
    counterDokumentasi++;
    carouselSlideDokumentasi.style.transition = "transform 0.5s ease-in-out";
    carouselSlideDokumentasi.style.transform = `translateX(${-sizeDokumentasi * counterDokumentasi}px)`;
});

prevBtnDokumentasi.addEventListener('click', () => {
    if (counterDokumentasi <= 0) return;
    counterDokumentasi--;
    carouselSlideDokumentasi.style.transition = "transform 0.5s ease-in-out";
    carouselSlideDokumentasi.style.transform = `translateX(${-sizeDokumentasi * counterDokumentasi}px)`;
});

carouselSlideDokumentasi.addEventListener('transitionend', () => {
    if (carouselImagesDokumentasi[counterDokumentasi].id === 'lastClone') {
        carouselSlideDokumentasi.style.transition = "none";
        counterDokumentasi = carouselImagesDokumentasi.length - 2;
        carouselSlideDokumentasi.style.transform = `translateX(${-sizeDokumentasi * counterDokumentasi}px)`;
    }
    if (carouselImagesDokumentasi[counterDokumentasi].id === 'firstClone') {
        carouselSlideDokumentasi.style.transition = "none";
        counterDokumentasi = carouselImagesDokumentasi.length - counterDokumentasi;
        carouselSlideDokumentasi.style.transform = `translateX(${-sizeDokumentasi * counterDokumentasi}px)`;
    }
});

// Tambahkan efek scroll smooth
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

