export class StringUtils {
    static htmlToText(htmlText) {
        if (!htmlText) return;
        let resultText = htmlText.replaceAll('<br>', '\n').replace(/<[^>]+>/g, '');
        return resultText;
    }

    static capitalize(word) {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
    }

    static validateEmail(email) {
        return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email));
    }

    static validatePassword(pw) {
        return (/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/.test(pw));
    }

    static isLengthInRange(text, min, max) {
        return (text.length >= min && text.length <= max);
    }

    static validateConfirmPassword(pw, pwToMatch) {
        return (pw === pwToMatch);
    }
}