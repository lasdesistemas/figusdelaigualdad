import React from 'react'
import data_paises from '../static/assets/data_paises.json'


export default () => (
  <div className='figu-container'>
    <div className='figu-header'>
      <span>{data_paises[0].grupo}</span>
      <h2>{data_paises[0].nombre}</h2>
    </div>
    <div className='figu-body'>
      <img src='' alt='Bandera' />
      <table>
        <tr>
          <td>Esperanza de vida femenina:</td>
          <td>{data_paises[0].esperanza_vida_mujer}</td> 
        </tr>
        <tr>
          <td>Año de voto femenino:</td>
          <td>{data_paises[0].voto_femenino}</td> 
        </tr>
        <tr>
          <td>Porcentaje de legisladoras:</td>
          <td>{data_paises[0].legisladoras}</td> 
        </tr>
        <tr>
          <td>Aborto:</td>
          <td>{data_paises[0].aborto}</td> 
        </tr>
        <tr>
          <td>Días de licencia por maternidad/paternidad:</td>
          <td>{data_paises[0].licencia_mat_pat}</td> 
        </tr>
        <tr>
          <td>Matrimonio igualitario:</td>
          <td>{data_paises[0].matrimonio_igualitario}</td> 
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