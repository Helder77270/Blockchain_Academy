import { useTranslation } from 'react-i18next';
import helderPhoto from '../../Profile photos Helder.jpg';
import shayanPhoto from '../../Profile photos Shayan.jpg';

export interface InstructorData {
  photo?: string;
  nickname: string;
  name: string;
  role: string;
  highlights: string[];
  gradient: string;
  accentColor: string;
}

export const helder: InstructorData = {
  photo: helderPhoto,
  nickname: 'The Crypto "Jack of all trades"',
  name: 'Helder SALVADOR',
  role: 'Blockchain Engineer & Teacher',
  gradient: 'from-[#ED1C24] to-[#39B54A]',
  accentColor: '#ED1C24',
  highlights: [
    'Started in blockchain in 2017 / 2018, drawn in by the finance side of things',
    'Now focused on user-centered use cases and real-world adoption',
    'Directed a blockchain master programme in Paris',
    'Explored the full stack — product owner, infrastructure, smart contracts',
    'Won a hackathon prize at Hacking Paris 2025 by Chiliz (Content creation & interaction track)',
    'Currently Blockchain Specialist @ NovaSBE',
  ],
};

export const shayan: InstructorData = {
  photo: shayanPhoto,
  nickname: 'Post Doc at NovaSBE',
  name: 'Shayan Eskandari',
  role: 'Smart Contract Security Engineer',
  gradient: 'from-[#6366f1] to-[#8b5cf6]',
  accentColor: '#6366f1',
  highlights: [
    'Background in Information Systems Security and Engineering',
    'PhD in Blockchain Technology and unforeseen consequences',
    'Blockchain Engineer at Bitcoin ATM startup',
    'Senior Smart Contract Security Engineer',
    'CTO at a publicly traded company',
  ],
};

export const zuzanna: InstructorData = {
  nickname: 'Programme Coordinator, Blockchain.pt',
  name: 'Zuzanna Dziedzic',
  role: 'Project & Programme Manager · NOVA SBE',
  gradient: 'from-[#f97316] to-[#eab308]',
  accentColor: '#f97316',
  highlights: [
    'Project & Programme Manager with 10+ years leading international initiatives across development, innovation, and education',
    'Delivered complex, multi-stakeholder projects under EuropeAid, UNDP, Horizon 2020, Innovate UK, EUROSTARS, and Erasmus+',
    'PMP®-certified, with an ITCILO Certificate in Monitoring & Evaluation (Results-Based Management)',
    "MA in Political Science and a Postgraduate Diploma in Humanitarian Action",
    'Programme Coordinator of the Blockchain.pt (PRR) initiative at NOVA SBE',
    'Designed the Blockchain Academy programme and its project-management training materials under the Ripple Impact Fund',
  ],
};

export type InstructorId = 'helder' | 'shayan' | 'zuzanna';

const INSTRUCTORS: Record<InstructorId, InstructorData> = { helder, shayan, zuzanna };

/**
 * Returns instructor data with the localized fields (nickname, role,
 * highlights) resolved from the `common` namespace for the active language.
 * Non-translatable fields (photo, name, colors) come from the static data.
 */
export function useInstructor(id: InstructorId): InstructorData {
  const { t } = useTranslation();
  return {
    ...INSTRUCTORS[id],
    nickname: t(`instructors.${id}.nickname`),
    role: t(`instructors.${id}.role`),
    highlights: t(`instructors.${id}.highlights`, { returnObjects: true }) as string[],
  };
}
