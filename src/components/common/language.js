function getQueryString(name) {
    let reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    let r = window.location.search.substr(1).match(reg);
    if(r!=null)return  decodeURI(r[2]); return null;
}

export function getLocalValue(key) {
    let lang = getQueryString("lang") || "EN";
    if (lang === "EN") {
        document.title="One-stop investment platform for cryptocurrencies."
        return window.EN[key];
    }
    else{
        document.title="数字货币一站式投资服务平台"
    }
    return window.CN[key];
}