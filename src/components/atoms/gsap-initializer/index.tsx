'use client';

import gsap from 'gsap';
import { useEffect } from 'react';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Draggable from 'gsap/dist/Draggable';
import Observer from 'gsap/dist/Observer';
import SplitText from 'gsap/dist/SplitText';

export const GSAPInitializer = (): null => {
  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, Draggable, Observer, SplitText);

    ScrollTrigger.defaults({
      scroller: 'main'
    });
  }, []);

  return null;
};
