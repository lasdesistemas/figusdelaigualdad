import React, { Component } from 'react'
import Head from '../components/head'
import Header from '../components/header'
import SelectorFigu from '../components/selector_figu'
import Footer from '../components/footer'
let Flickity;

export default class extends Component {
  static async getInitialProps({ query }) {
    return { query }
  }

  constructor (props) {
    super(props)
    this.flickity = null
    this.state = {
      mobile: false
    }
  }

  componentDidMount () {
    console.log(this.props)
    Flickity = require('flickity')
    if (window.innerWidth < 768) {
      this.setState({
        mobile: true
      })
    }
  }

  componentDidUpdate(){
    if (this.state.mobile) {
      const options = {
        cellCelector: '.selector',
        pageDots: false,
        wrapAround: false,
        cellAlign: 'center',
        draggable: false,
        friction: 0.2,
        contain: true,
        freeScroll: false,
        prevNextButtons: true
      }
      this.flickity = new Flickity(this.refs.carousel, options)
    }
  }

  render() {
    return (
      <div>
        <Head />
        { !this.props.query.ocultarHeader &&
        <Header />
        }
        <div className="fila" ref="carousel">
          <SelectorFigu idPais={this.props.query.pais1}/>
          {!this.state.mobile &&
            <div className="divisor">
              <span>VS</span>
            </div>
          }
          <SelectorFigu idPais={this.props.query.pais2}/>
        </div>
        { !this.props.query.ocultarFooter &&
        <Footer />
        }
        <style jsx>{`
          .fila {
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            height: 700px;
            margin-top: 20px;
            margin-bottom: 35px;
          }
          .divisor {
            align-self: center;
            font-family: 'Press Start 2P', cursive;
            font-size: 26px;
            color: #bd3547;
          }
          @media (max-width: 767px) {
            .fila {
              display: block;
            }
            .divisor {
              display: none;
            }
          }
        `}</style>
      </div>
    )
  }
}