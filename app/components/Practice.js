import Image from "next/image";
import React from "react";

function Practice() {
  return (
    <div className="bg-[var(--secondary-light)] md:px-24 px-8 pt-14">
      <div className="mt-14">
        <div className="text-[var(--dark-color)] items-center mt-20">
          <div className="flex justify-center text-center flex-col items-center space-y-3">
            <h1 className="md:text-[40px] text-[36px] md:w-[40%] font-bold">
              We’re Advocates for Justice and Right
            </h1>
            <p className="md:w-[60%] py-2">
              Stand with those who stand for justice. At our firm, we champion
              your rights with unwavering dedication and integrity. Trust us to
              be your advocates in the pursuit of fairness and justice—your
              cause is our commitment.
            </p>
          </div>
          <div className="grid md:grid-cols-4 grid-cols-2 text-center justify-center pt-8 md:px-24 items-center space-x-8 ">
            <div className="flex flex-col border-r-2 border-[var(--dark-color)] items-center">
              <p className="font-semibold md:text-[44px] text-[30px] text-[var(--dark-color)]">
                100%
              </p>
              <p>Cases Solved</p>
            </div>
            <div className="flex flex-col border-r-2 pr-2 border-[var(--dark-color)] items-center">
              <p className="font-semibold md:text-[44px] text-[30px] text-[var(--dark-color)]">
                70+
              </p>
              <p>Happy Clients</p>
            </div>
            <div className="flex flex-col border-r-2 border-[var(--dark-color)] items-center">
              <p className="font-semibold md:text-[44px] text-[30px] text-[var(--dark-color)]">
                62+
              </p>
              <p>Client Reviews</p>
            </div>
            <div className="flex flex-col border-[var(--dark-color)] md:border-r-0 border-r-2 items-center">
              <p className="font-semibold md:text-[44px] text-[30px] text-[var(--dark-color)]">
                150
              </p>
              <p>Working Hours</p>
            </div>
          </div>
        </div>
        <div className="ml-[-6rem] md:hidden mt-[-8rem]">
          <Image src="/practice.svg" alt="header" width={120} height={120} />
        </div>
        <div className="ml-[-6rem] hidden md:block mt-[-12rem]">
          <Image src="/practice.svg" alt="header" width={220} height={230} />
        </div>
      </div>
    </div>
  );
}

export default Practice;
