import * as React from "react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function ProfileCard() {
  return (
    <Card className="bg-slate-50 text-center dark:bg-slate-800/80">
      <CardHeader>
        <Avatar className="mx-auto h-16 w-16">
          <AvatarImage src="https://avatars.githubusercontent.com/u/4414321?v=4" />
          <AvatarFallback>P</AvatarFallback>
        </Avatar>
        <CardTitle className="pt-6">Name</CardTitle>
        <CardDescription>@username</CardDescription>
        <CardDescription className="text-base">Use description.</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center gap-4">
        <CardDescription>Followers</CardDescription>
        <CardDescription>Posts</CardDescription>
        <CardDescription>Likes</CardDescription>
      </CardContent>
    </Card>
  )
}
