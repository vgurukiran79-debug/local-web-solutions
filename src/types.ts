export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  idealFor: string;
  badge?: string;
  iconName: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: 'business' | 'restaurant' | 'portfolio' | 'landing' | 'healthcare';
  categoryLabel: string;
  tagline: string;
  description: string;
  features: string[];
  demoType: 'Concept Project' | 'Demo Website';
  accentColor: string;
  previewUrl: string;
  previewPages: {
    name: string;
    headline: string;
    subheadline: string;
    details: string;
    actionLabel: string;
  }[];
}

export interface ContactFormData {
  name: string;
  businessName: string;
  contactMethod: string;
  websiteType: string;
  description: string;
}
