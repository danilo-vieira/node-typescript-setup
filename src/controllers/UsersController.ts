import { Request, Response } from 'express'

import User from '@models/User'

export default class UsersController {
  public async create (request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body

    const user = new User()

    Object.assign(user, {
      name,
      email
    })

    return response.json(user)
  }
}
