import { IPost } from "@domain/model/post.model";

export interface IAddPost {
  create: (data: IAddPost.Params) => Promise<void>;
}

export namespace IAddPost {
  export type Params = Omit<IPost, "id">;
}
