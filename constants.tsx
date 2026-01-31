
import { Product, NavItem } from './types';

export const NAVIGATION: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { 
    label: 'Products', 
    href: '/products',
    children: [
      { label: 'Animal Feeds', href: '/products/agro' },
      { label: 'Fresh Produce', href: '/products/fresh' },
      { label: 'Processed Foods', href: '/products/processed' }
    ]
  },
  { label: 'Logistics', href: '/logistics' },
  { label: 'Enquiry', href: '/enquiry' }
];

export const PRODUCTS: Product[] = [
  // Animal Feeds
  { 
    id: 'a1', 
    name: 'Premium Animal Feed', 
    category: 'agro', 
    image: 'https://lh3.googleusercontent.com/d/1w7t4hnz_py4eSXvyoJdElXvwtKWg6Y2B=w1000?auto=format&fit=crop&q=80&w=800', 
    description: 'High-protein, scientifically balanced pellets formulated for optimal dairy production and herd health.' 
  },

  // Fresh Produce
  { id: 'p1', name: 'Fresh Fruits', category: 'fresh', image: 'https://lh3.googleusercontent.com/d/1kjSn6m50MCHdNuaUxQzYernIedQv2FvG=w1000?auto=format&fit=crop&q=80&w=800', description: 'Superior quality.' },
  { id: 'p5', name: 'Red Onions', category: 'fresh', image: 'https://lh3.googleusercontent.com/d/1zdiK4OX5tmqbeDhBTuZISFSoiz7KJFg9=w1000?auto=format&fit=crop&q=80&w=800', description: 'Pungent and crispy, sorted and graded for export.' },
  
  // Processed
  { id: 'pr1', name: 'Frozen Chicken', category: 'processed', image: 'https://lh3.googleusercontent.com/d/15HgfHuVaPfvu5-4VbJhiIptpuEw_Wzhn=w1000?auto=format&fit=crop&q=80&w=800', description: 'Halal certified, blast frozen for freshness.' }
];

export const COUNTRIES_SERVED = ['UAE', 'Kenya', 'Vietnam', 'Nepal', 'Bhutan', 'Bangladesh'];

export const ALL_MAJOR_COUNTRIES = [
  "United Arab Emirates", "Saudi Arabia", "Qatar", "Oman", "Kuwait", "Bahrain", 
  "Bangladesh", "Kenya", "Vietnam", "Nepal", "Bhutan", "India", "USA", "UK", 
  "Canada", "Australia", "Germany", "France", "Japan", "China", "Singapore", 
  "Malaysia", "Indonesia", "Thailand", "Philippines", "South Korea", "Italy", 
  "Spain", "Netherlands", "Switzerland", "Brazil", "Mexico", "Argentina", 
  "South Africa", "Nigeria", "Egypt", "Turkey", "Russia", "Poland", "Sweden", 
  "Norway", "Denmark", "Ireland", "Portugal", "Greece", "New Zealand", "Israel", 
  "Jordan", "Iraq", "Iran", "Pakistan", "Sri Lanka", "Maldives", "Mauritius", 
  "Tanzania", "Uganda", "Ethiopia", "Ghana", "Morocco", "Algeria", "Tunisia"
].sort();

export const COUNTRY_CALLING_CODES = [
  { name: "India", code: "+91" },
  { name: "UAE", code: "+971" },
  { name: "Saudi Arabia", code: "+966" },
  { name: "Qatar", code: "+974" },
  { name: "Oman", code: "+968" },
  { name: "Kuwait", code: "+965" },
  { name: "Bahrain", code: "+973" },
  { name: "Bangladesh", code: "+880" },
  { name: "Kenya", code: "+254" },
  { name: "Vietnam", code: "+84" },
  { name: "Nepal", code: "+977" },
  { name: "Bhutan", code: "+975" },
  { name: "USA", code: "+1" },
  { name: "UK", code: "+44" },
  { name: "Canada", code: "+1" },
  { name: "Australia", code: "+61" },
  { name: "Singapore", code: "+65" },
  { name: "Malaysia", code: "+60" },
  { name: "Thailand", code: "+66" },
  { name: "Philippines", code: "+63" },
  { name: "Indonesia", code: "+62" },
  { name: "Germany", code: "+49" },
  { name: "France", code: "+33" },
  { name: "Italy", code: "+39" },
  { name: "Netherlands", code: "+31" },
  { name: "South Africa", code: "+27" },
  { name: "Nigeria", code: "+234" },
  { name: "Egypt", code: "+20" },
  { name: "Turkey", code: "+90" },
  { name: "Japan", code: "+81" },
  { name: "South Korea", code: "+82" },
  { name: "Sri Lanka", code: "+94" }
].sort((a, b) => a.name.localeCompare(b.name));
