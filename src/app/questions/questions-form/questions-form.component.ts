import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductSuggestionService} from "../../services/product-suggestion.service";
import {Router} from "@angular/router";
import {BaseFormComponent} from "../../forms/base-form/base-form.component";
import {Answer} from "../../models/answer.model";

@Component({
  selector: 'app-questions-form',
  templateUrl: './questions-form.component.html',
  styleUrls: ['./questions-form.component.scss']
})
export class QuestionsFormComponent {

  questionsForm!: FormGroup;
  questions = ["How old are you?", "Are you currently studying?", "What's your income range?"];
  answers = [["0-17", "18-64", "65+"], ["Yes", "No"], ["0", "1-12000", "12001-40000", "40001+"]];
  formControlNames = ["ageRangeControl", "isStudyingControl", "incomeRangeControl"];
  steps = ["Age", "Studies", "Income"];

  constructor(private formBuilder: FormBuilder,
              private productSuggestionService: ProductSuggestionService,
              private router: Router) {
    this.questionsForm = formBuilder.group({
      ageRangeControl: ["", [Validators.required]],
      isStudyingControl: ["", [Validators.required]],
      incomeRangeControl: ["", [Validators.required]],
    });
  }

  onSubmitForm(): void {
    // @ts-ignore
    let formResult = this.questionsForm.value;
    const answer = new Answer(
      formResult['ageRangeControl'],
      formResult['isStudyingControl'] == "Yes",
      formResult['incomeRangeControl']);
    this.productSuggestionService.getSuggestions(answer);
    this.router.navigate(["/product/suggestions"]);
  }

}
