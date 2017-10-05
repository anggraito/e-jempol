var app = new Vue({
  el: '#app',
  data: {
    products: [],
    cart: 0,
    cartitems: [],
    username: '',
    password: ''
  },
  methods:{
    findAll () {
      var self = this
      return axios.get(`http://localhost:3000/api/products`)
      .then(response => {
        console.log(response.data)
        self.products = response.data
      })
      .catch(err => {
        console.log(err);
      })
    },
    addlabelcart(item){
      console.log('addlabelcart')
      var self = this
      item.items = 1
      item.subtotal = item.price * parseInt(item.items)
      self.cart++
      self.products.stock--
      console.log('items ', item)
      self.cartitems.push(item)
    },
    removecart(item){
      var self = this
      self.cart--
      self.products.stock++
      self.cartitems.splice(item,1)
    },
    addTransactions(){
      var self = this
      var transCart = []
      self.cartitems.forEach(cart => {
        transCart.push(cart._id)
        console.log("cart id?",cart._id)
      })
      console.log("ini transcart",transCart)
      axios.post('http://localhost:3000/api/transactions', {
        membername: '59c0e887d75b702f386f2422',
        total: self.total,
        orderlist: transCart.join(',')
      })
      .then(response => {
        self.cart = 0
        self.cartitems = []
        console.log(response.data)
      })
      .catch(err => {
        console.log(err.response.data)
      })
    },
    login(){
      var self = this
      return axios.post(`http://localhost:3000/api/signin`, {
        username: self.username,
        password: self.password
      })
      .then(({response}) => {
        localStorage.setItem('token', response)
        console.log("ini response data",response.data)
        self.username = ''
        self.password = ''
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
  created(){
    this.findAll()
  },
  computed:{
    newitems(){
      return this.products.filter(function(newitem){
        return newitem.stock == 1
      })
    },
    total(){
      var self = this
      var jumlah = 0
      self.cartitems.forEach(itemHarga => {
        jumlah += itemHarga.subtotal
      })
      return jumlah
    }
  }
})