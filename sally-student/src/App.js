import React from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className={'container'}>
        <h1>Sally Student</h1>
        <p>I'm an aspiring full stack web developer. I love cats, coding, and crocheting.</p>
        <h2>Contact Info</h2>
      <nav>
        <ul>
         <li>Sally Student</li>
         <li><a href="mailto:nowhere@mozilla.org">Send email to nowhere</a></li>
         <li>555-555-5555</li>
         <li>   <img src="https://m.media-amazon.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_.jpg" /></li>
        </ul>
      </nav>
      <section>
        <h2>Education</h2>
        <p> Business Administration B.A.</p>
        <p> Georgia State University </p>
      </section>
      <section>
        <h2>Emplyment History</h2>
        <h3>Coca Cola</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae veritatis sed laborum, accusantium ut dolore asperiores ea enim, hic fuga corporis? Id cupiditate, voluptatibus veniam doloribus consectetur quia! Quae, eveniet?</p>
        <h3>Target</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae veritatis sed laborum, accusantium ut dolore asperiores ea enim, hic fuga corporis? Id cupiditate, voluptatibus veniam doloribus consectetur quia! Quae, eveniet?</p>
      </section>
      </div>
      );
  }; 
  


export default App;
