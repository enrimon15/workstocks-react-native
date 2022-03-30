import Moment from 'moment';
import 'moment/locale/it';
Moment.locale('it');

export function formatDate(date) {
    return Moment(date, 'MM-DD-YYYY').format('DD-MM-YYYY');
}