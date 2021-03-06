import React from 'react';
import Background from '../../assets/images/quizz1.jpg';
import GitApi from '../../assets/images/gitApi.jpg';
import DSC1 from '../../assets/images/DSC1.jpg';
import Note from '../../assets/images/Note.jpg';
import Insta from '../../assets/images/insta.jpg';
import Title from '../about/Title';

const Projects = () => {
    return (
        <div data-aos="slide-right" data-aos-duration="2000">
        <div style={{marginBottom: "40px"}}>
        <Title title={"Projects"} span={"Projects"} />
        </div>

        <div className="thaughts">
          <h4>We are what we repeatedly do. Excellence, then, is not an act, but a habit.</h4>
          <img src="https://media.giphy.com/media/JoPa1aDFEvRecqeFja/giphy.gif" alt="project"/>
        </div>

        <div className="blog-card" data-aos="fade-in" data-aos-duration="2500">
        <div className="meta">
          <div className="photo" 
          style={{ 
           background: `url(${Background})`,
           backgroundPosition: 'center',
           backgroundSize: 'cover' }}></div>
          <ul className="details">
            <li className="author"><a href="https://github.com/ss0710/React-Quiz-App" target="_blank" rel="noreferrer">Github Link</a></li>
            <li className="date">Teach Used</li>
            <li className="tags">
              <ul>
                <li>React.js </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="description">
          <h1>QuizzVerse</h1>
          <h2>A Quizz Application</h2>
          <p>User can attempt various interesting questions and view their result. Concept of React router is used to implement single page application</p>
          <p className="read-more">
            <a href="https://quizz-react.herokuapp.com/" target="_blank" rel="noreferrer">View Project</a>
          </p>
        </div>
        </div>

        <div className="blog-card alt" data-aos="fade-in" data-aos-duration="2500">
        <div className="meta">
          <div className="photo" style={{ 
           background: `url(${GitApi})`,
           backgroundPosition: 'center',
           backgroundSize: 'cover' }}></div>
          <ul className="details">
            <li className="author"><a href="https://github.com/ss0710/GitApi" target="_blank" rel="noreferrer">Github Link</a></li>
            <li className="date">Tech Used</li>
            <li className="tags">
              <ul>
                <li>ReactJS</li>
                <li>Github API</li>
                <li>JavaScript</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="description">
          <h1>GITImfo</h1>
          <h2>GITimfo is build on React.js (JavaScript Frontend Framework).</h2>
          <p>GITImfo provides github data of users through Github API call. It provides imformation about the repositories, total numbers of repos including clone url and other details</p>
          <p className="read-more">
            <a href="https://gitapi1.herokuapp.com/" target="_blank" rel="noreferrer">View Project</a>
          </p>
        </div>
      </div>

      <div className="blog-card" data-aos="fade-in" data-aos-duration="2500">
        <div className="meta">
          <div className="photo" 
          style={{ 
           background: `url(${DSC1})`,
           backgroundPosition: 'center',
           backgroundSize: 'cover' }}></div>
          <ul className="details">
            <li className="author"><a href="https://github.com/ss0710/dsc" target="_blank" rel="noreferrer">Github Link</a></li>
            <li className="date">Teach Used</li>
            <li className="tags">
              <ul>
                <li>React.js </li>
                <li>Material UI</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="description">
          <h1>Developer Students Club Website</h1>
          <h2>Developer Students Club Website.</h2>
          <p>It is a single Page web application with navigation without the page refreshing as the user navigates which is implemented through React Router
          .</p>
          <p className="read-more">
            <a href="https://distracted-shaw-5cdd3c.netlify.app/" target="_blank" rel="noreferrer">View Project</a>
          </p>
        </div>
        </div>

        <div className="blog-card alt" data-aos="fade-in" data-aos-duration="2500">
        <div className="meta">
          <div className="photo" style={{ 
           background: `url(${Insta})`,
           backgroundPosition: 'center',
           backgroundSize: 'cover' }}></div>
          <ul className="details">
            <li className="author"><a href="https://github.com/ss0710/insta_ui_clone" target="_blank" rel="noreferrer">Github Link</a></li>
            <li className="date">Tech Used</li>
            <li className="tags">
              <ul>
                <li>ReactJS</li>
                <li>JavaScript</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="description">
          <h1>Instagram UI Clone</h1>
          <h2>Instafram UI Clone</h2>
          <p>Insta UI build using React.js .The website is fully responsive which rescales itself to preserve the user experience and look and feel across all devices ??? with no irritating zooming, scrolling or resizing.</p>
          <p className="read-more">
            <a href="https://c2loneinsta.herokuapp.com/" target="_blank" rel="noreferrer">View Project</a>
          </p>
        </div>
      </div>

      <div className="blog-card" data-aos="fade-in" data-aos-duration="2500">
        <div className="meta">
          <div className="photo" 
          style={{ 
           background: `url(${Note})`,
           backgroundPosition: 'center',
           backgroundSize: 'cover' }}></div>
          <ul className="details">
            <li className="author"><a href="https://github.com/ss0710/ToDo-WithReact" target="_blank" rel="noreferrer">Github Link</a></li>
            <li className="date">Teach Used</li>
            <li className="tags">
              <ul>
                <li>React.js </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="description">
          <h1>NoteFlash</h1>
          <h2>Note Application build using React.js</h2>
          <p>Note Application where one add, delete and mark the tasks as done. The Application is build using React.js</p>
          <p className="read-more">
            <a href="https://ss0710.github.io/ToDo-WithReact/" target="_blank" rel="noreferrer">View Project</a>
          </p>
        </div>
        </div>

        <div className="last-div">
            <h4>more to come...</h4>
            <img src="https://media.giphy.com/media/USV0ym3bVWQJJmNu3N/giphy.gif" alt="project"/>
        </div>

      </div>
    )
}

export default Projects;

