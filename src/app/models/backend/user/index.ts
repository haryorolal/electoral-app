import { FieldValue } from 'firebase/firestore';
import { AdminModelInterface } from './roles/admin';
import { SuperAdminInterface } from './roles/superAdmin';
import { VoterInterface } from './roles/voter';

export * from './roles';

export interface UserInterface {
    uid: string;
    name: string;
    photoURL: string;
    country: string;
    email: string;    
    about?: string;
    nin: number;
    phone?: number;
    code?: string;
    isCompleted?: boolean;
    roleId: string;
    role: AdminModelInterface | SuperAdminInterface | VoterInterface;
    created: FieldValue;
    updated?: FieldValue;
}