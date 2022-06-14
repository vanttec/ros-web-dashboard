Vue.createApp({
    mounted(){
             var today = new Date();
             this.$refs.p.textContent = 'La fecha actual es:  ' + today;
    },

    data(){
        return{
            color: "FFFFFF",
            color2: "FFFFFF",
        }
    },

    methods: {
        btnGreen() {
            this.color = '#FFFFFF';
            this.color2 = '#039BE5';
          },
        btnBlue() {
            this.color = '#039BE5';
            this.color2 = '#FFFFFF';
          },
    },


}).mount('#app_color');