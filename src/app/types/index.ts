export type Company = { 
    id: number; 
    name: string; 
    website?: string 
};
export type ApplicationStatus = 'APPLIED' | 'INTERVIEW' | 'OFFER' | 'REJECTED' | 'WITHDRAWN';
export type Application = {
    id: number;
    title: string;
    company?: Company | null;
    roleId?: number | null;
    status: ApplicationStatus;
    url?: string | null;
    notes?: string | null;
    appliedAt?: string | null;
};
