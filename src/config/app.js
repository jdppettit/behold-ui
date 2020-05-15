import getCurrentEnvironment from '../util/environment';
let config = {}

if(getCurrentEnvironment() === 'development') {
  config = {
    BASE_PATH: '/',
    DATE_FORMAT: 'MM-DD-YY h:m:s'
  }
} else {
  config = {
    BASE_PATH: 'http://localhost:4040',
    DATE_FORMAT: 'MM-DD-YY h:m:s'
  }
}

export default config;
