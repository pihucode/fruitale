import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.DkEiGp7I.js","_app/immutable/chunks/scheduler.O3HiXru6.js","_app/immutable/chunks/index.CGav2CNN.js","_app/immutable/chunks/store.RQUWLbkK.js","_app/immutable/chunks/index.CldGiFVe.js"];
export const stylesheets = ["_app/immutable/assets/0.C5FpxZVN.css"];
export const fonts = [];
