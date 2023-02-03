const JOI = require('joi')

class candyModelJoi{

  constructor(object){
    
    this.prod_id = object.prod_id;
    this.title = object.title;
    this.description = object.description;
    this.price = object.price;
    this.in_stock = object.in_stock;
    this.image = object.image;
    
    
  }


static #baselineValidation = {
   prod_id: JOI.number().required(),
      title: JOI.string().required().min(1).max(50),
      description: JOI.string().required().min(1).max(200),
      price: JOI.number().required(),
      in_stock: JOI.number().min(1).max(10000),
      image: JOI.string()
}


static #postValidation = JOI.object(candyModelJoi.#baselineValidation);
static #putValidation = JOI.object(candyModelJoi.#baselineValidation);
  validatePost() {
   
   const result = candyModelJoi.#postValidation.validate(this, {abortEarly: false});
    return result.error ? result.error : null;
  }

  validatePut() {

    const result = candyModelJoi.#putValidation.validate(this, {abortEarly: false});
    return result.error ? result.error : null;
  }
}

module.exports = candyModelJoi;