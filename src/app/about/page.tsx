import React from 'react';
import Image from 'next/image';
import { EXPERIENCE } from '@/data';

export default function Page() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6 text-left md:max-w-5xl">
      <div className="flex flex-col space-y-4 py-24 sm:px-28 sm:py-28 md:space-y-0  ">
        <h1 className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-4xl font-bold text-transparent text-white md:pb-4 md:text-6xl">
          About Me.
        </h1>
        <div className="flex flex-col space-y-5 sm:items-center sm:justify-center  md:flex-row md:space-y-0 md:space-x-4  ">
          <div className="md:mt-2 md:w-1/2">
            <Image
              src="/headshot.png"
              alt=""
              width={350}
              height={350}
              className="rounded-lg shadow-2xl "
            />
          </div>
          <div className="text-neutral-100 md:mt-2 md:w-1/2">
            <p className="text-lg leading-7 ">
              Hi, my name is{' '}
              <span className="font-semibold">Vinh (Mayo) Nguyen</span>.
              <br />I am a software engineer and developer based in Ho Chi Minh,
              Vietnam.
            </p>
            <br />
            <p className="text-lg leading-7">
              I graduated with a B.Sc. in Computer Science from Frankfurt
              University of Applied Sciences in 2020 and have been working in
              the field ever since.
            </p>
            <br />
            <p className="text-lg leading-7">
              On my free time I like to browse reddit, play games and learn
              niche computer stuff. I am always seeking new experiences and love
              to keep myself engaged.
            </p>
          </div>
        </div>

        <div className="flex flex-col pt-16">
          <h1 className="mb-4 text-3xl font-bold text-neutral-100">Career</h1>
          <ol className="relative border-l border-neutral-100">
            {EXPERIENCE.map((item, idx) => {
              return (
                <li key={idx} className="mb-10 ml-4">
                  <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-neutral-100 "></div>

                  <h3 className="text-xl font-semibold text-neutral-100 ">
                    {item.role}
                  </h3>
                  {item.organization && (
                    <p className="text-neutral-100 ">
                      <a
                        href={item.link}
                        className="font-medium underline hover:text-neutral-400"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {item.organization}
                      </a>
                      <span className="text-md text-neutral-300">
                        {' • '} {item.location}
                      </span>
                    </p>
                  )}

                  <p className="text-neutral-300">
                    <span className="text-md text-neutral-300">
                      {item.period}
                    </span>

                    {' • '}
                    {item.time}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </main>
  );
}
