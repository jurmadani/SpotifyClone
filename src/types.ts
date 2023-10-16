export type signupSliceType = {
    email: string,
    password: string,
    name: string,
    birthDate: {
        month: string,
        day: number | null,
        year: number | null
    },

}

export type userSliceType = {
    email: string,
    password: string,
    name: string,
    birthDate: {
        month: string,
        day: number | null,
        year: number | null
    },
}