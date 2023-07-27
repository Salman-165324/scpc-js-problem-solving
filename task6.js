function generatePassword(passLength){


    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
    const numbers = "0123456789?"
    const specialCharacters = `!@#$%^&*()_+-=[]{}|;:,.<>`
    const allCharacters = uppercaseLetters + lowerCaseLetters + numbers + specialCharacters; 

    let randomPassword = [];

    // randomPassword.push(uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)])
    
    for(let i = 0; i< passLength; i++){

        const randomIndex = Math.floor(Math.random()*allCharacters.length)
        randomPassword.push(allCharacters[randomIndex])
    }

    const randomPasswordStr = randomPassword.join(""); 
    

    return randomPasswordStr; 
}


let password = generatePassword(16);



console.log(password);

