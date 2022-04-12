import { ILogErrorRepository } from "dal/protocols/db/log/log-error-repo.interface";
import { IController } from "presentation/protocols/controller.interface";
import { IHttpResponse } from "presentation/protocols/htttp.interface";

export class LogControllerDecorator implements IController {
  constructor(
    private readonly controller: IController,
    private readonly logErrorRepository: ILogErrorRepository
  ) {}

  async handle(request: any): Promise<IHttpResponse> {
    const httpResponse = await this.controller.handle(request);
    if (httpResponse.statusCode === 500) {
      await this.logErrorRepository.logError(httpResponse.body.stack);
    }
    return httpResponse;
  }
}
