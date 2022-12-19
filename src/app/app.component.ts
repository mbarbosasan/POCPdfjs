import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  title = 'my-app';
  file: any;

  constructor() {}

  ngOnInit(): void {
  }

  uploadFile(file: any) {
    const element = event?.currentTarget as HTMLInputElement;
    let fileList = element!.files;

    if (typeof (FileReader) !== "undefined") {
      let reader = new FileReader();

      reader.onload = (e: any) => {
        this.file = e.target.result;
      }

      reader.readAsArrayBuffer(fileList![0])

    }



    this.file = fileList;
    console.log(file)
    console.log(fileList);
  }


}
