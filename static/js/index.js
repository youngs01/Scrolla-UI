document.addEventListener("DOMContentLoaded", () => {
  console.log("document is ready, JS is working");

  const formElement = document.querySelector(".form-pill");
  const inputElement = document.querySelector(".search-input");

  // Form click event
  formElement.addEventListener("click", () => {
    console.log("form Element is clicked"); // for debugging
    inputElement.focus();
  });

  // Swiper initialization
  var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    spaceBetween:30,
    slidesPerView: 1.05,
    loop:false,
    // freeMode:true,
    // navigation
    navigation: {
      nextEl: ".swiper-down",
      prevEl: ".swiper-up",
    },
  });

  // Keyboard controls for swiper and video
  window.addEventListener("keydown", (event) => {
    // console.log(event.key);
    if (event.key === "ArrowDown") {
      swiper.slideNext();
    } else if (event.key == "ArrowUp") {
      swiper.slidePrev();
    } else if (event.key == " ") {
      // here i will stop the video
    }
  });

  const slides = document.querySelectorAll(".swiper-slide");

  const slideObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        let existingVideo = entry.target.querySelector("video");

        if (entry.isIntersecting) {
          console.log(`video ${entry.target.id} is playing`);
          existingVideo.play(); // Directly play the video
        } else {
          console.log(`video ${entry.target.id} has gone out of view`);
          existingVideo.pause(); // Pause the video when it's out of view
        }
      });
    },
    {
      root: null, // Observing the viewport
      rootMargin: "0px 0px 100px 0px", // Slightly preload videos before fully visible
      threshold: 1, // Start playing when 50% of the video is visible
    }
  );

  slides.forEach((slide) => {
    // obseve the video viewport
    slideObserver.observe(slide);

    // play/pause turn
    let turn = false; // video is not pause.
    // Function for different interactions for video
    function videoCalls() {
      slide.addEventListener("click", function () {

        console.log("video si clicked");
        if (!turn) {
          slide.querySelector("video").pause();
          turn = !turn;
        } else {
          slide.querySelector("video").play();
          turn = !turn;
        }
      });
    }

    videoCalls();

  });
});
