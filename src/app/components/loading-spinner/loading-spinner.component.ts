import { Component, inject } from '@angular/core';
import { LoadingSpinnerService } from '../../shared/services/loading-spinner.service';

@Component({
  selector: 'app-loading-spinner',
  standalone: true,
  imports: [],
  templateUrl: './loading-spinner.component.html',
  styleUrl: './loading-spinner.component.css'
})
export class LoadingSpinnerComponent {
  isLoading = inject(LoadingSpinnerService);
}
