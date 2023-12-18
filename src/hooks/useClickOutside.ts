import { LegacyRef, useEffect, useRef } from "react";

export const useOutsideClick = (state: boolean, callback: () => void) => {
  const refBtn: LegacyRef<HTMLButtonElement> = useRef(null);

  const refMenu = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        event.target instanceof Element &&
        refMenu.current &&
        !refMenu.current.contains(event.target as Node) &&
        event.target !== refBtn.current?.closest("button") &&
        state === true
      ) {
        callback();
      }
      if (
        event.target instanceof Element &&
        refMenu.current &&
        !refMenu.current.contains(event.target as Node) &&
        (event.target === refBtn.current ||
          event.target === refBtn.current?.closest("button"))
      ) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [callback, state]);

  return { refBtn, refMenu };
};
