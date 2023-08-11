const CustomStorage = { 

    ACESS_TOKEN : {
        name : 'ACCESS_TOKEN',
        getItem () {
            if (typeof window === 'undefined') {
                return;
            }
            return localStorage.getItem(this.name);
        },
        setItem(accessToken) {
            if (typeof window === 'undefined') {
                return;
            }
            localStorage.setItem(this.name, accessToken);            
        },
        removeItem() {
            if (typeof window === 'undefined') {
                return;
            }
            localStorage.removeItem(this.name);
        }
    },

    LOGIN_STATUS : {
        name : 'LOGIN_STATUS',
        getItem () {
            if (typeof window === 'undefined') {
                console.log('window undfiend!!! ')
                return;
            }
            return localStorage.getItem(this.name);
        },
        setItem (loginStatus) {
            if (typeof window === 'undefined') {
                return;
            }
            localStorage.setItem(this.name, loginStatus);
        },
        removeItem () {
            if (typeof window === 'undefined') {
                return;
            }
            localStorage.removeItem(this.name);
        }
    },

    USER_INFO : {
        name : 'USER_INFO',
        getItem() {
            if (typeof window === 'undefined') {
                return;
            }
            let info = localStorage.getItem(this.name);
            if(info && typeof info ==='string') {
                info = JSON.parse(info);
            }
            return info;
        },
        setItem(userInfo) {
            if (typeof window === 'undefined') {
                return;
            }
            if(typeof userInfo === 'object') {
                userInfo = JSON.stringify(userInfo);
            }
            localStorage.setItem(this.name, userInfo);
        },
        removeItem() {
            if (typeof window === 'undefined') {
                return;
            }
            localStorage.removeItem(this.name);
        }
    }
}
export default CustomStorage;
