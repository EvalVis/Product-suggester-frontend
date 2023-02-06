import {Component} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductSuggestionService} from "../../services/product-suggestion.service";
import {Answer} from "../../models/answer.model";

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

  constructor(private formBuilder: FormBuilder, private productSuggestionService: ProductSuggestionService) {
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
      this.productSuggestionService.getSuggestions(answer).subscribe(products => {
        console.log(products);
      });
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
