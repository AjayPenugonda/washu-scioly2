export type Division = 'B' | 'C' | 'Both';

export type EventCategory = 'Life, Personal & Social Science' | 'Earth & Space Science' | 'Physical Science & Chemistry' | 'Technology & Engineering' | 'Inquiry & Nature of Science';

export interface SciOlyEvent {
  id: string;
  name: string;
  division: Division;
  category: EventCategory;
  type: 'Test' | 'Build' | 'Lab' | 'Hybrid';
  description?: string;
  supervisors?: string[];
  location?: string;
  block?: string;
  notes?: string;
  symbol?: string;
  atomicNumber?: number;
  teamSize?: string;
  allowedResources?: string;
  safetySpecs?: string;
  impound?: boolean;
  impoundTime?: string;
}

export interface Officer {
  name: string;
  role: string;
  category?: string;
  email?: string;
  bio?: string;
  division?: string;
  image?: string;
}

export interface SupervisorEntry {
  eventName: string;
  supervisors: string[];
  division: 'B' | 'C';
  category?: EventCategory;
}

export interface ArchiveYear {
  yearId: string;
  title: string;
  academicYear: string;
  description: string;
  path: string;
  legacyPath?: string;
  links: {
    label: string;
    url: string;
    type: 'drive' | 'sheets' | 'pdf' | 'form' | 'page';
    division?: 'B' | 'C' | 'Both';
    badge?: string;
  }[];
  director?: string;
  assistantDirectors?: string[];
  advisoryBoard?: { role: string; names: string }[];
  eventSupervisorsB?: { event: string; supervisors: string[] }[];
  eventSupervisorsC?: { event: string; supervisors: string[] }[];
}

export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  division?: 'B' | 'C' | 'All';
  isKeyDate?: boolean;
  status: 'past' | 'current' | 'upcoming';
}

export interface CampusLocation {
  id: string;
  name: string;
  type: 'competition' | 'homeroom' | 'hq' | 'dining' | 'parking';
  associatedWith: string;
  description?: string;
  lat: number;
  lng: number;
  highlightedEvents?: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'General' | 'Registration' | 'Tournament Day' | 'Events & Scoring';
}
