

import { api } from "@/lib/api";
import { ProfileSchema, ProfileSchemaDTO } from "@/schema/profile-schema";
import { ProfileDTO } from "@/types/type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function UseEditProfile() {
  const { data: profile } = useQuery<ProfileDTO>({
    queryKey: ["edit-profile"],
    queryFn: async () => {
      const res = await api.get("/profile");

      return res.data;
    },
  });

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileSchemaDTO>({
    mode: "onChange",
    resolver: zodResolver(ProfileSchema),
  });

  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation<any, Error, ProfileSchemaDTO>({
    mutationKey: ["edit-profile"],
    mutationFn: async (data: ProfileSchemaDTO) => {
      let imageUrl = profile?.image;

      if (data.image) {
        const formData = new FormData();
        formData.append("image", data.image[0]);
        const newImageUrl = await api.post("/upload", formData);
        imageUrl = newImageUrl.data.imageUrl;
      }
      const ProfileData = {
        ...data,
        image: imageUrl,
      };
      const res = await api.patch("/profile", ProfileData);
      return res.data;
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        return toast.error(error.response?.data.message);
      }
      toast.error("something wrong");
    },
    onSuccess: async (data) => {
      await queryClient.invalidateQueries({
        queryKey: ["profile"],
      });
      toast.success(data.message);
    },
  });

  useEffect(() => {
    if (profile) {
      reset({
        available: profile.available,
        position:profile.position,
        cv: profile.cv,
        description: profile.description,
        email: profile.email,
        headers: profile.headers,
        location: profile.location,
        whatsapp: profile.whatsapp,
      });
    }
  }, [profile, reset]);
  const onSubmit = async (data: ProfileSchemaDTO) => {
    await mutateAsync(data);
  };
  const [file, setFile] = useState<File | null>(null);

  return {
    register,
    handleSubmit,
    errors,
    isPending,
    onSubmit,
    file,
    setFile,
    profile,
  };
}
