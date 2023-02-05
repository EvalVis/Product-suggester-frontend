import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-progress-chain',
  templateUrl: './progress-chain.component.html',
  styleUrls: ['./progress-chain.component.scss']
})
export class ProgressChainComponent {
  @Input() stepNames: string[];
  selectedChainMember = 0;

  constructor() {
    this.stepNames = [];
  }

  selectChainMember(index: number) {
    this.selectedChainMember = index;
  }

  isCurrentSelection(index: number) : boolean {
    return this.selectedChainMember === index;
  }

  isBeforeCurrentSelection(index: number) : boolean {
    return index < this.selectedChainMember;
  }

  isAfterCurrentSelection(index: number) : boolean {
    return !(this.isBeforeCurrentSelection(index) || this.isCurrentSelection(index));
  }

}
