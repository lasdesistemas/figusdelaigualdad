import Head from '../components/head'
import SelectorFigu from '../components/selector_figu'

export default class extends React.Component {

  render() {
   
    return (
      <div>
        <Head />
        <div className="fila">
          <SelectorFigu />
          <SelectorFigu />
        </div>
      </div>
    )

  }
}