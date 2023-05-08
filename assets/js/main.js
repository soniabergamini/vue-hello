const { createApp } = Vue

createApp({
    data() {
        return {
            title: "Welcome!",
            mainClasses: "dFlex justyCenter alignCenter h100Vh w100Perc"
        }
    },
}).mount('#app')