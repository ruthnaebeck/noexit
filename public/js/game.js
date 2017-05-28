/* global */

var NoExitGame = NoExitGame || {}
NoExitGame.Game = function () { }
NoExitGame.Game.prototype = {
  create: function () {
    this.score = 0
    this.game.input.onTap.add(this.listener, this)
    var text = 'No Exit'
    var style = { font: '40px Arial', fill: '#fff', align: 'left' }
    var title = this.game.add.text(
      this.game.width / 2, this.game.height / 2, text, style)
    title.anchor.set(0.5)
    text = 'Click to End'
    style = { font: '15px Arial', fill: '#fff', align: 'center' }
    var cText = this.game.add.text(
      this.game.width / 2, this.game.height / 2 + 35, text, style)
    cText.anchor.set(0.5)
  },
  listener(){
    this.game.state.start('End', true, false, this.score)
  }
}
