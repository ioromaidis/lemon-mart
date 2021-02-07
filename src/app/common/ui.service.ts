import { Injectable } from '@angular/core'
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar'
import { Observable } from 'rxjs'

import { SimpleDialogComponent } from './simple-dialog.component'

@Injectable()
export class UiService {
  constructor(private snackbar: MatSnackBar, private dialog: MatDialog) {}

  showToast(message: string, action = 'close', config?: MatSnackBarConfig): void {
    this.snackbar.open(message, action, config || { duration: 7000 })
  }

  showDialog(
    title: string,
    content: string,
    okText = 'OK',
    cancelText?: string,
    customConfig?: MatDialogConfig
  ): Observable<boolean> {
    const dialogRef = this.dialog.open(
      SimpleDialogComponent,
      customConfig || { width: '300px', data: { title, content, okText, cancelText } }
    )

    return dialogRef.afterClosed()
  }
}
