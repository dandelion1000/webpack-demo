// import _ from 'lodash';
// import  './style.css'
// import Icon from './cfcc@3x.png'
// import Data from './data.xml'
// function getComponent(){
//   var element = document.createElement('div');
//   element.innerHTML = _.join(['Hello','webpack'], ' ')
//   return import(/* webpackChunkName:'loadash'*/ 'lodash').then(_=>{
//     var element = document.createElement('div')
//     element.innerHTML = _.join(['hello','webpack1'],'')
//     return element
//   }).catch(error=>'an error occurred while loading the component')
// }
// getComponent().then(component=>{
//   document.body.appendChild(component)
// })
async function getComponent(){
  var element = document.createElement('div');
  const _  = await import(/*webpackChunkName:"lodash"*/ 'lodash');
  element.innerHTML = _.join(['hello','webpack'],' ')
  return element
}
getComponent().then(component =>{
  document.body.appendChild(component)
})