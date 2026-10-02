import missionStyleShoeBench from "../assets/woodlark-mission-style-shoe-bench.jpg";
import shoeBench from "../assets/woodlark-shoe-bench.jpg";
import PortfolioPieceCard from "../components/PortfolioPieceCard";
import diningTableImg from "../assets/woodlark-dining-table.webp";
import toddlerTowerTwo from "../assets/woodlark-toddler-tower-2.jpg";
import ShareYourVision from "../components/ShareYourVision";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function Portfolio() {
  useDocumentTitle("Portfolio — The Woodlark's Nest");

  return (
    <>
      <section className="bg-offwhite h-auto px-8 md:px-12 py-8 ">
        <h1 className="font-playfair-display text-4xl pb-5 text-wood-brown">
          Portfolio
        </h1>
        <div className="grid grid-cols-2 gap-4 md:gap-5">
          <div className="flex flex-col gap-2 md:gap-5">
            <PortfolioPieceCard
              img={missionStyleShoeBench}
              description="Mission Style Shoe Bench • White Oak"
              alt="Mission Style Shoe Bench • White Oak"
              projectID="mission_style_shoe_bench"
              projectType="shoe_bench"
              woodSpecies="white_oak"
            />
            <PortfolioPieceCard
              img={shoeBench}
              description="Mission Style Shoe Bench • White Oak"
              alt="Mission Style Shoe Bench • White Oak"
              projectID="mission_style_shoe_bench"
              projectType="shoe_bench"
              woodSpecies="white_oak"
            />
          </div>
          <div className="flex flex-col gap-2 md:gap-5">
            <PortfolioPieceCard
              img={diningTableImg}
              description="Mission Style Dining Table • White Oak"
              alt="Mission Style Dining Table • White Oak"
              projectID="mission_style_dining_table"
              projectType="dining_table"
              woodSpecies="white_oak"
            />
            <PortfolioPieceCard
              img={toddlerTowerTwo}
              description="Toddler Tower • Cherry"
              alt="Toddler Tower • Cherry"
              projectID="toddler_tower"
              projectType="toddler_tower"
              woodSpecies="cherry"
            />
          </div>
        </div>
      </section>
      <ShareYourVision ctaLocation="portfolio_cta" />
    </>
  );
}
