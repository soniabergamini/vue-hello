const { createApp } = Vue

createApp({
    data() {
        return {
            title: "Welcome!",
            mainClasses: "dFlex justyCenter alignCenter fDirecCol h100Vh w100Perc",
            imgBackground: "background-image: url(./assets/img/wallpaper.jpeg); background-size: 100%;",
            image: {
                imgSrc: "./assets/img/astro.png",
                imgAltText: "astronaut-img",
                imgWIdth: "200",
                imgClasses: "pAbsolute",
                imgStyle: "position: relative",
            },
            button: {
                btnFlyText: 'FLY WITH ME ',
                btnFlyClasses: "cPointer",
                btnPlanetText: ' FLY ON MARS',
                btnPlanetClasses: "cPointer",
            }
        }
    },
    methods: {
        // Add animation to another element on page (astronaut image)
        astroFly() {
            this.title = "Welcome to Solaris!",
            this.image.imgStyle = "animation: fly 10s linear infinite",
            this.button.btnFlyClasses = "dNone"
        },
        // Change main background, add style and animation to other elements on page
        changePlanet() {
            this.title = "Welcome to Mars!",
            this.image.imgStyle = "animation: fly 10s linear infinite",
            this.button.btnPlanetClasses = "dNone",
            this.button.btnFlyClasses = "dNone",
            this.imgBackground = "background-image: url(./assets/img/mars.jpeg); background-size: 100%;"
        }
    }
}).mount('#app')