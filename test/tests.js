test('Set Up Tests', function() {
  ok(clock, "clock exists");
});

test('querySelector', function() {
  ok(document.querySelector('#clock'), "document.querySelector works fine");
});