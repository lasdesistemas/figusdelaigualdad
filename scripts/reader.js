const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');
const qs = require('querystring');

// If modifying these scopes, delete credentials.json.
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
const TOKEN_PATH = 'credentials.json';


/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
  const {client_secret, client_id, redirect_uris} = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris[0]);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getNewToken(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client);
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getNewToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return callback(err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  });
}

/**
 * Prints the names and majors of students in a sample spreadsheet:
 * @see https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
 */
function getSheets() {
  return new Promise((resolve, reject) => {
    // Load client secrets from a local file.
    fs.readFile('../client_secret.json', (err, content) => {
      if (err) {
        console.log('Error loading client secret file:', err);
        reject(err);
      }

      // Authorize a client with credentials, then call the Google Sheets API.
      authorize(JSON.parse(content), (auth) => {
        const sheets = google.sheets({version: 'v4', auth});

        var request = {
          // The spreadsheet to request.
          spreadsheetId: '1zDxJ78YD_t-lPOt8BfDPsOfuxbkQUazEJ5M7EVF_7B0',  // TODO: Update placeholder value.

          // The ranges to retrieve from the spreadsheet.
          ranges: [],  // TODO: Update placeholder value.
          fields: 'sheets.properties',

          includeGridData: false,  // TODO: Update placeholder value.
        };

        sheets.spreadsheets.get(request, function(err, response) {
          if (err) {
            console.error(err);
            reject(err);
          }

          resolve(response.data.sheets.map((sheet) => ({
            sheetId: sheet.properties.sheetId,
            title: sheet.properties.title,
            index: sheet.properties.index
          })))
        });
      });
    });
  });
}

function getSingleSheet(sheetObj) {
  return new Promise((resolve, reject) => {
    // Load client secrets from a local file.
    fs.readFile('../client_secret.json', (err, content) => {
      if (err) {
        console.log('Error loading client secret file:', err);
        reject(err);
      }

      // Authorize a client with credentials, then call the Google Sheets API.
      authorize(JSON.parse(content), (auth) => {
        const sheets = google.sheets({version: 'v4', auth});

        var request = {
          // The spreadsheet to request.
          spreadsheetId: '1zDxJ78YD_t-lPOt8BfDPsOfuxbkQUazEJ5M7EVF_7B0',  // TODO: Update placeholder value.

          // The ranges to retrieve from the spreadsheet.
          range: qs.escape(`\'${sheetObj.title}\'!${sheetObj.range}`),
          majorDimension: "ROWS"
        };

        sheets.spreadsheets.values.get(request, function(err, response) {
          if (err) {
            console.error(err);
            reject(err);
          }

          resolve(response.data.values)
        });
      });
    });
  });
}

module.exports = {
  getSheets,
  getSingleSheet
};
