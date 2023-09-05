import dateFormat from "dateformat";
import { faker } from '@faker-js/faker';

export const randomNumberForDate = Math.trunc(Math.random() * (Math.pow(10, 13)))
const date = new Date(randomNumberForDate)
export const dateStart = dateFormat(date,  "mmm dd, hh:MM TT")
export const dateEnd = dateFormat(date,  "mmm dd, hh:MM TT")
export const descriptionText = faker.lorem.paragraphs(5)