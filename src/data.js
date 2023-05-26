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
