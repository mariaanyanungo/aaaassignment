
//1. Greeting fallback 

function greet(name) { 
 return name || "Guest"; 
} 
test('returns Guest when name is empty', () => { 
 // Arrange 
 const name = ""; 
 // Act 
 const result = greet(name); 
 // Assert 
 expect(result).toBe("Guest"); 
}); 
//2. Boolean toggle 

function toggle(value) { 
 return !value; 
}
test('toggles boolean value', () => {  // Arrange 
 const input = "True"; 
 // Act 
 const result = toggle(value); 
 // Assert 
 expect(result).toBe(False); 
}); 
//3. Add item to array 

function addItem(arr, item) { 
 arr.push(item); 
 return arr; 
} 
test('adds item to array', () => {  // Arrange 
 const arr = [1,2,3,4]; 
 // Act 
 const result = addItem([1,2,3,4] ,[5,6,7]); 
 // Assert 
 expect(result).toEqual([1,2,3,4,[5,6,7]]); }); 
//4. Remove item from array 

function removeItem(arr, item) {  return arr.filter(i => i !== item); } 
test('removes item from array', () => {  // Arrange 
 const arr = [7,8,9,0];
 // Act 
 const result =removeItem(arr, 8); 
 // Assert 
 expect(result).toEqual([7,9,0]); 
}); 
//5. Check password length 

function isValidPassword(password) { 
 return password.length >= 6; 
} 
test('returns true for valid password length', () => {  // Arrange 
 const password = "12f";
 // Act 
 const result =isValidPassword("12f") ; 
 // Assert 
 expect(result).toBe(False); 
}); 
//Stage 2: Real QA Thinking (Create Your Own Tests) 
//Write at least 5 test cases for each function using the AAA pattern. Include: Positive, Negative, Boundary, and Edge cases. 

function isValidPassword(password) { 
 return password.length >= 6; 
}
test('returns true for valid password length', () => {  // Arrange 
 const password = "ty4";
 // Act 
 const result =isValidPassword("ty4") ; 
 // Assert 
 expect(result).toBe(False); 
}); 

function isValidPassword(password) { 
 return password.length >= 6; 
}
test('returns true for valid password length', () => {  // Arrange 
 const password = "rty65h";
 // Act 
 const result =isValidPassword("rty65h") ; 
 // Assert 
 expect(result).toBe(True); 
}); 

function isValidPassword(password) { 
 return password.length >= 6; 
}
test('returns true for valid password length', () => {  // Arrange 
 const password = "hyiu6744fr";
 // Act 
 const result =isValidPassword("hyiu6744fr") ; 
 // Assert 
 expect(result).toBe(True); 
}); 

function isValidPassword(password) { 
 return password.length >= 6; 
}
test('returns true for valid password length', () => {  // Arrange 
 const password = "";
 // Act 
 const result =isValidPassword("") ; 
 // Assert 
 expect(result).toBe(False); 
}); 

function isValidPassword(password) { 
 return password.length >= 6; 
}
test('returns true for valid password length', () => {  // Arrange 
 const password = "123456";
 // Act 
 const result =isValidPassword("123456") ; 
 // Assert 
 expect(result).toBe(True); 
}); 

function isValidPassword(password) { 
 return password.length >= 6; 
}
test('returns true for valid password length', () => {  // Arrange 
 const password = "abcdef";
 // Act 
 const result =isValidPassword("abcdef") ; 
 // Assert 
 expect(result).toBe(True); 
}); 

function isValidPassword(password) { 
 return password.length >= 6; 
}
test('returns true for valid password length', () => {  // Arrange 
 const password = "134567890";
 // Act 
 const result =isValidPassword("1234567890") ; 
 // Assert 
 expect(result).toBe(True); 
}); 

function isValidPassword(password) { 
 return password.length >= 6; 
}
test('returns true for valid password length', () => {  // Arrange 
 const password = "qwertyuiopasdfghjkl";
 // Act 
 const result =isValidPassword("qwertyuiopasdfghjkl") ; 
 // Assert 
 expect(result).toBe(True); 
}); 


function containsWord(sentence, word) {
      return sentence.includes(word);
} 
test("returns True for a word that is contained in the sentence", () =>{//Arrange
    const sentence = "If I perish I perish";
    //Act
    const result = containsWord(sentence, "If");
    //Assert
    expect(result).toBe(True);

});

function containsWord(sentence, word) {
      return sentence.includes(word);
} 
test("returns True for a word that is contained in the sentence", () =>{//Arrange
    const sentence = "If I perish I perish";
    //Act
    const result = containsWord(sentence, " ");
    //Assert
    expect(result).toBe(True);

});

function containsWord(sentence, word) {
      return sentence.includes(word);
} 
test("returns True for a word that is contained in the sentence", () =>{//Arrange
    const sentence = "If I perish I perish";
    //Act
    const result = containsWord(sentence, "perish");
    //Assert
    expect(result).toBe(True);

});

function containsWord(sentence, word) {
      return sentence.includes(word);
} 
test("returns True for a word that is contained in the sentence", () =>{//Arrange
    const sentence = "If I perish I perish";
    //Act
    const result = containsWord(sentence, "PERISH");
    //Assert
    expect(result).toBe(True);

});

function containsWord(sentence, word) {
      return sentence.includes(word);
} 
test("returns True for a word that is contained in the sentence", () =>{//Arrange
    const sentence = "If I perish I perish";
    //Act
    const result = containsWord(sentence, "standwa");
    //Assert
    expect(result).toBe(False);

});

function containsWord(sentence, word) {
      return sentence.includes(word);
} 
test("returns True for a word that is contained in the sentence", () =>{//Arrange
    const sentence = "If I perish I perish";
    //Act
    const result = containsWord(sentence, "If I perish I perish");
    //Assert
    expect(result).toBe(true);

});

function containsWord(sentence, word) {
      return sentence.includes(word);
} 
test("returns True for a word that is contained in the sentence", () =>{//Arrange
    const sentence = "If I perish I perish";
    //Act
    const result = containsWord(sentence, " per");
    //Assert
    expect(result).toBe(True);

});

function containsWord(sentence, word) {
      return sentence.includes(word);
} 
test("returns True for a word that is contained in the sentence", () =>{//Arrange
    const sentence = "If I perish I perish";
    //Act
    const result = containsWord(sentence, "If I");
    //Assert
    expect(result).toBe(True);

});


function containsWord(sentence, word) {
      return sentence.includes(word);
} 
test("returns True for a word that is contained in the sentence", () =>{//Arrange
    const sentence = "If I perish I perish";
    //Act
    const result = containsWord(sentence, " rish");
    //Assert
    expect(result).toBe(False);

});


function addItem(arr, item) { 
 arr.push(item); 
 return arr; 
} 
test("adds item to array", () =>{ //Arrange
    const arr = ["water", "liquid" , "ice", "gas"];
    //Act
    const result = addItem(arr,"drop" );
    //Assert
    expect(result).toBe(["water", "liquid" , "ice", "gas","drop"]);
})

function addItem(arr, item) { 
 arr.push(item); 
 return arr; 
} 
test("adds item to array", () =>{ //Arrange
    const arr = [""];
    //Act
    const result = addItem(arr,"drop" );
    //Assert
    expect(result).toBe(["drop"]);

})

function addItem(arr, item) { 
 arr.push(item); 
 return arr; 
} 
test("adds item to array", () =>{ //Arrange
    const arr = ["water", "liquid" , "ice", "gas"];
    //Act
    const result = addItem(arr,["drop", "ocean"] );
    //Assert
    expect(result).toBe(["water", "liquid" , "ice", "gas",["drop","ocean"]]);
})

function addItem(arr, item) { 
 arr.push(item); 
 return arr; 
} 
test("adds item to array", () =>{ //Arrange
    const arr = ["water", "liquid" , "ice", "gas"];
    //Act
    const result = addItem(arr,"" );
    //Assert
    expect(result).toBe(["water", "liquid" , "ice", "gas"]);
})

function addItem(arr, item) { 
 arr.push(item); 
 return arr; 
} 
test("adds item to array", () =>{ //Arrange
    const arr = ["water", "liquid" , "ice", "gas"];
    //Act
    const result = addItem(arr,1 );
    //Assert
    expect(result).toBe(["water", "liquid" , "ice", "gas",1]);
})
function addItem(arr, item) { 
 arr.push(item); 
 return arr; 
} 
test("adds item to array", () =>{ //Arrange
    const arr = ["water", "liquid" , "ice", "gas"];
    //Act
    const result = addItem(arr,["drop", "ocean",1,5] );
    //Assert
    expect(result).toBe(["water", "liquid" , "ice", "gas",["drop","ocean",1,5]]);
})

function addItem(arr, item) { 
 arr.push(item); 
 return arr; 
} 
test("adds item to array", () =>{ //Arrange
    const arr = ["water", "liquid" , "ice", "gas"];
    //Act
    const result = addItem(arr,[1,2,3] );
    //Assert
    expect(result).toBe(["water", "liquid" , "ice", "gas",["drop","ocean",[1,2,3]]);
})
