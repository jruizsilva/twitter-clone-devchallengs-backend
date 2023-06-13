import { hash, compare } from 'bcryptjs'

const encrypt = async (password: string) => {
  const passwordHash = await hash(password, 10)
  return passwordHash
}
const verified = async (
  password: string,
  passwordEncrypted: string
) => {
  const isCorrect = await compare(password, passwordEncrypted)
  return isCorrect
}

export { encrypt, verified }
