const section = document.querySelector('.grow');

const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      section.classList.add('in-view');
    } else {
      section.classList.remove('in-view');
    }
  },
  { threshold: 0.3 } // Adjust as needed
);

observer.observe(section);
 