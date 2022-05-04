import { FieldValue } from "firebase/firestore";

export interface StateInterface{
    name: string;
    createdAt: FieldValue
    updatedAt?: FieldValue;
}