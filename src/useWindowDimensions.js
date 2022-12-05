import { useState, useEffect } from 'react';
import { staticHeight, staticWidth } from './App';

//DONT TOUCH THIS FILE

export function adjustContainer(height, width) {

    //height proportions ajuster
    if (width / staticWidth > height / staticHeight) {
        document.getElementsByClassName("websiteContainer")[0].style.zoom = (height / staticHeight);
    }

    //width proportions adjuster
    if (height / staticHeight > width / staticWidth) {
    document.getElementsByClassName("websiteContainer")[0].style.zoom = (width / staticWidth);
    }

}


/* Get the current dimensions of window */
export function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      window.addEventListener('fullscreenchange', handleResize)
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowDimensions;
}

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

