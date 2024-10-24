import { useEffect, useState, useRef, RefObject } from 'react';
//reference: https://codepen.io/gui3/pen/VwwRORL?editors=0010
// https://stackoverflow.com/questions/58980851/detect-whether-element-is-above-or-below-the-viewport-on-intersect-leave-with-in

export type ScreenDirection = "VISIBLE"|"BELOW"|"ABOVE"

export default function useDirectionToScreen(ref: RefObject<HTMLElement>) {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isOnScreen, setIsOnScreen] = useState<ScreenDirection|null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(([entry]) =>{
    
  // console.log(entry.boundingClientRect.top)
  if (entry.isIntersecting) {
    // console.log('Enter')
    setIsOnScreen("VISIBLE")
    return
  }
  // console.log('Leave')
  if (entry.boundingClientRect.top > 0) {
    setIsOnScreen("BELOW")
  } else {
    setIsOnScreen("ABOVE")
  }
   } );
  }, []);

  useEffect(() => {
    if(!(observerRef && observerRef.current && ref && ref.current)){ return}

    observerRef.current.observe(ref.current);

    return () => {
      /* @ts-ignore-next-line*/
      observerRef.current.disconnect();
    };
  }, [ref]);

  return isOnScreen;
}

