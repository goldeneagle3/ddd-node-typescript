import { IAddPost } from "@domain/use-cases/addPost";

export interface IAddPostRepository {
  add: (data: IAddPostRepository.Params) => Promise<void>;
}

export namespace IAddPostRepository {
  export type Params = IAddPost.Params;
}
