import { api } from '@/lib/axios';

export interface UploadImagesProps {
  files: FormData;

}

export async function UploadImages({
  files,
}: UploadImagesProps) {
  const response = await api.post('/attachments', files);
  return response.data;
}