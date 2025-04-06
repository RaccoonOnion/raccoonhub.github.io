import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { ReactTyped } from "react-typed";

import ImageCarousel from "./ImageCarousel";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    if (location.hash === "#contact") {
      router.push("/gdpr");
    }
  }, []);

  return (
    <>
      <div className="pt-20 md:pt-0 full-container md:h-screen w-full md:flex flex-col items-center justify-end text-center relative child:absolute">
        <div className="slide-container">
          <picture>
            <img
              src={"/images/gallery/raccoon_hub_wallpaper.png"}
              className="object-cover  h-full w-full"
            />
          </picture>
        </div>
        <div style={{ paddingBottom: '60px' }} className="flex items-center justify-center w-full flex-col">
          <div className="w-auto md:pb-0 flex flex-col md:flex-row items-center gap-4 px-4 overflow-x-hidden">
            <div className="bg-sky text-paper border-white border p-3">
              <div className="flex justify-center">
                <h1 className="text-6xl md:text-6xl font-bold">Raccoon Hub</h1>
              </div>
              <p className="italic pb-3">
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          background: 'black'
        }}
      >
        <p style={{ color: 'white', display: 'flex', justifyContent: 'center', padding: '40px' }}>
          <ReactTyped strings={[
            "useEffect(() => trainModel(), [insight])",
            "Where Full-Stack Development Meets Machine Learning.",
            "404: Boring projects not found.",
            "Code on the front, logic in the back — and LLMs in between.",
            "Crafting End-to-End Experiences, Powered by Data.",
            "Reacting to data, predicting the future.",
          ]} typeSpeed={80} loop />
        </p>
      </div>
      <div style={{ display: 'flex' }}>
        <ImageCarousel />
      </div>
    </>
  );
}