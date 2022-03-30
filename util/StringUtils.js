
export function htmlToText(htmlText) {
    if (!htmlText) return;
    let resultText = htmlText.replaceAll('<br>', '\n').replace(/<[^>]+>/g, '');
    return resultText;
}

export function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

export function validateEmail(email) {
    return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email));
}

export function validatePassword(pw) {
    return (/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/.test(pw));
}

export function isLengthInRange(text, min, max) {
    return (text.length >= min && text.length <= max);
}

export function validateConfirmPassword(pw, pwToMatch) {
    return (pw === pwToMatch);
}