import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Project = () => {
  return (
    <div className="project"> 
      <div className="row" style={{backgroundColor: "white"}}>
        <div className="col-sm-4 box-container1">
          <div
            style={{
              display: 'flex',
              height: '800vh',
              padding: '3%',
              maxHeight: '80vh', // Set maximum height to make sure background covers entire viewport
              minHeight: '90vh', // Set minimum height to make sure background covers entire viewport
            }}
          >
            <div
              style={{
                fontSize: "18px", 
                width: '100%',
                maxWidth: '400px',
                height: '100%',
                background: 'black',
                borderRadius: '15px',
                color: 'white',
                overflow: 'auto', // Add this rule to control overflow
              }}
            >
              <div style={{backgroundColor: "#6f42c1", color: "black", fontSize:"20px", padding: "5px"}} id='movie-app' className="text-center"> <h1>The Movie App</h1> </div>
              <img src={require('./pictures/movie1.jpeg')} alt="movie-poster" className="circle-img" style={{padding: "0px 20px 0px 20px"}} />

              <p style={{padding: "10px 20px 0px 20px"}}> This app provides users with a sleek and user-friendly interface to browse
                the most popular movies. Build using modern technologies such as <span className='skills'> React, Bootstrap, and TDMB
                API</span>, the website offers a wide range of movie options to choose from. The backend is supported
                by <span className='skills'>Firebase and MongoDB</span>, ensuring efficient storage and retrieval of user data.
              </p>

              <p className="text-center">
                {/* GitHub button */}
                <a href="https://github.com/sizomanhuxley" target="_blank" rel="noopener noreferrer" className="github-button">
                  <FaGithub />
                  {"  "}
                  GitHub
                </a>
              </p>
            
            </div>
          </div>
        </div>

        <div className="col-sm-4 box-container2">
          <div
            style={{
              display: 'flex',
              height: '800vh',
              padding: '3%',
              maxHeight: '80vh', // Set maximum height to make sure background covers entire viewport
              minHeight: '90vh', // Set minimum height to make sure background covers entire viewport
            }}
          >
            <div
              style={{
                fontSize: "18px", 
                width: '100%',
                maxWidth: '400px',
                height: '100%',
                border: '1px solid black',
                borderRadius: '15px',
                color: 'black',
                overflow: 'auto', // Add this rule to control overflow
              }}
            >
              <div style={{backgroundColor: "#FF5733", color: "black", fontSize:"20px", padding: "5px"}} id='movie-app' className="text-center"> <h1>Tail Together</h1> </div>
              <img src={require('./pictures/tail_together.jpeg')} alt="movie-poster" className="tail-image" style={{padding: "10px 20px 0px 20px"}} />

              <p style={{ padding: "10px 20px 0px 20px" }}>
  With this app, users can effortlessly connect and chat about upcoming venues,
  share interests, host pregame parties, or simply engage in event-related conversations.
  Developed using <span className='skills'>Xcode</span> and <span className='skills'>Swift</span>,
  and powered by <span className='skills'>Back4App</span> for seamless data management.
</p>

              <p className="text-center">
                {/* GitHub button */}
                <a href="https://github.com/jsison2021/Tail-Together" target="_blank" rel="noopener noreferrer" className="github-button">
                  <FaGithub />
                  {"  "}
                  GitHub
                </a>
              </p>
            
            </div>
          </div>
        </div>


        <div className="col-sm-4 box-container3">
          <div
            style={{
              display: 'flex',
              height: '800vh',
              padding: '3%',
              maxHeight: '80vh', // Set maximum height to make sure background covers entire viewport
              minHeight: '90vh', // Set minimum height to make sure background covers entire viewport
            }}
          >
            <div
              style={{
                fontSize: "18px", 
                width: '100%',
                maxWidth: '400px',
                height: '100%',
                border: '1px solid black',
                background: 'black',
                borderRadius: '15px',
                color: 'white',
                overflow: 'auto', // Add this rule to control overflow
              }}
            >
              <div style={{backgroundColor: "white", color: "black", fontSize:"30px", padding: "5px"}} id='movie-app' className="text-center"> Gilderise Enterprise </div>
              <img src={require('./pictures/gilderise.jpeg')} alt="movie-poster" className="circle-img" style={{padding: "0px 20px 0px 20px"}} />

              <p style={{padding: "10px 20px 0px 20px"}}> A website that emulates a property management system where users can register for accounts, login to accounts,
                        update personal information, store, retrieve, update, and delete Personal Inventories.
                   <span className='skills'>Firebase and MongoDB</span>, ensuring efficient storage and retrieval of user data.
              </p>

              <p className="text-center">
                {/* GitHub button */}
                <a href="https://github.com/Principles-Of-Software-Dev/summer-project" target="_blank" rel="noopener noreferrer" className="github-button">
                  <FaGithub />
                  {"  "}
                  GitHub
                </a>
              </p>
            
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Project;
