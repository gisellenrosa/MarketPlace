import { api } from '@/lib/axios';

export interface SignUpBody {
  name: string;
  phone: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  avatar: string | null;
}

export async function SignUp({
  email,
  name,
  phone,
  password,
  passwordConfirmation,
  avatar
}: SignUpBody) {
  await api.post('/sellers', { email, name, phone, password, passwordConfirmation, avatar })
}