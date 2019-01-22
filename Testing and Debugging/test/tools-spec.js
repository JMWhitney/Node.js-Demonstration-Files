var expect = require("chai").expect;
var tools = require("../lib/tools");
var nock = require("nock");

describe("Tools", function () {

    describe("printName()", function () {
        it("Should print the alst name first", function () {

            var results = tools.printName({ first: "Justin", last: "Whitney" });
            expect(results).to.equal("Whitney, Justin");

        });
    });

    describe("loadwiki()", function () {

        before(function () {
            nock("https://en.wikipedia.org")
                .get("/wiki/Abraham_Lincoln")
                .reply(200, "Mock Abraham Lincoln Page");
        });

        it("Load Abraham Lincoln's wikipedia page", function (done) {

            tools.loadWiki({ first: "Abraham", last: "Lincoln" }, function (html) {
                expect(html).to.equal("Mock Abraham Lincoln Page");
                done();
            });

        });
    });

});
