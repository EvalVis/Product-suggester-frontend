import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Answer} from "../../models/answer.model";
import {ProductSuggestionService} from "../../services/product-suggestion.service";
import {Router} from "@angular/router";
import {interval, Subject} from "rxjs";

@Component({
  selector: 'app-questions-form',
  templateUrl: './questions-form.component.html',
  styleUrls: ['./questions-form.component.scss']
})
export class QuestionsFormComponent {
  canShowErrorEvent = new Subject<boolean>();
  formProgressState : FormProgressState;
  questionsForm: FormGroup;

  questions = ["How old are you?", "Are you currently studying?", "What's your income range?"];
  answers = [["0-17", "18-64", "65+"], ["Yes", "No"], ["0", "1-12000", "12001-40000", "40001+"]];
  formControlNames = ["ageRangeControl", "isStudyingControl", "incomeRangeControl"];

  constructor(private formBuilder: FormBuilder, private productSuggestionService: ProductSuggestionService,
              private router: Router) {
    this.formProgressState = FormProgressState.AGE;
    this.questionsForm = this.formBuilder.group({
      ageRangeControl: ["", [Validators.required]],
      isStudyingControl: ["", [Validators.required]],
      incomeRangeControl: ["", [Validators.required]],
    });
  }

  submitForm(): void {
    if(!this.isCurrentStepValid()) {
      this.canShowErrorEvent.next(true);
      return;
    }
    this.canShowErrorEvent.next(false);
    let formResult = this.questionsForm.value;
    const answer = new Answer(
      formResult['ageRangeControl'],
      formResult['isStudyingControl'] == "Yes",
      formResult['incomeRangeControl']);
    this.productSuggestionService.getSuggestions(answer);
    this.router.navigate(["/product/suggestions"]);
  }

  getCurrentState() {
    return this.formProgressState;
  }

  isLastState(): boolean {
    return this.formProgressState === FormProgressState.INCOME
  }

  canMoveToNextState(): boolean {
    return this.isCurrentStepValid() && !this.isLastState();
  }

  canMoveToPreviousState(): boolean {
    return this.formProgressState !== FormProgressState.AGE;
  }

  moveToNextState(): void {
    if(this.canMoveToNextState()) {
      this.canShowErrorEvent.next(false);
      this.formProgressState++;
    }
    else {
      this.canShowErrorEvent.next(true);
    }
  }

  moveToPreviousState(): void {
    if(this.canMoveToPreviousState()) {
      this.formProgressState--;
    }
  }

  isCurrentStepValid(): boolean {
    let currentControlName = this.formControlNames[this.formProgressState];
    // @ts-ignore
    return this.questionsForm.get(currentControlName).valid;
  }

  get stepNames() {
    return ['Age', 'Studies', 'Income'];
  }

}

enum FormProgressState {
  AGE, STUDYING, INCOME
}
