(function()
{
"use strict";

angular.module('sandbox.filters', []).
  //
  // Meh.
  filter("toString", function()
  {
    return function(bool)
    {
      return bool ? "true" : "false";
    };
  });
})();
