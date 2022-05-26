Vue.createApp({
    data() {
        return {
            num1: "",
            num2: "",
            result: "",
        };
    },
    methods: {
        addNumebrs() {
            return (this.result = parseInt(this.num1) + parseInt(this.num2));
        },
        multiplay() {
            return (this.result = parseInt(this.num1) * parseInt(this.num2));
        },
        divNumbers() {
            return (this.result = parseInt(this.num1) / parseInt(this.num2));
        },
        minsNumbers() {
            return (this.result = parseInt(this.num1) - parseInt(this.num2));
        },
    },
}).mount("#app");