
//helps to create file from url strings
export const dataURLtoFile = (dataurl, filename): File => {
    const arr = dataurl.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const uBarr = new Uint8Array(n);

    while (n--) {
        uBarr[n] = bstr.charCodeAt(n);
    }

    return new File([uBarr], filename, {type: mime})
};