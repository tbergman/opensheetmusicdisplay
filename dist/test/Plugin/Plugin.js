"use strict";
var chai = require("chai");
var spies = require("chai-spies");
chai.use(spies);
var MusicSheetAPI_1 = require("../../src/MusicSheetAPI");
var _1 = require("./");
describe("OSMD plugin infrastructure", function () {
    var path = "test/data/MuzioClementi_SonatinaOpus36No1_Part1.xml";
    var doc;
    var osmd;
    function getSheet(filename) {
        return (window.__xml__)[filename];
    }
    before(function (done) {
        doc = getSheet(path);
        chai.expect(doc).to.not.be.undefined;
        done();
    });
    beforeEach(function (done) {
        osmd = new MusicSheetAPI_1.MusicSheetAPI(document.documentElement);
        done();
    });
    afterEach(function (done) {
        osmd = undefined;
        done();
    });
    /*
     * Tests for PluginHost infrastructure and MusicSheetAPI implementation.
     */
    it("registers a plugin", function (done) {
        var plugin = new _1.MockPlugin();
        osmd.registerPlugin(plugin);
        done();
    });
    it("unregisters a plugin", function (done) {
        var plugin = new _1.MockPlugin();
        osmd.registerPlugin(plugin);
        osmd.unregisterPlugin(plugin);
        osmd.registerPlugin(plugin);
        done();
    });
    it("denies registering the same plugin twice", function (done) {
        var plugin = new _1.MockPlugin();
        osmd.registerPlugin(plugin);
        chai.expect(function () { return osmd.registerPlugin(plugin); }).to.throw(/already registered/);
        done();
    });
    /*
     * Tests for IEventSource events.
     */
    /*
     * IEventSource.OnSheetLoaded
     */
    it("triggers on sheet loaded", function (done) {
        var plugin = new _1.MockPlugin();
        osmd.registerPlugin(plugin);
        osmd.load(doc);
        chai.expect(plugin.OnSheetLoadedSpy).to.have.been.called.once();
        done();
    });
    it("triggers on sheet reload", function (done) {
        var plugin = new _1.MockPlugin();
        osmd.registerPlugin(plugin);
        osmd.load(doc);
        chai.expect(plugin.OnSheetLoadedSpy).to.have.been.called.once();
        osmd.load(doc);
        chai.expect(plugin.OnSheetLoadedSpy).to.have.been.called.twice();
        done();
    });
});
