import { useEffect, useRef } from "react";

export function useFadeInOnScroll(duration = 800, offset = 0) {
  const ref = useRef();
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = 0;
    el.style.transform = "translateY(40px)";
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - offset) {
        el.style.transition = `opacity ${duration}ms cubic-bezier(.4,0,.2,1), transform ${duration}ms cubic-bezier(.4,0,.2,1)`;
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [duration, offset]);
  return ref;
}
