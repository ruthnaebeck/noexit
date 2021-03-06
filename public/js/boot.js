/* global Phaser */

var NoExitGame = NoExitGame || {}

NoExitGame.Boot = function(){}

NoExitGame.Boot.prototype = {
  preload: function() {
    // this.load.image('logo', 'assets/logo.png')
    this.load.image('preloadbar', 'assets/preloader-bar.png')
  },
  create: function() {
    this.game.stage.backgroundColor = '#000'
    //scaling options
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
    this.scale.minWidth = 240
    this.scale.minHeight = 170
    this.scale.maxWidth = 2880
    this.scale.maxHeight = 1920
    //have the game centered horizontally
    this.scale.pageAlignHorizontally = true
    //screen size will be set automatically
    this.scale.setScreenSize(true)
    //physics system for movement
    this.game.physics.startSystem(Phaser.Physics.ARCADE)
    this.state.start('Preload')
  }
}
