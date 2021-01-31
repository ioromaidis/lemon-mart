import { NgModule } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatTooltipModule } from '@angular/material/tooltip'

@NgModule({
  exports: [MatButtonModule, MatToolbarModule, MatIconModule, MatTooltipModule],
})
export class MaterialModule {}
