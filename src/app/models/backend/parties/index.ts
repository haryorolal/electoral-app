import { FieldValue } from "firebase/firestore";

export interface partiesInterface {
    //id: string;
    name: string;
    createdAt: FieldValue
    updatedAt?: FieldValue;
}