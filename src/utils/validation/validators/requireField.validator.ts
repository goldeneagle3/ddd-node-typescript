import { MissingParamError } from "presentation/errors/missingParam.error";
import { IValidation } from "presentation/protocols/validation.interface";

export class RequiredFieldValidation implements IValidation {
  constructor(private readonly fieldName: string) {}

  validate(input: any): Error {
    if (!input[this.fieldName]) {
      return new MissingParamError(this.fieldName);
    }
  }
}
