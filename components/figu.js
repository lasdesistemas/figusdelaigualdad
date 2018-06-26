import React from 'react'
import data_paises from '../static/assets/data_paises.json'
import Flag from "react-flags";

export default (props) => (
  <div className='figu-container'>
    <div className='figu-header'>
      <h2>{data_paises[props.id].nombre}</h2>
      <div className='figu-group'>
        <h3>{data_paises[props.id].grupo}</h3>
      </div>
    </div>
    <div className='figu-body'>
        <div className='flag-container'>
          <Flag
            name= {data_paises[props.id].key}
            format="png"
            pngSize={640}
            shiny={false}
            className="flag"
            alt="Bandera"
            width={200}
            basePath= "/static/assets/img/flags" />
        </div>
      <table className='figu-table'>
        <tbody>
          <tr className='border-row'>
            <td className='figu-category'>Esperanza de vida femenina:</td>
            <td className='figu-data'>{data_paises[props.id].esperanza_vida_mujer}</td> 
          </tr>
          <tr className='border-row'>
            <td className='figu-category'>Año de voto femenino:</td>
            <td className='figu-data'>{data_paises[props.id].voto_femenino}</td> 
          </tr>
          <tr className='border-row'>
            <td className='figu-category'>Porcentaje de legisladoras:</td>
            <td className='figu-data'>{data_paises[props.id].legisladoras}</td> 
          </tr>
          <tr className='border-row'>
            <td className='figu-category'>Aborto:</td>
            <td className='figu-data'>{data_paises[props.id].aborto}</td> 
          </tr>
          <tr className='border-row'>
            <td className='figu-category'>Días de licencia por maternidad/paternidad:</td>
            <td className='figu-data'>{data_paises[props.id].licencia_mat_pat}</td> 
          </tr>
          <tr>
            <td className='figu-category'>Matrimonio igualitario:</td>
            <td className='figu-data'>{data_paises[props.id].matrimonio_igualitario}</td> 
          </tr>
        </tbody>
      </table>
    </div>
    <div className='figu-footer'>
      <img src='' alt='Chequeado' />
      <img src='' alt='Mundial de la Igualdad' />
      <img src='../static/assets/img/logos/logo_lasdesistemas_300_TRANSPARENTE.png' width='100px' alt='[LAS] de sistemas' />
    </div>
    <style jsx>{`
      .figu-container {
        background-color: #324250;
        width: 320px;
        border-radius: 30px;
        -webkit-transform: translateZ(0);
        -webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);
        position: relative;
      }
      .figu-header {
        display: flex;
        flex-wrap: wrap;
        background-color: #3d6eee;
        color: #FFF;
        margin: 0 10px;
      }
      .figu-header h2 {
        order: 2;
        text-transform: uppercase;
        margin-left: auto;
        margin-right: 40px;
      }
      .figu-header .figu-group {
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 100px 100px 0 0;
        border-color: #f62e53 transparent transparent transparent;
        position: absolute;
      }
      .figu-header .figu-group h3 {
        order: 1;
        position: absolute;
        z-index: 100;
        margin-top: -80px;
        margin-left: 20px;
        font-size: 1.5em;
      }
      .figu-body {
        background-color: #FFF;
        margin: 0 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
      .figu-body .flag-container {
        margin: 10px 0;
      }
      .figu-table {
        border-collapse: collapse;
      }
      .figu-table tr {
        width: 50px;
        font-size: 0.8em;
        font-weight: bold;
      }
      .figu-category {
        color: #324250;
        text-align: right;
        padding: 10px 10px 10px 0;
      }
      .figu-data {
        color: #da536f;
        text-align: left;
        padding: 10px 0 10px 10px;
      }
      .border-row {
        z-index: 100;
        border-bottom: 1px solid #da536f;
      }
    `}</style>
  </div>
)