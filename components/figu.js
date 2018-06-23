import React from 'react'
import data_paises from '../static/assets/data_paises.json'


export default (props) => (
  <div className='figu-container'>
    <div className='figu-header'>
      <span>{data_paises[props.id].grupo}</span>
      <h2>{data_paises[props.id].nombre}</h2>
    </div>
    <div className='figu-body'>
      <img src='' alt='Bandera' />
      <table>
        <tr>
          <td>Esperanza de vida femenina:</td>
          <td>{data_paises[props.id].esperanza_vida_mujer}</td> 
        </tr>
        <tr>
          <td>Año de voto femenino:</td>
          <td>{data_paises[props.id].voto_femenino}</td> 
        </tr>
        <tr>
          <td>Porcentaje de legisladoras:</td>
          <td>{data_paises[props.id].legisladoras}</td> 
        </tr>
        <tr>
          <td>Aborto:</td>
          <td>{data_paises[props.id].aborto}</td> 
        </tr>
        <tr>
          <td>Días de licencia por maternidad/paternidad:</td>
          <td>{data_paises[props.id].licencia_mat_pat}</td> 
        </tr>
        <tr>
          <td>Matrimonio igualitario:</td>
          <td>{data_paises[props.id].matrimonio_igualitario}</td> 
        </tr>
      </table>
    </div>
    <div className='figu-footer'>
      <img src='' alt='Chequeado' />
      <img src='' alt='Mundial de la Igualdad' />
      <img src='../static/assets/logo_lasdesistemas_300_TRANSPARENTE.png' width='100px' alt='[LAS] de sistemas' />
    </div>
  </div>
)