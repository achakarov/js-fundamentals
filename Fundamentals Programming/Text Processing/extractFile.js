function extractFile(filePath) {

    let lastIndexOfDashes = filePath.lastIndexOf("\\"); 
    let file = filePath.substring(lastIndexOfDashes+1); 
    let lastIndexOfDot = file.lastIndexOf("."); 
   let fileName = file.substring(0,lastIndexOfDot);
   let fileExtension = file.substring(lastIndexOfDot+1); 
   console.log(`File name: ${fileName}`); 
   console.log(`File extension: ${fileExtension}`); 
}

extractFile('C:\\Internal\\training-internal\\Template.asd.pptx')