<template>
  <div class="col-md-12 wait">
    <nav-bar />
    <div class="img">
      <img src="../assets/images/logo.jpg">
    </div>
    
    <div class="waiting-room">
      <h4>Games Room</h4>
      <ul>
        <li>Pemain Pertama</li>
        <li>Pemain Kedua</li>
        <li>Pemain Ketiga</li>
        <li>...</li>
      </ul>
      <button>Start Game</button>
    </div>

  </div>
</template>

<script>
import navBar from '@/components/Navbar'
export default {
  name: 'wait',
  data () {
    return {
      msg: 'test'
    }
  },
  components: {
    navBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img{
  text-align: center;
}
img{
  width: 150px;;
}
.waiting-room{
  text-align: center;
}
ul{
  padding-left: 0;
  background-color: #f9f9f9;
  display: block;
  margin: 0 35%;
}
li{
  list-style: none;
}
</style>
