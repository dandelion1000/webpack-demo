
import {cube} from './math.js'
if (process.env.NODE_ENV!=='production') {
  console.log('Look like we are in development')
}
function component(){
  var element = document.createElement('pre');
  element.innerHTML = [
    'hello webpack',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n')
  return element;
}
let element = component();
document.body.appendChild(element)