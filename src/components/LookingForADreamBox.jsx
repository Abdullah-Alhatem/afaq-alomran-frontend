import React from 'react'
import elementLine from '../assets/LookingForDreamHomeBox/Element.svg'
import houseImage from '../assets/LookingForDreamHomeBox/pexels-binyamin-mellish-1396122-removebg-preview 1.svg'
import vectorOne from '../assets/LookingForDreamHomeBox/Vector 1.svg'
import vectorTwo from '../assets/LookingForDreamHomeBox/Vector 2.svg'

function LookingForADreamBox({ background }) {
  return (
    <section className={`w-full px-4 sm:px-8 lg:px-16 py-10 lg:py-16 bg-[#ECF1F6] ${background}`}>
      <div className="mx-auto w-full max-w-[1288px] overflow-hidden rounded-[32px] bg-primary text-primary-foreground">
        <div className="relative flex flex-col lg:flex-row">
          <div className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block">
            <img
              src={vectorTwo}
              alt=""
              aria-hidden="true"
              className="absolute right-0 top-0 h-[274px] w-[847px] max-w-none opacity-90"
            />
            <img
              src={vectorOne}
              alt=""
              aria-hidden="true"
              className="absolute bottom-0 right-0 h-[208px] w-[434px] max-w-none"
            />
          </div>
          <div className="hidden lg:block lg:max-w-[390px]">
            <img
              src={houseImage}
              alt="Dream home"
              className="h-full w-full object-cover object-left"
            />
          </div>

          <div className="relative flex items-center">
            <div className="relative z-10 w-full px-6 py-7 lg:px-12 lg:py-8">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-6">
                <div className="">
                  <h2 className="text-[32px] leading-10 font-bold lg:text-[40px]">
                    Looking for a{' '}
                    <span className="relative whitespace-nowrap">
                      Dream Home?
                      <img
                        src={elementLine}
                        alt=""
                        aria-hidden="true"
                        className="h-[12px] w-[200px] absolute left-0 bottom-0 object-contain"
                      />
                    </span>
                  </h2>

                  <p className="mt-7 text-body text-primary-foreground/95 lg:mt-6">
                    We can help you relize your dream of a new home
                  </p>
                </div>

                <button
                  type="button"
                  className="w-full whitespace-nowrap rounded-[18px] bg-secondary px-6 py-3 lg:w-fit text-btn font-bold leading-[150%] text-secondary-foreground transition hover:bg-secondary-light lg:rounded-xl"
                >
                  Explore Properties
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LookingForADreamBox
