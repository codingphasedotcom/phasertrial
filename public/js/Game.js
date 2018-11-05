var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {}
    }
  },
  scene: [Example1, Example2, Example3]
}

var game = new Phaser.Game(config)
