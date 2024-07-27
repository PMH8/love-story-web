const getCroppedImageURl = (url: string) => {
    var index = url.indexOf('games');
    var string = url.slice(0, index)
        + "crop/600/400/" + url.slice(index);
    return string;
}
export default getCroppedImageURl;