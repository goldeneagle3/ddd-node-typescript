import { makeAddPostValidation } from "main/factories/controllers/add-post-validation.factory";
import { makeLogControllerDecorator } from "main/factories/decorators/log-controller.factory";
import { makeDBAddPost } from "main/factories/usecases/add-post.factory";
import { AddPostController } from "presentation/controllers/add-post.controller";
import { IController } from "presentation/protocols/controller.interface";

export const makeAddPostController = (): IController => {
  const controller = new AddPostController(
    makeAddPostValidation(),
    makeDBAddPost()
  );

  return makeLogControllerDecorator(controller);
};
