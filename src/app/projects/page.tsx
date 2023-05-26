import React from 'react';
import Link from 'next/link';

import { FEATURED_PROJECTS, ALL_PROJECTS } from '@/data';

export default function Page() {
  interface Project {
    name: string;
    link?: string;
  }

  const sortedArr = ALL_PROJECTS.sort((a, b) =>
    b.section.localeCompare(a.section)
  );

  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6 text-neutral-100 md:max-w-5xl">
      <div className="py-24 sm:px-28 sm:py-28">
        <h1 className="text-4xl font-bold text-white md:pb-4 md:text-6xl">
          Projects<span className="text-lime-500">.</span>
        </h1>
        <p className="pb-4 text-xl text-neutral-300">
          Some side projects I&apos;ve been working on to demonstrate my tech
          stacks. Nothing much at the moment but I will begin to add more in the
          future...
        </p>
        <section>
          <h1 className="mb-4 text-xl font-semibold">Featured Projects</h1>
          <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 md:grid-cols-3 ">
            {FEATURED_PROJECTS.map((item, idx) => {
              return (
                <Link key={idx} href={item.link} target="_blank">
                  <div className="mx-auto max-w-md rounded-lg bg-white shadow hover:bg-neutral-200">
                    <div className="p-4">
                      {item.icon}
                      <h3 className="text-xl mt-1 font-medium text-neutral-900">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-neutral-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="mt-10">
          <h1 className="mb-4 text-xl font-semibold">All Projects</h1>
          <div>
            {sortedArr.map((item, idx) => {
              const sortedSubArr = item.data;
              return (
                <>
                  <h1 className="mb-2 text-lg font-semibold">{item.section}</h1>
                  <div className="text-secondary-500 pb-4 ">
                    <ul className="ml-8 list-disc space-y-2 text-neutral-100">
                      {sortedSubArr.map((i: Project, i_idx) => {
                        return (
                          <li key={i_idx} className="">
                            <p>
                              {i.link ? (
                                <a
                                  href={i.link}
                                  target="_blank"
                                  className="underline hover:text-neutral-300"
                                  rel="noreferrer"
                                >
                                  {i.name}
                                </a>
                              ) : (
                                <a>{i.name}</a>
                              )}
                            </p>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
