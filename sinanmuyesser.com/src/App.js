import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <body>
    <header>
        <a data-target="#sinan-carousel" data-slide-to="0"><img src="images/S-Circle_Logo.png" alt="S Logo" class="navbar-brand ml-auto mr-auto" id="logo"></a>
        <nav>
            <div id="toggle-wrapper" style="box-shadow: 0px 2px 8px rgba(0,0,0,0.2)">
                <div id="toggle" class="closed" onClick="openSlideMenu()">
                    <div class="toggle-span" id="one"></div>
                    <div class="toggle-span" id="two"></div>
                    <div class="toggle-span" id="three"></div>
                </div>
            </div>
            <div id="sidebar">
                <ul id="menu">
                    <li data-target="#sinan-carousel" data-slide-to="0"><a href="#landing" onClick="closeSlideMenuWithLink()">Home</a></li>
                    <li data-target="#sinan-carousel" data-slide-to="1"><a href="#portfolio" onClick="closeSlideMenuWithLink()">Portfolio</a></li>
                    <li data-target="#sinan-carousel" data-slide-to="2"><a href="#about" onClick="closeSlideMenuWithLink()">About</a></li>
                    <li data-target="#sinan-carousel" data-slide-to="3"><a href="#contact" onClick="closeSlideMenuWithLink()">Contact</a></li>
                </ul>
                <span id="menu-text">Menu<span style="color: #fff">.</span></span>
            </div>
        </nav>
    </header>
    <!--        <div id="intro-animation">
     <img src="images/S-Circle_Logo.png" alt="S" id="intro-img">
 </div> -->
    <main id="main w-100">
        <div id="sinan-carousel" class="carousel slide" data-interval="false">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="container" id="landing">
                        <div class="row justify-content-between">
                            <div class="col-4 title-text" id="landing-title">
                                <span class="vertical-text">Welcome<span style="color: #f28d30">.</span></span>
                                <div id="line-span-container">
                                    <div class="line-span" id="line-one">
                                    </div>
                                    <div class="line-span" id="line-two"></div>
                                    <div class="line-span" id="line-three"></div>
                                    <div class="line-span" id="line-four"></div>
                                </div>
                            </div>
                            <div class="col-8" id="landing-half-face-col">
                                <img src="images/Sinan-Face-Galaxy-Half-Right-Flipped.png" id="landing-half-face">
                            </div>
                        </div>
                    </div> <!-- End Landing Container -->
                </div>
                <div class="carousel-item">
                    <div class="container m-0" id="portfolio">
                        <div class="row">
                            <div class="col-4 title-text" id="portfolio-title">
                                <span class="vertical-text">Portfolio<span style="color: #f28d30">.</span></span>
                                <div id="line-span-container">
                                    <div class="line-span" id="line-four"></div>
                                    <div class="line-span" id="line-three"></div>
                                    <div class="line-span" id="line-two"></div>
                                    <div class="line-span" id="line-one"></div>
                                </div>
                            </div>
                            <div class="col-8" id="gallery-col">
                                <div id="gallery">
                                    <div class="gallery-item" id="gallery-item-1">
                                        <div class="gallery-item-inner">
                                            <img src="images/pizza.png">
                                            <div class="gallery-item-title">
                                                <span class="gallery-vertical-text">Hungry?</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="gallery-item" id="gallery-item-2">
                                        <div class="gallery-item-inner">
                                            <img src="images/videographer.png">
                                            <div class="gallery-item-title">
                                                <span class="gallery-vertical-text">The Video Shelf?</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="gallery-item" id="gallery-item-3">
                                        <div class="gallery-item-inner">
                                            <img src="images/gaming-controller.png">
                                            <div class="gallery-item-title">
                                                <span class="gallery-vertical-text">FIFA Formations</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="gallery-item" id="gallery-item-4">
                                        <div class="gallery-item-inner">
                                            <img src="images/andaction.png">
                                            <div class="gallery-item-title">
                                                <span class="gallery-vertical-text">The Movie Game</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> <!-- End Portfolio Container -->
                </div>
                <div class="carousel-item">
                    <div class="container" id="about">
                        <div class="row">
                            <div class="col-4 title-text" id="about-title">
                                <span class="vertical-text">About<span style="color: #f28d30">.</span></span>
                                <div id="line-span-container">
                                    <div class="line-span" id="line-three"></div>
                                    <div class="line-span" id="line-one"></div>
                                    <div class="line-span" id="line-two"></div>
                                    <div class="line-span" id="line-four"></div>
                                </div>
                            </div>
                            <div class="col-8" id="about-content-col">
                                <div class="accordion" id="about-accordion">
                                    <div class="card">
                                        <div class="card-header" id="headingOne">
                                            <h5 class="mb-0">
                                                <button class="btn" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    Background
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#about-accordion">
                                            <div class="card-body">
                                                <p>I am a full stack developer located in Santa Monica, California experienced in JavaScript, React, Express, Node, MongoDB, and more with a background in sales, operations, and customer service. I enjoy coding because it allows me to create something from nothing. I am passionate about designing, learning frameworks, libraries, languages, and building apps to grow as a developer.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header" id="headingTwo">
                                            <h5 class="mb-0">
                                                <button class="btn collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    Skills
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#about-accordion">
                                            <div class="card-body">
                                                <div id="skills-wrapper">
                                                    <ul id="skills1">
                                                        <li>HTML5</li>
                                                        <li>CSS3</li>
                                                        <li>JavaScript</li>
                                                        <li>Bootstrap</li>
                                                        <li>jQuery</li>
                                                        <li>React.js</li>
                                                        <li>Redux</li>
                                                        <li>Node</li>
                                                        <li>MongoDB</li>
                                                        <li>RESTful APIs</li>
                                                    </ul>
                                                    <ul id="skills2">
                                                        <li>Express</li>
                                                        <li>Passport.js</li>
                                                        <li>bcrypt</li>
                                                        <li>Git</li>
                                                        <li>npm</li>
                                                        <li>Mocha</li>
                                                        <li>Chai</li>
                                                        <li>Jest</li>
                                                        <li>Enzyme</li>
                                                        <li>Travic CI</li>
                                                    </ul>
                                                </div>
                                                <ul id="skills3">
                                                    <li>Mobile-First Development</li>
                                                    <li>Responsive Web Design</li>
                                                    <li>Cross-Browser Compatibility</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header" id="headingThree">
                                            <h5 class="mb-0">
                                                <button class="btn collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    Interests
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#about-accordion">
                                            <div class="card-body">
                                                <ul>
                                                    <li>Soccer</li>
                                                    <li>Golf</li>
                                                    <li>Movies & TV</li>
                                                    <li>Fitness</li>
                                                    <li>Gaming</li>
                                                    <li>Cooking</li>
                                                    <li>Nature</li>
                                                    <li>Football</li>
                                                    <li>Meditation</li>
                                                    <li>Travel</li>
                                                    <li>Volleyball</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> <!-- End About Container -->
                </div>
                <div class="carousel-item">
                    <div class="container" id="contact">
                        <div class="row">
                            <div class="col-4 title-text" id="contact-title">
                                <span class="vertical-text">Contact<span style="color: #f28d30">.</span></span>
                                <div id="line-span-container">
                                    <div class="line-span" id="line-two"></div>
                                    <div class="line-span" id="line-three"></div>
                                    <div class="line-span" id="line-four"></div>
                                    <div class="line-span" id="line-one"></div>
                                </div>
                            </div>
                            <div class="col-8" id="contact-col">
                                <ul class="contact-info">
                                    <li class="mail">
                                        <p>Email</p><a href="mailto:smuyesser@gmail.com"><img class="contact-img" src="images/email.png" /></a>
                                    </li>
                                    <li class="linkedin">
                                        <p>Linkedin</p><a href="https://www.linkedin.com/in/sinan-muyesser-1a8aa246/"><img class="contact-img" src="images/linkedin.png" /></a>
                                    </li>
                                    <li class="github">
                                        <p>Github</p><a href="https://github.com/smuyesser"><img class="contact-img" src="images/github.png" /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div> <!-- End Contact Container -->
                </div>
            </div>
            <a class="carousel-control-prev" href="#sinan-carousel" role="button" data-slide="prev">
                <img src="images/arrow-97-64.png">
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#sinan-carousel" role="button" data-slide="next">
                <img src="images/arrow-32-64.png">
                <span class="sr-only">Next</span>
            </a>
        </div>
        <div class="container m-0 full-screen-gallery-item hidden" id="hungry">
            <div class="row">
                <div class="col-12">
                    <button><img src="images/x.png" alt="close"></button>
                    <h1>Hungry?</h1>
                    <p class="short-info">Recipe search app powered by Food2Fork API</p>
                    <img class="app-img" src="images/largehungry.jpg" alt="hungry?">
                    <div class="row">
                        <div class="col-12">
                            <div class="list-group" id="list-tab-1" role="tablist">
                                <a class="list-group-item list-group-item-action active" id="list-description-list-1" data-toggle="list" href="#list-description-1" role="tab" aria-controls="description-1">Description</a>
                                <a class="list-group-item list-group-item-action" id="list-tech-list-1" data-toggle="list" href="#list-tech-1" role="tab" aria-controls="tech-1">Tech Stack</a>
                                <a class="list-group-item list-group-item-action" id="list-links-list-1" data-toggle="list" href="#list-links-1" role="tab" aria-controls="links-1">Links</a>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="tab-content" id="nav-tabContent-1">
                                <div class="tab-pane show active" id="list-description-1" role="tabpanel" aria-labelledby="list-description-list-1">
                                    <p class="app-description">The HUNGRY? web app allows you to utilize the food2fork api to search an extensive database of delicious recipes. If you are unsure of the recipe you're craving, you can also search by selecting the ingredients you would like to use. It has helped me turn random food items laying around the kitchen into tasty meals.</p>
                                </div>
                                <div class="tab-pane" id="list-tech-1" role="tabpanel" aria-labelledby="list-tech-list-1">
                                    <ul class="tech-list">
                                        <li>HTML5</li>
                                        <li>CSS3</li>
                                        <li>JavaScript</li>
                                        <li>jQuery</li>
                                        <li>Node.js</li>
                                        <li>npm</li>
                                        <li>Express</li>
                                        <li>Mocha</li>
                                        <li>Chai</li>
                                        <li>Travis CI</li>
                                    </ul>
                                </div>
                                <div class="tab-pane" id="list-links-1" role="tabpanel" aria-labelledby="list-links-list-1">
                                    <span class="live-code-links">
                                        <a href="https://smuyesser.github.io/hungry-recipes-v2/">
                                            <img src="images/LiveScreen.png" alt="Live Screen">
                                            <p>Live Site</p>
                                        </a> 
                                        <a href="https://github.com/SMuyesser/hungry-recipes-v2">
                                            <img src="images/CodeScreen.png" alt="Code Screen">
                                            <p>Code</p>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div class="container m-0 full-screen-gallery-item hidden" id="the-video-shelf">
            <div class="row">
                <div class="col-12">
                    <button><img src="images/x.png" alt="close"></button>
                    <h1>The Video Shelf</h1>
                    <p class="short-info">Vimeo video database app</p>
                    <img class="app-img" src="images/vidshelflarge3.jpg" alt="video shelf">
                    <div class="row">
                        <div class="col-12">
                            <div class="list-group" id="list-tab-2" role="tablist">
                                <a class="list-group-item list-group-item-action active" id="list-description-list-2" data-toggle="list" href="#list-description-2" role="tab" aria-controls="description-2">Description</a>
                                <a class="list-group-item list-group-item-action" id="list-tech-list-2" data-toggle="list" href="#list-tech-2" role="tab" aria-controls="tech-2">Tech Stack</a>
                                <a class="list-group-item list-group-item-action" id="list-links-list-2" data-toggle="list" href="#list-links-2" role="tab" aria-controls="links-2">Links</a>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="tab-content" id="nav-tabContent-2">
                                <div class="tab-pane show active" id="list-description-2" role="tabpanel" aria-labelledby="list-description-list-2">
                                    <p class="app-description">The Video Shelf web app was built for a friend's videography company. The Video Shelf allows the user to login, and then register clients with their name, logo, and vimeo videos. This app allows client information to be updated easily and increase productivity for the business.</p>
                                </div>
                                <div class="tab-pane" id="list-tech-2" role="tabpanel" aria-labelledby="list-tech-list-2">
                                    <ul class="tech-list">
                                        <li>HTML5</li>
                                        <li>CSS3</li>
                                        <li>JavaScript</li>
                                        <li>jQuery</li>
                                        <li>AJAX</li>
                                        <li>Node.js</li>
                                        <li>npm</li>
                                        <li>Express</li>
                                        <li>handlebars</li>
                                        <li>MongoDB</li>
                                        <li>mongoose</li>
                                        <li>Passport.js</li>
                                        <li>Heroku</li>
                                        <li>Mocha</li>
                                        <li>Chai</li>
                                        <li>Travis CI</li>
                                    </ul>
                                </div>
                                <div class="tab-pane" id="list-links-2" role="tabpanel" aria-labelledby="list-links-list-2">
                                    <span class="live-code-links">
                                        <a href="https://thevideoshelf.Herokuapp.com">
                                            <img src="images/LiveScreen.png" alt="Live Screen">
                                            <p>Live Site</p>
                                        </a> 
                                        <a href="https://github.com/SMuyesser/thevideoshelf">
                                            <img src="images/CodeScreen.png" alt="Code Screen">
                                            <p>Code</p>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container m-0 full-screen-gallery-item hidden" id="fifa-formations">
            <div class="row">
                <div class="col-12">
                    <button><img src="images/x.png" alt="close"></button>
                    <h1>FIFA Formations</h1>
                    <p class="short-info">Video game companion app</p>
                    <img class="app-img" src="images/fifalarge.jpg" alt="fifa formations">
                    <div class="row">
                        <div class="col-12">
                            <div class="list-group" id="list-tab-3" role="tablist">
                                <a class="list-group-item list-group-item-action active" id="list-description-list-3" data-toggle="list" href="#list-description-3" role="tab" aria-controls="description-3">Description</a>
                                <a class="list-group-item list-group-item-action" id="list-tech-list-3" data-toggle="list" href="#list-tech-3" role="tab" aria-controls="tech-3">Tech Stack</a>
                                <a class="list-group-item list-group-item-action" id="list-links-list-3" data-toggle="list" href="#list-links-3" role="tab" aria-controls="links-3">Links</a>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="tab-content" id="nav-tabContent-3">
                                <div class="tab-pane show active" id="list-description-3" role="tabpanel" aria-labelledby="list-description-list-3">
                                    <p class="app-description">Fifa has been my favorite video game for over a decade. This app is a helpful strategy guide for each Fifa Ultimate Team formation. It is a quick, simple, and easy to use way of setting up your team to win more games. </p>
                                </div>
                                <div class="tab-pane" id="list-tech-3" role="tabpanel" aria-labelledby="list-tech-list-3">
                                    <ul class="tech-list">
                                        <li>HTML5</li>
                                        <li>CSS3</li>
                                        <li>JavaScript</li>
                                        <li>jQuery</li>
                                        <li>axios</li>
                                        <li>React.js</li>
                                        <li>Redux</li>
                                        <li>Node.js</li>
                                        <li>npm</li>
                                        <li>Express</li>
                                        <li>handlebars</li>
                                        <li>MongoDB</li>
                                        <li>mongoose</li>
                                        <li>Passport.js</li>
                                        <li>Netlify</li>
                                        <li>Heroku</li>
                                        <li>Mocha</li>
                                        <li>Chai</li>
                                        <li>Travis CI</li>
                                    </ul>
                                </div>
                                <div class="tab-pane" id="list-links-3" role="tabpanel" aria-labelledby="list-links-list-3">
                                    <span class="live-code-links">
                                        <a href="https://fifaformations.Netlify.com">
                                            <img src="images/LiveScreen.png" alt="Live Screen">
                                            <p>Live Site</p>
                                        </a> 
                                        <a href="https://github.com/SMuyesser/fifa-fomrations">
                                            <img src="images/CodeScreen.png" alt="Code Screen">
                                            <p>Code</p>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container m-0 full-screen-gallery-item hidden" id="the-movie-game">
            <div class="row">
                <div class="col-12">
                    <button><img src="images/x.png" alt="close"></button>
                    <h1>The Movie Game</h1>
                    <p class="short-info">Puzzle game for movie fans powered by TMDB API</p>
                    <img class="app-img" src="images/movielarge.jpg" alt="movie game">
                    <div class="row">
                        <div class="col-12">
                            <div class="list-group" id="list-tab-4" role="tablist">
                                <a class="list-group-item list-group-item-action active" id="list-description-list-4" data-toggle="list" href="#list-description-4" role="tab" aria-controls="description-4">Description</a>
                                <a class="list-group-item list-group-item-action" id="list-tech-list-4" data-toggle="list" href="#list-tech-4" role="tab" aria-controls="tech-4">Tech Stack</a>
                                <a class="list-group-item list-group-item-action" id="list-links-list-4" data-toggle="list" href="#list-links-4" role="tab" aria-controls="links-4">Links</a>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="tab-content" id="nav-tabContent-4">
                                <div class="tab-pane show active" id="list-description-4" role="tabpanel" aria-labelledby="list-description-list-4">
                                    <p class="app-description">The Movie Game is a fun puzzle game that tests players’ knowledge of movies and movie casts. The goal is to connect the start movie and the end movie in the least amount of links.</p>
                                </div>
                                <div class="tab-pane" id="list-tech-4" role="tabpanel" aria-labelledby="list-tech-list-4">
                                    <ul class="tech-list">
                                        <li>HTML5</li>
                                        <li>CSS3</li>
                                        <li>JavaScript</li>
                                        <li>axios</li>
                                        <li>React.js</li>
                                        <li>Redux</li>
                                        <li>Node.js</li>
                                        <li>npm</li>
                                        <li>Express</li>
                                        <li>handlebars</li>
                                        <li>MongoDB</li>
                                        <li>mongoose</li>
                                        <li>Passport.js</li>
                                        <li>Netlify</li>
                                        <li>Heroku</li>
                                        <li>Mocha</li>
                                        <li>Chai</li>
                                        <li>Travis CI</li>
                                    </ul>
                                </div>
                                <div class="tab-pane" id="list-links-4" role="tabpanel" aria-labelledby="list-links-list-4">
                                    <span class="live-code-links">
                                        <a href="https://themoviegame.Netlify.com">
                                            <img src="images/LiveScreen.png" alt="Live Screen">
                                            <p>Live Site</p>
                                        </a> 
                                        <a href="https://github.com/SMuyesser/themoviegame">
                                            <img src="images/CodeScreen.png" alt="Code Screen">
                                            <p>Code</p>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <footer class="w-100">
        <p class="mb-1">&copy; 2019 Sinan Muyesser</p>
    </footer>
    <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    <script src="js.js"></script>
</body>
    </div>
  );
}

export default App;
