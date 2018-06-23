import React from 'react'
import Dropdown from 'react-dropdown'
import Figu from '../components/figu'


export default class extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      
    }
    this.seleccionarPais = this.seleccionarPais.bind(this)
  }

  seleccionarPais(option) {
    this.setState({pais: option})
  }
  
  render() {
    const paises =
      [
        {value:0, label:'Rusia'},
        {value:1, label:'Arabia Saudí'},
        {value:2, label:'Egipto'},
        {value:3, label:'Uruguay'},
        {value:4, label:'Marruecos'},
        {value:5, label:'Irán'},
        {value:6, label:'España'},
        {value:7, label:'Portugal'},
        {value:8, label:'Perú'},
        {value:9, label:'Australia'},
        {value:10, label:'Dinamarca'},
        {value:11, label:'Francia'},
        {value:12, label:'Croacia'},
        {value:13, label:'Nigeria'},
        {value:14, label:'Argentina'},
        {value:15, label:'Islandia'},
        {value:16, label:'Suiza'},
        {value:17, label:'Serbia'},
        {value:18, label:'Costa Rica'},
        {value:19, label:'Brasil'},
        {value:20, label:'México'},
        {value:21, label:'Alemania'},
        {value:22, label:'Corea del Sur'},
        {value:23, label:'Suecia'},
        {value:24, label:'Panamá'},
        {value:25, label:'Túnez'},
        {value:26, label:'Bélgica'},
        {value:27, label:'Inglaterra'},
        {value:28, label:'Japón'},
        {value:29, label:'Polonia'},
        {value:30, label:'Senegal'},
        {value:31, label:'Colombia'},
      ]
    const paisDefault = this.state.pais 

    return (
      <div>
        <Dropdown options={paises}
          placeholder="Elegí un país"
          onChange={this.seleccionarPais}
          value={paisDefault}
        />
        {
          this.state.pais &&
          <Figu id={this.state.pais.value}/>
        }
      </div>
      )
  }
}