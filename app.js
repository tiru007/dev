const url = "hhttp://localhost:7071/api/GetDevices";

const app = Vue.createApp({
   data() {
       return {
           results : []
       }
    },
    mounted() {
      axios.get(url).then(response => {
        this.results = response.data
      })
    }
       
   
})

app.mount('#app')