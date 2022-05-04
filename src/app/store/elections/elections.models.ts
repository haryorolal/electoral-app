
import { ItemInterface, ControlItemInterface, IconInterface } from "src/app/models/frontend";
export { ItemInterface, ControlItemInterface } from "src/app/models/frontend";

export interface Elections {
    constitution: Election;
    election: Election;
    localgovernment: Election;
    parties: Election;
    result: Election;
    state: Election;
    candidate: Election;
}

export interface Election {
    itemInterfaces: ItemInterface[]
    controlItemsInterface: ControlItemInterface[]
}