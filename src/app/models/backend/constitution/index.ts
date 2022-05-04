import { FieldValue } from "firebase/firestore";

export interface ConstitutionInterface {
    //id: string;
    name: string;
    createdAt: FieldValue
    updatedAt?: FieldValue;
}