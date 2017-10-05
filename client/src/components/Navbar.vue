<template>
  <div class="col-md-12 nav">
    <button class="btn" @click="doLogout">Logout</button>
  </div>
</template>

<script>
export default {
  name: 'nav',
  data () {
    return {
      msg: 'test'
    }
  },
  methods: {
    doLogout () {
      localStorage.clear()
      this.$router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav{
  background-color: #f9f9f9;
  padding: 10px 5%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
}
</style>
