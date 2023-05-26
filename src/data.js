import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineUser,
  AiOutlineFileText,
} from 'react-icons/ai';

import { FaSteam } from 'react-icons/fa';

export const SOCIALS = [
  {
    link: 'https://github.com/vinh1911',
    icon: (
      <AiOutlineGithub
        className="cursor-pointer text-white transition-transform hover:-translate-y-1 "
        size={25}
      />
    ),
  },
  {
    link: 'https://www.linkedin.com/in/mayo1911',
    icon: (
      <AiOutlineLinkedin
        className="cursor-pointer text-white transition-transform hover:-translate-y-1"
        size={25}
      />
    ),
  },
  {
    link: 'https://steamcommunity.com/id/captainmayo97',
    icon: (
      <FaSteam
        className="cursor-pointer text-white transition-transform hover:-translate-y-1"
        size={25}
      />
    ),
  },
];

export const EXPERIENCE = [
  {
    role: 'Career Break',
    period: 'Jun 2022 - now',
    time: '1 yr',
  },
  {
    role: 'Front-end Web Developer',
    organization: 'ROSEN Group',
    location: 'Ho Chi Minh, Vietnam',
    period: 'Jul 2019 - Jun 2022',
    time: '3 yrs',
    link: 'https://www.rosen-group.com/',
  },
  {
    role: 'Front-end Web Developer - Intern',
    organization: 'ROSEN Group',
    location: 'Ho Chi Minh, Vietnam',
    period: 'Feb 2019 - Jul 2019',
    time: '5 mos',
    link: 'https://www.rosen-group.com/',
  },
];

export const FEATURED_PROJECTS = [
  {
    name: 'Portfolio',
    icon: <AiOutlineUser size={30} className="text-neutral-500 " />,
    description: 'Personal portfolio site built with Next.js.',
    link: 'https://github.com/vinh1911/portfolio-nextjs',
  },
  {
    name: 'Digitizes handwriting',
    icon: <AiOutlineFileText size={30} className="text-neutral-500 " />,
    description: 'Export handwritten data captured on form to JSON.',
    link: 'https://github.com/vinh1911/table-detection',
  },
];

export const ALL_PROJECTS = [
  {
    section: 'To Do',
    data: [
      {
        name: 'Angular Portfolio',
      },
      {
        name: 'Add 3d playground to portfolio using Three.js',
      },
      {
        name: 'Some machine learning stuff',
      },
    ],
  },
  {
    section: '2023',
    data: [
      {
        name: 'Next.js Portfolio',
        link: 'https://github.com/vinh1911/portfolio-nextjs',
      },
    ],
  },

  {
    section: '2020',
    data: [
      {
        name: 'Digitizes handwriting',
        link: 'https://github.com/vinh1911/table-detection',
      },
    ],
  },
];

export const RESOURCES = [
  {
    section: 'Cloud Platforms',
    data: [
      {
        name: 'Supabase',
        description: 'An open source Firebase alternative.',
        link: 'https://supabase.com/',
      },
      {
        name: 'Netlify',
        description: 'A serverless development platform.',
        link: ' https://www.netlify.com/',
      },

      {
        name: 'Vercel',
        description: 'Easy deployment platform.',
        link: 'https://vercel.com/',
      },
    ],
  },
  {
    section: 'Design Tools',
    data: [
      {
        name: 'removebg',
        description: 'Free Background Remover.',
        link: 'https://www.remove.bg/',
      },
      {
        name: 'favicon.io',
        description: 'Free favicon generator.',
        link: 'https://favicon.io/',
      },
      {
        name: 'CSS Gradient',
        description: 'Create a gradient background.',
        link: 'https://cssgradient.io/',
      },
      {
        name: 'HTML Color Picker',
        description: 'Color hue maker.',
        link: 'https://www.w3schools.com/colors/colors_picker.asp',
      },
      {
        name: 'Clippy',
        description: 'CSS clip-path maker.',
        link: 'https://bennettfeely.com/clippy/',
      },
      {
        name: 'CSS matic',
        description: 'The ultimate CSS tools for web designers.',
        link: 'https://www.cssmatic.com/',
      },
    ],
  },
  {
    section: 'AI Tools',
    data: [
      {
        name: 'Midjourney',
        description: 'AI Text to Image Generator.',
        link: 'https://midjourney.com',
      },
      {
        name: 'ChatGPT',
        description: 'OpenAI chatbot that uses GPT-3.',
        link: ' https://chat.openai.com/auth/loginF',
      },
      {
        name: 'GitHub Copilot',
        description: 'AI pair programmer',
        link: 'https://github.com/features/copilot',
      },
    ],
  },
  {
    section: 'Miscellaneous',
    data: [
      {
        name: 'Lorem Ipsum',
        description: 'Placeholder text generator.',
        link: ' https://loremipsum.io/',
      },
    ],
  },
  {
    section: 'Productivity',
    data: [
      {
        name: 'Excalidraw',
        description: 'Virtual collaborative whiteboard.',
        link: 'https://excalidraw.com/',
      },
    ],
  },
  {
    section: 'Front-End',
    data: [
      {
        name: 'React Icons',
        description: 'Popular icon packs.',
        link: 'https://react-icons.github.io/react-icons',
      },
      {
        name: 'heroicons',
        description: 'Icons from Tailwind CSS.',
        link: 'https://heroicons.com/',
      },
      {
        name: 'Flowbite',
        description: 'Components using Tailwind CSS.',
        link: 'https://flowbite.com/',
      },
      {
        name: 'Tailwind CSS',
        description: 'Utility-first CSS framework.',
        link: 'https://tailwindcss.com/',
      },
    ],
  },
  {
    section: 'UI Libraries',
    data: [
      {
        name: 'Material UI',
        description:
          "A comprehensive library of components based on Google's Material Design system.",
        link: 'https://mui.com/',
      },
      {
        name: 'Ant Design',
        description: 'UI design language and React UI library.',
        link: 'https://ant.design/',
      },
      {
        name: 'Chakra UI',
        description: 'A simple, modular and accessible component library',
        link: 'https://chakra-ui.com/',
      },
      {
        name: 'Headless UI',
        description: 'UI components accessible with Tailwind CSS',
        link: 'https://headlessui.com/',
      },
    ],
  },
  {
    section: 'Free Online Courses',
    data: [
      {
        name: 'Scrimba',
        description: 'Interactive courses and tutorials.',
        link: 'https://scrimba.com/allcourses',
      },
      {
        name: 'LearnWeb3',
        description:
          'The best place to turn you into a web3 developer for completely free.',
        link: 'https://learnweb3.io/',
      },
      {
        name: 'Kaggle',
        description:
          'Gain the skills you need to do independent data science projects.',
        link: 'https://www.kaggle.com/learn',
      },
    ],
  },
];
