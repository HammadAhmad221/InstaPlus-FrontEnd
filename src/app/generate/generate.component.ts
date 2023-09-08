import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.scss']
})
export class GenerateComponent {
  constructor(private router:Router){}
  generateResult(){
    this.router.navigate(['/generate-result']);
  }

}
