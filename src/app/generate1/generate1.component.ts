import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generate1',
  templateUrl: './generate1.component.html',
  styleUrls: ['./generate1.component.scss']
})
export class Generate1Component {
constructor(private router:Router){}
navigateToGeneratePage(){
  this.router.navigate(['/generate-loading']);
}
}
