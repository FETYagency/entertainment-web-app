import TrendingFigure from "./ui/TrendingFigure";
export default function Trendings({ data }) {
  return (
    <section className="mb-[39px] w-full">
      <h2 className="mb-[16px] text-[20px] font-light leading-normal tracking-[-0.312px] text-white md:mb-[24px] md:text-[32px] md:tracking-[-0.5px]">
        Trending
      </h2>
      <div className="hideScrollbars flex gap-[16px] overflow-x-scroll md:gap-[40px]">
        {data.map((per) => {
          return <TrendingFigure data={per} />;
        })}
      </div>
    </section>
  );
}
