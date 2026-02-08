
export type CategoryType = 'fresh' | 'agro' | 'processed' | 'millets-pulses';

export interface Product {
  id: string;
  name: string;
  category: CategoryType;
  subcategory?: string;
  description: string;
  image: string;
}

export interface InquiryFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  productOfInterest: string;
  message: string;
  country: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}
