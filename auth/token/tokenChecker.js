import CryptoJS from 'crypto-js';
import { TokenSystemError } from './error/tokenSystemError';
import { InvalidTokenError } from './error/invalidTokenError';

const TokenChecker = (access_token_key) => {
    console.log('token checker excute ---> now access token : ', access_token_key);
    const EXPIRATION_TOLERANCE = 300;

    let token = decrypt(access_token_key);
    const {expirationTime} = token;
    if ( expirationTime && typeof expirationTime === 'number' ) {
        const exp = (expirationTime - EXPIRATION_TOLERANCE) * 1000;
        const now = Date.now();
        if (exp >= now) {
            console.log('now access token is valid ---> no need new access token ::: ', 'exp >= now : ', exp >= now);
            return token;
        }
    }

    console.log('\n now access token is invalid ---> new access token need :: Access token has expired.')
    throw new InvalidTokenError();
}

//crypto JS
/**
 * encKey -> utf8 parsing
 * iVec -> utf8 parsing
 * access_token_key -> replaceAll _ => / , replaceAll - => +
 * decrypted -> AES
 * 
 * @param {*} access_token_key 
 * @returns 
 */
const decrypt = (access_token_key) => {

    if (!access_token_key) {
        throw new TokenSystemError();
    }
    const encKey = 'FjPWa7smWzjVO7mO';
    const iVec = 'aBMnXSwVR9xSB2EP';
    const keyBytes = CryptoJS.enc.Utf8.parse(encKey);
    const ivBytes = CryptoJS.enc.Utf8.parse(iVec);
    const ciphertext = access_token_key.replaceAll('_','/').replaceAll('-','+');
    const decrypted = CryptoJS.AES.decrypt(ciphertext, keyBytes, {iv: ivBytes});

    let json = '';
    try {
        json = JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
        console.log('\njson excute ::: ', json);
    } catch (error) {
        console.log('\ndecrypt error : ', error);
    }
    if (json === '') {
        throw new TokenSystemError();
    }
    return json;
}
 

export default TokenChecker;