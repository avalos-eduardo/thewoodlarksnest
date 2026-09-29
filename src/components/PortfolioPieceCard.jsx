import { useEffect, useState } from "react";

export default function PortfolioPieceCard({ img, description, alt }) {
  const [clicked, setClicked] = useState(false);

  const handleClickImg = () => {
    setClicked(true);
  };

  const handleClose = () => {
    setClicked(false);
  };

  // Close the lightbox when Escape is pressed
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setClicked(false);
      }
    };

    if (clicked) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [clicked]);

  // Prevent the page behind the lightbox from scrolling
  useEffect(() => {
    if (clicked) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [clicked]);

  return (
    <>
      {/* Portfolio piece */}
      <div>
        <img
          src={img}
          alt={alt}
          onClick={handleClickImg}
          className="object-cover cursor-pointer"
        />

        <p className="my-4 text-sm font-lato text-wood-brown">{description}</p>
      </div>

      {/* Lightbox */}
      {clicked && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 lg:pt-27 pb-4 px-4 backdrop-blur-sm"
          onClick={handleClose}
        >
          {/* Image container */}
          <div
            className="relative max-h-[80vh] max-w-[80vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={img}
              alt={alt}
              className="max-h-[80vh] max-w-[80vw] rounded-lg object-contain shadow-2xl"
            />

            {/* Close button */}
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close image"
              className="absolute right-2 top-2 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-2xl leading-none text-white transition hover:bg-black/80 cursor-pointer"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}
