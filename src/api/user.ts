import { api } from '@/lib/axios'

export interface User {
    id: string
    name: string
    ssn: string
    email: string
    balance: string

    createdAt: string
}

export async function fetchUserData() {
    const response = await api.get<User>('users')
    return response.data
}