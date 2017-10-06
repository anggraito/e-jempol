<template>
  <div class="hello">
    <div class="hello-wrap">
      <h1>Kill or be Killed</h1>
      <fb-signin-button
      :params="fbSignInParams"
      @success="onSignInSuccess"
      @error="onSignInError"
      style="cursor:pointer">
      Sign in with Facebook
    </fb-signin-button>
    </div>
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
        self.$router.push('/dashboard')
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
        this.$router.push('/dashboard')
      } else {
        this.$router.push('/')
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
h1, h2 {
  font-weight: normal;
  margin-top: 0;
  color: #febb32;
  font-size: 42px;
  font-family: 'Nosifer', cursive;
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
  padding: 8px 16px;
  border-radius: 5px;
  background-color: #febb32;
  color: #fff;
  font-size: 18px;
}
img{
  width: 20%;
}
.hello{
  background: url('https://images7.alphacoders.com/322/thumb-1920-322616.jpg');
  background-size: cover;
  width: 100%;
  height: 100vh;
  text-align: center;
}
.hello-wrap{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
</style>
