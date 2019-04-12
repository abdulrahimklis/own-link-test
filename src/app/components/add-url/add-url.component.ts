import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-add-url',
  templateUrl: './add-url.component.html',
  styleUrls: ['./add-url.component.sass']
})

export class AddURLComponent {
  @ViewChild('url') url: ElementRef;
  @ViewChild('name') name: ElementRef;
  @ViewChild('description') description: ElementRef;

  public URLs;
  public Names;
  public Desc;

  getLocalData () {
    this.URLs     = localStorage.getItem('urls');
    this.Names    = localStorage.getItem('names');
    this.Desc     = localStorage.getItem('descriptions');

    return {
      url:   this.URLs,
      names: this.Names,
      desc:  this.Desc
    }
  }

  onClick () {
    let localData = this.getLocalData();

    let newUrls           = localData.url;
    let newNames          = localData.names;
    let newDescriptions   = localData.desc;

    let newURL            = newUrls.split(",");
    let newNAME           = newNames.split(",");
    let newDESCRIPTIONS   = newDescriptions.split(",");

    newURL.push(this.url.nativeElement.value);
    newNAME.push(this.name.nativeElement.value);
    newDESCRIPTIONS.push(this.description.nativeElement.value);

    let urlString     = newURL.join();
    let nameString    = newNAME.join();
    let descString    = newDESCRIPTIONS.join();

    localStorage.setItem("urls", urlString);
    localStorage.setItem("names", nameString);
    localStorage.setItem("descriptions", descString);

  }
}
