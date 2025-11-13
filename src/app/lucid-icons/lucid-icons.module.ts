import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { BarChart3, FileText, Home, Star } from 'lucide-angular/src/icons';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LucideAngularModule.pick({ Home, FileText, BarChart3 })
  ],
   exports: [LucideAngularModule]
})
export class LucidIconsModule { }
