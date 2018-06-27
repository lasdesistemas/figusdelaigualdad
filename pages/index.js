import React, { Component } from 'react'
import { withRouter } from 'next/router'
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
      mobile: false,
      ocultarFooter: false,
      ocultarHeader: false,
      pais1: null,
      pais2: null,
      loading: true
    }
  }

  componentDidMount () {
    Flickity = require('flickity')
    const pais1 = this.getQueryVariable('pais1')
    const pais2 = this.getQueryVariable('pais2')
    this.setState({
      mobile: window.innerWidth < 768 ? true : false,
      ocultarFooter: this.getQueryVariable('ocultarFooter') === 'true' ? true : false,
      ocultarHeader: this.getQueryVariable('ocultarHeader') === 'true' ? true : false,
      pais1: pais1 !== undefined ? parseInt(pais1) : null,
      pais2: pais2 !== undefined ? parseInt(pais2) : null,
      loading: false
    })
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

  getQueryVariable = (variable) => {
    var query = window.location.search.substring(1)
    var vars = query.split("&")
    for (var i=0;i<vars.length;i++) {
      var pair = vars[i].split("=")
      if(pair[0] == variable){return pair[1]}
    }
  }

  render() {
    return (
      <div>
        <Head />
        { !this.state.ocultarHeader &&
          <Header />
        }
        
        <div className="fila" ref="carousel">
          {!this.state.loading &&
            <SelectorFigu idPais={this.state.pais1}/>
          }
          {!this.state.mobile &&
            <div className="divisor">
              <span>VS</span>
            </div>
          }
          {!this.state.loading &&
            <SelectorFigu idPais={this.state.pais2}/>
          }
          </div>
        { !this.state.ocultarFooter &&
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