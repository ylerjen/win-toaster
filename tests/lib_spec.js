var helloWorld = require('../src/lib.js');

describe("The Hello World function", function() {
    
  it("should say hello to the passed name", function() {
    var name = 'Yann';
    var result = helloWorld(name);
    var expected = 'Hello Yann';
    expect(result).toEqual(expected);
  });
  
  it("should say hello to 'world' if no name is passed", function() {
    var result = helloWorld();
    var expected = 'Hello World';
    expect(result).toEqual(expected);
  });
  
  it("should fail to show the notification", function() {
     expect(true).toBe(false); 
  });
});