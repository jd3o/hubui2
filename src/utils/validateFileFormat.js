const validateFileFormat = (fName, acceptedFormat) => {
    var fNameParts = fName ? fName.split('.') : [];

    var acceptedFormatParts = acceptedFormat ? acceptedFormat.split('.') : [];

    if (fNameParts.length < 2 || acceptedFormatParts < 2){
        return false;
    }

    var uploaded_fileFormat = fNameParts[fNameParts.length - 1];

    var accepted_fileFormat = acceptedFormatParts[acceptedFormatParts.length - 1];

    if (uploaded_fileFormat === accepted_fileFormat) {
        return true;
    } else {
        return false;
    }
};

export default validateFileFormat; 