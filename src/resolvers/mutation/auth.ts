import prisma from "@/prisma/db"
import validator from 'validator';

const authResolvers=
{
  signup: async(_:any,args:{name:string,email:string,password:string,bio:string}) =>
  {
    const {name,email,password}=args
    const user=await prisma.user.create({data: {name,email,password}})
    console.log(validator.isEmail(email));
    return user.id
  }
}
export default authResolvers