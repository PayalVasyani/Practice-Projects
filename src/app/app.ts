import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LucidIconsModule } from './lucid-icons/lucid-icons.module';


@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, CommonModule, FormsModule, 
    LucidIconsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(private cdr: ChangeDetectorRef) {}
   templates = [
    { name: 'Product Template', icon: 'Home' },
    { name: 'Invoice Template', icon: 'FileText' },
    { name: 'Report Template', icon: 'BarChart3' },
  ];

  selectedTemplate: any = null;
  generatedLayout: any = null;
  isLoading = false;

  generateTemplate() { 
    if (!this.selectedTemplate) return;
    
    this.isLoading = true;
    this.generatedLayout = null;

    setTimeout(() => {
      const gradients = [
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)',
        'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)'
      ];
      const randomIndex = Math.floor(Math.random() * gradients.length);

      this.generatedLayout = {
        ...this.selectedTemplate,
        background: gradients[randomIndex],
        description: 'An adaptive template design generated dynamically.'
      };
      this.isLoading = false;
      this.cdr.detectChanges(); 
    }, 100); // simulate “AI” generation delay
  }
}
