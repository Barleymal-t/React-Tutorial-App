import React from "react";
import ReactDom from 'react-dom';

// CSS
import './index.css';
import {books} from './books';
import Book from './Book';

// JSX rules
// return single element
// div/section/article or fragment
// use camelCase for html attribute
// className instead of class
// close every element
// formatting


// Nested compponents, react tools
// function Greeting(){
//   return (
//   <div>
//   <Person /> 
//   <Message />
//   </div>);
// }


// const Person = () => <h2>John Doe</h2>
// const Message = () => {
//   return <p>this is my message</p>
// }

// const Greeting = ()=>{
//   return React.createElement('h1',{},'hello world');}
// const Greeting = ()=>{
  //   return React.createElement('div',{},React.createElement('h1',{},'hello world'));}
  
  // const img = ()=> <img src="logo192.png" alt="" />
  // const Title = ()=> <h1>The Red Heifer</h1>
  // const Author = ()=> <h4 style={{color:'#617d98',fontSize:'0.75rem',marginTop:'0.25rem'}}>Ama Atta Aidoo</h4>

  
  // ReactDom.render(<Greeting />, document.getElementById('root'));
  
  




// const title = 'The Red Heifer'
// const author = 'Ama Atta Aidoo'
// const img = "logo192.png"
function BookList(){
  return(
    <section className='booklist'>
    {books.map((book)=>{
      
      return <Book key={book.id} {...book}></Book>
      })}
    </section>
  );
}


ReactDom.render(<BookList/>,document.getElementById("root"));
