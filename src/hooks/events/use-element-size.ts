import { useCallback, useState } from 'react';

import { useEventListener } from './use-event-listener';
import { useIsomorphicLayoutEffect } from './use-isomorphic-layout-effect';

interface ISize {
  width: number;
  height: number;
}

export function useElementSize<T extends HTMLElement = HTMLDivElement>(): [
  (node: T | null) => void,
  ISize
] {
  const [ref, setRef] = useState<T | null>(null);
  const [size, setSize] = useState<ISize>({
    width: 0,
    height: 0
  });

  const handleSize = useCallback(() => {
    setSize({
      width: ref?.getBoundingClientRect().width || 0,
      height: ref?.getBoundingClientRect().height || 0
    });
  }, [ref?.offsetHeight, ref?.offsetWidth]);

  useEventListener('resize', handleSize);

  useIsomorphicLayoutEffect(() => {
    handleSize();
  }, [ref?.offsetHeight, ref?.offsetWidth]);

  return [setRef, size];
}
