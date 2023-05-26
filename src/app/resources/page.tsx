/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { RESOURCES } from "@/data";
export default function Page() {
  const sortedArr = RESOURCES.sort((a, b) => a.section.localeCompare(b.section));
  return (
    <main className='mx-auto min-h-screen max-w-3xl px-6  md:max-w-5xl'>
      <div className='py-24 sm:px-28 sm:py-28'>
        <h1 className='text-4xl font-bold text-white md:pb-4 md:text-6xl'>
          Resources<span className="text-lime-500">.</span>
        </h1>
        <p className='text-md pb-4 leading-5 text-neutral-100  sm:text-xl'>
          Some tools/resources I've have compiled along the way that I find very useful.
        </p>
        <div className='mx-auto'>
          <div className='text-semibold divide-y divide-neutral-100 text-neutral-100'>
            {sortedArr.map((item, idx) => {
              const sortedSubArr = item.data.sort((a, b) => a.name.localeCompare(b.name));
              return (
                <details key={idx} className='group'>
                  <summary className='text-secondary-900 flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium'>
                    {item.section}
                    <div className='text-secondary-500'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='1.5'
                        stroke='currentColor'
                        className='block h-5 w-5 transition-all duration-300 group-open:rotate-180'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className='text-secondary-500 pb-4'>
                    <ul className='ml-8 list-disc text-neutral-100 '>
                      {sortedSubArr.map((i, i_idx) => {
                        return (
                          <li key={i_idx} className=''>
                            <p>
                              {" "}
                              <a
                                href={i.link}
                                target='_blank'
                                className='underline hover:text-neutral-400'
                                rel='noreferrer'
                              >
                                {i.name}
                              </a>
                              {" - "}
                              {i.description}
                            </p>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </details>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
