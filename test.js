let assert = require("assert");
let add = require("./add");

describe("Add Tests", () => {

    it("should return 0 for an empty string", () => {
        assert.equal(add(""), 0);
    });

    it("should return the number for a single number", () => {
        assert.equal(add("1"), 1);
    });

    it("should return the sum of comma delimited numbers", () => {
        assert.equal(add("1,2"), 3);
    });

    it("should return sum of any number of comma delimeted numbers", () => {
        assert.equal(add("1,2,3"), 6);
    });

    it("should return sum for newline and comma delimited numbers", () => {
        assert.equal(add("1,2\n3"), 6);
    });

    it("should return sum for custom delimites", () => {
        assert.equal(add("//;\n1;2;3"), 6);
    });

    it("should throw an error on negative numbers", () => {
        assert.throws(() => add("-1,2,-3"), /Negatives -1,-3/);
    });

    it("should ignore numbers larger than 1000", () => {
        assert.equal(add("1001,2,3"), 5);
    });

    it("should return the sum for custom delimiters of multi length", () => {
        assert.equal(add("//[***]\n1***2***3"), 6);
    });

    it("should return the sum for mutliple custom delimiters", () => {
        assert.equal(add("//[*][$]\n1*2$3"), 6);
    });

    it("should return sum of multiple long custom delimiters", () => {
        assert.equal(add("//[***][$$$]\n1***2$$$3"), 6);
    });
})