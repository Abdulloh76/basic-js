const CustomError = require('../extensions/custom-error');
const n = 26;
class VigenereCipheringMachine {
	constructor(isDirect) {
		if (typeof(isDirect) !== 'boolean') this.isDirect = true;
		else this.isDirect = isDirect;
	}

  creatingKey(str, key) {
    let auxiliary = '',
			index = 0;
		const keyLength = key.length;
		// creating a key
		for (let i in str) {
			if (str[i].toLowerCase() === str[i].toUpperCase()) {
				auxiliary += str[i];
			} else {
				auxiliary += key[index % keyLength];
				index++;
			}
    }
    return auxiliary;
  }
	encrypt(message, key) {
		if (!(message && key)) throw new Error('Both arguments are mandatory');

		if (!this.isDirect) message = message.split('').reverse().join('');

		message = message.toUpperCase();
		key = key.toUpperCase();

    let auxiliary = this.creatingKey(message, key);
    
		let encryptedMessage = '';
		for (let i = 0; i < message.length; i++) {
			if (message[i].toLowerCase() === message[i].toUpperCase()) {
				encryptedMessage += message[i];
			} else {
				encryptedMessage += String.fromCharCode((message[i].charCodeAt() + auxiliary[i].charCodeAt()) % n + 65);
			}
		}
		return encryptedMessage;
	}
	decrypt(encryptedMessage, key) {
		if (!(encryptedMessage && key)) throw new Error('Both arguments are mandatory');

		if (!this.isDirect) encryptedMessage = encryptedMessage.split('').reverse().join('');

		encryptedMessage = encryptedMessage.toUpperCase();
		key = key.toUpperCase();

		let auxiliary = this.creatingKey(encryptedMessage, key);

		let message = '';

		for (let i = 0; i < encryptedMessage.length; i++) {
			if (encryptedMessage[i].toLowerCase() === encryptedMessage[i].toUpperCase()) {
				message += encryptedMessage[i];
			} else {
				message += String.fromCharCode(
					(encryptedMessage[i].charCodeAt() + n - auxiliary[i].charCodeAt()) % n + 65
				);
			}
		}

		return message;
	}
}

module.exports = VigenereCipheringMachine;
