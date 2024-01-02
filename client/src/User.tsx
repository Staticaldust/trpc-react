
import { trpc } from './utils/trpc';

export function User() {
    const userId = 21;
    const newUser = trpc.userNew.useQuery
    ({
        //  email: ' example@gmail.com', 
         id: userId });
  
    return <div>{JSON.stringify(newUser.data?.users)}</div>;
  }