const endPoints = {
  auth: {
    login: `User/login`,
    signUp: `identity/register`,
    createUser: `User/CreateUser`,
    forgotPassword: `User/forgot-password`,
    confirmResetPassword: `User/ConfirmResetPassword`,
    verifyEmail: (userId: string | undefined, token: string | undefined) =>
      `User/ConfirmEmail?userId=${userId}&token=${token}`,
    getInfoUser: (userId: string) => `User/GetInfoUser?Id=${userId}`,
  },
  ToDo: {
    create: 'ToDo/create',
    delete: 'ToDo/delete',
    add: 'ToDo/add',
  },
}

export default endPoints
