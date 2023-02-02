const JOI = require('joi')

class authUserModelJOI{

  constructor(object){
    this.username = object.username;
    this.password = object.password;
  }

static #baselineValidation = {
    username: JOI.string().required().min(3).max(20),
    password: JOI.string().required().min(8).max(12),
}

  static #registerValidation = JOI.object(authUserModelJOI.#baselineValidation);
  static #loginValidation = JOI.object(authUserModelJOI.#baselineValidation);
  

  validateRegistration() {

    const result = authUserModelJOI.#registerValidation.validate(this, {abortEarly: false});
    return result.error ? result.error : null;
  }

  validatePLogin() {

    const result = authUserModelJOI.#loginValidation.validate(this, {abortEarly: false});
    return result.error ? result.error : null;
  }

}

module.exports = authUserModelJOI;