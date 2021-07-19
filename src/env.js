let BASE_URL = 'https://localhost:8080';

if (process.env.NODE_ENV === "development") {
  BASE_URL = 'http://localhost:8080';
} else if (process.env.REACT_APP_AMBIENTE_OS === "DESA") {
    BASE_URL = process.env.REACT_APP_URL_DESA
} else if (process.env.REACT_APP_AMBIENTE_OS === "INTE") {
    BASE_URL = process.env.REACT_APP_URL_INTE
} else if (process.env.REACT_APP_AMBIENTE_OS === "HOMO") {
    BASE_URL = process.env.REACT_APP_URL_HOMO
} else if (process.env.REACT_APP_AMBIENTE_OS === "Production") {
    BASE_URL = process.env.REACT_APP_URL_PROD
}

const ENV = {
  BASE_URL
//   API: {
//     HEADERS: {
//       'Content-Type': 'application/json',
//       Accept: 'application/json',
//     },
//     LOGIN: `${BASE_URL}/v2/login`,
//     },
};

export default ENV;
