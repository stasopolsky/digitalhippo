import { authRouter } from "./auth-router";
import { publicProcedure, router } from "./trpc";

export const appRouter = router({
        // anyApiRoute:publicProcedure.query(()=>{
        //     return "3wdq"
        // })
        auth:authRouter,
    }
)
export type AppRouter = typeof appRouter
