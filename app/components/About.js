import Image from "next/image";
import React from "react";

function About() {
  return (
    <section id="about">
      <div className="bg-[var(--secondary)] md:py-20 py-10 md:px-24 px-8">
        <div className="absolute right-0 top-[90%]">
          <Image src="/right.svg" alt="header" width={217} height={230} />
        </div>
        <div className="my-14">
          <div className="flex gap-4 text-[var(--dark-color)] items-center font-semibold">
            <h1 className="text-[20px]">About</h1>
            <p className="w-[30%] h-[1px] bg-[var(--border-color)]"></p>
          </div>

          <div className="leading-7 text-justify md:flex justify-between">
            <div className="text-[var(--dark-color)] py-6 md:w-[50%] space-y-4">
              <p>
                DLawNet, is located at Golan Height Place, Airport Road Abuja,
                Nigeria, they helps clients across the state with estate
                planning, probate and trust administration, and litigation
                matters. Our boutique firm allows for a personalized experience
                so we can focus on you and your family’s legal needs. We’re
                dedicated to protecting your personal and business assets so
                your future is well planned.
              </p>
              <p>
                Trust your legal matters to a team of diligent advocate prepared
                to provide your case with the personalized attention it truly
                deserves. Learn more about qualified team of attorneys, their
                experience and qualifications.
              </p>
              <div className="text-right p-3 bg-[var(--nav-color)] my-4">
                <p className="border text-white scale-100 hover:scale-105 transition-all duration-500 w-fit px-2 flex justify-end shadow-lg ml-auto cursor-pointer">
                  Read More
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="md:grid md:grid-cols-2 hidden">
                <Image
                  className="hover:scale-105 duration-300 transition-all"
                  src="/image3.svg"
                  alt="header"
                  width={170}
                  height={170}
                />
                <Image
                  className="hover:scale-105 duration-300 transition-all"
                  src="/image1.svg"
                  alt="header"
                  width={170}
                  height={170}
                />
                <Image
                  className="hover:scale-105 duration-300 transition-all"
                  src="/image5.svg"
                  alt="header"
                  width={150}
                  height={150}
                />
                <Image
                  className="hover:scale-105 duration-300 transition-all"
                  src="/image4.svg"
                  alt="header"
                  width={170}
                  height={170}
                />
              </div>

              <div>
                <div className="w-7 h-7 ml-7 bg-[var(--nav-color)] shadow-lg drop-shadow"></div>
                <div className="w-7 h-7 bg-[var(--nav-color)] shadow-lg drop-shadow"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute md:top-[160%] top-[150%] left-4 mb-24">
          <Image src="/left.svg" alt="header" width={217} height={230} />
        </div>
      </div>
    </section>
  );
}

export default About;
