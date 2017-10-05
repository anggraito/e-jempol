<template>
  <div class="col-md-12 wait">
    <nav-bar />
    <div class="img">
      <img src="../assets/images/logo.jpg">
    </div>
    
    <div class="waiting-room">
      <h4>Games Room</h4>
      <ul>
        <li>Pemain Pertama <button><span class="glyphicon glyphicon-arrow-right" aria-hidden="true"></span></button></li>
        <li>Pemain Kedua <button><span class="glyphicon glyphicon-arrow-right" aria-hidden="true"></span></button></li>
        <li>Pemain Ketiga <button><span class="glyphicon glyphicon-arrow-right" aria-hidden="true"></span></button></li>
        <li class="no-color">...</li>
      </ul>
      <button class="btn start-btn" disabled>Start Game</button>
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
  margin: 0 35%;
  background-color: #f9f9f9;
  padding-bottom: 20px;
}
ul{
  padding: 10px 0 20px 0;
  display: block;
}
li{
  list-style: none;
  background-color: #febb32;
  border-radius: 50px;
  margin: 5px 15%;
  padding: 5px;
  font-weight: 500;
}
h4{
  color: #febb32;
  padding: 10px;
  font-weight: 800;
  border: 2px dashed #febb32;
}
.start-btn{
  border-radius: 50px;
  background-color: #febb32;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  padding: 5px 35px;
}
.no-color{
  background-color: #f9f9f9;
}
</style>
