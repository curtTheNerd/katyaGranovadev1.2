import { useState, useRef } from "react";

const TEXT_SHADOW = "0px 0px 8px white, 0px 0px 5px white, 0px 0px 5px white";
const DESCRIPTION_TEXT = { color: "rgb(29,3,36)", fontSize: "1.1rem", textShadow: TEXT_SHADOW };

const Modal = ({ selectedImage, closeModal, prevImage, nextImage }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isGrabbing, setIsGrabbing] = useState(false);
  const dragOrigin = useRef(null);
  const currentPos = useRef({ x: 0, y: 0 });
  const hasDragged = useRef(false);

  const handleImageClick = () => {
    if (hasDragged.current) return;
    if (isZoomed) {
      setPosition({ x: 0, y: 0 });
      currentPos.current = { x: 0, y: 0 };
    }
    setIsZoomed((prev) => !prev);
  };

  const handleMouseDown = (e) => {
    if (!isZoomed) return;
    hasDragged.current = false;
    dragOrigin.current = {
      x: e.clientX - currentPos.current.x,
      y: e.clientY - currentPos.current.y,
    };
    setIsGrabbing(true);
  };

  const handleMouseMove = (e) => {
    if (!dragOrigin.current) return;
    hasDragged.current = true;
    const x = e.clientX - dragOrigin.current.x;
    const y = e.clientY - dragOrigin.current.y;
    currentPos.current = { x, y };
    setPosition({ x, y });
  };

  const handleMouseUp = () => {
    dragOrigin.current = null;
    setIsGrabbing(false);
  };

  return (
    <div className="flex flex-col justify-center items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] z-[100]">
      <div
        className={`relative w-full h-full flex items-center justify-center overflow-hidden ${isZoomed ? (isGrabbing ? "cursor-grabbing" : "cursor-grab") : ""}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <img
          src={selectedImage.src}
          alt={selectedImage.id}
          draggable={false}
          onClick={handleImageClick}
          style={{
            maxWidth: isZoomed ? "200%" : "100%",
            maxHeight: isZoomed ? "200%" : "100%",
            padding: isZoomed ? "0" : "1rem",
            transform: `translate(${position.x}px, ${position.y}px)`,
            cursor: isZoomed ? (isGrabbing ? "grabbing" : "grab") : "zoom-in",
            userSelect: "none",
            transition: "max-width 0.3s ease, max-height 0.3s ease, padding 0.3s ease",
          }}
        />

        <div className="absolute bottom-9 left-10 w-[90%] text-start pointer-events-none z-[101]">
          <p style={{ ...DESCRIPTION_TEXT, fontStyle: "italic" }}>
            {selectedImage.id},
            <span style={{ fontStyle: "normal" }}> {selectedImage.date}</span>
          </p>
          <p style={DESCRIPTION_TEXT}>{selectedImage.method}</p>
          <p style={DESCRIPTION_TEXT}>{selectedImage.sizeCm}</p>
          <p style={DESCRIPTION_TEXT}>{selectedImage.sizeInch}</p>
        </div>

        {!isZoomed && (
          <>
            <button
              className="absolute border-none bg-transparent transition-all duration-500 z-[102] top-8 right-10 text-[rgb(112,112,112)] text-[3.75rem] font-[525] cursor-pointer hover:text-[rgb(56,34,68)] hover:scale-110"
              onClick={closeModal}
            >
              &times;
            </button>
            <button
              className="absolute border-none bg-transparent transition-all duration-500 z-[102] top-[45%] left-0 p-4 text-[rgb(112,112,112)] font-bold text-[2.2rem] select-none cursor-pointer hover:text-[rgb(56,34,68)] hover:scale-125"
              onClick={prevImage}
            >
              &#10094;
            </button>
            <button
              className="absolute border-none bg-transparent transition-all duration-500 z-[102] top-[45%] right-0 p-4 text-[rgb(112,112,112)] font-bold text-[2.2rem] select-none cursor-pointer hover:text-[rgb(56,34,68)] hover:scale-125"
              onClick={nextImage}
            >
              &#10095;
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
