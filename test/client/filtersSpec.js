describe("filter", function()
{
  beforeEach(angular.mock.module("sandbox.filters"));

  describe("toString", function() {
    it("should return string representation of boolean", inject(function(toStringFilter)
    {
      expect(toStringFilter(false)).toEqual("false");
      expect(toStringFilter(true)).toEqual("true");
      // Are these really optimal?
      expect(toStringFilter()).toEqual("false");
      expect(toStringFilter("random input")).toEqual("true");
      expect(toStringFilter(0)).toEqual("false");
    }));
  });
});