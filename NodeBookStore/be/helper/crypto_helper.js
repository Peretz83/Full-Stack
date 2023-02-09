const crypto = require("crypto")

function hash(text){
  if(!text) return null

  const salt = "LeeIsTheMan"
  return crypto.createHmac("sha512", salt).update(text).digest("hex")
}

module.exports = {
  hash
}