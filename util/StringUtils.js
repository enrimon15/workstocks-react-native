export class StringUtils {
    static htmlToText(htmlText) {
        if (!htmlText) return;
        let resultText = htmlText.replaceAll('<br>', '\n').replace(/<[^>]+>/g, '');
        return resultText;
    }

    static capitalize(word) {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
    }
}