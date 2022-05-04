import { partiesInterface as DbParty } from "src/app/models/backend";

export interface Party extends DbParty {
    id: string
}

export type PartyCreateRequest = DbParty