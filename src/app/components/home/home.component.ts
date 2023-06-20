import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: []
})
export class HomeComponent implements OnInit {

  save: any;

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
    this.save = this.getSave();
  }

  redirectById(id: string) {
    this.router.navigateByUrl(`/${id}`);
  }

  getSave() {
    return localStorage.getItem('save');
  }

  download() {
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.save));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href",     dataStr);
    downloadAnchorNode.setAttribute("download", 'data' + ".owsave");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

}
