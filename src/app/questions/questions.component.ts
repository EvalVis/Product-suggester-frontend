import {AfterViewInit, Component, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ControlContainer, ControlValueAccessor, FormGroupDirective} from "@angular/forms";
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
export class QuestionsComponent implements ControlValueAccessor, AfterViewInit, OnChanges, OnInit {

  @Input() question: string | undefined;
  @Input() answers: string[] | undefined;

  @Input() formControlName = "";

  @Input() canShowErrorEvent = new Subject<boolean>();
  @Input() isCurrentStepValid: boolean | undefined;

  canShowErrorMessage = false;

  ngOnInit(): void {
    this.canShowErrorEvent.subscribe(status => {
      this.canShowErrorMessage = status;
    });
  }

  ngAfterViewInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  registerOnChange(fn: any): void {
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
  }

}
