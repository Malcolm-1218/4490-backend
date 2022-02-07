import { Router } from 'express';
import RecipientController from '@controllers/recipient.controller';
import { Routes } from '@interfaces/routes.interface';

class RecipientRoute implements Routes {
  public path = '/recipients';
  public router = Router();
  public recController = new RecipientController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    /** GET data to populate a recipient's dashboard.
     * @openapi
     * /recipients/{id}:
     *    get:
     *      tags:
     *      - Recipients
     *      summary: Find User By Id
     *      produces:
     *      - "application/json"
     *      parameters:
     *      - name: id
     *        in: path
     *        description: Recipient Id
     *        required: true
     *        type: integer
     *
     *      responses:
     *        200:
     *          description: 'OK'
     *          content:
     *            application/json:
     *              schema:
     *                type: object
     *                properties:
     *                  recInfo:
     *                    type: array
     *                    items:
     *                      type: object
     *                      properties:
     *                        id:
     *                          type: integer
     *                          example: 42
     *                        name:
     *                          type: string
     *                          example: Donald trump
     *                        ideology:
     *                          type: float
     *                          example: -0.15
     *                        party:
     *                          type: string
     *                          example: "Republican Party"
     *                  donationsByMonth:
     *                    type: array
     *                    items:
     *                      type: object
     *                      properties:
     *                        month_start_date:
     *                          type: string
     *                          example: 2012-12-01T00:00:00.000Z
     *                        amount_donated:
     *                          type: float
     *                          example: 12345.67
     *                  topDonators:
     *                    type: array
     *                    items:
     *                      type: object
     *                      properties:
     *                        name:
     *                          type: string
     *                          example: Walmart
     *                        total_amount:
     *                          type: float
     *                          example: 12345.67
     *        404:
     *          description: 'Not Found'
     *        500:
     *          description: 'Server Error'
     */
    this.router.get(`${this.path}/:id(\\w+)`, this.recController.getRecipientData);
  }
}

export default RecipientRoute;