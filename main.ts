// news-image-20261117 entry (Node 22, standard library only).
// The entry image is entry.png beside this file: a one-page newspaper
// front page summing up Tuesday 17 November 2026's world news. The
// program copies it to /output/entry.png. No network, no randomness:
// every run writes the same bytes. The front page carries six stories:
// the U.S.–Iran strikes, the Kerch Bridge, Nvidia's record revenue,
// the Xi–Putin–Trump summit, U.S. measles, and Ebola in DR Congo.
//
// Run locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
