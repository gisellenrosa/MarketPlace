

import { UploadImages } from '@/api/upload-images';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import z from 'zod';


const ACCEPTED_IMAGE_TYPES = ["image/png"];


const fileUploadForm = z.object({
  file: z
    .custom<FileList>()
    .refine((files) => {
      return Array.from(files ?? []).length !== 0;
    }, "A imagem do produto é obrigatória.")
    .refine((files) => {
      return Array.from(files ?? []).every((file) =>
        ACCEPTED_IMAGE_TYPES.includes(file.type)
      );
    }, "Tipo de arquivo precisa ser uma imagem PNG."),
});

type FileUploadForm = z.infer<typeof fileUploadForm>;
interface FileToUploadProps {
  onUploadComplete: (id: string) => void;
}


export function FileToUpload({ onUploadComplete }: FileToUploadProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const {
    register,
    watch
  } = useForm<FileUploadForm>({
    resolver: zodResolver(fileUploadForm)
  });
  const [image, setImage] = useState<string | null>(null);

  const { mutateAsync: uploadImagesFn } = useMutation({
    mutationFn: UploadImages,
  })

  async function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    // Validação manual com zod (opcional, pode confiar no backend se preferir)
    const result = fileUploadForm.safeParse({ file: files });
    if (!result.success) {
      toast.error(result.error.errors[0].message);
      return;
    }

    const preview = URL.createObjectURL(files[0]);
    setImage(preview);

    try {
      const formData = new FormData();
      formData.append("files", files[0]);

      const response = await uploadImagesFn({ files: formData });

      onUploadComplete(response.attachments[0].id)

      localStorage.setItem("imageId", response.attachments[0].id);

      toast("Arquivo carregado com sucesso");
    } catch (error) {
      toast("Erro ao carregar arquivo");
    }
  }

  const file = watch("file");

  const preview = file && file.length > 0 ? URL.createObjectURL(file[0]): null;



  return (
    <form >
       <input
        type="file"
        accept="image/png"
        {...register("file")}
        ref={(e) => {
          register("file").ref(e);
          inputRef.current = e;
        }}
        className="hidden"
        onChange={handleFileChange}
      />
      <div
      className="bg-background rounded-xl w-40 h-40 object-cover cursor-pointer align-middle flex justify-center items-center"
      onClick={() => inputRef.current?.click()}
      >
        { preview || image  ? (
          <img
          src={preview || image || undefined}
          alt="Ícone"
          className="w-40 h-40 object-cover rounded-xl "
        />
      ):(
        <img
          src={"src/assets/icon/image-upload.svg"}
          alt="Ícone"
          className="w-30 h-30 object-cover rounded-xl "
        />
      )}
      </div>
    </form>
  )
}

