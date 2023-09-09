import dateFormat from "dateformat";
import { faker } from '@faker-js/faker';

export const randomNumberForDateStart = new Date(Math.trunc(Math.random() * (Math.pow(10, 13))))
const dateStartBeforeTransform = new Date(randomNumberForDateStart)
export const dateStart = dateFormat(dateStartBeforeTransform,  "mmm dd, hh:MM TT")

export const randomNumberForDateEnd = new Date(Math.trunc(Math.random() * (Math.pow(10, 13))))
const dateEndBeforeTransform = new Date(randomNumberForDateEnd)
export const dateEnd = dateFormat(dateEndBeforeTransform,  "mmm dd, hh:MM TT")

export const descriptionText = faker.lorem.paragraphs(5)