import { useRef, useState } from 'react'
import './App.css'
//https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js
import { marked } from "https://cdnjs.cloudflare.com/ajax/libs/marked/13.0.2/lib/marked.esm.js";
//![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
function App() {const marker = "# Welcome to my React Markdown Previewer!" +
  "\n## This is a sub-heading..." +
  "\n### And here's some other cool stuff:" +
  "\n\nHeres some code, `<div></div>`, between 2 backticks." +
  "\n\n```" +
  "// this is multi-line code:\n" +
  "function anotherExample(firstLine, lastLine) {\n" +
  "  if (firstLine == \'`\' && lastLine == \'`\') {\n" +
  "    return multiLineCode;\n" +
  "  }\n" +
  "}\n" +
  "```\n\n" +
  "You can also make text **bold**... whoa!" +
  "\nOr _italic_.\n" +
  "Or... wait for it... **_both!_**\n" +
  "And feel free to go crazy ~~crossing stuff out~~.\n\n" +
  "There's also [links](https://www.freecodecamp.org), and\n" +
  "> Block Quotes!\n\n" +
  "And if you want to get really crazy, even tables:\n\n" +
  "Wild Header | Crazy Header | Another Header?\n" +
  "------------ | ------------- | -------------\n" +
  "Your content can | be here, and it | can be here....\n" +
  "And here. | Okay. | I think we get it.\n\n" +
  "- And of course there are lists.\n" +
  "  - Some are bulleted.\n" +
  "    - With different indentation levels.\n" +
  "      - That look like this.\n\n" +
  "1. And there are numbered lists too.\n" +
  "1. Use just 1s if you want!\n" +
  "1. And last but not least, let's not forget embedded images:\n\n" +
  "![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)";
  const [text,setText]=useState(marker) 
  const prev=useRef(null)
  function handletext(e){
    if(e.target.value[e.target.value.length-1]=='\n'){
      setText(e.target.value+" \n ")
    }
      else
    setText(e.target.value)

      
  }

  return(
    <div id='container'>
    <textarea placeholder='Input you text marked Here' onChange={(e)=>handletext(e)} id='editor' value={text}/>
      <div id='indicator'>Marked to </div>
    <div  ref={prev} dangerouslySetInnerHTML={{__html:marked.parse(text)}} id='preview'></div>
    
    </div>
  )
}

export default App


