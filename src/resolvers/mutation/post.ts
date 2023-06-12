import prisma from "@/prisma/db"

const postResolvers=
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
  },
  postUpdate: async(_:any, args:{postId:string,title?:string,content?:string}):
  Promise<number> =>
  {
    const {postId,title,content}=args
    if(!title&&!content) throw new Error('Need at least 1 field to update')
    const post=await prisma.post.findUniqueOrThrow({
      where: {id: Number(postId)}
    })
    const data={title,content}
    if(!title) delete data.title
    if(!content) delete data.content
    await prisma.post.update({
      where: {id: Number(postId)},
      data
    })
    return post.id
  },
  postDelete: async(_:any, args:{postId:string}): Promise<number> =>
  {
    const {postId}=args
    const post=await prisma.post.findUniqueOrThrow({
      where: {id: Number(postId)}
    })
    await prisma.post.delete({where: {id: Number(postId)}})
    return post.id
  }
}
export default postResolvers