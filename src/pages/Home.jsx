import { Link } from "react-router";
import diningTableImg from "../assets/woodlark-dining-table.webp";
import toddlerTowerImg from "../assets/woodlark-toddler-tower.png";
import shareVision from "../assets/woodlark-share-vision.webp";
import shopDrawings from "../assets/woodlark-shop-drawings.png";
import tableTop from "../assets/woodlark-tabletop.jpg";
import familyPic from "../assets/woodlark-family.jpg";
import shoeBench from "../assets/woodlark-shoe-bench.jpg";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { trackEvent } from "../utils/zarazTrackEvent";

export default function Home() {
  useDocumentTitle("The Woodlark's Nest | Custom Hardwood Furniture");

  const handleContactClick = (ctaLocation) => {
    window.scrollTo(0, 0);

    trackEvent("cta_click", {
      cta_name: "start_a_custom_piece",
      cta_location: ctaLocation,
      destination: "/custom-piece",
    });
  };

  return (
    <>
      {/* Hero Image */}
      <section className="relative w-full h-130 2xl:h-200 overflow-hidden text-offwhite">
        <img
          src={diningTableImg}
          alt="Hero image of dining table and dining chairs."
          className="absolute inset-0 -z-20 h-full w-full object-cover object-bottom"
        />
        <div className="absolute inset-0 -z-10 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.3)_15%,rgba(0,0,0,0.3)_15%,transparent_100%)]"></div>
        <div className="flex flex-col h-full items-center justify-center gap-8 lg:gap-12 px-5 pb-4">
          <h1 className="text-5xl lg:text-7xl font-playfair-display text-center">
            Handcrafted for <span className="italic">Your</span> Nest
          </h1>
          <p className="text-xl lg:text-3xl font-lato text-center max-w-4/5">
            Custom hardwood furniture, from our nest to{" "}
            <span className="italic">yours</span>
          </p>
          <Link
            to="/custom-piece"
            className="bg-[#EDE8D8] text-[#503E2D] py-2 px-4 lg:py-4 lg:px-8 rounded-lg text-xl lg:text-2xl font-playfair-display font-semibold text-center cursor-pointer"
            onClick={() => handleContactClick("homepage_hero")}
          >
            Start Your Custom Piece
          </Link>
        </div>
      </section>

      {/* Second Section */}
      <section className="relative w-full h-auto py-20 md:py-22 overflow-hidden text-offwhite">
        <img
          src={toddlerTowerImg}
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center bg-black"
        />
        <div className="absolute inset-0 -z-10 pointer-events-none bg-[radial-gradient(rgba(0,0,0,0)_0%,rgba(0,0,0,0)_0%,white_450%)]"></div>
        <div className="flex flex-col md:flex-row h-full w-full">
          <div className="flex flex-2 md:flex-3 justify-start md:justify-center items-center py-5 px-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair-display italic md:max-w-6/6 lg:max-w-5/6 text-left">
              Furniture Built Around Your Home
            </h1>
          </div>
          <div className="flex flex-3 md:flex-1/4 flex-col font-playfair-display text-lg lg:text-xl px-8 md:pr-8 justify-start md:justify-center items-start gap-5 lg:gap-8 text-left pb-8 md:py-5 *:lg:max-w-11/12 leading-relaxed">
            <p>No two homes are exactly alike.</p>
            <p>
              Every piece is thoughtfully designed around your space, style, and
              how you'll live with it daily.
            </p>
            <p>
              From selecting the right hardwood to the final finish, we create
              furniture that lasts and fits your aesthetic.
            </p>
          </div>
        </div>
      </section>

      {/* Third Section */}
      <section className="bg-offwhite h-auto flex flex-col pt-15 pb-10 border-b-3 border-wood-brown">
        <h2 className="text-wood-brown px-12 pb-5 text-4xl md:text-5xl font-playfair-display">
          Why The Woodlark's Nest?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 flex-auto *:px-12 py-3 text-black font-lato">
          <div className="[&>p]:py-3">
            <h3 className="text-xl font-bold">Designed Around Your Home</h3>
            <p className="max-w-full md:max-w-10/12">
              Each piece is uniquely designed and tailored to your lifestyle and
              vision for your space.
            </p>
          </div>
          <div className="[&>p]:py-3">
            <h3 className="text-xl font-bold">A Personal Experience</h3>
            <p className="max-w-full md:max-w-10/12">
              You work directly with us every step of the way for a seamless
              process.
            </p>
          </div>
          <div className="[&>p]:py-3">
            <h3 className="text-xl font-bold">Built for Everyday Life</h3>
            <p className="max-w-full md:max-w-10/12">
              We use locally sourced, fine hardwoods and time-tested joinery
              methods to ensure your piece lasts a lifetime.
            </p>
          </div>
          <div className="[&>p]:py-3">
            <h3 className="text-xl font-bold">Details Decided Together</h3>
            <p className="max-w-full md:max-w-10/12">
              Designs, dimensions, wood species, and finish options are
              discussed before the build begins, so you feel confident in the
              final piece.
            </p>
          </div>
        </div>
      </section>

      {/* Fourth Section */}
      <section className="bg-white h-auto flex flex-col pt-15 pb-15 border-b-3 border-wood-brown px-8 md:px-12">
        <h2 className="text-wood-brown pb-8 text-4xl md:text-5xl font-playfair-display">
          What It's Like to Work With Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 text-black font-lato">
          {/* Step 1 */}
          <div className="flex flex-col">
            <div className="w-full aspect-video sm:aspect-4/3 overflow-hidden">
              <img
                src={shareVision}
                alt="Client sharing their vision for a custom furniture piece."
                className="h-full w-full object-cover"
              />
            </div>

            <h3 className="mt-5 text-xl font-lato tracking-widest">
              I - Share Your Vision
            </h3>

            <p className="mt-3 text-md leading-relaxed">
              We begin with your ideas, your space, and the way you hope the
              piece will be used. Inspiration photos, rough dimensions, or just
              general concepts are welcome.
            </p>

            <p className="mt-3 text-md leading-relaxed">
              <Link
                to="/custom-piece"
                className="underline underline-offset-4 decoration-1"
                onClick={() => handleContactClick("homepage_what_its_like")}
              >
                Reach out
              </Link>{" "}
              with your ideas, and we will respond within a business day.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col">
            <div className="w-full aspect-video sm:aspect-4/3 overflow-hidden">
              <img
                src={shopDrawings}
                alt="Custom furniture shop drawings."
                className="h-full w-full object-cover"
              />
            </div>

            <h3 className="mt-5 text-xl font-lato tracking-widest">
              II - Design Together
            </h3>

            <p className="mt-3 text-md leading-relaxed">
              Here we shape the details together. You’ll see the design take
              form through sketches, renderings, dimensions, and wood/finish
              options before the build starts.
            </p>

            <p className="mt-3 text-md leading-relaxed">
              Once approved, a 50% deposit secures your spot in our build queue
              and we order all materials for your piece.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col">
            <div className="w-full aspect-video sm:aspect-4/3 overflow-hidden">
              <img
                src={tableTop}
                alt="Custom dining table being built in the workshop."
                className="h-full w-full object-cover"
              />
            </div>

            <h3 className="mt-5 text-xl font-lato tracking-widest">
              III - Build Begins
            </h3>

            <p className="mt-3 text-md leading-relaxed">
              With materials secured, we start building your custom piece. We
              keep you updated with process shots along the way so you can
              follow the build as it comes together.
            </p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col">
            <div className="w-full aspect-video sm:aspect-4/3 overflow-hidden">
              <img
                src={diningTableImg}
                alt="Completed custom dining table in a home."
                className="h-full w-full object-cover"
              />
            </div>

            <h3 className="mt-5 text-xl font-lato tracking-widest">
              IV - Delivery
            </h3>

            <p className="mt-3 text-md leading-relaxed">
              Following completion, we coordinate delivery and placement in your
              home, along with simple care guidance to help it age beautifully.
            </p>
          </div>
        </div>
      </section>

      {/* Fifth Section */}
      <section className="bg-[#2A2C0C] px-6 py-15 text-offwhite">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-12 text-center font-playfair-display text-[clamp(2rem,4vw,2.5rem)]">
            Who We Are
          </h2>

          <div className="text-[clamp(1.05rem,1.6vw,1.3rem)] leading-[1.7] font-lato font-thin">
            {/* Egg image */}
            <img
              src={familyPic}
              alt="Jesus and Dolores"
              className="
          float-left
          mr-[clamp(1rem,2vw,1.5rem)]
          mb-2
          w-[clamp(18rem,34vw,24rem)]
          md:w-[clamp(12rem,28vw,17rem)]
          aspect-3/4
          object-cover
          rounded-[50%/60%_60%_38%_38%]

          [shape-outside:inset(0_round_50%/60%_60%_38%_38%)]

          max-[640px]:float-none
          max-[640px]:mx-auto
          max-[640px]:mb-8
          max-[640px]:block
        "
            />

            <p className="mb-6">
              The Woodlark’s Nest is a small, Hispanic family-owned furniture
              studio in Memphis, Tennessee, shaped by the values we were raised
              with—family, hard work, and care in the details.
            </p>

            <p className="mb-6">
              We're Jesus and Dolores, the couple behind the studio. We both
              grew up in homes where the pieces around us were part of everyday
              life: places to gather, work, rest, and feel connected. That
              belief in home is at the heart of what we build.
            </p>

            <p>
              Every piece is designed and built by hand, one at a time, for
              people who want furniture that feels intentional, lasting, and
              truly their own.
            </p>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/our-story"
              className="bg-[#EDE8D8] text-[#554b3e] py-2 px-4 lg:py-4 lg:px-8 rounded-lg text-xl lg:text-2xl font-playfair-display font-semibold text-center cursor-pointer"
              onClick={() => window.scrollTo(0, 0)}
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </section>
      {/* Sixth Section */}
      <section className="relative w-full h-auto overflow-hidden text-offwhite py-10 md:py-15">
        <img
          src={shoeBench}
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center bg-black"
        />
        <div className="absolute inset-0 -z-10 pointer-events-none bg-[radial-gradient(rgba(0,0,0,0)_0%,rgba(0,0,0,0)_0%,white_850%)]"></div>
        <div className="flex flex-col h-full items-center gap-8 lg:gap-12 px-5 pb-4">
          <h1 className="text-3xl md:text-5xl font-playfair-display text-center">
            Let's Bring Your Ideas Home
          </h1>
          <p className="max-w-14/16 md:max-w-7/13 text-center font-lato text-lg md:text-xl leading-relaxed">
            If you’re considering custom hardwood furniture for your space, we’d
            love to hear from you. Whether you’re starting with a clear vision
            or just a few ideas, we’ll work together to create a piece that fits
            your home and is built with care to last.
          </p>
          <Link
            to="/custom-piece"
            className="bg-[#EDE8D8] text-[#503E2D] py-2 px-4 lg:py-4 lg:px-8 rounded-lg text-xl lg:text-2xl font-playfair-display font-semibold text-center cursor-pointer"
            onClick={() => handleContactClick("homepage_bring_your_ideas_home")}
          >
            Start Your Custom Piece
          </Link>
        </div>
      </section>
    </>
  );
}
