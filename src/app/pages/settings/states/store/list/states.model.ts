import { StateInterface as DbState } from "src/app/models/backend";

export interface States extends DbState {
    id: string
}

export type StatesCreateRequest = DbState