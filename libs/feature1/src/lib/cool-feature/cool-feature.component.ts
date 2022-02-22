import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DataService } from '@nx-vim/data';

@Component({
  selector: 'nx-vim-cool-feature',
  templateUrl: './cool-feature.component.html',
  styleUrls: ['./cool-feature.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoolFeatureComponent {
  constructor(private dataService: DataService) {
    const result$ = this.dataService.getDataFromServer();
  }
}
