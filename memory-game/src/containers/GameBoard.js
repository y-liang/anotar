import React, { Component } from 'react'
import { Card } from '../components/Card'
import { OverlayText } from '../components/Overlay'
import { Info } from '../components/Info'
import AudioController from '../containers/Audio'

import './MixorMatch.scss'


export default class GameBoard extends Component {
  constructor(props) {
    super()
    this.audioController = new AudioController()

    this.state = {
      overlays: [
        { type: "game-start-text", result: "start game", shown: false },
        { type: "game-over-text", result: "game over", shown: false },
        { type: "game-won-text", result: "you won", shown: false },
      ],

      cards: [
        { value: "bat", file: "Bat.png", up: false, found: false },
        { value: "bones", file: "Bones.png", up: false, found: false },
        { value: "cauldron", file: "Cauldron.png", up: false, found: false },
        { value: "dracula", file: "Dracula.png", up: false, found: false },
        { value: "eye", file: "Eye.png", up: false, found: false },
        { value: "ghost", file: "Ghost.png", up: false, found: false },
        { value: "pumpkin", file: "Pumpkin.png", up: false, found: false },
        { value: "skull", file: "Skull.png", up: false, found: false }
      ],

      cardToCheck: null,
      cardsMatched: [],

      isBusy: true,

      timeLeft: 60,
      flipCount: 0,
    }
  }

  componentDidMount() {
    let { cards } = this.state // this is making a copy of the cards in the state
    const cardsDoubled = cards.concat(cards) // these cards have not yet been shuffled

    this.setState({ cards: cardsDoubled }, this.showOverlayStart)
  }

  // use isBusy to prevent users click when showing the overlays with timeout
  showOverlayStart = () => {
    // isBusy is true when loaded

    setTimeout(() => { // use timeout to show animation
      // any better method for the following???
      let { overlays } = this.state
      let index = overlays.findIndex(overlay => overlay.type === "game-start-text")
      overlays[index] = {
        ...overlays[index],
        shown: true
      }
      this.setState({ overlays })
    }, 1000)

    // another timeout to let animation finish before users can click
    setTimeout(() => {
      this.setState({ isBusy: false })
    }, 2000)
  }

  showOverlayWon = () => {
    this.setState({ isBusy: true })

    // any better method for the following???
    let { overlays } = this.state
    let index = overlays.findIndex(overlay => overlay.type === "game-won-text")
    overlays[index] = {
      ...overlays[index],
      shown: true
    }
    this.setState({ overlays })

    setTimeout(() => { // use timeout to show animation
      this.setState({ isBusy: false })
    }, 2000)
  }

  showOverlayLost = () => {
    this.setState({ isBusy: true })

    let { overlays } = this.state
    let index = overlays.findIndex(overlay => overlay.type === "game-over-text")
    overlays[index] = {
      ...overlays[index],
      shown: true
    }
    this.setState({ overlays })

    setTimeout(() => { // use timeout to now let users close overlay too quickly
      this.setState({ isBusy: false })
    }, 2000)
  }

  closeOverlay = (index) => {
    // prevent users closing the overlays when they're popping up
    if (!this.state.isBusy) {
      let { overlays } = this.state
      overlays[index] = {
        ...overlays[index],
        shown: false
      }

      this.setState({ overlays })

      this.startGame()
    }
  }

  startGame = () => {
    let { cards } = this.state // this is making a copy of the cards in the state

    // close all the cards and shuffle them
    for (let i = 0; i < cards.length; i++) {
      cards[i].up = false
      cards[i].found = false
    }
    const cardsShuffled = this.shuffleCards(cards)

    // reset cards, time, flip
    this.setState({
      cards: cardsShuffled,

      cardsMatched: [],

      timeLeft: 60,
      flipCount: 0,
    })


    setTimeout(() => {
      this.audioController.startMusic()
      this.startCountdown()

    }, 500) // better user experience
  }


  startCountdown() {
    this.timer = setInterval(() => {
      let { timeLeft } = this.state
      this.setState({ timeLeft: timeLeft - 1 })
      if (this.state.timeLeft === 0) {
        this.gameOver()
      }
    }, 1000)  // call a function every one second, and this startCountdown is a timer
    // here timer is the reference of this setInterval function being called
  }


  shuffleCards = array => {
    let currentIndex = array.length, temporaryValue, randomIndex

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1

      temporaryValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue
    }

    return array
  }

  canFlipCard = card => {
    return (
      !this.state.isBusy
      && !this.state.cardsMatched.includes(card)
      && card !== this.state.cardToCheck
    )
  }

  // arrow function for any this
  showCard = (card, index) => {

    if (this.canFlipCard(card)) {
      this.audioController.flip()
      // change flip count - here

      let { flipCount } = this.state
      this.setState({ flipCount: flipCount + 1 })

      const cards = [...this.state.cards] // copy the array
      cards[index] = {
        ...cards[index],
        up: true
      }
      this.setState({
        cards
      })

      let { cardToCheck } = this.state
      if (cardToCheck) {
        card.value === cardToCheck.value ?
          this.isMatch(card, cardToCheck) : this.isMix(card, cardToCheck)
      } else {
        // if no cardToCheck, this card becomes the cardToCheck
        this.firstCard(card)
      }
    }

  }

  firstCard = card => {
    let cards = [...this.state.cards]
    let index = cards.indexOf(card)
    cards[index] = {
      ...cards[index],
      up: true
    }
    this.setState({
      cards,
      cardToCheck: cards[index]
    })
  }


  isMatch = (card1, card2) => {
    this.setState({ isBusy: true })
    this.audioController.match()

    let cards = [...this.state.cards] // copy the array

    let index1 = cards.indexOf(card1)
    let index2 = cards.indexOf(card2)

    cards[index1] = {
      ...cards[index1],
      up: true,
      found: true,
    }

    cards[index2] = {
      ...cards[index2],
      up: true,
      found: true,
    }

    setTimeout(() => {
      this.setState({
        cards,

        cardsMatched: [
          ...this.state.cardsMatched,
          cards[index1], cards[index2]
        ],

        cardToCheck: null,
        isBusy: false
      }, () => { // because setState is always set aside, so use a callback function here
        if (this.state.cardsMatched.length === this.state.cards.length) {
          this.gameWon()
        }
      })
    }, 500)

  }

  isMix = (card1, card2) => {
    this.setState({ isBusy: true })

    let cards = [...this.state.cards] // copy the array

    let index1 = cards.indexOf(card1)
    let index2 = cards.indexOf(card2)

    cards[index1] = {
      ...cards[index1],
      up: false
    }

    cards[index2] = {
      ...cards[index2],
      up: false
    }

    setTimeout(() => {
      this.setState({
        cards,

        cardToCheck: null,
        isBusy: false
      })
    }, 1000)

  }


  gameWon = () => {
    this.audioController.gameWon()
    clearInterval(this.timer)
    this.showOverlayWon()
  }

  gameOver = () => {
    this.audioController.gameOver()
    clearInterval(this.timer)
    this.showOverlayLost()
  }


  render() {
    const overlayCanvas = this.state.overlays.map((overlay, index) =>
      <OverlayText key={index}
        visibility={overlay.shown ? 'visible' : ''}
        value={overlay.type} text={overlay.result}
        handleClick={() => this.closeOverlay(index)}
      />)

    const gameBoard = this.state.cards.map((card, index) =>
      <Card key={index}
        visibility={card.up ? 'visible' : ''}
        matched={card.found ? 'matched' : ''}
        type={card.value} image={card.file}
        handleClick={() => this.showCard(card, index)}
      />)

    return (
      <div>
        <h1 className="page-title">Mix or Match</h1>
        {overlayCanvas}
        <div className="game-container" >
          <Info time={this.state.timeLeft} flips={this.state.flipCount} />
          {gameBoard}
        </div >
        <h3 className="page-title game-author">made by <a href="https://yliang.net">Yan Liang</a> in Santa Monica, CA</h3>
      </div>
    )
  }
}