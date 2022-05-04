import { FieldValue } from "firebase/firestore";

export interface LocalgovernmentInterface {
    //id: string;
    name: string;
    createdAt: FieldValue
    updatedAt?: FieldValue;
}