import { CandidateInterface as DbCandidate } from "src/app/models/backend";

export interface Candidate extends DbCandidate {
    id: string;
}

export type CandidateCreateRequest = DbCandidate;