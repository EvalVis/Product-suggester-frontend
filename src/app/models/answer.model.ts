export class Answer {

  constructor(private _ageRange: string, private _studying: boolean, private _incomeRange: string) {
  }


  get ageRange(): string {
    return this._ageRange;
  }

  set ageRange(value: string) {
    this._ageRange = value;
  }

  get isStudying(): boolean {
    return this._studying;
  }

  set isStudying(value: boolean) {
    this._studying = value;
  }

  get incomeRange(): string {
    return this._incomeRange;
  }

  set incomeRange(value: string) {
    this._incomeRange = value;
  }

}
