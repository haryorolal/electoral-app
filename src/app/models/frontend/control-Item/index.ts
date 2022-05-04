import { IconInterface } from "../icon";

export type Value = number | string | boolean;

export interface ControlItemInterface {
    value: Value;
    label: string;
    icon?: IconInterface
}