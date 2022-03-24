export class StringUtils {
    static htmlToText(htmlText) {
        if (!htmlText) return;
        let resultText = htmlText.replaceAll('<br>', '\n').replace(/<[^>]+>/g, '');
        return resultText;
    }
}