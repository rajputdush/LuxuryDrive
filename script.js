// document.addEventListener("DOMContentLoaded", function () {
//   fetch('header.html')
//       .then(response => response.text())
//       .then(data => {
//           document.getElementById('header').innerHTML = data;
  
//           attachEventListeners(); // Attach event listeners after header is loaded
//           setTimeout(() => {
//               document.querySelector('.heading').style.position = 'sticky';
//               document.querySelector('.heading').style.top = '0';
//               document.querySelector('.heading').style.zIndex = '1000';
//           }, 100);
        
//       })
//       .catch(error => console.error("Error loading header:", error));
// });
document.addEventListener("DOMContentLoaded", function () {
  fetch('header.html')
      .then(response => response.text())
      .then(data => {
          document.getElementById('header').innerHTML = data;
          attachEventListeners();

          // Wait for header to be inserted before applying sticky
        
      })
      .catch(error => console.error("Error loading header:", error));
});


function attachEventListeners() {
const navbar = document.querySelector('.navbar');
const hamMenu = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');
const body = document.body;
const searchicon = document.getElementById("searchToggle");
const searchContainer = document.querySelector(".searchContainer");

searchicon.addEventListener("click", () => {
  searchContainer.classList.toggle("active");

  // Optional: focus the input when opened
  if (searchContainer.classList.contains("active")) {
    searchContainer.querySelector(".search-input").focus();
  }
});
if(!hamMenu){
  console.error("hamMenu element not found!");
  return; // Stop execution if hamMenu is missing

}

hamMenu.addEventListener('click',()=>{
    navbar.classList.toggle('active');
    hamMenu.classList.toggle('active');
    sidebar.classList.toggle('active'); 
    
   
    // Manage Scrolling
    if (sidebar.classList.contains("active")) {
        body.classList.add("no-scroll"); // Disable scrolling
    } else {
        body.classList.remove("no-scroll"); // Enable scrolling
    }
    
})
window.addEventListener("click", (event) => {
  if (
    !searchContainer.contains(event.target) &&
    !searchicon.contains(event.target)
  ) {
    searchContainer.classList.remove("active");
  }
});
    

window.addEventListener("click", (event) => {
  if (!sidebar.contains(event.target) && !hamMenu.contains(event.target)) {
      sidebar.classList.remove("active");
      hamMenu.classList.remove("active");
      navbar.classList.remove("active");
      body.classList.remove("no-scroll"); // Enable scrolling when closed
  }
});

const login = document.querySelectorAll(".login");
const modal = document.querySelector(".loginmodal");
const closeBtn = document.querySelector(".close");

// Open modal on login button click
// login.addEventListener("click", () => {
//   modal.style.display = "block";
// });

// Loop through all login buttons
login.forEach((button) => {
    button.addEventListener("click", () => {
      modal.style.display = "block";
    });
  });

// Close modal on close button click
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when clicking outside of it
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
}

// document.addEventListener("DOMContentLoaded", function () {
//   fetch('header.html')
//       .then(response => response.text())
//       .then(data => document.getElementById('header').innerHTML = data)
//       .catch(error => console.error("Error loading header:", error));
//     });


// const aboutSection = document.querySelector('.about-section');


// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       aboutSection.classList.add('visible');
//       // observer.unobserve(entry.target); // Optional: stop observing after first reveal
//     }
//   });
// });

// observer.observe(aboutSection);

// const fadeIns = document.querySelectorAll('.fade-in');
// const observers = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('visible');
//       observers.unobserve(entry.target);
//     }
//   });
// });

// fadeIns.forEach(el => observer.observe(el));
// Select all elements that need the fade-in effect

const fadeIns = document.querySelectorAll('.fade-in');

// Create an IntersectionObserver
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Stop observing once it becomes visible
    }
  });
});

// Observe all fade-in elements
fadeIns.forEach(el => observer.observe(el));


