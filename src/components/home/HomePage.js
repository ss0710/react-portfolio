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

                    <section>
     	                <div class="box2"></div>
                    </section>

                    <section>
     	                <div className="container">
                    <div className="loadingspinner">
                    <div id="square1"></div>
                    <div id="square2"></div>
                    <div id="square3"></div>
                    <div id="square4"></div>
                    <div id="square5"></div>
                    </div>
                    </div>
                    </section>

                    <div className="icons">
                         
                    </div>
                </h1>
            </header>
        </div>
    );
}

export default HomePage;