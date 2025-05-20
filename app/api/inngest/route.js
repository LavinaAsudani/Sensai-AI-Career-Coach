 import { serve } from "inngest/next";
import { inngest } from "@/lib/inngest/client";
import { generateIndustryInsights } from "@/lib/inngest/functions";

// Create an API that serves zero functions
const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [generateIndustryInsights],
});

export { GET, POST, PUT };
