import { FieldValue } from "firebase/firestore";

export interface VoteTable{
    id: string;
    name: string;
    createdAt: FieldValue;
    updatedAt?: FieldValue;
}