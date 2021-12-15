import { ServerError } from '../errors/server-error'
import { HttpResponse } from '../protocols/http'

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
}) // coloquei o parenteses após => para representar um return

export const serverError = (): HttpResponse => ({
  statusCode: 500,
  body: new ServerError()
})
