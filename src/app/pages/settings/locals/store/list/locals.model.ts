import { LocalgovernmentInterface as DBLocal} from "src/app/models/backend";

export interface Local extends DBLocal {
    id: string
}

export type LocalCreateRequest = DBLocal