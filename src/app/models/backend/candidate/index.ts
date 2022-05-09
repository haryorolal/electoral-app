import { FieldValue } from "firebase/firestore";

export interface CandidateInterface{
    name: string;
    electionType: string;
    localGovernment: string;
    party: string;
    state: string;
    position: string;
    photoUrl: string;
    createdAt: FieldValue;
    updatedAt?: FieldValue;
    count: number;
}