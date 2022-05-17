import { FieldValue } from "firebase/firestore";

export interface ResultInterface {
    //id: string;
    name: string;
    positions: string;
    party: string;
    count: number;
    isActive?:boolean;
    date?: Date;
    createdAt: FieldValue
    updatedAt?: FieldValue;
}