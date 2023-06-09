import prisma from "../../prisma/db"

export const Query=
{
  posts: ()=>
  {
    return prisma.post.findMany({
      orderBy: [{createdAt: 'desc'}]
    })
  }
}