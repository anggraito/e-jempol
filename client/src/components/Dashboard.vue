<template>
  <div class="col-md-12 board">
    <div class="row">
      <div class="user-vote">
        <button data-toggle="modal" data-target="#userVote">User 1</button>
        <button data-toggle="modal" data-target="#userVote">Vote 2</button>
      </div>
      <!-- modal Vote -->
      <div class="modal fade" id="userVote" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-body">
              <small>Angka yang kamu pilih: </small>
              <h2>5</h2>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" value="1">1</button>
              <button type="button" class="btn btn-default" value="2">2</button>
              <button type="button" class="btn btn-default" value="3">3</button>
              <button type="button" class="btn btn-default" value="4">4</button>
              <button type="button" class="btn btn-default" value="5">5</button>
            </div>
            <button type="button" class="btn btn-default" data-dismiss="modal">Submit</button>
            
          </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
      </div><!-- /.modal -->
      <div class="bottom">
        <div class="user-vote">
          <button data-toggle="modal" class="die-user" data-target="#userVote">User 3</button>
          <button data-toggle="modal" data-target="#userVote">Vote 4</button>
        </div>
      </div>

      
    </div>
  </div>
</template>

<script>
export default {
  name: 'board',
  data () {
    return {
      msg: 'test'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.board{
  height: 100vh;
}
.user-vote .die-user{
  background-color: #565656;
  color: #febb32;
}
.user-vote{
  display: flex;
  justify-content: space-between;
}
.board button{
  background-color: #f9f9f9;
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
</style>
