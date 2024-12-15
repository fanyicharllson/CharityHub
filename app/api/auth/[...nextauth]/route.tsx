// app/api/auth/[...nextauth]/route.ts

import { handlers } from "@/auth"; // Importing handlers from the auth.ts file

export const { GET, POST } = handlers;
