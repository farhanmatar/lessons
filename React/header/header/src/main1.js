import React from 'react';
import Article from './article.js'
import {SectionNode} from './article.js'
import {DetailsA} from './article.js'
import {Section} from './article.js'
import {SectionJava} from './article.js'
import './App.css';

function Main1(){
    return (
       <main>
          <Article />
          <SectionNode/>
          <DetailsA/>
          < Section/>
         <SectionJava/>
       </main>

    );
}
export default Main1;