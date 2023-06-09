import TextLoop from '@/components/ui/text-loop';

export default function Page() {
  const loopItems = [
    'Software Engineer',
    'Front-end Developer',
    'ML/AI Enthusiast',
    'Meme Scientist',
  ];

  return (
    <main className="mx-auto min-h-screen text-left">
      <div className="px-8 py-64 sm:px-28 md:px-64 md:py-52">
        <h1 className="pb-4 text-4xl text-white md:text-6xl">
          Hi, I&apos;m <span className="font-bold">Mayo</span>
        </h1>
        <p className={`text-xl text-white md:text-3xl`}>
          <TextLoop loopItems={loopItems} delay={3000} />
        </p>
        <p className="mt-8 text-xl font-semibold text-white md:pb-1 md:text-3xl">
          Welcome to my portfolio!
        </p>
        <p className="text-lg mt-2 text-neutral-300  md:text-xl">
          Built with{' '}
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline hover:text-neutral-400"
          >
            Next.js 13
          </a>{' '}
          and their new{' '}
          <a
            href="https://nextjs.org/blog/next-13-4"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline hover:text-neutral-400"
          >
            App Router
          </a>
          , this site showcases my work and skills. As I continue to enhance and
          upgrade it over time, you can expect lightning-fast loading times,
          responsive design that adapts to any device, and engaging interactive
          features.
        </p>
      </div>
    </main>
  );
}
