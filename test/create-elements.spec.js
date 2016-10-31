var jsdom = require('mocha-jsdom')

var expect = require("chai").expect;
const {dom} = require("../index");



describe("Creating elements", function() {
  jsdom()

  it("empty div", function() {
    expect(dom.div().outerHTML).to.equal("<div></div>")
  })

  it("div with one child", function() {
    expect(dom.div({}, dom.div()).outerHTML)
      .to.equal("<div><div></div></div>")
  })

  it("div with one attr", function() {
    expect(dom.div({id: "foo"}).outerHTML)
    .to.equal("<div id=\"foo\"></div>")
  })

  it("div with a class", function() {
    expect(dom.div({className: "foo"}).outerHTML)
    .to.equal("<div class=\"foo\"></div>")
  })

  it("div with an onX attr", function() {
    expect(dom.div({onClick: function(yay) {}}).outerHTML)
      .to.equal("<div onclick=\"function (yay) {}\"></div>")
  })

  it("div with one style", function() {
    expect(dom.div({style: {backgroundColor: "blue"}}).outerHTML)
      .to.equal("<div style=\"backgroundColor: blue;\"></div>");
  })

  it("div with some styles", function() {
    expect(dom.div({style: {backgroundColor: "blue", color: "red"}}).outerHTML)
      .to.equal("<div style=\"backgroundColor: blue; color: red;\"></div>");
  })


})
