var app = new Vue({
  el: '#app',
  data: {
    message: 'helloworld!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})
