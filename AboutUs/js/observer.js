const mainav = document.querySelector('.main-nav');
const head = document.querySelector('#header');

const about = document.querySelector('#about');
const navitem = document.querySelectorAll(".nav-item");

const pricing = document.querySelector('#pricing');
const feedback=document.querySelector('#feedback')

const jumboptions = {
    root: null,
    threshold : 0,
    rootMargin : "-75px"
};



const jumbObs = new IntersectionObserver(function
    (entries, jumbObs){
    entries.forEach(entry => {
		
        console.log(entry)
		if(!entry.isIntersecting){
			mainav.classList.add("bg-primary")
			mainav.classList.add("navbar-dark")
			document.getElementById("navbar-logo").src="images/Logo1.2-up.png";
			//jumbotron.classList.remove("fade-in")
			mainav.classList.remove("bg-white")
			mainav.classList.remove("navbar-light")
		}else{
			
			mainav.classList.remove("bg-primary")
			mainav.classList.remove("navbar-dark")
			document.getElementById("navbar-logo").src = "images/logoekopz-01.png";
			mainav.classList.add("bg-white")
			mainav.classList.add("navbar-light")
			//jumbotron.classList.add("fade-in")
		}
    });
},jumboptions);


jumbObs.observe(head)


const appearOptions = {
	root: null,
    threshold : 0.25
};
