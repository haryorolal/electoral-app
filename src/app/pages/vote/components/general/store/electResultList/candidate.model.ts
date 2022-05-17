import { ResultInterface as DbResult } from "src/app/models/backend";

export interface CandidateResult extends DbResult {
    id: string;
}

export type CandidateResultCreateRequest = DbResult;