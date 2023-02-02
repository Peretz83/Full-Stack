const JOI = require('joi')

class ProductModelJOI{

  constructor(object){
    this.isbn = object.isbn;
    this.title = object.title;
    this.description = object.description;
    this.price = object.price;
    this.quantity = object.quantity;
  }

static #baselineValidation = {
  isbn: JOI.number().required(),
      title: JOI.string().required().min(2).max(400),
      description: JOI.string(),
      price: JOI.number().required().min(1).max(200),
      quantity: JOI.number().required()
}

  static #postValidation = JOI.object(ProductModelJOI.#baselineValidation).keys({id: JOI.string().forbidden()});
  static #putValidation = JOI.object(ProductModelJOI.#baselineValidation);
  static #deleteValidation = JOI.object({id: JOI.string().forbidden(), isbn: JOI.number().required()});

  validatePost() {

    const result = ProductModelJOI.#postValidation.validate(this, {abortEarly: false});
    return result.error ? result.error : null;
  }

  validatePut() {

    const result = ProductModelJOI.#putValidation.validate(this, {abortEarly: false});
    return result.error ? result.error : null;
  }

  validateDelete() {

    const result = ProductModelJOI.#deleteValidation.validate(this, {abortEarly: false});
    return result.error ? result.error : null;
  }
}

module.exports = ProductModelJOI;