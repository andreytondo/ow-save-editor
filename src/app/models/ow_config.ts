import { OWDictConditions } from "./ow_dict_conditions";
import { OWKnownSignals } from "./ow_known_signals";
import { OWShipLogFactSaves } from "./ow_ship_log_fact_saves";

export class OWConfig {
    loopCount?: number;
    knownFrequencies?: boolean[];
    knownSignals?: OWKnownSignals;
    dictConditions?: OWDictConditions;
    shipLogFactSaves?: OWShipLogFactSaves = new OWShipLogFactSaves();
    newlyRevealedFactIDs?: any[];
    lastDeathType?: number;
    burnedMarshmallowEaten?: number;
    fullTimeloops?: number;
    perfectMarshmallowsEaten?: number;
    warpedToTheEye?: boolean;
    secondsRemainingOnWarp?: number;
    loopCountOnParadox?: number;
    numbershownPopups?: 6;
    version?: string;
    ps5Activity_canResumeExpedition?: boolean;
    ps5Activity_availableShipLogCards?: any[];
    didRunInitGammaSetting?: boolean
}