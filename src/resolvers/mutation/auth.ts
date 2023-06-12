import prisma from "@/prisma/db"

const authResolvers=
{
  signup: async(_:any,args:{name:string,email:string,password:string,bio:string}) =>
  {
    const {name,email,password}=args
    const user=await prisma.user.create({data: {name,email,password}})
    return user.id
  }
}
export default authResolvers