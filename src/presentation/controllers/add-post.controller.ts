import { IPost } from "@domain/model/post.model";
import { IAddPost } from "@domain/use-cases/addPost";
import {
  badRequest,
  noContent,
  serverError,
} from "presentation/helpers/http-helper";
import { IController } from "presentation/protocols/controller.interface";
import { IHttpResponse } from "presentation/protocols/htttp.interface";
import { IValidation } from "presentation/protocols/validation.interface";

export class AddPostController implements IController {
  constructor(
    private readonly validation: IValidation,
    private readonly addPost: IAddPost
  ) {}

  async handle(request: AddPostController.Request): Promise<IHttpResponse> {
    try {
      const error = this.validation.validate(request);
      if (error) {
        return badRequest(error);
      }
      await this.addPost.create(request);
      return noContent();
    } catch (error) {
      return serverError(error);
    }
  }
}

export namespace AddPostController {
  export type Request = Omit<IPost, "id">;
}
