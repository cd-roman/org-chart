import { useState, useEffect, useRef, useCallback, RefObject } from "react";

interface Position {
  x: number | null;
  y: number | null;
}

interface Pan {
  x: number;
  y: number;
}

interface ZoomAndPan {
  zoomIn: () => void;
  zoomOut: () => void;
  setTransform: () => void;
  resetZoom: () => number;
  setZoom: (newScale: number) => void;
  pan: React.MutableRefObject<Pan>;
  handleCenterClick: () => void;
}

const useZoomAndPan = (ref: RefObject<HTMLElement>): ZoomAndPan => {
  const scale = useRef(1);
  const pan = useRef<Pan>({ x: 0, y: 0 });
  const dragging = useRef(false);
  const lastPosition = useRef<Position>({ x: null, y: null });

  const initialScale = 1; // Initial zoom level

  const resetZoom = (): number => {
    const currentScale = scale.current; // Save the current zoom level
    scale.current = initialScale; // Reset zoom level to initial state
    setTransform();
    return currentScale; // Return the saved zoom level
  };

  const setZoom = (newScale: number): void => {
    scale.current = newScale; // Set zoom level to specified value
    setTransform();
  };

  const setTransform = useCallback(() => {
    const container = ref.current;
    if (container) {
      container.style.transformOrigin = "50% 0";
      container.style.transform = `translate(${pan.current.x}px, ${pan.current.y}px) scale(${scale.current})`;
    }
  }, [ref]);

  useEffect(() => {
    setTransform();

    const container = ref.current;

    if (container) {
      const handleWheel = (event: WheelEvent): void => {
        event.preventDefault();
        const newScale = scale.current + event.deltaY * -0.01;
        scale.current = Math.min(Math.max(0.4, newScale), 2);
        setTransform();
      };

      const handleMouseDown = (event: MouseEvent): void => {
        if (event.button === 0) {
          dragging.current = true;
          lastPosition.current = { x: event.clientX, y: event.clientY };
        }
      };

      const handleMouseMove = (event: MouseEvent): void => {
        if (dragging.current) {
          pan.current.x += event.clientX - (lastPosition.current.x || 0);
          pan.current.y += event.clientY - (lastPosition.current.y || 0);
          lastPosition.current = { x: event.clientX, y: event.clientY };
          setTransform();
        }
      };

      const handleMouseUp = (): void => {
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

  const [isFirstLoad, setIsFirstLoad] = useState(true);

  const handleResize = () => {
    const { innerWidth } = window;

    const scales = [
      { max: 1300, scale: 0.45 },
      { max: 1400, scale: 0.55 },
      { max: 1600, scale: 0.6 },
      { max: 1800, scale: 0.75 },
      { max: 2000, scale: 0.8 },
    ];

    const newScale =
      scales.find(({ max }) => innerWidth < max)?.scale || initialScale;

    setZoom(newScale);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (isFirstLoad) {
      handleResize();
      setIsFirstLoad(false);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFirstLoad]);

  const zoomIn = (): void => {
    scale.current = Math.min(scale.current + 0.1, 2);
    setTransform();
  };

  const zoomOut = (): void => {
    scale.current = Math.max(scale.current - 0.1, 0.4);
    setTransform();
  };

  const handleCenterClick = () => {
    handleResize();
    pan.current = { x: 0, y: 0 }; // Center the org chart
    setTransform();
  };

  return {
    zoomIn,
    zoomOut,
    setTransform,
    resetZoom,
    setZoom,
    pan,
    handleCenterClick,
  };
};

export default useZoomAndPan;
