import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OWConfig } from 'src/app/models/ow_config';
import { OWDictConditions } from 'src/app/models/ow_dict_conditions';
import { OWKnownSignals } from 'src/app/models/ow_known_signals';

@Component({
    selector: 'app-general-config',
    templateUrl: 'general-config.component.html',
})

/*
Configs not loaded yet:
ps5Activity_canResumeExpedition?: boolean;
ps5Activity_availableShipLogCards?: any[];
didRunInitGammaSetting?: boolean
*/

export class GeneralConfigComponent implements OnInit {

    save: OWConfig = new OWConfig();
    dictSaves: any[] = [];

    constructor(
        public router: Router
    ) { }

    ngOnInit() {
        this.loadConfig();
    }

    loadConfig() {
        try {
            this.save = JSON.parse(localStorage.getItem('save')?.toString() as string);
            this.loadDictConditions();
        } catch (e) {
            console.log(e);
        }
    }

    goBack() {
        this.router.navigateByUrl('/home')
    }

    getAllSignals() {
        let obj = this.save.knownSignals;
        for (var prop in obj) {
            obj[prop as unknown as keyof OWKnownSignals] = true;
        }
    }

    getAllFrequencies() {
        this.save.knownFrequencies = this.save.knownFrequencies?.map((f) => true);
    }

    loadDictConditions() {
        let obj = this.save.dictConditions;
        for (var prop in obj ) {
            if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                this.dictSaves.push({ value:  obj[prop as keyof OWDictConditions], label: prop });
            }
        }
    }
    
    // saveConfig() {
    //     try {
    //         this.configs.forEach((config) => {
    //             config.read === "true" ? config.read = true : config.read = false;
    //             config.newlyRevealed === "true" ? config.newlyRevealed = true : config.newlyRevealed = false;
    //         })
    //         localStorage.setItem('save', JSON.stringify(this.save));
    //         this.goBack();
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }

}