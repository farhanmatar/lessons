import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App,{Person} from './App';
import Todo from './todo/todo'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App name="Farhan" city="berlin" age="Age:29"/>, document.getElementById('root'));
/* ReactDOM.render(<Person name="Farhan" job="developer" />, document.getElementById('person')); */
var list = (
    <div>
        <Person name="Farhan" job="developer" age="Age:23" city="city:Dubai" />
        <Person name="holi" job="developer CSS" age="Age:19"city="city:ShangHigh" />
        <Person name="peter" job="developer REACT" age="Age:33" city="city:Newyork"/>
    </div>
)
ReactDOM.render(list, document.getElementById('person'));
ReactDOM.render(<Todo/> , document.getElementById('Todo'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
