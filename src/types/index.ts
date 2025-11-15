// CRM Data Types
export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  title: string;
  status: 'lead' | 'customer' | 'partner';
  createdAt: string;
}

export interface Company {
  id: string;
  name: string;
  industry: string;
  website: string;
  phone: string;
  email: string;
  employees: number;
  revenue: string;
  status: 'prospect' | 'customer' | 'partner';
  createdAt: string;
}

export interface Deal {
  id: string;
  title: string;
  value: number;
  stage: 'prospecting' | 'qualification' | 'proposal' | 'negotiation' | 'closed-won' | 'closed-lost';
  probability: number;
  contactId: string;
  companyId: string;
  expectedCloseDate: string;
  createdAt: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  type: 'call' | 'meeting' | 'email' | 'note' | 'other';
  dueDate: string;
  status: 'pending' | 'in-progress' | 'completed';
  contactId?: string;
  companyId?: string;
  dealId?: string;
  createdAt: string;
}

export interface DashboardStats {
  totalContacts: number;
  totalCompanies: number;
  totalDeals: number;
  totalRevenue: number;
  openDeals: number;
  wonDeals: number;
  lostDeals: number;
}

