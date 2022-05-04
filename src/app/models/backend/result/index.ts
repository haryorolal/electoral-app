import { FieldValue } from "firebase/firestore";

export interface ResultInterface {
    //id: string;
    name: string;
    count: number;
    user: string
   /* electionId: string;
    localgovernmentId: string;
    partyId: string;
    stateId: string;*/
    createdAt: FieldValue
    //updatedAt?: FieldValue;
}