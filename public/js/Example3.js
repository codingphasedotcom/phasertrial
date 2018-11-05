class Example3 extends Phaser.Scene{
  constructor(){
    super({key: "Example3"})
  }

  create(){
    this.load.audio('test', ['/audio/tiger.mp3'])

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
    this.soundFX = this.sound.add('test', { loop: "true"})
    this.soundFX.play()
  }
}
