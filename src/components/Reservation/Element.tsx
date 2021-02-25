import React, {
  useState,
  useMemo,
  useCallback,
  useEffect,
  CSSProperties,
} from "react";

const POSITION = { x: 0, y: 0 };

const Element: React.FC<any> = ({ children, onDrag, onDragEnd, id }) => {
  const [element, setElement] = useState({
    isDragging: false,
    origin: POSITION,
    translation: POSITION,
  });

  const handleMouseDown = useCallback(({ clientX, clientY }) => {
    setElement((element) => ({
      ...element,
      isDragging: true,
      origin: { x: clientX, y: clientY },
    }));
  }, []);

  const handleMouseMove = useCallback(
    ({ clientX, clientY }) => {
      const translation = {
        x: clientX - element.origin.x,
        y: clientY - element.origin.y,
      };

      setElement((element) => ({
        ...element,
        translation,
      }));
    },
    [element.origin, onDrag, id]
  );

  const handleMouseUp = useCallback(() => {
    setElement((element) => ({
      ...element,
      isDragging: false,
    }));
    onDragEnd();
  }, [onDragEnd]);

  useEffect(() => {
    if (element.isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);

      setElement((element) => ({ ...element, translation: POSITION }));
    }
  }, [element.isDragging, handleMouseUp, handleMouseMove]);

  const styles = useMemo(
    () =>
      ({
        cursor: element.isDragging ? "-webkit-grabbing" : "-webkit-grab",
        transform: `translate(${element.translation.x}px, ${element.translation.y}px)`,
        transition: element.isDragging ? "none" : "transform 500ms",
        zIndex: element.isDragging ? 2 : 1,
        position: element.isDragging ? "absolute" : "relative",
      } as CSSProperties),
    [element.isDragging, element.translation]
  );

  return (
    <div style={styles} onMouseDown={handleMouseDown}>
      {children}
    </div>
  );
};

export default Element;
