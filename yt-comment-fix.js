// changes all the color when specific classes are together
function updateTextColor() {
    classesTogether = '.style-scope .yt-formatted-string';
    //returns a list of all the items that have these classes together
    const elements = document.querySelectorAll(classesTogether);
    //goes through each 'element' (can be renamed, like a python loop) 
    elements.forEach(element => {
        //and changes their style.color to be white
        element.style.color = 'white';
    });
}

// Re-run the code every time something changes (ex: you scroll to load more comments)
// initalizes the class with the function as an argument (can you nest functions)
const observer = new MutationObserver(updateTextColor);
// when anything in document.body changes (using childlist and subtree) run the function
observer.observe(document.body, { childList: true, subtree: true });

// run the function at the start, just to be safe. (though probs don't need to)
updateTextColor();