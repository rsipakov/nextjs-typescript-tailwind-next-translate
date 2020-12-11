import { format, parseISO } from 'date-fns';
import enUS from 'date-fns/locale/en-US';
import ru from 'date-fns/locale/ru';

export const Date = ({
                         dateString,
                         locale,
                     }: {
    dateString: string;
    locale: string;
}): JSX.Element => {
    const date = parseISO(dateString);
    return (
        <time dateTime={dateString}>
            {format(date, 'LLLL d, yyyy', { locale: locale === 'en-US' ? enUS : ru })}
        </time>
    );
};

export default Date;
