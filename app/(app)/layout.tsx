import { redirect } from 'next/navigation';
import loadSession from "@/lib/load-session";
import AppHeader from '@/components/AppHeader';
 
async function AppLayout(
  props: React.PropsWithChildren
) {
  const session = await loadSession();
 
  // if the user is not logged in, we redirect them to the sign-in page
  if (!session) {
    redirect('/auth/sign-in');
  }
 
  return (
    <div className="flex flex-col flex-1 space-y-4">
      <AppHeader />
 
      {props.children}
    </div>
  );
}
 
export default AppLayout;