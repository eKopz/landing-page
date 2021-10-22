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
			navitem.item(0).classList.remove("active")
			//jumbotron.classList.remove("fade-in")
			mainav.classList.remove("bg-white")
			mainav.classList.remove("navbar-light")
		}else{
			
			mainav.classList.remove("bg-primary")
			mainav.classList.remove("navbar-dark")
			document.getElementById("navbar-logo").src = "images/logoekopz-01.png";
			navitem.item(0).classList.add("active")
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

const aboutObserver = new IntersectionObserver(function
    (entries, aboutObserver){
    entries.forEach(entry => {
		
        console.log(entry)
		if(!entry.isIntersecting){
			navitem.item(1).classList.remove("active")
		}else{
			navitem.item(1).classList.add("active")
			/*entry.target.classList.remove('fade-out');
			entry.target.classList.add('fade-in');
			entry.target.style.opacity ="1";*/
		}
    });
},appearOptions);

aboutObserver.observe(about);



const pricingObserver = new IntersectionObserver(function
    (entries, pricingObserver){
    entries.forEach(entry => {
		
        console.log(entry)
		if(!entry.isIntersecting){
			navitem.item(2).classList.remove("active")
		}else{
			navitem.item(2).classList.add("active")
		}
    });
},appearOptions);

pricingObserver.observe(pricing);

const feedbackObserver = new IntersectionObserver(function
    (entries, feedbackObserver){
    entries.forEach(entry => {
		
        console.log(entry)
		if(!entry.isIntersecting){
			navitem.item(3).classList.remove("active")
		}else{
			navitem.item(3).classList.add("active")
		}
    });
},appearOptions);

feedbackObserver.observe(feedback)

/*
const options = {
    root: null,
    threshold : 0.35,
    rootMargin : "-150px"
};

/* 
const observer = new IntersectionObserver(function
    (entries, observer){
    entries.forEach(entry => {
        console.log(entry)
    });
},options);

observer.observe(sectionOne)*/