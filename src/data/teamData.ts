import { Officer, SupervisorEntry } from '../types';

export const MISSION_STATEMENT = `At Washington University Science Olympiad, we are committed to fostering a deep love for science and an appreciation for rigorous academic challenges among high school and middle school students. Our mission is to provide an engaging platform where young minds can explore diverse scientific disciplines, develop critical thinking and problem-solving skills, and experience the thrill of competition and teamwork. Through our events, we aim to inspire the next generation of scientists, engineers, and innovators, encouraging them to pursue excellence in their academic and professional endeavors. We believe in creating an inclusive environment where students from various backgrounds can collaborate, learn, and grow, laying a solid foundation for their future contributions to science and society.`;

export const EXECUTIVE_BOARD: Officer[] = [
  {
    name: 'Jeff Hwang',
    role: 'Director',
    category: 'Executive Board',
    bio: 'Directs tournament operations, university administration relations, and collegiate Science Olympiad initiatives.'
  },
  {
    name: 'Sydney Buffett',
    role: 'Director',
    category: 'Executive Board',
    bio: 'Oversees comprehensive tournament planning, event logistics, and institutional communications.'
  },
  {
    name: 'Michelle Liu',
    role: 'Director',
    category: 'Executive Board',
    bio: 'Leads chapter operations, day-of-tournament execution, and academic quality assurance.'
  },
  {
    name: 'Kaia Roy',
    role: 'Outreach Director',
    category: 'Executive Board',
    bio: 'Spearheads school partnerships, team outreach, and community engagement initiatives.'
  },
  {
    name: 'Julian Mitchell',
    role: 'Creative Director',
    category: 'Executive Board',
    bio: 'Directs creative design, visual identity, branding, and tournament multimedia production.'
  },
  {
    name: 'Daniel Jiang',
    role: 'Test Events Coordinator',
    category: 'Executive Board',
    bio: 'Oversees written exam development, peer-review standards, and test event supervision.'
  },
  {
    name: 'Oliver Guan',
    role: 'Test Events Coordinator',
    category: 'Executive Board',
    bio: 'Coordinates academic exam writing, test quality control, and testing proctor logistics.'
  },
  {
    name: 'Noah Wolk',
    role: 'Build Events Coordinator',
    category: 'Executive Board',
    bio: 'Manages engineering and build device specifications, impound stations, and competition arenas.'
  },
  {
    name: 'Franklin Zhuang',
    role: 'Build Events Coordinator',
    category: 'Executive Board',
    bio: 'Directs device testing calibration, impound logistics, and engineering event supervision.'
  },
  {
    name: 'Emily Wu',
    role: 'Lab Events Coordinator',
    category: 'Executive Board',
    bio: 'Oversees laboratory safety protocols, reagent preparation, and hands-on science event stations.'
  },
  {
    name: 'Andrew Yates',
    role: 'Operations Coordinator',
    category: 'Executive Board',
    bio: 'Manages tournament registration systems, documentation, team hospitality, and day-of operations.'
  },
  {
    name: 'Max Watchmaker',
    role: 'Logistics Coordinator',
    category: 'Executive Board',
    bio: 'Coordinates Danforth Campus venue bookings, building access, directional signage, and equipment dispatch.'
  },
  {
    name: 'Shreya Arun',
    role: 'Volunteer Coordinator',
    category: 'Executive Board',
    bio: 'Coordinates undergraduate and alumni proctors, test grading staff, and tournament volunteers.'
  },
  {
    name: 'Clare Maurer',
    role: 'Social Media Chair',
    category: 'Executive Board',
    bio: 'Manages social media channels, event promotions, live tournament coverage, and student outreach.'
  },
  {
    name: 'Julia Huang',
    role: 'Social Media Chair',
    category: 'Executive Board',
    bio: 'Directs digital campaigns, photography, and online engagement across community platforms.'
  },
  {
    name: 'Zoe Avinir',
    role: 'Outreach Coordinator',
    category: 'Executive Board',
    bio: 'Coordinates middle and high school team outreach, mentorship programs, and school onboarding.'
  },
  {
    name: 'Ajay Penugonda',
    role: 'Webmaster',
    category: 'Executive Board',
    bio: 'Develops and maintains tournament web infrastructure, portals, interactive tools, and archives.'
  },
  {
    name: 'Yuma Kano',
    role: 'General Exec Member',
    category: 'Executive Board',
    bio: 'Supports tournament-wide operations, event execution, and organizational initiatives.'
  },
  {
    name: 'Frederick Li',
    role: 'General Exec Member',
    category: 'Executive Board',
    bio: 'Assists with tournament planning, event facilitation, and student chapter logistics.'
  }
];

export const ADVISORY_BOARD: Officer[] = EXECUTIVE_BOARD;

export const SUPERVISORS_DIV_B: SupervisorEntry[] = [
  {
    eventName: 'Anatomy and Physiology',
    supervisors: ['Oliver Guan', 'Iliana Acevedo', 'Eva Cohen'],
    division: 'B',
    category: 'Life, Personal & Social Science'
  },
  {
    eventName: 'Boomilever',
    supervisors: ['Tessa Quijano', 'Nate Bottarel'],
    division: 'B',
    category: 'Technology & Engineering'
  },
  {
    eventName: 'Circuit Lab',
    supervisors: ['Max Watchmaker', 'Jun Ru Chen'],
    division: 'B',
    category: 'Physical Science & Chemistry'
  },
  {
    eventName: 'Codebusters',
    supervisors: ['Cole Bricker', 'Steven Chen'],
    division: 'B',
    category: 'Inquiry & Nature of Science'
  },
  {
    eventName: 'Crime Busters',
    supervisors: ['Emily Wu', 'Arya Catna'],
    division: 'B',
    category: 'Physical Science & Chemistry'
  },
  {
    eventName: 'Disease Detectives',
    supervisors: ['Advik Lalam', 'Nathaniel John', 'Pranay Thatikonda', 'Marisa Uttamchandani'],
    division: 'B',
    category: 'Life, Personal & Social Science'
  },
  {
    eventName: 'Dynamic Planet',
    supervisors: ['Kira Unger-Levinson', 'Yuma Kano'],
    division: 'B',
    category: 'Earth & Space Science'
  },
  {
    eventName: 'Entomology',
    supervisors: ['Julian Mitchell', 'Bella Woolsey'],
    division: 'B',
    category: 'Life, Personal & Social Science'
  },
  {
    eventName: 'Experimental Design',
    supervisors: ['Dana Sandoval', 'Dylan Deng'],
    division: 'B',
    category: 'Inquiry & Nature of Science'
  },
  {
    eventName: 'Heredity',
    supervisors: ['Ajay Penugonda', 'Andrew Yates'],
    division: 'B',
    category: 'Life, Personal & Social Science'
  },
  {
    eventName: 'Helicopter',
    supervisors: ['Kaia Roy', 'Noah Low', 'Kellen Zoberi'],
    division: 'B',
    category: 'Technology & Engineering'
  },
  {
    eventName: 'Hovercraft',
    supervisors: ['Jeremy Gassman', 'Bryan Phan', 'Alonzo Ferrer'],
    division: 'B',
    category: 'Technology & Engineering'
  },
  {
    eventName: 'Machines',
    supervisors: ['Manzoor Mohis', 'Johnny Mortha', 'Kai Maki'],
    division: 'B',
    category: 'Physical Science & Chemistry'
  },
  {
    eventName: 'Meteorology',
    supervisors: ['Franklin Zhuang', 'Jodie Xiao', 'Bryan Phan', 'Reece Chae'],
    division: 'B',
    category: 'Earth & Space Science'
  },
  {
    eventName: 'Metric Mastery',
    supervisors: ['Noah Wolk', 'Kevin Tang', 'Darren Wong'],
    division: 'B',
    category: 'Physical Science & Chemistry'
  },
  {
    eventName: 'Microbe Mission',
    supervisors: ['Chouchi Ding', 'Maya Ringold', 'Maegha Tipirneni'],
    division: 'B',
    category: 'Life, Personal & Social Science'
  },
  {
    eventName: 'Mission Possible',
    supervisors: ['Sydney Buffett', 'Prayag Vemulapalli', 'Collin McCord', 'Giulissa Cabrera', 'Michael Safier'],
    division: 'B',
    category: 'Technology & Engineering'
  },
  {
    eventName: 'Optics',
    supervisors: ['Max Watchmaker', 'Bryn Muller', 'Sahil Soni'],
    division: 'B',
    category: 'Physical Science & Chemistry'
  },
  {
    eventName: 'Potions and Poisons',
    supervisors: ['Daniel Jiang', 'Lizy Lopez'],
    division: 'B',
    category: 'Physical Science & Chemistry'
  },
  {
    eventName: 'Reach for the Stars',
    supervisors: ['Cindy Yao', 'Riddhishrree Badhan'],
    division: 'B',
    category: 'Earth & Space Science'
  },
  {
    eventName: 'Remote Sensing',
    supervisors: ['Frederick Li'],
    division: 'B',
    category: 'Earth & Space Science'
  },
  {
    eventName: 'Road Scholar',
    supervisors: ['Ha-young Cho'],
    division: 'B',
    category: 'Earth & Space Science'
  },
  {
    eventName: 'Rocks & Minerals',
    supervisors: ['Melissa Parkinson', 'Daniel Marshall'],
    division: 'B',
    category: 'Earth & Space Science'
  },
  {
    eventName: 'Scrambler',
    supervisors: ['Fayzan Ali', 'Mark Hedberg', 'Jeff Hwang'],
    division: 'B',
    category: 'Technology & Engineering'
  },
  {
    eventName: 'Solar System',
    supervisors: ['Saanvi Bucha', 'Yeabi Kehm'],
    division: 'B',
    category: 'Earth & Space Science'
  },
  {
    eventName: 'Tower',
    supervisors: ['Kaia Roy'],
    division: 'B',
    category: 'Technology & Engineering'
  },
  {
    eventName: 'Water Quality',
    supervisors: ['Srishreya Arunsaravanakumar', 'Jacqueline Lee', 'Irene Sok', 'Zoe Avinir'],
    division: 'B',
    category: 'Life, Personal & Social Science'
  },
  {
    eventName: 'Wind Power',
    supervisors: ['Nate Scherer', 'Izyan (Izy) Ali'],
    division: 'B',
    category: 'Physical Science & Chemistry'
  },
  {
    eventName: 'Write It Do It',
    supervisors: ['Julia Huang', 'Kate Rusin', 'Clare Maurer', 'Kevin Tang'],
    division: 'B',
    category: 'Inquiry & Nature of Science'
  }
];

export const SUPERVISORS_DIV_C: SupervisorEntry[] = [
  {
    eventName: 'Air Trajectory',
    supervisors: ['Eric Han', 'Charley Farr', 'Prayag Vemulapalli', 'Aviv Bramy'],
    division: 'C',
    category: 'Technology & Engineering'
  },
  {
    eventName: 'Astronomy',
    supervisors: ['Kaia Roy', 'Nathaniel Francis Bottarel', 'Cedric Bruges', 'Jodie Xiao'],
    division: 'C',
    category: 'Earth & Space Science'
  },
  {
    eventName: 'Bungee Drop',
    supervisors: ['Ryan Ershaghi', 'Nathaniel Francis Bottarel', 'Madison Stille'],
    division: 'C',
    category: 'Technology & Engineering'
  },
  {
    eventName: 'Chemistry Lab',
    supervisors: ['Mark Hedberg', 'Max Watchmaker', 'Lizy Lopez', 'Melinda Zhang', 'Sarah Ash'],
    division: 'C',
    category: 'Physical Science & Chemistry'
  },
  {
    eventName: 'Designer Genes',
    supervisors: ['Arya Waza', 'Vyn Long'],
    division: 'C',
    category: 'Life, Personal & Social Science'
  },
  {
    eventName: 'Detector Building',
    supervisors: ['Lilian Lu', 'Emily Wu', 'Sydney Buffett'],
    division: 'C',
    category: 'Technology & Engineering'
  },
  {
    eventName: 'Electric Vehicle',
    supervisors: ['Kellen Zoberi', 'Jonathan Yang', 'Ryan Allen'],
    division: 'C',
    category: 'Technology & Engineering'
  },
  {
    eventName: 'Engineering CAD',
    supervisors: ['Henry Zutter', 'Sadie Blade', 'Shirley Xi'],
    division: 'C',
    category: 'Technology & Engineering'
  },
  {
    eventName: 'Forensics',
    supervisors: ['Lucy Von Rohr', 'Shreya Das', 'Jenny Sun'],
    division: 'C',
    category: 'Physical Science & Chemistry'
  },
  {
    eventName: 'Geological Mapping',
    supervisors: ['Kayla Cooper', 'Gabriella Jager'],
    division: 'C',
    category: 'Earth & Space Science'
  },
  {
    eventName: 'Helicopter',
    supervisors: ['Mays Mallah', 'Reece Chae'],
    division: 'C',
    category: 'Technology & Engineering'
  },
  {
    eventName: 'Hovercraft',
    supervisors: ['Manzoor Mohis', 'Jeff Hwang'],
    division: 'C',
    category: 'Technology & Engineering'
  },
  {
    eventName: 'Materials Science',
    supervisors: ['Irene Sok', 'Johnny Yang', 'Kritika Maheshwari', 'Rishi Sattaluri'],
    division: 'C',
    category: 'Physical Science & Chemistry'
  },
  {
    eventName: 'Robot Tour',
    supervisors: ['Sachin Agrawal', 'Andrew Cook', 'Rohan Lahiri'],
    division: 'C',
    category: 'Technology & Engineering'
  },
  {
    eventName: 'Rocks & Minerals',
    supervisors: ['Hannah Kim', 'Melissa Parkinson'],
    division: 'C',
    category: 'Earth & Space Science'
  }
];
