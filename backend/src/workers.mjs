export const generateFileNameOnServer = (originalFileName) => {
    const fileNameArray = originalFileName.split(".");
    let randomChar = new Date().toLocaleString();
    randomChar = randomChar.replace(/[\/,: ]/g, "_");
    randomChar = randomChar.trim();
    let newFileName = `${randomChar}.${
        fileNameArray[fileNameArray.length - 1]
    }`;
    return newFileName;
};
