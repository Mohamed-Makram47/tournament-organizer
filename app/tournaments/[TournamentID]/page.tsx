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
    <div className='h-screen flex flex-col items-center justify-center text-lg font-medium'>
      {tournamentData.message}
    </div>
  );
}
  return (
    <div className='h-screen flex flex-col items-start gap-4 p-4 justify-start w-full border-neutral-900 bg-neutral-950 border-2 rounded-lg  '>
      <div className='w-full flex-row flex items-center justify-between '>
      <p className='text-xl md:text-2xl font-bold'>{tournamentData.data[0]['name']}</p>
      <p className='text-neutral-500'>{new Date(tournamentData.data[0]['startDate']).toLocaleDateString()}</p>
      </div>
      <p className='text-neutral-200 font-medium'>{tournamentData.data[0]['description']}</p>
    </div>
  );
}

export const dynamic = 'force-static';