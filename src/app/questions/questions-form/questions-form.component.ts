import {Component, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductSuggestionService} from "../../services/product-suggestion.service";
import {Answer} from "../../models/answer.model";
import {Subject} from "rxjs";
import {Product} from "../../models/product.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-questions-form',
  templateUrl: './questions-form.component.html',
  styleUrls: ['./questions-form.component.scss']
})
export class QuestionsFormComponent {

  ageRanges = ["0-17", "18-64", "65+"];
  studyingStatuses = [true, false];
  incomeRanges = ["0", "1-12000", "12001-40000", "40001+"];

  formProgressState : FormProgressState;

  questionsForm: FormGroup;

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
    let formResult = this.questionsForm.value;
    const answer = new Answer(
      formResult['ageRangeControl'],
      formResult['isStudyingControl'],
      formResult['incomeRangeControl']);
    this.productSuggestionService.getSuggestions(answer);
    this.router.navigate(["/product/suggestions"]);
  }

  moveToNextState(): void {
    if(this.canMoveToNextState()) {
      this.formProgressState++;
    }
  }

  moveToPreviousState(): void {
    if(this.canMoveToPreviousState()) {
      this.formProgressState--;
    }
  }

  canMoveToNextState(): boolean {
    return this.formProgressState !== FormProgressState.INCOME;
  }

  canMoveToPreviousState(): boolean {
    return this.formProgressState !== FormProgressState.AGE;
  }

  getFormProgressStates() {
    return FormProgressState;
  }

  get stepNames() {
    return ['Age', 'Studies', 'Income'];
  }

}

enum FormProgressState {
  AGE, STUDYING, INCOME
}
