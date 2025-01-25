import { api } from '@/lib/axios'

export interface User {
    id: number
    name: string
    email: string
    password?: string
    balance?: number
    createdAt: string
}

export async function loginUser(email: string, password: string): Promise<User | null> {
    try {
        const response = await api.get<User[]>('/users')

        const user = response.data.find((user) => user.email === email && user.password === password)

        if (!user) {
            throw new Error('Usuário ou senha inválidos!')
        }

        return user
    } catch (error) {
        console.error('Erro no login:', error)
        return null
    }
}

export async function fetchUsers(): Promise<User[]> {
    try {
        const response = await api.get<User[]>('/users')
        return response.data
    } catch (error) {
        console.error('Erro ao buscar usuários:', error)
        return []
    }
}

export async function getUserById(userId: number): Promise<User | null> {
    try {
        const response = await api.get<User>(`/users/${userId}`)
        return response.data
    } catch (error) {
        console.error('Erro ao buscar usuário por ID:', error)
        return null
    }
}