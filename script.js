// close-menu =================================================
function openNav() {
    document.getElementById("mySidepanel").style.width = "320px";
}
function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}

// scroll top button ===========================================
 // Get the button
 let mybutton = document.getElementById("myBtn");
        
 // When the user scrolls down 20px from the top of the document, show the button
 window.onscroll = function() {scrollFunction()};
 
 function scrollFunction() {
   if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
     mybutton.style.display = "block";
   } else {
     mybutton.style.display = "none";
   }
 }
 // When the user clicks on the button, scroll to the top of the document
 function topFunction() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
 }


//  snow script ================================================

let particules = []

    for(i = 0; i < 300; i++){
        let particule = document.createElement('span')
        particule.className = 'snow snow-anim'
        particule.style.setProperty('left', Math.random() * 100 +'%');
        particule.style.setProperty('opacity', Math.random() * 0.8 + 0.2);
        particule.style.setProperty('--time-swing', Math.random() * 2 + 2 +'s');
        particule.style.setProperty('--delay', Math.random() * 14 +'s');
        particule.style.setProperty('--size', Math.random() * 3 + 4 + 'px');
        document.body.append(particule)
        particules.push(particule)
    }

    function onWindowResize() {
        n_particules = window.innerWidth * window.innerHeight / 6400
        console.log(n_particules)
        particules.forEach(function (p, index) {
            p.style.setProperty('--time-drop', (Math.random() * 5 + 9) * (window.innerHeight / 1000) + 's');
            if(index > n_particules){
                p.style.setProperty('visibility','hidden')
            }
            else{
                p.style.setProperty('visibility','visible')
            }
        });
    }

    window.onresize = onWindowResize;
    onWindowResize()