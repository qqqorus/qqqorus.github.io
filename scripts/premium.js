// for the confettis on the premium page
document.addEventListener('DOMContentLoaded', function() {
    const upgrades = document.getElementsByClassName('upgradeButton');

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

    Array.from(upgrades).forEach(button => {
        button.addEventListener('click', fireConfetti);
    });
});

////////////////

// for the page click audios

function clickDashboard() {
  const audio = new Audio('/audios/page-click.mp3');
  audio.play()
    .then(() => {
      // Redirect after the audio starts playing
      setTimeout(() => {
        window.location.href = '/pages/dashboard.html';
      }, 400); // Short delay
    })
    .catch(error => {
      console.error("Audio playback failed:", error);
      window.location.href = 'index.html';
    });
}

function clickLessons() {
  const audio = new Audio('/audios/page-click.mp3');
  audio.play()
    .then(() => {
      // Redirect after the audio starts playing
      setTimeout(() => {
        window.location.href = '/pages/lessons.html';
      }, 400); // Short delay
    })
    .catch(error => {
      console.error("Audio playback failed:", error);
      window.location.href = 'index.html';
    });
}

function clickNotifications() {
  const audio = new Audio('/audios/page-click.mp3');
  audio.play()
    .then(() => {
      // Redirect after the audio starts playing
      setTimeout(() => {
        window.location.href = '/pages/notifications.html';
      }, 400); // Short delay
    })
    .catch(error => {
      console.error("Audio playback failed:", error);
      window.location.href = 'index.html';
    });
}

function clickPremium() {
  const audio = new Audio('/audios/page-click.mp3');
  audio.play()
    .then(() => {
      // Redirect after the audio starts playing
      setTimeout(() => {
        window.location.href = '/pages/premium.html';
      }, 400); // Short delay
    })
    .catch(error => {
      console.error("Audio playback failed:", error);
      window.location.href = 'index.html';
    });
}

function clickProfile() {
  const audio = new Audio('/audios/page-click.mp3');
  audio.play()
    .then(() => {
      // Redirect after the audio starts playing
      setTimeout(() => {
        window.location.href = '/pages/profile.html';
      }, 400); // Short delay
    })
    .catch(error => {
      console.error("Audio playback failed:", error);
      window.location.href = 'index.html';
    });
}

function clickPvpArea() {
  const audio = new Audio('/audios/page-click.mp3');
  audio.play()
    .then(() => {
      // Redirect after the audio starts playing
      setTimeout(() => {
        window.location.href = '/pages/pvparea.html';
      }, 400); // Short delay
    })
    .catch(error => {
      console.error("Audio playback failed:", error);
      window.location.href = 'index.html';
    });
}

function clickSettings() {
  const audio = new Audio('/audios/page-click.mp3');
  audio.play()
    .then(() => {
      // Redirect after the audio starts playing
      setTimeout(() => {
        window.location.href = '/pages/settings.html';
      }, 400); // Short delay
    })
    .catch(error => {
      console.error("Audio playback failed:", error);
      window.location.href = 'index.html';
    });
}