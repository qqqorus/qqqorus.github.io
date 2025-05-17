// For the flag container scroll
function leftScroll() {
    const left = document.querySelector(".flags-container");
    left.scrollBy(-700, 0);
}

function rightScroll() {
    const right = document.querySelector(".flags-container");
    right.scrollBy(700, 0);
}

/////////////////////

// For flag name display

let textDisplay = document.getElementsByClassName('flag-name');

function displayFlagName() {
    textDisplay.style.display = 'block'
}

/////////////////////

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const subscribeForm = document.querySelector('#form-area form');
    const successPopup = document.getElementById('subscriptionSuccessPopup');
    const closeBtn = document.querySelector('.close-button');

    // Confetti function
    function fireConfetti() {
        if (typeof confetti === 'function') {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        } else {
            console.warn("Confetti library not loaded");
        }
    }

    // Form submission handler
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (successPopup) successPopup.style.display = 'flex';
            fireConfetti();
        });
    }

    // Close popup when X is clicked
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            if (successPopup) successPopup.style.display = 'none';
        });
    }

    // Close popup when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === successPopup) {
            successPopup.style.display = 'none';
        }
    });
});

////////////////////

// for the popup video

setTimeout(() => {
  document.getElementById('videoPopup').style.display = 'block';
}, 5000); // 5 seconds

function closeVideo() {
  document.getElementById('videoPopup').style.display = 'none';
  document.querySelector('#videoPopup video').pause();
}

////////////////////

// function to play audio before redirecting to another page
function clickLogin() {
  const audio = new Audio('/audios/index-click.mp3');
  audio.play()
    .then(() => {
      // Redirect after the audio starts playing
      setTimeout(() => {
        window.location.href = '/pages/login.html';
      }, 500); // Short delay
    })
    .catch(error => {
      console.error("Audio playback failed:", error);
      window.location.href = 'index.html';
    });
}

function clickRegister() {
  const audio = new Audio('/audios/index-click.mp3');
  audio.play()
    .then(() => {
      // Redirect after the audio starts playing
      setTimeout(() => {
        window.location.href = '/pages/register.html';
      }, 500); // Short delay
    })
    .catch(error => {
      console.error("Audio playback failed:", error);
      window.location.href = 'index.html';
    });
}

