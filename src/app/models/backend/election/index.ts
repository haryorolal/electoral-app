import { FieldValue } from "firebase/firestore";

export interface ElectionInterface {
    name: string;
    createdAt: FieldValue
    updatedAt?: FieldValue;
    //primaryElectionInterface: PrimaryInterface;
    //generalElectionInterface: GeneralInterface;
}

/*interface PrimaryInterface {
    id: string;
    name: string;
    count: number;
}

interface GeneralInterface {
    id: string;
    name: string;
    count: number;
}*/