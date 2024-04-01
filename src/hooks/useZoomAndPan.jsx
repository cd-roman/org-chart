import { useEffect, useRef, useCallback } from "react";

const useZoomAndPan = (ref) => {
  const scale = useRef(1);
  const pan = useRef({ x: 0, y: 0 });
  const dragging = useRef(false);
  const lastPosition = useRef({ x: null, y: null });

  const initialScale = 1; // Initial zoom level

  const resetZoom = () => {
    const currentScale = scale.current; // Save the current zoom level
    scale.current = initialScale; // Reset zoom level to initial state
    setTransform();
    return currentScale; // Return the saved zoom level
  };

  const setZoom = (newScale) => {
    scale.current = newScale; // Set zoom level to specified value
    setTransform();
  };

  const setTransform = useCallback(() => {
    const container = ref.current;
    if (container) {
      container.style.transform = `translate(${pan.current.x}px, ${pan.current.y}px) scale(${scale.current})`;
    }
  }, [ref]);

  useEffect(() => {
    const container = ref.current;

    if (container) {
      const handleWheel = (event) => {
        event.preventDefault();
        const newScale = scale.current + event.deltaY * -0.01;
        scale.current = Math.min(Math.max(0.5, newScale), 2);
        setTransform();
      };

      const handleMouseDown = (event) => {
        dragging.current = true;
        lastPosition.current = { x: event.clientX, y: event.clientY };
      };

      const handleMouseMove = (event) => {
        if (dragging.current) {
          pan.current.x += event.clientX - lastPosition.current.x;
          pan.current.y += event.clientY - lastPosition.current.y;
          lastPosition.current = { x: event.clientX, y: event.clientY };
          setTransform();
        }
      };

      const handleMouseUp = () => {
        dragging.current = false;
      };

      container.addEventListener("wheel", handleWheel, { passive: false });
      container.addEventListener("mousedown", handleMouseDown);
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);

      // Cleanup function
      return () => {
        container.removeEventListener("wheel", handleWheel);
        container.removeEventListener("mousedown", handleMouseDown);
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [ref, setTransform]);

  const zoomIn = () => {
    scale.current = Math.min(scale.current + 0.1, 2);
    setTransform();
  };

  const zoomOut = () => {
    scale.current = Math.max(scale.current - 0.1, 0.5);
    setTransform();
  };

  return { zoomIn, zoomOut, setTransform, resetZoom, setZoom };
};

export default useZoomAndPan;
