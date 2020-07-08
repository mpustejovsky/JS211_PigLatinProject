

const saveTrans = () =>{
    let inputData = document.getElementById("inputWord").value;
    console.log (inputData);
    inputData=inputData.trim();
    console.log(inputData)
    if (inputData==""){return}
    let outputArray = inputData.split(" ");
    console.log (outputArray)
    let outputArray2=[];
    for (x=0;x<outputArray.length;x++)
    {  if (outputArray[x]!==""){
         outputArray2.push(outputArray[x])
      }
      console.log(outputArray2)
    }

    console.log (outputArray)
    let transArray=[];
    for (i=0; i<outputArray2.length; i++){
    transArray[i]= pigLatin (outputArray2[i]);
    }
   
    let outputData=transArray.join(' ');
   
    document.getElementById("outputHere").innerHTML = outputData+" ";
}

    

const clearInput = () => {
    document.getElementById("inputWord").value="";
}

const pigLatin = (word) => {

    let str = word;
    str = str.toLowerCase();
    str = str.trim();
    const ay = "ay";
    const yay = "yay"
    let n;
    // First if determines of word starts with a vowel
     if( str.startsWith("a")||str.startsWith("e")||str.startsWith("i")||str.startsWith("o")||str.startsWith("u"))
     { str = str.concat(yay)
      return str;}
     else {
       
        let firstLet = str.substr(0,1);
        str = str.substr(1)
        str=str.concat(firstLet)
        if (str.startsWith("a")||str.startsWith("e")||str.startsWith("i")||str.startsWith("o")||str.startsWith("u"))
          { str=str.concat(ay)
            return str; }
        firstLet = str.substr(0,1)
        str = str.substr(1)
        str=str.concat(firstLet)
        str=str.concat(ay)
        return str;
     }
    
    
    }
    