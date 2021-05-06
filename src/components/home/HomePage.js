import React from 'react';

const HomePage = () => {
    return(
        <div className="HomePage">
            <header className="content">
                <h1 className="content-text">
                    Hi I am 
                    <span> Sudheer Singh</span>
                    <p className="content-sub-text">
                        Web Developer And Competetive Pragrammer
                    </p>
                </h1>
                    <div className="icons">
                    <a href="https://www.linkedin.com/in/sudheer-singh-6132951a2/" target="_blank" rel="noreferrer"><button id="neonShadow">LinkedIn</button></a>
                    <a href="https://github.com/ss0710" target="_blank" rel="noreferrer"><button id="neonShadow">GitHub</button></a>
                    <a href="https://www.instagram.com/mr._mister1007/" target="_blank" rel="noreferrer"><button id="neonShadow">Instagram</button></a>
                    </div>
            </header>
        </div>
    );
}

export default HomePage;