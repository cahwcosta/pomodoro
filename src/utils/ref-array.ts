'use client';

import { useRef, useCallback, type RefObject } from 'react';

export const useArrayRefs = <T extends HTMLElement>(): {
  refs: RefObject<(T | null)[]>;
  setRef: (index: number) => (el: T | null) => void;
} => {
  const refs = useRef<(T | null)[]>([]);

  const setRef = useCallback(
    (index: number) => (el: T | null) => {
      refs.current[index] = el;
    },
    []
  );

  return { refs, setRef };
};
