import Head from '../components/head'
import Figu from '../components/figu'
import Dropdown from 'react-dropdown'

export default class extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      pais: {value: 0, label: "Argentina"}
    }
    this.seleccionarPais = this.seleccionarPais.bind(this)
  }

  seleccionarPais(option) {
    this.setState({pais: option})
  }
  
  render() {
    const paises =
      [
        {value: 0, label: 'Argentina'},
        {value: 1, label: 'Nigeria'}
      ]
    const paisDefault = this.state.pais 

    return (
      <div>
        <Head />
        <Dropdown options={paises}
          placeholder="Elegí un país"
          onChange={this.seleccionarPais}
          value={paisDefault}
        />
          
        <Figu id={this.state.pais.value}/>
      </div>
      )
  }
}