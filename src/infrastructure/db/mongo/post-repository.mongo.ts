import { IAddPostRepository } from "dal/protocols/db/post/add-post-repo.interface";
import { MongoHelper } from "infrastructure/db/mongo/mongo-helper";

export class PostMongoRepository implements IAddPostRepository {
  async add(data: IAddPostRepository.Params): Promise<void> {
    const postCollection = MongoHelper.getCollection("posts");
    await postCollection.insertOne(data);
  }
}
