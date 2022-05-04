import { ConstitutionInterface as DBCont } from "src/app/models/backend";

export interface Constitution extends DBCont{
    id: string;
}

export type ConstitutionCreateRequest = DBCont;