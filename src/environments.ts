import { EnvironmentName } from "@trident/extension-client";

export interface EnvironmentSetting {
    aSetting: string;
}

export type Environments = {
    [key in EnvironmentName]: EnvironmentSetting;
};

export const environments: Environments = {
    Onebox: {
        aSetting: "onebox",
    },
    INT: {
        aSetting: "int",
    },
    TEST: {
        aSetting: "test",
    },
    DAILY: {
        aSetting: "daily",
    },
    DXT: {
        aSetting: "dxt",
    },
    MSIT: {
        aSetting: "msit",
    },
    PROD: {
        aSetting: "prod",
    },
    FF: {
        aSetting: "ff",
    },
    TB: {
        aSetting: "tb",
    },
    PF: {
        aSetting: "pf",
    },
    MC: {
        aSetting: "mc",
    },
    USNat: {
        aSetting: "usnat",
    },
    USSec: {
        aSetting: "ussec",
    },
    DEFAULT: {
        aSetting: "default",
    },
};
