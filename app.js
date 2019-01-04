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
