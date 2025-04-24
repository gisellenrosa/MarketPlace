

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

export function FileToUpload() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const {
    register,
    handleSubmit,
    watch
  } = useForm<FileUploadForm>({
    resolver: zodResolver(fileUploadForm)
  });
  const [image, setImage] = useState<string | null>(null);

  const { mutateAsync: uploadImagesFn } = useMutation({
    mutationFn: UploadImages,
  })

  async function handleFileUpload(data: FileUploadForm) {

    try {
      if(data.file.length &&  data.file.length > 0) {
        const url = new FormData();
        url.append("files", data.file[0]);
        const response = await uploadImagesFn({ url });
        localStorage.setItem("uploadedImageUrl", response);
        setImage(response.url);
      }

      toast("Arquivo carregado com sucesso");
    } catch (error) {
      toast("Erro ao carregar arquivo");
    }
  }
  const file = watch("file");

  const preview = file && file.length > 0 ? URL.createObjectURL(file[0]) : null;



  return (
    <form onSubmit={handleSubmit(handleFileUpload)}>
       <input
        type="file"
        accept="image/png"
        {...register("file")}
        ref={(e) => {
          register("file").ref(e);
          inputRef.current = e;
        }}
        className="hidden"
      />
       <img
        src={preview || image || "src/assets/icon/image-upload.svg"}
        alt="Ícone"
        className="p-2 bg-background rounded-lg w-40 h-40 object-cover cursor-pointer"
        onClick={() => inputRef.current?.click()}
      />


    </form>
  )
}

