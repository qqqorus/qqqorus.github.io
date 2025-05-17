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