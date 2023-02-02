const crypto = require("../");
const expect = require("chai").expect;

describe("Crypto", () => {
  const originalText = "secret message";
  const key = "key";

  it("should encrypt and decrypt data", () => {
    const encrypted = crypto.encrypt(originalText, key);
    const decrypted = crypto.decrypt(encrypted, key);
    expect(decrypted).to.equal(originalText);
  });
});
