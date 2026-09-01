// The site's accent colours. Committee cards and event timeline dots cycle
// through these; the pillar tints below draw from the same set.
export const palette = {
  exco: '#FB7185',
  devhub: '#FB923C',
  catalyst: '#22D3EE',
  techtalks: '#8B5CF6',
  entrepreneurship: '#D946EF',
};

export const site = {
  name: 'Innovation Lab',
  fullName: 'Innovation Lab @ NTU CCDS',
  tagline: 'Where CCDS students go off-script.',
  intro:
    "We're a student-run club in NTU's College of Computing and Data Science. We build, mentor, share, and launch.",
  email: 'scds-ilab-club@e.ntu.edu.sg',
  socials: [
    { label: 'Instagram', url: 'https://instagram.com/innovation.lab.ccds/', description: 'Slide into our DMs - we actually reply' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/company/ccds-innovation-lab/', description: 'Connect with us on LinkedIn' },
    { label: 'GitHub', url: 'https://github.com/DevHub-iLab', description: 'Check out our GitHub' },
  ],
};

// Committee members, shown in the Team section
type CommitteeMember = {
  name: string;
  role: string;
  division: keyof typeof palette;
  course: string;
  bio?: string;
  links?: { type: 'linkedin' | 'github' | 'website'; url: string }[];
};

export const committee: CommitteeMember[] = [
  {
    name: 'Wei Xin',
    role: 'President',
    division: 'exco',
    course: 'Computer Science, Y3',
    links: [
      { type: 'linkedin', url: 'https://linkedin.com/in/tanweixin04' },
    ]
  },
  { 
    name: 'Jonah', 
    role: 'Vice President',
    division: 'exco',
    course: 'Computer Science, Y4',
    links: [
      { type: 'linkedin', url: 'https://linkedin.com/in/jonahchooncm' },
    ]
  },
  { 
    name: 'Divisha', 
    role: 'Secretary',
    division: 'exco',
    course: 'Computer Science, Y3',
    links: [
      { type: 'linkedin', url: 'https://linkedin.com/in/divisha-jain9' },
    ]
  },
  { 
    name: 'Silvi', 
    role: 'Financial Controller', 
    division: 'exco',
    course: 'Computer Science, Y3',
    bio: 'meow 🐾',
    links: [
      { type: 'linkedin', url: 'https://linkedin.com/in/silvianaho' },
      { type: 'github', url: 'https://github.com/vianho' },
      { type: 'website', url: 'https://silvi.io' },
    ], 
  },
  { 
    name: 'Joey', 
    role: 'Club Advisor', 
    division: 'exco',
    course: 'Computer Science, Y4',
    links: [
      { type: 'linkedin', url: 'https://linkedin.com/in/joeyllp' },
    ]
  },
];

// Upcoming events, shown in the Events section on the homepage (top of the
// list renders first — keep the soonest event first).
// `signupUrl` and `mapsUrl` can be any links (Google Forms, Telegram, etc.).
// `image` (optional) shows a photo beside the event — put the file in
// public/images/events/ and reference it like 'images/events/my-photo.jpg'.
const ilabMapsUrl = 'https://maps.ntu.edu.sg/?mazemap_share_url=https%3A%2F%2Fuse.mazemap.com%2F%3Futm_medium%3Dlongurl%23v%3D1%26config%3Dntu-sg%26zlevel%3D-1%26center%3D103.682159%2C1.346191%26zoom%3D18%26campusid%3D2123%26sharepoitype%3Didentifier%26sharepoi%3DN4-B1B-13';

type Event = {
  title: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  pillar: keyof typeof palette;
  mapsUrl?: string;
  image?: string;
  signupUrl?: string;
};

export const events: Event[] = [
  {
    title: 'Breaking Your Own Chatbot: A Hands-On Introduction to LLM Security Testing',
    date: 'Mon, 7 Sept 2026',
    time: '18:30 - 21:30',
    venue: 'The Hive - LHS-TR+56',
    description:
    'Join us for the first workshop of the AI Builders Workshop Series, organized by Innovation Lab @ NTU CCDS in collaboration with the Chatbot Developers and Enthusiasts Focus Group (CDEFG). In this workshop, you\'ll learn: The major prompt-injection and jailbreak attack families, live attack demonstrations on a running chatbot, and how to benchmark your own chatbot\'s resilience with an automated red-teaming tool',
    pillar: 'techtalks',
    mapsUrl: 'https://maps.ntu.edu.sg/?mazemap_share_url=https%3A%2F%2Fuse.mazemap.com%2F%3Futm_medium%3Dlongurl%23v%3D1%26config%3Dntu-sg%26zlevel%3D3%26center%3D103.682648%2C1.343025%26zoom%3D18%26campusid%3D2123%26sharepoitype%3Didentifier%26sharepoi%3DLHS-03-02',
    signupUrl: 'https://go.ilabccds.com/ai-builders-workshop-series',
    image: 'images/sep_2026_cdefg_workshops.jpg',
  },
  {
    title: 'Model Context Protocol Workshop: From Concept to Custom Server',
    date: 'Tue, 8 Sept 2026',
    time: '18:30 - 21:30',
    venue: 'The ARC - LHN-TR+15',
    description:
    'Join us for the second workshop of the AI Builders Workshop Series, organized by Innovation Lab @ NTU CCDS in collaboration with the Chatbot Developers and Enthusiasts Focus Group (CDEFG). In this workshop, you\'ll learn MCP architecture (Host, Client, Server), how to build your own custom MCP server in Python/TypeScript, and how to connect and test it live in Claude Desktop / VS Code',
    pillar: 'techtalks',
    mapsUrl: 'https://maps.ntu.edu.sg/?mazemap_share_url=https%3A%2F%2Fuse.mazemap.com%2F%3Futm_medium%3Dlongurl%23v%3D1%26config%3Dntu-sg%26zlevel%3D1%26center%3D103.681899%2C1.347852%26zoom%3D18%26campusid%3D2123%26sharepoitype%3Didentifier%26sharepoi%3DLHN-L1-03',
    signupUrl: 'https://go.ilabccds.com/ai-builders-workshop-series',
    image: 'images/sep_2026_cdefg_workshops.jpg',
  },
];

type Pillar = {
  icon: string;
  name: string;
  tagline: string;
  tint: string;
  url?: string;
};

export const pillars: Pillar[] = [
  {
    icon: 'devhub',
    name: 'DevHub',
    url: 'https://devhub.ilabccds.com/',
    tint: palette.devhub,
    tagline:
      'Technical interview prep, hands-on workshops, and SummerBuild 🐧🔧',
  },
  {
    icon: 'handshake',
    name: 'Catalyst',
    tint: palette.catalyst,
    tagline:
      "Senior-junior mentorship — learn from people who've already made your mistakes.",
  },
  {
    icon: 'mic',
    name: 'TechTalks',
    tint: palette.techtalks,
    tagline:
      'Talks and workshops from industry speakers and peers. Buzzwords translated live.',
  },
  {
    icon: 'rocket',
    name: 'Entrepreneurship',
    url: 'https://www.ntu.edu.sg/i-lab/research-focus/student-entrepreneurship-program-(sep)',
    tint: palette.entrepreneurship,
    tagline:
      'Turning student ideas into ventures. Some of them even compile.',
  },
];
