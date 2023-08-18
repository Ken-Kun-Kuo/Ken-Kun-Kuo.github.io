<!DOCTYPE html>
<html lang="en">
    <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" crossorigin="anonymous">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Tilt+Prism&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="../css/mystyles.css">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contact Me Form</title>
    </head>
    <body>
       <header>
    <h1 id="title">Welcome to Ken's Gaming House!</h1>
    <div class="image-container">
      <img itemid="selfie" src="../Me.jpg" width=200 length=200 alt="PFP">
      </p>
    </div>
    <div class="expected-titles">
      <p>Software Developer | Game Developer | Streamer | Content Creater</p>
    </div>
  </header>

  <nav>
    <ul>
      <li><a href="#Introduction">Introduction</a></li>
      <li><a href="#Information">Basic Information</a></li>
      <li><a href="#Education">Edutcation</a></li>
      <li><a href="#Contact">Contact Me</a></li>
    </ul>
  </nav>
  <main>
    <section id="Introduction">
        <div class="intro-left">
            <h1>A little bit About Myself</h1>
            <p>I'm a passionate gamer that is trying to get into the field of game design. Having experienced varieties of gaming culture, 
              I want to bring my vision of gaming to reality. Without any pre-conception about the game design space, I am certain that I could
              bring a breathe of fresh air to the community.
            </p>
        </div>
        <div class="intro-right">
          <h1 id="Information">Basic Information of Myself</h1>
          <div class="info-grid">
            <ul>
            <li><b>AGE:            </b>29</p>
            <li><b>EMAIL:          </b>gbisula2@gmail.com</p>
            <li><b>LANGUAGE:       </b>English, Mandarin, Japanese, Taiwanese, Korean</p>
            <li><b>CLASS SECTION:  </b>NFF</p>
            <li><b>STUDENT ID:     </b>150257228</p>
            <li><b>INSTRUCTOR:     </b>Mark Meritt</p>
            </ul>
        </div>

        </div>

    </section>
    <a href="../Resume.pdf" download> <!--change to resume-->
    <button class="button"><i class="fa fa-download"></i>Download Resume</button>
    </a>
    
</button>
    <section id="Education">
      <h1>My Edutcation</h1>
      <div class="Education-board">
        <a href="https://www.utoronto.ca/">
          <img src="https://www.utoronto.ca/themes/custom/bootstrap_uoft/logo.svg" width="200" length="200" class="school-icon" alt="UofT" target="blank">
          <div class="school-text">
            <h5>University of Toronto</h5>
            <p>2012-2016, 2017-2020</p>
          </div>
        </a>
      </div>
      <div class="Education-board">
        <a href="https://www.senecacollege.ca/home.html">
          <img src="https://www.senecacollege.ca/content/dam/projects/seneca/seneca-logo.svg" width="200" length="200" class="school-icon" alt="UofT" target="blank">
          <div class="school-text">
            <h5>Seneca College of Applied Arts and Technology</h5>
            <p>Present</p>
          </div>
        </a>
      </div>


    </section>



    <h2 id="Contact">Contact Me</h2>
    <form id="contactForm" action="https://httpbin.org/post" method="post">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Your Name" required>
        <br>
        <label for="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Your Email" required>
        <br>
        <label for="address">Address</label>
        <input type="text" id="address" name="address" placeholder="Your Address" required>
        <br>
        <label for="city">City</label>
        <input type="text" id="city" name="city" list="cities" placeholder="City" required>
        <datalist id="cities">
            <option value="Toronto">
            <option value="Vancouver">
            <option value="Victoria">
            <option value="Halifax">
            <option value="Montreal">
            <option value="Ottawa">
            <option value="Calgery">
            <option value="Edmonton">
            <option value="Winnipeg">
            <option value="Mississauga">
        </datalist>
        <br>
        <label for="postalCode">Postal Code</label>
        <input type="text" id="postalCode" name="postalCode" pattern="[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d" placeholder="Format: A1A 1A1" required>
        <br>
        <label>Topic</label>
        <br>
        <label class="radio-label"><input type="radio" name="subject" value="Question" required>Question</label>
        <label class="radio-label"><input type="radio" name="subject" value="Comment" required>Comment</label>
        <label class="radio-label"><input type="radio" name="subject" value="Hiring" required>Hiring</label>
        <br>
        <label for="message">Message</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Submit</button>
        <script src="../js/script.js"></script>

    </form>

  </main>
    </body>
    <footer>
        <p> @2023 by Ken Kuo. All rights reserved</p>
    </footer>
</html>
