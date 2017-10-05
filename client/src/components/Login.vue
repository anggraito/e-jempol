<template>
  <div class="hello">
    <img src="../assets/images/logo.jpg"><br />
    <fb-signin-button
    :params="fbSignInParams"
    @success="onSignInSuccess"
    @error="onSignInError"
    style="cursor:pointer">
    Sign in with Facebook
  </fb-signin-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fbSignInParams: {
        scope: 'email,public_profile',
        return_scopes: true
      }
    }
  },
  methods: {
    onSignInSuccess (response) {
      var self = this
      // window.FB.api('/me', {fields: ['id', 'name', 'email', 'pictures']}, dude => {
        // console.log(response)
        // console.log(`Good to see you, ${dude.name}.`)
      localStorage.setItem('fbaccesstoken', response.authResponse.accessToken)
      localStorage.setItem('fbid', response.authResponse.userID)
      console.log(response)
      this.$http({
        method: 'post',
        url: `users/signin`,
        headers: {
          fbaccesstoken: localStorage.getItem('fbaccesstoken'),
          fbid: localStorage.getItem('fbid')
        }
      })
      .then(loginResponse => {
        localStorage.setItem('token', loginResponse.data.token)
        localStorage.setItem('name', loginResponse.data.name)
        localStorage.setItem('id', loginResponse.data.id)
        self.$router.push('/eJempol')
        console.log('==========datanya', loginResponse.data)
      })
      .catch(err => {
        console.log(err)
        self.$router.push('/')
      })
      // })
    },
    onSignInError (error) {
      console.log('OH NOES', error)
    },
    checkLogin () {
      if (localStorage.fbaccesstoken) {
        this.$router.push('/home')
      }
    }
  },
  created () {
    this.checkLogin()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  text-align: center;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.fb-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #febb32;
  color: #fff;
}
img{
  width: 20%;
}
</style>
