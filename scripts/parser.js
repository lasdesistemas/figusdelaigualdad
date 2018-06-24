// Note: read this to user the script https://developers.google.com/sheets/api/quickstart/nodejs
// The app needs to be authrozied on google and the credentials need to be downloaded.

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
  {
    name: 'Rusia',
    key: 'RU'
  },
  {
    name: 'Arabia Saudí',
    key: 'SA'
  },
  {
    name: 'Egipto',
    key: 'EG'
  },
  {
    name: 'Uruguay',
    key: 'UY'
  },
  {
    name: 'Marruecos',
    key: 'MA'
  },
  {
    name: 'Irán',
    key: 'IR'
  },
  {
    name: 'España',
    key: 'ES'
  },
  {
    name: 'Portugal',
    key: 'PT'
  },
  {
    name: 'Perú',
    key: 'PE'
  },
  {
    name: 'Australia',
    key: 'AU'
  },
  {
    name: 'Dinamarca',
    key: 'DK'
  },
  {
    name: 'Francia',
    key: 'FR'
  },
  {
    name: 'Croacia',
    key: 'HR'
  },
  {
    name: 'Nigeria',
    key: 'NG'
  },
  {
    name: 'Argentina',
    key: 'AR'
  },
  {
    name: 'Islandia',
    key: 'IS'
  },
  {
    name: 'Suiza',
    key: 'CH'
  },
  {
    name: 'Serbia',
    key: 'RS'
  },
  {
    name: 'Costa Rica',
    key: 'CR'
  },
  {
    name: 'Brasil',
    key: 'BR'
  },
  {
    name: 'México',
    key: 'MX'
  },
  {
    name: 'Alemania',
    key: 'DE'
  },
  {
    name: 'Corea del Sur',
    key: 'KR',
  },
  {
    name: 'Suecia',
    key: 'SW'
  },
  {
    name: 'Panamá',
    key: 'PA'
  },
  {
    name: 'Túnez',
    key: 'TN'
  },
  {
    name: 'Bélgica',
    key: 'BE'
  },
  {
    name: 'Inglaterra',
    key: 'EN'
  },
  {
    name: 'Japón',
    key: 'JP'
  },
  {
    name: 'Polonia',
    key: 'PL'
  },
  {
    name: 'Senegal',
    key: 'SN'
  },
  {
    name: 'Colombia',
    key: 'CO'
  }
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
  nombre: country.name,
  key: country.key,
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
      console.log(`written to ${file}`);
    });
  });
