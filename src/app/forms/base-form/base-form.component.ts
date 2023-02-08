import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Subject} from "rxjs";
import {FormGroup} from "@angular/forms";
import {Answer} from "../../models/answer.model";

@Component({
  selector: 'app-base-form',
  templateUrl: './base-form.component.html',
  styleUrls: ['./base-form.component.scss']
})
export class BaseFormComponent {

  canShowErrorEvent = new Subject<boolean>();
  @Output() submitFormEvent = new EventEmitter<void>();
  formProgressTracker = 0;
  @Input() questionsForm!: FormGroup;
  @Input() questions!: string[];
  @Input() answers!: string[][];
  @Input() formControlNames!: string[];
  @Input() steps!: string[];


  submitForm(): void {
    if(!this.isCurrentStepValid()) {
      this.canShowErrorEvent.next(true);
      return;
    }
    this.canShowErrorEvent.next(false);
    this.submitFormEvent.next();
  }

  getCurrentState() {
    return this.formProgressTracker;
  }

  isLastState(): boolean {
    return this.formProgressTracker === (this.questions.length - 1);
  }

  canMoveToNextState(): boolean {
    return this.isCurrentStepValid() && !this.isLastState();
  }

  canMoveToPreviousState(): boolean {
    return this.formProgressTracker > 0;
  }

  moveToNextState(): void {
    if(this.canMoveToNextState()) {
      this.canShowErrorEvent.next(false);
      this.formProgressTracker++;
    }
    else {
      this.canShowErrorEvent.next(true);
    }
  }

  moveToPreviousState(): void {
    if(this.canMoveToPreviousState()) {
      this.formProgressTracker--;
    }
  }

  isCurrentStepValid(): boolean {
    let currentControlName = this.formControlNames[this.formProgressTracker];
    // @ts-ignore
    return this.questionsForm.get(currentControlName).valid;
  }

}
