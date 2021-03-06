import moment from 'moment'
import { isEmpty } from 'lodash'

export const getYoutubeThumbnail = url => {
  if (url && url.match(/youtube/)) {
    const id = url.match(/v=(.+)$/)[1]

    return `https://i.ytimg.com/vi/${id}/mqdefault.jpg`
  }
  return ''
}

/**
 * Calculation total duration of lecutes
 * @param {*} lectures The courses lectures array from Strapi
 * @return total duration in format HH:mm:ss (.e.g 1:20:15)
 */
export const calculateVideosDuration = (lectures = []) => {
  if (isEmpty(lectures)) {
    return ''
  }
  const { duration = 0 } = lectures[0] || {}
  const totalDuration = lectures
    .slice(1)
    .reduce(
      (prev, cur) => moment.duration(`00:${cur.duration}`).add(prev),
      moment.duration(`00:${duration}`)
    )
  return moment.utc(totalDuration.asMilliseconds()).format('HH:mm:ss')
}

export const getPercentage = (number, total) =>
  Math.round((number / total) * 100)
