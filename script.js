// ১. লাইট ও ডার্ক থিম সুইচার (Theme Switcher)
const themeBtn = document.getElementById("themeToggle");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  
  if (document.body.classList.contains("light-mode")) {
    themeBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`;
  } else {
    themeBtn.innerHTML = `<i class="fa-solid fa-moon"></i>`;
  }
});

// ২. কন্টাক্ট ফর্ম মেসেজ পপ-আপ (Form Action)
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you! Your message has been sent successfully.");
  contactForm.reset();
});