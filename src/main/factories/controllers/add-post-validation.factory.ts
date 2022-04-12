import { ValidationComposite } from "@utils/validation/validators/composite.validation";
import { RequiredFieldValidation } from "@utils/validation/validators/requireField.validator";
import { IValidation } from "presentation/protocols/validation.interface";

export const makeAddPostValidation = (): ValidationComposite => {
  const validations: IValidation[] = [];
  for (const field of ["title", "author", "text"]) {
    validations.push(new RequiredFieldValidation(field));
  }
  return new ValidationComposite(validations);
};
