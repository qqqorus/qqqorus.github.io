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

////////////////////

// for the fairy dust effect when the mouse clicks on a button

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.fairy-dust-button');
    const container = document.getElementById('fairyDustContainer');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const particles = 50; // Number of particles
            const colors = ['#fd92c8', '#00a2ea', '#ffe586', '#85f1cb', '#975cf6']; // Colors for the particles

            for (let i = 0; i < particles; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                particle.style.left = `${button.getBoundingClientRect().left + Math.random() * button.offsetWidth}px`;
                particle.style.top = `${button.getBoundingClientRect().top + Math.random() * button.offsetHeight}px`;
                particle.style.width = `${Math.random() * 10}px`;
                particle.style.height = `${Math.random() * 10}px`;
                particle.style.animationDuration = `${Math.random() * 3 + 1}s`;
                container.appendChild(particle);

                // Remove the particle after the animation ends
                particle.addEventListener('animationend', () => {
                    container.removeChild(particle);
                });
            }
        });
    });
});
