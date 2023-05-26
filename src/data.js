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
