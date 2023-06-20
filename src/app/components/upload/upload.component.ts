import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { OWConfig } from 'src/app/models/ow_config';

@Component({
    selector: 'upload-component',
    templateUrl: 'upload.component.html',
    styleUrls: ['./upload.component.css']
})

export class UploadComponent implements OnInit {

    file: any;
    reader = new FileReader();

    constructor(
        public router: Router
    ) { }

    ngOnInit() {
        this.file = null;
    }

    readFile(e: any) {
        if (e.target?.files[0]) {
            this.reader.readAsText(e.target.files[0], "UTF-8");
            this.reader.onload = ((evt) => {
                try {
                    this.file = JSON.parse(evt.target?.result as string);
                    if (this._checkIfCorrectSaveFile(this.file)) {
                        this._uploadSaveToStorage(this.file);
                        this.router.navigateByUrl('/home')
                    } else {
                        this.file = null;
                    }
                } catch (e) {
                    alert('an error occurred, please check your save file.');
                    this.file = null;
                    console.log(e);
                }
            })
        }
    }

    private _uploadSaveToStorage(file: OWConfig) {
        if (file) {
            localStorage.clear()
            localStorage.setItem('save', JSON.stringify(file));
        }
    }

    private _checkIfCorrectSaveFile(save: OWConfig): boolean {
        if (save?.version) {
            return true;
        }
        alert('the file you uploaded is not a Outer Wilds save file, please try again');
        return false;
    }
}