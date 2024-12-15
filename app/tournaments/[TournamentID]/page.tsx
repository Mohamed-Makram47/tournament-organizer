import { getTournamentById } from '@/app/actions';
import { redirect } from 'next/navigation';

export default async function Home({ params }: { params: any }) {
  const { TournamentID } = params;
  if (!TournamentID) {
    redirect('/');
  }
  const tournamentData = await getTournamentById(TournamentID);
console.log('tournamentData', tournamentData);
if(!tournamentData.data) {
  return (
    <div className='h-screen flex flex-col items-center justify-center '>
      {tournamentData.message}
    </div>
  );
}
  return (
    <div>
ass
    </div>
  );
}

export const dynamic = 'force-static';