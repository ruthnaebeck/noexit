/* global Phaser */

var NoExitGame = NoExitGame || {}

NoExitGame.game = new Phaser.Game(800, 600, Phaser.AUTO, '')
NoExitGame.game.state.add('Boot', NoExitGame.Boot)
NoExitGame.game.state.add('Preload', NoExitGame.Preload)
NoExitGame.game.state.add('Menu', NoExitGame.Menu)
NoExitGame.game.state.add('Game', NoExitGame.Game)
NoExitGame.game.state.add('End', NoExitGame.End)

NoExitGame.game.state.start('Boot')
