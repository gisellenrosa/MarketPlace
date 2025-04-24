import { api } from '@/lib/axios';

export interface UploadImagesProps {
  url: FormData;

}

export async function UploadImages({
  url,
}: UploadImagesProps) {
  const response = await api.post('/attachments', url);
  return response.data;
}