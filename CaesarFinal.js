const alphabet = "abcdefghijklmnopqrstuvwxyz";
let alphLength = alphabet.length
function encrypt (message, shiftValue)
{
     let encryptedMessage = []
    //to collect the shifted variables
  for (let i = 0; i < message.length; i++){
    const k = message[i]
    // some setup
    let index = alphabet.indexOf(k.toLowerCase())
    //numeric value of letter
    let encryptedLetter = alphabet[(index + shiftValue + alphLength ) % alphLength];
    //encrypts letter
    if (index === -1){
        encryptedMessage.push(k)
    }
    //if not a letter passes it through
    else
encryptedMessage.push(encryptedLetter);
// passes encrypted letter
if ( i % 2 === 1){
        let rng = Math.floor(Math.random() * 26);
        encryptedMessage.push(alphabet[rng]);
    }
  }
  return encryptedMessage.join('');
}

function decrypt (encryptedMessage, shiftValue)
{
    let decryptedMessage = []
  for (let i = 0; i < encryptedMessage.length; i++){
  if (i % 3 === 2) continue
  //skips every 3rd letter
     const k = encryptedMessage[i]
     let index = alphabet.indexOf(k.toLowerCase())

    
     if (index === -1){
        decryptedMessage.push(k)
    }
    //pushes non letter character
    else{
        let decryptedLetter = alphabet[((index - shiftValue + alphLength ) % alphLength + alphLength) % alphLength]
        //allows for negative value wrapping
        decryptedMessage.push(decryptedLetter)
    }
    //decrypts
  }

  return decryptedMessage.join('');
}

//console.log(encrypt('ababababab',1))
//console.log(encrypt("garden",4))
console.log(decrypt("Iueuan jrxuq cjythdykwxaj mixkqtaeml ebv wHenckvbkei rqdmt fHukckvi.r Jbxuihus, tmxayiwfuxh sjxau amenhtv 'zQkhhuubyjkit' yjew jhxux mxydatij. zJxmu hvymhihj ajel kldlsuyjb dyju yid uekdh qIbkqsxa xsxqqdvduzb wuqzhdoi qjxwu waueo xjem jfxuy dpuntj dgkvuiwj.",42))
//console.log(decrypt('aab3',1))
//console.log(decrypt('keovhoirs',4))
// decrypt('aab3',1)
// console.log(decrypt("Iueuan ",42))
//decrypt("Iueuan ",42)