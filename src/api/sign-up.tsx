import { api } from '@/lib/axios';

export interface SignUpBody {
  name: string;
  phone: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  avatarId: string| null;
}

export async function SignUp({
  email,
  name,
  phone,
  password,
  passwordConfirmation,
}: SignUpBody) {
  await api.post('/seller', { email, name, phone, password, passwordConfirmation })
}