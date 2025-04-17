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
        <div className="slide-container w-full">
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
      <div 
        style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          paddingTop: '40px', 
          paddingBottom: '40px', 
          paddingInline: '20px',
          rowGap: '20px,' 
        }}>
          <h3 style={{ fontWeight: 'bold' }}>Projects</h3>
          <div 
            style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              flexDirection: 'row', 
              rowGap: '50px',
              justifyContent: 'space-between' 
            }}>
            <div style={{ flex: '50%', paddingInline: '12px' }}>
              <img 
                src="/images/gallery/gtllmzoo.gif" 
                style={{ 
                  height: '500px',
                  borderRadius: '8px'
                }} 
              />
              <div 
                style={{ 
                  alignItems: 'center',
                  display: 'flex', 
                  fontWeight: 'bold', 
                  fontSize: '24px',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingInline: '4px',
                  marginTop: '4px',
                  marginBottom: '4px',
                }}>
                GTLLMZoo
                <div style={{ display: 'flex', gap: '12px' }}>
                  <div 
                    style={{ 
                      backgroundColor: 'rgba(0, 150, 255, 0.3)',
                      border: '2px solid dodgerblue', 
                      borderRadius: '48px',
                      color: 'dodgerblue', 
                      fontSize: '12px',
                      paddingInline: '14px',
                    }}>
                      UNDER MENTORSHIP
                  </div>
                  <div 
                    style={{ 
                      backgroundColor: 'rgba(3, 192, 60, 0.3)',
                      border: '2px solid green', 
                      borderRadius: '48px',
                      color: 'green', 
                      fontSize: '12px',
                      paddingInline: '14px',
                    }}>
                      IN PROGRESS
                  </div>
                </div>
              </div>
              <div>
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames 
                ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, 
                tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. 
                Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit 
                amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum 
                sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget 
                {/* tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac 
                dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, 
                neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros 
                eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, 
                facilisis luctus, metus */}
              </div>
            </div>
            <div style={{ flex: '50%', paddingInline: '12px' }}>
              <img 
                src="/images/gallery/bitcoin.jpg" 
                style={{ 
                  height: '500px',
                  borderRadius: '8px'
                }} 
              />
              <div 
                style={{ 
                  alignItems: 'center',
                  display: 'flex', 
                  fontWeight: 'bold', 
                  fontSize: '24px',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingInline: '4px',
                  marginTop: '4px',
                  marginBottom: '4px',
                }}>
                  RiceQuant
                <div style={{ display: 'flex', gap: '12px' }}>
                  <div 
                    style={{ 
                      backgroundColor: 'rgba(0, 150, 255, 0.3)',
                      border: '2px solid dodgerblue', 
                      borderRadius: '48px',
                      color: 'dodgerblue', 
                      fontSize: '12px',
                      paddingInline: '14px',
                    }}>
                      INTERNSHIP
                  </div>
                  <div 
                    style={{ 
                      backgroundColor: 'rgba(3, 192, 60, 0.3)',
                      border: '2px solid green', 
                      borderRadius: '48px',
                      color: 'green', 
                      fontSize: '12px',
                      paddingInline: '14px',
                    }}>
                      COMPLETE
                  </div>
                </div>
              </div>
              <div>
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames 
                ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, 
                tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. 
                Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit 
                amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum 
                sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget 
                {/* tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac 
                dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, 
                neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros 
                eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, 
                facilisis luctus, metus */}
              </div>
            </div>
            <div style={{ flex: '50%', paddingInline: '12px' }}>
              <img 
                src="/images/gallery/gradio.gif" 
                style={{ 
                  height: '500px',
                  borderRadius: '8px'
                }} 
              />
              <div 
                style={{ 
                  alignItems: 'center',
                  display: 'flex', 
                  fontWeight: 'bold', 
                  fontSize: '24px',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingInline: '4px',
                  marginTop: '4px',
                  marginBottom: '4px',
                }}>
                  Annotator
                <div style={{ display: 'flex', gap: '12px' }}>
                  <div 
                    style={{ 
                      backgroundColor: 'rgba(0, 150, 255, 0.3)',
                      border: '2px solid dodgerblue', 
                      borderRadius: '48px',
                      color: 'dodgerblue', 
                      fontSize: '12px',
                      paddingInline: '14px',
                    }}>
                      UNDER MENTORSHIP
                  </div>
                  <div 
                    style={{ 
                      backgroundColor: 'rgba(3, 192, 60, 0.3)',
                      border: '2px solid green', 
                      borderRadius: '48px',
                      color: 'green', 
                      fontSize: '12px',
                      paddingInline: '14px',
                    }}>
                      IN PROGRESS
                  </div>
                </div>
              </div>
              <div>
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames 
                ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, 
                tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. 
                Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit 
                amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum 
                sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget 
                {/* tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac 
                dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, 
                neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros 
                eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, 
                facilisis luctus, metus */}
              </div>
            </div>
            <div style={{ flex: '50%', paddingInline: '12px' }}>
              <img 
                src="/images/gallery/data_mining_graph.jpg" 
                style={{ 
                  height: '500px',
                  borderRadius: '8px',
                  width: '100%',
                }} 
              />
              <div 
                style={{ 
                  alignItems: 'center',
                  display: 'flex', 
                  fontWeight: 'bold', 
                  fontSize: '24px',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingInline: '4px',
                  marginTop: '4px',
                  marginBottom: '4px',
                }}>
                  Data Mining
                <div style={{ display: 'flex', gap: '12px' }}>
                  <div 
                    style={{ 
                      backgroundColor: 'rgba(0, 150, 255, 0.3)',
                      border: '2px solid dodgerblue', 
                      borderRadius: '48px',
                      color: 'dodgerblue', 
                      fontSize: '12px',
                      paddingInline: '14px',
                    }}>
                      RESEARCH MENTORSHIP
                  </div>
                  <div 
                    style={{ 
                      backgroundColor: 'rgba(3, 192, 60, 0.3)',
                      border: '2px solid green', 
                      borderRadius: '48px',
                      color: 'green', 
                      fontSize: '12px',
                      paddingInline: '14px',
                    }}>
                      COMPLETE
                  </div>
                </div>
              </div>
              <div>
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames 
                ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, 
                tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. 
                Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit 
                amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum 
                sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget 
              </div>
            </div>
          </div>
      </div>
      <div style={{ display: 'flex' }}>
        <ImageCarousel />
      </div>
    </>
  );
}