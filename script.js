const slides = [
  {
    title: "Gift Food Donation Drives (Bay Area)",
    text: "If you are from the bay area, feel free to contact us if you would like to participate in the food donation drives. Your donations will go to homeless shelters in Oakland, Berkeley, Livermore and/or Emeryville. Each month's donations will differ so be sure to email us if you would like to participate!"
  },
  {
    title: "Ornament Initiative",
    text: "The GIFT Internship program kicked off the Ornament Initiative and reached and went beyond their goal of 300 wreath ornaments and 200 candy cane ornaments in a matter of 2 weeks! The ornaments will be delivered to Children’s Hospitals, Senior Homes, and more before the Holidays!"
  },
  {
    title: "Toy Drive",
    text: "Over the Holidays, we gathered and sent out toys to various organizations, such as Hope in the Hood, which gave toys to those who can't afford them."
  },
  {
    title: "Creative Alliance",
    text: "A volunteer opportunity for middle schoolers in which they work with high schoolers to give back to their community! Sign-up link: tinyurl.com/4b9ktsua"
  },
  {
    title: "Beanie Drive",
    text: "Currently, the beanie group is local to the bay area. We work together as a community to donate handmade beanies to groups such as Blue Star Moms, Stanford NICU, military troops, and homeless shelters. Our effort has provided many with warmth and comfort during the past several winters. If you are not in the bay area but would like to participate, feel free to contact us!"
  },
  {
    title: "Masks",
    text: "Despite the unexpected and harsh halt that the world had to come to due to COVID-19, our community got together to provide for the local hospitals and families. Starting from scratch, GIFT has worked with the community to donate more than 5000 masks to alleviate the inconvenience of a lack of resources in our local hospitals."
  },
  {
    title: "Virtual Hugs",
    text: "The community worked together to make around 400 heartwarming, encouraging, and supportive cards for senior homes that were affected by the strict isolation during quarantine."
  }
];

let currentSlide = 0;

function showSlide(index) {
  const changingText = document.getElementById('changingText');

  // Reset and restart the animation
  changingText.style.animation = 'none';
  void changingText.offsetWidth; // Reflow trick to restart animation
  changingText.style.animation = 'slideIn 1s ease forwards';

  changingText.innerHTML = `
    <h3>${slides[index].title}</h3>
    <p>${slides[index].text}</p>
  `;

  const dots = document.querySelectorAll('.dot');
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Initialize
showSlide(0);
setInterval(nextSlide, 10000); // Change every 10 seconds
