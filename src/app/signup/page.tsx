"use client"
 
 import { Footer } from "@/components/Footer";
 import Link from "next/link";
 import Image from "next/image";
 import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
 
 export default function SignUp() {
  const { data: session } = useSession()

  if (session?.user) {
    redirect("/")
  }
   return (
     <div className="min-h-screen bg-black text-white flex flex-col">
       <div className="flex-1 flex items-center justify-center px-4 py-12">
         <div className="w-full max-w-md space-y-8 p-4 sm:p-8">
           <div className="flex flex-col items-center justify-center space-y-6">
             <Image
               src="logo-a.png"
               alt="Logo"
               width={40}
               height={40}
               className="h-12 w-12"
             />
             <h2 className="text-2xl font-semibold text-white">Create your account</h2>
 
             <div className="w-full max-w-sm space-y-4">
               <button onClick={()=>signIn("google")} className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#1A1A1A] hover:bg-[#242424] text-white rounded-2xl border border-white/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm">
                 <svg viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                   <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                     <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z" />
                     <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z" />
                     <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z" />
                     <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z" />
                   </g>
                 </svg>
                 Google
               </button>
 
               <div className="relative">
                 <div className="absolute inset-0 flex items-center">
                   <span className="w-full border-t border-white/10" />
                 </div>
                 <div className="relative flex justify-center text-xs uppercase">
                   <span className="bg-black px-2 text-[#989898]">Or continue with email</span>
                 </div>
               </div>
 
               {/* <form className="space-y-3">
                 <div className="space-y-1">
                   <Input
                     type="email"
                     placeholder="Email address"
                     className="w-full px-4 py-3 text-white rounded-2xl border focus:outline-hidden text-sm font-medium placeholder:text-[#989898] placeholder:font-medium border-white/10 focus:border-white/20 bg-black/20"
                   />
                 </div>
                 <div className="space-y-1">
                   <Input
                     type="password"
                     placeholder="Password"
                     className="w-full px-4 py-3 text-white rounded-2xl border focus:outline-hidden text-sm font-medium placeholder:text-[#989898] placeholder:font-medium border-white/10 focus:border-white/20 bg-black/20"
                   />
                 </div>
                 <Button
                   type="submit"
                   className="w-full px-4 py-6 rounded-2xl bg-zinc-700/50 text-white hover:bg-zinc-700/70 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium"
                 >
                   Create account
                 </Button>
               </form> */}
 
               <Link href="/signin" className="block w-full border border-white/10 rounded-2xl p-4 hover:bg-[#1A1A1A] transition-colors group">
                 <p className="text-center text-sm text-[#989898]">
                   Already have an account? Sign in →
                 </p>
               </Link>
             </div>
           </div>
         </div>
       </div>
 
       <Footer />
     </div>
   );
 }