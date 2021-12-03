<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link href="https://fonts.googleapis.com/css?family=Courgette|Electrolize|Indie+Flower|Quantico|VT323" rel="stylesheet">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="profile.css">
  <script src="https://code.jquery.com/jquery-3.3.1.min.js"integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="crossorigin="anonymous"></script>
  <script type="text/javascript" src="profile.js"></script>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js"></script>
  <title>My Profile</title>
</head>
<body class="bg-dark">
  <section id="startPage">
    <h1 id="Wellcom">Hello, i'm Murhaf</h1>
    <div id="personal_pic"> </div>
    <p id="startPergh">Web Developer</p>
    <p id="startDescription">I am an ambitious person and a problem solver<br> with a passion for IT Projects and programing , and
      <br>i like to join a team of like-minded developers.
     </p>
    <button id="startButton">Show More Info</button>
    <div id="contact">
      <a href="https://github.com/Murhaf2211" target="_blank" title="My GitHub!" class="fa fa-github-square fa-spin text-body fa-2x" aria-hidden="true"></a>
      <a href="https://www.xing.com/profile/Murhaf_Orfali/" target="_blank" title="My XING!" class="fa fa-xing-square text-success fa-spin fa-2x" aria-hidden="true"></a>
      <a href="https://www.linkedin.com/" target="_blank" title="My Linkedin!" class="fa fa-linkedin-square fa-spin fa-2x" aria-hidden="true"></a>
    </div>
  </section>
  <main id="mainPage">
    <div class="contain">
      <section id="section_carousel">
        <h3> My Work experience:</h3>
        <div id="demo" class="carousel slide " data-ride="carousel">
         <!-- Indicators -->
          <ul class="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" class="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
            <li data-target="#demo" data-slide-to="3"></li>
          </ul>
        <!-- The slideshow -->
        <div class="carousel-inner">

         <div class="carousel-item active">
            <p class="workExper_paragraph">3 years Learning experience <br>in Web Development <br> in Hamburg – Germany <br>
              <br>I did a Fullstack Web Development one year Course .<br>
              I did a lot of small Projects and web pages .<br>I did many online Couses in programing and web Development.<br>
              Until now i still learning every day,and i do a Course in the field of Software Development.<br>
              including a year of Theoretical and a year of intership in a specialized company. </p>
         </div>
         <div class="carousel-item">
          <p class="workExper_paragraph">10 years work experience <br>in IT Companies<br> in Damascus – Syria <br>
            <br>
            Reporting to sales Manager and creative ways to make IT technology add value to the customer
            Business, I was responsible for:<br>
            Build a good relationship with customers' organizations.<br>
            Provide IT solutions by analyzing customer's need.<br>
            Work with professional IT team to achieve goals.<br>
            Monitoring achievements (volume & profits).</p>
        </div>
        <div class="carousel-item">
         <p class="workExper_paragraph">2 years work experience <br> in UAE – DUBAI <br><br>I was Responsible for:<br>
            Lead a team of sales officer to achieve Showroom target.<br>
            Monitoring Stock availability and send reports to the management.<br>
            Manage the orders from warehouse to customers.<br>
            Monitoring achievements (volume & profits). </p>
         </div>
         <div class="carousel-item">
          <p class="workExper_paragraph">5 years work experience <br>As IT Technician <br>Damascus – Syria<br><br>I was responsible for:<br>
            configuration and ongoing usability of system hardware and software.<br>
            Offer daily operations and systems support to personnel.<br>
            Verify functionality of hardware and software components.<br>
            Troubleshoot hardware and software issues in person, remotely and via phone.<br>
            Assist employees with computer problems and answer their questions.<br>
            Conduct daily network backup operations.</p>
         </div>
        </div>
        <a class="carousel-control-prev" href="#demo" data-slide="prev">
         <i class='fa fa-chevron-left' aria-hidden="true"></i>
        </a>
        <a class="carousel-control-next" href="#demo" data-slide="next">
         <i class='fa fa-chevron-right' aria-hidden="true"></i>
        </a>
       </div>
    </section>
    </div>

    <section id="skills" >
      <h3 id="certHeader">My Certificates</h3>
      <div>
        <span id="php"  title="Click to show!"><img src="pictures/phpCert.jpg"></span>
        <span id="mysql" title="Click to show!"><img src="pictures/msqlCert.jpg" ></span>
        <span id="jq" title="Click to show!"><img  src="pictures/jqCert.jpg"></span>
        <span id="js"  title="Click to show!"><img src="pictures/jsCert.jpg"></span>
        <span id="css" title="Click to show!"><img src="pictures/cssCert.jpg"></span>
        <span id="html" title="Click to show!"><img src="pictures/htmlCert.jpg"></span>
        <span id="dci" title="Click to show!"><img src="pictures/dciCert.jpg"></span>
       </div>
      <div>
        <span id="ipma" title="Click to show!"><img src="pictures/ipmaCert.jpg" ></span><br><br>
        <span id="a" title="Click to show!"><img src="pictures/aCert.jpg" ></span><br><br>
        <span id="network" title="Click to show!"><img src="pictures/networkCert.jpg" ></span>
        <span id="mcdst" title="Click to show!"><img src="pictures/mcdstCert.jpg" ></span>
        <span id="win" title="Click to show!"><img src="pictures/winCert.jpg" ></span><br><br>
        <span id="exel" title="Click to show!"><img src="pictures/exelCert.jpg" ></span><br><br> 
        <span id="access" title="Click to show!"><img src="pictures/accessCert.jpg" ></span> 
      </div>  
    </section>
   

    <div class="container contact bg-dark">
      <div class="row">
        <div class="col-md-3 alin-center ">
          <div class="contact-info">
            <img src="https://image.ibb.co/kUASdV/contact-image.png" alt="image"/>
            <h2>Contact Me</h2>
            <h4>I would love to hear from you !</h4>
          </div>
        </div>
        <div class="col-md-9 bg-dark text-light">
          <?php include("form.php") ?>
          <div id="error"><?php echo $error.$successMessage; ?></div>
          <form class="contact-form" method="POST" action="">
            <div class="form-group">
              <label class="control-label col-sm-2" for="name">First Name:</label>
              <div class="col-sm-10">          
              <input type="text" class="form-control" id="name" placeholder="Enter your Name" name="name">
              </div>
            </div> 
            <div class="form-group">
              <label class="control-label col-sm-2" for="email">Email:</label>
              <div class="col-sm-10">
              <input type="email" class="form-control" id="email" placeholder="Enter your email" name="email">
              </div>
            </div>
            <div class="form-group">
              <label class="control-label col-sm-2" for="subject">Subject</label>
              <div class="col-sm-10">          
              <input type="text" class="form-control" id="subject" placeholder="Enter Subject" name="subject">
              </div>
            </div>
            <div class="form-group">
              <label class="control-label col-sm-2" for="comment">Comment:</label>
              <div class="col-sm-10">
              <textarea class="form-control" rows="5" id="message" name="message"></textarea>
              </div>
            </div>
            <div class="form-group">        
              <div class="col-sm-offset-2 col-sm-10">
              <button type="submit" name="submit" value="Submit" class="btn btn-default">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    
    <footer>
      <hr class="my-4" id="lineInFooter">
      <h5>Made by Murhaf Orfali © 2019 and updated © 2021 </h5>
    </footer>
  
  
  </main>
  
</body>
</html>
