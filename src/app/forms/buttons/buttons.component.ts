import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent {

  @Input() isLastState: boolean | undefined;
  @Input() isCurrentStepValid: boolean | undefined;
  @Input() canMoveToPreviousState: boolean | undefined;

  @Output() moveToPreviousStateEvent = new EventEmitter<void>;
  @Output() moveToNextStateEvent = new EventEmitter<void>;

  moveToPreviousState() {
    this.moveToPreviousStateEvent.emit();
  }

  moveToNextState() {
    this.moveToNextStateEvent.emit();
  }

}
