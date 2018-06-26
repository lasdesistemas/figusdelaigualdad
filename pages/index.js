import Head from '../components/head'
import SelectorFigu from '../components/selector_figu'

export default class extends React.Component {

  render() {
   
    return (
      <div>
        <Head />
        <div className="fila">
          <SelectorFigu />
          <div className="divisor">
            <span>VS</span>
          </div>
          <SelectorFigu />
        </div>
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