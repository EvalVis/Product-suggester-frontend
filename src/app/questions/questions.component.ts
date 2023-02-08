import {Component, Input, OnInit} from '@angular/core';
import {ControlContainer, FormControl, FormGroupDirective} from "@angular/forms";
import {Subject} from "rxjs";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ]
})
export class QuestionsComponent implements OnInit {

  @Input() question: string | undefined;
  @Input() answers: string[] | undefined;

  @Input() formCtrl!: FormControl

  @Input() canShowErrorEvent = new Subject<boolean>();
  @Input() isCurrentStepValid: boolean | undefined;

  canShowErrorMessage = false;

  ngOnInit(): void {
    this.canShowErrorEvent.subscribe(status => {
      this.canShowErrorMessage = status;
    });
  }

}
