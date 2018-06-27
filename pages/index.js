import React, { Component } from 'react'
import Head from '../components/head'
import Header from '../components/header'
import SelectorFigu from '../components/selector_figu'
import Footer from '../components/footer'
let Flickity;

export default class extends Component {
  constructor (props) {
    super(props)
    this.flickity = null
    this.state = {
      mobile: false
    }
  }

  componentDidMount () {
    Flickity = require('flickity')
    if (window.innerWidth < 768) {
      this.setState({
        mobile: true
      }, () => console.log(this.state))
    }
  }

  render() {
    return (
      <div>
        <Head />
        { !this.props.url.query.ocultarHeader &&
        <Header />
        }
        <div className="fila">
          <SelectorFigu idPais={this.props.url.query.pais1}/>
          <div className="divisor">
            <span>VS</span>
          </div>
          <SelectorFigu idPais={this.props.url.query.pais2}/>
        </div>
        { !this.props.url.query.ocultarFooter &&
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
            .divisor {
              display: none;
            }
          }
        `}</style>
      </div>
    )
  }
}