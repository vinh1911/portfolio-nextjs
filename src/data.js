import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';

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
