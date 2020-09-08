import React, { Component } from 'react'

class AudioId extends Audio {
  constructor(path) {
    super('assets/audio/' + path)
  }
}

export default class AudioController extends Component {
  constructor() {
    super()
    this.bgMusic = new AudioId('creepy.mp3')
    this.flipSound = new AudioId('flip.wav')
    this.matchSound = new AudioId('match.wav')
    this.victorySound = new AudioId('victory.wav')
    this.gameOverSound = new AudioId('gameover.wav')

    this.bgMusic.volume = 0.25
    this.bgMusic.loop = true
  }

  startMusic() {
    this.bgMusic.play()
  }
  stopMusic() {
    this.bgMusic.pause()
    this.bgMusic.currentTime = 0
  }

  flip() {
    this.flipSound.play()
  }
  match() {
    this.matchSound.play()
  }
  gameWon() {
    this.stopMusic()
    this.victorySound.play()
  }
  gameOver() {
    this.stopMusic()
    this.gameOverSound.play()
  }

  render() {
    return this.props.children({
      ...this.state
    })
  }
}



