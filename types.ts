export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role?: string;
  content: string;
  rating: number;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
}