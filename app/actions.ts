'use server';

import { db } from '@/lib/drizzle'; 
import { tournaments } from '@/lib/schema';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { eq } from "drizzle-orm";

export async function addTournament(prevState:any, formData: FormData) {
  const name = formData.get('name');
  const description = formData.get('description');
  const startDate = formData.get('startDate');
  const endDate = formData.get('endDate');
  const teamIdsRaw = formData.get('teamIds');

  // Validate required fields
  if (!name || !startDate || !endDate) {
    return {
      errors: {
        name: !name ? 'Tournament name is required' : undefined,
        startDate: !startDate ? 'Start date is required' : undefined,
        endDate: !endDate ? 'End date is required' : undefined,
      },
      message: 'Failed to create tournament',
    };
  }

  // Parse and validate team IDs
  const teamIds = teamIdsRaw 
    ? String(teamIdsRaw).split(',').map(id => id.trim()).filter(id => id !== '').join(',')
    : '';

  if (teamIds.split(',').length < 2) {
    return {
      errors: {
        teamIds: 'At least two teams are required',
      },
      message: 'Failed to create tournament',
    };
  }

  const [newTournament] = await db
  .insert(tournaments)
  .values({
    name: String(name),
    description: description ? String(description) : null,
    startDate: new Date(String(startDate)),
    endDate: new Date(String(endDate)),
    teamIds,
    status: 'DRAFT'
  })
  .returning();

  revalidatePath('/tournaments');
  redirect(`/tournaments/${newTournament.id}`);
}


export async function getTournamentById(tournamentId: string) {
  'use cache';
  // Validate the input ID
  if (!tournamentId) {
    return {
      message: 'Failed to fetch tournament',
    };
  }

  try {
    const tournamentData = await db.select().from(tournaments).where(eq(tournaments.id, tournamentId));
    if (!tournamentData) {
      return {
        message: `This Tournament Does not exist`,
      };
    }

    return {
      data: tournamentData,
      message: 'Tournament fetched successfully',
    };
  } catch (error) {
    console.error('Error fetching tournament:', error);
    return {
      message: 'This Tournament Does not ',
    };
  }
}