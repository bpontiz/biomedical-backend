export type Status = 'Available' | 'Repairing' | 'In use' | 'Damaged';

export interface Product {
    id: number;
    name: string;
    serie: string;
    status: Status;
    last_service: string;
    next_service: string;
    description: string;
    timestamp: string
}