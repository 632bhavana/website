document.addEventListener("DOMContentLoaded", function () {
    // Contact Form Submission
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            let name = document.getElementById("name").value.trim();
            let message = document.getElementById("message").value.trim();

            if (name === "" || message === "") {
                alert("Please fill in all fields.");
                return;
            }

            alert("Message sent successfully!");
            form.reset();
        });
    }

    // Animated menu items
    const menuImages = document.querySelectorAll(".menu-items img");
    if (menuImages) {
        menuImages.forEach(img => {
            img.addEventListener("mouseover", function () {
                this.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.3)";
            });

            img.addEventListener("mouseout", function () {
                this.style.boxShadow = "none";
            });
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Fade-in effect when scrolling
    const sections = document.querySelectorAll(".about-section, .fade-in");

    const fadeInOnScroll = () => {
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.85) {
                section.classList.add("active");
            }
        });
    };

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); // Trigger once on load

    // Fetch customer feedback from localStorage (simulating contact page submission)
    const feedbackContainer = document.getElementById("feedback-container");
    let storedFeedback = JSON.parse(localStorage.getItem("customerFeedback")) || [];

    if (storedFeedback.length > 0) {
        feedbackContainer.innerHTML = storedFeedback.map(fb => `<p>📝 "${fb}"</p>`).join("");
    } else {
        feedbackContainer.innerHTML = "<p>No feedback submitted yet.</p>";
    }
});
// Function to generate a random order number
function generateOrderNumber() {
    return Math.floor(100000 + Math.random() * 900000);
}

// Function to place an order
function placeOrder() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const seating = document.getElementById('seating').value;
  
    if (checkboxes.length === 0) {
      alert("Please select at least one dish before placing your order.");
      return;
    }
  
    const selectedItems = Array.from(checkboxes).map(cb => cb.value);
    const orderNumber = Math.floor(100000 + Math.random() * 900000);
    const orderTime = new Date().toLocaleTimeString();
  
    document.getElementById('orderNumber').textContent = orderNumber;
    document.getElementById('orderItems').textContent = selectedItems.join(', ');
    document.getElementById('orderSeating').textContent = seating;
  
    // Optional: Show order time
    if (!document.getElementById('orderTime')) {
      const timePara = document.createElement('p');
      timePara.innerHTML = `<strong>Time:</strong> <span id="orderTime">${orderTime}</span>`;
      document.querySelector('.popup-content').appendChild(timePara);
    } else {
      document.getElementById('orderTime').textContent = orderTime;
    }
  
    document.getElementById('orderPopup').style.display = 'block';
  }
  
  function closePopup() {
    document.getElementById('orderPopup').style.display = 'none';
  }
  document.addEventListener("DOMContentLoaded", () => {
    const feedbackContainer = document.getElementById("feedback-container");

    // Sample feedbacks (you can expand or load from localStorage/server)
    const feedbacks = [
        "Amazing food and cozy ambience!",
        "Staff was super friendly and food arrived on time!",
        "Best dining experience I've had this year.",
        "Loved the Indian and Italian dishes!"
    ];

    // Simulate loading delay
    setTimeout(() => {
        feedbackContainer.innerHTML = '';
        feedbacks.forEach(feedback => {
            const p = document.createElement("p");
            p.textContent = `📝 ${feedback}`;
            p.style.marginBottom = "1rem";
            feedbackContainer.appendChild(p);
        });
    }, 1000); // 1 second delay to simulate loading
});
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const nameInput = document.getElementById("name");
    const messageInput = document.getElementById("message");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = nameInput.value.trim();
        const message = messageInput.value.trim();

        if (name && message) {
            const feedback = {
                name: name,
                message: message,
                timestamp: new Date().toLocaleString()
            };

            // Save to localStorage
            let feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
            feedbacks.push(feedback);
            localStorage.setItem("feedbacks", JSON.stringify(feedbacks));

            alert("Thank you for your feedback!");
            form.reset();
        } else {
            alert("Please fill out all fields.");
        }
    });
});
