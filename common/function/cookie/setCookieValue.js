
import EnvConfig from '../../../config/config.export';
import {setCookie} from 'cookies-next'

const config = EnvConfig();
const setCookieValue = (name, value, expires, path, domain) => {
	// console.log('cookie ::', name, value, expires, path, domain)
    if( !path  ){
        // path = config.ecweb.catalog_first_directory.path;
		if( !path.match(/\/$/) ) path += '/';
	}
    if( (''+expires).match(/^[\d\.]+$/) ){
		expires = new Date(+new Date() + parseInt(60 * 60 * 24 * 1000 * expires));
	}
    var opt = {}
	if( expires === null ) opt.expires = new Date('2030');
	else if( expires ) opt.expires = expires;
	if( path === null ) opt.path = null;
	else if( path ) opt.path = path;
	if( domain === null ) opt.domain = '';
	if( domain ) opt.domain = domain;
	else opt.domain = config.ecweb.cookie.gAccessTokenKeyDomain;

	// let cookieObj = name+'='+value;

	// for (let optionKey in opt) {
	// 	cookieObj += "; " + optionKey;
	// 	let optionValue = opt[optionKey];
	// 	if (optionValue !== true) {
	// 		cookieObj += "=" + optionValue;
	// 	}
	//   }
	// if(typeof window ==='undefined') {
	// 	return null;
	// }
	console.log('=========> cookie set : ', name, value, opt);
	// document.cookie = cookieObj;

	setCookie(name, value, opt);
}

export default setCookieValue;