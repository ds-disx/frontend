"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { postDisx } from "@/lib/useDisxs";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { PlusCircleIcon } from "lucide-react";
import { postComment } from "@/lib/useComments";

const formSchema = z.object({
  content: z.string().min(1),
});

type Props = {
  disxId: number;
};

export const CommentFormModal = ({ disxId }: Props) => {
  const router = useRouter();

  const { data: session } = useSession();
  const token = session?.token?.accessToken as string;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const comment = {
      content: values.content,
      disxId: disxId,
      username: "test",
      userId: "a5afa65c-c7ac-4bac-a53c-d91af1c345f7",
      // username: session?.user.name as string,
      // userId: session?.token.user.id as string,
    };

    try {
      await postComment(comment, token);
      form.reset();
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger className="flex gap-2 border rounded-lg p-2 hover:border-slate-300 dark:hover:border-slate-500">
        <PlusCircleIcon /> comment
      </DialogTrigger>
      <DialogContent className="max-w-xs md:max-w-md">
        <DialogHeader>
          <DialogTitle>Create comment</DialogTitle>
          {/* <DialogDescription>To create a comment, please fill in the form below.</DialogDescription> */}
        </DialogHeader>
        <Form {...form}>
          <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Share your thoughts!" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <DialogFooter>
              <DialogClose asChild>
                <Button type="submit" disabled={!form.formState.isValid}>
                  Post comment
                </Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
