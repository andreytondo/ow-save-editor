import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OWConfig } from 'src/app/models/ow_config';
import { OWShipLogFactSaves } from 'src/app/models/ow_ship_log_fact_saves';

@Component({
    selector: 'config-page-component',
    templateUrl: './config-page.component.html',
})

export class ConfigPageComponent implements OnInit {

    configs: any[] = [];
    save: OWConfig = new OWConfig();
    title: string = '';

    constructor(
        public router: Router,
    ) {
    }

    ngOnInit() {
        this.loadConfig();
        this.getUrl();
    }

    loadConfig() {
        try {
            this.save = JSON.parse(localStorage.getItem('save')?.toString() as string);
            this.getConfig();
        } catch (e) {
            console.log(e);
        }
    }

    getConfig() {
        const urlId = this.getUrl();
        this.configs = [];

        switch (urlId) {
            case 'sunstation':
                this.title = 'The Sun Station';
                this.loadProperties('S_');
                break;
            case 'ashtwin':
                this.title = 'Ash Twin';
                this.loadProperties('TT');
                break;
            case 'embertwin':
                this.title = 'Ember Twin';
                this.loadProperties('CT');
                break;
            case 'timberhearth':
                this.title = 'Timber Hearth';
                this.loadProperties('TH');
                break;
            case 'atterlock':
                this.title = 'Atterlock';
                this.loadProperties('TM');
                break;
            case 'brittlehollow':
                this.title = 'Brittle Hollow';
                this.loadProperties('BH');
                break;
            case 'hollowslantern':
                this.title = `Hollow's Lantern`;
                this.loadProperties('VM');
                break;
            case 'giantsdeep':
                this.title = `Giant's Deep`;
                this.loadProperties('GD');
                break;
            case 'quantummoon':
                this.title = 'Quantum Moon';
                this.loadProperties('QM');
                this.loadProperties('QU');
                break;
            case 'darkbramble':
                this.title = 'Dark Bramble';
                this.loadProperties('DB');
                break;
            case 'interloper':
                this.title = 'The Interloper';
                this.loadProperties('CO');
                break;
            case 'opc':
                this.title = 'Orbital Probe Cannon';
                this.loadProperties('OP');
                this.loadProperties('OR');
                break;
            case 'whs':
                this.title = 'White Hole Station';
                this.loadProperties('WH');
                break;
        }
    }

    saveConfig() {
        try {
            this.configs.forEach((config) => {
                config.read === "true" ? config.read = true : config.read = false;
                config.newlyRevealed === "true" ? config.newlyRevealed = true : config.newlyRevealed = false;
            })
            localStorage.setItem('save', JSON.stringify(this.save));
            this.goBack();
        } catch (e) {
            console.log(e);
        }
    }

    goBack() {
        this.router.navigateByUrl('/home')
    }

    getUrl() {
        return this.router.url.split('/').pop();
    }

    loadProperties(name: string) {
        let obj = this.save.shipLogFactSaves;
        for (var prop in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                if (prop.slice(0, 2) === name) {
                    this.configs.push(obj[prop as keyof OWShipLogFactSaves])
                }
            }
        }
    }

}