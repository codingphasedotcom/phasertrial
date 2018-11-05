class Example1 extends Phaser.Scene {
  constructor() {
    super({ key: "Example1" });
  }
  preload() {
    this.load.image("GFS", "/img/mario.png");
  }
  create() {
    this.image = this.add.image(400, 200, "GFS");
    this.image.width = 200
    this.image.height = 200

    this.input.keyboard.on(
      "keyup_D",
      event => {
        this.image.x += 10;
      },
      this
    );
    this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);

    this.input.on('pointerdown', (event) => {
      this.image.x = event.x
      this.image.y = event.y
    }, this)

    this.input.keyboard.on('keyup_P', () => {
      var physicsImage = this.physics.add.image(this.image.x, this.image.y, 'GFS')

      physicsImage.setVelocity(Phaser.Math.RND.integerInRange(-100,100),-500)
    }, this)

    this.input.keyboard.on('keyup', (event) => {
      if (event.key == "1"){
        this.scene.start('Example1')
      }
      if (event.key == "2"){
        this.scene.start('Example2')
      }
      if (event.key == "3"){
        this.scene.start('Example3')
      }
    })
  }
  update(delta){
    if(this.key_A.isDown){
      this.image.x--
    }
  }
}
