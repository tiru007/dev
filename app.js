const url = "https://proud-field-0a2fd9210.azurestaticapps.net/api/getdevices";

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