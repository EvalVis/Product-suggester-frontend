import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ProductSuggestionService} from "../../services/product.service";

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
    let formResult = this.questionsForm.value;
    this.productSuggestionService.getSuggestions({
      "ageRange": formResult[this.formControlNames[0]],
      "studying": formResult[this.formControlNames[1]] == "Yes",
      "incomeRange": formResult[this.formControlNames[2]]
    });
    this.router.navigate(["/product/suggestions"]);
  }

}
