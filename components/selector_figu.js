import React from 'react'
import Dropdown from 'react-dropdown'
import Figu from '../components/figu'

const paises =
[
  {value:0, label:'A-Rusia'},
  {value:1, label:'A-Arabia Saudí'},
  {value:2, label:'A-Egipto'},
  {value:3, label:'A-Uruguay'},
  {value:4, label:'B-Marruecos'},
  {value:5, label:'B-Irán'},
  {value:6, label:'B-España'},
  {value:7, label:'B-Portugal'},
  {value:8, label:'C-Perú'},
  {value:9, label:'C-Australia'},
  {value:10, label:'C-Dinamarca'},
  {value:11, label:'C-Francia'},
  {value:12, label:'D-Croacia'},
  {value:13, label:'D-Nigeria'},
  {value:14, label:'D-Argentina'},
  {value:15, label:'D-Islandia'},
  {value:16, label:'E-Suiza'},
  {value:17, label:'E-Serbia'},
  {value:18, label:'E-Costa Rica'},
  {value:19, label:'E-Brasil'},
  {value:20, label:'F-México'},
  {value:21, label:'F-Alemania'},
  {value:22, label:'F-Corea del Sur'},
  {value:23, label:'F-Suecia'},
  {value:24, label:'G-Panamá'},
  {value:25, label:'G-Túnez'},
  {value:26, label:'G-Bélgica'},
  {value:27, label:'G-Inglaterra'},
  {value:28, label:'H-Japón'},
  {value:29, label:'H-Polonia'},
  {value:30, label:'H-Senegal'},
  {value:31, label:'H-Colombia'},
]

export default class extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      pais: paises[this.props.idPais] 
    }
    console.log(this.state)
    this.seleccionarPais = this.seleccionarPais.bind(this)
  }

  seleccionarPais(option) {
    this.setState({pais: option})
  }
  
  render() {

    const paisDefault = this.state.pais

    return (
      <div className="selector">
        <Dropdown options={paises}
          placeholder="Elegí un país"
          onChange={this.seleccionarPais}
          value={paisDefault}
          className='figu-dropdown'
          menuClassName='figu-dropdown-menu'
          arrowClassName='figu-dropdown-arrow'
          placeholderClassName='figu-dropdown-placeholder'
        />
        {
          this.state.pais &&
          <Figu id={this.state.pais.value}/>
        }
      </div>
      )
  }
}