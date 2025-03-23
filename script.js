var displayWorkIndex = 0;

function toggleDetails(element)
{
    const details = element.nextElementSibling;
    var arrow = element.querySelector(".drop-downarrow");
    //var arrow = document.querySelector(".drop-downarrow> .).

    if(details.style.display === "none" || details.style.display === "")
    {
        console.log("Button clicked 1!"); 
        details.style.display = "flex";
        arrow.style.transform = 'rotate(90deg)';
        displayWorkIndex = 0;
    } 
    else if(details.style.display === "flex")
    {
        console.log("Button clicked 0!"); 
        details.style.display = "none";
        arrow.style.transform = 'rotate(0deg)';
        displayWorkIndex = 1;
    }
}


document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.querySelector(".columns");
    const paginationDots = document.querySelector(".pagination-dots");
    const items = document.querySelectorAll(".column");
    
    // Create pagination dots based on item count
    items.forEach((_, index) => {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (index === 0) dot.classList.add("active"); // First dot active
        paginationDots.appendChild(dot);
    });

    const dots = document.querySelectorAll(".dot");

    // Update active dot on scroll
    function updateDots() {
        const scrollLeft = scrollContainer.scrollLeft;
        const itemWidth = items[0].offsetWidth + 10; // Adjust for gaps
        const currentIndex = Math.round(scrollLeft / itemWidth);

        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === currentIndex);
        });
    }

    scrollContainer.addEventListener("scroll", updateDots);
});


document.querySelectorAll(".project-btn-more").forEach(element => {
    element.addEventListener("click", () => {
      window.location.href = "../pages/prototype-project.html"; // Change to your desired link
    });
  });

document.querySelectorAll(".project-btn").forEach(element => {
    element.addEventListener("click", () => {
      window.location.href = "../pages/prototype-project.html"; // Change to your desired link
    });
  });