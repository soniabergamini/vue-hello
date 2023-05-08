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
                imgClasses: "pAbsolute",
                imgStyle: "position: relative",
            },
            button: {
                btnText: "FLY WITH ME",
                btnClasses: "cPointer",
            }
        }
    },
    methods: {
        // Add animation to another element on page
        astroFly() {
            this.title = "Welcome on Mars!",
            this.image.imgStyle = "animation: fly 10s linear infinite",
                this.button.btnClasses = "dNone"
        }
    }
}).mount('#app')