import { Component, OnInit } from '@angular/core';
import { UploadOutput } from 'ngx-uploader';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.css']
})
export class FileUploaderComponent implements OnInit {

  options = { concurrency: 1, maxUploads: 50, allowedContentTypes: ['image/jpeg', 'image/png'] };

  files: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  handleUpload(output: UploadOutput): void {
    if (output.type !== 'addedToQueue') {
      this.files.push(output.nativeFile);
    }
  }

}
