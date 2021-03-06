import { UserInterface } from "src/app/models/backend";
export { UserInterface } from "src/app/models/backend";
export { AdminModelInterface, VoterInterface, SuperAdminInterface } from "../../models/backend/user/roles";
export {Roles} from "../../models/backend/Role";

export interface EmailPasswordCredentials {
    email: string;
    password: string;
}

export type UserCreateRequest = Omit<UserInterface, 'uid' | 'email' | 'created'>;