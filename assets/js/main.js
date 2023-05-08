const { createApp } = Vue

createApp({
    data() {
        return {
            title: "Welcome!",
            mainClasses: "dFlex justyCenter alignCenter fDirecCol h100Vh w100Perc",
            imgBackground: "background-image: url(./assets/img/wallpaper.jpeg)",
            image: {
                imgSrc: "./assets/img/astro.png",
                imgAltText: "astronaut-img",
                imgWIdth: "200",
            }
        }
    },
}).mount('#app')