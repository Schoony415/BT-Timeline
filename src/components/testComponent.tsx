import React,{ useRef } from 'react';
import useOnScreen from '../timeline/hooks/useOnScreen';
import useDirectionToScreen from '../timeline/hooks/useDirectionToScreen';

export default function TestComponent() {
  const elementRef = useRef<HTMLDivElement>(null);
  // const isOnScreen = useOnScreen(elementRef);
  const isOnScreen = useDirectionToScreen(elementRef)

  console.log({isOnScreen});

  return (
    <div>
      <div style={{ paddingBottom: '140vh' }}>scroll to element...</div>
      <div ref={elementRef}>my element</div>
    </div>
  );
}
