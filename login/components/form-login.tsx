"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { loginschema, LoginSchemaDTO } from "@/schema/login-schema";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/api";
import Cookies from "js-cookie";
import axios from "axios";
import { toast } from "sonner";
import Spinner from "@/components/ui/spiner";

export default function FormLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaDTO>({
    mode: "onChange",
    resolver: zodResolver(loginschema),
  });

  const router = useRouter();

  const { mutateAsync, isPending } = useMutation({
    mutationKey: ["login"],
    mutationFn: async (data: LoginSchemaDTO) => {
      const res = await api.post("/login", data);

      Cookies.set("token", res.data.token, {
        expires: 1,
      });
      return res.data;
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        return toast.error(error.response?.data.message);
      }
      toast.error("something wrong");
    },
    onSuccess: async (data) => {
      toast.success(data.message);
      router.push("/dashboard");
    },
  });

  const onSubmit = handleSubmit(async (data: LoginSchemaDTO) => {
    await mutateAsync(data);
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col w-[350px] gap-5">
      <div>
        <Input
          id="email"
          type="text"
          placeholder="Email*"
          {...register("email")}
        />
        <p className="text-red-500 text-sm">{errors.email?.message}</p>
      </div>
      <div>
        <Input
          id="password"
          type="password"
          placeholder="Password*"
          {...register("password")}
        />
        <p className="text-red-500 text-sm">{errors.password?.message}</p>
      </div>
      <Button disabled={isPending} type="submit">
        {isPending ? <Spinner /> : "Login"}
      </Button>
    </form>
  );
}
