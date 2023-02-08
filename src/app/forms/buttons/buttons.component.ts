import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent {

  @Input() isLastState!: boolean;
  @Input() isCurrentStepValid!: boolean;
  @Input() canMoveToPreviousState!: boolean;

  @Output() moveToPreviousStateEvent = new EventEmitter<void>;
  @Output() moveToNextStateEvent = new EventEmitter<void>;

  moveToPreviousState() {
    this.moveToPreviousStateEvent.emit();
  }

  moveToNextState() {
    this.moveToNextStateEvent.emit();
  }

}
