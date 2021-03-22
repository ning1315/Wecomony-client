import { CHANGE_DETAIL_DATE, SEND_EMAIL } from './constants'

interface emailType {
  email: string
  title: string
  message: string
}


export const changeDetailDate = (date: Date | null) => {
  return { type : CHANGE_DETAIL_DATE, date}
}

export const sendEmail = (data: emailType) => {
  return { type : SEND_EMAIL, data}
}

export type PageAction = | ReturnType<typeof changeDetailDate> | ReturnType<typeof sendEmail>