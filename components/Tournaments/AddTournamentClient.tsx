'use client';

import { useFormState } from 'react-dom';
import { addTournament } from '@/app/actions';
import { XIcon } from "lucide-react";
export function TournamentForm() {
  const [state, formAction] = useFormState(addTournament, { 
    errors: {}, 
    message: null 
  });

  return (
    <div className=" shadow-md rounded-lg">
      <div className='flex justify-between items-center mb-6 '>
      <h2 className="text-xl md:text-3xl font-bold ">New Tournament</h2>
      <XIcon className="plain-icon text-neutral-300 hover:text-neutral-200 transition-colors duration-200 cursor-pointer" onClick={()=>window.location.href='/tournaments'}/>

      </div>
      <form action={formAction} className="space-y-4">
        {/* Tournament Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-neutral-200">
             Name
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
              className="mt-1 block w-full border colorpickernewtournamentform border-neutral-300 rounded-md shadow-sm py-2 px-3"
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
              className="mt-1 block w-full border colorpickernewtournamentform border-neutral-300 rounded-md shadow-sm py-2 px-3"
            />
          </div>
        </div>

        {/* Team IDs Input */}
        <div>
          <label htmlFor="teamIds" className="block text-sm font-medium text-neutral-200">
            Teams
          </label>
          <input
            type="text"
            id="teamIds"
            name="teamIds"
            required
            className="mt-1 block w-full border bg-black border-neutral-300 rounded-md shadow-sm py-2 px-3"
            placeholder="Pick Teams to play"
          />
          {state.errors?.teamIds && (
            <p className="mt-2 text-sm text-red-600">{state.errors.teamIds}</p>
          )}
        </div>




        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="button-primary w-full text-base md:text-lg"
          >
            CREATE
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