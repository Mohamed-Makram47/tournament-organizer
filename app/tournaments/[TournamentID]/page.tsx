import { redirect } from 'next/navigation'
 
async function fetchTournamentData(TournamentID: string) {
  const res = await fetch('https://...')
  if (!res.ok) return undefined
  return res.json()
}
 
export default async function Home({
  params,
}: {
  params: Promise<{ TournamentID: string }>
}) {
  const TournamentID = (await params).TournamentID
  if (!TournamentID) {
    redirect('/')
  }
 
  const team = await fetchTournamentData(TournamentID)
 
  // ...
}