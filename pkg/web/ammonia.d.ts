/* tslint:disable */
/* eslint-disable */
/**
 * TODO
 */
export function clean_wasm(text: string, allowed_tags: string[]): string;
/**
 * A sanitized HTML document.
 *
 * The `Document` type is an opaque struct representing an HTML fragment that was sanitized by
 * `ammonia`. It can be converted to a [`String`] or written to a [`Write`] instance. This allows
 * users to avoid buffering the serialized representation to a [`String`] when desired.
 *
 * This type is opaque to insulate the caller from breaking changes in the `html5ever` interface.
 *
 * Note that this type wraps an `html5ever` DOM tree. `ammonia` does not support streaming, so
 * the complete fragment needs to be stored in memory during processing.
 *
 * [`String`]: https://doc.rust-lang.org/nightly/std/string/struct.String.html
 * [`Write`]: https://doc.rust-lang.org/nightly/std/io/trait.Write.html
 *
 * # Examples
 *
 *     use ammonia::Builder;
 *
 *     let input = "<!-- comments will be stripped -->This is an Ammonia example.";
 *     let output = "This is an Ammonia example.";
 *
 *     let document = Builder::new()
 *         .clean(input);
 *     assert_eq!(document.to_string(), output);
 */
export class Document {
  private constructor();
  free(): void;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_document_free: (a: number, b: number) => void;
  readonly clean_wasm: (a: number, b: number, c: number, d: number) => [number, number];
  readonly __wbindgen_export_0: WebAssembly.Table;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __externref_table_alloc: () => number;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
