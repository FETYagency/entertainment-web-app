import Figure from "./ui/figure";
export default function Posts({ content, h }) {
  return (
    <section>
      <h2 className="mb-[16px] text-[20px] font-light leading-normal tracking-[-0.312px] text-white md:mb-[24px] md:text-[32px] md:tracking-[-0.5px] xl:mb-[32px]">
        {h}
      </h2>
      <div className=" grid grid-cols-2 gap-[16px] text-white  md:grid-cols-3 md:gap-[24px_30px] xl:max-w-[1240px] xl:grid-cols-4">
        {content.map((per) => {
          return <Figure data={per} />;
        })}
      </div>
    </section>
  );
}
