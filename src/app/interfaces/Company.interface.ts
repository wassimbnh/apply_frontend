import { CompanyFieldEnum } from "../enums"

export interface CompanyData {

    firstName: string
    lastName: string
    email: string
    phone: string
    password: string
    companyName: string
    contactEmai: string
    companyField: CompanyFieldEnum
    companyWebsite: string

}