import { useEffect } from 'react';

function useZoomAndPan(containerSelector) {
    useEffect(() => {
        const container = document.querySelector('.p-organizationchart');
      
        let scale = 1;
        let pan = { x: 0, y: 0 };
        let dragging = false;
        let lastPosition = null;
      
        const handleWheel = (event) => {
          event.preventDefault();
          scale += event.deltaY * -0.01;
          scale = Math.min(Math.max(.125, scale), 4);
          container.style.transform = `translate(${pan.x}px, ${pan.y}px) scale(${scale})`;
        };
      
        const handleKeyDown = (event) => {
          if ((event.metaKey || event.ctrlKey) && (event.key === '+' || event.key === '-')) {
            event.preventDefault();
            scale += event.key === '+' ? 0.1 : -0.1;
            scale = Math.min(Math.max(.125, scale), 4);
            container.style.transform = `translate(${pan.x}px, ${pan.y}px) scale(${scale})`;
          }
        };
      
        const handleMouseDown = (event) => {
          dragging = true;
          lastPosition = { x: event.clientX, y: event.clientY };
        };
      
        const handleMouseMove = (event) => {
          if (dragging) {
            pan.x += event.clientX - lastPosition.x;
            pan.y += event.clientY - lastPosition.y;
            lastPosition = { x: event.clientX, y: event.clientY };
            container.style.transform = `translate(${pan.x}px, ${pan.y}px) scale(${scale})`;
          }
        };
      
        const handleMouseUp = () => {
          dragging = false;
        };
      
        container.addEventListener('wheel', handleWheel, { passive: false });
        window.addEventListener('keydown', handleKeyDown);
        container.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
      
        return () => {
          container.removeEventListener('wheel', handleWheel);
          window.removeEventListener('keydown', handleKeyDown);
          container.removeEventListener('mousedown', handleMouseDown);
          window.removeEventListener('mousemove', handleMouseMove);
          window.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);
}

export default useZoomAndPan;