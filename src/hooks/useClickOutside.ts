import { useEffect, useRef } from "react";

export const useOutsideClick = (callback: () => void) => {
  const refBtn = useRef<HTMLLinkElement>(null);

  const refMenu = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        event.target instanceof Element &&
        refMenu.current &&
        !refMenu.current.contains(event.target as Node) &&
        event.target !== refBtn.current
      ) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [callback]);

  return { refBtn, refMenu };
};
