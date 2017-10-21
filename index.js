// index.js
import moment from 'moment';
global.jQuery = require('jquery');
require('bootstrap');



console.log("Hello from JavaScript!");
console.log(moment().startOf('day').fromNow());

var name = "george", time = "today";
console.log(`Hello ${name}, how are you ${time}?`);
