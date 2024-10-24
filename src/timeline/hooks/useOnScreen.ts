import { useEffect, useState, useRef, RefObject } from 'react';

export default function useOnScreen(ref: RefObject<HTMLElement>) {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isOnScreen, setIsOnScreen] = useState(false);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(([entry]) =>
      setIsOnScreen(entry.isIntersecting) // simple true fase detection
);
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

/*
//useage

import { useRef } from 'react';
import useOnScreen from './useOnScreen';

function MyComponent() {
  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);

  console.log({isOnScreen});

  return (
    <div>
      <div style={{ paddingBottom: '140vh' }}>scroll to element...</div>
      <div ref={elementRef}>my element</div>
    </div>
  );
}


*/