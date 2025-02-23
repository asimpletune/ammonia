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
