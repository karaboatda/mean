import { User } from './user';

export class profile {

    user: User
    status: string
    skills: string[]
    bio: string
    githubusername: string
    cv: string
    points: number
    experience: Experience[]
    date: Date

}

export interface Experience {
    title: string
    company: string
    location: string
    from: Date
    to: Date
    current: boolean
    description: string
}