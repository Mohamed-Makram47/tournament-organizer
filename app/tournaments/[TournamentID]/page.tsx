export default async function Page({
  params,
}: {
  params: Promise<{ TournamentID: string }>
}) {
  const TournamentID = (await params).TournamentID
  return <div>My tournament: {TournamentID}</div>
}