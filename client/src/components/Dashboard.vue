<template>
  <div class="col-md-12 board">
    <div class="row">
      <div class="user-vote">
        <button data-toggle="modal" class="changes" data-target="#userVote" @click='assignPlayerNumber(1)':disabled="isDisabled1"><img :src="imageSkull1"/><p> User 1</p></button>
        <button data-toggle="modal" class="changes" data-target="#userVote" @click='assignPlayerNumber(2)' :disabled="isDisabled2"><img :src="imageSkull2"/><p> User 2</p></button>
      </div>
      <!-- modal Vote -->
      <div class="modal fade" id="userVote" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <h3>Pilih Angka: </h3>
            <div class="modal-footer">
              <button type="button" class="btn" value="1" @click='assignNumberChosen(1)'>1</button>
              <button type="button" class="btn" value="2" @click='assignNumberChosen(2)'>2</button>
              <button type="button" class="btn" value="3" @click='assignNumberChosen(3)'>3</button>
              <button type="button" class="btn" value="4" @click='assignNumberChosen(4)'>4</button>
              <button type="button" class="btn" value="5" @click='assignNumberChosen(5)'>5</button>
            </div>
            <button type="button" class="start-btn" data-dismiss="modal" @click='sendtoFire'>Submit</button>

          </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
      </div><!-- /.modal -->

      <div class="btn-setup">
        <div class="img">
          <h1>Kill or be Killed</h1>
        </div>
        <button class="set" @click='reset'>Mulai lagi</button>
        <button class="set" @click='masukinKeArray()' :disabled="btnKill">Matiin anak orang</button>
        <button class="set" @click='doLogout'>Logout</button>
      </div>
      <div class="bottom">
        <div class="user-vote">
          <button data-toggle="modal" class="changes" data-target="#userVote" @click='assignPlayerNumber(3)' :disabled="isDisabled3"><img :src="imageSkull3"/><p> User 3</p></button>
          <button data-toggle="modal" class="changes" data-target="#userVote" @click='assignPlayerNumber(4)' :disabled="isDisabled4"><img :src="imageSkull4"/><p> User 4</p></button>
          <button data-toggle="modal" class="changes" data-target="#userVote" @click='assignPlayerNumber(5)' :disabled="isDisabled5"><img :src="imageSkull5"/><p> User 5</p></button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'board',
  firebase: function () {
    return {
      players: {
        source: this.$db.ref('/'),
        asObject: false,
        cancelCallback: function () {},
        readyCallback: function () {}
      }
    }
  },
  data () {
    return {
      player: null,
      number: null,
      giliran: 1,
      listangka: [],
      playermati: [],
      hapusplayer: [],
      isDisabled1: false,
      isDisabled2: false,
      isDisabled3: false,
      isDisabled4: false,
      isDisabled5: false,
      imageSkull1: null,
      imageSkull2: null,
      imageSkull3: null,
      imageSkull4: null,
      imageSkull5: null,
      btnKill: true
    }
  },
  methods: {
    assignPlayerNumber (number) {
      this.player = number
    },
    doLogout () {
      localStorage.clear()
      this.$router.push('/')
    },
    assignNumberChosen (number) {
      this.number = number
    },
    sendtoFire () {
      this.$db.ref(`player ${this.player}`).set({number: this.number, nyawa: this.giliran})
    },
    reset () {
      this.$db.ref(`player 1`).set({number: 0, nyawa: 1})
      this.$db.ref(`player 2`).set({number: 0, nyawa: 1})
      this.$db.ref(`player 3`).set({number: 0, nyawa: 1})
      this.$db.ref(`player 4`).set({number: 0, nyawa: 1})
      this.$db.ref(`player 5`).set({number: 0, nyawa: 1})
      this.listangka = []
      this.playermati = []
    },
    masukinKeArray () {
      // console.log('ini this player', this.players[0])
      this.players.forEach(data => {
        this.listangka.push(data.number)
      })
      console.log('ini list angka', this.listangka)
      var uniq = this.listangka
      .map((name) => {
        return {count: 1, name: name}
      })
      .reduce((a, b) => {
        a[b.name] = (a[b.name] || 0) + b.count
        return a
      }, {})

      var duplicates = Object.keys(uniq).filter((a) => uniq[a] > 1)

      for (var j = 0; j < duplicates.length; j++) {
        if (duplicates[j] === '0') {
          duplicates.splice(j, 1)
        }
      }

      console.log('ini duplicates ', duplicates) // [ 'Nancy' ]
      this.players.forEach(cari => {
        // console.log('ini carin numbr', cari.number)
        console.log('ini parseInt duplicates ', duplicates)
        console.log(`ini cari.number ${cari.number}`)
        if (cari.number === parseInt(duplicates)) {
          this.playermati.push(cari)
        }
      })

      console.log('ini yang mati ' + this.playermati)
      for (var i = 0; i < this.playermati.length; i++) {
        this.hapusplayer = this.playermati[`${i}`]['.key']
        this.$db.ref(`${this.hapusplayer}`).set({number: 0, nyawa: 0})
      }

      console.log('ini players ya? -------------->', this.players)
      var disablePlayer = this.players
      console.log('disble', disablePlayer[0].nyawa)
      console.log('valuenya apa? false', this.isDisabled1)
      for (var a = 0; a < disablePlayer.length; a++) {
        console.log('ini loopnya a', a)
        console.log('ini nyawanya si 0', disablePlayer[0].nyawa)
        console.log('valuenya apa? false', this.isDisabled1)
        if (disablePlayer[0].nyawa === 0) {
          this.isDisabled1 = true
          this.imageSkull1 = 'http://www.freeiconspng.com/uploads/skull-and-crossbones-png-0.png'
        }
        if (disablePlayer[1].nyawa === 0) {
          this.isDisabled2 = true
          this.imageSkull2 = 'http://www.freeiconspng.com/uploads/skull-and-crossbones-png-0.png'
        }
        if (disablePlayer[2].nyawa === 0) {
          this.isDisabled3 = true
          this.imageSkull3 = 'http://www.freeiconspng.com/uploads/skull-and-crossbones-png-0.png'
        }
        if (disablePlayer[3].nyawa === 0) {
          this.isDisabled4 = true
          this.imageSkull4 = 'http://www.freeiconspng.com/uploads/skull-and-crossbones-png-0.png'
        }
        if (disablePlayer[4].nyawa === 0) {
          this.isDisabled5 = true
          this.imageSkull5 = 'http://www.freeiconspng.com/uploads/skull-and-crossbones-png-0.png'
        }
      }

      // console.log('player mati', this.playermati['0']['.key'])
      // this.hapusplayer = this.playermati['0']['.key']
      // console.log('ini si hapus', this.hapusplayer)
      // this.$db.ref(`${this.hapusplayer}`).set({number: 0, nyawa: 0})
    },
    cariOrangMati () {
      // console.log('ini this player', this.players[0])
      this.players.forEach(data => {
        this.listangka.push(data.number)
      })
      // console.log('ini list angka', this.listangka)
      var uniq = this.listangka
      .map((name) => {
        return {count: 1, name: 0}
      })
      .reduce((a, b) => {
        a[b.name] = (a[b.name] || 0) + b.count
        return a
      }, {})

      var duplicates = Object.keys(uniq).filter((a) => uniq[a] > 1)

      console.log('ini duplicates orang mati', duplicates) // [ 'Nancy' ]
      this.players.forEach(cari => {
        // console.log('ini carin numbr', cari.number)
        if (cari.number === parseInt(duplicates)) {
          this.playermati.push(cari)
        }
      })
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
    console.log(localStorage.getItem('fbid'))
    if (localStorage.getItem('fbid') === '1874685692544156' || localStorage.getItem('fbid') === 1874685692544156) {
      console.log('sedang disini lohh ---->')
      console.log(this.btnKill)
      this.btnKill = false
      console.log(this.btnKill)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img{
  text-align: center;
  position: absolute;
  top: -90px;
}
h1{
  font-weight: normal;
  margin-top: 0;
  color: #febb32;
  font-size: 42px;
  font-family: 'Nosifer', cursive;
}
.btn-setup{
  position: absolute;
  z-index: 99;
  display: flex;
  align-content: center;
  justify-content: center;
  width: 100%;
  top: 43%;
}
.btn-setup .set{
  margin: 0 5px;
  width: 200px;
  height: 80px;
  font-size: 16px;
  background-color:#565656;
  color: #febb32;
}
.modal{
  text-align: center;
}
.modal-content{
  padding: 10px;
}
.board{
  background: url('https://images7.alphacoders.com/322/thumb-1920-322616.jpg');
  background-size: cover;
  width: 100%;
  height: 100vh;
  text-align: center;
}
.user-vote .die-user{
  background-color: #565656;
  color: #febb32;
}
img{
  width: 50%;
}
.user-vote{
  display: flex;
  justify-content: space-between;
}
.board button{
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  width: 250px;
  height: 250px;
  font-size: 22px;
  font-weight: 700;
}
.bottom{
  position: absolute;
  bottom: 0;
  width: 100%;
}
.modal-footer{
  display: flex;
  justify-content: center;
}
.modal-footer .btn:hover, .modal-footer .btn.selected{
  background-color: #febb32;
  color: #fff;
}
.modal-footer .btn{
  width: 100px;
  height: 100px;
}
.modal-content .start-btn{
  border-radius: 50px;
  background-color: #febb32;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  padding: 15px 35px;
  height: 10%;
  width: 100%;
  margin: 20px 0;
}
.user-vote button{
  border: 8px dashed #febb32;
  color: #febb32;
  font-size: 28px;

}
</style>
