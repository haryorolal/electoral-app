
import { ItemInterface, ControlItemInterface, IconInterface } from "src/app/models/frontend";
export { ItemInterface, ControlItemInterface } from "src/app/models/frontend";

export interface Elections {
    constitution: Election;
    election: Election;
    localgovernment: Election;
    parties: Election;    
    state: Election;
    result: Election;
    candidate: Election;
    positions: Election;
    
}

export interface Election {
    itemInterfaces: ItemInterface[]
    controlItemsInterface: ControlItemInterface[]
}