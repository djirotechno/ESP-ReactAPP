import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';




function App() {
  const client = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com/posts"
  });
  
  const [posts, setPosts] = useState([]);

   useEffect(() => {
      client.get('?_limit=10').then((response) => {
         setPosts(response.data);
      });
   }, []);

  return (
    <div classNameName="App">
      <h2>All Posts 📫</h2>
      {Object.values(posts).map((post) => {
        return (
            <div className='w3-container'>
               <div className="w3-card-4 w3-padding w3-center">

                <header className="w3-container w3-blue w3-center">
                  <h1 key={post.id}>{post.title}</h1>
                  </header>
                  <div className="w3-container w3-center">
                    <p>{post.body}</p>
                  </div>

                  <footer className="w3-container w3-center">
                
                    <div className="delete-btn w3-button w3-red">Delete</div>

                  </footer>
                </div>
            </div>
        );
      })}
    </div>
    
        );
}

export default App;




{/* <div className="w3-container w3-teal">
  <h1>ESP32</h1>
</div>

<div className="w3-container">
   <div className="w3-card-4  w3-padding">
		<div className="w3-container w3-center">
		  <h3>valeur capteur</h3>
				<p id="capteur" >0</p>
			<br>
		  <button onclick="onButton()" className="w3-button w3-green">ON</button>
		  <button onclick="offButton()" className="w3-button w3-red">OFF</button>
		</div>
	</div> 
</div> */}