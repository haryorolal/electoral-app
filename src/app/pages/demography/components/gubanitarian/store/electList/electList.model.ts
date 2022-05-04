import { ResultInterface as DBResult } from "src/app/models/backend";

export interface Result extends DBResult {
    id: string
}

export type ResultCreateRequest = DBResult