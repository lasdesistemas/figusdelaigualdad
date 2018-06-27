import Head from '../components/head'
import Header from '../components/header'
import SelectorFigu from '../components/selector_figu'
import Footer from '../components/footer'

export default class extends React.Component {
  render() {
    return (
      <div>
        <Head />
        <Header />
        <div className="fila">
          <SelectorFigu idPais={this.props.url.query.pais1}/>
          <div className="divisor">
            <span>VS</span>
          </div>
          <SelectorFigu idPais={this.props.url.query.pais2}/>
        </div>
        <Footer />
        <style jsx>{`
          .divisor {
            align-self: center;
            font-family: 'Press Start 2P', cursive;
            font-size: 26px;
            color: #bd3547;
          }
        `}</style>
      </div>
    )
  }
}