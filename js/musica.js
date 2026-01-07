document.addEventListener('DOMContentLoaded', function() {
  const playBtn = document.getElementById('playBtn');
  const audioPlayer = document.getElementById('audioPlayer');
  const targetElement = document.querySelector('.contenedor_nombramiento');

  if (!playBtn) {
    console.error('No se encontró el botón con id="playBtn"');
    return;
  }
  if (!audioPlayer) {
    console.error('No se encontró el elemento <audio> con id="audioPlayer"');
    return;
  }
  if (!targetElement) {
    console.warn('No se encontró el elemento con id="contenedor_nombramiento". El scroll no se realizará.');
  }

  let isPlaying = false;

  playBtn.addEventListener('click', function() {
    if (!isPlaying) {
      audioPlayer.play()
        .then(() => {
          //goFullScreen();
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
          isPlaying = true;

          //setTimeout(function(){
          //  console.log("Ejecutado tras 0.5 seg");
          //  if (targetElement) {
          //    targetElement.scrollIntoView({ behavior: 'smooth' });
          //  }
          //}, 500);
          // Desplazarse suavemente al contenedor_nombramiento (solo si existe)
          
        })
        .catch(error => {
          console.error('Error al reproducir el audio:', error);
          alert('No se pudo reproducir el audio. ¿Está bloqueado el sonido en el navegador?');
        });
    } else {
      audioPlayer.pause();
      isPlaying = false;
      //releaseFullScreen();
    }
  });

  audioPlayer.addEventListener('ended', function() {
    isPlaying = false;
  });
});




//const elem = document.documentElement;
//
//function goFullScreen() {
//
//  if (elem.requestFullscreen) {
//      elem.requestFullscreen();
//  } 
//  // Handle prefixed versions for broader browser compatibility
//  else if (elem.mozRequestFullScreen) { /* Firefox */
//      elem.mozRequestFullScreen();
//  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
//      elem.webkitRequestFullscreen();
//  } else if (elem.msRequestFullscreen) { /* IE/Edge */
//      elem.msRequestFullscreen();
//  }
//}
//
//function releaseFullScreen() {
//
//  document.exitFullscreen();
//  if (document.exitFullscreen) {
//      document.exitFullscreen();
//  }
//  // Handle prefixed versions
//  else if (document.mozCancelFullScreen) { /* Firefox */
//      document.mozCancelFullScreen();
//  } else if (document.webkitExitFullscreen) { /* Chrome, Safari & Opera */
//      document.webkitExitFullscreen();
//  } else if (document.msExitFullscreen) { /* IE/Edge */
//      document.msExitFullscreen();
//  }
//}
//
//function toggleFullscreen() {
//
//    if (!document.fullscreenElement) {
//        // If not in fullscreen, request it
//        if (elem.requestFullscreen) {
//            elem.requestFullscreen();
//        } 
//        // Handle prefixed versions for broader browser compatibility
//        else if (elem.mozRequestFullScreen) { /* Firefox */
//            elem.mozRequestFullScreen();
//        } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
//            elem.webkitRequestFullscreen();
//        } else if (elem.msRequestFullscreen) { /* IE/Edge */
//            elem.msRequestFullscreen();
//        }
//    } else {
//        // If in fullscreen, exit it
//        if (document.exitFullscreen) {
//            document.exitFullscreen();
//        }
//        // Handle prefixed versions
//        else if (document.mozCancelFullScreen) { /* Firefox */
//            document.mozCancelFullScreen();
//        } else if (document.webkitExitFullscreen) { /* Chrome, Safari & Opera */
//            document.webkitExitFullscreen();
//        } else if (document.msExitFullscreen) { /* IE/Edge */
//            document.msExitFullscreen();
//        }
//    }
//}
