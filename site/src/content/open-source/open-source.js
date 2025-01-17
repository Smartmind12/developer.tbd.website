import PillarsInclusivity from './pillars-inclusivity.mdx';
import PillarsTransparency from './pillars-transparency.mdx';
import PillarsClarity from './pillars-clarity.mdx';

export const content = {
  meta: {
    title: 'Open Source | TBD',
    path: 'opensource',
  },
  title: 'Our Pillars',
  pillars: [
    {
      img: '/img/inclusivity-icon.svg',
      title: 'Inclusivity',
      alt: '',
      description: PillarsInclusivity,
    },
    {
      img: '/img/transparency-icon.svg',
      title: 'Transparency',
      alt: '',
      description: PillarsTransparency,
    },
    {
      img: '/img/clarity-icon.svg',
      title: 'Clarity',
      alt: '',
      description: PillarsClarity,
    },
  ],
  buttons: [
    {
      type: 'button',
      data: {
        label: 'Contributing Guide',
        url: 'https://developer.tbd.website/open-source/contributing',
        isExternalLink: false
      },
    },
    {
      type: 'button',
      data: {
        label: 'Project Governance',
        url: 'https://developer.tbd.website/open-source/governance',
        isExternalLink: false
      },
    },
    {
      type: 'button',
      data: {
        label: 'Code of Conduct',
        url: 'https://developer.tbd.website/open-source/code-of-conduct',
        isExternalLink: false
      },
    },
    {
      type: 'button',
      data: {
        label: 'Incubation Program',
        url: 'https://developer.tbd.website/open-source/incubation',
        isExternalLink: false
      },
    },

  ],
};
