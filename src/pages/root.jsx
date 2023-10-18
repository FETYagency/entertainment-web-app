import Header from "../components/header";
import { Outlet, useLoaderData } from "react-router-dom";
import Search from "../components/searchBar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET, selectContent, selectStatus } from "../services/features/content";
export default function Root() {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  useEffect(() => {
    if (status === "idle") dispatch(GET());
  }, [status]);
  let content;
  if (status === "idle") {
    content = (
      <div class="grid min-h-[500px] place-items-center">
        <section class="dots-container">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </section>
      </div>
    );
  } else if (status === "success") {
    content = <Outlet />;
  }

  return (
    <main className=" min-h-screen bg-[#10141E] md:pt-[24px] xl:pl-[164px] xl:pr-[36px]">
      <Header />
      <section className="m-auto max-w-[343px] px-[16px] pt-[24px] md:max-w-[719px] md:pt-[34px] xl:m-0 xl:max-w-none xl:px-0 xl:pt-0">
        <Search />
        <div className="pb-[61px] pt-[24px] md:pb-[38px] md:pt-[33px] xl:pb-[52px]">
          {content}
        </div>
      </section>
    </main>
  );
}
