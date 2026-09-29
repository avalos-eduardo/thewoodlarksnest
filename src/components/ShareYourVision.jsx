import { Link } from "react-router";
import { trackEvent } from "../utils/zarazTrackEvent";

export default function ShareYourVision(ctaLocation) {
  const handleContactClick = (ctaLocation) => {
    window.scrollTo(0, 0);
    trackEvent("cta_click", {
      cta_name: "start_a_custom_piece",
      cta_location: ctaLocation,
      destination: "/custom-piece",
    });
  };

  return (
    <section className="bg-[#2A2C0C] h-85 flex flex-col items-center justify-evenly text-center text-offwhite lg:py-3 px-10">
      <h1 className="text-3xl lg:text-5xl font-playfair-display">
        Share Your Vision With Us
      </h1>
      <p className="text-md lg:text-xl font-lato tracking-wide max-w-3/4">
        Bring your ideas and excitement. We will design and build a piece that
        belongs, from our nest to yours.
      </p>
      <Link
        to="/custom-piece"
        className="rounded-md w-65 lg:w-80 h-12 lg:h-18 flex justify-center items-center bg-offwhite text-wood-brown text-md lg:text-xl font-playfair-display font-bold tracking-wide "
        onClick={() => handleContactClick(ctaLocation)}
      >
        Start Your Custom Piece
      </Link>
    </section>
  );
}
