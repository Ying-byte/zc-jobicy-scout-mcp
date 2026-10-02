#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "jobicy",
  boardId: "jobicy-official",
  domain: "jobicy.com",
  npmName: "zc-jobicy-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
