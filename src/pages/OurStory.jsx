import ShareYourVision from "../components/ShareYourVision";
import woodlarkFamily2 from "../assets/woodlark-family-2.jpg";
import OurStorySections from "../components/OurStorySections";
import useDocumentTitle from "../hooks/useDocumentTitle";

const paragraphOne = [
  <>
    We are Jesus and Dolores, the husband-and-wife team behind The Woodlark’s
    Nest. I was born and raised in Memphis and Dolores has called it home since
    she was four. This is where we grew up, started our family, and began
    building pieces that made our home feel truly ours.
  </>,
  <>
    We moved in together in 2021, young and excited to make a place of our own.
    When we learned we were expecting our son, that desire to make our house
    feel like home became even stronger.
  </>,
  <>
    Slowly I started building pieces for our home and falling in love with the
    craft. What started as a fun way to improve our space became something
    deeper. I found myself drawn to the character of hardwood, the
    problem-solving behind each build, and the satisfaction of creating strong,
    beautiful pieces that Dolores loved because they made our home feel more
    like us.
  </>,
  <em>That feeling is what we want to share with others.</em>,
];

const paragraphTwo = [
  <>
    We grew up in Memphis homes shaped by family and hard work. Meals were a
    time to slow down, reconnect, and remember what mattered most. That belief
    in home translates to how we think about furniture today.
  </>,
  <>
    We believe furniture should do more than just fill a room. It should bring
    warmth and a sense of belonging to your home. There’s a lot of cheap,
    mass-manufactured furniture out there that fails too soon, so we want to
    offer something better: solid hardwood pieces built to last and made just
    for you.
  </>,
];

const paragraphThree = [
  <>
    Every project is designed and built one piece at a time. We care about
    proportion, strength, wood selection, finish, and all the small details that
    make a piece feel truly yours. Our goal is for you to feel excited and
    confident throughout the process, knowing your furniture is being made with
    thought and care from beginning to end.
  </>,
];

const paragraphFour = [
  <>
    We are grateful for every single person who chooses to support our small,
    local studio. More than anything, we hope each finished piece reflects the
    people it is made for and becomes part of a home they are happy to return to
    every day.
  </>,
];

export default function OurStory() {
  useDocumentTitle("Our Story — The Woodlark's Nest");
  return (
    <>
      <section className="bg-offwhite h-auto py-8">
        <h1 className="font-playfair-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-wood-brown text-center tracking-wide px-8 md:px-12">
          Our Story
        </h1>
        <img
          src={woodlarkFamily2}
          alt="Avalos Family Picture"
          className="w-screen max-h-175 object-bottom object-cover mt-8 mb-15 aspect-auto"
        />
        <OurStorySections
          header="From Our Nest to Yours"
          paragraphs={paragraphOne}
        />
        <OurStorySections header="Why We Build" paragraphs={paragraphTwo} />
        <OurStorySections header="Made With Care" paragraphs={paragraphThree} />
        <OurStorySections header="Thank You" paragraphs={paragraphFour} />
      </section>
      <ShareYourVision ctaLocation="our_story_cta" />
    </>
  );
}
