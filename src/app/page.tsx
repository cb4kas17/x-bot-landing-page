"use client";
import { MoveRight } from "lucide-react";
import { Inter } from "next/font/google";
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export default function Home() {
  const logoText = "X AI BOT";
  const heroText = "X AI BOT";
  const description1stLine = "A combination of modern streetwear with";
  const description2ndLine = "advanced technological wearables, for a unique";
  const description3rdLine = "Discover";
  const promoTitle = "NEW RELEASE";
  const promoDescription = "This is concept art using artificial technology & Photoshop";
  const primaryButtonText = "Discover";

  // images
  const mainImageDesktop = "/images/side-view-btc.png";
  const mainImageMobile = "/images/front-view.png";
  const firstImage = "/images/front-view-with-bg.png";
  const secondImage = "/images/side-view-with-bg.png";
  const thirdImage = "/images/side-view-with-bg.png";
  const fourthImage = "/images/front-view-with-bg.png";

  return (
    <main className={`${inter.variable} bg-[#2f2b3c]`}>
      <div
        className="relative h-full min-h-screen w-full overflow-x-hidden flex overflow-y-auto lg:overflow-y-hidden"
        style={{ background: "linear-gradient(to top, rgba(0, 0, 0, 0.4) 20%, #2F2B3C 100%)" }}>
        {/* Mobile  */}
        <div className="lg:hidden relative w-full h-screen overflow-y-auto z-20">
          {/* Mobile header */}
          <div className="flex items-center justify-between p-6 fixed w-full top-0 z-20">
            <div className="flex gap-1 flex-col items-start w-fit">
              <span className="h-0.5 w-5 bg-white rounded"></span>
              <span className="h-0.5 w-3.5 bg-white rounded"></span>
              <span className="h-0.5 w-5 bg-white rounded"></span>
            </div>
            <p className="text-4xl font-bold">{logoText}</p>
          </div>

          {/* Mobile content */}
          <div className="z-20 h-screen flex items-center justify-center">
            <div className="z-20 w-full flex items-center justify-center py-6 bg-[#555162] bg-opacity-70 backdrop-blur-sm z-20s">
              <h1 className="text-[80px] font-bold z-20">{heroText}</h1>
            </div>
          </div>

          {/* Mobile main content */}
          <div className="w-full  px-4">
            <div className="w-full rounded-[50px] mt-4 backdrop-blur-3xl relative z-20 px-12 py-20">
              <div className="flex flex-col items-center">
                <p className="text-4xl font-bold text-[#E0E0E2] mb-4">{logoText}</p>
                <p className="font-medium text-[#B5B4BC]">{description1stLine}</p>
                <p className="font-medium text-[#B5B4BC]">{description2ndLine}</p>
                <p className="font-medium text-[#B5B4BC]">style</p>
                <button className="rounded-full border-2 w-40 flex items-center p-0.5 border-white mt-16">
                  <p className="flex-1 text-center">{description3rdLine}</p>
                  <div className="size-10 bg-gradient-to-t from-[#9D0DDB] to-[#EF37DF] rounded-full self-end flex items-center justify-center">
                    <MoveRight className="size-5" />
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className="w-full px-2 z-40 flex flex-col gap-4 my-20">
            <img
              src={firstImage}
              alt="Top Left"
              className="object-cover object-center rounded-[30px] z-20 h-[300px]"
            />

            <img
              src={secondImage}
              alt="Top Right"
              className="object-cover rounded-[30px] z-20 h-[300px]"
            />

            <img
              src={thirdImage}
              alt="Bottom Left"
              className="object-cover rounded-[30px] z-20 h-[300px]"
            />

            <img
              src={fourthImage}
              alt="Bottom Right"
              className="object-cover rounded-[30px] z-20 h-[300px]"
            />
          </div>

          {/* Promo */}
          <div className="w-full h-52 rounded-tr-[100px] bg-[#403A4C] flex p-2 pb-0 overflow-hidden z-30">
            <div className="w-[65%] flex-shrink-0 px-2 flex flex-col justify-center gap-2  z-20">
              <p className="text-[#98989D] font-semibold text-lg">{promoTitle}</p>
              <p className="text-[#8B8B91] font-semibold">{promoDescription}</p>
              <button className="rounded-full border-2 w-48 flex items-center p-0.5 border-white mt-2">
                <p className="flex-1 text-center">{description3rdLine}</p>
                <div className="size-10 bg-gradient-to-t from-[#9D0DDB] to-[#EF37DF] rounded-full self-end flex items-center justify-center">
                  <MoveRight className="size-5" />
                </div>
              </button>
            </div>

            {/* images */}
            <div className="w-[35%] flex-shrink-0 overflow-hidden  z-20">
              <img
                src={firstImage}
                alt="Top Left"
                className="object-cover object-center w-full h-full rounded-tr-[90px]  z-20"
              />
            </div>
          </div>
          {/* Mobile Background Image */}
          <img
            src={mainImageMobile}
            alt="Background Image"
            className="lg:hidden fixed top-20 bottom-0 left-0 right-0 w-full h-full -z-10 pointer-events-none object-cover"
          />
        </div>

        {/* Large screens */}

        {/* Main image */}
        <img
          src={mainImageDesktop}
          alt="Top Left"
          className="flex-grow hidden top-20 lg:flex object-contain absolute bottom-0 w-full h-full"
        />
        {/* Left content */}
        <div className="flex-1 relative mt-6 pl-16 flex-col hidden lg:flex">
          <p className="text-4xl font-bold absolute">{logoText}</p>
          <h1 className="text-[120px] font-bold my-auto pb-32 pl-10">{heroText}</h1>
          <div className="absolute bottom-0 left-0 w-[600px] h-52 rounded-tr-[100px] bg-[#403A4C] flex p-2 pb-0 overflow-hidden">
            <div className="w-[65%] flex-shrink-0 px-8 flex flex-col justify-center gap-2">
              <p className="text-[#98989D] font-semibold text-lg">{promoTitle}</p>
              <p className="text-[#8B8B91] font-semibold">{promoDescription}</p>
              <button className="rounded-full border-2 w-48 flex items-center p-0.5 border-white mt-2">
                <p className="flex-1 text-center">{primaryButtonText}</p>
                <div className="size-10 bg-gradient-to-t from-[#9D0DDB] to-[#EF37DF] rounded-full self-end flex items-center justify-center">
                  <MoveRight className="size-5" />
                </div>
              </button>
            </div>

            {/* Image */}
            <div className="w-[35%] flex-shrink-0 overflow-hidden">
              <img
                src={firstImage}
                alt="Top Left"
                className="object-cover object-center w-full h-full rounded-tr-[90px]"
              />
            </div>
          </div>
        </div>
        {/* Right content */}
        <div className=" basis-72 bg-[#555162] hidden lg:flex flex-col relative">
          <div className="flex items-center gap-4 self-center ml-10 mt-6">
            <p className="font-inter font-medium text-lg">MENU</p>
            <div className="gap-1 flex flex-col items-end w-fit">
              <span className="h-1 w-6 bg-white rounded"></span>
              <span className="h-1 w-3.5 bg-white rounded"></span>
              <span className="h-1 w-6 bg-white rounded"></span>
            </div>
          </div>
          <div className="absolute bottom-10 right-0 w-[173%] h-[850px] rounded-tl-[120px] rounded-bl-[120px] bg-opacity-80 bg-[#7F7C88] top-1/2 transform -translate-y-1/2 mt-4 backdrop-blur-sm">
            <div className="px-12 pt-24">
              <p className="text-4xl font-bold text-[#E0E0E2] mb-4">{logoText}</p>
              <p className="font-medium text-[#B5B4BC]">{description1stLine}</p>
              <p className="font-medium text-[#B5B4BC]">{description2ndLine}</p>
              <p className="font-medium text-[#B5B4BC]">style</p>
              <button className="rounded-full border-2 w-40 flex items-center p-0.5 border-white mt-16">
                <p className="flex-1 text-center">{primaryButtonText}</p>
                <div className="size-10  bg-gradient-to-t from-[#9D0DDB]  to-[#EF37DF] rounded-full self-end flex items-center justify-center">
                  <MoveRight className="size-5" />
                </div>
              </button>
            </div>
            <div className="absolute bottom-0 w-[85%] h-[50%] border-8 border-[#f4f4f4] rounded-[100px] overflow-hidden">
              {/* Horizontal Line */}
              <div className="absolute inset-0 w-full h-[8px] bg-[#f4f4f4] top-1/2 -translate-y-1/2 z-20"></div>
              {/* Vertical Line */}
              <div className="absolute inset-0 h-full w-[8px] bg-[#f4f4f4] left-1/2 -translate-x-1/2 z-20"></div>

              {/* Top-left Image */}
              <img
                src={firstImage}
                alt="Top Left"
                className="absolute top-0 left-0 w-1/2 h-1/2 object-cover object-center"
              />

              {/* Top-right Image */}
              <img
                src={secondImage}
                alt="Top Right"
                className="absolute top-0 right-0 w-1/2 h-1/2 object-cover"
              />

              {/* Bottom-left Image */}
              <img
                src={thirdImage}
                alt="Bottom Left"
                className="absolute bottom-0 left-0 w-1/2 h-1/2 object-cover"
              />

              {/* Bottom-right Image */}
              <img
                src={fourthImage}
                alt="Bottom Right"
                className="absolute bottom-0 right-0 w-1/2 h-1/2 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
