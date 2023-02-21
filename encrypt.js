let encryptMessage = (message, key) => {
    
    let A = "A".charCodeAt()//65
    let Z = "Z".charCodeAt()//90
    let space = " ".charCodeAt()
        
    let messageChar
    let newMessage = []

    for(let i = 0; i < message.length; i++){
        
        messageChar = message[i].charCodeAt()
        
        if(messageChar === space){
            
            newMessage.push(String.fromCharCode(messageChar))
        }
        
        if(messageChar >= A && messageChar <= Z){

            messageChar += key

            if(messageChar > Z){
                
                messageChar = messageChar - Z + A - 1
            }

            newMessage[i] = String.fromCharCode(messageChar)
        }
    }
    
    return newMessage
}

document.addEventListener('DOMContentLoaded', () => {

    let message = document.querySelector('#message')
    let clearAll = document.querySelector('#clear-all')

    message.addEventListener('input', () => {
        
        let key = Number(document.querySelector('#key').value)
        let encryptedMessage = document.querySelector('#enc-message')

        if(key <= 0){

            alert("INVALID KEY! KEY CANNOT BE EQUAL TO ZERO OR LESS THAN ZERO!")
            message.value = null
        }

        else if(key > 25){

            alert("KEY MUST BE ONLY LESS THAN 26!")
            message.value = null
        }

        else{
            
            let upperCaseMessage = message.value.toUpperCase()
            let text = encryptMessage(upperCaseMessage, key)
            
            let newMessage = text.join('')
            
            encryptedMessage.value = newMessage 
        }
    })

    clearAll.addEventListener('click', () => {

        document.querySelector('#key').value = null
        document.querySelector('#enc-message').value = null
        document.querySelector('#message').value = null
        
    })
})
