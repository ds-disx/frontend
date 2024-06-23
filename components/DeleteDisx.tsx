"use client";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { deleteDisx } from "@/lib/useDisxs";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";


const formSchema = z.object({
  disxId: z.string().min(1),
});

export const DeleteDisx = () => {

    const router = useRouter();


    const { data: session } = useSession();
    const token = session?.token?.accessToken as string;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      disxId: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {

    const disxId: number = values.disxId as unknown as number

    try {
      await deleteDisx(disxId, token);
      form.reset();
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form {...form}>
      <form className="space-y-2" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="disxId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Admin Delete Disx</FormLabel>
              <FormControl>
                <Input placeholder="Id of Disx" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" disabled={!form.formState.isValid}>
          Delete Disx
        </Button>
      </form>
    </Form>
  );
};
