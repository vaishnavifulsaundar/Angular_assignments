// Function that returns true if the word is found
function isWordPresent(sentence,word)
{
    word = transform(word);
    sentence = transform(sentence);
    let s = sentence.split(" ");
    for ( let i=0;i<s.length;i++)
    {
        if (s[i] == (word))
        {
            return true;
        }
    }
    return false;
}
 
function transform(word)
{
    return word.toUpperCase();
}

let string = "I am student of marvellous Infosystems";
let word = "marvellous";
if (isWordPresent(string, word))
   console.log(" word present in a string");
else
    console.log("word present  not in string");
 