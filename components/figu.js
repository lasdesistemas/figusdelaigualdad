import React from 'react'
import data_paises from '../static/assets/data_paises.json'
import Flag from "react-flags";

export default (props) => (
  <div className='figu-container'>
    <div className='figu-header'>
      <h2>{data_paises[props.id].nombre}</h2>
      <h3>Grupo {data_paises[props.id].grupo}</h3>
    </div>
    <div className='figu-body'>
        <div>
                <Flag
                  name= {data_paises[props.id].key}
                  format="png"
                  pngSize={640}
                  shiny={false}
                  className="flag"
                  alt="Bandera"
                  width="200"
                  basePath= "/static/assets/img/flags"
                />
        </div>

      <table>
        <tbody>
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
        </tbody>
      </table>
    </div>
    <div className='figu-footer'>
      <img src='' alt='Chequeado' />
      <img src='' alt='Mundial de la Igualdad' />
      <img src='../static/assets/img/logos/logo_lasdesistemas_300_TRANSPARENTE.png' width='100px' alt='[LAS] de sistemas' />
    </div>
  </div>
)