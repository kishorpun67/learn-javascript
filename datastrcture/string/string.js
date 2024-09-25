var gcdOfStrings = function(str1, str2) {
    let i =0
    let newString="";
    while(i<str1.length || i < str2.length) {
        if(newString.includes(str1[i])) {
            break;
        }
        if(str1[i]==str2[i]) {
            newString += str1[i]
            i++
        } else {
            break
        }

    }
    console.log(newString)
    return newString;
    
};

gcdOfStrings("ABCABC","ABCAB")