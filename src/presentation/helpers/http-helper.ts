import { ServerError } from "presentation/errors/server.error";
import { UnauthorizedError } from "presentation/errors/unauthorized.error";
import { IHttpResponse } from "presentation/protocols/htttp.interface";

export const badRequest = (error: Error): IHttpResponse => ({
  statusCode: 400,
  body: error,
});

export const forbidden = (error: Error): IHttpResponse => ({
  statusCode: 403,
  body: error,
});

export const unauthorized = (): IHttpResponse => ({
  statusCode: 400,
  body: new UnauthorizedError(),
});

export const serverError = (error: Error): IHttpResponse => ({
  statusCode: 500,
  body: new ServerError(error.stack),
});

export const created = (data: any): IHttpResponse => ({
  statusCode: 201,
  body: data,
});

export const ok = (data: any): IHttpResponse => ({
  statusCode: 200,
  body: data,
});

export const noContent = (): IHttpResponse => ({
  statusCode: 204,
  body: null,
});
