$(document).ready(function() {
    // change the content of the central block depending where does the user click
    $("#home").click(function() {
        console.log("clicked on home");
        $("#central").html(
            `
            <h1>Python Programming</h1>
            <p>Welcome to the Python Programming course. In this course you will learn the first steps of Python</p>
            <h2>Topic 1</h2>
            <p>In the first topic you will learn a bit about the background of the langauge. Installation of the IDE, and some basic examples</p>
            <h2>Topic2</h2>
            <p>It will include a explanation about the different data types and data structures that you can finde in Python.</p>
            <h2>Topic3</h2>
            <p>Introduction to the flow control of a program. </p>
            `
        );
    })
    $("#topic1").click(function(){
        console.log('Clicked on topic1');
        $("#central").html(
            `<div class="titleBox">
            <img src="img/firstSteps.jpg" width="200" alt="first steps">
      </div>
      <h1 class="TopicName">Python Introduction</h1>
        <p class="introduction">We are going to learn what python is, how to install the required software to run it, like the python interpreter, compiler and the IDE. Also we will learn how the langauge works.</p>
        <h2>Lesson 1</h2>
          <div class="video">
              <video class="video" controls>
              <source src="vid/Video1.mp4" type="video/mp4">
              </video>
          </div>
          <p>In the first topic you will learn a bit about the background of the langauge, some basic examples and how does the language work, and start to set you up a new way of thinking related to problem solving</p>
        <h2>Lesson 2</h2>
        <div class="video">
          <video class="video" controls>
          <source src="vid/Video2.mp4" type="video/mp4">
          </video>
          </div>
          <p>We will follow with a tutorial on how to install to the Pycharm IDE and the software required to run python in your machine like the interpreter and compiler.</p>
        <h2>Lesson 3</h2>
        <div class="video">
          <video class="video" controls>
          <source src="vid/Video3.mp4" type="video/mp4">
          </video>
        </div>
          <p>Introduction to the very first coding examples. This will be your first steps as a programer, so make sure that you understand everything that you are doing so you have a really good base. </p>`
          );
    })
    $("#topic2").click(function(){
        console.log('Clicked on topic2');
        $("#central").html(
            `<div class="titleBox">
            <img src="img/topic2img.png" width="200" alt="first steps">
          </div>
          <h1>Python Data Types & Structures</h1>
            <p>In this topic, first, the different data types and their usage will be explained. Then we will look into some data structures, arrays and tuples.
               Knowing how data types and structures work is essential to develop with python as with any other language. With we will cover almost all data management
             which is more than enough for this course.</p>
            <h2>Lesson 1 - Variables</h2>
            <div class="video">
              <video class="video" controls>
              <source src="vid/Video4.mp4" type="video/mp4">
              </video>
            </div>
              <p>Variables are containers for storing data values. The data types will be explained in this lessons along with some particularities pyhton has comparing to other languages. </p>
            <h2>Lesson 2 - Lists </h2>
            <div class="video">
              <video class="video" controls>
              <source src="vid/Video5.mp4" type="video/mp4">
              </video>
            </div>
              <p>A list is a collection which is ordered and changeable. In this lesson we will learn how to create them and edit them. Moreover we will learn
              their pros and cons and what are they useful for. We will do some example exercise to fully understand them.</p>
            <h2>Lesson 3 - Tuples </h2>
            <div class="video">
              <video class="video" controls>
              <source src="vid/Video6.mp4" type="video/mp4">
              </video>
            </div>
              <p>Tuples are sequences, just like lists. The differences between tuples and lists are, the tuples cannot be changed. We will see in which situations they are more suitable than lists
              and will do some exercise to see them in practice.</p>`

        );
    })
    $("#topic3").click(function(){
        console.log("clicked on topic3");
        $("#central").html(
            `<div class="titleBox">
            <img src="img/topic3img.jpg" width="200" alt="first steps">
      </div>
          <h1>Control Flow</h1>
            <p>In this topic we will learn about the control flow statements. They are essential for programming in general since they,as the name says, control the flow of the program takeing into
            account the currant situation. They will call different instructions or actions depending of the value of the desired variables. We will look into the most important ones whicha are "IF"
          "FOR" loop and "WHILE loop"</p>
            <h2>IF and ELSE IF</h2>
            <div class="video">
              <video class="video" controls>
              <source src="vid/Video7.mp4" type="video/mp4">
              </video>
            </div>
              <p>IF statement will run a specific piece of code if a condition is satisfied. If we add Else If or Else it will run another specific piece if another condition is satisfied (Else IF)
              or run without having to match any spcific condition (ELSE). We will explain this statements and practise with them.</p>
            <h2>WHILE LOOP</h2>
            <div class="video">
              <video class="video" controls>
              <source src="vid/Video8.mp4" type="video/mp4">
              </video>
            </div>
              <p>"WHILE" will create a loop that will run a specific piece of code while a condition is being satisfied, each time the piece of code is run the condition will be check and the process
              will be repeated if the conditions keeps being matched. </p>
            <h2>FOR LOOP</h2>
            <div class="video">
              <video class="video" controls>
              <source src="vid/Video9.mp4" type="video/mp4">
              </video>
            </div>
              <p>FOR is quite similar to while loop, with the difference that it makes a change to a variable (defined by us) each time the loop is done. It is very important to known them and we will
              do some exercises to make sure we fully understand them.</p>
        `
        );
    })
    $("#students").click(function(){
        console.log("clicked on students");
        $("#central").html(
            `
            <div class="listStudent">
    <ul>
      <li><img class="imageStudent" src="img/C.png"  alt="logo">Juan Amor, juanamor@alumnos.com<input type="image" class="messageIcon" src="img/msg.png" alt="Submit" ></li>
      <li><img class="imageStudent" src="img/c++.png"  alt="logo">Pedro Espinosa, pedroespinosa@alumnos.com<input type="image" class="messageIcon" src="img/msg.png" alt="Submit" width="48" height="48"></li>
      <li><img class="imageStudent" src="img/csharp.png"  alt="logo">Marta Argente, martaargente@alumnos.com<input type="image" class="messageIcon" src="img/msg.png" alt="Submit" width="48" height="48"></li>
      <li><img class="imageStudent" src="img/java.png"  alt="logo">Pablo Garcilaso, pablogarcilaso@alumnos.com<input type="image"  class="messageIcon" src="img/msg.png" alt="Submit" width="48" height="48"></li>
      <li><img class="imageStudent" src="img/python.png"  alt="logo">Lucia Rivas, luciaRivas@alumnos.com<input type="image"  class="messageIcon" src="img/msg.png" alt="Submit" width="48" height="48"></li>
      <li><img class="imageStudent" src="img/JS.png"  alt="logo">Alejandro Casanovas, alejandrocasanovas@alumnos.com<input type="image" class="messageIcon" src="img/msg.png" alt="Submit" width="48" height="48"></li>
      <li><img class="imageStudent" src="img/php.png"  alt="logo">Mara Arias, mariarias@alumnos.com<input type="image" class="messageIcon" src="img/msg.png" alt="Submit" width="48" height="48"></li>
      <li><img class="imageStudent" src="img/swift.png"  alt="logo">Jose Luis Lopez, joseluislopez@alumnos.com<input type="image" class="messageIcon" src="img/msg.png" alt="Submit" width="48" height="48"></li>
      <li><img class="imageStudent" src="img/ruby.png"  alt="logo">Marta Fernandez, martafernandez@alumnos.com<input type="image" class="messageIcon" src="img/msg.png" alt="Submit" width="48" height="48"></li>
      <li><img class="imageStudent" src="img/perl.png"  alt="logo">Carlos Mas, carlosmas@alumnos.com<input type="image"  class="messageIcon" src="img/msg.png" alt="Submit" width="48" height="48"></li>
    </ul>
  </div>
            `
        );
    })
    $("#grades").click(function(){
        console.log("clicked on grades");
        $("#central").html(
            `
        <table class="egt">
            <tr>
            <th class="princ">Student</th>
            <th>Labwork 1</th>
            <th>Labwork 2</th>
            <th>Final Exam</th>
            </tr>
            <tr>
            <th class="princ">Juan Amor</th>
            <th>4</th>
            <th>7.5</th>
            <th>5</th>
            </tr> 
            <tr>
            <th class="princ">Pedro Espinosa</th>
            <th>2</th>
            <th>1.5</th>
            <th>NP</th>
            </tr>
            <tr>
            <th class="princ">Marta Argente</th>
            <th>8</th>
            <th>8.5</th>
            <th>9</th>
            </tr>
            <tr>
            <th class="princ">Pablo Garcilaso</th>
            <th>5</th>
            <th>6</th>
            <th>8</th>
            </tr>
            <tr>
            <th class="princ">Lucia Rivas</th>
            <th>4.5</th>
            <th>5</th>
            <th>9</th>
            </tr>
            <tr>
            <th class="princ">Alejandro Casanovas</th>
            <th>3</th>
            <th>4.5</th>
            <th>8</th>
            </tr>
            <tr>
            <th class="princ">Maria Arias</th>
            <th>8.5</th>
            <th>8</th>
            <th>4</th>
            </tr>
            <tr>
            <th class="princ">Jose Luis Lopez</th>
            <th>7</th>
            <th>4.5</th>
            <th>5</th>
            </tr>
            <tr>
            <th class="princ">Marta Fernandez</th>
            <th>4.5</th>
            <th>4.5</th>
            <th>5</th>
            </tr>
            <tr>
            <th class="princ">Carlos Mas</th>
            <th>6</th>
            <th>6</th>
            <th>6</th>
            </tr>

        </table>
            `
        );
    })
    $("#forum").click(function(){

        console.log("clicked on forum");
        $("#central").html(
            `
        <h1>Forum</h1>
        <ul> 
            <li>IDE installation(2)<ul>
                <li>last Message 20/09/2020:<p>Yes you can install visual Studio, but in class we will do evrything with Pycharm </p></li>
            </ul>
            </li>
            <li>Python version(3) <ul>
                <li>last Message 23/09/2020:<p>No we will use python 3 for the whole course </p></li>
            </ul>
            </li>
            <li>Variable question(1) <ul>
                <li>last Message 20/09/2020:<p>What happens if we assign a variable the value 3 and the we change it to a string?</p></li>
            </ul>
            </li>
            <li>For loop(1) <ul>
                <li>last Message 2/10/2020:<p>If I end up with an infinite loop will i get notified? </p></li>
            </ul>
            </li>
            <li>Exercise 3.2 question(6) <ul>
                <li>last Message 5/10/2020:<p>I think that you can find the answer <a href="https://stackoverflow.com/questions/1911281/how-do-i-get-list-of-methods-in-a-python-class">here</a> </p></li>
            </ul></li>
        </ul>
            `

        )
    })
    $("#CourseTitle").click(function() {
        console.log("clicked on course title");
        $("#central").html(
            `
            <h1>Python Programming</h1>
            <p>Welcome to the Python Programming course. In this course you will learn the first steps of Python</p>
            <h2>Topic 1</h2>
            <p>In the first topic you will learn a bit about the background of the langauge. Installation of the IDE, and some basic examples</p>
            <h2>Topic2</h2>
            <p>It will include a explanation about the different data types and data structures that you can finde in Python.</p>
            <h2>Topic3</h2>
            <p>Introduction to the flow control of a program. </p>
            `
        );
    })
   
    
    //create the events of the calendar
  var calEvents = [
    {start: '2020/10/6', end: '2020/10/6', summary: "Exam about Topic 1 and Topic2", mask: true},
    {start: '2020/10/5', end: '2020/10/5', summary: "Due date for Topic 2 Exercises", mask: true},
    {start: '2020/10/20', end: '2020/10/20', summary: "Grades published about first Exam", mask: true}
  ];
  //create the calendar
  $('#cal').calendar({events:calEvents});
    

   
  //show the calendar when the LastNews is clicked
    $("#NextEvents").click(function(){
        console.log("clickend on news");
        console.log($("#cal").is(":visible"));
        //create the calendar
        
        //check if the calendar is visible in order to show it or hide it
        if($("#cal").is(":visible")){
            $("#cal").hide();
        } else{
            $("#cal").show();
        }
    })

    //function to work with the cookies
    function setCookie(cname, cvalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + (exdays*24*60*60*1000));
      var expires = "expires="+ d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
      
    }
    
    function getCookie(cname) {
      var name = cname + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(';');
      for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }
    
    function checkCookie(username) {
      var user=getCookie(username);
      if (user != "") {
        alert("Welcome again " + user);
        console.log("your cookie has been read perfectly");
      } else {
        setCookie("username", username,30);
        console.log("new user added");
      }
    }
    //function when clicked log in
    $("#Login").click(function(){
      console.log("login clicked");
      //get the email entered as user name
      var username = document.getElementById("Login").value;
      checkCookie(username);
    })

    


});