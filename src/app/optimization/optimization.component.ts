import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-optimization',
  templateUrl: './optimization.component.html',
  styleUrls: ['./optimization.component.scss']
})
export class OptimizationComponent {
constructor(private router:Router){}

OptimizedResultPage(){
  // this.router.navigate(['/post']);
  this.router.navigate(['/optimize-result']);

}
}
