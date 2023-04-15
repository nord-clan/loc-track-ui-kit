import type { MutableRefObject } from 'react';
import { useState } from 'react';

export const useNotifyRef = <T>(init: T): MutableRefObject<T> => {
  const [, forceUpdate] = useState(0);
  const [ref] = useState(() => ({
    value: init,
    facade: {
      get current() {
        return ref.value;
      },
      set current(value) {
        const last = ref.value;
        if (last !== value) {
          ref.value = value;
          forceUpdate((i) => i + 1);
        }
      }
    }
  }));

  return ref.facade;
};
