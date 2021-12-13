import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helper/http-helper'
export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return badRequest(new MissingParamError('name'))
    }
    if (!httpRequest.body.email) {
      return badRequest(new MissingParamError('email'))
    }

    const requiredFields = ['name', 'email']

    requiredFields.forEach(field => {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    })

    return {
      statusCode: 200,
      body: 'sucesso'
    }
  }
}
