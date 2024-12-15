CREATE TABLE "tournaments" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"description" text,
	"start_date" timestamp NOT NULL,
	"end_date" timestamp NOT NULL,
	"status" text DEFAULT 'DRAFT' NOT NULL,
	"winning_team_id" uuid,
	"team_ids" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
