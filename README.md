<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Coding Era</title>
    <link rel="stylesheet" href="style.css">
    <link href='https://cdn.jsdelivr.net/npm/boxicons@1.8.1/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css">
    <link rel="shortcut icon" href="logo.ico">
    <link href="https://fonts.googleapis.com/css?family=Comfortaa|Iceberg|Patua+One|Righteous|Monoton|Montserrat|Maven+Pro" rel="stylesheet">
</head>
<body>
    <main class="container">
        <!--this is the first part of the whole website say it is the landing page of this webpage!             (((((((( FIRST PART ))))))))-->
        <header class="part1">
            <!--Navigation Bar Starts Here-->
            <nav>
                <label for="cb" class="hamburger" onclick="ham()">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
                <input type="checkbox" id="cb">
                <ol class="menu">
                    <li><p><i class='bx bx-home'></i>&nbsp; Home</p></li>
                    <li><p><i class='bx bx-images'></i>&nbsp; Pictures</p></li>
                    <li><p><i class='bx bx-paper-plane'></i>&nbsp; Explore</p></li>
                    <li><p><i class='bx bx-message-detail'></i>&nbsp; Messages</p></li>
                </ol>
                <div id="logo">
                    <img src="logo.png">
                    <p>Coding <b>ERA</b></p>
                </div>
                <input type="search" name="search" id="search" onfocus="inputin()" onfocusout="inputOut(this)" class="search" spellcheck="false" autocomplete="off">
                <label id="searchlabel" for="search"><i class="bx bx-search sb"></i><p>&nbsp; Search</p></label>
                <div class="signin" onclick="srchin()">
                <i class='bx bx-search srch' id="srch"></i>
                </div>

            </nav>
            <!--Navigation bar ends here-->
            <div class="layout">
                <div class="text">
                        <h2>Learn to code, be cool and on :-)</h2>
                        <p>Don't just do code but make it feel you and you feel it and make it creative, <br> and be cool be awesome...</p>
                        <button onclick="logbtn()">Log In</button>
                </div>
                <img id="pic" src="pic.svg">
            </div>
            <!--this section is for the login screen layout (START)-->
            <dialog id="dialog">
                <form method="dialog">
                    <input id="email" type="text" spellcheck="false" placeholder="Email" autocomplete="off">
                    <input id="password" type="password" placeholder="Password">
                    <span id="cut">&#10006;</span>
                    <button id="login" type="submit">Log In</button>
                </form>
            </dialog>
            <!--this section is for the login screen layout (END)-->
        </header>
        <!--the first part(landing page) of layout "ENDS" here-->

        <!--the section which contains the small area where several avtar's are displayed ( START )   ((((( AVTAR DISPLAY BOX )))))   -->
        <section class="svgback">
            <span id="avtarOne">
                <img id="avtar1" src="avtar 2.jpg">
            </span>
            <span id="avtarTwo">
                <img id="avtar2" src="avtar 1.jpg">
            </span>
            <span id="avtarThree">
                <img id="avtar3" src="avtar 3.jpg">
            </span>
            <div id="line"></div>
        </section>
        <!--the section which contains the small area where several avtar's are displayed ( END )-->

        <!--second part of our whole layout containing the video's showcase                          (((((((( SECOND PART )))))))) -->
        <section class="part2">
          <h1 id="name" aria-multiline="true">CODING ERA</h1>
          <button id="add">+</button>
          <!--this section contains the the data's or grid that we want to display when user's clicks on "CALER EDWARDS" icon-->
          <div class="contents" id="caler">

          </div>
          <!--this section contains the data's and grid that we want to display when user's clicks on "CODING ERA" icon-->
          <div class="contents empty" id="codingera">
            <div class="vidbox" id="x">
                <div class="pix">
                    <i class="fas fa-play"></i>
                    <span class="overlay-text">
                        <p id="author">Caler Edwards</p>
                        <h1 id="video-title">Animate.css</h1>
                    </span>
                </div>
            </div>
              <div class="noresult"><!--no result is a class which shows no data icon on screen and say no video's :-(-->
                <h2>No videos &nbsp; :-(</h2>
              </div>
          </div>
          <!--this section contains the data's and grid that we want to display when user's clicks on "FREECODECAMP.ORG" icon-->
          <div class="contents" id="freecodecamp">

          </div>
        </section>
        <!--second part of layout "ENDS" here-->
    </main>
    <script src="app.js">
        let searchLabel = document.getElementById('searchlabel');
let search = document.getElementById('search');
const dialog = document.getElementById('dialog');
let cut = document.getElementById('cut');
let logo = document.getElementById('logo');
let srch = document.getElementById('srch');
let li = document.querySelectorAll('li');
let avtar1 = document.getElementById('avtar1');
let avtar2 = document.getElementById('avtar2');
let avtar3 = document.getElementById('avtar3');
let line = document.getElementById('line');
let name = document.getElementById('name');
let caler = document.getElementById('caler');
let codingera = document.getElementById('codingera');
let camp = document.getElementById('freecodecamp');
let matarialColors = ["#564f96", "#fec615", "#f44336", "#2196F3", "#4CAF50", "#FF5722", "#E91E63", "#795548", "#607D8B", "#41414f", "#32323c", "#00B8D4", "#4A148C"];
searchLabel.style.transform = "translateX(20px) scaleX(0)";

let ck = 0;
let tk = 0;
let anim = 0;

//simple methods for making code short-------------

//this method hide/show the menu lists------ ( ie = home, pictures etc )
const hideorshow = (a) => {
    li[0].style.transform = `scale(${a})`;
    li[1].style.transform = `scale(${a})`;
    li[2].style.transform = `scale(${a})`;
    li[3].style.transform = `scale(${a})`;
};
const getRandomColor = () => {
    let lengthr = matarialColors.length;
    let randomizer = Math.floor( Math.random() * lengthr );
    let randomcolor = matarialColors[randomizer];
    return randomcolor;
};

//funtions for the programs--------------

//this inputOut() function defines a method of fading out the search label in search box on focusing out-------( SEARCH LABEL FADE OUT )
const inputOut = (k) => {
    if ( window.innerWidth < 670 ) {
        if ( k.value !== '' ) {
            searchLabel.style.transform = "translateX(20px)";
            searchLabel.style.opacity = "0";
        }
        else {
            searchLabel.style.transform = "translateX(0)";
            searchLabel.style.opacity = "1";
        }
    }
    else {}
};
//this logbtn() defines a method to display the login dialog box after i click the login button-----------( LOGIN BUTTON )
const logbtn = () => {
    dialog.showModal();
};
cut.onclick = function() {
    dialog.close();
};
const inputin = () => {
    if ( window.innerWidth < 500 ) {
        searchLabel.style.transform = "translateX(20px)";
        searchLabel.style.opacity = "0";
        searchLabel.style.transition = "transform 0.16s ease-in-out, opacity 0.2s ease-in-out";
    }
    else {

    }
};
const ham = () => {
    if ( window.innerWidth > 500 && window.innerWidth < 750 ) {
        if ( tk === 0 ) {
            hideorshow(1);
            searchLabel.style.transform = "translateX(20px) scaleX(0)";
            search.style.transform = "scaleX(0)";
            srch.style.color = "#fff";
            searchLabel.style.transition = "transform 0.2s ease-in-out, opacity 0.25s ease-in-out";
            logo.style.transform = "scale(0)";
            logo.style.transitionDelay = "0s";
            ck = 0;
            tk++;
        }
        else {
            hideorshow(0);
            logo.style.transitionDelay = "0s";
            logo.style.transform = "scale(1.1)";
            tk = 0;
        }
    }
    else {}
};
const srchin = () => {
    if ( window.innerWidth < 500 ) {
        if ( searchLabel.style.transform == "translateX(20px) scaleX(0)" ) {
            searchLabel.style.transform = "translateX(-1px) scaleX(1)";
            search.style.transform = "scaleX(1)";
            srch.style.color = "#fec615";
            logo.style.transition = "all 0.2s ease-in-out";
            logo.style.transform = "scale(0)";
            searchLabel.style.transition = "transform 0.2s ease-in-out 0.2s, opacity 0.25s ease-in-out";
        }
        else {
            searchLabel.style.transform = "translateX(20px) scaleX(0)";
            search.style.transform = "scaleX(0)";
            srch.style.color = "#fff";
            logo.style.transition = "all 0.2s ease-in-out 0.22s";
            logo.style.transform = "scale(1)";
            searchLabel.style.transition = "transform 0.2s ease-in-out, opacity 0.25s ease-in-out";
        }
    }
    else if ( window.innerWidth > 500 && window.innerWidth < 750 ) {
        if ( ck === 0 ) {
            hideorshow(0);
            logo.style.transform = "scale(0)";
            searchLabel.style.transform = "translateX(-1px) scaleX(1)";
            search.style.transform = "scaleX(1)";
            srch.style.color = "#fec615";
            searchLabel.style.transition = "transform 0.2s ease-in-out 0.2s, opacity 0.25s ease-in-out";
            logo.style.transitionDelay = "0s";
            ck++;
            tk = 0;
        }
        else {
            logo.style.transform = "scale(1.1)";
            searchLabel.style.transform = "translateX(20px) scaleX(0)";
            search.style.transform = "scaleX(0)";
            srch.style.color = "#fff";
            searchLabel.style.transition = "transform 0.2s ease-in-out, opacity 0.25s ease-in-out";
            logo.style.transitionDelay = "0.3s";
            ck = 0;
        }
    }
    else if ( window.innerWidth > 500 ) {
        if ( ck === 0 ) {
            hideorshow(0);
            searchLabel.style.transform = "translateX(-1px) scaleX(1)";
            search.style.transform = "scaleX(1)";
            srch.style.color = "#fec615";
            searchLabel.style.transition = "transform 0.2s ease-in-out 0.2s, opacity 0.25s ease-in-out";
            ck++;
        }
        else {
            hideorshow(1);
            searchLabel.style.transform = "translateX(20px) scaleX(0)";
            search.style.transform = "scaleX(0)";
            srch.style.color = "#fff";
            searchLabel.style.transition = "transform 0.2s ease-in-out, opacity 0.25s ease-in-out";
            ck = 0;
        }
    }
    else {}
    
}

avtar1.onclick = () => {
    name.innerHTML = "Caler Edwards";
    caler.style.display = "grid";
    caler.style.animation = "opaque 0.5s cubic-bezier(0.18, 0.89, 0.32, 1.28) both";
    codingera.style.display = "none";
    camp.style.display = "none";
    avtar1.style.borderBottomRightRadius = "20px";
    avtar2.style.borderRadius = "50%";
    avtar3.style.borderRadius = "50%";
    if ( anim === 0 ) {
        line.style.animation = "movelinectl 0.4s cubic-bezier(0.44, 0.46, 0.57, 0.59)";
        line.style.animationFillMode = "both";
    }
    else if ( anim === 2 ) {
        line.style.animation = "movelinertl 0.4s cubic-bezier(0.44, 0.46, 0.57, 0.59)";
        line.style.animationFillMode = "both";
    }
    else {}
    anim = 1;
}
avtar2.onclick = () => {
    name.innerHTML = "CODING ERA";
    caler.style.display = "none";
    codingera.style.display = "grid";
    camp.style.display = "none";
    avtar2.style.borderBottomRightRadius = "20px";
    avtar3.style.borderRadius = "50%";
    avtar1.style.borderRadius = "50%";
    if ( anim === 1 ) {
        line.style.animation = "movelineltc 0.4s cubic-bezier(0.44, 0.46, 0.57, 0.59)";
        line.style.animationFillMode = "both";
    }
    else if ( anim === 2 ) {
        line.style.animation = "movelinertc 0.4s cubic-bezier(0.44, 0.46, 0.57, 0.59)";
        line.style.animationFillMode = "both";
    }
    else {}
    anim = 0;
}
avtar3.onclick = () => {
    name.innerHTML = "FREECODECAMP.org";
    caler.style.display = "none";
    codingera.style.display = "none";
    camp.style.display = "grid";
    camp.style.animation = "opaque 0.5s cubic-bezier(0.18, 0.89, 0.32, 1.28) both";
    avtar3.style.borderBottomRightRadius = "20px";
    avtar2.style.borderRadius = "50%";
    avtar1.style.borderRadius = "50%";
    line.style.animation = "movelinectr 0.4s cubic-bezier(0.44, 0.46, 0.57, 0.59)";
    line.style.animationFillMode = "both";
    if ( anim === 1 ) {
        line.style.animation = "movelineltr 0.4s cubic-bezier(0.44, 0.46, 0.57, 0.59)";
        line.style.animationFillMode = "both";
    }
    else if ( anim === 0 ) {
        line.style.animation = "movelinectr 0.4s cubic-bezier(0.44, 0.46, 0.57, 0.59)";
        line.style.animationFillMode = "both";
    }
    else {}
    anim = 2;
}

//this section contains some ways and loops to create objects in html---------

for ( let i = 1; i <= 9; i++ ) {
    var f = getRandomColor();
    caler.innerHTML += `<span style="background-color: ${f};" class="vidbox"></span>`;
}
for ( let i = 1; i <= 15; i++ ) {
    var f = getRandomColor();
    camp.innerHTML += `<span style="background-color: ${f};" class="vidbox"></span>`;
    
}
    </script>
</body>
</html>
