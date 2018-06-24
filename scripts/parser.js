const fs = require('fs');
const api = require('./reader.js');


const sheetsMap = [
  {
    key: 'grupo',
    title: 'Esperanza de vida al nacer de las mujeres',
    range: 'A2:B999',
    countryRow: 1,
    valueRow: 0
  },
  {
    key: 'esperanza_vida_mujer',
    title: 'Esperanza de vida al nacer de las mujeres',
    range: 'B2:C999',
    countryRow: 0,
    valueRow: 1
  },
  {
    key: 'voto_femenino',
    title: 'Año de voto femenino',
    range: 'B2:C999',
    countryRow: 0,
    valueRow: 1
  },
  {
    key: 'legisladoras',
    title: 'Proporción de legisladoras',
    range: 'B2:C999',
    countryRow: 0,
    valueRow: 1
  },
  {
    key: 'aborto',
    title: 'Aborto',
    range: 'B2:C999',
    countryRow: 0,
    valueRow: 1
  },
  {
    key: 'licencia_mat_pat',
    title: 'Licencia por maternidad/paternidad',
    range: 'B2:C999',
    countryRow: 0,
    valueRow: 1
  },
  {
    key: 'matrimonio_igualitario',
    title: 'Matrimonio igualitario',
    range: 'B2:C999',
    countryRow: 0,
    valueRow: 1
  }
];

const countries = [
  'Egipto',
  'Arabia Saudí',
  'Rusia',
  'Uruguay',
  'Marruecos',
  'Irán',
  'Portugal',
  'España',
  'Perú',
  'Dinamarca',
  'Australia',
  'Francia',
  'Nigeria',
  'Argentina',
  'Croacia',
  'Islandia',
  'Serbia',
  'Brasil',
  'Costa Rica',
  'Suiza',
  'México',
  'Alemania',
  'Suecia',
  'Corea del Sur',
  'Túnez',
  'Panamá',
  'Inglaterra',
  'Bélgica',
  'Senegal',
  'Colombia',
  'Polonia',
  'Japón'
];


const infoTemplate = {
  grupo: '',
  esperanza_vida_mujer: '',
  voto_femenino: '',
  legisladoras: '',
  aborto: '',
  licencia_mat_pat: '',
  matrimonio_igualitario: '',
};

let expandedInfo = countries.map((country) => ({
  nombre: country,
 ...infoTemplate
}));

//console.log(expandedInfo);

function asyncExpandRows (filters) {
  return new Promise((resolve, reject) => {
    api.getSingleSheet(filters)
      .then((sheetData) => {

        sheetData.forEach((row) => {
          let index =  expandedInfo.findIndex((elem) => row[filters.countryRow] === elem.nombre);

          if (index !== -1) {
            expandedInfo[index] = {
              ...expandedInfo[index],
              [filters.key]: row[filters.valueRow]
            }
          }
        });

        resolve(expandedInfo);
      })
      .catch((err) => console.log(err));
  })
};

const file = 'data.json';
Promise.all(sheetsMap.map(asyncExpandRows))
  .then(res => {

    fs.writeFile(file, JSON.stringify(res.pop(), null, 2), 'utf-8', () => {
      console.log('written');
    });
  });
