import { PositionInterface as DbPosition } from "src/app/models/backend/position";

export interface Position extends DbPosition {
    id: string
}

export type PositionCreateRequest = DbPosition;
