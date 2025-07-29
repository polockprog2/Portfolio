import { useEffect, useRef } from "react";

export function useFadeInOnScroll({
  duration = 800,
  offset = 0,
  delay = 0,
  axis = "Y",
  easing = "cubic-bezier(.4,0,.2,1)",
  once = true,
} = {}) {
  const ref = useRef();
  const triggered = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.opacity = 0;
    el.style.transform = `translate${axis}(40px)`;

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && (!once || !triggered.current)) {
          el.style.transition = `opacity ${duration}ms ${easing} ${delay}ms, transform ${duration}ms ${easing} ${delay}ms`;
          el.style.opacity = 1;
          el.style.transform = `translate${axis}(0)`;
          triggered.current = true;
          if (once) observer.unobserve(el);
        } else if (!once) {
          el.style.opacity = 0;
          el.style.transform = `translate${axis}(40px)`;
        }
      });
    };

    const observer = new window.IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: `0px 0px -${offset}px 0px`,
      threshold: 0.1,
    });

    observer.observe(el);

    return () => observer.disconnect();
  }, [duration, offset, delay, axis, easing, once]);

  return ref;
}
