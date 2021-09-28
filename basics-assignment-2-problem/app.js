const app = Vue.createApp({
    data: function(){
        return{
            message: '',
            name: 'Input your name',
            email: 'Input your email',
        }
    },
    methods: {
        submitForm: function(){
            alert('enviado!');
        },
        setName: function(event){
            this.name = event.target.value;
        },
        setEmail: function(event){
            this.email = event.target.value
        }

    }
});

app.mount('#assignment')