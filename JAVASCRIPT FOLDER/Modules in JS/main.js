import {greeting,hi,makeElement} from './user.js';
// import{hi} from './user.js';

//no need to ad {} after import because doublenumber is export default ;
import doubleNumber from './user.js';
//  alert(doubleNumber(250));

// let div = document.createElement("div");
// div.append(hi("romal"));
// div.style.background="yellow";
// div.style.width="80 px" ;
// document.body.append(div);

makeElement("div",hi ("farhan"),"lightgreen","blue");
makeElement("div",hi ("dave"),"red","yellow");
makeElement("div",hi ("hanns"),"blue","white");
makeElement("div",hi ("farhan"),"yellow","red");
