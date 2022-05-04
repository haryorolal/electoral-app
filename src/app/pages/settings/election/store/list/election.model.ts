import { ElectionInterface as DBElect } from "src/app/models/backend";

export interface Election extends DBElect{
    id: string
}

export type ElectionCreateRequest = DBElect;