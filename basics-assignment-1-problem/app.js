const app = Vue.createApp({
    data: function() {
        return {
            yourName: 'Jones',
            yourAge: 38,
            yourAgeFiveYears: 38 + 5,
            imagelink: 'https://www.iplace.com.br/ccstore/v1/images/?source=/file/v519310528255452400/products/218969.00-magic-trackpad3-apple-mac-bluetooth-mk2d3be-a.jpg&height=1000&width=1000&quality=0.9'
    
        };
    },
    methods: {
        numero: function(){
            const numeroRandomico = Math.random();
            return numeroRandomico;
        }
    },

});

app.mount('#assignment');