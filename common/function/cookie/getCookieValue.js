import {getCookie} from 'cookies-next'
const getCookieValue = (name) => {
    let val = getCookie(name);
    return ( val !== null ) ? val : '';
}
export default getCookieValue;