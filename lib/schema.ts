import { pgTable,  text, timestamp,  uuid } from 'drizzle-orm/pg-core';


// the tournament Table
export const tournaments = pgTable('tournaments', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  description: text('description'),
  startDate: timestamp('start_date').notNull(),
  endDate: timestamp('end_date').notNull(),
  status: text('status', { 
    enum: ['DRAFT', 'ACTIVE', 'COMPLETED', 'CANCELLED'] 
  }).notNull().default('DRAFT'),
  winningTeamId: uuid('winning_team_id'),
  teamIds: text('team_ids').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull()
});

