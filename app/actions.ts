'use server';

import { db } from '@/lib/drizzle'; 
import { tournaments } from '@/lib/schema';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function addTournament( formData: FormData) {
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