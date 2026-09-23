import { MockBackend } from "./mock";
import type { Services } from "./types";

/**
 * Single entry point for every backend call in the app.
 *
 * Today this is backed by an in-browser mock so the product runs end-to-end
 * without a server. Swapping in a real backend means providing another object
 * that satisfies `Services` here — no UI code changes.
 */
export const services: Services = new MockBackend();

export * from "./types";
