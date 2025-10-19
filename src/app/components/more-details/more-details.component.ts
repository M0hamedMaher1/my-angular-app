import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MoreDetailsService } from '../../shared/services/more-details.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-more-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './more-details.component.html',
  styleUrl: './more-details.component.css'
})
export class MoreDetailsComponent implements OnInit {
  constructor(public moreDetails: MoreDetailsService, private activeR: ActivatedRoute){};
  ngOnInit(): void {
    this.activeR.paramMap.subscribe((res: ParamMap) => {
      const id = Number(res.get('id'));
      this.moreDetails.loadProduct(id);
    });
  };
}
