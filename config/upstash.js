import { Client as WorkfloClient } from "@upstash/workflow";

import { QSTASH_TOKEN, QSTASH_URL } from "./env.js";

export const workflowClient = new WorkfloClient({
  baseUrl: QSTASH_URL,
  token: QSTASH_TOKEN,
});
