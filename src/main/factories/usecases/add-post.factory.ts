import { IAddPost } from "@domain/use-cases/addPost";
import { AddPostDb } from "dal/repository/add-post.repository";
import { PostMongoRepository } from "infrastructure/db/mongo/post-repository.mongo";

export const makeDBAddPost = (): IAddPost => {
  const postMongoRepository = new PostMongoRepository();
  return new AddPostDb(postMongoRepository);
};
