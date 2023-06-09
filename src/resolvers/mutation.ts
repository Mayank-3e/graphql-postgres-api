import prisma from "../../prisma/db"

export const Mutation=
{
  postCreate: async(_:any, args:{title: string,content: string}):
  Promise<number> =>
  {
    const {title,content}=args
    if(!title||!content) throw new Error('Title and content are necessary')
    const post=await prisma.post.create({data:
      {
        title,
        content,
        authorId: 1
      }
    })
    return post.id
  }
}