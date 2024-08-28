"use client";
import Image from "next/image";
import { useSelector } from "react-redux";
import About from "./components/About";
import Footer from "./components/Footer";
import Practice from "./components/Practice";
import Register from "./components/Register";
import Coursel from "./components/Reusable/Coursel";
import Login from "./components/Reusable/Login";

export default function Home() {
  const isActive = useSelector((state) => state.contextSlice.isActive);
  const isLogin = useSelector((state) => state.contextSlice.isLogin);
  return (
    <section id="home">
      <main className="lg:h-[80vh] bg-gradient-to-b from-[var(--bg-start)] to-[var(--bg-end)] md:px-24 px-8 py-8">
        <div className="md:flex-row flex-col justify-center flex md:pt-10 items-center">
          <div className="md:hidden mb-8">
            <div className="absolute z-0 ml-20">
              <Image src="/feather.png" alt="header" width={150} height={150} />
            </div>
            <div className="relative">
              <Image src="/header.svg" alt="header" width={200} height={200} />
            </div>
          </div>

          <div className="space-y-3 mx-auto md:block">
            <p className="text-center md:text-start">
              GET FIERCE LEGAL SUPPORT
            </p>
            <h1 className="md:text-[44px] text-[34px] text-center md:text-start lg:w-[50%] leading-tight">
              We Provide The Best Possible
              <span className="text-[var(--brown-color)] font-bold">
                {" "}
                Legal Services
              </span>
            </h1>
            <p className="md:w-[60%] md:hidden text-center ">
              Experience unparalleled legal expertise tailored to your needs.
              Let our dedicated team of professionals guide you through every
              legal challenge with confidence and care.
            </p>
            <p className="md:w-[60%] hidden md:block md:text-justify text-center ">
              Experience unparalleled legal expertise tailored to your needs.
              Let our dedicated team of professionals guide you through every
              legal challenge with confidence and care. Discover the best
              possible legal services today—your peace of mind is our priority
            </p>

            <button class="smky-btn3 pt-4 relative md:block hidden hover:text-white py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-[var(--brown-color)] after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-[var(--dark)]">
              Contact Us
            </button>
          </div>

          <div className="hidden md:block lg:hidden">
            <div className="absolute z-0 ml-32 mt-5">
              <Image src="/feather.png" alt="header" width={200} height={300} />
            </div>
            <div className="relative z-50">
              <Image src="/header.svg" alt="header" width={1200} height={700} />
            </div>
          </div>
          {/* -------------------------------------------------------------------- */}
          <div className="hidden lg:block">
            <div className="absolute z-0 ml-32 mt-5">
              <Image src="/feather.png" alt="header" width={236} height={230} />
            </div>
            <div className="relative z-50">
              <Image src="/header.svg" alt="header" width={610} height={590} />
            </div>
          </div>
        </div>
      </main>

      <About />
      <Practice />
      <Coursel />
      <Footer />
      {isActive && <Register />}
      {isLogin && <Login />}
    </section>
  );
}
