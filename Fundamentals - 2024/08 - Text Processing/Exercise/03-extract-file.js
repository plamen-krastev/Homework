function solve(text) {
    let filePath = text.split('\\');
    let file = filePath.pop();
    let index = file.lastIndexOf('.');
    let name = file.slice(0, index);
    let extension = file.slice(index + 1);

    console.log(`File name: ${name}`);
    console.log(`File extension: ${extension}`);
}

solve('C:\\Internal\\training-internal\\Template.pptx');

solve('C:\\Projects\\Data-Structures\\LinkedList.cs');