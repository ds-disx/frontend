import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
export const LoginModal = ({text}: {text: string}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="w-full h-full">{text}</button>
      </DialogTrigger>
      <DialogContent className="max-w-xs md:max-w-md">
        <DialogHeader>
          <DialogTitle>You need to login first</DialogTitle>
          <DialogDescription>Please login in order to create a disx.</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
