function clickLogin() {
  const audio = new Audio('/audios/login-click.mp3');
  audio.play()
    .then(() => {
      // Redirect after the audio starts playing
      setTimeout(() => {
        window.location.href = '/pages/dashboard.html';
      }, 800); // Short delay
    })
    .catch(error => {
      console.error("Audio playback failed:", error);
      window.location.href = 'login.html';
    });
}

function clickRegister() {
  const audio = new Audio('/audios/login-click.mp3');
  audio.play()
    .then(() => {
      // Redirect after the audio starts playing
      setTimeout(() => {
        window.location.href = '/pages/dashboard.html';
      }, 800); // Short delay
    })
    .catch(error => {
      console.error("Audio playback failed:", error);
      window.location.href = 'register.html';
    });
}