import { IAddPost } from "@domain/use-cases/addPost";
import { IAddPostRepository } from "@dal/protocols/db/post/add-post-repo.interface";

export class AddPostDb implements IAddPost {
  constructor(private readonly addPostRepository: IAddPostRepository) {}

  async create(data: IAddPost.Params): Promise<void> {
    console.log(data);
    await this.addPostRepository.add(data);
  }
}
