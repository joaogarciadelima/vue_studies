const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: 'Type your Name',
    };
  },
  methods:{
    add(num){
      this.counter = this.counter + num;
    },
    rem(num){
      this.counter = this.counter - num;
    },
    setName(event){
      this.name = event.target.value;
    },
  }
});

app.mount('#events');
