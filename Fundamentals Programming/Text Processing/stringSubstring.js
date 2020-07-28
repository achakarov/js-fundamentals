function stringSubstring(searchWord, text) {

    let toLowerCaseWord = searchWord.toLowerCase(); 
    let toLowerCaseText = text.toLowerCase().split(" ");
    

   if (toLowerCaseText.includes(toLowerCaseWord)){
       console.log(`${searchWord}`); 
   } else {
       console.log(`${searchWord} not found!`); 
   }
}

stringSubstring(
    'javascript',
    'JavaScriptInfo is the best programming language'

)