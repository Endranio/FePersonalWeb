import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { api } from "@/lib/api";
import { DeleteSchemaDTO } from "@/schema/tech-schema";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { ReactNode } from "react";
import { toast } from "sonner";
import Spinner from "./spiner";
import { DeleteResponse } from "@/types/response";
  
type Delete={
  id:string,
  trigger:ReactNode,
  invalidate:string,
  url:string
}

  export function AlertDelete({trigger,id,url,invalidate}:Delete) {


    const queryClient = useQueryClient();
      const { mutateAsync, isPending } = useMutation<
        DeleteResponse,
        Error,
        DeleteSchemaDTO
      >({
        mutationKey: ['delete'],
        mutationFn: async () => {
          const response = await api.delete(`/${url}/${id}`);
        
          return response.data;
        },
        onError: (error) => {
          if (axios.isAxiosError(error)) {
            return toast.error(error.response?.data.message);
          }
    
          toast.error('something wrong');
        },
        onSuccess: async (data) => {
            toast.success(data.message);
          await queryClient.invalidateQueries({
            queryKey: [`${invalidate}`],
          });
          
        },
      });
    
    
      const onSubmit = async(data:DeleteSchemaDTO)=>{
        await mutateAsync(data)
      }

    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          {trigger}
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. The selected item will be permanently deleted and cannot be recovered.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
  className="hover:bg-red-500 flex items-center justify-center gap-2"
  onClick={() => onSubmit({ id: id })}
  disabled={isPending}
>
  {isPending ? (
    <Spinner/>
  ) : (
    "Continue"
  )}
</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  