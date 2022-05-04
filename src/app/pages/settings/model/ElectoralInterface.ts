import { ConstitutionInterface, ElectionInterface, LocalgovernmentInterface, partiesInterface, StateInterface } from "src/app/models/backend";

export interface ElectionFormInterface {
    constitution: ConstitutionInterface;
    election: ElectionInterface;
    localgovernment: LocalgovernmentInterface;
    parties: partiesInterface;
    state: StateInterface;
}