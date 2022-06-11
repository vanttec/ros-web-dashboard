Vue.createApp({
    mounted(){
             var today = new Date();
             this.$refs.p.textContent = 'La fecha actual es:  ' + today;
    },

    data(){
        return{
            show: false,
        }
    },

    methods: {
        toogleShow(){
            this.show = !this.show
        },
    },


}).mount('#app_show');