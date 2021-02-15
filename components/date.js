import { format, parseISO } from 'date-fns'

import { fr } from 'date-fns/locale'

export default function Date({ dateString }) {
  const date = parseISO(dateString)

  return (
    <time dateTime={dateString}>
      {format(date, 'EEEE d MMMM y', {locale: fr})}
    </time>
  )
}
