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
                    <button id="neonShadow">LinkedIn</button>
                    <button id="neonShadow">GitHub</button>
                    <button id="neonShadow">Instagram</button>
                    </div>
            </header>
        </div>
    );
}

export default HomePage;