import { FieldValue } from "firebase/firestore";

export interface PositionInterface {
    //id: string;
    name: string;
    createdAt: FieldValue;
    updatedAt?: FieldValue
}