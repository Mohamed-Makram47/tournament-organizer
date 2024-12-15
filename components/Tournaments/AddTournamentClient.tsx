'use client';

import { useFormState } from 'react-dom';
import { addTournament } from '@/app/actions';

export function TournamentForm() {
  const [state, formAction] = useFormState(addTournament, { 
    errors: {}, 
    message: null 
  });

  return (
    <div className=" p-6  shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Create New Tournament</h2>
      <form action={formAction} className="space-y-4">
        {/* Tournament Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-neutral-200">
            Tournament Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-1 block w-full border bg-black border-neutral-300 rounded-md shadow-sm py-2 px-3"
            placeholder="Enter tournament name"
          />
          {state.errors?.name && (
            <p className="mt-2 text-sm text-red-600">{state.errors.name}</p>
          )}
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-neutral-200">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            className="mt-1 block w-full bg-black border border-neutral-300 rounded-md shadow-sm py-2 px-3"
            placeholder="Tell us about the tournament"
          />
        </div>

        {/* Date Range */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="startDate" className="block text-sm font-medium text-neutral-200">
              Start Date
            </label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              required
              className="mt-1 block w-full border bg-black border-neutral-300 rounded-md shadow-sm py-2 px-3"
            />
          </div>
          <div>
            <label htmlFor="endDate" className="block text-sm font-medium text-neutral-200">
              End Date
            </label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              required
              className="mt-1 block w-full border bg-black border-neutral-300 rounded-md shadow-sm py-2 px-3"
            />
          </div>
        </div>

        {/* Team IDs Input */}
        <div>
          <label htmlFor="teamIds" className="block text-sm font-medium text-neutral-200">
            Team IDs (comma-separated)
          </label>
          <input
            type="text"
            id="teamIds"
            name="teamIds"
            required
            className="mt-1 block w-full border bg-black border-neutral-300 rounded-md shadow-sm py-2 px-3"
            placeholder="Enter team IDs separated by commas"
          />
          {state.errors?.teamIds && (
            <p className="mt-2 text-sm text-red-600">{state.errors.teamIds}</p>
          )}
        </div>




        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Create Tournament
          </button>
        </div>

        {/* Error Message */}
        {state.message && (
          <div className="mt-4 text-sm text-red-600">
            {state.message}
          </div>
        )}
      </form>
    </div>
  );
}