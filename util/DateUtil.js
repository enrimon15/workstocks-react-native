import Moment from 'moment';
import 'moment/locale/it';
Moment.locale('it');

export default class DateUtil {
    static formatDate(date) {
        return Moment(date, 'MM-DD-YYYY').format('DD-MM-YYYY');
    }
}