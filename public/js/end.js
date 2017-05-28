/* global */

var NoExitGame = NoExitGame || {}
NoExitGame.End = function () { }
NoExitGame.End.prototype = {
  init: function(score){
    this.score = score || 0
    this.noExitHighScore = window.localStorage.noExitHighScore || 0
    this.noExitHighScore = Math.max(score, this.noExitHighScore)
    window.localStorage.noExitHighScore = this.noExitHighScore
  },
  create: function () {
    // Replay
    this.game.input.onTap.add(this.listener, this)
    // Game World
    var height = this.game.world.height
    // Game Over, Replay, Highest Score
    var text = 'Game Over'
    var style = { font: '35px Arial', fill: '#fff', align: 'center' }
    var aText = this.game.add.text(this.game.width / 2, this.game.height / 2 - 50, text, style)
    aText.anchor.set(0.5)
    text = 'Click to Replay'
    style = { font: '15px Arial', fill: '#fff', align: 'center' }
    var cText = this.game.add.text(this.game.width / 2, this.game.height / 2 - 20, text, style)
    cText.anchor.set(0.5)
    text = 'Your Highest Score: ' + this.noExitHighScore
    style = { font: '20px Arial', fill: '#fff', align: 'center' }
    var hText = this.game.add.text(this.game.width / 2, this.game.height / 2 + 10, text, style)
    hText.anchor.set(0.5)
  },
  listener(){
    this.game.state.start('Game')
  }
}
