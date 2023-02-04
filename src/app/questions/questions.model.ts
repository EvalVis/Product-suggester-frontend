export class Questions {

  constructor(private _ageRange: string, private _isStudent: boolean, private _incomeRange: string) {
  }


  get ageRange(): string {
    return this._ageRange;
  }

  set ageRange(value: string) {
    this._ageRange = value;
  }

  get isStudent(): boolean {
    return this._isStudent;
  }

  set isStudent(value: boolean) {
    this._isStudent = value;
  }

  get incomeRange(): string {
    return this._incomeRange;
  }

  set incomeRange(value: string) {
    this._incomeRange = value;
  }

}
