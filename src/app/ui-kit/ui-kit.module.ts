import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletConnectComponent } from './wallet-connect/wallet-connect.component';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { NgxUploaderModule } from 'ngx-uploader';



@NgModule({
  declarations: [
    WalletConnectComponent,
    FileUploaderComponent
  ],
  exports: [
    WalletConnectComponent,
    FileUploaderComponent
  ],
  imports: [
    CommonModule,
    NgxUploaderModule
  ]
})
export class UiKitModule { }
