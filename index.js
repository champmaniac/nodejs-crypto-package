const CryptoJS = require("crypto-js");

module.exports = {
  encrypt: (data, key) => {
    const ciphertext = CryptoJS.AES.encrypt(data, key).toString();
    return ciphertext;
  },
  decrypt: (data, key) => {
    const bytes = CryptoJS.AES.decrypt(data, key);
    const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
    return decryptedData;
  },
};
