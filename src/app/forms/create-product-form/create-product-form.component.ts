import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ProductSuggestionService} from "../../services/product.service";

@Component({
  selector: 'app-create-product-form',
  templateUrl: './create-product-form.component.html',
  styleUrls: ['./create-product-form.component.scss']
})
export class CreateProductFormComponent {

  questionsForm!: FormGroup;
  questions = ["Please select a new product to add", "Which age range should get this product as a suggestion?",
    "Should students get this product as a suggestion?",
    "What should be the income range of a user to receive this suggestion?"];
  answers = [["Philanthropist", "Spender's account", "Investor's account+"],
    ["0-17", "18-64", "65+"], ["Yes", "No"], ["0", "1-12000", "12001-40000", "40001+"]];
  formControlNames = ["productNameControl", "ageRangeControl", "isStudyingControl", "incomeRangeControl"];
  steps = ["Product", "Age", "Studies", "Income"];

  constructor(private formBuilder: FormBuilder,
              private productSuggestionService: ProductSuggestionService,
              private router: Router) {
    this.questionsForm = formBuilder.group({
      productNameControl: ["", [Validators.required]],
      ageRangeControl: ["", [Validators.required]],
      isStudyingControl: ["", [Validators.required]],
      incomeRangeControl: ["", [Validators.required]],
    });
  }

  onSubmitForm(): void {
    // @ts-ignore
    let formResult = this.questionsForm.value;
    this.productSuggestionService.createProduct({
      "product": {"name": formResult[this.formControlNames[0]]},
      "answer": {
        "ageRange": formResult[this.formControlNames[1]],
        "studying": formResult[this.formControlNames[2]] == "Yes",
        "incomeRange": formResult[this.formControlNames[3]]
      }
    }).subscribe();
    this.router.navigate(["/questions-form"]);
  }

}
