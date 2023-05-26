import Image from 'next/image';

export default function Page() {
  return (
    <main className="mx-auto min-h-screen text-left">
      <div className="px-8 py-64 sm:px-28 md:px-64 md:py-52">
        <h1 className="pb-4 text-4xl text-white md:text-6xl">
          Hi, I&apos;m <span className="font-bold text-lime-500">Mayo</span>
        </h1>
        <p className="text-xl font-semibold text-white md:pb-1 md:text-3xl">
          Welcome to my portfolio!
        </p>
        <br />
        <p className="text-lg  text-neutral-300  md:text-xl">
          Built with{' '}
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-lime-600 no-underline hover:underline"
          >
            Next.js 13
          </a>{' '}
          and their new{' '}
          <a
            href="https://nextjs.org/blog/next-13-4"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-lime-600 no-underline hover:underline"
          >
            App Router
          </a>,{' '}
          this site showcases my work and skills. As I continue to enhance and upgrade it over time, you can expect lightning-fast loading times, responsive design that adapts to any device, and engaging interactive features.
        </p>
      </div>
    </main>
  );
}
