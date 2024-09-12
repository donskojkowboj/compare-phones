import { useEffect, RefObject } from 'react';

type Event = MouseEvent | TouchEvent;

interface useOutsideClickProps<T extends HTMLElement = HTMLElement> {
  ref: RefObject<T>;
  handler: (event: Event) => void;
  exceptElementRef?: RefObject<T>;
}
export const useOutsideClick = ({
  ref,
  handler,
  exceptElementRef,
}: useOutsideClickProps) => {
  useEffect(() => {
    const listener = (event: Event) => {
      const el = ref?.current;
      const exceptEl = exceptElementRef?.current;
      const hasElTarget = el?.contains((event?.target as Node) || null);
      const hasExceptElTarget = exceptEl?.contains(
        (event?.target as Node) || null,
      );

      const shouldNotHandle = !el || hasElTarget || hasExceptElTarget;

      if (shouldNotHandle) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};
