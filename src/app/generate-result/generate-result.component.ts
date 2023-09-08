import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generate-result',
  templateUrl: './generate-result.component.html',
  styleUrls: ['./generate-result.component.scss']
})
export class GenerateResultComponent {
  constructor(private router:Router){}
  regenerate(){
    this.router.navigate(['/generate']);
  }

}
