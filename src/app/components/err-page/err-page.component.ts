import { Component } from '@angular/core';
import { TokenService } from '../../shared/services/token.service';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-err-page',
  standalone: true,
  imports: [],
  templateUrl: './err-page.component.html',
  styleUrl: './err-page.component.css'
})
export class ErrPageComponent {
  constructor(private auth: AuthService, private router: Router){};
  backFn(): void{
    if(this.auth.isLoggedIn()){
      this.router.navigate(['/home']);
    }else{
      this.router.navigate(['/'])
    }
  }
}
