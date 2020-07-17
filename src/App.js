import React, { useRef } from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";
import './App.css';

function App() {
  const anim1 = useWebAnimations({
    keyframes: [
        {transform: 'rotate(0deg)'},
        {transform: 'rotate(360deg)'},
    ],
    timing: {
      duration: 6000,
      iterations: Infinity,
      easing: "linear",
    }
  });
  const bgAnim = useWebAnimations({
    keyframes: [
      {backgroundPosition:'25% 0%'},
      {backgroundPosition:'76% 100%'},
      {backgroundPosition:'25% 0%'},
  ],
  timing: {
    duration: 9000,
    iterations: Infinity,
    easing: "linear",
  }
  });
  const roadAnim = useWebAnimations({
    keyframes: [
      {transform: 'translate(0px)'},
      {transform: 'translate(-2400px)'},
  ],
  timing: {
    duration: 6000,
    iterations: Infinity,
    easing: "linear",
  }
  });
  
  const wheel1Anim = useWebAnimations({
    keyframes: [
      {transform: 'rotate(0deg)'},
      {transform: 'rotate(360deg)'},
  ],
  timing: {
    duration: 1000,
    iterations: Infinity,
    easing: "linear",
  }
  });

  const wheel2Anim = useWebAnimations({
    keyframes: [
      {transform: 'rotate(0deg)'},
      {transform: 'rotate(360deg)'},
  ],
  timing: {
    duration: 1000,
    iterations: Infinity,
    easing: "linear",
  }
  });

  const carAnim = useWebAnimations({
    keyframes: [
      {left:'20%'},
      {left:'40%'},
  ],
  timing: {
    duration: 10000,
    iterations: Infinity,
    direction:"alternate",
    easing: "ease-in-out",
  }
  });
  
  return (
    
    <div id="mainBg" ref={bgAnim.ref}>
          <div class="moon" ref={anim1.ref}></div>

    <div class="skyline">
        <div class="building1-shadow"></div>
        <div class="building1">
            <div class="building-left-half"></div>
            <div class="building-right-half"></div>
        </div>
  </div>
    <div class="road">
        <div class="road-top-half" ref={roadAnim.ref}></div>
        <div class="road-bottom-half"></div>
    </div>

      <div class="car-container" ref={carAnim.ref}>
          <div class="car-top1">
              <div class="window1"></div>
              <div class="window2"></div>

          </div>
          <div class="car-top2">
              <div class="door">
                  <div class="door-knob"></div>
              </div>
          </div>
          <div class="car-bottom">
              <div class="wheel1-top"></div>
              <div class="wheel1" ref={wheel1Anim.ref}>
                  <div class="wheel-dot1"></div>
                  <div class="wheel-dot2"></div>
                  <div class="wheel-dot3"></div>
                  <div class="wheel-dot4"></div>

              </div>

              <div class="wheel2-top"></div>
              <div class="wheel2" ref={wheel2Anim.ref}>
                  <div class="wheel-dot1"></div>
                  <div class="wheel-dot2"></div>
                  <div class="wheel-dot3"></div>
                  <div class="wheel-dot4"></div>
              </div>
          </div>
      </div>    
    </div>
  );
}

export default App;
