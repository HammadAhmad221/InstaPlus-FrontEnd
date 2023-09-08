import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  constructor(private router: Router) { }

  navigateToOptimizePage() {
    this.router.navigate(['/optimize-loading']); // Replace '/next' with the path of the route you want to navigate to
  }
  

}
