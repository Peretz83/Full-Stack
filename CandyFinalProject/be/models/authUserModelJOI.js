const JOI = require('joi')

class authUserModelJOI{

  constructor(object){
    this.business = object.business;
    this.username = object.username;
    this.email = object.email;
    this.password = object.password;
  }

static #baselineValidation = {
    username: JOI.string().required().min(3).max(20),
    password: JOI.string().required().min(5).max(12)
}

  static #registerValidation = JOI.object(authUserModelJOI.#baselineValidation).keys({business: JOI.boolean().required(), email: JOI.string().required()});
  static #loginValidation = JOI.object(authUserModelJOI.#baselineValidation);
  

  validateRegistration() {

    const result = authUserModelJOI.#registerValidation.validate(this, {abortEarly: false});
    return result.error ? result.error : null;
  }

  validateLogin() {

    const result = authUserModelJOI.#loginValidation.validate(this, {abortEarly: false});
    return result.error ? result.error : null;
  }

}

module.exports = authUserModelJOI;