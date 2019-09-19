//add export before declaration
let greeting = "welcome back ";

function hi(user){
    return `${greeting} ${user} in javascript Module`;
    // return 'hello world' + user;

}

export { greeting,hi,makeElement}


export default function doubleNumber(num){
    return num * 2;
}

function makeElement (element,text,background,color){
    let el = document.createElement(element);
    el.append(text);
    el.style.background = background;
    el.style.color = color;
    document.body.append(el);
}