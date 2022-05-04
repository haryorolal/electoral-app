
import { ItemInterface, ControlItemInterface, IconInterface } from "src/app/models/frontend";
export { ItemInterface, ControlItemInterface } from "src/app/models/frontend";

export interface Dictionaries {
    roles: Dictionary;
    code: Dictionary;
    countries: Dictionary;
}

export interface Dictionary {
    itemInterfaces: ItemInterface[]
    controlItemsInterface: ControlItemInterface[]
}