
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model albums
 * 
 */
export type albums = $Result.DefaultSelection<Prisma.$albumsPayload>
/**
 * Model artists
 * 
 */
export type artists = $Result.DefaultSelection<Prisma.$artistsPayload>
/**
 * Model customers
 * 
 */
export type customers = $Result.DefaultSelection<Prisma.$customersPayload>
/**
 * Model employees
 * 
 */
export type employees = $Result.DefaultSelection<Prisma.$employeesPayload>
/**
 * Model genres
 * 
 */
export type genres = $Result.DefaultSelection<Prisma.$genresPayload>
/**
 * Model invoice_items
 * 
 */
export type invoice_items = $Result.DefaultSelection<Prisma.$invoice_itemsPayload>
/**
 * Model invoices
 * 
 */
export type invoices = $Result.DefaultSelection<Prisma.$invoicesPayload>
/**
 * Model media_types
 * 
 */
export type media_types = $Result.DefaultSelection<Prisma.$media_typesPayload>
/**
 * Model playlist_track
 * 
 */
export type playlist_track = $Result.DefaultSelection<Prisma.$playlist_trackPayload>
/**
 * Model playlists
 * 
 */
export type playlists = $Result.DefaultSelection<Prisma.$playlistsPayload>
/**
 * Model tracks
 * 
 */
export type tracks = $Result.DefaultSelection<Prisma.$tracksPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Albums
 * const albums = await prisma.albums.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Albums
   * const albums = await prisma.albums.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.albums`: Exposes CRUD operations for the **albums** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Albums
    * const albums = await prisma.albums.findMany()
    * ```
    */
  get albums(): Prisma.albumsDelegate<ExtArgs>;

  /**
   * `prisma.artists`: Exposes CRUD operations for the **artists** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Artists
    * const artists = await prisma.artists.findMany()
    * ```
    */
  get artists(): Prisma.artistsDelegate<ExtArgs>;

  /**
   * `prisma.customers`: Exposes CRUD operations for the **customers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customers.findMany()
    * ```
    */
  get customers(): Prisma.customersDelegate<ExtArgs>;

  /**
   * `prisma.employees`: Exposes CRUD operations for the **employees** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employees.findMany()
    * ```
    */
  get employees(): Prisma.employeesDelegate<ExtArgs>;

  /**
   * `prisma.genres`: Exposes CRUD operations for the **genres** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Genres
    * const genres = await prisma.genres.findMany()
    * ```
    */
  get genres(): Prisma.genresDelegate<ExtArgs>;

  /**
   * `prisma.invoice_items`: Exposes CRUD operations for the **invoice_items** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoice_items
    * const invoice_items = await prisma.invoice_items.findMany()
    * ```
    */
  get invoice_items(): Prisma.invoice_itemsDelegate<ExtArgs>;

  /**
   * `prisma.invoices`: Exposes CRUD operations for the **invoices** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoices
    * const invoices = await prisma.invoices.findMany()
    * ```
    */
  get invoices(): Prisma.invoicesDelegate<ExtArgs>;

  /**
   * `prisma.media_types`: Exposes CRUD operations for the **media_types** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Media_types
    * const media_types = await prisma.media_types.findMany()
    * ```
    */
  get media_types(): Prisma.media_typesDelegate<ExtArgs>;

  /**
   * `prisma.playlist_track`: Exposes CRUD operations for the **playlist_track** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Playlist_tracks
    * const playlist_tracks = await prisma.playlist_track.findMany()
    * ```
    */
  get playlist_track(): Prisma.playlist_trackDelegate<ExtArgs>;

  /**
   * `prisma.playlists`: Exposes CRUD operations for the **playlists** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Playlists
    * const playlists = await prisma.playlists.findMany()
    * ```
    */
  get playlists(): Prisma.playlistsDelegate<ExtArgs>;

  /**
   * `prisma.tracks`: Exposes CRUD operations for the **tracks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tracks
    * const tracks = await prisma.tracks.findMany()
    * ```
    */
  get tracks(): Prisma.tracksDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.16.1
   * Query Engine version: 34ace0eb2704183d2c05b60b52fba5c43c13f303
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    albums: 'albums',
    artists: 'artists',
    customers: 'customers',
    employees: 'employees',
    genres: 'genres',
    invoice_items: 'invoice_items',
    invoices: 'invoices',
    media_types: 'media_types',
    playlist_track: 'playlist_track',
    playlists: 'playlists',
    tracks: 'tracks'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "albums" | "artists" | "customers" | "employees" | "genres" | "invoice_items" | "invoices" | "media_types" | "playlist_track" | "playlists" | "tracks"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      albums: {
        payload: Prisma.$albumsPayload<ExtArgs>
        fields: Prisma.albumsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.albumsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$albumsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.albumsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$albumsPayload>
          }
          findFirst: {
            args: Prisma.albumsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$albumsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.albumsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$albumsPayload>
          }
          findMany: {
            args: Prisma.albumsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$albumsPayload>[]
          }
          create: {
            args: Prisma.albumsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$albumsPayload>
          }
          createMany: {
            args: Prisma.albumsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.albumsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$albumsPayload>[]
          }
          delete: {
            args: Prisma.albumsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$albumsPayload>
          }
          update: {
            args: Prisma.albumsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$albumsPayload>
          }
          deleteMany: {
            args: Prisma.albumsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.albumsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.albumsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$albumsPayload>
          }
          aggregate: {
            args: Prisma.AlbumsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlbums>
          }
          groupBy: {
            args: Prisma.albumsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlbumsGroupByOutputType>[]
          }
          count: {
            args: Prisma.albumsCountArgs<ExtArgs>
            result: $Utils.Optional<AlbumsCountAggregateOutputType> | number
          }
        }
      }
      artists: {
        payload: Prisma.$artistsPayload<ExtArgs>
        fields: Prisma.artistsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.artistsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$artistsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.artistsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$artistsPayload>
          }
          findFirst: {
            args: Prisma.artistsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$artistsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.artistsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$artistsPayload>
          }
          findMany: {
            args: Prisma.artistsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$artistsPayload>[]
          }
          create: {
            args: Prisma.artistsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$artistsPayload>
          }
          createMany: {
            args: Prisma.artistsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.artistsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$artistsPayload>[]
          }
          delete: {
            args: Prisma.artistsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$artistsPayload>
          }
          update: {
            args: Prisma.artistsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$artistsPayload>
          }
          deleteMany: {
            args: Prisma.artistsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.artistsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.artistsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$artistsPayload>
          }
          aggregate: {
            args: Prisma.ArtistsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArtists>
          }
          groupBy: {
            args: Prisma.artistsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArtistsGroupByOutputType>[]
          }
          count: {
            args: Prisma.artistsCountArgs<ExtArgs>
            result: $Utils.Optional<ArtistsCountAggregateOutputType> | number
          }
        }
      }
      customers: {
        payload: Prisma.$customersPayload<ExtArgs>
        fields: Prisma.customersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.customersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.customersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          findFirst: {
            args: Prisma.customersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.customersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          findMany: {
            args: Prisma.customersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>[]
          }
          create: {
            args: Prisma.customersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          createMany: {
            args: Prisma.customersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.customersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>[]
          }
          delete: {
            args: Prisma.customersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          update: {
            args: Prisma.customersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          deleteMany: {
            args: Prisma.customersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.customersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.customersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          aggregate: {
            args: Prisma.CustomersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomers>
          }
          groupBy: {
            args: Prisma.customersGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomersGroupByOutputType>[]
          }
          count: {
            args: Prisma.customersCountArgs<ExtArgs>
            result: $Utils.Optional<CustomersCountAggregateOutputType> | number
          }
        }
      }
      employees: {
        payload: Prisma.$employeesPayload<ExtArgs>
        fields: Prisma.employeesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.employeesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.employeesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload>
          }
          findFirst: {
            args: Prisma.employeesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.employeesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload>
          }
          findMany: {
            args: Prisma.employeesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload>[]
          }
          create: {
            args: Prisma.employeesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload>
          }
          createMany: {
            args: Prisma.employeesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.employeesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload>[]
          }
          delete: {
            args: Prisma.employeesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload>
          }
          update: {
            args: Prisma.employeesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload>
          }
          deleteMany: {
            args: Prisma.employeesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.employeesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.employeesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload>
          }
          aggregate: {
            args: Prisma.EmployeesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployees>
          }
          groupBy: {
            args: Prisma.employeesGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeesGroupByOutputType>[]
          }
          count: {
            args: Prisma.employeesCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeesCountAggregateOutputType> | number
          }
        }
      }
      genres: {
        payload: Prisma.$genresPayload<ExtArgs>
        fields: Prisma.genresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.genresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.genresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload>
          }
          findFirst: {
            args: Prisma.genresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.genresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload>
          }
          findMany: {
            args: Prisma.genresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload>[]
          }
          create: {
            args: Prisma.genresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload>
          }
          createMany: {
            args: Prisma.genresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.genresCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload>[]
          }
          delete: {
            args: Prisma.genresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload>
          }
          update: {
            args: Prisma.genresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload>
          }
          deleteMany: {
            args: Prisma.genresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.genresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.genresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload>
          }
          aggregate: {
            args: Prisma.GenresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGenres>
          }
          groupBy: {
            args: Prisma.genresGroupByArgs<ExtArgs>
            result: $Utils.Optional<GenresGroupByOutputType>[]
          }
          count: {
            args: Prisma.genresCountArgs<ExtArgs>
            result: $Utils.Optional<GenresCountAggregateOutputType> | number
          }
        }
      }
      invoice_items: {
        payload: Prisma.$invoice_itemsPayload<ExtArgs>
        fields: Prisma.invoice_itemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.invoice_itemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_itemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.invoice_itemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_itemsPayload>
          }
          findFirst: {
            args: Prisma.invoice_itemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_itemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.invoice_itemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_itemsPayload>
          }
          findMany: {
            args: Prisma.invoice_itemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_itemsPayload>[]
          }
          create: {
            args: Prisma.invoice_itemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_itemsPayload>
          }
          createMany: {
            args: Prisma.invoice_itemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.invoice_itemsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_itemsPayload>[]
          }
          delete: {
            args: Prisma.invoice_itemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_itemsPayload>
          }
          update: {
            args: Prisma.invoice_itemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_itemsPayload>
          }
          deleteMany: {
            args: Prisma.invoice_itemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.invoice_itemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.invoice_itemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_itemsPayload>
          }
          aggregate: {
            args: Prisma.Invoice_itemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoice_items>
          }
          groupBy: {
            args: Prisma.invoice_itemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Invoice_itemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.invoice_itemsCountArgs<ExtArgs>
            result: $Utils.Optional<Invoice_itemsCountAggregateOutputType> | number
          }
        }
      }
      invoices: {
        payload: Prisma.$invoicesPayload<ExtArgs>
        fields: Prisma.invoicesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.invoicesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.invoicesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>
          }
          findFirst: {
            args: Prisma.invoicesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.invoicesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>
          }
          findMany: {
            args: Prisma.invoicesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>[]
          }
          create: {
            args: Prisma.invoicesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>
          }
          createMany: {
            args: Prisma.invoicesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.invoicesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>[]
          }
          delete: {
            args: Prisma.invoicesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>
          }
          update: {
            args: Prisma.invoicesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>
          }
          deleteMany: {
            args: Prisma.invoicesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.invoicesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.invoicesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>
          }
          aggregate: {
            args: Prisma.InvoicesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoices>
          }
          groupBy: {
            args: Prisma.invoicesGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoicesGroupByOutputType>[]
          }
          count: {
            args: Prisma.invoicesCountArgs<ExtArgs>
            result: $Utils.Optional<InvoicesCountAggregateOutputType> | number
          }
        }
      }
      media_types: {
        payload: Prisma.$media_typesPayload<ExtArgs>
        fields: Prisma.media_typesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.media_typesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$media_typesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.media_typesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$media_typesPayload>
          }
          findFirst: {
            args: Prisma.media_typesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$media_typesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.media_typesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$media_typesPayload>
          }
          findMany: {
            args: Prisma.media_typesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$media_typesPayload>[]
          }
          create: {
            args: Prisma.media_typesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$media_typesPayload>
          }
          createMany: {
            args: Prisma.media_typesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.media_typesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$media_typesPayload>[]
          }
          delete: {
            args: Prisma.media_typesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$media_typesPayload>
          }
          update: {
            args: Prisma.media_typesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$media_typesPayload>
          }
          deleteMany: {
            args: Prisma.media_typesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.media_typesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.media_typesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$media_typesPayload>
          }
          aggregate: {
            args: Prisma.Media_typesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedia_types>
          }
          groupBy: {
            args: Prisma.media_typesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Media_typesGroupByOutputType>[]
          }
          count: {
            args: Prisma.media_typesCountArgs<ExtArgs>
            result: $Utils.Optional<Media_typesCountAggregateOutputType> | number
          }
        }
      }
      playlist_track: {
        payload: Prisma.$playlist_trackPayload<ExtArgs>
        fields: Prisma.playlist_trackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.playlist_trackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlist_trackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.playlist_trackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlist_trackPayload>
          }
          findFirst: {
            args: Prisma.playlist_trackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlist_trackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.playlist_trackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlist_trackPayload>
          }
          findMany: {
            args: Prisma.playlist_trackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlist_trackPayload>[]
          }
          create: {
            args: Prisma.playlist_trackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlist_trackPayload>
          }
          createMany: {
            args: Prisma.playlist_trackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.playlist_trackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlist_trackPayload>[]
          }
          delete: {
            args: Prisma.playlist_trackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlist_trackPayload>
          }
          update: {
            args: Prisma.playlist_trackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlist_trackPayload>
          }
          deleteMany: {
            args: Prisma.playlist_trackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.playlist_trackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.playlist_trackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlist_trackPayload>
          }
          aggregate: {
            args: Prisma.Playlist_trackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlaylist_track>
          }
          groupBy: {
            args: Prisma.playlist_trackGroupByArgs<ExtArgs>
            result: $Utils.Optional<Playlist_trackGroupByOutputType>[]
          }
          count: {
            args: Prisma.playlist_trackCountArgs<ExtArgs>
            result: $Utils.Optional<Playlist_trackCountAggregateOutputType> | number
          }
        }
      }
      playlists: {
        payload: Prisma.$playlistsPayload<ExtArgs>
        fields: Prisma.playlistsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.playlistsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlistsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.playlistsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlistsPayload>
          }
          findFirst: {
            args: Prisma.playlistsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlistsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.playlistsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlistsPayload>
          }
          findMany: {
            args: Prisma.playlistsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlistsPayload>[]
          }
          create: {
            args: Prisma.playlistsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlistsPayload>
          }
          createMany: {
            args: Prisma.playlistsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.playlistsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlistsPayload>[]
          }
          delete: {
            args: Prisma.playlistsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlistsPayload>
          }
          update: {
            args: Prisma.playlistsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlistsPayload>
          }
          deleteMany: {
            args: Prisma.playlistsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.playlistsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.playlistsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlistsPayload>
          }
          aggregate: {
            args: Prisma.PlaylistsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlaylists>
          }
          groupBy: {
            args: Prisma.playlistsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlaylistsGroupByOutputType>[]
          }
          count: {
            args: Prisma.playlistsCountArgs<ExtArgs>
            result: $Utils.Optional<PlaylistsCountAggregateOutputType> | number
          }
        }
      }
      tracks: {
        payload: Prisma.$tracksPayload<ExtArgs>
        fields: Prisma.tracksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tracksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tracksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tracksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tracksPayload>
          }
          findFirst: {
            args: Prisma.tracksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tracksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tracksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tracksPayload>
          }
          findMany: {
            args: Prisma.tracksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tracksPayload>[]
          }
          create: {
            args: Prisma.tracksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tracksPayload>
          }
          createMany: {
            args: Prisma.tracksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tracksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tracksPayload>[]
          }
          delete: {
            args: Prisma.tracksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tracksPayload>
          }
          update: {
            args: Prisma.tracksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tracksPayload>
          }
          deleteMany: {
            args: Prisma.tracksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tracksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tracksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tracksPayload>
          }
          aggregate: {
            args: Prisma.TracksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTracks>
          }
          groupBy: {
            args: Prisma.tracksGroupByArgs<ExtArgs>
            result: $Utils.Optional<TracksGroupByOutputType>[]
          }
          count: {
            args: Prisma.tracksCountArgs<ExtArgs>
            result: $Utils.Optional<TracksCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AlbumsCountOutputType
   */

  export type AlbumsCountOutputType = {
    tracks: number
  }

  export type AlbumsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tracks?: boolean | AlbumsCountOutputTypeCountTracksArgs
  }

  // Custom InputTypes
  /**
   * AlbumsCountOutputType without action
   */
  export type AlbumsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumsCountOutputType
     */
    select?: AlbumsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AlbumsCountOutputType without action
   */
  export type AlbumsCountOutputTypeCountTracksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tracksWhereInput
  }


  /**
   * Count Type ArtistsCountOutputType
   */

  export type ArtistsCountOutputType = {
    albums: number
  }

  export type ArtistsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    albums?: boolean | ArtistsCountOutputTypeCountAlbumsArgs
  }

  // Custom InputTypes
  /**
   * ArtistsCountOutputType without action
   */
  export type ArtistsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistsCountOutputType
     */
    select?: ArtistsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArtistsCountOutputType without action
   */
  export type ArtistsCountOutputTypeCountAlbumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: albumsWhereInput
  }


  /**
   * Count Type CustomersCountOutputType
   */

  export type CustomersCountOutputType = {
    invoices: number
  }

  export type CustomersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoices?: boolean | CustomersCountOutputTypeCountInvoicesArgs
  }

  // Custom InputTypes
  /**
   * CustomersCountOutputType without action
   */
  export type CustomersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomersCountOutputType
     */
    select?: CustomersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomersCountOutputType without action
   */
  export type CustomersCountOutputTypeCountInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: invoicesWhereInput
  }


  /**
   * Count Type EmployeesCountOutputType
   */

  export type EmployeesCountOutputType = {
    customers: number
    other_employees: number
  }

  export type EmployeesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customers?: boolean | EmployeesCountOutputTypeCountCustomersArgs
    other_employees?: boolean | EmployeesCountOutputTypeCountOther_employeesArgs
  }

  // Custom InputTypes
  /**
   * EmployeesCountOutputType without action
   */
  export type EmployeesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeesCountOutputType
     */
    select?: EmployeesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployeesCountOutputType without action
   */
  export type EmployeesCountOutputTypeCountCustomersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: customersWhereInput
  }

  /**
   * EmployeesCountOutputType without action
   */
  export type EmployeesCountOutputTypeCountOther_employeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: employeesWhereInput
  }


  /**
   * Count Type GenresCountOutputType
   */

  export type GenresCountOutputType = {
    tracks: number
  }

  export type GenresCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tracks?: boolean | GenresCountOutputTypeCountTracksArgs
  }

  // Custom InputTypes
  /**
   * GenresCountOutputType without action
   */
  export type GenresCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenresCountOutputType
     */
    select?: GenresCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GenresCountOutputType without action
   */
  export type GenresCountOutputTypeCountTracksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tracksWhereInput
  }


  /**
   * Count Type InvoicesCountOutputType
   */

  export type InvoicesCountOutputType = {
    invoice_items: number
  }

  export type InvoicesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice_items?: boolean | InvoicesCountOutputTypeCountInvoice_itemsArgs
  }

  // Custom InputTypes
  /**
   * InvoicesCountOutputType without action
   */
  export type InvoicesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoicesCountOutputType
     */
    select?: InvoicesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InvoicesCountOutputType without action
   */
  export type InvoicesCountOutputTypeCountInvoice_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: invoice_itemsWhereInput
  }


  /**
   * Count Type Media_typesCountOutputType
   */

  export type Media_typesCountOutputType = {
    tracks: number
  }

  export type Media_typesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tracks?: boolean | Media_typesCountOutputTypeCountTracksArgs
  }

  // Custom InputTypes
  /**
   * Media_typesCountOutputType without action
   */
  export type Media_typesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media_typesCountOutputType
     */
    select?: Media_typesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Media_typesCountOutputType without action
   */
  export type Media_typesCountOutputTypeCountTracksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tracksWhereInput
  }


  /**
   * Count Type PlaylistsCountOutputType
   */

  export type PlaylistsCountOutputType = {
    playlist_track: number
  }

  export type PlaylistsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlist_track?: boolean | PlaylistsCountOutputTypeCountPlaylist_trackArgs
  }

  // Custom InputTypes
  /**
   * PlaylistsCountOutputType without action
   */
  export type PlaylistsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistsCountOutputType
     */
    select?: PlaylistsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlaylistsCountOutputType without action
   */
  export type PlaylistsCountOutputTypeCountPlaylist_trackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: playlist_trackWhereInput
  }


  /**
   * Count Type TracksCountOutputType
   */

  export type TracksCountOutputType = {
    invoice_items: number
    playlist_track: number
  }

  export type TracksCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice_items?: boolean | TracksCountOutputTypeCountInvoice_itemsArgs
    playlist_track?: boolean | TracksCountOutputTypeCountPlaylist_trackArgs
  }

  // Custom InputTypes
  /**
   * TracksCountOutputType without action
   */
  export type TracksCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TracksCountOutputType
     */
    select?: TracksCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TracksCountOutputType without action
   */
  export type TracksCountOutputTypeCountInvoice_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: invoice_itemsWhereInput
  }

  /**
   * TracksCountOutputType without action
   */
  export type TracksCountOutputTypeCountPlaylist_trackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: playlist_trackWhereInput
  }


  /**
   * Models
   */

  /**
   * Model albums
   */

  export type AggregateAlbums = {
    _count: AlbumsCountAggregateOutputType | null
    _avg: AlbumsAvgAggregateOutputType | null
    _sum: AlbumsSumAggregateOutputType | null
    _min: AlbumsMinAggregateOutputType | null
    _max: AlbumsMaxAggregateOutputType | null
  }

  export type AlbumsAvgAggregateOutputType = {
    AlbumId: number | null
    ArtistId: number | null
  }

  export type AlbumsSumAggregateOutputType = {
    AlbumId: number | null
    ArtistId: number | null
  }

  export type AlbumsMinAggregateOutputType = {
    AlbumId: number | null
    Title: string | null
    ArtistId: number | null
  }

  export type AlbumsMaxAggregateOutputType = {
    AlbumId: number | null
    Title: string | null
    ArtistId: number | null
  }

  export type AlbumsCountAggregateOutputType = {
    AlbumId: number
    Title: number
    ArtistId: number
    _all: number
  }


  export type AlbumsAvgAggregateInputType = {
    AlbumId?: true
    ArtistId?: true
  }

  export type AlbumsSumAggregateInputType = {
    AlbumId?: true
    ArtistId?: true
  }

  export type AlbumsMinAggregateInputType = {
    AlbumId?: true
    Title?: true
    ArtistId?: true
  }

  export type AlbumsMaxAggregateInputType = {
    AlbumId?: true
    Title?: true
    ArtistId?: true
  }

  export type AlbumsCountAggregateInputType = {
    AlbumId?: true
    Title?: true
    ArtistId?: true
    _all?: true
  }

  export type AlbumsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which albums to aggregate.
     */
    where?: albumsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of albums to fetch.
     */
    orderBy?: albumsOrderByWithRelationInput | albumsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: albumsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned albums
    **/
    _count?: true | AlbumsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlbumsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlbumsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlbumsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlbumsMaxAggregateInputType
  }

  export type GetAlbumsAggregateType<T extends AlbumsAggregateArgs> = {
        [P in keyof T & keyof AggregateAlbums]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlbums[P]>
      : GetScalarType<T[P], AggregateAlbums[P]>
  }




  export type albumsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: albumsWhereInput
    orderBy?: albumsOrderByWithAggregationInput | albumsOrderByWithAggregationInput[]
    by: AlbumsScalarFieldEnum[] | AlbumsScalarFieldEnum
    having?: albumsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlbumsCountAggregateInputType | true
    _avg?: AlbumsAvgAggregateInputType
    _sum?: AlbumsSumAggregateInputType
    _min?: AlbumsMinAggregateInputType
    _max?: AlbumsMaxAggregateInputType
  }

  export type AlbumsGroupByOutputType = {
    AlbumId: number
    Title: string
    ArtistId: number
    _count: AlbumsCountAggregateOutputType | null
    _avg: AlbumsAvgAggregateOutputType | null
    _sum: AlbumsSumAggregateOutputType | null
    _min: AlbumsMinAggregateOutputType | null
    _max: AlbumsMaxAggregateOutputType | null
  }

  type GetAlbumsGroupByPayload<T extends albumsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlbumsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlbumsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlbumsGroupByOutputType[P]>
            : GetScalarType<T[P], AlbumsGroupByOutputType[P]>
        }
      >
    >


  export type albumsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    AlbumId?: boolean
    Title?: boolean
    ArtistId?: boolean
    artists?: boolean | artistsDefaultArgs<ExtArgs>
    tracks?: boolean | albums$tracksArgs<ExtArgs>
    _count?: boolean | AlbumsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["albums"]>

  export type albumsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    AlbumId?: boolean
    Title?: boolean
    ArtistId?: boolean
    artists?: boolean | artistsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["albums"]>

  export type albumsSelectScalar = {
    AlbumId?: boolean
    Title?: boolean
    ArtistId?: boolean
  }

  export type albumsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artists?: boolean | artistsDefaultArgs<ExtArgs>
    tracks?: boolean | albums$tracksArgs<ExtArgs>
    _count?: boolean | AlbumsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type albumsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artists?: boolean | artistsDefaultArgs<ExtArgs>
  }

  export type $albumsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "albums"
    objects: {
      artists: Prisma.$artistsPayload<ExtArgs>
      tracks: Prisma.$tracksPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      AlbumId: number
      Title: string
      ArtistId: number
    }, ExtArgs["result"]["albums"]>
    composites: {}
  }

  type albumsGetPayload<S extends boolean | null | undefined | albumsDefaultArgs> = $Result.GetResult<Prisma.$albumsPayload, S>

  type albumsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<albumsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AlbumsCountAggregateInputType | true
    }

  export interface albumsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['albums'], meta: { name: 'albums' } }
    /**
     * Find zero or one Albums that matches the filter.
     * @param {albumsFindUniqueArgs} args - Arguments to find a Albums
     * @example
     * // Get one Albums
     * const albums = await prisma.albums.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends albumsFindUniqueArgs>(args: SelectSubset<T, albumsFindUniqueArgs<ExtArgs>>): Prisma__albumsClient<$Result.GetResult<Prisma.$albumsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Albums that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {albumsFindUniqueOrThrowArgs} args - Arguments to find a Albums
     * @example
     * // Get one Albums
     * const albums = await prisma.albums.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends albumsFindUniqueOrThrowArgs>(args: SelectSubset<T, albumsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__albumsClient<$Result.GetResult<Prisma.$albumsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Albums that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {albumsFindFirstArgs} args - Arguments to find a Albums
     * @example
     * // Get one Albums
     * const albums = await prisma.albums.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends albumsFindFirstArgs>(args?: SelectSubset<T, albumsFindFirstArgs<ExtArgs>>): Prisma__albumsClient<$Result.GetResult<Prisma.$albumsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Albums that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {albumsFindFirstOrThrowArgs} args - Arguments to find a Albums
     * @example
     * // Get one Albums
     * const albums = await prisma.albums.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends albumsFindFirstOrThrowArgs>(args?: SelectSubset<T, albumsFindFirstOrThrowArgs<ExtArgs>>): Prisma__albumsClient<$Result.GetResult<Prisma.$albumsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Albums that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {albumsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Albums
     * const albums = await prisma.albums.findMany()
     * 
     * // Get first 10 Albums
     * const albums = await prisma.albums.findMany({ take: 10 })
     * 
     * // Only select the `AlbumId`
     * const albumsWithAlbumIdOnly = await prisma.albums.findMany({ select: { AlbumId: true } })
     * 
     */
    findMany<T extends albumsFindManyArgs>(args?: SelectSubset<T, albumsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$albumsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Albums.
     * @param {albumsCreateArgs} args - Arguments to create a Albums.
     * @example
     * // Create one Albums
     * const Albums = await prisma.albums.create({
     *   data: {
     *     // ... data to create a Albums
     *   }
     * })
     * 
     */
    create<T extends albumsCreateArgs>(args: SelectSubset<T, albumsCreateArgs<ExtArgs>>): Prisma__albumsClient<$Result.GetResult<Prisma.$albumsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Albums.
     * @param {albumsCreateManyArgs} args - Arguments to create many Albums.
     * @example
     * // Create many Albums
     * const albums = await prisma.albums.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends albumsCreateManyArgs>(args?: SelectSubset<T, albumsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Albums and returns the data saved in the database.
     * @param {albumsCreateManyAndReturnArgs} args - Arguments to create many Albums.
     * @example
     * // Create many Albums
     * const albums = await prisma.albums.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Albums and only return the `AlbumId`
     * const albumsWithAlbumIdOnly = await prisma.albums.createManyAndReturn({ 
     *   select: { AlbumId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends albumsCreateManyAndReturnArgs>(args?: SelectSubset<T, albumsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$albumsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Albums.
     * @param {albumsDeleteArgs} args - Arguments to delete one Albums.
     * @example
     * // Delete one Albums
     * const Albums = await prisma.albums.delete({
     *   where: {
     *     // ... filter to delete one Albums
     *   }
     * })
     * 
     */
    delete<T extends albumsDeleteArgs>(args: SelectSubset<T, albumsDeleteArgs<ExtArgs>>): Prisma__albumsClient<$Result.GetResult<Prisma.$albumsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Albums.
     * @param {albumsUpdateArgs} args - Arguments to update one Albums.
     * @example
     * // Update one Albums
     * const albums = await prisma.albums.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends albumsUpdateArgs>(args: SelectSubset<T, albumsUpdateArgs<ExtArgs>>): Prisma__albumsClient<$Result.GetResult<Prisma.$albumsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Albums.
     * @param {albumsDeleteManyArgs} args - Arguments to filter Albums to delete.
     * @example
     * // Delete a few Albums
     * const { count } = await prisma.albums.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends albumsDeleteManyArgs>(args?: SelectSubset<T, albumsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Albums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {albumsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Albums
     * const albums = await prisma.albums.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends albumsUpdateManyArgs>(args: SelectSubset<T, albumsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Albums.
     * @param {albumsUpsertArgs} args - Arguments to update or create a Albums.
     * @example
     * // Update or create a Albums
     * const albums = await prisma.albums.upsert({
     *   create: {
     *     // ... data to create a Albums
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Albums we want to update
     *   }
     * })
     */
    upsert<T extends albumsUpsertArgs>(args: SelectSubset<T, albumsUpsertArgs<ExtArgs>>): Prisma__albumsClient<$Result.GetResult<Prisma.$albumsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Albums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {albumsCountArgs} args - Arguments to filter Albums to count.
     * @example
     * // Count the number of Albums
     * const count = await prisma.albums.count({
     *   where: {
     *     // ... the filter for the Albums we want to count
     *   }
     * })
    **/
    count<T extends albumsCountArgs>(
      args?: Subset<T, albumsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlbumsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Albums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AlbumsAggregateArgs>(args: Subset<T, AlbumsAggregateArgs>): Prisma.PrismaPromise<GetAlbumsAggregateType<T>>

    /**
     * Group by Albums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {albumsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends albumsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: albumsGroupByArgs['orderBy'] }
        : { orderBy?: albumsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, albumsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlbumsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the albums model
   */
  readonly fields: albumsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for albums.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__albumsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    artists<T extends artistsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, artistsDefaultArgs<ExtArgs>>): Prisma__artistsClient<$Result.GetResult<Prisma.$artistsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    tracks<T extends albums$tracksArgs<ExtArgs> = {}>(args?: Subset<T, albums$tracksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tracksPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the albums model
   */ 
  interface albumsFieldRefs {
    readonly AlbumId: FieldRef<"albums", 'Int'>
    readonly Title: FieldRef<"albums", 'String'>
    readonly ArtistId: FieldRef<"albums", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * albums findUnique
   */
  export type albumsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the albums
     */
    select?: albumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: albumsInclude<ExtArgs> | null
    /**
     * Filter, which albums to fetch.
     */
    where: albumsWhereUniqueInput
  }

  /**
   * albums findUniqueOrThrow
   */
  export type albumsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the albums
     */
    select?: albumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: albumsInclude<ExtArgs> | null
    /**
     * Filter, which albums to fetch.
     */
    where: albumsWhereUniqueInput
  }

  /**
   * albums findFirst
   */
  export type albumsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the albums
     */
    select?: albumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: albumsInclude<ExtArgs> | null
    /**
     * Filter, which albums to fetch.
     */
    where?: albumsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of albums to fetch.
     */
    orderBy?: albumsOrderByWithRelationInput | albumsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for albums.
     */
    cursor?: albumsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of albums.
     */
    distinct?: AlbumsScalarFieldEnum | AlbumsScalarFieldEnum[]
  }

  /**
   * albums findFirstOrThrow
   */
  export type albumsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the albums
     */
    select?: albumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: albumsInclude<ExtArgs> | null
    /**
     * Filter, which albums to fetch.
     */
    where?: albumsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of albums to fetch.
     */
    orderBy?: albumsOrderByWithRelationInput | albumsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for albums.
     */
    cursor?: albumsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of albums.
     */
    distinct?: AlbumsScalarFieldEnum | AlbumsScalarFieldEnum[]
  }

  /**
   * albums findMany
   */
  export type albumsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the albums
     */
    select?: albumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: albumsInclude<ExtArgs> | null
    /**
     * Filter, which albums to fetch.
     */
    where?: albumsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of albums to fetch.
     */
    orderBy?: albumsOrderByWithRelationInput | albumsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing albums.
     */
    cursor?: albumsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` albums.
     */
    skip?: number
    distinct?: AlbumsScalarFieldEnum | AlbumsScalarFieldEnum[]
  }

  /**
   * albums create
   */
  export type albumsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the albums
     */
    select?: albumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: albumsInclude<ExtArgs> | null
    /**
     * The data needed to create a albums.
     */
    data: XOR<albumsCreateInput, albumsUncheckedCreateInput>
  }

  /**
   * albums createMany
   */
  export type albumsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many albums.
     */
    data: albumsCreateManyInput | albumsCreateManyInput[]
  }

  /**
   * albums createManyAndReturn
   */
  export type albumsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the albums
     */
    select?: albumsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many albums.
     */
    data: albumsCreateManyInput | albumsCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: albumsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * albums update
   */
  export type albumsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the albums
     */
    select?: albumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: albumsInclude<ExtArgs> | null
    /**
     * The data needed to update a albums.
     */
    data: XOR<albumsUpdateInput, albumsUncheckedUpdateInput>
    /**
     * Choose, which albums to update.
     */
    where: albumsWhereUniqueInput
  }

  /**
   * albums updateMany
   */
  export type albumsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update albums.
     */
    data: XOR<albumsUpdateManyMutationInput, albumsUncheckedUpdateManyInput>
    /**
     * Filter which albums to update
     */
    where?: albumsWhereInput
  }

  /**
   * albums upsert
   */
  export type albumsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the albums
     */
    select?: albumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: albumsInclude<ExtArgs> | null
    /**
     * The filter to search for the albums to update in case it exists.
     */
    where: albumsWhereUniqueInput
    /**
     * In case the albums found by the `where` argument doesn't exist, create a new albums with this data.
     */
    create: XOR<albumsCreateInput, albumsUncheckedCreateInput>
    /**
     * In case the albums was found with the provided `where` argument, update it with this data.
     */
    update: XOR<albumsUpdateInput, albumsUncheckedUpdateInput>
  }

  /**
   * albums delete
   */
  export type albumsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the albums
     */
    select?: albumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: albumsInclude<ExtArgs> | null
    /**
     * Filter which albums to delete.
     */
    where: albumsWhereUniqueInput
  }

  /**
   * albums deleteMany
   */
  export type albumsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which albums to delete
     */
    where?: albumsWhereInput
  }

  /**
   * albums.tracks
   */
  export type albums$tracksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tracks
     */
    select?: tracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tracksInclude<ExtArgs> | null
    where?: tracksWhereInput
    orderBy?: tracksOrderByWithRelationInput | tracksOrderByWithRelationInput[]
    cursor?: tracksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TracksScalarFieldEnum | TracksScalarFieldEnum[]
  }

  /**
   * albums without action
   */
  export type albumsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the albums
     */
    select?: albumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: albumsInclude<ExtArgs> | null
  }


  /**
   * Model artists
   */

  export type AggregateArtists = {
    _count: ArtistsCountAggregateOutputType | null
    _avg: ArtistsAvgAggregateOutputType | null
    _sum: ArtistsSumAggregateOutputType | null
    _min: ArtistsMinAggregateOutputType | null
    _max: ArtistsMaxAggregateOutputType | null
  }

  export type ArtistsAvgAggregateOutputType = {
    ArtistId: number | null
  }

  export type ArtistsSumAggregateOutputType = {
    ArtistId: number | null
  }

  export type ArtistsMinAggregateOutputType = {
    ArtistId: number | null
    Name: string | null
  }

  export type ArtistsMaxAggregateOutputType = {
    ArtistId: number | null
    Name: string | null
  }

  export type ArtistsCountAggregateOutputType = {
    ArtistId: number
    Name: number
    _all: number
  }


  export type ArtistsAvgAggregateInputType = {
    ArtistId?: true
  }

  export type ArtistsSumAggregateInputType = {
    ArtistId?: true
  }

  export type ArtistsMinAggregateInputType = {
    ArtistId?: true
    Name?: true
  }

  export type ArtistsMaxAggregateInputType = {
    ArtistId?: true
    Name?: true
  }

  export type ArtistsCountAggregateInputType = {
    ArtistId?: true
    Name?: true
    _all?: true
  }

  export type ArtistsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which artists to aggregate.
     */
    where?: artistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of artists to fetch.
     */
    orderBy?: artistsOrderByWithRelationInput | artistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: artistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned artists
    **/
    _count?: true | ArtistsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArtistsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArtistsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArtistsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArtistsMaxAggregateInputType
  }

  export type GetArtistsAggregateType<T extends ArtistsAggregateArgs> = {
        [P in keyof T & keyof AggregateArtists]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtists[P]>
      : GetScalarType<T[P], AggregateArtists[P]>
  }




  export type artistsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: artistsWhereInput
    orderBy?: artistsOrderByWithAggregationInput | artistsOrderByWithAggregationInput[]
    by: ArtistsScalarFieldEnum[] | ArtistsScalarFieldEnum
    having?: artistsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArtistsCountAggregateInputType | true
    _avg?: ArtistsAvgAggregateInputType
    _sum?: ArtistsSumAggregateInputType
    _min?: ArtistsMinAggregateInputType
    _max?: ArtistsMaxAggregateInputType
  }

  export type ArtistsGroupByOutputType = {
    ArtistId: number
    Name: string | null
    _count: ArtistsCountAggregateOutputType | null
    _avg: ArtistsAvgAggregateOutputType | null
    _sum: ArtistsSumAggregateOutputType | null
    _min: ArtistsMinAggregateOutputType | null
    _max: ArtistsMaxAggregateOutputType | null
  }

  type GetArtistsGroupByPayload<T extends artistsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArtistsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArtistsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtistsGroupByOutputType[P]>
            : GetScalarType<T[P], ArtistsGroupByOutputType[P]>
        }
      >
    >


  export type artistsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ArtistId?: boolean
    Name?: boolean
    albums?: boolean | artists$albumsArgs<ExtArgs>
    _count?: boolean | ArtistsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artists"]>

  export type artistsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ArtistId?: boolean
    Name?: boolean
  }, ExtArgs["result"]["artists"]>

  export type artistsSelectScalar = {
    ArtistId?: boolean
    Name?: boolean
  }

  export type artistsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    albums?: boolean | artists$albumsArgs<ExtArgs>
    _count?: boolean | ArtistsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type artistsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $artistsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "artists"
    objects: {
      albums: Prisma.$albumsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ArtistId: number
      Name: string | null
    }, ExtArgs["result"]["artists"]>
    composites: {}
  }

  type artistsGetPayload<S extends boolean | null | undefined | artistsDefaultArgs> = $Result.GetResult<Prisma.$artistsPayload, S>

  type artistsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<artistsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ArtistsCountAggregateInputType | true
    }

  export interface artistsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['artists'], meta: { name: 'artists' } }
    /**
     * Find zero or one Artists that matches the filter.
     * @param {artistsFindUniqueArgs} args - Arguments to find a Artists
     * @example
     * // Get one Artists
     * const artists = await prisma.artists.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends artistsFindUniqueArgs>(args: SelectSubset<T, artistsFindUniqueArgs<ExtArgs>>): Prisma__artistsClient<$Result.GetResult<Prisma.$artistsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Artists that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {artistsFindUniqueOrThrowArgs} args - Arguments to find a Artists
     * @example
     * // Get one Artists
     * const artists = await prisma.artists.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends artistsFindUniqueOrThrowArgs>(args: SelectSubset<T, artistsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__artistsClient<$Result.GetResult<Prisma.$artistsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Artists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {artistsFindFirstArgs} args - Arguments to find a Artists
     * @example
     * // Get one Artists
     * const artists = await prisma.artists.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends artistsFindFirstArgs>(args?: SelectSubset<T, artistsFindFirstArgs<ExtArgs>>): Prisma__artistsClient<$Result.GetResult<Prisma.$artistsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Artists that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {artistsFindFirstOrThrowArgs} args - Arguments to find a Artists
     * @example
     * // Get one Artists
     * const artists = await prisma.artists.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends artistsFindFirstOrThrowArgs>(args?: SelectSubset<T, artistsFindFirstOrThrowArgs<ExtArgs>>): Prisma__artistsClient<$Result.GetResult<Prisma.$artistsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Artists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {artistsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Artists
     * const artists = await prisma.artists.findMany()
     * 
     * // Get first 10 Artists
     * const artists = await prisma.artists.findMany({ take: 10 })
     * 
     * // Only select the `ArtistId`
     * const artistsWithArtistIdOnly = await prisma.artists.findMany({ select: { ArtistId: true } })
     * 
     */
    findMany<T extends artistsFindManyArgs>(args?: SelectSubset<T, artistsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$artistsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Artists.
     * @param {artistsCreateArgs} args - Arguments to create a Artists.
     * @example
     * // Create one Artists
     * const Artists = await prisma.artists.create({
     *   data: {
     *     // ... data to create a Artists
     *   }
     * })
     * 
     */
    create<T extends artistsCreateArgs>(args: SelectSubset<T, artistsCreateArgs<ExtArgs>>): Prisma__artistsClient<$Result.GetResult<Prisma.$artistsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Artists.
     * @param {artistsCreateManyArgs} args - Arguments to create many Artists.
     * @example
     * // Create many Artists
     * const artists = await prisma.artists.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends artistsCreateManyArgs>(args?: SelectSubset<T, artistsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Artists and returns the data saved in the database.
     * @param {artistsCreateManyAndReturnArgs} args - Arguments to create many Artists.
     * @example
     * // Create many Artists
     * const artists = await prisma.artists.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Artists and only return the `ArtistId`
     * const artistsWithArtistIdOnly = await prisma.artists.createManyAndReturn({ 
     *   select: { ArtistId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends artistsCreateManyAndReturnArgs>(args?: SelectSubset<T, artistsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$artistsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Artists.
     * @param {artistsDeleteArgs} args - Arguments to delete one Artists.
     * @example
     * // Delete one Artists
     * const Artists = await prisma.artists.delete({
     *   where: {
     *     // ... filter to delete one Artists
     *   }
     * })
     * 
     */
    delete<T extends artistsDeleteArgs>(args: SelectSubset<T, artistsDeleteArgs<ExtArgs>>): Prisma__artistsClient<$Result.GetResult<Prisma.$artistsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Artists.
     * @param {artistsUpdateArgs} args - Arguments to update one Artists.
     * @example
     * // Update one Artists
     * const artists = await prisma.artists.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends artistsUpdateArgs>(args: SelectSubset<T, artistsUpdateArgs<ExtArgs>>): Prisma__artistsClient<$Result.GetResult<Prisma.$artistsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Artists.
     * @param {artistsDeleteManyArgs} args - Arguments to filter Artists to delete.
     * @example
     * // Delete a few Artists
     * const { count } = await prisma.artists.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends artistsDeleteManyArgs>(args?: SelectSubset<T, artistsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {artistsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Artists
     * const artists = await prisma.artists.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends artistsUpdateManyArgs>(args: SelectSubset<T, artistsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Artists.
     * @param {artistsUpsertArgs} args - Arguments to update or create a Artists.
     * @example
     * // Update or create a Artists
     * const artists = await prisma.artists.upsert({
     *   create: {
     *     // ... data to create a Artists
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Artists we want to update
     *   }
     * })
     */
    upsert<T extends artistsUpsertArgs>(args: SelectSubset<T, artistsUpsertArgs<ExtArgs>>): Prisma__artistsClient<$Result.GetResult<Prisma.$artistsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {artistsCountArgs} args - Arguments to filter Artists to count.
     * @example
     * // Count the number of Artists
     * const count = await prisma.artists.count({
     *   where: {
     *     // ... the filter for the Artists we want to count
     *   }
     * })
    **/
    count<T extends artistsCountArgs>(
      args?: Subset<T, artistsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtistsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArtistsAggregateArgs>(args: Subset<T, ArtistsAggregateArgs>): Prisma.PrismaPromise<GetArtistsAggregateType<T>>

    /**
     * Group by Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {artistsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends artistsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: artistsGroupByArgs['orderBy'] }
        : { orderBy?: artistsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, artistsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtistsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the artists model
   */
  readonly fields: artistsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for artists.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__artistsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    albums<T extends artists$albumsArgs<ExtArgs> = {}>(args?: Subset<T, artists$albumsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$albumsPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the artists model
   */ 
  interface artistsFieldRefs {
    readonly ArtistId: FieldRef<"artists", 'Int'>
    readonly Name: FieldRef<"artists", 'String'>
  }
    

  // Custom InputTypes
  /**
   * artists findUnique
   */
  export type artistsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artists
     */
    select?: artistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: artistsInclude<ExtArgs> | null
    /**
     * Filter, which artists to fetch.
     */
    where: artistsWhereUniqueInput
  }

  /**
   * artists findUniqueOrThrow
   */
  export type artistsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artists
     */
    select?: artistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: artistsInclude<ExtArgs> | null
    /**
     * Filter, which artists to fetch.
     */
    where: artistsWhereUniqueInput
  }

  /**
   * artists findFirst
   */
  export type artistsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artists
     */
    select?: artistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: artistsInclude<ExtArgs> | null
    /**
     * Filter, which artists to fetch.
     */
    where?: artistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of artists to fetch.
     */
    orderBy?: artistsOrderByWithRelationInput | artistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for artists.
     */
    cursor?: artistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of artists.
     */
    distinct?: ArtistsScalarFieldEnum | ArtistsScalarFieldEnum[]
  }

  /**
   * artists findFirstOrThrow
   */
  export type artistsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artists
     */
    select?: artistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: artistsInclude<ExtArgs> | null
    /**
     * Filter, which artists to fetch.
     */
    where?: artistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of artists to fetch.
     */
    orderBy?: artistsOrderByWithRelationInput | artistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for artists.
     */
    cursor?: artistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of artists.
     */
    distinct?: ArtistsScalarFieldEnum | ArtistsScalarFieldEnum[]
  }

  /**
   * artists findMany
   */
  export type artistsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artists
     */
    select?: artistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: artistsInclude<ExtArgs> | null
    /**
     * Filter, which artists to fetch.
     */
    where?: artistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of artists to fetch.
     */
    orderBy?: artistsOrderByWithRelationInput | artistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing artists.
     */
    cursor?: artistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` artists.
     */
    skip?: number
    distinct?: ArtistsScalarFieldEnum | ArtistsScalarFieldEnum[]
  }

  /**
   * artists create
   */
  export type artistsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artists
     */
    select?: artistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: artistsInclude<ExtArgs> | null
    /**
     * The data needed to create a artists.
     */
    data?: XOR<artistsCreateInput, artistsUncheckedCreateInput>
  }

  /**
   * artists createMany
   */
  export type artistsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many artists.
     */
    data: artistsCreateManyInput | artistsCreateManyInput[]
  }

  /**
   * artists createManyAndReturn
   */
  export type artistsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artists
     */
    select?: artistsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many artists.
     */
    data: artistsCreateManyInput | artistsCreateManyInput[]
  }

  /**
   * artists update
   */
  export type artistsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artists
     */
    select?: artistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: artistsInclude<ExtArgs> | null
    /**
     * The data needed to update a artists.
     */
    data: XOR<artistsUpdateInput, artistsUncheckedUpdateInput>
    /**
     * Choose, which artists to update.
     */
    where: artistsWhereUniqueInput
  }

  /**
   * artists updateMany
   */
  export type artistsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update artists.
     */
    data: XOR<artistsUpdateManyMutationInput, artistsUncheckedUpdateManyInput>
    /**
     * Filter which artists to update
     */
    where?: artistsWhereInput
  }

  /**
   * artists upsert
   */
  export type artistsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artists
     */
    select?: artistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: artistsInclude<ExtArgs> | null
    /**
     * The filter to search for the artists to update in case it exists.
     */
    where: artistsWhereUniqueInput
    /**
     * In case the artists found by the `where` argument doesn't exist, create a new artists with this data.
     */
    create: XOR<artistsCreateInput, artistsUncheckedCreateInput>
    /**
     * In case the artists was found with the provided `where` argument, update it with this data.
     */
    update: XOR<artistsUpdateInput, artistsUncheckedUpdateInput>
  }

  /**
   * artists delete
   */
  export type artistsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artists
     */
    select?: artistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: artistsInclude<ExtArgs> | null
    /**
     * Filter which artists to delete.
     */
    where: artistsWhereUniqueInput
  }

  /**
   * artists deleteMany
   */
  export type artistsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which artists to delete
     */
    where?: artistsWhereInput
  }

  /**
   * artists.albums
   */
  export type artists$albumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the albums
     */
    select?: albumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: albumsInclude<ExtArgs> | null
    where?: albumsWhereInput
    orderBy?: albumsOrderByWithRelationInput | albumsOrderByWithRelationInput[]
    cursor?: albumsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlbumsScalarFieldEnum | AlbumsScalarFieldEnum[]
  }

  /**
   * artists without action
   */
  export type artistsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artists
     */
    select?: artistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: artistsInclude<ExtArgs> | null
  }


  /**
   * Model customers
   */

  export type AggregateCustomers = {
    _count: CustomersCountAggregateOutputType | null
    _avg: CustomersAvgAggregateOutputType | null
    _sum: CustomersSumAggregateOutputType | null
    _min: CustomersMinAggregateOutputType | null
    _max: CustomersMaxAggregateOutputType | null
  }

  export type CustomersAvgAggregateOutputType = {
    CustomerId: number | null
    SupportRepId: number | null
  }

  export type CustomersSumAggregateOutputType = {
    CustomerId: number | null
    SupportRepId: number | null
  }

  export type CustomersMinAggregateOutputType = {
    CustomerId: number | null
    FirstName: string | null
    LastName: string | null
    ImageURL: string | null
    Company: string | null
    Address: string | null
    City: string | null
    State: string | null
    Country: string | null
    PostalCode: string | null
    Phone: string | null
    Fax: string | null
    Email: string | null
    SupportRepId: number | null
  }

  export type CustomersMaxAggregateOutputType = {
    CustomerId: number | null
    FirstName: string | null
    LastName: string | null
    ImageURL: string | null
    Company: string | null
    Address: string | null
    City: string | null
    State: string | null
    Country: string | null
    PostalCode: string | null
    Phone: string | null
    Fax: string | null
    Email: string | null
    SupportRepId: number | null
  }

  export type CustomersCountAggregateOutputType = {
    CustomerId: number
    FirstName: number
    LastName: number
    ImageURL: number
    Company: number
    Address: number
    City: number
    State: number
    Country: number
    PostalCode: number
    Phone: number
    Fax: number
    Email: number
    SupportRepId: number
    _all: number
  }


  export type CustomersAvgAggregateInputType = {
    CustomerId?: true
    SupportRepId?: true
  }

  export type CustomersSumAggregateInputType = {
    CustomerId?: true
    SupportRepId?: true
  }

  export type CustomersMinAggregateInputType = {
    CustomerId?: true
    FirstName?: true
    LastName?: true
    ImageURL?: true
    Company?: true
    Address?: true
    City?: true
    State?: true
    Country?: true
    PostalCode?: true
    Phone?: true
    Fax?: true
    Email?: true
    SupportRepId?: true
  }

  export type CustomersMaxAggregateInputType = {
    CustomerId?: true
    FirstName?: true
    LastName?: true
    ImageURL?: true
    Company?: true
    Address?: true
    City?: true
    State?: true
    Country?: true
    PostalCode?: true
    Phone?: true
    Fax?: true
    Email?: true
    SupportRepId?: true
  }

  export type CustomersCountAggregateInputType = {
    CustomerId?: true
    FirstName?: true
    LastName?: true
    ImageURL?: true
    Company?: true
    Address?: true
    City?: true
    State?: true
    Country?: true
    PostalCode?: true
    Phone?: true
    Fax?: true
    Email?: true
    SupportRepId?: true
    _all?: true
  }

  export type CustomersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customers to aggregate.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customersOrderByWithRelationInput | customersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned customers
    **/
    _count?: true | CustomersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomersMaxAggregateInputType
  }

  export type GetCustomersAggregateType<T extends CustomersAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomers[P]>
      : GetScalarType<T[P], AggregateCustomers[P]>
  }




  export type customersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: customersWhereInput
    orderBy?: customersOrderByWithAggregationInput | customersOrderByWithAggregationInput[]
    by: CustomersScalarFieldEnum[] | CustomersScalarFieldEnum
    having?: customersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomersCountAggregateInputType | true
    _avg?: CustomersAvgAggregateInputType
    _sum?: CustomersSumAggregateInputType
    _min?: CustomersMinAggregateInputType
    _max?: CustomersMaxAggregateInputType
  }

  export type CustomersGroupByOutputType = {
    CustomerId: number
    FirstName: string
    LastName: string
    ImageURL: string
    Company: string | null
    Address: string | null
    City: string | null
    State: string | null
    Country: string | null
    PostalCode: string | null
    Phone: string | null
    Fax: string | null
    Email: string
    SupportRepId: number | null
    _count: CustomersCountAggregateOutputType | null
    _avg: CustomersAvgAggregateOutputType | null
    _sum: CustomersSumAggregateOutputType | null
    _min: CustomersMinAggregateOutputType | null
    _max: CustomersMaxAggregateOutputType | null
  }

  type GetCustomersGroupByPayload<T extends customersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomersGroupByOutputType[P]>
            : GetScalarType<T[P], CustomersGroupByOutputType[P]>
        }
      >
    >


  export type customersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CustomerId?: boolean
    FirstName?: boolean
    LastName?: boolean
    ImageURL?: boolean
    Company?: boolean
    Address?: boolean
    City?: boolean
    State?: boolean
    Country?: boolean
    PostalCode?: boolean
    Phone?: boolean
    Fax?: boolean
    Email?: boolean
    SupportRepId?: boolean
    employees?: boolean | customers$employeesArgs<ExtArgs>
    invoices?: boolean | customers$invoicesArgs<ExtArgs>
    _count?: boolean | CustomersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customers"]>

  export type customersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CustomerId?: boolean
    FirstName?: boolean
    LastName?: boolean
    ImageURL?: boolean
    Company?: boolean
    Address?: boolean
    City?: boolean
    State?: boolean
    Country?: boolean
    PostalCode?: boolean
    Phone?: boolean
    Fax?: boolean
    Email?: boolean
    SupportRepId?: boolean
    employees?: boolean | customers$employeesArgs<ExtArgs>
  }, ExtArgs["result"]["customers"]>

  export type customersSelectScalar = {
    CustomerId?: boolean
    FirstName?: boolean
    LastName?: boolean
    ImageURL?: boolean
    Company?: boolean
    Address?: boolean
    City?: boolean
    State?: boolean
    Country?: boolean
    PostalCode?: boolean
    Phone?: boolean
    Fax?: boolean
    Email?: boolean
    SupportRepId?: boolean
  }

  export type customersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | customers$employeesArgs<ExtArgs>
    invoices?: boolean | customers$invoicesArgs<ExtArgs>
    _count?: boolean | CustomersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type customersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | customers$employeesArgs<ExtArgs>
  }

  export type $customersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "customers"
    objects: {
      employees: Prisma.$employeesPayload<ExtArgs> | null
      invoices: Prisma.$invoicesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      CustomerId: number
      FirstName: string
      LastName: string
      ImageURL: string
      Company: string | null
      Address: string | null
      City: string | null
      State: string | null
      Country: string | null
      PostalCode: string | null
      Phone: string | null
      Fax: string | null
      Email: string
      SupportRepId: number | null
    }, ExtArgs["result"]["customers"]>
    composites: {}
  }

  type customersGetPayload<S extends boolean | null | undefined | customersDefaultArgs> = $Result.GetResult<Prisma.$customersPayload, S>

  type customersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<customersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CustomersCountAggregateInputType | true
    }

  export interface customersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['customers'], meta: { name: 'customers' } }
    /**
     * Find zero or one Customers that matches the filter.
     * @param {customersFindUniqueArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends customersFindUniqueArgs>(args: SelectSubset<T, customersFindUniqueArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Customers that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {customersFindUniqueOrThrowArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends customersFindUniqueOrThrowArgs>(args: SelectSubset<T, customersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersFindFirstArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends customersFindFirstArgs>(args?: SelectSubset<T, customersFindFirstArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Customers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersFindFirstOrThrowArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends customersFindFirstOrThrowArgs>(args?: SelectSubset<T, customersFindFirstOrThrowArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customers.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customers.findMany({ take: 10 })
     * 
     * // Only select the `CustomerId`
     * const customersWithCustomerIdOnly = await prisma.customers.findMany({ select: { CustomerId: true } })
     * 
     */
    findMany<T extends customersFindManyArgs>(args?: SelectSubset<T, customersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Customers.
     * @param {customersCreateArgs} args - Arguments to create a Customers.
     * @example
     * // Create one Customers
     * const Customers = await prisma.customers.create({
     *   data: {
     *     // ... data to create a Customers
     *   }
     * })
     * 
     */
    create<T extends customersCreateArgs>(args: SelectSubset<T, customersCreateArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Customers.
     * @param {customersCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customers = await prisma.customers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends customersCreateManyArgs>(args?: SelectSubset<T, customersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {customersCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customers = await prisma.customers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `CustomerId`
     * const customersWithCustomerIdOnly = await prisma.customers.createManyAndReturn({ 
     *   select: { CustomerId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends customersCreateManyAndReturnArgs>(args?: SelectSubset<T, customersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Customers.
     * @param {customersDeleteArgs} args - Arguments to delete one Customers.
     * @example
     * // Delete one Customers
     * const Customers = await prisma.customers.delete({
     *   where: {
     *     // ... filter to delete one Customers
     *   }
     * })
     * 
     */
    delete<T extends customersDeleteArgs>(args: SelectSubset<T, customersDeleteArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Customers.
     * @param {customersUpdateArgs} args - Arguments to update one Customers.
     * @example
     * // Update one Customers
     * const customers = await prisma.customers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends customersUpdateArgs>(args: SelectSubset<T, customersUpdateArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Customers.
     * @param {customersDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends customersDeleteManyArgs>(args?: SelectSubset<T, customersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customers = await prisma.customers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends customersUpdateManyArgs>(args: SelectSubset<T, customersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Customers.
     * @param {customersUpsertArgs} args - Arguments to update or create a Customers.
     * @example
     * // Update or create a Customers
     * const customers = await prisma.customers.upsert({
     *   create: {
     *     // ... data to create a Customers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customers we want to update
     *   }
     * })
     */
    upsert<T extends customersUpsertArgs>(args: SelectSubset<T, customersUpsertArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customers.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends customersCountArgs>(
      args?: Subset<T, customersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomersAggregateArgs>(args: Subset<T, CustomersAggregateArgs>): Prisma.PrismaPromise<GetCustomersAggregateType<T>>

    /**
     * Group by Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends customersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: customersGroupByArgs['orderBy'] }
        : { orderBy?: customersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, customersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the customers model
   */
  readonly fields: customersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for customers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__customersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employees<T extends customers$employeesArgs<ExtArgs> = {}>(args?: Subset<T, customers$employeesArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    invoices<T extends customers$invoicesArgs<ExtArgs> = {}>(args?: Subset<T, customers$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the customers model
   */ 
  interface customersFieldRefs {
    readonly CustomerId: FieldRef<"customers", 'Int'>
    readonly FirstName: FieldRef<"customers", 'String'>
    readonly LastName: FieldRef<"customers", 'String'>
    readonly ImageURL: FieldRef<"customers", 'String'>
    readonly Company: FieldRef<"customers", 'String'>
    readonly Address: FieldRef<"customers", 'String'>
    readonly City: FieldRef<"customers", 'String'>
    readonly State: FieldRef<"customers", 'String'>
    readonly Country: FieldRef<"customers", 'String'>
    readonly PostalCode: FieldRef<"customers", 'String'>
    readonly Phone: FieldRef<"customers", 'String'>
    readonly Fax: FieldRef<"customers", 'String'>
    readonly Email: FieldRef<"customers", 'String'>
    readonly SupportRepId: FieldRef<"customers", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * customers findUnique
   */
  export type customersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where: customersWhereUniqueInput
  }

  /**
   * customers findUniqueOrThrow
   */
  export type customersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where: customersWhereUniqueInput
  }

  /**
   * customers findFirst
   */
  export type customersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customersOrderByWithRelationInput | customersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customers.
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customers.
     */
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }

  /**
   * customers findFirstOrThrow
   */
  export type customersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customersOrderByWithRelationInput | customersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customers.
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customers.
     */
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }

  /**
   * customers findMany
   */
  export type customersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customersOrderByWithRelationInput | customersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing customers.
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }

  /**
   * customers create
   */
  export type customersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * The data needed to create a customers.
     */
    data: XOR<customersCreateInput, customersUncheckedCreateInput>
  }

  /**
   * customers createMany
   */
  export type customersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many customers.
     */
    data: customersCreateManyInput | customersCreateManyInput[]
  }

  /**
   * customers createManyAndReturn
   */
  export type customersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many customers.
     */
    data: customersCreateManyInput | customersCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * customers update
   */
  export type customersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * The data needed to update a customers.
     */
    data: XOR<customersUpdateInput, customersUncheckedUpdateInput>
    /**
     * Choose, which customers to update.
     */
    where: customersWhereUniqueInput
  }

  /**
   * customers updateMany
   */
  export type customersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update customers.
     */
    data: XOR<customersUpdateManyMutationInput, customersUncheckedUpdateManyInput>
    /**
     * Filter which customers to update
     */
    where?: customersWhereInput
  }

  /**
   * customers upsert
   */
  export type customersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * The filter to search for the customers to update in case it exists.
     */
    where: customersWhereUniqueInput
    /**
     * In case the customers found by the `where` argument doesn't exist, create a new customers with this data.
     */
    create: XOR<customersCreateInput, customersUncheckedCreateInput>
    /**
     * In case the customers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<customersUpdateInput, customersUncheckedUpdateInput>
  }

  /**
   * customers delete
   */
  export type customersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter which customers to delete.
     */
    where: customersWhereUniqueInput
  }

  /**
   * customers deleteMany
   */
  export type customersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customers to delete
     */
    where?: customersWhereInput
  }

  /**
   * customers.employees
   */
  export type customers$employeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeesInclude<ExtArgs> | null
    where?: employeesWhereInput
  }

  /**
   * customers.invoices
   */
  export type customers$invoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    where?: invoicesWhereInput
    orderBy?: invoicesOrderByWithRelationInput | invoicesOrderByWithRelationInput[]
    cursor?: invoicesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoicesScalarFieldEnum | InvoicesScalarFieldEnum[]
  }

  /**
   * customers without action
   */
  export type customersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
  }


  /**
   * Model employees
   */

  export type AggregateEmployees = {
    _count: EmployeesCountAggregateOutputType | null
    _avg: EmployeesAvgAggregateOutputType | null
    _sum: EmployeesSumAggregateOutputType | null
    _min: EmployeesMinAggregateOutputType | null
    _max: EmployeesMaxAggregateOutputType | null
  }

  export type EmployeesAvgAggregateOutputType = {
    EmployeeId: number | null
    ReportsTo: number | null
  }

  export type EmployeesSumAggregateOutputType = {
    EmployeeId: number | null
    ReportsTo: number | null
  }

  export type EmployeesMinAggregateOutputType = {
    EmployeeId: number | null
    LastName: string | null
    FirstName: string | null
    ImageURL: string | null
    Title: string | null
    ReportsTo: number | null
    BirthDate: Date | null
    HireDate: Date | null
    Address: string | null
    City: string | null
    State: string | null
    Country: string | null
    PostalCode: string | null
    Phone: string | null
    Fax: string | null
    Email: string | null
  }

  export type EmployeesMaxAggregateOutputType = {
    EmployeeId: number | null
    LastName: string | null
    FirstName: string | null
    ImageURL: string | null
    Title: string | null
    ReportsTo: number | null
    BirthDate: Date | null
    HireDate: Date | null
    Address: string | null
    City: string | null
    State: string | null
    Country: string | null
    PostalCode: string | null
    Phone: string | null
    Fax: string | null
    Email: string | null
  }

  export type EmployeesCountAggregateOutputType = {
    EmployeeId: number
    LastName: number
    FirstName: number
    ImageURL: number
    Title: number
    ReportsTo: number
    BirthDate: number
    HireDate: number
    Address: number
    City: number
    State: number
    Country: number
    PostalCode: number
    Phone: number
    Fax: number
    Email: number
    _all: number
  }


  export type EmployeesAvgAggregateInputType = {
    EmployeeId?: true
    ReportsTo?: true
  }

  export type EmployeesSumAggregateInputType = {
    EmployeeId?: true
    ReportsTo?: true
  }

  export type EmployeesMinAggregateInputType = {
    EmployeeId?: true
    LastName?: true
    FirstName?: true
    ImageURL?: true
    Title?: true
    ReportsTo?: true
    BirthDate?: true
    HireDate?: true
    Address?: true
    City?: true
    State?: true
    Country?: true
    PostalCode?: true
    Phone?: true
    Fax?: true
    Email?: true
  }

  export type EmployeesMaxAggregateInputType = {
    EmployeeId?: true
    LastName?: true
    FirstName?: true
    ImageURL?: true
    Title?: true
    ReportsTo?: true
    BirthDate?: true
    HireDate?: true
    Address?: true
    City?: true
    State?: true
    Country?: true
    PostalCode?: true
    Phone?: true
    Fax?: true
    Email?: true
  }

  export type EmployeesCountAggregateInputType = {
    EmployeeId?: true
    LastName?: true
    FirstName?: true
    ImageURL?: true
    Title?: true
    ReportsTo?: true
    BirthDate?: true
    HireDate?: true
    Address?: true
    City?: true
    State?: true
    Country?: true
    PostalCode?: true
    Phone?: true
    Fax?: true
    Email?: true
    _all?: true
  }

  export type EmployeesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which employees to aggregate.
     */
    where?: employeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employees to fetch.
     */
    orderBy?: employeesOrderByWithRelationInput | employeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: employeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned employees
    **/
    _count?: true | EmployeesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeesMaxAggregateInputType
  }

  export type GetEmployeesAggregateType<T extends EmployeesAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployees]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployees[P]>
      : GetScalarType<T[P], AggregateEmployees[P]>
  }




  export type employeesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: employeesWhereInput
    orderBy?: employeesOrderByWithAggregationInput | employeesOrderByWithAggregationInput[]
    by: EmployeesScalarFieldEnum[] | EmployeesScalarFieldEnum
    having?: employeesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeesCountAggregateInputType | true
    _avg?: EmployeesAvgAggregateInputType
    _sum?: EmployeesSumAggregateInputType
    _min?: EmployeesMinAggregateInputType
    _max?: EmployeesMaxAggregateInputType
  }

  export type EmployeesGroupByOutputType = {
    EmployeeId: number
    LastName: string
    FirstName: string
    ImageURL: string
    Title: string | null
    ReportsTo: number | null
    BirthDate: Date | null
    HireDate: Date | null
    Address: string | null
    City: string | null
    State: string | null
    Country: string | null
    PostalCode: string | null
    Phone: string | null
    Fax: string | null
    Email: string | null
    _count: EmployeesCountAggregateOutputType | null
    _avg: EmployeesAvgAggregateOutputType | null
    _sum: EmployeesSumAggregateOutputType | null
    _min: EmployeesMinAggregateOutputType | null
    _max: EmployeesMaxAggregateOutputType | null
  }

  type GetEmployeesGroupByPayload<T extends employeesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeesGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeesGroupByOutputType[P]>
        }
      >
    >


  export type employeesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    EmployeeId?: boolean
    LastName?: boolean
    FirstName?: boolean
    ImageURL?: boolean
    Title?: boolean
    ReportsTo?: boolean
    BirthDate?: boolean
    HireDate?: boolean
    Address?: boolean
    City?: boolean
    State?: boolean
    Country?: boolean
    PostalCode?: boolean
    Phone?: boolean
    Fax?: boolean
    Email?: boolean
    customers?: boolean | employees$customersArgs<ExtArgs>
    employees?: boolean | employees$employeesArgs<ExtArgs>
    other_employees?: boolean | employees$other_employeesArgs<ExtArgs>
    _count?: boolean | EmployeesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employees"]>

  export type employeesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    EmployeeId?: boolean
    LastName?: boolean
    FirstName?: boolean
    ImageURL?: boolean
    Title?: boolean
    ReportsTo?: boolean
    BirthDate?: boolean
    HireDate?: boolean
    Address?: boolean
    City?: boolean
    State?: boolean
    Country?: boolean
    PostalCode?: boolean
    Phone?: boolean
    Fax?: boolean
    Email?: boolean
    employees?: boolean | employees$employeesArgs<ExtArgs>
  }, ExtArgs["result"]["employees"]>

  export type employeesSelectScalar = {
    EmployeeId?: boolean
    LastName?: boolean
    FirstName?: boolean
    ImageURL?: boolean
    Title?: boolean
    ReportsTo?: boolean
    BirthDate?: boolean
    HireDate?: boolean
    Address?: boolean
    City?: boolean
    State?: boolean
    Country?: boolean
    PostalCode?: boolean
    Phone?: boolean
    Fax?: boolean
    Email?: boolean
  }

  export type employeesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customers?: boolean | employees$customersArgs<ExtArgs>
    employees?: boolean | employees$employeesArgs<ExtArgs>
    other_employees?: boolean | employees$other_employeesArgs<ExtArgs>
    _count?: boolean | EmployeesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type employeesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | employees$employeesArgs<ExtArgs>
  }

  export type $employeesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "employees"
    objects: {
      customers: Prisma.$customersPayload<ExtArgs>[]
      employees: Prisma.$employeesPayload<ExtArgs> | null
      other_employees: Prisma.$employeesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      EmployeeId: number
      LastName: string
      FirstName: string
      ImageURL: string
      Title: string | null
      ReportsTo: number | null
      BirthDate: Date | null
      HireDate: Date | null
      Address: string | null
      City: string | null
      State: string | null
      Country: string | null
      PostalCode: string | null
      Phone: string | null
      Fax: string | null
      Email: string | null
    }, ExtArgs["result"]["employees"]>
    composites: {}
  }

  type employeesGetPayload<S extends boolean | null | undefined | employeesDefaultArgs> = $Result.GetResult<Prisma.$employeesPayload, S>

  type employeesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<employeesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EmployeesCountAggregateInputType | true
    }

  export interface employeesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['employees'], meta: { name: 'employees' } }
    /**
     * Find zero or one Employees that matches the filter.
     * @param {employeesFindUniqueArgs} args - Arguments to find a Employees
     * @example
     * // Get one Employees
     * const employees = await prisma.employees.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends employeesFindUniqueArgs>(args: SelectSubset<T, employeesFindUniqueArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Employees that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {employeesFindUniqueOrThrowArgs} args - Arguments to find a Employees
     * @example
     * // Get one Employees
     * const employees = await prisma.employees.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends employeesFindUniqueOrThrowArgs>(args: SelectSubset<T, employeesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeesFindFirstArgs} args - Arguments to find a Employees
     * @example
     * // Get one Employees
     * const employees = await prisma.employees.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends employeesFindFirstArgs>(args?: SelectSubset<T, employeesFindFirstArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Employees that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeesFindFirstOrThrowArgs} args - Arguments to find a Employees
     * @example
     * // Get one Employees
     * const employees = await prisma.employees.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends employeesFindFirstOrThrowArgs>(args?: SelectSubset<T, employeesFindFirstOrThrowArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employees.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employees.findMany({ take: 10 })
     * 
     * // Only select the `EmployeeId`
     * const employeesWithEmployeeIdOnly = await prisma.employees.findMany({ select: { EmployeeId: true } })
     * 
     */
    findMany<T extends employeesFindManyArgs>(args?: SelectSubset<T, employeesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Employees.
     * @param {employeesCreateArgs} args - Arguments to create a Employees.
     * @example
     * // Create one Employees
     * const Employees = await prisma.employees.create({
     *   data: {
     *     // ... data to create a Employees
     *   }
     * })
     * 
     */
    create<T extends employeesCreateArgs>(args: SelectSubset<T, employeesCreateArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Employees.
     * @param {employeesCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employees = await prisma.employees.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends employeesCreateManyArgs>(args?: SelectSubset<T, employeesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Employees and returns the data saved in the database.
     * @param {employeesCreateManyAndReturnArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employees = await prisma.employees.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Employees and only return the `EmployeeId`
     * const employeesWithEmployeeIdOnly = await prisma.employees.createManyAndReturn({ 
     *   select: { EmployeeId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends employeesCreateManyAndReturnArgs>(args?: SelectSubset<T, employeesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Employees.
     * @param {employeesDeleteArgs} args - Arguments to delete one Employees.
     * @example
     * // Delete one Employees
     * const Employees = await prisma.employees.delete({
     *   where: {
     *     // ... filter to delete one Employees
     *   }
     * })
     * 
     */
    delete<T extends employeesDeleteArgs>(args: SelectSubset<T, employeesDeleteArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Employees.
     * @param {employeesUpdateArgs} args - Arguments to update one Employees.
     * @example
     * // Update one Employees
     * const employees = await prisma.employees.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends employeesUpdateArgs>(args: SelectSubset<T, employeesUpdateArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Employees.
     * @param {employeesDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employees.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends employeesDeleteManyArgs>(args?: SelectSubset<T, employeesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employees = await prisma.employees.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends employeesUpdateManyArgs>(args: SelectSubset<T, employeesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Employees.
     * @param {employeesUpsertArgs} args - Arguments to update or create a Employees.
     * @example
     * // Update or create a Employees
     * const employees = await prisma.employees.upsert({
     *   create: {
     *     // ... data to create a Employees
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employees we want to update
     *   }
     * })
     */
    upsert<T extends employeesUpsertArgs>(args: SelectSubset<T, employeesUpsertArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeesCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employees.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends employeesCountArgs>(
      args?: Subset<T, employeesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmployeesAggregateArgs>(args: Subset<T, EmployeesAggregateArgs>): Prisma.PrismaPromise<GetEmployeesAggregateType<T>>

    /**
     * Group by Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends employeesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: employeesGroupByArgs['orderBy'] }
        : { orderBy?: employeesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, employeesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the employees model
   */
  readonly fields: employeesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for employees.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__employeesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customers<T extends employees$customersArgs<ExtArgs> = {}>(args?: Subset<T, employees$customersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findMany"> | Null>
    employees<T extends employees$employeesArgs<ExtArgs> = {}>(args?: Subset<T, employees$employeesArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    other_employees<T extends employees$other_employeesArgs<ExtArgs> = {}>(args?: Subset<T, employees$other_employeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the employees model
   */ 
  interface employeesFieldRefs {
    readonly EmployeeId: FieldRef<"employees", 'Int'>
    readonly LastName: FieldRef<"employees", 'String'>
    readonly FirstName: FieldRef<"employees", 'String'>
    readonly ImageURL: FieldRef<"employees", 'String'>
    readonly Title: FieldRef<"employees", 'String'>
    readonly ReportsTo: FieldRef<"employees", 'Int'>
    readonly BirthDate: FieldRef<"employees", 'DateTime'>
    readonly HireDate: FieldRef<"employees", 'DateTime'>
    readonly Address: FieldRef<"employees", 'String'>
    readonly City: FieldRef<"employees", 'String'>
    readonly State: FieldRef<"employees", 'String'>
    readonly Country: FieldRef<"employees", 'String'>
    readonly PostalCode: FieldRef<"employees", 'String'>
    readonly Phone: FieldRef<"employees", 'String'>
    readonly Fax: FieldRef<"employees", 'String'>
    readonly Email: FieldRef<"employees", 'String'>
  }
    

  // Custom InputTypes
  /**
   * employees findUnique
   */
  export type employeesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeesInclude<ExtArgs> | null
    /**
     * Filter, which employees to fetch.
     */
    where: employeesWhereUniqueInput
  }

  /**
   * employees findUniqueOrThrow
   */
  export type employeesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeesInclude<ExtArgs> | null
    /**
     * Filter, which employees to fetch.
     */
    where: employeesWhereUniqueInput
  }

  /**
   * employees findFirst
   */
  export type employeesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeesInclude<ExtArgs> | null
    /**
     * Filter, which employees to fetch.
     */
    where?: employeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employees to fetch.
     */
    orderBy?: employeesOrderByWithRelationInput | employeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for employees.
     */
    cursor?: employeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of employees.
     */
    distinct?: EmployeesScalarFieldEnum | EmployeesScalarFieldEnum[]
  }

  /**
   * employees findFirstOrThrow
   */
  export type employeesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeesInclude<ExtArgs> | null
    /**
     * Filter, which employees to fetch.
     */
    where?: employeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employees to fetch.
     */
    orderBy?: employeesOrderByWithRelationInput | employeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for employees.
     */
    cursor?: employeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of employees.
     */
    distinct?: EmployeesScalarFieldEnum | EmployeesScalarFieldEnum[]
  }

  /**
   * employees findMany
   */
  export type employeesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeesInclude<ExtArgs> | null
    /**
     * Filter, which employees to fetch.
     */
    where?: employeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employees to fetch.
     */
    orderBy?: employeesOrderByWithRelationInput | employeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing employees.
     */
    cursor?: employeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employees.
     */
    skip?: number
    distinct?: EmployeesScalarFieldEnum | EmployeesScalarFieldEnum[]
  }

  /**
   * employees create
   */
  export type employeesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeesInclude<ExtArgs> | null
    /**
     * The data needed to create a employees.
     */
    data: XOR<employeesCreateInput, employeesUncheckedCreateInput>
  }

  /**
   * employees createMany
   */
  export type employeesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many employees.
     */
    data: employeesCreateManyInput | employeesCreateManyInput[]
  }

  /**
   * employees createManyAndReturn
   */
  export type employeesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many employees.
     */
    data: employeesCreateManyInput | employeesCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * employees update
   */
  export type employeesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeesInclude<ExtArgs> | null
    /**
     * The data needed to update a employees.
     */
    data: XOR<employeesUpdateInput, employeesUncheckedUpdateInput>
    /**
     * Choose, which employees to update.
     */
    where: employeesWhereUniqueInput
  }

  /**
   * employees updateMany
   */
  export type employeesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update employees.
     */
    data: XOR<employeesUpdateManyMutationInput, employeesUncheckedUpdateManyInput>
    /**
     * Filter which employees to update
     */
    where?: employeesWhereInput
  }

  /**
   * employees upsert
   */
  export type employeesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeesInclude<ExtArgs> | null
    /**
     * The filter to search for the employees to update in case it exists.
     */
    where: employeesWhereUniqueInput
    /**
     * In case the employees found by the `where` argument doesn't exist, create a new employees with this data.
     */
    create: XOR<employeesCreateInput, employeesUncheckedCreateInput>
    /**
     * In case the employees was found with the provided `where` argument, update it with this data.
     */
    update: XOR<employeesUpdateInput, employeesUncheckedUpdateInput>
  }

  /**
   * employees delete
   */
  export type employeesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeesInclude<ExtArgs> | null
    /**
     * Filter which employees to delete.
     */
    where: employeesWhereUniqueInput
  }

  /**
   * employees deleteMany
   */
  export type employeesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which employees to delete
     */
    where?: employeesWhereInput
  }

  /**
   * employees.customers
   */
  export type employees$customersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    where?: customersWhereInput
    orderBy?: customersOrderByWithRelationInput | customersOrderByWithRelationInput[]
    cursor?: customersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }

  /**
   * employees.employees
   */
  export type employees$employeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeesInclude<ExtArgs> | null
    where?: employeesWhereInput
  }

  /**
   * employees.other_employees
   */
  export type employees$other_employeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeesInclude<ExtArgs> | null
    where?: employeesWhereInput
    orderBy?: employeesOrderByWithRelationInput | employeesOrderByWithRelationInput[]
    cursor?: employeesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeesScalarFieldEnum | EmployeesScalarFieldEnum[]
  }

  /**
   * employees without action
   */
  export type employeesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeesInclude<ExtArgs> | null
  }


  /**
   * Model genres
   */

  export type AggregateGenres = {
    _count: GenresCountAggregateOutputType | null
    _avg: GenresAvgAggregateOutputType | null
    _sum: GenresSumAggregateOutputType | null
    _min: GenresMinAggregateOutputType | null
    _max: GenresMaxAggregateOutputType | null
  }

  export type GenresAvgAggregateOutputType = {
    GenreId: number | null
  }

  export type GenresSumAggregateOutputType = {
    GenreId: number | null
  }

  export type GenresMinAggregateOutputType = {
    GenreId: number | null
    Name: string | null
  }

  export type GenresMaxAggregateOutputType = {
    GenreId: number | null
    Name: string | null
  }

  export type GenresCountAggregateOutputType = {
    GenreId: number
    Name: number
    _all: number
  }


  export type GenresAvgAggregateInputType = {
    GenreId?: true
  }

  export type GenresSumAggregateInputType = {
    GenreId?: true
  }

  export type GenresMinAggregateInputType = {
    GenreId?: true
    Name?: true
  }

  export type GenresMaxAggregateInputType = {
    GenreId?: true
    Name?: true
  }

  export type GenresCountAggregateInputType = {
    GenreId?: true
    Name?: true
    _all?: true
  }

  export type GenresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which genres to aggregate.
     */
    where?: genresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of genres to fetch.
     */
    orderBy?: genresOrderByWithRelationInput | genresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: genresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned genres
    **/
    _count?: true | GenresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GenresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GenresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenresMaxAggregateInputType
  }

  export type GetGenresAggregateType<T extends GenresAggregateArgs> = {
        [P in keyof T & keyof AggregateGenres]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenres[P]>
      : GetScalarType<T[P], AggregateGenres[P]>
  }




  export type genresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: genresWhereInput
    orderBy?: genresOrderByWithAggregationInput | genresOrderByWithAggregationInput[]
    by: GenresScalarFieldEnum[] | GenresScalarFieldEnum
    having?: genresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenresCountAggregateInputType | true
    _avg?: GenresAvgAggregateInputType
    _sum?: GenresSumAggregateInputType
    _min?: GenresMinAggregateInputType
    _max?: GenresMaxAggregateInputType
  }

  export type GenresGroupByOutputType = {
    GenreId: number
    Name: string | null
    _count: GenresCountAggregateOutputType | null
    _avg: GenresAvgAggregateOutputType | null
    _sum: GenresSumAggregateOutputType | null
    _min: GenresMinAggregateOutputType | null
    _max: GenresMaxAggregateOutputType | null
  }

  type GetGenresGroupByPayload<T extends genresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GenresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GenresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenresGroupByOutputType[P]>
            : GetScalarType<T[P], GenresGroupByOutputType[P]>
        }
      >
    >


  export type genresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    GenreId?: boolean
    Name?: boolean
    tracks?: boolean | genres$tracksArgs<ExtArgs>
    _count?: boolean | GenresCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["genres"]>

  export type genresSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    GenreId?: boolean
    Name?: boolean
  }, ExtArgs["result"]["genres"]>

  export type genresSelectScalar = {
    GenreId?: boolean
    Name?: boolean
  }

  export type genresInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tracks?: boolean | genres$tracksArgs<ExtArgs>
    _count?: boolean | GenresCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type genresIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $genresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "genres"
    objects: {
      tracks: Prisma.$tracksPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      GenreId: number
      Name: string | null
    }, ExtArgs["result"]["genres"]>
    composites: {}
  }

  type genresGetPayload<S extends boolean | null | undefined | genresDefaultArgs> = $Result.GetResult<Prisma.$genresPayload, S>

  type genresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<genresFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GenresCountAggregateInputType | true
    }

  export interface genresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['genres'], meta: { name: 'genres' } }
    /**
     * Find zero or one Genres that matches the filter.
     * @param {genresFindUniqueArgs} args - Arguments to find a Genres
     * @example
     * // Get one Genres
     * const genres = await prisma.genres.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends genresFindUniqueArgs>(args: SelectSubset<T, genresFindUniqueArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Genres that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {genresFindUniqueOrThrowArgs} args - Arguments to find a Genres
     * @example
     * // Get one Genres
     * const genres = await prisma.genres.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends genresFindUniqueOrThrowArgs>(args: SelectSubset<T, genresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genresFindFirstArgs} args - Arguments to find a Genres
     * @example
     * // Get one Genres
     * const genres = await prisma.genres.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends genresFindFirstArgs>(args?: SelectSubset<T, genresFindFirstArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Genres that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genresFindFirstOrThrowArgs} args - Arguments to find a Genres
     * @example
     * // Get one Genres
     * const genres = await prisma.genres.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends genresFindFirstOrThrowArgs>(args?: SelectSubset<T, genresFindFirstOrThrowArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Genres
     * const genres = await prisma.genres.findMany()
     * 
     * // Get first 10 Genres
     * const genres = await prisma.genres.findMany({ take: 10 })
     * 
     * // Only select the `GenreId`
     * const genresWithGenreIdOnly = await prisma.genres.findMany({ select: { GenreId: true } })
     * 
     */
    findMany<T extends genresFindManyArgs>(args?: SelectSubset<T, genresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Genres.
     * @param {genresCreateArgs} args - Arguments to create a Genres.
     * @example
     * // Create one Genres
     * const Genres = await prisma.genres.create({
     *   data: {
     *     // ... data to create a Genres
     *   }
     * })
     * 
     */
    create<T extends genresCreateArgs>(args: SelectSubset<T, genresCreateArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Genres.
     * @param {genresCreateManyArgs} args - Arguments to create many Genres.
     * @example
     * // Create many Genres
     * const genres = await prisma.genres.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends genresCreateManyArgs>(args?: SelectSubset<T, genresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Genres and returns the data saved in the database.
     * @param {genresCreateManyAndReturnArgs} args - Arguments to create many Genres.
     * @example
     * // Create many Genres
     * const genres = await prisma.genres.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Genres and only return the `GenreId`
     * const genresWithGenreIdOnly = await prisma.genres.createManyAndReturn({ 
     *   select: { GenreId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends genresCreateManyAndReturnArgs>(args?: SelectSubset<T, genresCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Genres.
     * @param {genresDeleteArgs} args - Arguments to delete one Genres.
     * @example
     * // Delete one Genres
     * const Genres = await prisma.genres.delete({
     *   where: {
     *     // ... filter to delete one Genres
     *   }
     * })
     * 
     */
    delete<T extends genresDeleteArgs>(args: SelectSubset<T, genresDeleteArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Genres.
     * @param {genresUpdateArgs} args - Arguments to update one Genres.
     * @example
     * // Update one Genres
     * const genres = await prisma.genres.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends genresUpdateArgs>(args: SelectSubset<T, genresUpdateArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Genres.
     * @param {genresDeleteManyArgs} args - Arguments to filter Genres to delete.
     * @example
     * // Delete a few Genres
     * const { count } = await prisma.genres.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends genresDeleteManyArgs>(args?: SelectSubset<T, genresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Genres
     * const genres = await prisma.genres.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends genresUpdateManyArgs>(args: SelectSubset<T, genresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Genres.
     * @param {genresUpsertArgs} args - Arguments to update or create a Genres.
     * @example
     * // Update or create a Genres
     * const genres = await prisma.genres.upsert({
     *   create: {
     *     // ... data to create a Genres
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Genres we want to update
     *   }
     * })
     */
    upsert<T extends genresUpsertArgs>(args: SelectSubset<T, genresUpsertArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genresCountArgs} args - Arguments to filter Genres to count.
     * @example
     * // Count the number of Genres
     * const count = await prisma.genres.count({
     *   where: {
     *     // ... the filter for the Genres we want to count
     *   }
     * })
    **/
    count<T extends genresCountArgs>(
      args?: Subset<T, genresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GenresAggregateArgs>(args: Subset<T, GenresAggregateArgs>): Prisma.PrismaPromise<GetGenresAggregateType<T>>

    /**
     * Group by Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genresGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends genresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: genresGroupByArgs['orderBy'] }
        : { orderBy?: genresGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, genresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the genres model
   */
  readonly fields: genresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for genres.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__genresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tracks<T extends genres$tracksArgs<ExtArgs> = {}>(args?: Subset<T, genres$tracksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tracksPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the genres model
   */ 
  interface genresFieldRefs {
    readonly GenreId: FieldRef<"genres", 'Int'>
    readonly Name: FieldRef<"genres", 'String'>
  }
    

  // Custom InputTypes
  /**
   * genres findUnique
   */
  export type genresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
    /**
     * Filter, which genres to fetch.
     */
    where: genresWhereUniqueInput
  }

  /**
   * genres findUniqueOrThrow
   */
  export type genresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
    /**
     * Filter, which genres to fetch.
     */
    where: genresWhereUniqueInput
  }

  /**
   * genres findFirst
   */
  export type genresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
    /**
     * Filter, which genres to fetch.
     */
    where?: genresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of genres to fetch.
     */
    orderBy?: genresOrderByWithRelationInput | genresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for genres.
     */
    cursor?: genresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of genres.
     */
    distinct?: GenresScalarFieldEnum | GenresScalarFieldEnum[]
  }

  /**
   * genres findFirstOrThrow
   */
  export type genresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
    /**
     * Filter, which genres to fetch.
     */
    where?: genresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of genres to fetch.
     */
    orderBy?: genresOrderByWithRelationInput | genresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for genres.
     */
    cursor?: genresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of genres.
     */
    distinct?: GenresScalarFieldEnum | GenresScalarFieldEnum[]
  }

  /**
   * genres findMany
   */
  export type genresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
    /**
     * Filter, which genres to fetch.
     */
    where?: genresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of genres to fetch.
     */
    orderBy?: genresOrderByWithRelationInput | genresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing genres.
     */
    cursor?: genresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` genres.
     */
    skip?: number
    distinct?: GenresScalarFieldEnum | GenresScalarFieldEnum[]
  }

  /**
   * genres create
   */
  export type genresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
    /**
     * The data needed to create a genres.
     */
    data?: XOR<genresCreateInput, genresUncheckedCreateInput>
  }

  /**
   * genres createMany
   */
  export type genresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many genres.
     */
    data: genresCreateManyInput | genresCreateManyInput[]
  }

  /**
   * genres createManyAndReturn
   */
  export type genresCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many genres.
     */
    data: genresCreateManyInput | genresCreateManyInput[]
  }

  /**
   * genres update
   */
  export type genresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
    /**
     * The data needed to update a genres.
     */
    data: XOR<genresUpdateInput, genresUncheckedUpdateInput>
    /**
     * Choose, which genres to update.
     */
    where: genresWhereUniqueInput
  }

  /**
   * genres updateMany
   */
  export type genresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update genres.
     */
    data: XOR<genresUpdateManyMutationInput, genresUncheckedUpdateManyInput>
    /**
     * Filter which genres to update
     */
    where?: genresWhereInput
  }

  /**
   * genres upsert
   */
  export type genresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
    /**
     * The filter to search for the genres to update in case it exists.
     */
    where: genresWhereUniqueInput
    /**
     * In case the genres found by the `where` argument doesn't exist, create a new genres with this data.
     */
    create: XOR<genresCreateInput, genresUncheckedCreateInput>
    /**
     * In case the genres was found with the provided `where` argument, update it with this data.
     */
    update: XOR<genresUpdateInput, genresUncheckedUpdateInput>
  }

  /**
   * genres delete
   */
  export type genresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
    /**
     * Filter which genres to delete.
     */
    where: genresWhereUniqueInput
  }

  /**
   * genres deleteMany
   */
  export type genresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which genres to delete
     */
    where?: genresWhereInput
  }

  /**
   * genres.tracks
   */
  export type genres$tracksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tracks
     */
    select?: tracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tracksInclude<ExtArgs> | null
    where?: tracksWhereInput
    orderBy?: tracksOrderByWithRelationInput | tracksOrderByWithRelationInput[]
    cursor?: tracksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TracksScalarFieldEnum | TracksScalarFieldEnum[]
  }

  /**
   * genres without action
   */
  export type genresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
  }


  /**
   * Model invoice_items
   */

  export type AggregateInvoice_items = {
    _count: Invoice_itemsCountAggregateOutputType | null
    _avg: Invoice_itemsAvgAggregateOutputType | null
    _sum: Invoice_itemsSumAggregateOutputType | null
    _min: Invoice_itemsMinAggregateOutputType | null
    _max: Invoice_itemsMaxAggregateOutputType | null
  }

  export type Invoice_itemsAvgAggregateOutputType = {
    InvoiceLineId: number | null
    InvoiceId: number | null
    TrackId: number | null
    UnitPrice: Decimal | null
    Quantity: number | null
  }

  export type Invoice_itemsSumAggregateOutputType = {
    InvoiceLineId: number | null
    InvoiceId: number | null
    TrackId: number | null
    UnitPrice: Decimal | null
    Quantity: number | null
  }

  export type Invoice_itemsMinAggregateOutputType = {
    InvoiceLineId: number | null
    InvoiceId: number | null
    TrackId: number | null
    UnitPrice: Decimal | null
    Quantity: number | null
  }

  export type Invoice_itemsMaxAggregateOutputType = {
    InvoiceLineId: number | null
    InvoiceId: number | null
    TrackId: number | null
    UnitPrice: Decimal | null
    Quantity: number | null
  }

  export type Invoice_itemsCountAggregateOutputType = {
    InvoiceLineId: number
    InvoiceId: number
    TrackId: number
    UnitPrice: number
    Quantity: number
    _all: number
  }


  export type Invoice_itemsAvgAggregateInputType = {
    InvoiceLineId?: true
    InvoiceId?: true
    TrackId?: true
    UnitPrice?: true
    Quantity?: true
  }

  export type Invoice_itemsSumAggregateInputType = {
    InvoiceLineId?: true
    InvoiceId?: true
    TrackId?: true
    UnitPrice?: true
    Quantity?: true
  }

  export type Invoice_itemsMinAggregateInputType = {
    InvoiceLineId?: true
    InvoiceId?: true
    TrackId?: true
    UnitPrice?: true
    Quantity?: true
  }

  export type Invoice_itemsMaxAggregateInputType = {
    InvoiceLineId?: true
    InvoiceId?: true
    TrackId?: true
    UnitPrice?: true
    Quantity?: true
  }

  export type Invoice_itemsCountAggregateInputType = {
    InvoiceLineId?: true
    InvoiceId?: true
    TrackId?: true
    UnitPrice?: true
    Quantity?: true
    _all?: true
  }

  export type Invoice_itemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which invoice_items to aggregate.
     */
    where?: invoice_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoice_items to fetch.
     */
    orderBy?: invoice_itemsOrderByWithRelationInput | invoice_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: invoice_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoice_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoice_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned invoice_items
    **/
    _count?: true | Invoice_itemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Invoice_itemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Invoice_itemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Invoice_itemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Invoice_itemsMaxAggregateInputType
  }

  export type GetInvoice_itemsAggregateType<T extends Invoice_itemsAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoice_items]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoice_items[P]>
      : GetScalarType<T[P], AggregateInvoice_items[P]>
  }




  export type invoice_itemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: invoice_itemsWhereInput
    orderBy?: invoice_itemsOrderByWithAggregationInput | invoice_itemsOrderByWithAggregationInput[]
    by: Invoice_itemsScalarFieldEnum[] | Invoice_itemsScalarFieldEnum
    having?: invoice_itemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Invoice_itemsCountAggregateInputType | true
    _avg?: Invoice_itemsAvgAggregateInputType
    _sum?: Invoice_itemsSumAggregateInputType
    _min?: Invoice_itemsMinAggregateInputType
    _max?: Invoice_itemsMaxAggregateInputType
  }

  export type Invoice_itemsGroupByOutputType = {
    InvoiceLineId: number
    InvoiceId: number
    TrackId: number
    UnitPrice: Decimal
    Quantity: number
    _count: Invoice_itemsCountAggregateOutputType | null
    _avg: Invoice_itemsAvgAggregateOutputType | null
    _sum: Invoice_itemsSumAggregateOutputType | null
    _min: Invoice_itemsMinAggregateOutputType | null
    _max: Invoice_itemsMaxAggregateOutputType | null
  }

  type GetInvoice_itemsGroupByPayload<T extends invoice_itemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Invoice_itemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Invoice_itemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Invoice_itemsGroupByOutputType[P]>
            : GetScalarType<T[P], Invoice_itemsGroupByOutputType[P]>
        }
      >
    >


  export type invoice_itemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    InvoiceLineId?: boolean
    InvoiceId?: boolean
    TrackId?: boolean
    UnitPrice?: boolean
    Quantity?: boolean
    tracks?: boolean | tracksDefaultArgs<ExtArgs>
    invoices?: boolean | invoicesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice_items"]>

  export type invoice_itemsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    InvoiceLineId?: boolean
    InvoiceId?: boolean
    TrackId?: boolean
    UnitPrice?: boolean
    Quantity?: boolean
    tracks?: boolean | tracksDefaultArgs<ExtArgs>
    invoices?: boolean | invoicesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice_items"]>

  export type invoice_itemsSelectScalar = {
    InvoiceLineId?: boolean
    InvoiceId?: boolean
    TrackId?: boolean
    UnitPrice?: boolean
    Quantity?: boolean
  }

  export type invoice_itemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tracks?: boolean | tracksDefaultArgs<ExtArgs>
    invoices?: boolean | invoicesDefaultArgs<ExtArgs>
  }
  export type invoice_itemsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tracks?: boolean | tracksDefaultArgs<ExtArgs>
    invoices?: boolean | invoicesDefaultArgs<ExtArgs>
  }

  export type $invoice_itemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "invoice_items"
    objects: {
      tracks: Prisma.$tracksPayload<ExtArgs>
      invoices: Prisma.$invoicesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      InvoiceLineId: number
      InvoiceId: number
      TrackId: number
      UnitPrice: Prisma.Decimal
      Quantity: number
    }, ExtArgs["result"]["invoice_items"]>
    composites: {}
  }

  type invoice_itemsGetPayload<S extends boolean | null | undefined | invoice_itemsDefaultArgs> = $Result.GetResult<Prisma.$invoice_itemsPayload, S>

  type invoice_itemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<invoice_itemsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Invoice_itemsCountAggregateInputType | true
    }

  export interface invoice_itemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['invoice_items'], meta: { name: 'invoice_items' } }
    /**
     * Find zero or one Invoice_items that matches the filter.
     * @param {invoice_itemsFindUniqueArgs} args - Arguments to find a Invoice_items
     * @example
     * // Get one Invoice_items
     * const invoice_items = await prisma.invoice_items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends invoice_itemsFindUniqueArgs>(args: SelectSubset<T, invoice_itemsFindUniqueArgs<ExtArgs>>): Prisma__invoice_itemsClient<$Result.GetResult<Prisma.$invoice_itemsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Invoice_items that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {invoice_itemsFindUniqueOrThrowArgs} args - Arguments to find a Invoice_items
     * @example
     * // Get one Invoice_items
     * const invoice_items = await prisma.invoice_items.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends invoice_itemsFindUniqueOrThrowArgs>(args: SelectSubset<T, invoice_itemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__invoice_itemsClient<$Result.GetResult<Prisma.$invoice_itemsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Invoice_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoice_itemsFindFirstArgs} args - Arguments to find a Invoice_items
     * @example
     * // Get one Invoice_items
     * const invoice_items = await prisma.invoice_items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends invoice_itemsFindFirstArgs>(args?: SelectSubset<T, invoice_itemsFindFirstArgs<ExtArgs>>): Prisma__invoice_itemsClient<$Result.GetResult<Prisma.$invoice_itemsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Invoice_items that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoice_itemsFindFirstOrThrowArgs} args - Arguments to find a Invoice_items
     * @example
     * // Get one Invoice_items
     * const invoice_items = await prisma.invoice_items.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends invoice_itemsFindFirstOrThrowArgs>(args?: SelectSubset<T, invoice_itemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__invoice_itemsClient<$Result.GetResult<Prisma.$invoice_itemsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Invoice_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoice_itemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoice_items
     * const invoice_items = await prisma.invoice_items.findMany()
     * 
     * // Get first 10 Invoice_items
     * const invoice_items = await prisma.invoice_items.findMany({ take: 10 })
     * 
     * // Only select the `InvoiceLineId`
     * const invoice_itemsWithInvoiceLineIdOnly = await prisma.invoice_items.findMany({ select: { InvoiceLineId: true } })
     * 
     */
    findMany<T extends invoice_itemsFindManyArgs>(args?: SelectSubset<T, invoice_itemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoice_itemsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Invoice_items.
     * @param {invoice_itemsCreateArgs} args - Arguments to create a Invoice_items.
     * @example
     * // Create one Invoice_items
     * const Invoice_items = await prisma.invoice_items.create({
     *   data: {
     *     // ... data to create a Invoice_items
     *   }
     * })
     * 
     */
    create<T extends invoice_itemsCreateArgs>(args: SelectSubset<T, invoice_itemsCreateArgs<ExtArgs>>): Prisma__invoice_itemsClient<$Result.GetResult<Prisma.$invoice_itemsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Invoice_items.
     * @param {invoice_itemsCreateManyArgs} args - Arguments to create many Invoice_items.
     * @example
     * // Create many Invoice_items
     * const invoice_items = await prisma.invoice_items.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends invoice_itemsCreateManyArgs>(args?: SelectSubset<T, invoice_itemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invoice_items and returns the data saved in the database.
     * @param {invoice_itemsCreateManyAndReturnArgs} args - Arguments to create many Invoice_items.
     * @example
     * // Create many Invoice_items
     * const invoice_items = await prisma.invoice_items.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invoice_items and only return the `InvoiceLineId`
     * const invoice_itemsWithInvoiceLineIdOnly = await prisma.invoice_items.createManyAndReturn({ 
     *   select: { InvoiceLineId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends invoice_itemsCreateManyAndReturnArgs>(args?: SelectSubset<T, invoice_itemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoice_itemsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Invoice_items.
     * @param {invoice_itemsDeleteArgs} args - Arguments to delete one Invoice_items.
     * @example
     * // Delete one Invoice_items
     * const Invoice_items = await prisma.invoice_items.delete({
     *   where: {
     *     // ... filter to delete one Invoice_items
     *   }
     * })
     * 
     */
    delete<T extends invoice_itemsDeleteArgs>(args: SelectSubset<T, invoice_itemsDeleteArgs<ExtArgs>>): Prisma__invoice_itemsClient<$Result.GetResult<Prisma.$invoice_itemsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Invoice_items.
     * @param {invoice_itemsUpdateArgs} args - Arguments to update one Invoice_items.
     * @example
     * // Update one Invoice_items
     * const invoice_items = await prisma.invoice_items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends invoice_itemsUpdateArgs>(args: SelectSubset<T, invoice_itemsUpdateArgs<ExtArgs>>): Prisma__invoice_itemsClient<$Result.GetResult<Prisma.$invoice_itemsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Invoice_items.
     * @param {invoice_itemsDeleteManyArgs} args - Arguments to filter Invoice_items to delete.
     * @example
     * // Delete a few Invoice_items
     * const { count } = await prisma.invoice_items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends invoice_itemsDeleteManyArgs>(args?: SelectSubset<T, invoice_itemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoice_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoice_itemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoice_items
     * const invoice_items = await prisma.invoice_items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends invoice_itemsUpdateManyArgs>(args: SelectSubset<T, invoice_itemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Invoice_items.
     * @param {invoice_itemsUpsertArgs} args - Arguments to update or create a Invoice_items.
     * @example
     * // Update or create a Invoice_items
     * const invoice_items = await prisma.invoice_items.upsert({
     *   create: {
     *     // ... data to create a Invoice_items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoice_items we want to update
     *   }
     * })
     */
    upsert<T extends invoice_itemsUpsertArgs>(args: SelectSubset<T, invoice_itemsUpsertArgs<ExtArgs>>): Prisma__invoice_itemsClient<$Result.GetResult<Prisma.$invoice_itemsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Invoice_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoice_itemsCountArgs} args - Arguments to filter Invoice_items to count.
     * @example
     * // Count the number of Invoice_items
     * const count = await prisma.invoice_items.count({
     *   where: {
     *     // ... the filter for the Invoice_items we want to count
     *   }
     * })
    **/
    count<T extends invoice_itemsCountArgs>(
      args?: Subset<T, invoice_itemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Invoice_itemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoice_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Invoice_itemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Invoice_itemsAggregateArgs>(args: Subset<T, Invoice_itemsAggregateArgs>): Prisma.PrismaPromise<GetInvoice_itemsAggregateType<T>>

    /**
     * Group by Invoice_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoice_itemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends invoice_itemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: invoice_itemsGroupByArgs['orderBy'] }
        : { orderBy?: invoice_itemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, invoice_itemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoice_itemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the invoice_items model
   */
  readonly fields: invoice_itemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for invoice_items.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__invoice_itemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tracks<T extends tracksDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tracksDefaultArgs<ExtArgs>>): Prisma__tracksClient<$Result.GetResult<Prisma.$tracksPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    invoices<T extends invoicesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, invoicesDefaultArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the invoice_items model
   */ 
  interface invoice_itemsFieldRefs {
    readonly InvoiceLineId: FieldRef<"invoice_items", 'Int'>
    readonly InvoiceId: FieldRef<"invoice_items", 'Int'>
    readonly TrackId: FieldRef<"invoice_items", 'Int'>
    readonly UnitPrice: FieldRef<"invoice_items", 'Decimal'>
    readonly Quantity: FieldRef<"invoice_items", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * invoice_items findUnique
   */
  export type invoice_itemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_items
     */
    select?: invoice_itemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_itemsInclude<ExtArgs> | null
    /**
     * Filter, which invoice_items to fetch.
     */
    where: invoice_itemsWhereUniqueInput
  }

  /**
   * invoice_items findUniqueOrThrow
   */
  export type invoice_itemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_items
     */
    select?: invoice_itemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_itemsInclude<ExtArgs> | null
    /**
     * Filter, which invoice_items to fetch.
     */
    where: invoice_itemsWhereUniqueInput
  }

  /**
   * invoice_items findFirst
   */
  export type invoice_itemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_items
     */
    select?: invoice_itemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_itemsInclude<ExtArgs> | null
    /**
     * Filter, which invoice_items to fetch.
     */
    where?: invoice_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoice_items to fetch.
     */
    orderBy?: invoice_itemsOrderByWithRelationInput | invoice_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for invoice_items.
     */
    cursor?: invoice_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoice_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoice_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of invoice_items.
     */
    distinct?: Invoice_itemsScalarFieldEnum | Invoice_itemsScalarFieldEnum[]
  }

  /**
   * invoice_items findFirstOrThrow
   */
  export type invoice_itemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_items
     */
    select?: invoice_itemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_itemsInclude<ExtArgs> | null
    /**
     * Filter, which invoice_items to fetch.
     */
    where?: invoice_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoice_items to fetch.
     */
    orderBy?: invoice_itemsOrderByWithRelationInput | invoice_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for invoice_items.
     */
    cursor?: invoice_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoice_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoice_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of invoice_items.
     */
    distinct?: Invoice_itemsScalarFieldEnum | Invoice_itemsScalarFieldEnum[]
  }

  /**
   * invoice_items findMany
   */
  export type invoice_itemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_items
     */
    select?: invoice_itemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_itemsInclude<ExtArgs> | null
    /**
     * Filter, which invoice_items to fetch.
     */
    where?: invoice_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoice_items to fetch.
     */
    orderBy?: invoice_itemsOrderByWithRelationInput | invoice_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing invoice_items.
     */
    cursor?: invoice_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoice_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoice_items.
     */
    skip?: number
    distinct?: Invoice_itemsScalarFieldEnum | Invoice_itemsScalarFieldEnum[]
  }

  /**
   * invoice_items create
   */
  export type invoice_itemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_items
     */
    select?: invoice_itemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_itemsInclude<ExtArgs> | null
    /**
     * The data needed to create a invoice_items.
     */
    data: XOR<invoice_itemsCreateInput, invoice_itemsUncheckedCreateInput>
  }

  /**
   * invoice_items createMany
   */
  export type invoice_itemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many invoice_items.
     */
    data: invoice_itemsCreateManyInput | invoice_itemsCreateManyInput[]
  }

  /**
   * invoice_items createManyAndReturn
   */
  export type invoice_itemsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_items
     */
    select?: invoice_itemsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many invoice_items.
     */
    data: invoice_itemsCreateManyInput | invoice_itemsCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_itemsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * invoice_items update
   */
  export type invoice_itemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_items
     */
    select?: invoice_itemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_itemsInclude<ExtArgs> | null
    /**
     * The data needed to update a invoice_items.
     */
    data: XOR<invoice_itemsUpdateInput, invoice_itemsUncheckedUpdateInput>
    /**
     * Choose, which invoice_items to update.
     */
    where: invoice_itemsWhereUniqueInput
  }

  /**
   * invoice_items updateMany
   */
  export type invoice_itemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update invoice_items.
     */
    data: XOR<invoice_itemsUpdateManyMutationInput, invoice_itemsUncheckedUpdateManyInput>
    /**
     * Filter which invoice_items to update
     */
    where?: invoice_itemsWhereInput
  }

  /**
   * invoice_items upsert
   */
  export type invoice_itemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_items
     */
    select?: invoice_itemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_itemsInclude<ExtArgs> | null
    /**
     * The filter to search for the invoice_items to update in case it exists.
     */
    where: invoice_itemsWhereUniqueInput
    /**
     * In case the invoice_items found by the `where` argument doesn't exist, create a new invoice_items with this data.
     */
    create: XOR<invoice_itemsCreateInput, invoice_itemsUncheckedCreateInput>
    /**
     * In case the invoice_items was found with the provided `where` argument, update it with this data.
     */
    update: XOR<invoice_itemsUpdateInput, invoice_itemsUncheckedUpdateInput>
  }

  /**
   * invoice_items delete
   */
  export type invoice_itemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_items
     */
    select?: invoice_itemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_itemsInclude<ExtArgs> | null
    /**
     * Filter which invoice_items to delete.
     */
    where: invoice_itemsWhereUniqueInput
  }

  /**
   * invoice_items deleteMany
   */
  export type invoice_itemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which invoice_items to delete
     */
    where?: invoice_itemsWhereInput
  }

  /**
   * invoice_items without action
   */
  export type invoice_itemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_items
     */
    select?: invoice_itemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_itemsInclude<ExtArgs> | null
  }


  /**
   * Model invoices
   */

  export type AggregateInvoices = {
    _count: InvoicesCountAggregateOutputType | null
    _avg: InvoicesAvgAggregateOutputType | null
    _sum: InvoicesSumAggregateOutputType | null
    _min: InvoicesMinAggregateOutputType | null
    _max: InvoicesMaxAggregateOutputType | null
  }

  export type InvoicesAvgAggregateOutputType = {
    InvoiceId: number | null
    CustomerId: number | null
    Total: Decimal | null
  }

  export type InvoicesSumAggregateOutputType = {
    InvoiceId: number | null
    CustomerId: number | null
    Total: Decimal | null
  }

  export type InvoicesMinAggregateOutputType = {
    InvoiceId: number | null
    CustomerId: number | null
    InvoiceDate: Date | null
    BillingAddress: string | null
    BillingCity: string | null
    BillingState: string | null
    BillingCountry: string | null
    BillingPostalCode: string | null
    Total: Decimal | null
  }

  export type InvoicesMaxAggregateOutputType = {
    InvoiceId: number | null
    CustomerId: number | null
    InvoiceDate: Date | null
    BillingAddress: string | null
    BillingCity: string | null
    BillingState: string | null
    BillingCountry: string | null
    BillingPostalCode: string | null
    Total: Decimal | null
  }

  export type InvoicesCountAggregateOutputType = {
    InvoiceId: number
    CustomerId: number
    InvoiceDate: number
    BillingAddress: number
    BillingCity: number
    BillingState: number
    BillingCountry: number
    BillingPostalCode: number
    Total: number
    _all: number
  }


  export type InvoicesAvgAggregateInputType = {
    InvoiceId?: true
    CustomerId?: true
    Total?: true
  }

  export type InvoicesSumAggregateInputType = {
    InvoiceId?: true
    CustomerId?: true
    Total?: true
  }

  export type InvoicesMinAggregateInputType = {
    InvoiceId?: true
    CustomerId?: true
    InvoiceDate?: true
    BillingAddress?: true
    BillingCity?: true
    BillingState?: true
    BillingCountry?: true
    BillingPostalCode?: true
    Total?: true
  }

  export type InvoicesMaxAggregateInputType = {
    InvoiceId?: true
    CustomerId?: true
    InvoiceDate?: true
    BillingAddress?: true
    BillingCity?: true
    BillingState?: true
    BillingCountry?: true
    BillingPostalCode?: true
    Total?: true
  }

  export type InvoicesCountAggregateInputType = {
    InvoiceId?: true
    CustomerId?: true
    InvoiceDate?: true
    BillingAddress?: true
    BillingCity?: true
    BillingState?: true
    BillingCountry?: true
    BillingPostalCode?: true
    Total?: true
    _all?: true
  }

  export type InvoicesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which invoices to aggregate.
     */
    where?: invoicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoices to fetch.
     */
    orderBy?: invoicesOrderByWithRelationInput | invoicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: invoicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned invoices
    **/
    _count?: true | InvoicesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoicesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoicesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoicesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoicesMaxAggregateInputType
  }

  export type GetInvoicesAggregateType<T extends InvoicesAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoices]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoices[P]>
      : GetScalarType<T[P], AggregateInvoices[P]>
  }




  export type invoicesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: invoicesWhereInput
    orderBy?: invoicesOrderByWithAggregationInput | invoicesOrderByWithAggregationInput[]
    by: InvoicesScalarFieldEnum[] | InvoicesScalarFieldEnum
    having?: invoicesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoicesCountAggregateInputType | true
    _avg?: InvoicesAvgAggregateInputType
    _sum?: InvoicesSumAggregateInputType
    _min?: InvoicesMinAggregateInputType
    _max?: InvoicesMaxAggregateInputType
  }

  export type InvoicesGroupByOutputType = {
    InvoiceId: number
    CustomerId: number
    InvoiceDate: Date
    BillingAddress: string | null
    BillingCity: string | null
    BillingState: string | null
    BillingCountry: string | null
    BillingPostalCode: string | null
    Total: Decimal
    _count: InvoicesCountAggregateOutputType | null
    _avg: InvoicesAvgAggregateOutputType | null
    _sum: InvoicesSumAggregateOutputType | null
    _min: InvoicesMinAggregateOutputType | null
    _max: InvoicesMaxAggregateOutputType | null
  }

  type GetInvoicesGroupByPayload<T extends invoicesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoicesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoicesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoicesGroupByOutputType[P]>
            : GetScalarType<T[P], InvoicesGroupByOutputType[P]>
        }
      >
    >


  export type invoicesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    InvoiceId?: boolean
    CustomerId?: boolean
    InvoiceDate?: boolean
    BillingAddress?: boolean
    BillingCity?: boolean
    BillingState?: boolean
    BillingCountry?: boolean
    BillingPostalCode?: boolean
    Total?: boolean
    invoice_items?: boolean | invoices$invoice_itemsArgs<ExtArgs>
    customers?: boolean | customersDefaultArgs<ExtArgs>
    _count?: boolean | InvoicesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoices"]>

  export type invoicesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    InvoiceId?: boolean
    CustomerId?: boolean
    InvoiceDate?: boolean
    BillingAddress?: boolean
    BillingCity?: boolean
    BillingState?: boolean
    BillingCountry?: boolean
    BillingPostalCode?: boolean
    Total?: boolean
    customers?: boolean | customersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoices"]>

  export type invoicesSelectScalar = {
    InvoiceId?: boolean
    CustomerId?: boolean
    InvoiceDate?: boolean
    BillingAddress?: boolean
    BillingCity?: boolean
    BillingState?: boolean
    BillingCountry?: boolean
    BillingPostalCode?: boolean
    Total?: boolean
  }

  export type invoicesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice_items?: boolean | invoices$invoice_itemsArgs<ExtArgs>
    customers?: boolean | customersDefaultArgs<ExtArgs>
    _count?: boolean | InvoicesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type invoicesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customers?: boolean | customersDefaultArgs<ExtArgs>
  }

  export type $invoicesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "invoices"
    objects: {
      invoice_items: Prisma.$invoice_itemsPayload<ExtArgs>[]
      customers: Prisma.$customersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      InvoiceId: number
      CustomerId: number
      InvoiceDate: Date
      BillingAddress: string | null
      BillingCity: string | null
      BillingState: string | null
      BillingCountry: string | null
      BillingPostalCode: string | null
      Total: Prisma.Decimal
    }, ExtArgs["result"]["invoices"]>
    composites: {}
  }

  type invoicesGetPayload<S extends boolean | null | undefined | invoicesDefaultArgs> = $Result.GetResult<Prisma.$invoicesPayload, S>

  type invoicesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<invoicesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InvoicesCountAggregateInputType | true
    }

  export interface invoicesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['invoices'], meta: { name: 'invoices' } }
    /**
     * Find zero or one Invoices that matches the filter.
     * @param {invoicesFindUniqueArgs} args - Arguments to find a Invoices
     * @example
     * // Get one Invoices
     * const invoices = await prisma.invoices.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends invoicesFindUniqueArgs>(args: SelectSubset<T, invoicesFindUniqueArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Invoices that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {invoicesFindUniqueOrThrowArgs} args - Arguments to find a Invoices
     * @example
     * // Get one Invoices
     * const invoices = await prisma.invoices.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends invoicesFindUniqueOrThrowArgs>(args: SelectSubset<T, invoicesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoicesFindFirstArgs} args - Arguments to find a Invoices
     * @example
     * // Get one Invoices
     * const invoices = await prisma.invoices.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends invoicesFindFirstArgs>(args?: SelectSubset<T, invoicesFindFirstArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Invoices that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoicesFindFirstOrThrowArgs} args - Arguments to find a Invoices
     * @example
     * // Get one Invoices
     * const invoices = await prisma.invoices.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends invoicesFindFirstOrThrowArgs>(args?: SelectSubset<T, invoicesFindFirstOrThrowArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoicesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoices
     * const invoices = await prisma.invoices.findMany()
     * 
     * // Get first 10 Invoices
     * const invoices = await prisma.invoices.findMany({ take: 10 })
     * 
     * // Only select the `InvoiceId`
     * const invoicesWithInvoiceIdOnly = await prisma.invoices.findMany({ select: { InvoiceId: true } })
     * 
     */
    findMany<T extends invoicesFindManyArgs>(args?: SelectSubset<T, invoicesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Invoices.
     * @param {invoicesCreateArgs} args - Arguments to create a Invoices.
     * @example
     * // Create one Invoices
     * const Invoices = await prisma.invoices.create({
     *   data: {
     *     // ... data to create a Invoices
     *   }
     * })
     * 
     */
    create<T extends invoicesCreateArgs>(args: SelectSubset<T, invoicesCreateArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Invoices.
     * @param {invoicesCreateManyArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoices = await prisma.invoices.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends invoicesCreateManyArgs>(args?: SelectSubset<T, invoicesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invoices and returns the data saved in the database.
     * @param {invoicesCreateManyAndReturnArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoices = await prisma.invoices.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invoices and only return the `InvoiceId`
     * const invoicesWithInvoiceIdOnly = await prisma.invoices.createManyAndReturn({ 
     *   select: { InvoiceId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends invoicesCreateManyAndReturnArgs>(args?: SelectSubset<T, invoicesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Invoices.
     * @param {invoicesDeleteArgs} args - Arguments to delete one Invoices.
     * @example
     * // Delete one Invoices
     * const Invoices = await prisma.invoices.delete({
     *   where: {
     *     // ... filter to delete one Invoices
     *   }
     * })
     * 
     */
    delete<T extends invoicesDeleteArgs>(args: SelectSubset<T, invoicesDeleteArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Invoices.
     * @param {invoicesUpdateArgs} args - Arguments to update one Invoices.
     * @example
     * // Update one Invoices
     * const invoices = await prisma.invoices.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends invoicesUpdateArgs>(args: SelectSubset<T, invoicesUpdateArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Invoices.
     * @param {invoicesDeleteManyArgs} args - Arguments to filter Invoices to delete.
     * @example
     * // Delete a few Invoices
     * const { count } = await prisma.invoices.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends invoicesDeleteManyArgs>(args?: SelectSubset<T, invoicesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoicesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoices
     * const invoices = await prisma.invoices.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends invoicesUpdateManyArgs>(args: SelectSubset<T, invoicesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Invoices.
     * @param {invoicesUpsertArgs} args - Arguments to update or create a Invoices.
     * @example
     * // Update or create a Invoices
     * const invoices = await prisma.invoices.upsert({
     *   create: {
     *     // ... data to create a Invoices
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoices we want to update
     *   }
     * })
     */
    upsert<T extends invoicesUpsertArgs>(args: SelectSubset<T, invoicesUpsertArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoicesCountArgs} args - Arguments to filter Invoices to count.
     * @example
     * // Count the number of Invoices
     * const count = await prisma.invoices.count({
     *   where: {
     *     // ... the filter for the Invoices we want to count
     *   }
     * })
    **/
    count<T extends invoicesCountArgs>(
      args?: Subset<T, invoicesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoicesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoicesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvoicesAggregateArgs>(args: Subset<T, InvoicesAggregateArgs>): Prisma.PrismaPromise<GetInvoicesAggregateType<T>>

    /**
     * Group by Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoicesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends invoicesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: invoicesGroupByArgs['orderBy'] }
        : { orderBy?: invoicesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, invoicesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoicesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the invoices model
   */
  readonly fields: invoicesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for invoices.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__invoicesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invoice_items<T extends invoices$invoice_itemsArgs<ExtArgs> = {}>(args?: Subset<T, invoices$invoice_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoice_itemsPayload<ExtArgs>, T, "findMany"> | Null>
    customers<T extends customersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, customersDefaultArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the invoices model
   */ 
  interface invoicesFieldRefs {
    readonly InvoiceId: FieldRef<"invoices", 'Int'>
    readonly CustomerId: FieldRef<"invoices", 'Int'>
    readonly InvoiceDate: FieldRef<"invoices", 'DateTime'>
    readonly BillingAddress: FieldRef<"invoices", 'String'>
    readonly BillingCity: FieldRef<"invoices", 'String'>
    readonly BillingState: FieldRef<"invoices", 'String'>
    readonly BillingCountry: FieldRef<"invoices", 'String'>
    readonly BillingPostalCode: FieldRef<"invoices", 'String'>
    readonly Total: FieldRef<"invoices", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * invoices findUnique
   */
  export type invoicesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * Filter, which invoices to fetch.
     */
    where: invoicesWhereUniqueInput
  }

  /**
   * invoices findUniqueOrThrow
   */
  export type invoicesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * Filter, which invoices to fetch.
     */
    where: invoicesWhereUniqueInput
  }

  /**
   * invoices findFirst
   */
  export type invoicesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * Filter, which invoices to fetch.
     */
    where?: invoicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoices to fetch.
     */
    orderBy?: invoicesOrderByWithRelationInput | invoicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for invoices.
     */
    cursor?: invoicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of invoices.
     */
    distinct?: InvoicesScalarFieldEnum | InvoicesScalarFieldEnum[]
  }

  /**
   * invoices findFirstOrThrow
   */
  export type invoicesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * Filter, which invoices to fetch.
     */
    where?: invoicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoices to fetch.
     */
    orderBy?: invoicesOrderByWithRelationInput | invoicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for invoices.
     */
    cursor?: invoicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of invoices.
     */
    distinct?: InvoicesScalarFieldEnum | InvoicesScalarFieldEnum[]
  }

  /**
   * invoices findMany
   */
  export type invoicesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * Filter, which invoices to fetch.
     */
    where?: invoicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoices to fetch.
     */
    orderBy?: invoicesOrderByWithRelationInput | invoicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing invoices.
     */
    cursor?: invoicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoices.
     */
    skip?: number
    distinct?: InvoicesScalarFieldEnum | InvoicesScalarFieldEnum[]
  }

  /**
   * invoices create
   */
  export type invoicesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * The data needed to create a invoices.
     */
    data: XOR<invoicesCreateInput, invoicesUncheckedCreateInput>
  }

  /**
   * invoices createMany
   */
  export type invoicesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many invoices.
     */
    data: invoicesCreateManyInput | invoicesCreateManyInput[]
  }

  /**
   * invoices createManyAndReturn
   */
  export type invoicesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many invoices.
     */
    data: invoicesCreateManyInput | invoicesCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * invoices update
   */
  export type invoicesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * The data needed to update a invoices.
     */
    data: XOR<invoicesUpdateInput, invoicesUncheckedUpdateInput>
    /**
     * Choose, which invoices to update.
     */
    where: invoicesWhereUniqueInput
  }

  /**
   * invoices updateMany
   */
  export type invoicesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update invoices.
     */
    data: XOR<invoicesUpdateManyMutationInput, invoicesUncheckedUpdateManyInput>
    /**
     * Filter which invoices to update
     */
    where?: invoicesWhereInput
  }

  /**
   * invoices upsert
   */
  export type invoicesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * The filter to search for the invoices to update in case it exists.
     */
    where: invoicesWhereUniqueInput
    /**
     * In case the invoices found by the `where` argument doesn't exist, create a new invoices with this data.
     */
    create: XOR<invoicesCreateInput, invoicesUncheckedCreateInput>
    /**
     * In case the invoices was found with the provided `where` argument, update it with this data.
     */
    update: XOR<invoicesUpdateInput, invoicesUncheckedUpdateInput>
  }

  /**
   * invoices delete
   */
  export type invoicesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * Filter which invoices to delete.
     */
    where: invoicesWhereUniqueInput
  }

  /**
   * invoices deleteMany
   */
  export type invoicesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which invoices to delete
     */
    where?: invoicesWhereInput
  }

  /**
   * invoices.invoice_items
   */
  export type invoices$invoice_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_items
     */
    select?: invoice_itemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_itemsInclude<ExtArgs> | null
    where?: invoice_itemsWhereInput
    orderBy?: invoice_itemsOrderByWithRelationInput | invoice_itemsOrderByWithRelationInput[]
    cursor?: invoice_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Invoice_itemsScalarFieldEnum | Invoice_itemsScalarFieldEnum[]
  }

  /**
   * invoices without action
   */
  export type invoicesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
  }


  /**
   * Model media_types
   */

  export type AggregateMedia_types = {
    _count: Media_typesCountAggregateOutputType | null
    _avg: Media_typesAvgAggregateOutputType | null
    _sum: Media_typesSumAggregateOutputType | null
    _min: Media_typesMinAggregateOutputType | null
    _max: Media_typesMaxAggregateOutputType | null
  }

  export type Media_typesAvgAggregateOutputType = {
    MediaTypeId: number | null
  }

  export type Media_typesSumAggregateOutputType = {
    MediaTypeId: number | null
  }

  export type Media_typesMinAggregateOutputType = {
    MediaTypeId: number | null
    Name: string | null
  }

  export type Media_typesMaxAggregateOutputType = {
    MediaTypeId: number | null
    Name: string | null
  }

  export type Media_typesCountAggregateOutputType = {
    MediaTypeId: number
    Name: number
    _all: number
  }


  export type Media_typesAvgAggregateInputType = {
    MediaTypeId?: true
  }

  export type Media_typesSumAggregateInputType = {
    MediaTypeId?: true
  }

  export type Media_typesMinAggregateInputType = {
    MediaTypeId?: true
    Name?: true
  }

  export type Media_typesMaxAggregateInputType = {
    MediaTypeId?: true
    Name?: true
  }

  export type Media_typesCountAggregateInputType = {
    MediaTypeId?: true
    Name?: true
    _all?: true
  }

  export type Media_typesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which media_types to aggregate.
     */
    where?: media_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of media_types to fetch.
     */
    orderBy?: media_typesOrderByWithRelationInput | media_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: media_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` media_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` media_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned media_types
    **/
    _count?: true | Media_typesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Media_typesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Media_typesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Media_typesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Media_typesMaxAggregateInputType
  }

  export type GetMedia_typesAggregateType<T extends Media_typesAggregateArgs> = {
        [P in keyof T & keyof AggregateMedia_types]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedia_types[P]>
      : GetScalarType<T[P], AggregateMedia_types[P]>
  }




  export type media_typesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: media_typesWhereInput
    orderBy?: media_typesOrderByWithAggregationInput | media_typesOrderByWithAggregationInput[]
    by: Media_typesScalarFieldEnum[] | Media_typesScalarFieldEnum
    having?: media_typesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Media_typesCountAggregateInputType | true
    _avg?: Media_typesAvgAggregateInputType
    _sum?: Media_typesSumAggregateInputType
    _min?: Media_typesMinAggregateInputType
    _max?: Media_typesMaxAggregateInputType
  }

  export type Media_typesGroupByOutputType = {
    MediaTypeId: number
    Name: string | null
    _count: Media_typesCountAggregateOutputType | null
    _avg: Media_typesAvgAggregateOutputType | null
    _sum: Media_typesSumAggregateOutputType | null
    _min: Media_typesMinAggregateOutputType | null
    _max: Media_typesMaxAggregateOutputType | null
  }

  type GetMedia_typesGroupByPayload<T extends media_typesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Media_typesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Media_typesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Media_typesGroupByOutputType[P]>
            : GetScalarType<T[P], Media_typesGroupByOutputType[P]>
        }
      >
    >


  export type media_typesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MediaTypeId?: boolean
    Name?: boolean
    tracks?: boolean | media_types$tracksArgs<ExtArgs>
    _count?: boolean | Media_typesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["media_types"]>

  export type media_typesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MediaTypeId?: boolean
    Name?: boolean
  }, ExtArgs["result"]["media_types"]>

  export type media_typesSelectScalar = {
    MediaTypeId?: boolean
    Name?: boolean
  }

  export type media_typesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tracks?: boolean | media_types$tracksArgs<ExtArgs>
    _count?: boolean | Media_typesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type media_typesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $media_typesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "media_types"
    objects: {
      tracks: Prisma.$tracksPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      MediaTypeId: number
      Name: string | null
    }, ExtArgs["result"]["media_types"]>
    composites: {}
  }

  type media_typesGetPayload<S extends boolean | null | undefined | media_typesDefaultArgs> = $Result.GetResult<Prisma.$media_typesPayload, S>

  type media_typesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<media_typesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Media_typesCountAggregateInputType | true
    }

  export interface media_typesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['media_types'], meta: { name: 'media_types' } }
    /**
     * Find zero or one Media_types that matches the filter.
     * @param {media_typesFindUniqueArgs} args - Arguments to find a Media_types
     * @example
     * // Get one Media_types
     * const media_types = await prisma.media_types.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends media_typesFindUniqueArgs>(args: SelectSubset<T, media_typesFindUniqueArgs<ExtArgs>>): Prisma__media_typesClient<$Result.GetResult<Prisma.$media_typesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Media_types that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {media_typesFindUniqueOrThrowArgs} args - Arguments to find a Media_types
     * @example
     * // Get one Media_types
     * const media_types = await prisma.media_types.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends media_typesFindUniqueOrThrowArgs>(args: SelectSubset<T, media_typesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__media_typesClient<$Result.GetResult<Prisma.$media_typesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Media_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {media_typesFindFirstArgs} args - Arguments to find a Media_types
     * @example
     * // Get one Media_types
     * const media_types = await prisma.media_types.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends media_typesFindFirstArgs>(args?: SelectSubset<T, media_typesFindFirstArgs<ExtArgs>>): Prisma__media_typesClient<$Result.GetResult<Prisma.$media_typesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Media_types that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {media_typesFindFirstOrThrowArgs} args - Arguments to find a Media_types
     * @example
     * // Get one Media_types
     * const media_types = await prisma.media_types.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends media_typesFindFirstOrThrowArgs>(args?: SelectSubset<T, media_typesFindFirstOrThrowArgs<ExtArgs>>): Prisma__media_typesClient<$Result.GetResult<Prisma.$media_typesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Media_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {media_typesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Media_types
     * const media_types = await prisma.media_types.findMany()
     * 
     * // Get first 10 Media_types
     * const media_types = await prisma.media_types.findMany({ take: 10 })
     * 
     * // Only select the `MediaTypeId`
     * const media_typesWithMediaTypeIdOnly = await prisma.media_types.findMany({ select: { MediaTypeId: true } })
     * 
     */
    findMany<T extends media_typesFindManyArgs>(args?: SelectSubset<T, media_typesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$media_typesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Media_types.
     * @param {media_typesCreateArgs} args - Arguments to create a Media_types.
     * @example
     * // Create one Media_types
     * const Media_types = await prisma.media_types.create({
     *   data: {
     *     // ... data to create a Media_types
     *   }
     * })
     * 
     */
    create<T extends media_typesCreateArgs>(args: SelectSubset<T, media_typesCreateArgs<ExtArgs>>): Prisma__media_typesClient<$Result.GetResult<Prisma.$media_typesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Media_types.
     * @param {media_typesCreateManyArgs} args - Arguments to create many Media_types.
     * @example
     * // Create many Media_types
     * const media_types = await prisma.media_types.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends media_typesCreateManyArgs>(args?: SelectSubset<T, media_typesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Media_types and returns the data saved in the database.
     * @param {media_typesCreateManyAndReturnArgs} args - Arguments to create many Media_types.
     * @example
     * // Create many Media_types
     * const media_types = await prisma.media_types.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Media_types and only return the `MediaTypeId`
     * const media_typesWithMediaTypeIdOnly = await prisma.media_types.createManyAndReturn({ 
     *   select: { MediaTypeId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends media_typesCreateManyAndReturnArgs>(args?: SelectSubset<T, media_typesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$media_typesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Media_types.
     * @param {media_typesDeleteArgs} args - Arguments to delete one Media_types.
     * @example
     * // Delete one Media_types
     * const Media_types = await prisma.media_types.delete({
     *   where: {
     *     // ... filter to delete one Media_types
     *   }
     * })
     * 
     */
    delete<T extends media_typesDeleteArgs>(args: SelectSubset<T, media_typesDeleteArgs<ExtArgs>>): Prisma__media_typesClient<$Result.GetResult<Prisma.$media_typesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Media_types.
     * @param {media_typesUpdateArgs} args - Arguments to update one Media_types.
     * @example
     * // Update one Media_types
     * const media_types = await prisma.media_types.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends media_typesUpdateArgs>(args: SelectSubset<T, media_typesUpdateArgs<ExtArgs>>): Prisma__media_typesClient<$Result.GetResult<Prisma.$media_typesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Media_types.
     * @param {media_typesDeleteManyArgs} args - Arguments to filter Media_types to delete.
     * @example
     * // Delete a few Media_types
     * const { count } = await prisma.media_types.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends media_typesDeleteManyArgs>(args?: SelectSubset<T, media_typesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Media_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {media_typesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Media_types
     * const media_types = await prisma.media_types.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends media_typesUpdateManyArgs>(args: SelectSubset<T, media_typesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Media_types.
     * @param {media_typesUpsertArgs} args - Arguments to update or create a Media_types.
     * @example
     * // Update or create a Media_types
     * const media_types = await prisma.media_types.upsert({
     *   create: {
     *     // ... data to create a Media_types
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Media_types we want to update
     *   }
     * })
     */
    upsert<T extends media_typesUpsertArgs>(args: SelectSubset<T, media_typesUpsertArgs<ExtArgs>>): Prisma__media_typesClient<$Result.GetResult<Prisma.$media_typesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Media_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {media_typesCountArgs} args - Arguments to filter Media_types to count.
     * @example
     * // Count the number of Media_types
     * const count = await prisma.media_types.count({
     *   where: {
     *     // ... the filter for the Media_types we want to count
     *   }
     * })
    **/
    count<T extends media_typesCountArgs>(
      args?: Subset<T, media_typesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Media_typesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Media_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Media_typesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Media_typesAggregateArgs>(args: Subset<T, Media_typesAggregateArgs>): Prisma.PrismaPromise<GetMedia_typesAggregateType<T>>

    /**
     * Group by Media_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {media_typesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends media_typesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: media_typesGroupByArgs['orderBy'] }
        : { orderBy?: media_typesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, media_typesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedia_typesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the media_types model
   */
  readonly fields: media_typesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for media_types.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__media_typesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tracks<T extends media_types$tracksArgs<ExtArgs> = {}>(args?: Subset<T, media_types$tracksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tracksPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the media_types model
   */ 
  interface media_typesFieldRefs {
    readonly MediaTypeId: FieldRef<"media_types", 'Int'>
    readonly Name: FieldRef<"media_types", 'String'>
  }
    

  // Custom InputTypes
  /**
   * media_types findUnique
   */
  export type media_typesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media_types
     */
    select?: media_typesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: media_typesInclude<ExtArgs> | null
    /**
     * Filter, which media_types to fetch.
     */
    where: media_typesWhereUniqueInput
  }

  /**
   * media_types findUniqueOrThrow
   */
  export type media_typesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media_types
     */
    select?: media_typesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: media_typesInclude<ExtArgs> | null
    /**
     * Filter, which media_types to fetch.
     */
    where: media_typesWhereUniqueInput
  }

  /**
   * media_types findFirst
   */
  export type media_typesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media_types
     */
    select?: media_typesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: media_typesInclude<ExtArgs> | null
    /**
     * Filter, which media_types to fetch.
     */
    where?: media_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of media_types to fetch.
     */
    orderBy?: media_typesOrderByWithRelationInput | media_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for media_types.
     */
    cursor?: media_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` media_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` media_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of media_types.
     */
    distinct?: Media_typesScalarFieldEnum | Media_typesScalarFieldEnum[]
  }

  /**
   * media_types findFirstOrThrow
   */
  export type media_typesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media_types
     */
    select?: media_typesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: media_typesInclude<ExtArgs> | null
    /**
     * Filter, which media_types to fetch.
     */
    where?: media_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of media_types to fetch.
     */
    orderBy?: media_typesOrderByWithRelationInput | media_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for media_types.
     */
    cursor?: media_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` media_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` media_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of media_types.
     */
    distinct?: Media_typesScalarFieldEnum | Media_typesScalarFieldEnum[]
  }

  /**
   * media_types findMany
   */
  export type media_typesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media_types
     */
    select?: media_typesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: media_typesInclude<ExtArgs> | null
    /**
     * Filter, which media_types to fetch.
     */
    where?: media_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of media_types to fetch.
     */
    orderBy?: media_typesOrderByWithRelationInput | media_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing media_types.
     */
    cursor?: media_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` media_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` media_types.
     */
    skip?: number
    distinct?: Media_typesScalarFieldEnum | Media_typesScalarFieldEnum[]
  }

  /**
   * media_types create
   */
  export type media_typesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media_types
     */
    select?: media_typesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: media_typesInclude<ExtArgs> | null
    /**
     * The data needed to create a media_types.
     */
    data?: XOR<media_typesCreateInput, media_typesUncheckedCreateInput>
  }

  /**
   * media_types createMany
   */
  export type media_typesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many media_types.
     */
    data: media_typesCreateManyInput | media_typesCreateManyInput[]
  }

  /**
   * media_types createManyAndReturn
   */
  export type media_typesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media_types
     */
    select?: media_typesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many media_types.
     */
    data: media_typesCreateManyInput | media_typesCreateManyInput[]
  }

  /**
   * media_types update
   */
  export type media_typesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media_types
     */
    select?: media_typesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: media_typesInclude<ExtArgs> | null
    /**
     * The data needed to update a media_types.
     */
    data: XOR<media_typesUpdateInput, media_typesUncheckedUpdateInput>
    /**
     * Choose, which media_types to update.
     */
    where: media_typesWhereUniqueInput
  }

  /**
   * media_types updateMany
   */
  export type media_typesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update media_types.
     */
    data: XOR<media_typesUpdateManyMutationInput, media_typesUncheckedUpdateManyInput>
    /**
     * Filter which media_types to update
     */
    where?: media_typesWhereInput
  }

  /**
   * media_types upsert
   */
  export type media_typesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media_types
     */
    select?: media_typesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: media_typesInclude<ExtArgs> | null
    /**
     * The filter to search for the media_types to update in case it exists.
     */
    where: media_typesWhereUniqueInput
    /**
     * In case the media_types found by the `where` argument doesn't exist, create a new media_types with this data.
     */
    create: XOR<media_typesCreateInput, media_typesUncheckedCreateInput>
    /**
     * In case the media_types was found with the provided `where` argument, update it with this data.
     */
    update: XOR<media_typesUpdateInput, media_typesUncheckedUpdateInput>
  }

  /**
   * media_types delete
   */
  export type media_typesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media_types
     */
    select?: media_typesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: media_typesInclude<ExtArgs> | null
    /**
     * Filter which media_types to delete.
     */
    where: media_typesWhereUniqueInput
  }

  /**
   * media_types deleteMany
   */
  export type media_typesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which media_types to delete
     */
    where?: media_typesWhereInput
  }

  /**
   * media_types.tracks
   */
  export type media_types$tracksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tracks
     */
    select?: tracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tracksInclude<ExtArgs> | null
    where?: tracksWhereInput
    orderBy?: tracksOrderByWithRelationInput | tracksOrderByWithRelationInput[]
    cursor?: tracksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TracksScalarFieldEnum | TracksScalarFieldEnum[]
  }

  /**
   * media_types without action
   */
  export type media_typesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media_types
     */
    select?: media_typesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: media_typesInclude<ExtArgs> | null
  }


  /**
   * Model playlist_track
   */

  export type AggregatePlaylist_track = {
    _count: Playlist_trackCountAggregateOutputType | null
    _avg: Playlist_trackAvgAggregateOutputType | null
    _sum: Playlist_trackSumAggregateOutputType | null
    _min: Playlist_trackMinAggregateOutputType | null
    _max: Playlist_trackMaxAggregateOutputType | null
  }

  export type Playlist_trackAvgAggregateOutputType = {
    PlaylistId: number | null
    TrackId: number | null
  }

  export type Playlist_trackSumAggregateOutputType = {
    PlaylistId: number | null
    TrackId: number | null
  }

  export type Playlist_trackMinAggregateOutputType = {
    PlaylistId: number | null
    TrackId: number | null
  }

  export type Playlist_trackMaxAggregateOutputType = {
    PlaylistId: number | null
    TrackId: number | null
  }

  export type Playlist_trackCountAggregateOutputType = {
    PlaylistId: number
    TrackId: number
    _all: number
  }


  export type Playlist_trackAvgAggregateInputType = {
    PlaylistId?: true
    TrackId?: true
  }

  export type Playlist_trackSumAggregateInputType = {
    PlaylistId?: true
    TrackId?: true
  }

  export type Playlist_trackMinAggregateInputType = {
    PlaylistId?: true
    TrackId?: true
  }

  export type Playlist_trackMaxAggregateInputType = {
    PlaylistId?: true
    TrackId?: true
  }

  export type Playlist_trackCountAggregateInputType = {
    PlaylistId?: true
    TrackId?: true
    _all?: true
  }

  export type Playlist_trackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which playlist_track to aggregate.
     */
    where?: playlist_trackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of playlist_tracks to fetch.
     */
    orderBy?: playlist_trackOrderByWithRelationInput | playlist_trackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: playlist_trackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` playlist_tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` playlist_tracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned playlist_tracks
    **/
    _count?: true | Playlist_trackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Playlist_trackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Playlist_trackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Playlist_trackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Playlist_trackMaxAggregateInputType
  }

  export type GetPlaylist_trackAggregateType<T extends Playlist_trackAggregateArgs> = {
        [P in keyof T & keyof AggregatePlaylist_track]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlaylist_track[P]>
      : GetScalarType<T[P], AggregatePlaylist_track[P]>
  }




  export type playlist_trackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: playlist_trackWhereInput
    orderBy?: playlist_trackOrderByWithAggregationInput | playlist_trackOrderByWithAggregationInput[]
    by: Playlist_trackScalarFieldEnum[] | Playlist_trackScalarFieldEnum
    having?: playlist_trackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Playlist_trackCountAggregateInputType | true
    _avg?: Playlist_trackAvgAggregateInputType
    _sum?: Playlist_trackSumAggregateInputType
    _min?: Playlist_trackMinAggregateInputType
    _max?: Playlist_trackMaxAggregateInputType
  }

  export type Playlist_trackGroupByOutputType = {
    PlaylistId: number
    TrackId: number
    _count: Playlist_trackCountAggregateOutputType | null
    _avg: Playlist_trackAvgAggregateOutputType | null
    _sum: Playlist_trackSumAggregateOutputType | null
    _min: Playlist_trackMinAggregateOutputType | null
    _max: Playlist_trackMaxAggregateOutputType | null
  }

  type GetPlaylist_trackGroupByPayload<T extends playlist_trackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Playlist_trackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Playlist_trackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Playlist_trackGroupByOutputType[P]>
            : GetScalarType<T[P], Playlist_trackGroupByOutputType[P]>
        }
      >
    >


  export type playlist_trackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    PlaylistId?: boolean
    TrackId?: boolean
    tracks?: boolean | tracksDefaultArgs<ExtArgs>
    playlists?: boolean | playlistsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlist_track"]>

  export type playlist_trackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    PlaylistId?: boolean
    TrackId?: boolean
    tracks?: boolean | tracksDefaultArgs<ExtArgs>
    playlists?: boolean | playlistsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlist_track"]>

  export type playlist_trackSelectScalar = {
    PlaylistId?: boolean
    TrackId?: boolean
  }

  export type playlist_trackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tracks?: boolean | tracksDefaultArgs<ExtArgs>
    playlists?: boolean | playlistsDefaultArgs<ExtArgs>
  }
  export type playlist_trackIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tracks?: boolean | tracksDefaultArgs<ExtArgs>
    playlists?: boolean | playlistsDefaultArgs<ExtArgs>
  }

  export type $playlist_trackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "playlist_track"
    objects: {
      tracks: Prisma.$tracksPayload<ExtArgs>
      playlists: Prisma.$playlistsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      PlaylistId: number
      TrackId: number
    }, ExtArgs["result"]["playlist_track"]>
    composites: {}
  }

  type playlist_trackGetPayload<S extends boolean | null | undefined | playlist_trackDefaultArgs> = $Result.GetResult<Prisma.$playlist_trackPayload, S>

  type playlist_trackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<playlist_trackFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Playlist_trackCountAggregateInputType | true
    }

  export interface playlist_trackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['playlist_track'], meta: { name: 'playlist_track' } }
    /**
     * Find zero or one Playlist_track that matches the filter.
     * @param {playlist_trackFindUniqueArgs} args - Arguments to find a Playlist_track
     * @example
     * // Get one Playlist_track
     * const playlist_track = await prisma.playlist_track.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends playlist_trackFindUniqueArgs>(args: SelectSubset<T, playlist_trackFindUniqueArgs<ExtArgs>>): Prisma__playlist_trackClient<$Result.GetResult<Prisma.$playlist_trackPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Playlist_track that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {playlist_trackFindUniqueOrThrowArgs} args - Arguments to find a Playlist_track
     * @example
     * // Get one Playlist_track
     * const playlist_track = await prisma.playlist_track.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends playlist_trackFindUniqueOrThrowArgs>(args: SelectSubset<T, playlist_trackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__playlist_trackClient<$Result.GetResult<Prisma.$playlist_trackPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Playlist_track that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playlist_trackFindFirstArgs} args - Arguments to find a Playlist_track
     * @example
     * // Get one Playlist_track
     * const playlist_track = await prisma.playlist_track.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends playlist_trackFindFirstArgs>(args?: SelectSubset<T, playlist_trackFindFirstArgs<ExtArgs>>): Prisma__playlist_trackClient<$Result.GetResult<Prisma.$playlist_trackPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Playlist_track that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playlist_trackFindFirstOrThrowArgs} args - Arguments to find a Playlist_track
     * @example
     * // Get one Playlist_track
     * const playlist_track = await prisma.playlist_track.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends playlist_trackFindFirstOrThrowArgs>(args?: SelectSubset<T, playlist_trackFindFirstOrThrowArgs<ExtArgs>>): Prisma__playlist_trackClient<$Result.GetResult<Prisma.$playlist_trackPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Playlist_tracks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playlist_trackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Playlist_tracks
     * const playlist_tracks = await prisma.playlist_track.findMany()
     * 
     * // Get first 10 Playlist_tracks
     * const playlist_tracks = await prisma.playlist_track.findMany({ take: 10 })
     * 
     * // Only select the `PlaylistId`
     * const playlist_trackWithPlaylistIdOnly = await prisma.playlist_track.findMany({ select: { PlaylistId: true } })
     * 
     */
    findMany<T extends playlist_trackFindManyArgs>(args?: SelectSubset<T, playlist_trackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$playlist_trackPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Playlist_track.
     * @param {playlist_trackCreateArgs} args - Arguments to create a Playlist_track.
     * @example
     * // Create one Playlist_track
     * const Playlist_track = await prisma.playlist_track.create({
     *   data: {
     *     // ... data to create a Playlist_track
     *   }
     * })
     * 
     */
    create<T extends playlist_trackCreateArgs>(args: SelectSubset<T, playlist_trackCreateArgs<ExtArgs>>): Prisma__playlist_trackClient<$Result.GetResult<Prisma.$playlist_trackPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Playlist_tracks.
     * @param {playlist_trackCreateManyArgs} args - Arguments to create many Playlist_tracks.
     * @example
     * // Create many Playlist_tracks
     * const playlist_track = await prisma.playlist_track.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends playlist_trackCreateManyArgs>(args?: SelectSubset<T, playlist_trackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Playlist_tracks and returns the data saved in the database.
     * @param {playlist_trackCreateManyAndReturnArgs} args - Arguments to create many Playlist_tracks.
     * @example
     * // Create many Playlist_tracks
     * const playlist_track = await prisma.playlist_track.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Playlist_tracks and only return the `PlaylistId`
     * const playlist_trackWithPlaylistIdOnly = await prisma.playlist_track.createManyAndReturn({ 
     *   select: { PlaylistId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends playlist_trackCreateManyAndReturnArgs>(args?: SelectSubset<T, playlist_trackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$playlist_trackPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Playlist_track.
     * @param {playlist_trackDeleteArgs} args - Arguments to delete one Playlist_track.
     * @example
     * // Delete one Playlist_track
     * const Playlist_track = await prisma.playlist_track.delete({
     *   where: {
     *     // ... filter to delete one Playlist_track
     *   }
     * })
     * 
     */
    delete<T extends playlist_trackDeleteArgs>(args: SelectSubset<T, playlist_trackDeleteArgs<ExtArgs>>): Prisma__playlist_trackClient<$Result.GetResult<Prisma.$playlist_trackPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Playlist_track.
     * @param {playlist_trackUpdateArgs} args - Arguments to update one Playlist_track.
     * @example
     * // Update one Playlist_track
     * const playlist_track = await prisma.playlist_track.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends playlist_trackUpdateArgs>(args: SelectSubset<T, playlist_trackUpdateArgs<ExtArgs>>): Prisma__playlist_trackClient<$Result.GetResult<Prisma.$playlist_trackPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Playlist_tracks.
     * @param {playlist_trackDeleteManyArgs} args - Arguments to filter Playlist_tracks to delete.
     * @example
     * // Delete a few Playlist_tracks
     * const { count } = await prisma.playlist_track.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends playlist_trackDeleteManyArgs>(args?: SelectSubset<T, playlist_trackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Playlist_tracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playlist_trackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Playlist_tracks
     * const playlist_track = await prisma.playlist_track.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends playlist_trackUpdateManyArgs>(args: SelectSubset<T, playlist_trackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Playlist_track.
     * @param {playlist_trackUpsertArgs} args - Arguments to update or create a Playlist_track.
     * @example
     * // Update or create a Playlist_track
     * const playlist_track = await prisma.playlist_track.upsert({
     *   create: {
     *     // ... data to create a Playlist_track
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Playlist_track we want to update
     *   }
     * })
     */
    upsert<T extends playlist_trackUpsertArgs>(args: SelectSubset<T, playlist_trackUpsertArgs<ExtArgs>>): Prisma__playlist_trackClient<$Result.GetResult<Prisma.$playlist_trackPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Playlist_tracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playlist_trackCountArgs} args - Arguments to filter Playlist_tracks to count.
     * @example
     * // Count the number of Playlist_tracks
     * const count = await prisma.playlist_track.count({
     *   where: {
     *     // ... the filter for the Playlist_tracks we want to count
     *   }
     * })
    **/
    count<T extends playlist_trackCountArgs>(
      args?: Subset<T, playlist_trackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Playlist_trackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Playlist_track.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Playlist_trackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Playlist_trackAggregateArgs>(args: Subset<T, Playlist_trackAggregateArgs>): Prisma.PrismaPromise<GetPlaylist_trackAggregateType<T>>

    /**
     * Group by Playlist_track.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playlist_trackGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends playlist_trackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: playlist_trackGroupByArgs['orderBy'] }
        : { orderBy?: playlist_trackGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, playlist_trackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlaylist_trackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the playlist_track model
   */
  readonly fields: playlist_trackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for playlist_track.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__playlist_trackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tracks<T extends tracksDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tracksDefaultArgs<ExtArgs>>): Prisma__tracksClient<$Result.GetResult<Prisma.$tracksPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    playlists<T extends playlistsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, playlistsDefaultArgs<ExtArgs>>): Prisma__playlistsClient<$Result.GetResult<Prisma.$playlistsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the playlist_track model
   */ 
  interface playlist_trackFieldRefs {
    readonly PlaylistId: FieldRef<"playlist_track", 'Int'>
    readonly TrackId: FieldRef<"playlist_track", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * playlist_track findUnique
   */
  export type playlist_trackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist_track
     */
    select?: playlist_trackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlist_trackInclude<ExtArgs> | null
    /**
     * Filter, which playlist_track to fetch.
     */
    where: playlist_trackWhereUniqueInput
  }

  /**
   * playlist_track findUniqueOrThrow
   */
  export type playlist_trackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist_track
     */
    select?: playlist_trackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlist_trackInclude<ExtArgs> | null
    /**
     * Filter, which playlist_track to fetch.
     */
    where: playlist_trackWhereUniqueInput
  }

  /**
   * playlist_track findFirst
   */
  export type playlist_trackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist_track
     */
    select?: playlist_trackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlist_trackInclude<ExtArgs> | null
    /**
     * Filter, which playlist_track to fetch.
     */
    where?: playlist_trackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of playlist_tracks to fetch.
     */
    orderBy?: playlist_trackOrderByWithRelationInput | playlist_trackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for playlist_tracks.
     */
    cursor?: playlist_trackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` playlist_tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` playlist_tracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of playlist_tracks.
     */
    distinct?: Playlist_trackScalarFieldEnum | Playlist_trackScalarFieldEnum[]
  }

  /**
   * playlist_track findFirstOrThrow
   */
  export type playlist_trackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist_track
     */
    select?: playlist_trackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlist_trackInclude<ExtArgs> | null
    /**
     * Filter, which playlist_track to fetch.
     */
    where?: playlist_trackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of playlist_tracks to fetch.
     */
    orderBy?: playlist_trackOrderByWithRelationInput | playlist_trackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for playlist_tracks.
     */
    cursor?: playlist_trackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` playlist_tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` playlist_tracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of playlist_tracks.
     */
    distinct?: Playlist_trackScalarFieldEnum | Playlist_trackScalarFieldEnum[]
  }

  /**
   * playlist_track findMany
   */
  export type playlist_trackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist_track
     */
    select?: playlist_trackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlist_trackInclude<ExtArgs> | null
    /**
     * Filter, which playlist_tracks to fetch.
     */
    where?: playlist_trackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of playlist_tracks to fetch.
     */
    orderBy?: playlist_trackOrderByWithRelationInput | playlist_trackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing playlist_tracks.
     */
    cursor?: playlist_trackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` playlist_tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` playlist_tracks.
     */
    skip?: number
    distinct?: Playlist_trackScalarFieldEnum | Playlist_trackScalarFieldEnum[]
  }

  /**
   * playlist_track create
   */
  export type playlist_trackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist_track
     */
    select?: playlist_trackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlist_trackInclude<ExtArgs> | null
    /**
     * The data needed to create a playlist_track.
     */
    data: XOR<playlist_trackCreateInput, playlist_trackUncheckedCreateInput>
  }

  /**
   * playlist_track createMany
   */
  export type playlist_trackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many playlist_tracks.
     */
    data: playlist_trackCreateManyInput | playlist_trackCreateManyInput[]
  }

  /**
   * playlist_track createManyAndReturn
   */
  export type playlist_trackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist_track
     */
    select?: playlist_trackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many playlist_tracks.
     */
    data: playlist_trackCreateManyInput | playlist_trackCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlist_trackIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * playlist_track update
   */
  export type playlist_trackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist_track
     */
    select?: playlist_trackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlist_trackInclude<ExtArgs> | null
    /**
     * The data needed to update a playlist_track.
     */
    data: XOR<playlist_trackUpdateInput, playlist_trackUncheckedUpdateInput>
    /**
     * Choose, which playlist_track to update.
     */
    where: playlist_trackWhereUniqueInput
  }

  /**
   * playlist_track updateMany
   */
  export type playlist_trackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update playlist_tracks.
     */
    data: XOR<playlist_trackUpdateManyMutationInput, playlist_trackUncheckedUpdateManyInput>
    /**
     * Filter which playlist_tracks to update
     */
    where?: playlist_trackWhereInput
  }

  /**
   * playlist_track upsert
   */
  export type playlist_trackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist_track
     */
    select?: playlist_trackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlist_trackInclude<ExtArgs> | null
    /**
     * The filter to search for the playlist_track to update in case it exists.
     */
    where: playlist_trackWhereUniqueInput
    /**
     * In case the playlist_track found by the `where` argument doesn't exist, create a new playlist_track with this data.
     */
    create: XOR<playlist_trackCreateInput, playlist_trackUncheckedCreateInput>
    /**
     * In case the playlist_track was found with the provided `where` argument, update it with this data.
     */
    update: XOR<playlist_trackUpdateInput, playlist_trackUncheckedUpdateInput>
  }

  /**
   * playlist_track delete
   */
  export type playlist_trackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist_track
     */
    select?: playlist_trackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlist_trackInclude<ExtArgs> | null
    /**
     * Filter which playlist_track to delete.
     */
    where: playlist_trackWhereUniqueInput
  }

  /**
   * playlist_track deleteMany
   */
  export type playlist_trackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which playlist_tracks to delete
     */
    where?: playlist_trackWhereInput
  }

  /**
   * playlist_track without action
   */
  export type playlist_trackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist_track
     */
    select?: playlist_trackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlist_trackInclude<ExtArgs> | null
  }


  /**
   * Model playlists
   */

  export type AggregatePlaylists = {
    _count: PlaylistsCountAggregateOutputType | null
    _avg: PlaylistsAvgAggregateOutputType | null
    _sum: PlaylistsSumAggregateOutputType | null
    _min: PlaylistsMinAggregateOutputType | null
    _max: PlaylistsMaxAggregateOutputType | null
  }

  export type PlaylistsAvgAggregateOutputType = {
    PlaylistId: number | null
  }

  export type PlaylistsSumAggregateOutputType = {
    PlaylistId: number | null
  }

  export type PlaylistsMinAggregateOutputType = {
    PlaylistId: number | null
    Name: string | null
  }

  export type PlaylistsMaxAggregateOutputType = {
    PlaylistId: number | null
    Name: string | null
  }

  export type PlaylistsCountAggregateOutputType = {
    PlaylistId: number
    Name: number
    _all: number
  }


  export type PlaylistsAvgAggregateInputType = {
    PlaylistId?: true
  }

  export type PlaylistsSumAggregateInputType = {
    PlaylistId?: true
  }

  export type PlaylistsMinAggregateInputType = {
    PlaylistId?: true
    Name?: true
  }

  export type PlaylistsMaxAggregateInputType = {
    PlaylistId?: true
    Name?: true
  }

  export type PlaylistsCountAggregateInputType = {
    PlaylistId?: true
    Name?: true
    _all?: true
  }

  export type PlaylistsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which playlists to aggregate.
     */
    where?: playlistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of playlists to fetch.
     */
    orderBy?: playlistsOrderByWithRelationInput | playlistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: playlistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned playlists
    **/
    _count?: true | PlaylistsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlaylistsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlaylistsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlaylistsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlaylistsMaxAggregateInputType
  }

  export type GetPlaylistsAggregateType<T extends PlaylistsAggregateArgs> = {
        [P in keyof T & keyof AggregatePlaylists]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlaylists[P]>
      : GetScalarType<T[P], AggregatePlaylists[P]>
  }




  export type playlistsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: playlistsWhereInput
    orderBy?: playlistsOrderByWithAggregationInput | playlistsOrderByWithAggregationInput[]
    by: PlaylistsScalarFieldEnum[] | PlaylistsScalarFieldEnum
    having?: playlistsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlaylistsCountAggregateInputType | true
    _avg?: PlaylistsAvgAggregateInputType
    _sum?: PlaylistsSumAggregateInputType
    _min?: PlaylistsMinAggregateInputType
    _max?: PlaylistsMaxAggregateInputType
  }

  export type PlaylistsGroupByOutputType = {
    PlaylistId: number
    Name: string | null
    _count: PlaylistsCountAggregateOutputType | null
    _avg: PlaylistsAvgAggregateOutputType | null
    _sum: PlaylistsSumAggregateOutputType | null
    _min: PlaylistsMinAggregateOutputType | null
    _max: PlaylistsMaxAggregateOutputType | null
  }

  type GetPlaylistsGroupByPayload<T extends playlistsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlaylistsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlaylistsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlaylistsGroupByOutputType[P]>
            : GetScalarType<T[P], PlaylistsGroupByOutputType[P]>
        }
      >
    >


  export type playlistsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    PlaylistId?: boolean
    Name?: boolean
    playlist_track?: boolean | playlists$playlist_trackArgs<ExtArgs>
    _count?: boolean | PlaylistsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlists"]>

  export type playlistsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    PlaylistId?: boolean
    Name?: boolean
  }, ExtArgs["result"]["playlists"]>

  export type playlistsSelectScalar = {
    PlaylistId?: boolean
    Name?: boolean
  }

  export type playlistsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlist_track?: boolean | playlists$playlist_trackArgs<ExtArgs>
    _count?: boolean | PlaylistsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type playlistsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $playlistsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "playlists"
    objects: {
      playlist_track: Prisma.$playlist_trackPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      PlaylistId: number
      Name: string | null
    }, ExtArgs["result"]["playlists"]>
    composites: {}
  }

  type playlistsGetPayload<S extends boolean | null | undefined | playlistsDefaultArgs> = $Result.GetResult<Prisma.$playlistsPayload, S>

  type playlistsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<playlistsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PlaylistsCountAggregateInputType | true
    }

  export interface playlistsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['playlists'], meta: { name: 'playlists' } }
    /**
     * Find zero or one Playlists that matches the filter.
     * @param {playlistsFindUniqueArgs} args - Arguments to find a Playlists
     * @example
     * // Get one Playlists
     * const playlists = await prisma.playlists.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends playlistsFindUniqueArgs>(args: SelectSubset<T, playlistsFindUniqueArgs<ExtArgs>>): Prisma__playlistsClient<$Result.GetResult<Prisma.$playlistsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Playlists that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {playlistsFindUniqueOrThrowArgs} args - Arguments to find a Playlists
     * @example
     * // Get one Playlists
     * const playlists = await prisma.playlists.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends playlistsFindUniqueOrThrowArgs>(args: SelectSubset<T, playlistsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__playlistsClient<$Result.GetResult<Prisma.$playlistsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Playlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playlistsFindFirstArgs} args - Arguments to find a Playlists
     * @example
     * // Get one Playlists
     * const playlists = await prisma.playlists.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends playlistsFindFirstArgs>(args?: SelectSubset<T, playlistsFindFirstArgs<ExtArgs>>): Prisma__playlistsClient<$Result.GetResult<Prisma.$playlistsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Playlists that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playlistsFindFirstOrThrowArgs} args - Arguments to find a Playlists
     * @example
     * // Get one Playlists
     * const playlists = await prisma.playlists.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends playlistsFindFirstOrThrowArgs>(args?: SelectSubset<T, playlistsFindFirstOrThrowArgs<ExtArgs>>): Prisma__playlistsClient<$Result.GetResult<Prisma.$playlistsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Playlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playlistsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Playlists
     * const playlists = await prisma.playlists.findMany()
     * 
     * // Get first 10 Playlists
     * const playlists = await prisma.playlists.findMany({ take: 10 })
     * 
     * // Only select the `PlaylistId`
     * const playlistsWithPlaylistIdOnly = await prisma.playlists.findMany({ select: { PlaylistId: true } })
     * 
     */
    findMany<T extends playlistsFindManyArgs>(args?: SelectSubset<T, playlistsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$playlistsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Playlists.
     * @param {playlistsCreateArgs} args - Arguments to create a Playlists.
     * @example
     * // Create one Playlists
     * const Playlists = await prisma.playlists.create({
     *   data: {
     *     // ... data to create a Playlists
     *   }
     * })
     * 
     */
    create<T extends playlistsCreateArgs>(args: SelectSubset<T, playlistsCreateArgs<ExtArgs>>): Prisma__playlistsClient<$Result.GetResult<Prisma.$playlistsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Playlists.
     * @param {playlistsCreateManyArgs} args - Arguments to create many Playlists.
     * @example
     * // Create many Playlists
     * const playlists = await prisma.playlists.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends playlistsCreateManyArgs>(args?: SelectSubset<T, playlistsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Playlists and returns the data saved in the database.
     * @param {playlistsCreateManyAndReturnArgs} args - Arguments to create many Playlists.
     * @example
     * // Create many Playlists
     * const playlists = await prisma.playlists.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Playlists and only return the `PlaylistId`
     * const playlistsWithPlaylistIdOnly = await prisma.playlists.createManyAndReturn({ 
     *   select: { PlaylistId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends playlistsCreateManyAndReturnArgs>(args?: SelectSubset<T, playlistsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$playlistsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Playlists.
     * @param {playlistsDeleteArgs} args - Arguments to delete one Playlists.
     * @example
     * // Delete one Playlists
     * const Playlists = await prisma.playlists.delete({
     *   where: {
     *     // ... filter to delete one Playlists
     *   }
     * })
     * 
     */
    delete<T extends playlistsDeleteArgs>(args: SelectSubset<T, playlistsDeleteArgs<ExtArgs>>): Prisma__playlistsClient<$Result.GetResult<Prisma.$playlistsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Playlists.
     * @param {playlistsUpdateArgs} args - Arguments to update one Playlists.
     * @example
     * // Update one Playlists
     * const playlists = await prisma.playlists.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends playlistsUpdateArgs>(args: SelectSubset<T, playlistsUpdateArgs<ExtArgs>>): Prisma__playlistsClient<$Result.GetResult<Prisma.$playlistsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Playlists.
     * @param {playlistsDeleteManyArgs} args - Arguments to filter Playlists to delete.
     * @example
     * // Delete a few Playlists
     * const { count } = await prisma.playlists.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends playlistsDeleteManyArgs>(args?: SelectSubset<T, playlistsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Playlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playlistsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Playlists
     * const playlists = await prisma.playlists.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends playlistsUpdateManyArgs>(args: SelectSubset<T, playlistsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Playlists.
     * @param {playlistsUpsertArgs} args - Arguments to update or create a Playlists.
     * @example
     * // Update or create a Playlists
     * const playlists = await prisma.playlists.upsert({
     *   create: {
     *     // ... data to create a Playlists
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Playlists we want to update
     *   }
     * })
     */
    upsert<T extends playlistsUpsertArgs>(args: SelectSubset<T, playlistsUpsertArgs<ExtArgs>>): Prisma__playlistsClient<$Result.GetResult<Prisma.$playlistsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Playlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playlistsCountArgs} args - Arguments to filter Playlists to count.
     * @example
     * // Count the number of Playlists
     * const count = await prisma.playlists.count({
     *   where: {
     *     // ... the filter for the Playlists we want to count
     *   }
     * })
    **/
    count<T extends playlistsCountArgs>(
      args?: Subset<T, playlistsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlaylistsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Playlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlaylistsAggregateArgs>(args: Subset<T, PlaylistsAggregateArgs>): Prisma.PrismaPromise<GetPlaylistsAggregateType<T>>

    /**
     * Group by Playlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playlistsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends playlistsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: playlistsGroupByArgs['orderBy'] }
        : { orderBy?: playlistsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, playlistsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlaylistsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the playlists model
   */
  readonly fields: playlistsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for playlists.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__playlistsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    playlist_track<T extends playlists$playlist_trackArgs<ExtArgs> = {}>(args?: Subset<T, playlists$playlist_trackArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$playlist_trackPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the playlists model
   */ 
  interface playlistsFieldRefs {
    readonly PlaylistId: FieldRef<"playlists", 'Int'>
    readonly Name: FieldRef<"playlists", 'String'>
  }
    

  // Custom InputTypes
  /**
   * playlists findUnique
   */
  export type playlistsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlists
     */
    select?: playlistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlistsInclude<ExtArgs> | null
    /**
     * Filter, which playlists to fetch.
     */
    where: playlistsWhereUniqueInput
  }

  /**
   * playlists findUniqueOrThrow
   */
  export type playlistsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlists
     */
    select?: playlistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlistsInclude<ExtArgs> | null
    /**
     * Filter, which playlists to fetch.
     */
    where: playlistsWhereUniqueInput
  }

  /**
   * playlists findFirst
   */
  export type playlistsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlists
     */
    select?: playlistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlistsInclude<ExtArgs> | null
    /**
     * Filter, which playlists to fetch.
     */
    where?: playlistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of playlists to fetch.
     */
    orderBy?: playlistsOrderByWithRelationInput | playlistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for playlists.
     */
    cursor?: playlistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of playlists.
     */
    distinct?: PlaylistsScalarFieldEnum | PlaylistsScalarFieldEnum[]
  }

  /**
   * playlists findFirstOrThrow
   */
  export type playlistsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlists
     */
    select?: playlistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlistsInclude<ExtArgs> | null
    /**
     * Filter, which playlists to fetch.
     */
    where?: playlistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of playlists to fetch.
     */
    orderBy?: playlistsOrderByWithRelationInput | playlistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for playlists.
     */
    cursor?: playlistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of playlists.
     */
    distinct?: PlaylistsScalarFieldEnum | PlaylistsScalarFieldEnum[]
  }

  /**
   * playlists findMany
   */
  export type playlistsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlists
     */
    select?: playlistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlistsInclude<ExtArgs> | null
    /**
     * Filter, which playlists to fetch.
     */
    where?: playlistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of playlists to fetch.
     */
    orderBy?: playlistsOrderByWithRelationInput | playlistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing playlists.
     */
    cursor?: playlistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` playlists.
     */
    skip?: number
    distinct?: PlaylistsScalarFieldEnum | PlaylistsScalarFieldEnum[]
  }

  /**
   * playlists create
   */
  export type playlistsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlists
     */
    select?: playlistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlistsInclude<ExtArgs> | null
    /**
     * The data needed to create a playlists.
     */
    data?: XOR<playlistsCreateInput, playlistsUncheckedCreateInput>
  }

  /**
   * playlists createMany
   */
  export type playlistsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many playlists.
     */
    data: playlistsCreateManyInput | playlistsCreateManyInput[]
  }

  /**
   * playlists createManyAndReturn
   */
  export type playlistsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlists
     */
    select?: playlistsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many playlists.
     */
    data: playlistsCreateManyInput | playlistsCreateManyInput[]
  }

  /**
   * playlists update
   */
  export type playlistsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlists
     */
    select?: playlistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlistsInclude<ExtArgs> | null
    /**
     * The data needed to update a playlists.
     */
    data: XOR<playlistsUpdateInput, playlistsUncheckedUpdateInput>
    /**
     * Choose, which playlists to update.
     */
    where: playlistsWhereUniqueInput
  }

  /**
   * playlists updateMany
   */
  export type playlistsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update playlists.
     */
    data: XOR<playlistsUpdateManyMutationInput, playlistsUncheckedUpdateManyInput>
    /**
     * Filter which playlists to update
     */
    where?: playlistsWhereInput
  }

  /**
   * playlists upsert
   */
  export type playlistsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlists
     */
    select?: playlistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlistsInclude<ExtArgs> | null
    /**
     * The filter to search for the playlists to update in case it exists.
     */
    where: playlistsWhereUniqueInput
    /**
     * In case the playlists found by the `where` argument doesn't exist, create a new playlists with this data.
     */
    create: XOR<playlistsCreateInput, playlistsUncheckedCreateInput>
    /**
     * In case the playlists was found with the provided `where` argument, update it with this data.
     */
    update: XOR<playlistsUpdateInput, playlistsUncheckedUpdateInput>
  }

  /**
   * playlists delete
   */
  export type playlistsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlists
     */
    select?: playlistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlistsInclude<ExtArgs> | null
    /**
     * Filter which playlists to delete.
     */
    where: playlistsWhereUniqueInput
  }

  /**
   * playlists deleteMany
   */
  export type playlistsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which playlists to delete
     */
    where?: playlistsWhereInput
  }

  /**
   * playlists.playlist_track
   */
  export type playlists$playlist_trackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist_track
     */
    select?: playlist_trackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlist_trackInclude<ExtArgs> | null
    where?: playlist_trackWhereInput
    orderBy?: playlist_trackOrderByWithRelationInput | playlist_trackOrderByWithRelationInput[]
    cursor?: playlist_trackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Playlist_trackScalarFieldEnum | Playlist_trackScalarFieldEnum[]
  }

  /**
   * playlists without action
   */
  export type playlistsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlists
     */
    select?: playlistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlistsInclude<ExtArgs> | null
  }


  /**
   * Model tracks
   */

  export type AggregateTracks = {
    _count: TracksCountAggregateOutputType | null
    _avg: TracksAvgAggregateOutputType | null
    _sum: TracksSumAggregateOutputType | null
    _min: TracksMinAggregateOutputType | null
    _max: TracksMaxAggregateOutputType | null
  }

  export type TracksAvgAggregateOutputType = {
    TrackId: number | null
    AlbumId: number | null
    MediaTypeId: number | null
    GenreId: number | null
    Milliseconds: number | null
    Bytes: number | null
    UnitPrice: Decimal | null
  }

  export type TracksSumAggregateOutputType = {
    TrackId: number | null
    AlbumId: number | null
    MediaTypeId: number | null
    GenreId: number | null
    Milliseconds: number | null
    Bytes: number | null
    UnitPrice: Decimal | null
  }

  export type TracksMinAggregateOutputType = {
    TrackId: number | null
    Name: string | null
    AlbumId: number | null
    MediaTypeId: number | null
    GenreId: number | null
    Composer: string | null
    Milliseconds: number | null
    Bytes: number | null
    UnitPrice: Decimal | null
  }

  export type TracksMaxAggregateOutputType = {
    TrackId: number | null
    Name: string | null
    AlbumId: number | null
    MediaTypeId: number | null
    GenreId: number | null
    Composer: string | null
    Milliseconds: number | null
    Bytes: number | null
    UnitPrice: Decimal | null
  }

  export type TracksCountAggregateOutputType = {
    TrackId: number
    Name: number
    AlbumId: number
    MediaTypeId: number
    GenreId: number
    Composer: number
    Milliseconds: number
    Bytes: number
    UnitPrice: number
    _all: number
  }


  export type TracksAvgAggregateInputType = {
    TrackId?: true
    AlbumId?: true
    MediaTypeId?: true
    GenreId?: true
    Milliseconds?: true
    Bytes?: true
    UnitPrice?: true
  }

  export type TracksSumAggregateInputType = {
    TrackId?: true
    AlbumId?: true
    MediaTypeId?: true
    GenreId?: true
    Milliseconds?: true
    Bytes?: true
    UnitPrice?: true
  }

  export type TracksMinAggregateInputType = {
    TrackId?: true
    Name?: true
    AlbumId?: true
    MediaTypeId?: true
    GenreId?: true
    Composer?: true
    Milliseconds?: true
    Bytes?: true
    UnitPrice?: true
  }

  export type TracksMaxAggregateInputType = {
    TrackId?: true
    Name?: true
    AlbumId?: true
    MediaTypeId?: true
    GenreId?: true
    Composer?: true
    Milliseconds?: true
    Bytes?: true
    UnitPrice?: true
  }

  export type TracksCountAggregateInputType = {
    TrackId?: true
    Name?: true
    AlbumId?: true
    MediaTypeId?: true
    GenreId?: true
    Composer?: true
    Milliseconds?: true
    Bytes?: true
    UnitPrice?: true
    _all?: true
  }

  export type TracksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tracks to aggregate.
     */
    where?: tracksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tracks to fetch.
     */
    orderBy?: tracksOrderByWithRelationInput | tracksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tracksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tracks
    **/
    _count?: true | TracksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TracksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TracksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TracksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TracksMaxAggregateInputType
  }

  export type GetTracksAggregateType<T extends TracksAggregateArgs> = {
        [P in keyof T & keyof AggregateTracks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTracks[P]>
      : GetScalarType<T[P], AggregateTracks[P]>
  }




  export type tracksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tracksWhereInput
    orderBy?: tracksOrderByWithAggregationInput | tracksOrderByWithAggregationInput[]
    by: TracksScalarFieldEnum[] | TracksScalarFieldEnum
    having?: tracksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TracksCountAggregateInputType | true
    _avg?: TracksAvgAggregateInputType
    _sum?: TracksSumAggregateInputType
    _min?: TracksMinAggregateInputType
    _max?: TracksMaxAggregateInputType
  }

  export type TracksGroupByOutputType = {
    TrackId: number
    Name: string
    AlbumId: number | null
    MediaTypeId: number
    GenreId: number | null
    Composer: string | null
    Milliseconds: number
    Bytes: number | null
    UnitPrice: Decimal
    _count: TracksCountAggregateOutputType | null
    _avg: TracksAvgAggregateOutputType | null
    _sum: TracksSumAggregateOutputType | null
    _min: TracksMinAggregateOutputType | null
    _max: TracksMaxAggregateOutputType | null
  }

  type GetTracksGroupByPayload<T extends tracksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TracksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TracksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TracksGroupByOutputType[P]>
            : GetScalarType<T[P], TracksGroupByOutputType[P]>
        }
      >
    >


  export type tracksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    TrackId?: boolean
    Name?: boolean
    AlbumId?: boolean
    MediaTypeId?: boolean
    GenreId?: boolean
    Composer?: boolean
    Milliseconds?: boolean
    Bytes?: boolean
    UnitPrice?: boolean
    invoice_items?: boolean | tracks$invoice_itemsArgs<ExtArgs>
    playlist_track?: boolean | tracks$playlist_trackArgs<ExtArgs>
    media_types?: boolean | media_typesDefaultArgs<ExtArgs>
    genres?: boolean | tracks$genresArgs<ExtArgs>
    albums?: boolean | tracks$albumsArgs<ExtArgs>
    _count?: boolean | TracksCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tracks"]>

  export type tracksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    TrackId?: boolean
    Name?: boolean
    AlbumId?: boolean
    MediaTypeId?: boolean
    GenreId?: boolean
    Composer?: boolean
    Milliseconds?: boolean
    Bytes?: boolean
    UnitPrice?: boolean
    media_types?: boolean | media_typesDefaultArgs<ExtArgs>
    genres?: boolean | tracks$genresArgs<ExtArgs>
    albums?: boolean | tracks$albumsArgs<ExtArgs>
  }, ExtArgs["result"]["tracks"]>

  export type tracksSelectScalar = {
    TrackId?: boolean
    Name?: boolean
    AlbumId?: boolean
    MediaTypeId?: boolean
    GenreId?: boolean
    Composer?: boolean
    Milliseconds?: boolean
    Bytes?: boolean
    UnitPrice?: boolean
  }

  export type tracksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice_items?: boolean | tracks$invoice_itemsArgs<ExtArgs>
    playlist_track?: boolean | tracks$playlist_trackArgs<ExtArgs>
    media_types?: boolean | media_typesDefaultArgs<ExtArgs>
    genres?: boolean | tracks$genresArgs<ExtArgs>
    albums?: boolean | tracks$albumsArgs<ExtArgs>
    _count?: boolean | TracksCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tracksIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    media_types?: boolean | media_typesDefaultArgs<ExtArgs>
    genres?: boolean | tracks$genresArgs<ExtArgs>
    albums?: boolean | tracks$albumsArgs<ExtArgs>
  }

  export type $tracksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tracks"
    objects: {
      invoice_items: Prisma.$invoice_itemsPayload<ExtArgs>[]
      playlist_track: Prisma.$playlist_trackPayload<ExtArgs>[]
      media_types: Prisma.$media_typesPayload<ExtArgs>
      genres: Prisma.$genresPayload<ExtArgs> | null
      albums: Prisma.$albumsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      TrackId: number
      Name: string
      AlbumId: number | null
      MediaTypeId: number
      GenreId: number | null
      Composer: string | null
      Milliseconds: number
      Bytes: number | null
      UnitPrice: Prisma.Decimal
    }, ExtArgs["result"]["tracks"]>
    composites: {}
  }

  type tracksGetPayload<S extends boolean | null | undefined | tracksDefaultArgs> = $Result.GetResult<Prisma.$tracksPayload, S>

  type tracksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<tracksFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TracksCountAggregateInputType | true
    }

  export interface tracksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tracks'], meta: { name: 'tracks' } }
    /**
     * Find zero or one Tracks that matches the filter.
     * @param {tracksFindUniqueArgs} args - Arguments to find a Tracks
     * @example
     * // Get one Tracks
     * const tracks = await prisma.tracks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tracksFindUniqueArgs>(args: SelectSubset<T, tracksFindUniqueArgs<ExtArgs>>): Prisma__tracksClient<$Result.GetResult<Prisma.$tracksPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tracks that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {tracksFindUniqueOrThrowArgs} args - Arguments to find a Tracks
     * @example
     * // Get one Tracks
     * const tracks = await prisma.tracks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tracksFindUniqueOrThrowArgs>(args: SelectSubset<T, tracksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tracksClient<$Result.GetResult<Prisma.$tracksPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tracks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tracksFindFirstArgs} args - Arguments to find a Tracks
     * @example
     * // Get one Tracks
     * const tracks = await prisma.tracks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tracksFindFirstArgs>(args?: SelectSubset<T, tracksFindFirstArgs<ExtArgs>>): Prisma__tracksClient<$Result.GetResult<Prisma.$tracksPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tracks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tracksFindFirstOrThrowArgs} args - Arguments to find a Tracks
     * @example
     * // Get one Tracks
     * const tracks = await prisma.tracks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tracksFindFirstOrThrowArgs>(args?: SelectSubset<T, tracksFindFirstOrThrowArgs<ExtArgs>>): Prisma__tracksClient<$Result.GetResult<Prisma.$tracksPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tracks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tracksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tracks
     * const tracks = await prisma.tracks.findMany()
     * 
     * // Get first 10 Tracks
     * const tracks = await prisma.tracks.findMany({ take: 10 })
     * 
     * // Only select the `TrackId`
     * const tracksWithTrackIdOnly = await prisma.tracks.findMany({ select: { TrackId: true } })
     * 
     */
    findMany<T extends tracksFindManyArgs>(args?: SelectSubset<T, tracksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tracksPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tracks.
     * @param {tracksCreateArgs} args - Arguments to create a Tracks.
     * @example
     * // Create one Tracks
     * const Tracks = await prisma.tracks.create({
     *   data: {
     *     // ... data to create a Tracks
     *   }
     * })
     * 
     */
    create<T extends tracksCreateArgs>(args: SelectSubset<T, tracksCreateArgs<ExtArgs>>): Prisma__tracksClient<$Result.GetResult<Prisma.$tracksPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tracks.
     * @param {tracksCreateManyArgs} args - Arguments to create many Tracks.
     * @example
     * // Create many Tracks
     * const tracks = await prisma.tracks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tracksCreateManyArgs>(args?: SelectSubset<T, tracksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tracks and returns the data saved in the database.
     * @param {tracksCreateManyAndReturnArgs} args - Arguments to create many Tracks.
     * @example
     * // Create many Tracks
     * const tracks = await prisma.tracks.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tracks and only return the `TrackId`
     * const tracksWithTrackIdOnly = await prisma.tracks.createManyAndReturn({ 
     *   select: { TrackId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tracksCreateManyAndReturnArgs>(args?: SelectSubset<T, tracksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tracksPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Tracks.
     * @param {tracksDeleteArgs} args - Arguments to delete one Tracks.
     * @example
     * // Delete one Tracks
     * const Tracks = await prisma.tracks.delete({
     *   where: {
     *     // ... filter to delete one Tracks
     *   }
     * })
     * 
     */
    delete<T extends tracksDeleteArgs>(args: SelectSubset<T, tracksDeleteArgs<ExtArgs>>): Prisma__tracksClient<$Result.GetResult<Prisma.$tracksPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tracks.
     * @param {tracksUpdateArgs} args - Arguments to update one Tracks.
     * @example
     * // Update one Tracks
     * const tracks = await prisma.tracks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tracksUpdateArgs>(args: SelectSubset<T, tracksUpdateArgs<ExtArgs>>): Prisma__tracksClient<$Result.GetResult<Prisma.$tracksPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tracks.
     * @param {tracksDeleteManyArgs} args - Arguments to filter Tracks to delete.
     * @example
     * // Delete a few Tracks
     * const { count } = await prisma.tracks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tracksDeleteManyArgs>(args?: SelectSubset<T, tracksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tracksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tracks
     * const tracks = await prisma.tracks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tracksUpdateManyArgs>(args: SelectSubset<T, tracksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tracks.
     * @param {tracksUpsertArgs} args - Arguments to update or create a Tracks.
     * @example
     * // Update or create a Tracks
     * const tracks = await prisma.tracks.upsert({
     *   create: {
     *     // ... data to create a Tracks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tracks we want to update
     *   }
     * })
     */
    upsert<T extends tracksUpsertArgs>(args: SelectSubset<T, tracksUpsertArgs<ExtArgs>>): Prisma__tracksClient<$Result.GetResult<Prisma.$tracksPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tracksCountArgs} args - Arguments to filter Tracks to count.
     * @example
     * // Count the number of Tracks
     * const count = await prisma.tracks.count({
     *   where: {
     *     // ... the filter for the Tracks we want to count
     *   }
     * })
    **/
    count<T extends tracksCountArgs>(
      args?: Subset<T, tracksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TracksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TracksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TracksAggregateArgs>(args: Subset<T, TracksAggregateArgs>): Prisma.PrismaPromise<GetTracksAggregateType<T>>

    /**
     * Group by Tracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tracksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tracksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tracksGroupByArgs['orderBy'] }
        : { orderBy?: tracksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tracksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTracksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tracks model
   */
  readonly fields: tracksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tracks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tracksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invoice_items<T extends tracks$invoice_itemsArgs<ExtArgs> = {}>(args?: Subset<T, tracks$invoice_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoice_itemsPayload<ExtArgs>, T, "findMany"> | Null>
    playlist_track<T extends tracks$playlist_trackArgs<ExtArgs> = {}>(args?: Subset<T, tracks$playlist_trackArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$playlist_trackPayload<ExtArgs>, T, "findMany"> | Null>
    media_types<T extends media_typesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, media_typesDefaultArgs<ExtArgs>>): Prisma__media_typesClient<$Result.GetResult<Prisma.$media_typesPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    genres<T extends tracks$genresArgs<ExtArgs> = {}>(args?: Subset<T, tracks$genresArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    albums<T extends tracks$albumsArgs<ExtArgs> = {}>(args?: Subset<T, tracks$albumsArgs<ExtArgs>>): Prisma__albumsClient<$Result.GetResult<Prisma.$albumsPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tracks model
   */ 
  interface tracksFieldRefs {
    readonly TrackId: FieldRef<"tracks", 'Int'>
    readonly Name: FieldRef<"tracks", 'String'>
    readonly AlbumId: FieldRef<"tracks", 'Int'>
    readonly MediaTypeId: FieldRef<"tracks", 'Int'>
    readonly GenreId: FieldRef<"tracks", 'Int'>
    readonly Composer: FieldRef<"tracks", 'String'>
    readonly Milliseconds: FieldRef<"tracks", 'Int'>
    readonly Bytes: FieldRef<"tracks", 'Int'>
    readonly UnitPrice: FieldRef<"tracks", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * tracks findUnique
   */
  export type tracksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tracks
     */
    select?: tracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tracksInclude<ExtArgs> | null
    /**
     * Filter, which tracks to fetch.
     */
    where: tracksWhereUniqueInput
  }

  /**
   * tracks findUniqueOrThrow
   */
  export type tracksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tracks
     */
    select?: tracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tracksInclude<ExtArgs> | null
    /**
     * Filter, which tracks to fetch.
     */
    where: tracksWhereUniqueInput
  }

  /**
   * tracks findFirst
   */
  export type tracksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tracks
     */
    select?: tracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tracksInclude<ExtArgs> | null
    /**
     * Filter, which tracks to fetch.
     */
    where?: tracksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tracks to fetch.
     */
    orderBy?: tracksOrderByWithRelationInput | tracksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tracks.
     */
    cursor?: tracksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tracks.
     */
    distinct?: TracksScalarFieldEnum | TracksScalarFieldEnum[]
  }

  /**
   * tracks findFirstOrThrow
   */
  export type tracksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tracks
     */
    select?: tracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tracksInclude<ExtArgs> | null
    /**
     * Filter, which tracks to fetch.
     */
    where?: tracksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tracks to fetch.
     */
    orderBy?: tracksOrderByWithRelationInput | tracksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tracks.
     */
    cursor?: tracksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tracks.
     */
    distinct?: TracksScalarFieldEnum | TracksScalarFieldEnum[]
  }

  /**
   * tracks findMany
   */
  export type tracksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tracks
     */
    select?: tracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tracksInclude<ExtArgs> | null
    /**
     * Filter, which tracks to fetch.
     */
    where?: tracksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tracks to fetch.
     */
    orderBy?: tracksOrderByWithRelationInput | tracksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tracks.
     */
    cursor?: tracksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tracks.
     */
    skip?: number
    distinct?: TracksScalarFieldEnum | TracksScalarFieldEnum[]
  }

  /**
   * tracks create
   */
  export type tracksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tracks
     */
    select?: tracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tracksInclude<ExtArgs> | null
    /**
     * The data needed to create a tracks.
     */
    data: XOR<tracksCreateInput, tracksUncheckedCreateInput>
  }

  /**
   * tracks createMany
   */
  export type tracksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tracks.
     */
    data: tracksCreateManyInput | tracksCreateManyInput[]
  }

  /**
   * tracks createManyAndReturn
   */
  export type tracksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tracks
     */
    select?: tracksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many tracks.
     */
    data: tracksCreateManyInput | tracksCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tracksIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * tracks update
   */
  export type tracksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tracks
     */
    select?: tracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tracksInclude<ExtArgs> | null
    /**
     * The data needed to update a tracks.
     */
    data: XOR<tracksUpdateInput, tracksUncheckedUpdateInput>
    /**
     * Choose, which tracks to update.
     */
    where: tracksWhereUniqueInput
  }

  /**
   * tracks updateMany
   */
  export type tracksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tracks.
     */
    data: XOR<tracksUpdateManyMutationInput, tracksUncheckedUpdateManyInput>
    /**
     * Filter which tracks to update
     */
    where?: tracksWhereInput
  }

  /**
   * tracks upsert
   */
  export type tracksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tracks
     */
    select?: tracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tracksInclude<ExtArgs> | null
    /**
     * The filter to search for the tracks to update in case it exists.
     */
    where: tracksWhereUniqueInput
    /**
     * In case the tracks found by the `where` argument doesn't exist, create a new tracks with this data.
     */
    create: XOR<tracksCreateInput, tracksUncheckedCreateInput>
    /**
     * In case the tracks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tracksUpdateInput, tracksUncheckedUpdateInput>
  }

  /**
   * tracks delete
   */
  export type tracksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tracks
     */
    select?: tracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tracksInclude<ExtArgs> | null
    /**
     * Filter which tracks to delete.
     */
    where: tracksWhereUniqueInput
  }

  /**
   * tracks deleteMany
   */
  export type tracksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tracks to delete
     */
    where?: tracksWhereInput
  }

  /**
   * tracks.invoice_items
   */
  export type tracks$invoice_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_items
     */
    select?: invoice_itemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_itemsInclude<ExtArgs> | null
    where?: invoice_itemsWhereInput
    orderBy?: invoice_itemsOrderByWithRelationInput | invoice_itemsOrderByWithRelationInput[]
    cursor?: invoice_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Invoice_itemsScalarFieldEnum | Invoice_itemsScalarFieldEnum[]
  }

  /**
   * tracks.playlist_track
   */
  export type tracks$playlist_trackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist_track
     */
    select?: playlist_trackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlist_trackInclude<ExtArgs> | null
    where?: playlist_trackWhereInput
    orderBy?: playlist_trackOrderByWithRelationInput | playlist_trackOrderByWithRelationInput[]
    cursor?: playlist_trackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Playlist_trackScalarFieldEnum | Playlist_trackScalarFieldEnum[]
  }

  /**
   * tracks.genres
   */
  export type tracks$genresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
    where?: genresWhereInput
  }

  /**
   * tracks.albums
   */
  export type tracks$albumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the albums
     */
    select?: albumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: albumsInclude<ExtArgs> | null
    where?: albumsWhereInput
  }

  /**
   * tracks without action
   */
  export type tracksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tracks
     */
    select?: tracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tracksInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AlbumsScalarFieldEnum: {
    AlbumId: 'AlbumId',
    Title: 'Title',
    ArtistId: 'ArtistId'
  };

  export type AlbumsScalarFieldEnum = (typeof AlbumsScalarFieldEnum)[keyof typeof AlbumsScalarFieldEnum]


  export const ArtistsScalarFieldEnum: {
    ArtistId: 'ArtistId',
    Name: 'Name'
  };

  export type ArtistsScalarFieldEnum = (typeof ArtistsScalarFieldEnum)[keyof typeof ArtistsScalarFieldEnum]


  export const CustomersScalarFieldEnum: {
    CustomerId: 'CustomerId',
    FirstName: 'FirstName',
    LastName: 'LastName',
    ImageURL: 'ImageURL',
    Company: 'Company',
    Address: 'Address',
    City: 'City',
    State: 'State',
    Country: 'Country',
    PostalCode: 'PostalCode',
    Phone: 'Phone',
    Fax: 'Fax',
    Email: 'Email',
    SupportRepId: 'SupportRepId'
  };

  export type CustomersScalarFieldEnum = (typeof CustomersScalarFieldEnum)[keyof typeof CustomersScalarFieldEnum]


  export const EmployeesScalarFieldEnum: {
    EmployeeId: 'EmployeeId',
    LastName: 'LastName',
    FirstName: 'FirstName',
    ImageURL: 'ImageURL',
    Title: 'Title',
    ReportsTo: 'ReportsTo',
    BirthDate: 'BirthDate',
    HireDate: 'HireDate',
    Address: 'Address',
    City: 'City',
    State: 'State',
    Country: 'Country',
    PostalCode: 'PostalCode',
    Phone: 'Phone',
    Fax: 'Fax',
    Email: 'Email'
  };

  export type EmployeesScalarFieldEnum = (typeof EmployeesScalarFieldEnum)[keyof typeof EmployeesScalarFieldEnum]


  export const GenresScalarFieldEnum: {
    GenreId: 'GenreId',
    Name: 'Name'
  };

  export type GenresScalarFieldEnum = (typeof GenresScalarFieldEnum)[keyof typeof GenresScalarFieldEnum]


  export const Invoice_itemsScalarFieldEnum: {
    InvoiceLineId: 'InvoiceLineId',
    InvoiceId: 'InvoiceId',
    TrackId: 'TrackId',
    UnitPrice: 'UnitPrice',
    Quantity: 'Quantity'
  };

  export type Invoice_itemsScalarFieldEnum = (typeof Invoice_itemsScalarFieldEnum)[keyof typeof Invoice_itemsScalarFieldEnum]


  export const InvoicesScalarFieldEnum: {
    InvoiceId: 'InvoiceId',
    CustomerId: 'CustomerId',
    InvoiceDate: 'InvoiceDate',
    BillingAddress: 'BillingAddress',
    BillingCity: 'BillingCity',
    BillingState: 'BillingState',
    BillingCountry: 'BillingCountry',
    BillingPostalCode: 'BillingPostalCode',
    Total: 'Total'
  };

  export type InvoicesScalarFieldEnum = (typeof InvoicesScalarFieldEnum)[keyof typeof InvoicesScalarFieldEnum]


  export const Media_typesScalarFieldEnum: {
    MediaTypeId: 'MediaTypeId',
    Name: 'Name'
  };

  export type Media_typesScalarFieldEnum = (typeof Media_typesScalarFieldEnum)[keyof typeof Media_typesScalarFieldEnum]


  export const Playlist_trackScalarFieldEnum: {
    PlaylistId: 'PlaylistId',
    TrackId: 'TrackId'
  };

  export type Playlist_trackScalarFieldEnum = (typeof Playlist_trackScalarFieldEnum)[keyof typeof Playlist_trackScalarFieldEnum]


  export const PlaylistsScalarFieldEnum: {
    PlaylistId: 'PlaylistId',
    Name: 'Name'
  };

  export type PlaylistsScalarFieldEnum = (typeof PlaylistsScalarFieldEnum)[keyof typeof PlaylistsScalarFieldEnum]


  export const TracksScalarFieldEnum: {
    TrackId: 'TrackId',
    Name: 'Name',
    AlbumId: 'AlbumId',
    MediaTypeId: 'MediaTypeId',
    GenreId: 'GenreId',
    Composer: 'Composer',
    Milliseconds: 'Milliseconds',
    Bytes: 'Bytes',
    UnitPrice: 'UnitPrice'
  };

  export type TracksScalarFieldEnum = (typeof TracksScalarFieldEnum)[keyof typeof TracksScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type albumsWhereInput = {
    AND?: albumsWhereInput | albumsWhereInput[]
    OR?: albumsWhereInput[]
    NOT?: albumsWhereInput | albumsWhereInput[]
    AlbumId?: IntFilter<"albums"> | number
    Title?: StringFilter<"albums"> | string
    ArtistId?: IntFilter<"albums"> | number
    artists?: XOR<ArtistsRelationFilter, artistsWhereInput>
    tracks?: TracksListRelationFilter
  }

  export type albumsOrderByWithRelationInput = {
    AlbumId?: SortOrder
    Title?: SortOrder
    ArtistId?: SortOrder
    artists?: artistsOrderByWithRelationInput
    tracks?: tracksOrderByRelationAggregateInput
  }

  export type albumsWhereUniqueInput = Prisma.AtLeast<{
    AlbumId?: number
    AND?: albumsWhereInput | albumsWhereInput[]
    OR?: albumsWhereInput[]
    NOT?: albumsWhereInput | albumsWhereInput[]
    Title?: StringFilter<"albums"> | string
    ArtistId?: IntFilter<"albums"> | number
    artists?: XOR<ArtistsRelationFilter, artistsWhereInput>
    tracks?: TracksListRelationFilter
  }, "AlbumId">

  export type albumsOrderByWithAggregationInput = {
    AlbumId?: SortOrder
    Title?: SortOrder
    ArtistId?: SortOrder
    _count?: albumsCountOrderByAggregateInput
    _avg?: albumsAvgOrderByAggregateInput
    _max?: albumsMaxOrderByAggregateInput
    _min?: albumsMinOrderByAggregateInput
    _sum?: albumsSumOrderByAggregateInput
  }

  export type albumsScalarWhereWithAggregatesInput = {
    AND?: albumsScalarWhereWithAggregatesInput | albumsScalarWhereWithAggregatesInput[]
    OR?: albumsScalarWhereWithAggregatesInput[]
    NOT?: albumsScalarWhereWithAggregatesInput | albumsScalarWhereWithAggregatesInput[]
    AlbumId?: IntWithAggregatesFilter<"albums"> | number
    Title?: StringWithAggregatesFilter<"albums"> | string
    ArtistId?: IntWithAggregatesFilter<"albums"> | number
  }

  export type artistsWhereInput = {
    AND?: artistsWhereInput | artistsWhereInput[]
    OR?: artistsWhereInput[]
    NOT?: artistsWhereInput | artistsWhereInput[]
    ArtistId?: IntFilter<"artists"> | number
    Name?: StringNullableFilter<"artists"> | string | null
    albums?: AlbumsListRelationFilter
  }

  export type artistsOrderByWithRelationInput = {
    ArtistId?: SortOrder
    Name?: SortOrderInput | SortOrder
    albums?: albumsOrderByRelationAggregateInput
  }

  export type artistsWhereUniqueInput = Prisma.AtLeast<{
    ArtistId?: number
    AND?: artistsWhereInput | artistsWhereInput[]
    OR?: artistsWhereInput[]
    NOT?: artistsWhereInput | artistsWhereInput[]
    Name?: StringNullableFilter<"artists"> | string | null
    albums?: AlbumsListRelationFilter
  }, "ArtistId">

  export type artistsOrderByWithAggregationInput = {
    ArtistId?: SortOrder
    Name?: SortOrderInput | SortOrder
    _count?: artistsCountOrderByAggregateInput
    _avg?: artistsAvgOrderByAggregateInput
    _max?: artistsMaxOrderByAggregateInput
    _min?: artistsMinOrderByAggregateInput
    _sum?: artistsSumOrderByAggregateInput
  }

  export type artistsScalarWhereWithAggregatesInput = {
    AND?: artistsScalarWhereWithAggregatesInput | artistsScalarWhereWithAggregatesInput[]
    OR?: artistsScalarWhereWithAggregatesInput[]
    NOT?: artistsScalarWhereWithAggregatesInput | artistsScalarWhereWithAggregatesInput[]
    ArtistId?: IntWithAggregatesFilter<"artists"> | number
    Name?: StringNullableWithAggregatesFilter<"artists"> | string | null
  }

  export type customersWhereInput = {
    AND?: customersWhereInput | customersWhereInput[]
    OR?: customersWhereInput[]
    NOT?: customersWhereInput | customersWhereInput[]
    CustomerId?: IntFilter<"customers"> | number
    FirstName?: StringFilter<"customers"> | string
    LastName?: StringFilter<"customers"> | string
    ImageURL?: StringFilter<"customers"> | string
    Company?: StringNullableFilter<"customers"> | string | null
    Address?: StringNullableFilter<"customers"> | string | null
    City?: StringNullableFilter<"customers"> | string | null
    State?: StringNullableFilter<"customers"> | string | null
    Country?: StringNullableFilter<"customers"> | string | null
    PostalCode?: StringNullableFilter<"customers"> | string | null
    Phone?: StringNullableFilter<"customers"> | string | null
    Fax?: StringNullableFilter<"customers"> | string | null
    Email?: StringFilter<"customers"> | string
    SupportRepId?: IntNullableFilter<"customers"> | number | null
    employees?: XOR<EmployeesNullableRelationFilter, employeesWhereInput> | null
    invoices?: InvoicesListRelationFilter
  }

  export type customersOrderByWithRelationInput = {
    CustomerId?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    ImageURL?: SortOrder
    Company?: SortOrderInput | SortOrder
    Address?: SortOrderInput | SortOrder
    City?: SortOrderInput | SortOrder
    State?: SortOrderInput | SortOrder
    Country?: SortOrderInput | SortOrder
    PostalCode?: SortOrderInput | SortOrder
    Phone?: SortOrderInput | SortOrder
    Fax?: SortOrderInput | SortOrder
    Email?: SortOrder
    SupportRepId?: SortOrderInput | SortOrder
    employees?: employeesOrderByWithRelationInput
    invoices?: invoicesOrderByRelationAggregateInput
  }

  export type customersWhereUniqueInput = Prisma.AtLeast<{
    CustomerId?: number
    AND?: customersWhereInput | customersWhereInput[]
    OR?: customersWhereInput[]
    NOT?: customersWhereInput | customersWhereInput[]
    FirstName?: StringFilter<"customers"> | string
    LastName?: StringFilter<"customers"> | string
    ImageURL?: StringFilter<"customers"> | string
    Company?: StringNullableFilter<"customers"> | string | null
    Address?: StringNullableFilter<"customers"> | string | null
    City?: StringNullableFilter<"customers"> | string | null
    State?: StringNullableFilter<"customers"> | string | null
    Country?: StringNullableFilter<"customers"> | string | null
    PostalCode?: StringNullableFilter<"customers"> | string | null
    Phone?: StringNullableFilter<"customers"> | string | null
    Fax?: StringNullableFilter<"customers"> | string | null
    Email?: StringFilter<"customers"> | string
    SupportRepId?: IntNullableFilter<"customers"> | number | null
    employees?: XOR<EmployeesNullableRelationFilter, employeesWhereInput> | null
    invoices?: InvoicesListRelationFilter
  }, "CustomerId">

  export type customersOrderByWithAggregationInput = {
    CustomerId?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    ImageURL?: SortOrder
    Company?: SortOrderInput | SortOrder
    Address?: SortOrderInput | SortOrder
    City?: SortOrderInput | SortOrder
    State?: SortOrderInput | SortOrder
    Country?: SortOrderInput | SortOrder
    PostalCode?: SortOrderInput | SortOrder
    Phone?: SortOrderInput | SortOrder
    Fax?: SortOrderInput | SortOrder
    Email?: SortOrder
    SupportRepId?: SortOrderInput | SortOrder
    _count?: customersCountOrderByAggregateInput
    _avg?: customersAvgOrderByAggregateInput
    _max?: customersMaxOrderByAggregateInput
    _min?: customersMinOrderByAggregateInput
    _sum?: customersSumOrderByAggregateInput
  }

  export type customersScalarWhereWithAggregatesInput = {
    AND?: customersScalarWhereWithAggregatesInput | customersScalarWhereWithAggregatesInput[]
    OR?: customersScalarWhereWithAggregatesInput[]
    NOT?: customersScalarWhereWithAggregatesInput | customersScalarWhereWithAggregatesInput[]
    CustomerId?: IntWithAggregatesFilter<"customers"> | number
    FirstName?: StringWithAggregatesFilter<"customers"> | string
    LastName?: StringWithAggregatesFilter<"customers"> | string
    ImageURL?: StringWithAggregatesFilter<"customers"> | string
    Company?: StringNullableWithAggregatesFilter<"customers"> | string | null
    Address?: StringNullableWithAggregatesFilter<"customers"> | string | null
    City?: StringNullableWithAggregatesFilter<"customers"> | string | null
    State?: StringNullableWithAggregatesFilter<"customers"> | string | null
    Country?: StringNullableWithAggregatesFilter<"customers"> | string | null
    PostalCode?: StringNullableWithAggregatesFilter<"customers"> | string | null
    Phone?: StringNullableWithAggregatesFilter<"customers"> | string | null
    Fax?: StringNullableWithAggregatesFilter<"customers"> | string | null
    Email?: StringWithAggregatesFilter<"customers"> | string
    SupportRepId?: IntNullableWithAggregatesFilter<"customers"> | number | null
  }

  export type employeesWhereInput = {
    AND?: employeesWhereInput | employeesWhereInput[]
    OR?: employeesWhereInput[]
    NOT?: employeesWhereInput | employeesWhereInput[]
    EmployeeId?: IntFilter<"employees"> | number
    LastName?: StringFilter<"employees"> | string
    FirstName?: StringFilter<"employees"> | string
    ImageURL?: StringFilter<"employees"> | string
    Title?: StringNullableFilter<"employees"> | string | null
    ReportsTo?: IntNullableFilter<"employees"> | number | null
    BirthDate?: DateTimeNullableFilter<"employees"> | Date | string | null
    HireDate?: DateTimeNullableFilter<"employees"> | Date | string | null
    Address?: StringNullableFilter<"employees"> | string | null
    City?: StringNullableFilter<"employees"> | string | null
    State?: StringNullableFilter<"employees"> | string | null
    Country?: StringNullableFilter<"employees"> | string | null
    PostalCode?: StringNullableFilter<"employees"> | string | null
    Phone?: StringNullableFilter<"employees"> | string | null
    Fax?: StringNullableFilter<"employees"> | string | null
    Email?: StringNullableFilter<"employees"> | string | null
    customers?: CustomersListRelationFilter
    employees?: XOR<EmployeesNullableRelationFilter, employeesWhereInput> | null
    other_employees?: EmployeesListRelationFilter
  }

  export type employeesOrderByWithRelationInput = {
    EmployeeId?: SortOrder
    LastName?: SortOrder
    FirstName?: SortOrder
    ImageURL?: SortOrder
    Title?: SortOrderInput | SortOrder
    ReportsTo?: SortOrderInput | SortOrder
    BirthDate?: SortOrderInput | SortOrder
    HireDate?: SortOrderInput | SortOrder
    Address?: SortOrderInput | SortOrder
    City?: SortOrderInput | SortOrder
    State?: SortOrderInput | SortOrder
    Country?: SortOrderInput | SortOrder
    PostalCode?: SortOrderInput | SortOrder
    Phone?: SortOrderInput | SortOrder
    Fax?: SortOrderInput | SortOrder
    Email?: SortOrderInput | SortOrder
    customers?: customersOrderByRelationAggregateInput
    employees?: employeesOrderByWithRelationInput
    other_employees?: employeesOrderByRelationAggregateInput
  }

  export type employeesWhereUniqueInput = Prisma.AtLeast<{
    EmployeeId?: number
    AND?: employeesWhereInput | employeesWhereInput[]
    OR?: employeesWhereInput[]
    NOT?: employeesWhereInput | employeesWhereInput[]
    LastName?: StringFilter<"employees"> | string
    FirstName?: StringFilter<"employees"> | string
    ImageURL?: StringFilter<"employees"> | string
    Title?: StringNullableFilter<"employees"> | string | null
    ReportsTo?: IntNullableFilter<"employees"> | number | null
    BirthDate?: DateTimeNullableFilter<"employees"> | Date | string | null
    HireDate?: DateTimeNullableFilter<"employees"> | Date | string | null
    Address?: StringNullableFilter<"employees"> | string | null
    City?: StringNullableFilter<"employees"> | string | null
    State?: StringNullableFilter<"employees"> | string | null
    Country?: StringNullableFilter<"employees"> | string | null
    PostalCode?: StringNullableFilter<"employees"> | string | null
    Phone?: StringNullableFilter<"employees"> | string | null
    Fax?: StringNullableFilter<"employees"> | string | null
    Email?: StringNullableFilter<"employees"> | string | null
    customers?: CustomersListRelationFilter
    employees?: XOR<EmployeesNullableRelationFilter, employeesWhereInput> | null
    other_employees?: EmployeesListRelationFilter
  }, "EmployeeId">

  export type employeesOrderByWithAggregationInput = {
    EmployeeId?: SortOrder
    LastName?: SortOrder
    FirstName?: SortOrder
    ImageURL?: SortOrder
    Title?: SortOrderInput | SortOrder
    ReportsTo?: SortOrderInput | SortOrder
    BirthDate?: SortOrderInput | SortOrder
    HireDate?: SortOrderInput | SortOrder
    Address?: SortOrderInput | SortOrder
    City?: SortOrderInput | SortOrder
    State?: SortOrderInput | SortOrder
    Country?: SortOrderInput | SortOrder
    PostalCode?: SortOrderInput | SortOrder
    Phone?: SortOrderInput | SortOrder
    Fax?: SortOrderInput | SortOrder
    Email?: SortOrderInput | SortOrder
    _count?: employeesCountOrderByAggregateInput
    _avg?: employeesAvgOrderByAggregateInput
    _max?: employeesMaxOrderByAggregateInput
    _min?: employeesMinOrderByAggregateInput
    _sum?: employeesSumOrderByAggregateInput
  }

  export type employeesScalarWhereWithAggregatesInput = {
    AND?: employeesScalarWhereWithAggregatesInput | employeesScalarWhereWithAggregatesInput[]
    OR?: employeesScalarWhereWithAggregatesInput[]
    NOT?: employeesScalarWhereWithAggregatesInput | employeesScalarWhereWithAggregatesInput[]
    EmployeeId?: IntWithAggregatesFilter<"employees"> | number
    LastName?: StringWithAggregatesFilter<"employees"> | string
    FirstName?: StringWithAggregatesFilter<"employees"> | string
    ImageURL?: StringWithAggregatesFilter<"employees"> | string
    Title?: StringNullableWithAggregatesFilter<"employees"> | string | null
    ReportsTo?: IntNullableWithAggregatesFilter<"employees"> | number | null
    BirthDate?: DateTimeNullableWithAggregatesFilter<"employees"> | Date | string | null
    HireDate?: DateTimeNullableWithAggregatesFilter<"employees"> | Date | string | null
    Address?: StringNullableWithAggregatesFilter<"employees"> | string | null
    City?: StringNullableWithAggregatesFilter<"employees"> | string | null
    State?: StringNullableWithAggregatesFilter<"employees"> | string | null
    Country?: StringNullableWithAggregatesFilter<"employees"> | string | null
    PostalCode?: StringNullableWithAggregatesFilter<"employees"> | string | null
    Phone?: StringNullableWithAggregatesFilter<"employees"> | string | null
    Fax?: StringNullableWithAggregatesFilter<"employees"> | string | null
    Email?: StringNullableWithAggregatesFilter<"employees"> | string | null
  }

  export type genresWhereInput = {
    AND?: genresWhereInput | genresWhereInput[]
    OR?: genresWhereInput[]
    NOT?: genresWhereInput | genresWhereInput[]
    GenreId?: IntFilter<"genres"> | number
    Name?: StringNullableFilter<"genres"> | string | null
    tracks?: TracksListRelationFilter
  }

  export type genresOrderByWithRelationInput = {
    GenreId?: SortOrder
    Name?: SortOrderInput | SortOrder
    tracks?: tracksOrderByRelationAggregateInput
  }

  export type genresWhereUniqueInput = Prisma.AtLeast<{
    GenreId?: number
    AND?: genresWhereInput | genresWhereInput[]
    OR?: genresWhereInput[]
    NOT?: genresWhereInput | genresWhereInput[]
    Name?: StringNullableFilter<"genres"> | string | null
    tracks?: TracksListRelationFilter
  }, "GenreId">

  export type genresOrderByWithAggregationInput = {
    GenreId?: SortOrder
    Name?: SortOrderInput | SortOrder
    _count?: genresCountOrderByAggregateInput
    _avg?: genresAvgOrderByAggregateInput
    _max?: genresMaxOrderByAggregateInput
    _min?: genresMinOrderByAggregateInput
    _sum?: genresSumOrderByAggregateInput
  }

  export type genresScalarWhereWithAggregatesInput = {
    AND?: genresScalarWhereWithAggregatesInput | genresScalarWhereWithAggregatesInput[]
    OR?: genresScalarWhereWithAggregatesInput[]
    NOT?: genresScalarWhereWithAggregatesInput | genresScalarWhereWithAggregatesInput[]
    GenreId?: IntWithAggregatesFilter<"genres"> | number
    Name?: StringNullableWithAggregatesFilter<"genres"> | string | null
  }

  export type invoice_itemsWhereInput = {
    AND?: invoice_itemsWhereInput | invoice_itemsWhereInput[]
    OR?: invoice_itemsWhereInput[]
    NOT?: invoice_itemsWhereInput | invoice_itemsWhereInput[]
    InvoiceLineId?: IntFilter<"invoice_items"> | number
    InvoiceId?: IntFilter<"invoice_items"> | number
    TrackId?: IntFilter<"invoice_items"> | number
    UnitPrice?: DecimalFilter<"invoice_items"> | Decimal | DecimalJsLike | number | string
    Quantity?: IntFilter<"invoice_items"> | number
    tracks?: XOR<TracksRelationFilter, tracksWhereInput>
    invoices?: XOR<InvoicesRelationFilter, invoicesWhereInput>
  }

  export type invoice_itemsOrderByWithRelationInput = {
    InvoiceLineId?: SortOrder
    InvoiceId?: SortOrder
    TrackId?: SortOrder
    UnitPrice?: SortOrder
    Quantity?: SortOrder
    tracks?: tracksOrderByWithRelationInput
    invoices?: invoicesOrderByWithRelationInput
  }

  export type invoice_itemsWhereUniqueInput = Prisma.AtLeast<{
    InvoiceLineId?: number
    AND?: invoice_itemsWhereInput | invoice_itemsWhereInput[]
    OR?: invoice_itemsWhereInput[]
    NOT?: invoice_itemsWhereInput | invoice_itemsWhereInput[]
    InvoiceId?: IntFilter<"invoice_items"> | number
    TrackId?: IntFilter<"invoice_items"> | number
    UnitPrice?: DecimalFilter<"invoice_items"> | Decimal | DecimalJsLike | number | string
    Quantity?: IntFilter<"invoice_items"> | number
    tracks?: XOR<TracksRelationFilter, tracksWhereInput>
    invoices?: XOR<InvoicesRelationFilter, invoicesWhereInput>
  }, "InvoiceLineId">

  export type invoice_itemsOrderByWithAggregationInput = {
    InvoiceLineId?: SortOrder
    InvoiceId?: SortOrder
    TrackId?: SortOrder
    UnitPrice?: SortOrder
    Quantity?: SortOrder
    _count?: invoice_itemsCountOrderByAggregateInput
    _avg?: invoice_itemsAvgOrderByAggregateInput
    _max?: invoice_itemsMaxOrderByAggregateInput
    _min?: invoice_itemsMinOrderByAggregateInput
    _sum?: invoice_itemsSumOrderByAggregateInput
  }

  export type invoice_itemsScalarWhereWithAggregatesInput = {
    AND?: invoice_itemsScalarWhereWithAggregatesInput | invoice_itemsScalarWhereWithAggregatesInput[]
    OR?: invoice_itemsScalarWhereWithAggregatesInput[]
    NOT?: invoice_itemsScalarWhereWithAggregatesInput | invoice_itemsScalarWhereWithAggregatesInput[]
    InvoiceLineId?: IntWithAggregatesFilter<"invoice_items"> | number
    InvoiceId?: IntWithAggregatesFilter<"invoice_items"> | number
    TrackId?: IntWithAggregatesFilter<"invoice_items"> | number
    UnitPrice?: DecimalWithAggregatesFilter<"invoice_items"> | Decimal | DecimalJsLike | number | string
    Quantity?: IntWithAggregatesFilter<"invoice_items"> | number
  }

  export type invoicesWhereInput = {
    AND?: invoicesWhereInput | invoicesWhereInput[]
    OR?: invoicesWhereInput[]
    NOT?: invoicesWhereInput | invoicesWhereInput[]
    InvoiceId?: IntFilter<"invoices"> | number
    CustomerId?: IntFilter<"invoices"> | number
    InvoiceDate?: DateTimeFilter<"invoices"> | Date | string
    BillingAddress?: StringNullableFilter<"invoices"> | string | null
    BillingCity?: StringNullableFilter<"invoices"> | string | null
    BillingState?: StringNullableFilter<"invoices"> | string | null
    BillingCountry?: StringNullableFilter<"invoices"> | string | null
    BillingPostalCode?: StringNullableFilter<"invoices"> | string | null
    Total?: DecimalFilter<"invoices"> | Decimal | DecimalJsLike | number | string
    invoice_items?: Invoice_itemsListRelationFilter
    customers?: XOR<CustomersRelationFilter, customersWhereInput>
  }

  export type invoicesOrderByWithRelationInput = {
    InvoiceId?: SortOrder
    CustomerId?: SortOrder
    InvoiceDate?: SortOrder
    BillingAddress?: SortOrderInput | SortOrder
    BillingCity?: SortOrderInput | SortOrder
    BillingState?: SortOrderInput | SortOrder
    BillingCountry?: SortOrderInput | SortOrder
    BillingPostalCode?: SortOrderInput | SortOrder
    Total?: SortOrder
    invoice_items?: invoice_itemsOrderByRelationAggregateInput
    customers?: customersOrderByWithRelationInput
  }

  export type invoicesWhereUniqueInput = Prisma.AtLeast<{
    InvoiceId?: number
    AND?: invoicesWhereInput | invoicesWhereInput[]
    OR?: invoicesWhereInput[]
    NOT?: invoicesWhereInput | invoicesWhereInput[]
    CustomerId?: IntFilter<"invoices"> | number
    InvoiceDate?: DateTimeFilter<"invoices"> | Date | string
    BillingAddress?: StringNullableFilter<"invoices"> | string | null
    BillingCity?: StringNullableFilter<"invoices"> | string | null
    BillingState?: StringNullableFilter<"invoices"> | string | null
    BillingCountry?: StringNullableFilter<"invoices"> | string | null
    BillingPostalCode?: StringNullableFilter<"invoices"> | string | null
    Total?: DecimalFilter<"invoices"> | Decimal | DecimalJsLike | number | string
    invoice_items?: Invoice_itemsListRelationFilter
    customers?: XOR<CustomersRelationFilter, customersWhereInput>
  }, "InvoiceId">

  export type invoicesOrderByWithAggregationInput = {
    InvoiceId?: SortOrder
    CustomerId?: SortOrder
    InvoiceDate?: SortOrder
    BillingAddress?: SortOrderInput | SortOrder
    BillingCity?: SortOrderInput | SortOrder
    BillingState?: SortOrderInput | SortOrder
    BillingCountry?: SortOrderInput | SortOrder
    BillingPostalCode?: SortOrderInput | SortOrder
    Total?: SortOrder
    _count?: invoicesCountOrderByAggregateInput
    _avg?: invoicesAvgOrderByAggregateInput
    _max?: invoicesMaxOrderByAggregateInput
    _min?: invoicesMinOrderByAggregateInput
    _sum?: invoicesSumOrderByAggregateInput
  }

  export type invoicesScalarWhereWithAggregatesInput = {
    AND?: invoicesScalarWhereWithAggregatesInput | invoicesScalarWhereWithAggregatesInput[]
    OR?: invoicesScalarWhereWithAggregatesInput[]
    NOT?: invoicesScalarWhereWithAggregatesInput | invoicesScalarWhereWithAggregatesInput[]
    InvoiceId?: IntWithAggregatesFilter<"invoices"> | number
    CustomerId?: IntWithAggregatesFilter<"invoices"> | number
    InvoiceDate?: DateTimeWithAggregatesFilter<"invoices"> | Date | string
    BillingAddress?: StringNullableWithAggregatesFilter<"invoices"> | string | null
    BillingCity?: StringNullableWithAggregatesFilter<"invoices"> | string | null
    BillingState?: StringNullableWithAggregatesFilter<"invoices"> | string | null
    BillingCountry?: StringNullableWithAggregatesFilter<"invoices"> | string | null
    BillingPostalCode?: StringNullableWithAggregatesFilter<"invoices"> | string | null
    Total?: DecimalWithAggregatesFilter<"invoices"> | Decimal | DecimalJsLike | number | string
  }

  export type media_typesWhereInput = {
    AND?: media_typesWhereInput | media_typesWhereInput[]
    OR?: media_typesWhereInput[]
    NOT?: media_typesWhereInput | media_typesWhereInput[]
    MediaTypeId?: IntFilter<"media_types"> | number
    Name?: StringNullableFilter<"media_types"> | string | null
    tracks?: TracksListRelationFilter
  }

  export type media_typesOrderByWithRelationInput = {
    MediaTypeId?: SortOrder
    Name?: SortOrderInput | SortOrder
    tracks?: tracksOrderByRelationAggregateInput
  }

  export type media_typesWhereUniqueInput = Prisma.AtLeast<{
    MediaTypeId?: number
    AND?: media_typesWhereInput | media_typesWhereInput[]
    OR?: media_typesWhereInput[]
    NOT?: media_typesWhereInput | media_typesWhereInput[]
    Name?: StringNullableFilter<"media_types"> | string | null
    tracks?: TracksListRelationFilter
  }, "MediaTypeId">

  export type media_typesOrderByWithAggregationInput = {
    MediaTypeId?: SortOrder
    Name?: SortOrderInput | SortOrder
    _count?: media_typesCountOrderByAggregateInput
    _avg?: media_typesAvgOrderByAggregateInput
    _max?: media_typesMaxOrderByAggregateInput
    _min?: media_typesMinOrderByAggregateInput
    _sum?: media_typesSumOrderByAggregateInput
  }

  export type media_typesScalarWhereWithAggregatesInput = {
    AND?: media_typesScalarWhereWithAggregatesInput | media_typesScalarWhereWithAggregatesInput[]
    OR?: media_typesScalarWhereWithAggregatesInput[]
    NOT?: media_typesScalarWhereWithAggregatesInput | media_typesScalarWhereWithAggregatesInput[]
    MediaTypeId?: IntWithAggregatesFilter<"media_types"> | number
    Name?: StringNullableWithAggregatesFilter<"media_types"> | string | null
  }

  export type playlist_trackWhereInput = {
    AND?: playlist_trackWhereInput | playlist_trackWhereInput[]
    OR?: playlist_trackWhereInput[]
    NOT?: playlist_trackWhereInput | playlist_trackWhereInput[]
    PlaylistId?: IntFilter<"playlist_track"> | number
    TrackId?: IntFilter<"playlist_track"> | number
    tracks?: XOR<TracksRelationFilter, tracksWhereInput>
    playlists?: XOR<PlaylistsRelationFilter, playlistsWhereInput>
  }

  export type playlist_trackOrderByWithRelationInput = {
    PlaylistId?: SortOrder
    TrackId?: SortOrder
    tracks?: tracksOrderByWithRelationInput
    playlists?: playlistsOrderByWithRelationInput
  }

  export type playlist_trackWhereUniqueInput = Prisma.AtLeast<{
    PlaylistId_TrackId?: playlist_trackPlaylistIdTrackIdCompoundUniqueInput
    AND?: playlist_trackWhereInput | playlist_trackWhereInput[]
    OR?: playlist_trackWhereInput[]
    NOT?: playlist_trackWhereInput | playlist_trackWhereInput[]
    PlaylistId?: IntFilter<"playlist_track"> | number
    TrackId?: IntFilter<"playlist_track"> | number
    tracks?: XOR<TracksRelationFilter, tracksWhereInput>
    playlists?: XOR<PlaylistsRelationFilter, playlistsWhereInput>
  }, "PlaylistId_TrackId">

  export type playlist_trackOrderByWithAggregationInput = {
    PlaylistId?: SortOrder
    TrackId?: SortOrder
    _count?: playlist_trackCountOrderByAggregateInput
    _avg?: playlist_trackAvgOrderByAggregateInput
    _max?: playlist_trackMaxOrderByAggregateInput
    _min?: playlist_trackMinOrderByAggregateInput
    _sum?: playlist_trackSumOrderByAggregateInput
  }

  export type playlist_trackScalarWhereWithAggregatesInput = {
    AND?: playlist_trackScalarWhereWithAggregatesInput | playlist_trackScalarWhereWithAggregatesInput[]
    OR?: playlist_trackScalarWhereWithAggregatesInput[]
    NOT?: playlist_trackScalarWhereWithAggregatesInput | playlist_trackScalarWhereWithAggregatesInput[]
    PlaylistId?: IntWithAggregatesFilter<"playlist_track"> | number
    TrackId?: IntWithAggregatesFilter<"playlist_track"> | number
  }

  export type playlistsWhereInput = {
    AND?: playlistsWhereInput | playlistsWhereInput[]
    OR?: playlistsWhereInput[]
    NOT?: playlistsWhereInput | playlistsWhereInput[]
    PlaylistId?: IntFilter<"playlists"> | number
    Name?: StringNullableFilter<"playlists"> | string | null
    playlist_track?: Playlist_trackListRelationFilter
  }

  export type playlistsOrderByWithRelationInput = {
    PlaylistId?: SortOrder
    Name?: SortOrderInput | SortOrder
    playlist_track?: playlist_trackOrderByRelationAggregateInput
  }

  export type playlistsWhereUniqueInput = Prisma.AtLeast<{
    PlaylistId?: number
    AND?: playlistsWhereInput | playlistsWhereInput[]
    OR?: playlistsWhereInput[]
    NOT?: playlistsWhereInput | playlistsWhereInput[]
    Name?: StringNullableFilter<"playlists"> | string | null
    playlist_track?: Playlist_trackListRelationFilter
  }, "PlaylistId">

  export type playlistsOrderByWithAggregationInput = {
    PlaylistId?: SortOrder
    Name?: SortOrderInput | SortOrder
    _count?: playlistsCountOrderByAggregateInput
    _avg?: playlistsAvgOrderByAggregateInput
    _max?: playlistsMaxOrderByAggregateInput
    _min?: playlistsMinOrderByAggregateInput
    _sum?: playlistsSumOrderByAggregateInput
  }

  export type playlistsScalarWhereWithAggregatesInput = {
    AND?: playlistsScalarWhereWithAggregatesInput | playlistsScalarWhereWithAggregatesInput[]
    OR?: playlistsScalarWhereWithAggregatesInput[]
    NOT?: playlistsScalarWhereWithAggregatesInput | playlistsScalarWhereWithAggregatesInput[]
    PlaylistId?: IntWithAggregatesFilter<"playlists"> | number
    Name?: StringNullableWithAggregatesFilter<"playlists"> | string | null
  }

  export type tracksWhereInput = {
    AND?: tracksWhereInput | tracksWhereInput[]
    OR?: tracksWhereInput[]
    NOT?: tracksWhereInput | tracksWhereInput[]
    TrackId?: IntFilter<"tracks"> | number
    Name?: StringFilter<"tracks"> | string
    AlbumId?: IntNullableFilter<"tracks"> | number | null
    MediaTypeId?: IntFilter<"tracks"> | number
    GenreId?: IntNullableFilter<"tracks"> | number | null
    Composer?: StringNullableFilter<"tracks"> | string | null
    Milliseconds?: IntFilter<"tracks"> | number
    Bytes?: IntNullableFilter<"tracks"> | number | null
    UnitPrice?: DecimalFilter<"tracks"> | Decimal | DecimalJsLike | number | string
    invoice_items?: Invoice_itemsListRelationFilter
    playlist_track?: Playlist_trackListRelationFilter
    media_types?: XOR<Media_typesRelationFilter, media_typesWhereInput>
    genres?: XOR<GenresNullableRelationFilter, genresWhereInput> | null
    albums?: XOR<AlbumsNullableRelationFilter, albumsWhereInput> | null
  }

  export type tracksOrderByWithRelationInput = {
    TrackId?: SortOrder
    Name?: SortOrder
    AlbumId?: SortOrderInput | SortOrder
    MediaTypeId?: SortOrder
    GenreId?: SortOrderInput | SortOrder
    Composer?: SortOrderInput | SortOrder
    Milliseconds?: SortOrder
    Bytes?: SortOrderInput | SortOrder
    UnitPrice?: SortOrder
    invoice_items?: invoice_itemsOrderByRelationAggregateInput
    playlist_track?: playlist_trackOrderByRelationAggregateInput
    media_types?: media_typesOrderByWithRelationInput
    genres?: genresOrderByWithRelationInput
    albums?: albumsOrderByWithRelationInput
  }

  export type tracksWhereUniqueInput = Prisma.AtLeast<{
    TrackId?: number
    AND?: tracksWhereInput | tracksWhereInput[]
    OR?: tracksWhereInput[]
    NOT?: tracksWhereInput | tracksWhereInput[]
    Name?: StringFilter<"tracks"> | string
    AlbumId?: IntNullableFilter<"tracks"> | number | null
    MediaTypeId?: IntFilter<"tracks"> | number
    GenreId?: IntNullableFilter<"tracks"> | number | null
    Composer?: StringNullableFilter<"tracks"> | string | null
    Milliseconds?: IntFilter<"tracks"> | number
    Bytes?: IntNullableFilter<"tracks"> | number | null
    UnitPrice?: DecimalFilter<"tracks"> | Decimal | DecimalJsLike | number | string
    invoice_items?: Invoice_itemsListRelationFilter
    playlist_track?: Playlist_trackListRelationFilter
    media_types?: XOR<Media_typesRelationFilter, media_typesWhereInput>
    genres?: XOR<GenresNullableRelationFilter, genresWhereInput> | null
    albums?: XOR<AlbumsNullableRelationFilter, albumsWhereInput> | null
  }, "TrackId">

  export type tracksOrderByWithAggregationInput = {
    TrackId?: SortOrder
    Name?: SortOrder
    AlbumId?: SortOrderInput | SortOrder
    MediaTypeId?: SortOrder
    GenreId?: SortOrderInput | SortOrder
    Composer?: SortOrderInput | SortOrder
    Milliseconds?: SortOrder
    Bytes?: SortOrderInput | SortOrder
    UnitPrice?: SortOrder
    _count?: tracksCountOrderByAggregateInput
    _avg?: tracksAvgOrderByAggregateInput
    _max?: tracksMaxOrderByAggregateInput
    _min?: tracksMinOrderByAggregateInput
    _sum?: tracksSumOrderByAggregateInput
  }

  export type tracksScalarWhereWithAggregatesInput = {
    AND?: tracksScalarWhereWithAggregatesInput | tracksScalarWhereWithAggregatesInput[]
    OR?: tracksScalarWhereWithAggregatesInput[]
    NOT?: tracksScalarWhereWithAggregatesInput | tracksScalarWhereWithAggregatesInput[]
    TrackId?: IntWithAggregatesFilter<"tracks"> | number
    Name?: StringWithAggregatesFilter<"tracks"> | string
    AlbumId?: IntNullableWithAggregatesFilter<"tracks"> | number | null
    MediaTypeId?: IntWithAggregatesFilter<"tracks"> | number
    GenreId?: IntNullableWithAggregatesFilter<"tracks"> | number | null
    Composer?: StringNullableWithAggregatesFilter<"tracks"> | string | null
    Milliseconds?: IntWithAggregatesFilter<"tracks"> | number
    Bytes?: IntNullableWithAggregatesFilter<"tracks"> | number | null
    UnitPrice?: DecimalWithAggregatesFilter<"tracks"> | Decimal | DecimalJsLike | number | string
  }

  export type albumsCreateInput = {
    Title: string
    artists: artistsCreateNestedOneWithoutAlbumsInput
    tracks?: tracksCreateNestedManyWithoutAlbumsInput
  }

  export type albumsUncheckedCreateInput = {
    AlbumId?: number
    Title: string
    ArtistId: number
    tracks?: tracksUncheckedCreateNestedManyWithoutAlbumsInput
  }

  export type albumsUpdateInput = {
    Title?: StringFieldUpdateOperationsInput | string
    artists?: artistsUpdateOneRequiredWithoutAlbumsNestedInput
    tracks?: tracksUpdateManyWithoutAlbumsNestedInput
  }

  export type albumsUncheckedUpdateInput = {
    AlbumId?: IntFieldUpdateOperationsInput | number
    Title?: StringFieldUpdateOperationsInput | string
    ArtistId?: IntFieldUpdateOperationsInput | number
    tracks?: tracksUncheckedUpdateManyWithoutAlbumsNestedInput
  }

  export type albumsCreateManyInput = {
    AlbumId?: number
    Title: string
    ArtistId: number
  }

  export type albumsUpdateManyMutationInput = {
    Title?: StringFieldUpdateOperationsInput | string
  }

  export type albumsUncheckedUpdateManyInput = {
    AlbumId?: IntFieldUpdateOperationsInput | number
    Title?: StringFieldUpdateOperationsInput | string
    ArtistId?: IntFieldUpdateOperationsInput | number
  }

  export type artistsCreateInput = {
    Name?: string | null
    albums?: albumsCreateNestedManyWithoutArtistsInput
  }

  export type artistsUncheckedCreateInput = {
    ArtistId?: number
    Name?: string | null
    albums?: albumsUncheckedCreateNestedManyWithoutArtistsInput
  }

  export type artistsUpdateInput = {
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    albums?: albumsUpdateManyWithoutArtistsNestedInput
  }

  export type artistsUncheckedUpdateInput = {
    ArtistId?: IntFieldUpdateOperationsInput | number
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    albums?: albumsUncheckedUpdateManyWithoutArtistsNestedInput
  }

  export type artistsCreateManyInput = {
    ArtistId?: number
    Name?: string | null
  }

  export type artistsUpdateManyMutationInput = {
    Name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type artistsUncheckedUpdateManyInput = {
    ArtistId?: IntFieldUpdateOperationsInput | number
    Name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type customersCreateInput = {
    FirstName: string
    LastName: string
    ImageURL?: string
    Company?: string | null
    Address?: string | null
    City?: string | null
    State?: string | null
    Country?: string | null
    PostalCode?: string | null
    Phone?: string | null
    Fax?: string | null
    Email: string
    employees?: employeesCreateNestedOneWithoutCustomersInput
    invoices?: invoicesCreateNestedManyWithoutCustomersInput
  }

  export type customersUncheckedCreateInput = {
    CustomerId?: number
    FirstName: string
    LastName: string
    ImageURL?: string
    Company?: string | null
    Address?: string | null
    City?: string | null
    State?: string | null
    Country?: string | null
    PostalCode?: string | null
    Phone?: string | null
    Fax?: string | null
    Email: string
    SupportRepId?: number | null
    invoices?: invoicesUncheckedCreateNestedManyWithoutCustomersInput
  }

  export type customersUpdateInput = {
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    ImageURL?: StringFieldUpdateOperationsInput | string
    Company?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    State?: NullableStringFieldUpdateOperationsInput | string | null
    Country?: NullableStringFieldUpdateOperationsInput | string | null
    PostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Fax?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: StringFieldUpdateOperationsInput | string
    employees?: employeesUpdateOneWithoutCustomersNestedInput
    invoices?: invoicesUpdateManyWithoutCustomersNestedInput
  }

  export type customersUncheckedUpdateInput = {
    CustomerId?: IntFieldUpdateOperationsInput | number
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    ImageURL?: StringFieldUpdateOperationsInput | string
    Company?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    State?: NullableStringFieldUpdateOperationsInput | string | null
    Country?: NullableStringFieldUpdateOperationsInput | string | null
    PostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Fax?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: StringFieldUpdateOperationsInput | string
    SupportRepId?: NullableIntFieldUpdateOperationsInput | number | null
    invoices?: invoicesUncheckedUpdateManyWithoutCustomersNestedInput
  }

  export type customersCreateManyInput = {
    CustomerId?: number
    FirstName: string
    LastName: string
    ImageURL?: string
    Company?: string | null
    Address?: string | null
    City?: string | null
    State?: string | null
    Country?: string | null
    PostalCode?: string | null
    Phone?: string | null
    Fax?: string | null
    Email: string
    SupportRepId?: number | null
  }

  export type customersUpdateManyMutationInput = {
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    ImageURL?: StringFieldUpdateOperationsInput | string
    Company?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    State?: NullableStringFieldUpdateOperationsInput | string | null
    Country?: NullableStringFieldUpdateOperationsInput | string | null
    PostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Fax?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: StringFieldUpdateOperationsInput | string
  }

  export type customersUncheckedUpdateManyInput = {
    CustomerId?: IntFieldUpdateOperationsInput | number
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    ImageURL?: StringFieldUpdateOperationsInput | string
    Company?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    State?: NullableStringFieldUpdateOperationsInput | string | null
    Country?: NullableStringFieldUpdateOperationsInput | string | null
    PostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Fax?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: StringFieldUpdateOperationsInput | string
    SupportRepId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type employeesCreateInput = {
    LastName: string
    FirstName: string
    ImageURL?: string
    Title?: string | null
    BirthDate?: Date | string | null
    HireDate?: Date | string | null
    Address?: string | null
    City?: string | null
    State?: string | null
    Country?: string | null
    PostalCode?: string | null
    Phone?: string | null
    Fax?: string | null
    Email?: string | null
    customers?: customersCreateNestedManyWithoutEmployeesInput
    employees?: employeesCreateNestedOneWithoutOther_employeesInput
    other_employees?: employeesCreateNestedManyWithoutEmployeesInput
  }

  export type employeesUncheckedCreateInput = {
    EmployeeId?: number
    LastName: string
    FirstName: string
    ImageURL?: string
    Title?: string | null
    ReportsTo?: number | null
    BirthDate?: Date | string | null
    HireDate?: Date | string | null
    Address?: string | null
    City?: string | null
    State?: string | null
    Country?: string | null
    PostalCode?: string | null
    Phone?: string | null
    Fax?: string | null
    Email?: string | null
    customers?: customersUncheckedCreateNestedManyWithoutEmployeesInput
    other_employees?: employeesUncheckedCreateNestedManyWithoutEmployeesInput
  }

  export type employeesUpdateInput = {
    LastName?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    ImageURL?: StringFieldUpdateOperationsInput | string
    Title?: NullableStringFieldUpdateOperationsInput | string | null
    BirthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    HireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    State?: NullableStringFieldUpdateOperationsInput | string | null
    Country?: NullableStringFieldUpdateOperationsInput | string | null
    PostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Fax?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    customers?: customersUpdateManyWithoutEmployeesNestedInput
    employees?: employeesUpdateOneWithoutOther_employeesNestedInput
    other_employees?: employeesUpdateManyWithoutEmployeesNestedInput
  }

  export type employeesUncheckedUpdateInput = {
    EmployeeId?: IntFieldUpdateOperationsInput | number
    LastName?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    ImageURL?: StringFieldUpdateOperationsInput | string
    Title?: NullableStringFieldUpdateOperationsInput | string | null
    ReportsTo?: NullableIntFieldUpdateOperationsInput | number | null
    BirthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    HireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    State?: NullableStringFieldUpdateOperationsInput | string | null
    Country?: NullableStringFieldUpdateOperationsInput | string | null
    PostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Fax?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    customers?: customersUncheckedUpdateManyWithoutEmployeesNestedInput
    other_employees?: employeesUncheckedUpdateManyWithoutEmployeesNestedInput
  }

  export type employeesCreateManyInput = {
    EmployeeId?: number
    LastName: string
    FirstName: string
    ImageURL?: string
    Title?: string | null
    ReportsTo?: number | null
    BirthDate?: Date | string | null
    HireDate?: Date | string | null
    Address?: string | null
    City?: string | null
    State?: string | null
    Country?: string | null
    PostalCode?: string | null
    Phone?: string | null
    Fax?: string | null
    Email?: string | null
  }

  export type employeesUpdateManyMutationInput = {
    LastName?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    ImageURL?: StringFieldUpdateOperationsInput | string
    Title?: NullableStringFieldUpdateOperationsInput | string | null
    BirthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    HireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    State?: NullableStringFieldUpdateOperationsInput | string | null
    Country?: NullableStringFieldUpdateOperationsInput | string | null
    PostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Fax?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type employeesUncheckedUpdateManyInput = {
    EmployeeId?: IntFieldUpdateOperationsInput | number
    LastName?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    ImageURL?: StringFieldUpdateOperationsInput | string
    Title?: NullableStringFieldUpdateOperationsInput | string | null
    ReportsTo?: NullableIntFieldUpdateOperationsInput | number | null
    BirthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    HireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    State?: NullableStringFieldUpdateOperationsInput | string | null
    Country?: NullableStringFieldUpdateOperationsInput | string | null
    PostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Fax?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type genresCreateInput = {
    Name?: string | null
    tracks?: tracksCreateNestedManyWithoutGenresInput
  }

  export type genresUncheckedCreateInput = {
    GenreId?: number
    Name?: string | null
    tracks?: tracksUncheckedCreateNestedManyWithoutGenresInput
  }

  export type genresUpdateInput = {
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    tracks?: tracksUpdateManyWithoutGenresNestedInput
  }

  export type genresUncheckedUpdateInput = {
    GenreId?: IntFieldUpdateOperationsInput | number
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    tracks?: tracksUncheckedUpdateManyWithoutGenresNestedInput
  }

  export type genresCreateManyInput = {
    GenreId?: number
    Name?: string | null
  }

  export type genresUpdateManyMutationInput = {
    Name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type genresUncheckedUpdateManyInput = {
    GenreId?: IntFieldUpdateOperationsInput | number
    Name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type invoice_itemsCreateInput = {
    UnitPrice: Decimal | DecimalJsLike | number | string
    Quantity: number
    tracks: tracksCreateNestedOneWithoutInvoice_itemsInput
    invoices: invoicesCreateNestedOneWithoutInvoice_itemsInput
  }

  export type invoice_itemsUncheckedCreateInput = {
    InvoiceLineId?: number
    InvoiceId: number
    TrackId: number
    UnitPrice: Decimal | DecimalJsLike | number | string
    Quantity: number
  }

  export type invoice_itemsUpdateInput = {
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Quantity?: IntFieldUpdateOperationsInput | number
    tracks?: tracksUpdateOneRequiredWithoutInvoice_itemsNestedInput
    invoices?: invoicesUpdateOneRequiredWithoutInvoice_itemsNestedInput
  }

  export type invoice_itemsUncheckedUpdateInput = {
    InvoiceLineId?: IntFieldUpdateOperationsInput | number
    InvoiceId?: IntFieldUpdateOperationsInput | number
    TrackId?: IntFieldUpdateOperationsInput | number
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Quantity?: IntFieldUpdateOperationsInput | number
  }

  export type invoice_itemsCreateManyInput = {
    InvoiceLineId?: number
    InvoiceId: number
    TrackId: number
    UnitPrice: Decimal | DecimalJsLike | number | string
    Quantity: number
  }

  export type invoice_itemsUpdateManyMutationInput = {
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Quantity?: IntFieldUpdateOperationsInput | number
  }

  export type invoice_itemsUncheckedUpdateManyInput = {
    InvoiceLineId?: IntFieldUpdateOperationsInput | number
    InvoiceId?: IntFieldUpdateOperationsInput | number
    TrackId?: IntFieldUpdateOperationsInput | number
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Quantity?: IntFieldUpdateOperationsInput | number
  }

  export type invoicesCreateInput = {
    InvoiceDate: Date | string
    BillingAddress?: string | null
    BillingCity?: string | null
    BillingState?: string | null
    BillingCountry?: string | null
    BillingPostalCode?: string | null
    Total: Decimal | DecimalJsLike | number | string
    invoice_items?: invoice_itemsCreateNestedManyWithoutInvoicesInput
    customers: customersCreateNestedOneWithoutInvoicesInput
  }

  export type invoicesUncheckedCreateInput = {
    InvoiceId?: number
    CustomerId: number
    InvoiceDate: Date | string
    BillingAddress?: string | null
    BillingCity?: string | null
    BillingState?: string | null
    BillingCountry?: string | null
    BillingPostalCode?: string | null
    Total: Decimal | DecimalJsLike | number | string
    invoice_items?: invoice_itemsUncheckedCreateNestedManyWithoutInvoicesInput
  }

  export type invoicesUpdateInput = {
    InvoiceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    BillingAddress?: NullableStringFieldUpdateOperationsInput | string | null
    BillingCity?: NullableStringFieldUpdateOperationsInput | string | null
    BillingState?: NullableStringFieldUpdateOperationsInput | string | null
    BillingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    BillingPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    invoice_items?: invoice_itemsUpdateManyWithoutInvoicesNestedInput
    customers?: customersUpdateOneRequiredWithoutInvoicesNestedInput
  }

  export type invoicesUncheckedUpdateInput = {
    InvoiceId?: IntFieldUpdateOperationsInput | number
    CustomerId?: IntFieldUpdateOperationsInput | number
    InvoiceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    BillingAddress?: NullableStringFieldUpdateOperationsInput | string | null
    BillingCity?: NullableStringFieldUpdateOperationsInput | string | null
    BillingState?: NullableStringFieldUpdateOperationsInput | string | null
    BillingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    BillingPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    invoice_items?: invoice_itemsUncheckedUpdateManyWithoutInvoicesNestedInput
  }

  export type invoicesCreateManyInput = {
    InvoiceId?: number
    CustomerId: number
    InvoiceDate: Date | string
    BillingAddress?: string | null
    BillingCity?: string | null
    BillingState?: string | null
    BillingCountry?: string | null
    BillingPostalCode?: string | null
    Total: Decimal | DecimalJsLike | number | string
  }

  export type invoicesUpdateManyMutationInput = {
    InvoiceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    BillingAddress?: NullableStringFieldUpdateOperationsInput | string | null
    BillingCity?: NullableStringFieldUpdateOperationsInput | string | null
    BillingState?: NullableStringFieldUpdateOperationsInput | string | null
    BillingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    BillingPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type invoicesUncheckedUpdateManyInput = {
    InvoiceId?: IntFieldUpdateOperationsInput | number
    CustomerId?: IntFieldUpdateOperationsInput | number
    InvoiceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    BillingAddress?: NullableStringFieldUpdateOperationsInput | string | null
    BillingCity?: NullableStringFieldUpdateOperationsInput | string | null
    BillingState?: NullableStringFieldUpdateOperationsInput | string | null
    BillingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    BillingPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type media_typesCreateInput = {
    Name?: string | null
    tracks?: tracksCreateNestedManyWithoutMedia_typesInput
  }

  export type media_typesUncheckedCreateInput = {
    MediaTypeId?: number
    Name?: string | null
    tracks?: tracksUncheckedCreateNestedManyWithoutMedia_typesInput
  }

  export type media_typesUpdateInput = {
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    tracks?: tracksUpdateManyWithoutMedia_typesNestedInput
  }

  export type media_typesUncheckedUpdateInput = {
    MediaTypeId?: IntFieldUpdateOperationsInput | number
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    tracks?: tracksUncheckedUpdateManyWithoutMedia_typesNestedInput
  }

  export type media_typesCreateManyInput = {
    MediaTypeId?: number
    Name?: string | null
  }

  export type media_typesUpdateManyMutationInput = {
    Name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type media_typesUncheckedUpdateManyInput = {
    MediaTypeId?: IntFieldUpdateOperationsInput | number
    Name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type playlist_trackCreateInput = {
    tracks: tracksCreateNestedOneWithoutPlaylist_trackInput
    playlists: playlistsCreateNestedOneWithoutPlaylist_trackInput
  }

  export type playlist_trackUncheckedCreateInput = {
    PlaylistId: number
    TrackId: number
  }

  export type playlist_trackUpdateInput = {
    tracks?: tracksUpdateOneRequiredWithoutPlaylist_trackNestedInput
    playlists?: playlistsUpdateOneRequiredWithoutPlaylist_trackNestedInput
  }

  export type playlist_trackUncheckedUpdateInput = {
    PlaylistId?: IntFieldUpdateOperationsInput | number
    TrackId?: IntFieldUpdateOperationsInput | number
  }

  export type playlist_trackCreateManyInput = {
    PlaylistId: number
    TrackId: number
  }

  export type playlist_trackUpdateManyMutationInput = {

  }

  export type playlist_trackUncheckedUpdateManyInput = {
    PlaylistId?: IntFieldUpdateOperationsInput | number
    TrackId?: IntFieldUpdateOperationsInput | number
  }

  export type playlistsCreateInput = {
    Name?: string | null
    playlist_track?: playlist_trackCreateNestedManyWithoutPlaylistsInput
  }

  export type playlistsUncheckedCreateInput = {
    PlaylistId?: number
    Name?: string | null
    playlist_track?: playlist_trackUncheckedCreateNestedManyWithoutPlaylistsInput
  }

  export type playlistsUpdateInput = {
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    playlist_track?: playlist_trackUpdateManyWithoutPlaylistsNestedInput
  }

  export type playlistsUncheckedUpdateInput = {
    PlaylistId?: IntFieldUpdateOperationsInput | number
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    playlist_track?: playlist_trackUncheckedUpdateManyWithoutPlaylistsNestedInput
  }

  export type playlistsCreateManyInput = {
    PlaylistId?: number
    Name?: string | null
  }

  export type playlistsUpdateManyMutationInput = {
    Name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type playlistsUncheckedUpdateManyInput = {
    PlaylistId?: IntFieldUpdateOperationsInput | number
    Name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tracksCreateInput = {
    Name: string
    Composer?: string | null
    Milliseconds: number
    Bytes?: number | null
    UnitPrice: Decimal | DecimalJsLike | number | string
    invoice_items?: invoice_itemsCreateNestedManyWithoutTracksInput
    playlist_track?: playlist_trackCreateNestedManyWithoutTracksInput
    media_types: media_typesCreateNestedOneWithoutTracksInput
    genres?: genresCreateNestedOneWithoutTracksInput
    albums?: albumsCreateNestedOneWithoutTracksInput
  }

  export type tracksUncheckedCreateInput = {
    TrackId?: number
    Name: string
    AlbumId?: number | null
    MediaTypeId: number
    GenreId?: number | null
    Composer?: string | null
    Milliseconds: number
    Bytes?: number | null
    UnitPrice: Decimal | DecimalJsLike | number | string
    invoice_items?: invoice_itemsUncheckedCreateNestedManyWithoutTracksInput
    playlist_track?: playlist_trackUncheckedCreateNestedManyWithoutTracksInput
  }

  export type tracksUpdateInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Composer?: NullableStringFieldUpdateOperationsInput | string | null
    Milliseconds?: IntFieldUpdateOperationsInput | number
    Bytes?: NullableIntFieldUpdateOperationsInput | number | null
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    invoice_items?: invoice_itemsUpdateManyWithoutTracksNestedInput
    playlist_track?: playlist_trackUpdateManyWithoutTracksNestedInput
    media_types?: media_typesUpdateOneRequiredWithoutTracksNestedInput
    genres?: genresUpdateOneWithoutTracksNestedInput
    albums?: albumsUpdateOneWithoutTracksNestedInput
  }

  export type tracksUncheckedUpdateInput = {
    TrackId?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    AlbumId?: NullableIntFieldUpdateOperationsInput | number | null
    MediaTypeId?: IntFieldUpdateOperationsInput | number
    GenreId?: NullableIntFieldUpdateOperationsInput | number | null
    Composer?: NullableStringFieldUpdateOperationsInput | string | null
    Milliseconds?: IntFieldUpdateOperationsInput | number
    Bytes?: NullableIntFieldUpdateOperationsInput | number | null
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    invoice_items?: invoice_itemsUncheckedUpdateManyWithoutTracksNestedInput
    playlist_track?: playlist_trackUncheckedUpdateManyWithoutTracksNestedInput
  }

  export type tracksCreateManyInput = {
    TrackId?: number
    Name: string
    AlbumId?: number | null
    MediaTypeId: number
    GenreId?: number | null
    Composer?: string | null
    Milliseconds: number
    Bytes?: number | null
    UnitPrice: Decimal | DecimalJsLike | number | string
  }

  export type tracksUpdateManyMutationInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Composer?: NullableStringFieldUpdateOperationsInput | string | null
    Milliseconds?: IntFieldUpdateOperationsInput | number
    Bytes?: NullableIntFieldUpdateOperationsInput | number | null
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type tracksUncheckedUpdateManyInput = {
    TrackId?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    AlbumId?: NullableIntFieldUpdateOperationsInput | number | null
    MediaTypeId?: IntFieldUpdateOperationsInput | number
    GenreId?: NullableIntFieldUpdateOperationsInput | number | null
    Composer?: NullableStringFieldUpdateOperationsInput | string | null
    Milliseconds?: IntFieldUpdateOperationsInput | number
    Bytes?: NullableIntFieldUpdateOperationsInput | number | null
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ArtistsRelationFilter = {
    is?: artistsWhereInput
    isNot?: artistsWhereInput
  }

  export type TracksListRelationFilter = {
    every?: tracksWhereInput
    some?: tracksWhereInput
    none?: tracksWhereInput
  }

  export type tracksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type albumsCountOrderByAggregateInput = {
    AlbumId?: SortOrder
    Title?: SortOrder
    ArtistId?: SortOrder
  }

  export type albumsAvgOrderByAggregateInput = {
    AlbumId?: SortOrder
    ArtistId?: SortOrder
  }

  export type albumsMaxOrderByAggregateInput = {
    AlbumId?: SortOrder
    Title?: SortOrder
    ArtistId?: SortOrder
  }

  export type albumsMinOrderByAggregateInput = {
    AlbumId?: SortOrder
    Title?: SortOrder
    ArtistId?: SortOrder
  }

  export type albumsSumOrderByAggregateInput = {
    AlbumId?: SortOrder
    ArtistId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type AlbumsListRelationFilter = {
    every?: albumsWhereInput
    some?: albumsWhereInput
    none?: albumsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type albumsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type artistsCountOrderByAggregateInput = {
    ArtistId?: SortOrder
    Name?: SortOrder
  }

  export type artistsAvgOrderByAggregateInput = {
    ArtistId?: SortOrder
  }

  export type artistsMaxOrderByAggregateInput = {
    ArtistId?: SortOrder
    Name?: SortOrder
  }

  export type artistsMinOrderByAggregateInput = {
    ArtistId?: SortOrder
    Name?: SortOrder
  }

  export type artistsSumOrderByAggregateInput = {
    ArtistId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EmployeesNullableRelationFilter = {
    is?: employeesWhereInput | null
    isNot?: employeesWhereInput | null
  }

  export type InvoicesListRelationFilter = {
    every?: invoicesWhereInput
    some?: invoicesWhereInput
    none?: invoicesWhereInput
  }

  export type invoicesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type customersCountOrderByAggregateInput = {
    CustomerId?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    ImageURL?: SortOrder
    Company?: SortOrder
    Address?: SortOrder
    City?: SortOrder
    State?: SortOrder
    Country?: SortOrder
    PostalCode?: SortOrder
    Phone?: SortOrder
    Fax?: SortOrder
    Email?: SortOrder
    SupportRepId?: SortOrder
  }

  export type customersAvgOrderByAggregateInput = {
    CustomerId?: SortOrder
    SupportRepId?: SortOrder
  }

  export type customersMaxOrderByAggregateInput = {
    CustomerId?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    ImageURL?: SortOrder
    Company?: SortOrder
    Address?: SortOrder
    City?: SortOrder
    State?: SortOrder
    Country?: SortOrder
    PostalCode?: SortOrder
    Phone?: SortOrder
    Fax?: SortOrder
    Email?: SortOrder
    SupportRepId?: SortOrder
  }

  export type customersMinOrderByAggregateInput = {
    CustomerId?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    ImageURL?: SortOrder
    Company?: SortOrder
    Address?: SortOrder
    City?: SortOrder
    State?: SortOrder
    Country?: SortOrder
    PostalCode?: SortOrder
    Phone?: SortOrder
    Fax?: SortOrder
    Email?: SortOrder
    SupportRepId?: SortOrder
  }

  export type customersSumOrderByAggregateInput = {
    CustomerId?: SortOrder
    SupportRepId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CustomersListRelationFilter = {
    every?: customersWhereInput
    some?: customersWhereInput
    none?: customersWhereInput
  }

  export type EmployeesListRelationFilter = {
    every?: employeesWhereInput
    some?: employeesWhereInput
    none?: employeesWhereInput
  }

  export type customersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type employeesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type employeesCountOrderByAggregateInput = {
    EmployeeId?: SortOrder
    LastName?: SortOrder
    FirstName?: SortOrder
    ImageURL?: SortOrder
    Title?: SortOrder
    ReportsTo?: SortOrder
    BirthDate?: SortOrder
    HireDate?: SortOrder
    Address?: SortOrder
    City?: SortOrder
    State?: SortOrder
    Country?: SortOrder
    PostalCode?: SortOrder
    Phone?: SortOrder
    Fax?: SortOrder
    Email?: SortOrder
  }

  export type employeesAvgOrderByAggregateInput = {
    EmployeeId?: SortOrder
    ReportsTo?: SortOrder
  }

  export type employeesMaxOrderByAggregateInput = {
    EmployeeId?: SortOrder
    LastName?: SortOrder
    FirstName?: SortOrder
    ImageURL?: SortOrder
    Title?: SortOrder
    ReportsTo?: SortOrder
    BirthDate?: SortOrder
    HireDate?: SortOrder
    Address?: SortOrder
    City?: SortOrder
    State?: SortOrder
    Country?: SortOrder
    PostalCode?: SortOrder
    Phone?: SortOrder
    Fax?: SortOrder
    Email?: SortOrder
  }

  export type employeesMinOrderByAggregateInput = {
    EmployeeId?: SortOrder
    LastName?: SortOrder
    FirstName?: SortOrder
    ImageURL?: SortOrder
    Title?: SortOrder
    ReportsTo?: SortOrder
    BirthDate?: SortOrder
    HireDate?: SortOrder
    Address?: SortOrder
    City?: SortOrder
    State?: SortOrder
    Country?: SortOrder
    PostalCode?: SortOrder
    Phone?: SortOrder
    Fax?: SortOrder
    Email?: SortOrder
  }

  export type employeesSumOrderByAggregateInput = {
    EmployeeId?: SortOrder
    ReportsTo?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type genresCountOrderByAggregateInput = {
    GenreId?: SortOrder
    Name?: SortOrder
  }

  export type genresAvgOrderByAggregateInput = {
    GenreId?: SortOrder
  }

  export type genresMaxOrderByAggregateInput = {
    GenreId?: SortOrder
    Name?: SortOrder
  }

  export type genresMinOrderByAggregateInput = {
    GenreId?: SortOrder
    Name?: SortOrder
  }

  export type genresSumOrderByAggregateInput = {
    GenreId?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type TracksRelationFilter = {
    is?: tracksWhereInput
    isNot?: tracksWhereInput
  }

  export type InvoicesRelationFilter = {
    is?: invoicesWhereInput
    isNot?: invoicesWhereInput
  }

  export type invoice_itemsCountOrderByAggregateInput = {
    InvoiceLineId?: SortOrder
    InvoiceId?: SortOrder
    TrackId?: SortOrder
    UnitPrice?: SortOrder
    Quantity?: SortOrder
  }

  export type invoice_itemsAvgOrderByAggregateInput = {
    InvoiceLineId?: SortOrder
    InvoiceId?: SortOrder
    TrackId?: SortOrder
    UnitPrice?: SortOrder
    Quantity?: SortOrder
  }

  export type invoice_itemsMaxOrderByAggregateInput = {
    InvoiceLineId?: SortOrder
    InvoiceId?: SortOrder
    TrackId?: SortOrder
    UnitPrice?: SortOrder
    Quantity?: SortOrder
  }

  export type invoice_itemsMinOrderByAggregateInput = {
    InvoiceLineId?: SortOrder
    InvoiceId?: SortOrder
    TrackId?: SortOrder
    UnitPrice?: SortOrder
    Quantity?: SortOrder
  }

  export type invoice_itemsSumOrderByAggregateInput = {
    InvoiceLineId?: SortOrder
    InvoiceId?: SortOrder
    TrackId?: SortOrder
    UnitPrice?: SortOrder
    Quantity?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Invoice_itemsListRelationFilter = {
    every?: invoice_itemsWhereInput
    some?: invoice_itemsWhereInput
    none?: invoice_itemsWhereInput
  }

  export type CustomersRelationFilter = {
    is?: customersWhereInput
    isNot?: customersWhereInput
  }

  export type invoice_itemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type invoicesCountOrderByAggregateInput = {
    InvoiceId?: SortOrder
    CustomerId?: SortOrder
    InvoiceDate?: SortOrder
    BillingAddress?: SortOrder
    BillingCity?: SortOrder
    BillingState?: SortOrder
    BillingCountry?: SortOrder
    BillingPostalCode?: SortOrder
    Total?: SortOrder
  }

  export type invoicesAvgOrderByAggregateInput = {
    InvoiceId?: SortOrder
    CustomerId?: SortOrder
    Total?: SortOrder
  }

  export type invoicesMaxOrderByAggregateInput = {
    InvoiceId?: SortOrder
    CustomerId?: SortOrder
    InvoiceDate?: SortOrder
    BillingAddress?: SortOrder
    BillingCity?: SortOrder
    BillingState?: SortOrder
    BillingCountry?: SortOrder
    BillingPostalCode?: SortOrder
    Total?: SortOrder
  }

  export type invoicesMinOrderByAggregateInput = {
    InvoiceId?: SortOrder
    CustomerId?: SortOrder
    InvoiceDate?: SortOrder
    BillingAddress?: SortOrder
    BillingCity?: SortOrder
    BillingState?: SortOrder
    BillingCountry?: SortOrder
    BillingPostalCode?: SortOrder
    Total?: SortOrder
  }

  export type invoicesSumOrderByAggregateInput = {
    InvoiceId?: SortOrder
    CustomerId?: SortOrder
    Total?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type media_typesCountOrderByAggregateInput = {
    MediaTypeId?: SortOrder
    Name?: SortOrder
  }

  export type media_typesAvgOrderByAggregateInput = {
    MediaTypeId?: SortOrder
  }

  export type media_typesMaxOrderByAggregateInput = {
    MediaTypeId?: SortOrder
    Name?: SortOrder
  }

  export type media_typesMinOrderByAggregateInput = {
    MediaTypeId?: SortOrder
    Name?: SortOrder
  }

  export type media_typesSumOrderByAggregateInput = {
    MediaTypeId?: SortOrder
  }

  export type PlaylistsRelationFilter = {
    is?: playlistsWhereInput
    isNot?: playlistsWhereInput
  }

  export type playlist_trackPlaylistIdTrackIdCompoundUniqueInput = {
    PlaylistId: number
    TrackId: number
  }

  export type playlist_trackCountOrderByAggregateInput = {
    PlaylistId?: SortOrder
    TrackId?: SortOrder
  }

  export type playlist_trackAvgOrderByAggregateInput = {
    PlaylistId?: SortOrder
    TrackId?: SortOrder
  }

  export type playlist_trackMaxOrderByAggregateInput = {
    PlaylistId?: SortOrder
    TrackId?: SortOrder
  }

  export type playlist_trackMinOrderByAggregateInput = {
    PlaylistId?: SortOrder
    TrackId?: SortOrder
  }

  export type playlist_trackSumOrderByAggregateInput = {
    PlaylistId?: SortOrder
    TrackId?: SortOrder
  }

  export type Playlist_trackListRelationFilter = {
    every?: playlist_trackWhereInput
    some?: playlist_trackWhereInput
    none?: playlist_trackWhereInput
  }

  export type playlist_trackOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type playlistsCountOrderByAggregateInput = {
    PlaylistId?: SortOrder
    Name?: SortOrder
  }

  export type playlistsAvgOrderByAggregateInput = {
    PlaylistId?: SortOrder
  }

  export type playlistsMaxOrderByAggregateInput = {
    PlaylistId?: SortOrder
    Name?: SortOrder
  }

  export type playlistsMinOrderByAggregateInput = {
    PlaylistId?: SortOrder
    Name?: SortOrder
  }

  export type playlistsSumOrderByAggregateInput = {
    PlaylistId?: SortOrder
  }

  export type Media_typesRelationFilter = {
    is?: media_typesWhereInput
    isNot?: media_typesWhereInput
  }

  export type GenresNullableRelationFilter = {
    is?: genresWhereInput | null
    isNot?: genresWhereInput | null
  }

  export type AlbumsNullableRelationFilter = {
    is?: albumsWhereInput | null
    isNot?: albumsWhereInput | null
  }

  export type tracksCountOrderByAggregateInput = {
    TrackId?: SortOrder
    Name?: SortOrder
    AlbumId?: SortOrder
    MediaTypeId?: SortOrder
    GenreId?: SortOrder
    Composer?: SortOrder
    Milliseconds?: SortOrder
    Bytes?: SortOrder
    UnitPrice?: SortOrder
  }

  export type tracksAvgOrderByAggregateInput = {
    TrackId?: SortOrder
    AlbumId?: SortOrder
    MediaTypeId?: SortOrder
    GenreId?: SortOrder
    Milliseconds?: SortOrder
    Bytes?: SortOrder
    UnitPrice?: SortOrder
  }

  export type tracksMaxOrderByAggregateInput = {
    TrackId?: SortOrder
    Name?: SortOrder
    AlbumId?: SortOrder
    MediaTypeId?: SortOrder
    GenreId?: SortOrder
    Composer?: SortOrder
    Milliseconds?: SortOrder
    Bytes?: SortOrder
    UnitPrice?: SortOrder
  }

  export type tracksMinOrderByAggregateInput = {
    TrackId?: SortOrder
    Name?: SortOrder
    AlbumId?: SortOrder
    MediaTypeId?: SortOrder
    GenreId?: SortOrder
    Composer?: SortOrder
    Milliseconds?: SortOrder
    Bytes?: SortOrder
    UnitPrice?: SortOrder
  }

  export type tracksSumOrderByAggregateInput = {
    TrackId?: SortOrder
    AlbumId?: SortOrder
    MediaTypeId?: SortOrder
    GenreId?: SortOrder
    Milliseconds?: SortOrder
    Bytes?: SortOrder
    UnitPrice?: SortOrder
  }

  export type artistsCreateNestedOneWithoutAlbumsInput = {
    create?: XOR<artistsCreateWithoutAlbumsInput, artistsUncheckedCreateWithoutAlbumsInput>
    connectOrCreate?: artistsCreateOrConnectWithoutAlbumsInput
    connect?: artistsWhereUniqueInput
  }

  export type tracksCreateNestedManyWithoutAlbumsInput = {
    create?: XOR<tracksCreateWithoutAlbumsInput, tracksUncheckedCreateWithoutAlbumsInput> | tracksCreateWithoutAlbumsInput[] | tracksUncheckedCreateWithoutAlbumsInput[]
    connectOrCreate?: tracksCreateOrConnectWithoutAlbumsInput | tracksCreateOrConnectWithoutAlbumsInput[]
    createMany?: tracksCreateManyAlbumsInputEnvelope
    connect?: tracksWhereUniqueInput | tracksWhereUniqueInput[]
  }

  export type tracksUncheckedCreateNestedManyWithoutAlbumsInput = {
    create?: XOR<tracksCreateWithoutAlbumsInput, tracksUncheckedCreateWithoutAlbumsInput> | tracksCreateWithoutAlbumsInput[] | tracksUncheckedCreateWithoutAlbumsInput[]
    connectOrCreate?: tracksCreateOrConnectWithoutAlbumsInput | tracksCreateOrConnectWithoutAlbumsInput[]
    createMany?: tracksCreateManyAlbumsInputEnvelope
    connect?: tracksWhereUniqueInput | tracksWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type artistsUpdateOneRequiredWithoutAlbumsNestedInput = {
    create?: XOR<artistsCreateWithoutAlbumsInput, artistsUncheckedCreateWithoutAlbumsInput>
    connectOrCreate?: artistsCreateOrConnectWithoutAlbumsInput
    upsert?: artistsUpsertWithoutAlbumsInput
    connect?: artistsWhereUniqueInput
    update?: XOR<XOR<artistsUpdateToOneWithWhereWithoutAlbumsInput, artistsUpdateWithoutAlbumsInput>, artistsUncheckedUpdateWithoutAlbumsInput>
  }

  export type tracksUpdateManyWithoutAlbumsNestedInput = {
    create?: XOR<tracksCreateWithoutAlbumsInput, tracksUncheckedCreateWithoutAlbumsInput> | tracksCreateWithoutAlbumsInput[] | tracksUncheckedCreateWithoutAlbumsInput[]
    connectOrCreate?: tracksCreateOrConnectWithoutAlbumsInput | tracksCreateOrConnectWithoutAlbumsInput[]
    upsert?: tracksUpsertWithWhereUniqueWithoutAlbumsInput | tracksUpsertWithWhereUniqueWithoutAlbumsInput[]
    createMany?: tracksCreateManyAlbumsInputEnvelope
    set?: tracksWhereUniqueInput | tracksWhereUniqueInput[]
    disconnect?: tracksWhereUniqueInput | tracksWhereUniqueInput[]
    delete?: tracksWhereUniqueInput | tracksWhereUniqueInput[]
    connect?: tracksWhereUniqueInput | tracksWhereUniqueInput[]
    update?: tracksUpdateWithWhereUniqueWithoutAlbumsInput | tracksUpdateWithWhereUniqueWithoutAlbumsInput[]
    updateMany?: tracksUpdateManyWithWhereWithoutAlbumsInput | tracksUpdateManyWithWhereWithoutAlbumsInput[]
    deleteMany?: tracksScalarWhereInput | tracksScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type tracksUncheckedUpdateManyWithoutAlbumsNestedInput = {
    create?: XOR<tracksCreateWithoutAlbumsInput, tracksUncheckedCreateWithoutAlbumsInput> | tracksCreateWithoutAlbumsInput[] | tracksUncheckedCreateWithoutAlbumsInput[]
    connectOrCreate?: tracksCreateOrConnectWithoutAlbumsInput | tracksCreateOrConnectWithoutAlbumsInput[]
    upsert?: tracksUpsertWithWhereUniqueWithoutAlbumsInput | tracksUpsertWithWhereUniqueWithoutAlbumsInput[]
    createMany?: tracksCreateManyAlbumsInputEnvelope
    set?: tracksWhereUniqueInput | tracksWhereUniqueInput[]
    disconnect?: tracksWhereUniqueInput | tracksWhereUniqueInput[]
    delete?: tracksWhereUniqueInput | tracksWhereUniqueInput[]
    connect?: tracksWhereUniqueInput | tracksWhereUniqueInput[]
    update?: tracksUpdateWithWhereUniqueWithoutAlbumsInput | tracksUpdateWithWhereUniqueWithoutAlbumsInput[]
    updateMany?: tracksUpdateManyWithWhereWithoutAlbumsInput | tracksUpdateManyWithWhereWithoutAlbumsInput[]
    deleteMany?: tracksScalarWhereInput | tracksScalarWhereInput[]
  }

  export type albumsCreateNestedManyWithoutArtistsInput = {
    create?: XOR<albumsCreateWithoutArtistsInput, albumsUncheckedCreateWithoutArtistsInput> | albumsCreateWithoutArtistsInput[] | albumsUncheckedCreateWithoutArtistsInput[]
    connectOrCreate?: albumsCreateOrConnectWithoutArtistsInput | albumsCreateOrConnectWithoutArtistsInput[]
    createMany?: albumsCreateManyArtistsInputEnvelope
    connect?: albumsWhereUniqueInput | albumsWhereUniqueInput[]
  }

  export type albumsUncheckedCreateNestedManyWithoutArtistsInput = {
    create?: XOR<albumsCreateWithoutArtistsInput, albumsUncheckedCreateWithoutArtistsInput> | albumsCreateWithoutArtistsInput[] | albumsUncheckedCreateWithoutArtistsInput[]
    connectOrCreate?: albumsCreateOrConnectWithoutArtistsInput | albumsCreateOrConnectWithoutArtistsInput[]
    createMany?: albumsCreateManyArtistsInputEnvelope
    connect?: albumsWhereUniqueInput | albumsWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type albumsUpdateManyWithoutArtistsNestedInput = {
    create?: XOR<albumsCreateWithoutArtistsInput, albumsUncheckedCreateWithoutArtistsInput> | albumsCreateWithoutArtistsInput[] | albumsUncheckedCreateWithoutArtistsInput[]
    connectOrCreate?: albumsCreateOrConnectWithoutArtistsInput | albumsCreateOrConnectWithoutArtistsInput[]
    upsert?: albumsUpsertWithWhereUniqueWithoutArtistsInput | albumsUpsertWithWhereUniqueWithoutArtistsInput[]
    createMany?: albumsCreateManyArtistsInputEnvelope
    set?: albumsWhereUniqueInput | albumsWhereUniqueInput[]
    disconnect?: albumsWhereUniqueInput | albumsWhereUniqueInput[]
    delete?: albumsWhereUniqueInput | albumsWhereUniqueInput[]
    connect?: albumsWhereUniqueInput | albumsWhereUniqueInput[]
    update?: albumsUpdateWithWhereUniqueWithoutArtistsInput | albumsUpdateWithWhereUniqueWithoutArtistsInput[]
    updateMany?: albumsUpdateManyWithWhereWithoutArtistsInput | albumsUpdateManyWithWhereWithoutArtistsInput[]
    deleteMany?: albumsScalarWhereInput | albumsScalarWhereInput[]
  }

  export type albumsUncheckedUpdateManyWithoutArtistsNestedInput = {
    create?: XOR<albumsCreateWithoutArtistsInput, albumsUncheckedCreateWithoutArtistsInput> | albumsCreateWithoutArtistsInput[] | albumsUncheckedCreateWithoutArtistsInput[]
    connectOrCreate?: albumsCreateOrConnectWithoutArtistsInput | albumsCreateOrConnectWithoutArtistsInput[]
    upsert?: albumsUpsertWithWhereUniqueWithoutArtistsInput | albumsUpsertWithWhereUniqueWithoutArtistsInput[]
    createMany?: albumsCreateManyArtistsInputEnvelope
    set?: albumsWhereUniqueInput | albumsWhereUniqueInput[]
    disconnect?: albumsWhereUniqueInput | albumsWhereUniqueInput[]
    delete?: albumsWhereUniqueInput | albumsWhereUniqueInput[]
    connect?: albumsWhereUniqueInput | albumsWhereUniqueInput[]
    update?: albumsUpdateWithWhereUniqueWithoutArtistsInput | albumsUpdateWithWhereUniqueWithoutArtistsInput[]
    updateMany?: albumsUpdateManyWithWhereWithoutArtistsInput | albumsUpdateManyWithWhereWithoutArtistsInput[]
    deleteMany?: albumsScalarWhereInput | albumsScalarWhereInput[]
  }

  export type employeesCreateNestedOneWithoutCustomersInput = {
    create?: XOR<employeesCreateWithoutCustomersInput, employeesUncheckedCreateWithoutCustomersInput>
    connectOrCreate?: employeesCreateOrConnectWithoutCustomersInput
    connect?: employeesWhereUniqueInput
  }

  export type invoicesCreateNestedManyWithoutCustomersInput = {
    create?: XOR<invoicesCreateWithoutCustomersInput, invoicesUncheckedCreateWithoutCustomersInput> | invoicesCreateWithoutCustomersInput[] | invoicesUncheckedCreateWithoutCustomersInput[]
    connectOrCreate?: invoicesCreateOrConnectWithoutCustomersInput | invoicesCreateOrConnectWithoutCustomersInput[]
    createMany?: invoicesCreateManyCustomersInputEnvelope
    connect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
  }

  export type invoicesUncheckedCreateNestedManyWithoutCustomersInput = {
    create?: XOR<invoicesCreateWithoutCustomersInput, invoicesUncheckedCreateWithoutCustomersInput> | invoicesCreateWithoutCustomersInput[] | invoicesUncheckedCreateWithoutCustomersInput[]
    connectOrCreate?: invoicesCreateOrConnectWithoutCustomersInput | invoicesCreateOrConnectWithoutCustomersInput[]
    createMany?: invoicesCreateManyCustomersInputEnvelope
    connect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
  }

  export type employeesUpdateOneWithoutCustomersNestedInput = {
    create?: XOR<employeesCreateWithoutCustomersInput, employeesUncheckedCreateWithoutCustomersInput>
    connectOrCreate?: employeesCreateOrConnectWithoutCustomersInput
    upsert?: employeesUpsertWithoutCustomersInput
    disconnect?: employeesWhereInput | boolean
    delete?: employeesWhereInput | boolean
    connect?: employeesWhereUniqueInput
    update?: XOR<XOR<employeesUpdateToOneWithWhereWithoutCustomersInput, employeesUpdateWithoutCustomersInput>, employeesUncheckedUpdateWithoutCustomersInput>
  }

  export type invoicesUpdateManyWithoutCustomersNestedInput = {
    create?: XOR<invoicesCreateWithoutCustomersInput, invoicesUncheckedCreateWithoutCustomersInput> | invoicesCreateWithoutCustomersInput[] | invoicesUncheckedCreateWithoutCustomersInput[]
    connectOrCreate?: invoicesCreateOrConnectWithoutCustomersInput | invoicesCreateOrConnectWithoutCustomersInput[]
    upsert?: invoicesUpsertWithWhereUniqueWithoutCustomersInput | invoicesUpsertWithWhereUniqueWithoutCustomersInput[]
    createMany?: invoicesCreateManyCustomersInputEnvelope
    set?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    disconnect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    delete?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    connect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    update?: invoicesUpdateWithWhereUniqueWithoutCustomersInput | invoicesUpdateWithWhereUniqueWithoutCustomersInput[]
    updateMany?: invoicesUpdateManyWithWhereWithoutCustomersInput | invoicesUpdateManyWithWhereWithoutCustomersInput[]
    deleteMany?: invoicesScalarWhereInput | invoicesScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type invoicesUncheckedUpdateManyWithoutCustomersNestedInput = {
    create?: XOR<invoicesCreateWithoutCustomersInput, invoicesUncheckedCreateWithoutCustomersInput> | invoicesCreateWithoutCustomersInput[] | invoicesUncheckedCreateWithoutCustomersInput[]
    connectOrCreate?: invoicesCreateOrConnectWithoutCustomersInput | invoicesCreateOrConnectWithoutCustomersInput[]
    upsert?: invoicesUpsertWithWhereUniqueWithoutCustomersInput | invoicesUpsertWithWhereUniqueWithoutCustomersInput[]
    createMany?: invoicesCreateManyCustomersInputEnvelope
    set?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    disconnect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    delete?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    connect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    update?: invoicesUpdateWithWhereUniqueWithoutCustomersInput | invoicesUpdateWithWhereUniqueWithoutCustomersInput[]
    updateMany?: invoicesUpdateManyWithWhereWithoutCustomersInput | invoicesUpdateManyWithWhereWithoutCustomersInput[]
    deleteMany?: invoicesScalarWhereInput | invoicesScalarWhereInput[]
  }

  export type customersCreateNestedManyWithoutEmployeesInput = {
    create?: XOR<customersCreateWithoutEmployeesInput, customersUncheckedCreateWithoutEmployeesInput> | customersCreateWithoutEmployeesInput[] | customersUncheckedCreateWithoutEmployeesInput[]
    connectOrCreate?: customersCreateOrConnectWithoutEmployeesInput | customersCreateOrConnectWithoutEmployeesInput[]
    createMany?: customersCreateManyEmployeesInputEnvelope
    connect?: customersWhereUniqueInput | customersWhereUniqueInput[]
  }

  export type employeesCreateNestedOneWithoutOther_employeesInput = {
    create?: XOR<employeesCreateWithoutOther_employeesInput, employeesUncheckedCreateWithoutOther_employeesInput>
    connectOrCreate?: employeesCreateOrConnectWithoutOther_employeesInput
    connect?: employeesWhereUniqueInput
  }

  export type employeesCreateNestedManyWithoutEmployeesInput = {
    create?: XOR<employeesCreateWithoutEmployeesInput, employeesUncheckedCreateWithoutEmployeesInput> | employeesCreateWithoutEmployeesInput[] | employeesUncheckedCreateWithoutEmployeesInput[]
    connectOrCreate?: employeesCreateOrConnectWithoutEmployeesInput | employeesCreateOrConnectWithoutEmployeesInput[]
    createMany?: employeesCreateManyEmployeesInputEnvelope
    connect?: employeesWhereUniqueInput | employeesWhereUniqueInput[]
  }

  export type customersUncheckedCreateNestedManyWithoutEmployeesInput = {
    create?: XOR<customersCreateWithoutEmployeesInput, customersUncheckedCreateWithoutEmployeesInput> | customersCreateWithoutEmployeesInput[] | customersUncheckedCreateWithoutEmployeesInput[]
    connectOrCreate?: customersCreateOrConnectWithoutEmployeesInput | customersCreateOrConnectWithoutEmployeesInput[]
    createMany?: customersCreateManyEmployeesInputEnvelope
    connect?: customersWhereUniqueInput | customersWhereUniqueInput[]
  }

  export type employeesUncheckedCreateNestedManyWithoutEmployeesInput = {
    create?: XOR<employeesCreateWithoutEmployeesInput, employeesUncheckedCreateWithoutEmployeesInput> | employeesCreateWithoutEmployeesInput[] | employeesUncheckedCreateWithoutEmployeesInput[]
    connectOrCreate?: employeesCreateOrConnectWithoutEmployeesInput | employeesCreateOrConnectWithoutEmployeesInput[]
    createMany?: employeesCreateManyEmployeesInputEnvelope
    connect?: employeesWhereUniqueInput | employeesWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type customersUpdateManyWithoutEmployeesNestedInput = {
    create?: XOR<customersCreateWithoutEmployeesInput, customersUncheckedCreateWithoutEmployeesInput> | customersCreateWithoutEmployeesInput[] | customersUncheckedCreateWithoutEmployeesInput[]
    connectOrCreate?: customersCreateOrConnectWithoutEmployeesInput | customersCreateOrConnectWithoutEmployeesInput[]
    upsert?: customersUpsertWithWhereUniqueWithoutEmployeesInput | customersUpsertWithWhereUniqueWithoutEmployeesInput[]
    createMany?: customersCreateManyEmployeesInputEnvelope
    set?: customersWhereUniqueInput | customersWhereUniqueInput[]
    disconnect?: customersWhereUniqueInput | customersWhereUniqueInput[]
    delete?: customersWhereUniqueInput | customersWhereUniqueInput[]
    connect?: customersWhereUniqueInput | customersWhereUniqueInput[]
    update?: customersUpdateWithWhereUniqueWithoutEmployeesInput | customersUpdateWithWhereUniqueWithoutEmployeesInput[]
    updateMany?: customersUpdateManyWithWhereWithoutEmployeesInput | customersUpdateManyWithWhereWithoutEmployeesInput[]
    deleteMany?: customersScalarWhereInput | customersScalarWhereInput[]
  }

  export type employeesUpdateOneWithoutOther_employeesNestedInput = {
    create?: XOR<employeesCreateWithoutOther_employeesInput, employeesUncheckedCreateWithoutOther_employeesInput>
    connectOrCreate?: employeesCreateOrConnectWithoutOther_employeesInput
    upsert?: employeesUpsertWithoutOther_employeesInput
    disconnect?: employeesWhereInput | boolean
    delete?: employeesWhereInput | boolean
    connect?: employeesWhereUniqueInput
    update?: XOR<XOR<employeesUpdateToOneWithWhereWithoutOther_employeesInput, employeesUpdateWithoutOther_employeesInput>, employeesUncheckedUpdateWithoutOther_employeesInput>
  }

  export type employeesUpdateManyWithoutEmployeesNestedInput = {
    create?: XOR<employeesCreateWithoutEmployeesInput, employeesUncheckedCreateWithoutEmployeesInput> | employeesCreateWithoutEmployeesInput[] | employeesUncheckedCreateWithoutEmployeesInput[]
    connectOrCreate?: employeesCreateOrConnectWithoutEmployeesInput | employeesCreateOrConnectWithoutEmployeesInput[]
    upsert?: employeesUpsertWithWhereUniqueWithoutEmployeesInput | employeesUpsertWithWhereUniqueWithoutEmployeesInput[]
    createMany?: employeesCreateManyEmployeesInputEnvelope
    set?: employeesWhereUniqueInput | employeesWhereUniqueInput[]
    disconnect?: employeesWhereUniqueInput | employeesWhereUniqueInput[]
    delete?: employeesWhereUniqueInput | employeesWhereUniqueInput[]
    connect?: employeesWhereUniqueInput | employeesWhereUniqueInput[]
    update?: employeesUpdateWithWhereUniqueWithoutEmployeesInput | employeesUpdateWithWhereUniqueWithoutEmployeesInput[]
    updateMany?: employeesUpdateManyWithWhereWithoutEmployeesInput | employeesUpdateManyWithWhereWithoutEmployeesInput[]
    deleteMany?: employeesScalarWhereInput | employeesScalarWhereInput[]
  }

  export type customersUncheckedUpdateManyWithoutEmployeesNestedInput = {
    create?: XOR<customersCreateWithoutEmployeesInput, customersUncheckedCreateWithoutEmployeesInput> | customersCreateWithoutEmployeesInput[] | customersUncheckedCreateWithoutEmployeesInput[]
    connectOrCreate?: customersCreateOrConnectWithoutEmployeesInput | customersCreateOrConnectWithoutEmployeesInput[]
    upsert?: customersUpsertWithWhereUniqueWithoutEmployeesInput | customersUpsertWithWhereUniqueWithoutEmployeesInput[]
    createMany?: customersCreateManyEmployeesInputEnvelope
    set?: customersWhereUniqueInput | customersWhereUniqueInput[]
    disconnect?: customersWhereUniqueInput | customersWhereUniqueInput[]
    delete?: customersWhereUniqueInput | customersWhereUniqueInput[]
    connect?: customersWhereUniqueInput | customersWhereUniqueInput[]
    update?: customersUpdateWithWhereUniqueWithoutEmployeesInput | customersUpdateWithWhereUniqueWithoutEmployeesInput[]
    updateMany?: customersUpdateManyWithWhereWithoutEmployeesInput | customersUpdateManyWithWhereWithoutEmployeesInput[]
    deleteMany?: customersScalarWhereInput | customersScalarWhereInput[]
  }

  export type employeesUncheckedUpdateManyWithoutEmployeesNestedInput = {
    create?: XOR<employeesCreateWithoutEmployeesInput, employeesUncheckedCreateWithoutEmployeesInput> | employeesCreateWithoutEmployeesInput[] | employeesUncheckedCreateWithoutEmployeesInput[]
    connectOrCreate?: employeesCreateOrConnectWithoutEmployeesInput | employeesCreateOrConnectWithoutEmployeesInput[]
    upsert?: employeesUpsertWithWhereUniqueWithoutEmployeesInput | employeesUpsertWithWhereUniqueWithoutEmployeesInput[]
    createMany?: employeesCreateManyEmployeesInputEnvelope
    set?: employeesWhereUniqueInput | employeesWhereUniqueInput[]
    disconnect?: employeesWhereUniqueInput | employeesWhereUniqueInput[]
    delete?: employeesWhereUniqueInput | employeesWhereUniqueInput[]
    connect?: employeesWhereUniqueInput | employeesWhereUniqueInput[]
    update?: employeesUpdateWithWhereUniqueWithoutEmployeesInput | employeesUpdateWithWhereUniqueWithoutEmployeesInput[]
    updateMany?: employeesUpdateManyWithWhereWithoutEmployeesInput | employeesUpdateManyWithWhereWithoutEmployeesInput[]
    deleteMany?: employeesScalarWhereInput | employeesScalarWhereInput[]
  }

  export type tracksCreateNestedManyWithoutGenresInput = {
    create?: XOR<tracksCreateWithoutGenresInput, tracksUncheckedCreateWithoutGenresInput> | tracksCreateWithoutGenresInput[] | tracksUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: tracksCreateOrConnectWithoutGenresInput | tracksCreateOrConnectWithoutGenresInput[]
    createMany?: tracksCreateManyGenresInputEnvelope
    connect?: tracksWhereUniqueInput | tracksWhereUniqueInput[]
  }

  export type tracksUncheckedCreateNestedManyWithoutGenresInput = {
    create?: XOR<tracksCreateWithoutGenresInput, tracksUncheckedCreateWithoutGenresInput> | tracksCreateWithoutGenresInput[] | tracksUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: tracksCreateOrConnectWithoutGenresInput | tracksCreateOrConnectWithoutGenresInput[]
    createMany?: tracksCreateManyGenresInputEnvelope
    connect?: tracksWhereUniqueInput | tracksWhereUniqueInput[]
  }

  export type tracksUpdateManyWithoutGenresNestedInput = {
    create?: XOR<tracksCreateWithoutGenresInput, tracksUncheckedCreateWithoutGenresInput> | tracksCreateWithoutGenresInput[] | tracksUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: tracksCreateOrConnectWithoutGenresInput | tracksCreateOrConnectWithoutGenresInput[]
    upsert?: tracksUpsertWithWhereUniqueWithoutGenresInput | tracksUpsertWithWhereUniqueWithoutGenresInput[]
    createMany?: tracksCreateManyGenresInputEnvelope
    set?: tracksWhereUniqueInput | tracksWhereUniqueInput[]
    disconnect?: tracksWhereUniqueInput | tracksWhereUniqueInput[]
    delete?: tracksWhereUniqueInput | tracksWhereUniqueInput[]
    connect?: tracksWhereUniqueInput | tracksWhereUniqueInput[]
    update?: tracksUpdateWithWhereUniqueWithoutGenresInput | tracksUpdateWithWhereUniqueWithoutGenresInput[]
    updateMany?: tracksUpdateManyWithWhereWithoutGenresInput | tracksUpdateManyWithWhereWithoutGenresInput[]
    deleteMany?: tracksScalarWhereInput | tracksScalarWhereInput[]
  }

  export type tracksUncheckedUpdateManyWithoutGenresNestedInput = {
    create?: XOR<tracksCreateWithoutGenresInput, tracksUncheckedCreateWithoutGenresInput> | tracksCreateWithoutGenresInput[] | tracksUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: tracksCreateOrConnectWithoutGenresInput | tracksCreateOrConnectWithoutGenresInput[]
    upsert?: tracksUpsertWithWhereUniqueWithoutGenresInput | tracksUpsertWithWhereUniqueWithoutGenresInput[]
    createMany?: tracksCreateManyGenresInputEnvelope
    set?: tracksWhereUniqueInput | tracksWhereUniqueInput[]
    disconnect?: tracksWhereUniqueInput | tracksWhereUniqueInput[]
    delete?: tracksWhereUniqueInput | tracksWhereUniqueInput[]
    connect?: tracksWhereUniqueInput | tracksWhereUniqueInput[]
    update?: tracksUpdateWithWhereUniqueWithoutGenresInput | tracksUpdateWithWhereUniqueWithoutGenresInput[]
    updateMany?: tracksUpdateManyWithWhereWithoutGenresInput | tracksUpdateManyWithWhereWithoutGenresInput[]
    deleteMany?: tracksScalarWhereInput | tracksScalarWhereInput[]
  }

  export type tracksCreateNestedOneWithoutInvoice_itemsInput = {
    create?: XOR<tracksCreateWithoutInvoice_itemsInput, tracksUncheckedCreateWithoutInvoice_itemsInput>
    connectOrCreate?: tracksCreateOrConnectWithoutInvoice_itemsInput
    connect?: tracksWhereUniqueInput
  }

  export type invoicesCreateNestedOneWithoutInvoice_itemsInput = {
    create?: XOR<invoicesCreateWithoutInvoice_itemsInput, invoicesUncheckedCreateWithoutInvoice_itemsInput>
    connectOrCreate?: invoicesCreateOrConnectWithoutInvoice_itemsInput
    connect?: invoicesWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type tracksUpdateOneRequiredWithoutInvoice_itemsNestedInput = {
    create?: XOR<tracksCreateWithoutInvoice_itemsInput, tracksUncheckedCreateWithoutInvoice_itemsInput>
    connectOrCreate?: tracksCreateOrConnectWithoutInvoice_itemsInput
    upsert?: tracksUpsertWithoutInvoice_itemsInput
    connect?: tracksWhereUniqueInput
    update?: XOR<XOR<tracksUpdateToOneWithWhereWithoutInvoice_itemsInput, tracksUpdateWithoutInvoice_itemsInput>, tracksUncheckedUpdateWithoutInvoice_itemsInput>
  }

  export type invoicesUpdateOneRequiredWithoutInvoice_itemsNestedInput = {
    create?: XOR<invoicesCreateWithoutInvoice_itemsInput, invoicesUncheckedCreateWithoutInvoice_itemsInput>
    connectOrCreate?: invoicesCreateOrConnectWithoutInvoice_itemsInput
    upsert?: invoicesUpsertWithoutInvoice_itemsInput
    connect?: invoicesWhereUniqueInput
    update?: XOR<XOR<invoicesUpdateToOneWithWhereWithoutInvoice_itemsInput, invoicesUpdateWithoutInvoice_itemsInput>, invoicesUncheckedUpdateWithoutInvoice_itemsInput>
  }

  export type invoice_itemsCreateNestedManyWithoutInvoicesInput = {
    create?: XOR<invoice_itemsCreateWithoutInvoicesInput, invoice_itemsUncheckedCreateWithoutInvoicesInput> | invoice_itemsCreateWithoutInvoicesInput[] | invoice_itemsUncheckedCreateWithoutInvoicesInput[]
    connectOrCreate?: invoice_itemsCreateOrConnectWithoutInvoicesInput | invoice_itemsCreateOrConnectWithoutInvoicesInput[]
    createMany?: invoice_itemsCreateManyInvoicesInputEnvelope
    connect?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
  }

  export type customersCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<customersCreateWithoutInvoicesInput, customersUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: customersCreateOrConnectWithoutInvoicesInput
    connect?: customersWhereUniqueInput
  }

  export type invoice_itemsUncheckedCreateNestedManyWithoutInvoicesInput = {
    create?: XOR<invoice_itemsCreateWithoutInvoicesInput, invoice_itemsUncheckedCreateWithoutInvoicesInput> | invoice_itemsCreateWithoutInvoicesInput[] | invoice_itemsUncheckedCreateWithoutInvoicesInput[]
    connectOrCreate?: invoice_itemsCreateOrConnectWithoutInvoicesInput | invoice_itemsCreateOrConnectWithoutInvoicesInput[]
    createMany?: invoice_itemsCreateManyInvoicesInputEnvelope
    connect?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type invoice_itemsUpdateManyWithoutInvoicesNestedInput = {
    create?: XOR<invoice_itemsCreateWithoutInvoicesInput, invoice_itemsUncheckedCreateWithoutInvoicesInput> | invoice_itemsCreateWithoutInvoicesInput[] | invoice_itemsUncheckedCreateWithoutInvoicesInput[]
    connectOrCreate?: invoice_itemsCreateOrConnectWithoutInvoicesInput | invoice_itemsCreateOrConnectWithoutInvoicesInput[]
    upsert?: invoice_itemsUpsertWithWhereUniqueWithoutInvoicesInput | invoice_itemsUpsertWithWhereUniqueWithoutInvoicesInput[]
    createMany?: invoice_itemsCreateManyInvoicesInputEnvelope
    set?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
    disconnect?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
    delete?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
    connect?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
    update?: invoice_itemsUpdateWithWhereUniqueWithoutInvoicesInput | invoice_itemsUpdateWithWhereUniqueWithoutInvoicesInput[]
    updateMany?: invoice_itemsUpdateManyWithWhereWithoutInvoicesInput | invoice_itemsUpdateManyWithWhereWithoutInvoicesInput[]
    deleteMany?: invoice_itemsScalarWhereInput | invoice_itemsScalarWhereInput[]
  }

  export type customersUpdateOneRequiredWithoutInvoicesNestedInput = {
    create?: XOR<customersCreateWithoutInvoicesInput, customersUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: customersCreateOrConnectWithoutInvoicesInput
    upsert?: customersUpsertWithoutInvoicesInput
    connect?: customersWhereUniqueInput
    update?: XOR<XOR<customersUpdateToOneWithWhereWithoutInvoicesInput, customersUpdateWithoutInvoicesInput>, customersUncheckedUpdateWithoutInvoicesInput>
  }

  export type invoice_itemsUncheckedUpdateManyWithoutInvoicesNestedInput = {
    create?: XOR<invoice_itemsCreateWithoutInvoicesInput, invoice_itemsUncheckedCreateWithoutInvoicesInput> | invoice_itemsCreateWithoutInvoicesInput[] | invoice_itemsUncheckedCreateWithoutInvoicesInput[]
    connectOrCreate?: invoice_itemsCreateOrConnectWithoutInvoicesInput | invoice_itemsCreateOrConnectWithoutInvoicesInput[]
    upsert?: invoice_itemsUpsertWithWhereUniqueWithoutInvoicesInput | invoice_itemsUpsertWithWhereUniqueWithoutInvoicesInput[]
    createMany?: invoice_itemsCreateManyInvoicesInputEnvelope
    set?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
    disconnect?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
    delete?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
    connect?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
    update?: invoice_itemsUpdateWithWhereUniqueWithoutInvoicesInput | invoice_itemsUpdateWithWhereUniqueWithoutInvoicesInput[]
    updateMany?: invoice_itemsUpdateManyWithWhereWithoutInvoicesInput | invoice_itemsUpdateManyWithWhereWithoutInvoicesInput[]
    deleteMany?: invoice_itemsScalarWhereInput | invoice_itemsScalarWhereInput[]
  }

  export type tracksCreateNestedManyWithoutMedia_typesInput = {
    create?: XOR<tracksCreateWithoutMedia_typesInput, tracksUncheckedCreateWithoutMedia_typesInput> | tracksCreateWithoutMedia_typesInput[] | tracksUncheckedCreateWithoutMedia_typesInput[]
    connectOrCreate?: tracksCreateOrConnectWithoutMedia_typesInput | tracksCreateOrConnectWithoutMedia_typesInput[]
    createMany?: tracksCreateManyMedia_typesInputEnvelope
    connect?: tracksWhereUniqueInput | tracksWhereUniqueInput[]
  }

  export type tracksUncheckedCreateNestedManyWithoutMedia_typesInput = {
    create?: XOR<tracksCreateWithoutMedia_typesInput, tracksUncheckedCreateWithoutMedia_typesInput> | tracksCreateWithoutMedia_typesInput[] | tracksUncheckedCreateWithoutMedia_typesInput[]
    connectOrCreate?: tracksCreateOrConnectWithoutMedia_typesInput | tracksCreateOrConnectWithoutMedia_typesInput[]
    createMany?: tracksCreateManyMedia_typesInputEnvelope
    connect?: tracksWhereUniqueInput | tracksWhereUniqueInput[]
  }

  export type tracksUpdateManyWithoutMedia_typesNestedInput = {
    create?: XOR<tracksCreateWithoutMedia_typesInput, tracksUncheckedCreateWithoutMedia_typesInput> | tracksCreateWithoutMedia_typesInput[] | tracksUncheckedCreateWithoutMedia_typesInput[]
    connectOrCreate?: tracksCreateOrConnectWithoutMedia_typesInput | tracksCreateOrConnectWithoutMedia_typesInput[]
    upsert?: tracksUpsertWithWhereUniqueWithoutMedia_typesInput | tracksUpsertWithWhereUniqueWithoutMedia_typesInput[]
    createMany?: tracksCreateManyMedia_typesInputEnvelope
    set?: tracksWhereUniqueInput | tracksWhereUniqueInput[]
    disconnect?: tracksWhereUniqueInput | tracksWhereUniqueInput[]
    delete?: tracksWhereUniqueInput | tracksWhereUniqueInput[]
    connect?: tracksWhereUniqueInput | tracksWhereUniqueInput[]
    update?: tracksUpdateWithWhereUniqueWithoutMedia_typesInput | tracksUpdateWithWhereUniqueWithoutMedia_typesInput[]
    updateMany?: tracksUpdateManyWithWhereWithoutMedia_typesInput | tracksUpdateManyWithWhereWithoutMedia_typesInput[]
    deleteMany?: tracksScalarWhereInput | tracksScalarWhereInput[]
  }

  export type tracksUncheckedUpdateManyWithoutMedia_typesNestedInput = {
    create?: XOR<tracksCreateWithoutMedia_typesInput, tracksUncheckedCreateWithoutMedia_typesInput> | tracksCreateWithoutMedia_typesInput[] | tracksUncheckedCreateWithoutMedia_typesInput[]
    connectOrCreate?: tracksCreateOrConnectWithoutMedia_typesInput | tracksCreateOrConnectWithoutMedia_typesInput[]
    upsert?: tracksUpsertWithWhereUniqueWithoutMedia_typesInput | tracksUpsertWithWhereUniqueWithoutMedia_typesInput[]
    createMany?: tracksCreateManyMedia_typesInputEnvelope
    set?: tracksWhereUniqueInput | tracksWhereUniqueInput[]
    disconnect?: tracksWhereUniqueInput | tracksWhereUniqueInput[]
    delete?: tracksWhereUniqueInput | tracksWhereUniqueInput[]
    connect?: tracksWhereUniqueInput | tracksWhereUniqueInput[]
    update?: tracksUpdateWithWhereUniqueWithoutMedia_typesInput | tracksUpdateWithWhereUniqueWithoutMedia_typesInput[]
    updateMany?: tracksUpdateManyWithWhereWithoutMedia_typesInput | tracksUpdateManyWithWhereWithoutMedia_typesInput[]
    deleteMany?: tracksScalarWhereInput | tracksScalarWhereInput[]
  }

  export type tracksCreateNestedOneWithoutPlaylist_trackInput = {
    create?: XOR<tracksCreateWithoutPlaylist_trackInput, tracksUncheckedCreateWithoutPlaylist_trackInput>
    connectOrCreate?: tracksCreateOrConnectWithoutPlaylist_trackInput
    connect?: tracksWhereUniqueInput
  }

  export type playlistsCreateNestedOneWithoutPlaylist_trackInput = {
    create?: XOR<playlistsCreateWithoutPlaylist_trackInput, playlistsUncheckedCreateWithoutPlaylist_trackInput>
    connectOrCreate?: playlistsCreateOrConnectWithoutPlaylist_trackInput
    connect?: playlistsWhereUniqueInput
  }

  export type tracksUpdateOneRequiredWithoutPlaylist_trackNestedInput = {
    create?: XOR<tracksCreateWithoutPlaylist_trackInput, tracksUncheckedCreateWithoutPlaylist_trackInput>
    connectOrCreate?: tracksCreateOrConnectWithoutPlaylist_trackInput
    upsert?: tracksUpsertWithoutPlaylist_trackInput
    connect?: tracksWhereUniqueInput
    update?: XOR<XOR<tracksUpdateToOneWithWhereWithoutPlaylist_trackInput, tracksUpdateWithoutPlaylist_trackInput>, tracksUncheckedUpdateWithoutPlaylist_trackInput>
  }

  export type playlistsUpdateOneRequiredWithoutPlaylist_trackNestedInput = {
    create?: XOR<playlistsCreateWithoutPlaylist_trackInput, playlistsUncheckedCreateWithoutPlaylist_trackInput>
    connectOrCreate?: playlistsCreateOrConnectWithoutPlaylist_trackInput
    upsert?: playlistsUpsertWithoutPlaylist_trackInput
    connect?: playlistsWhereUniqueInput
    update?: XOR<XOR<playlistsUpdateToOneWithWhereWithoutPlaylist_trackInput, playlistsUpdateWithoutPlaylist_trackInput>, playlistsUncheckedUpdateWithoutPlaylist_trackInput>
  }

  export type playlist_trackCreateNestedManyWithoutPlaylistsInput = {
    create?: XOR<playlist_trackCreateWithoutPlaylistsInput, playlist_trackUncheckedCreateWithoutPlaylistsInput> | playlist_trackCreateWithoutPlaylistsInput[] | playlist_trackUncheckedCreateWithoutPlaylistsInput[]
    connectOrCreate?: playlist_trackCreateOrConnectWithoutPlaylistsInput | playlist_trackCreateOrConnectWithoutPlaylistsInput[]
    createMany?: playlist_trackCreateManyPlaylistsInputEnvelope
    connect?: playlist_trackWhereUniqueInput | playlist_trackWhereUniqueInput[]
  }

  export type playlist_trackUncheckedCreateNestedManyWithoutPlaylistsInput = {
    create?: XOR<playlist_trackCreateWithoutPlaylistsInput, playlist_trackUncheckedCreateWithoutPlaylistsInput> | playlist_trackCreateWithoutPlaylistsInput[] | playlist_trackUncheckedCreateWithoutPlaylistsInput[]
    connectOrCreate?: playlist_trackCreateOrConnectWithoutPlaylistsInput | playlist_trackCreateOrConnectWithoutPlaylistsInput[]
    createMany?: playlist_trackCreateManyPlaylistsInputEnvelope
    connect?: playlist_trackWhereUniqueInput | playlist_trackWhereUniqueInput[]
  }

  export type playlist_trackUpdateManyWithoutPlaylistsNestedInput = {
    create?: XOR<playlist_trackCreateWithoutPlaylistsInput, playlist_trackUncheckedCreateWithoutPlaylistsInput> | playlist_trackCreateWithoutPlaylistsInput[] | playlist_trackUncheckedCreateWithoutPlaylistsInput[]
    connectOrCreate?: playlist_trackCreateOrConnectWithoutPlaylistsInput | playlist_trackCreateOrConnectWithoutPlaylistsInput[]
    upsert?: playlist_trackUpsertWithWhereUniqueWithoutPlaylistsInput | playlist_trackUpsertWithWhereUniqueWithoutPlaylistsInput[]
    createMany?: playlist_trackCreateManyPlaylistsInputEnvelope
    set?: playlist_trackWhereUniqueInput | playlist_trackWhereUniqueInput[]
    disconnect?: playlist_trackWhereUniqueInput | playlist_trackWhereUniqueInput[]
    delete?: playlist_trackWhereUniqueInput | playlist_trackWhereUniqueInput[]
    connect?: playlist_trackWhereUniqueInput | playlist_trackWhereUniqueInput[]
    update?: playlist_trackUpdateWithWhereUniqueWithoutPlaylistsInput | playlist_trackUpdateWithWhereUniqueWithoutPlaylistsInput[]
    updateMany?: playlist_trackUpdateManyWithWhereWithoutPlaylistsInput | playlist_trackUpdateManyWithWhereWithoutPlaylistsInput[]
    deleteMany?: playlist_trackScalarWhereInput | playlist_trackScalarWhereInput[]
  }

  export type playlist_trackUncheckedUpdateManyWithoutPlaylistsNestedInput = {
    create?: XOR<playlist_trackCreateWithoutPlaylistsInput, playlist_trackUncheckedCreateWithoutPlaylistsInput> | playlist_trackCreateWithoutPlaylistsInput[] | playlist_trackUncheckedCreateWithoutPlaylistsInput[]
    connectOrCreate?: playlist_trackCreateOrConnectWithoutPlaylistsInput | playlist_trackCreateOrConnectWithoutPlaylistsInput[]
    upsert?: playlist_trackUpsertWithWhereUniqueWithoutPlaylistsInput | playlist_trackUpsertWithWhereUniqueWithoutPlaylistsInput[]
    createMany?: playlist_trackCreateManyPlaylistsInputEnvelope
    set?: playlist_trackWhereUniqueInput | playlist_trackWhereUniqueInput[]
    disconnect?: playlist_trackWhereUniqueInput | playlist_trackWhereUniqueInput[]
    delete?: playlist_trackWhereUniqueInput | playlist_trackWhereUniqueInput[]
    connect?: playlist_trackWhereUniqueInput | playlist_trackWhereUniqueInput[]
    update?: playlist_trackUpdateWithWhereUniqueWithoutPlaylistsInput | playlist_trackUpdateWithWhereUniqueWithoutPlaylistsInput[]
    updateMany?: playlist_trackUpdateManyWithWhereWithoutPlaylistsInput | playlist_trackUpdateManyWithWhereWithoutPlaylistsInput[]
    deleteMany?: playlist_trackScalarWhereInput | playlist_trackScalarWhereInput[]
  }

  export type invoice_itemsCreateNestedManyWithoutTracksInput = {
    create?: XOR<invoice_itemsCreateWithoutTracksInput, invoice_itemsUncheckedCreateWithoutTracksInput> | invoice_itemsCreateWithoutTracksInput[] | invoice_itemsUncheckedCreateWithoutTracksInput[]
    connectOrCreate?: invoice_itemsCreateOrConnectWithoutTracksInput | invoice_itemsCreateOrConnectWithoutTracksInput[]
    createMany?: invoice_itemsCreateManyTracksInputEnvelope
    connect?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
  }

  export type playlist_trackCreateNestedManyWithoutTracksInput = {
    create?: XOR<playlist_trackCreateWithoutTracksInput, playlist_trackUncheckedCreateWithoutTracksInput> | playlist_trackCreateWithoutTracksInput[] | playlist_trackUncheckedCreateWithoutTracksInput[]
    connectOrCreate?: playlist_trackCreateOrConnectWithoutTracksInput | playlist_trackCreateOrConnectWithoutTracksInput[]
    createMany?: playlist_trackCreateManyTracksInputEnvelope
    connect?: playlist_trackWhereUniqueInput | playlist_trackWhereUniqueInput[]
  }

  export type media_typesCreateNestedOneWithoutTracksInput = {
    create?: XOR<media_typesCreateWithoutTracksInput, media_typesUncheckedCreateWithoutTracksInput>
    connectOrCreate?: media_typesCreateOrConnectWithoutTracksInput
    connect?: media_typesWhereUniqueInput
  }

  export type genresCreateNestedOneWithoutTracksInput = {
    create?: XOR<genresCreateWithoutTracksInput, genresUncheckedCreateWithoutTracksInput>
    connectOrCreate?: genresCreateOrConnectWithoutTracksInput
    connect?: genresWhereUniqueInput
  }

  export type albumsCreateNestedOneWithoutTracksInput = {
    create?: XOR<albumsCreateWithoutTracksInput, albumsUncheckedCreateWithoutTracksInput>
    connectOrCreate?: albumsCreateOrConnectWithoutTracksInput
    connect?: albumsWhereUniqueInput
  }

  export type invoice_itemsUncheckedCreateNestedManyWithoutTracksInput = {
    create?: XOR<invoice_itemsCreateWithoutTracksInput, invoice_itemsUncheckedCreateWithoutTracksInput> | invoice_itemsCreateWithoutTracksInput[] | invoice_itemsUncheckedCreateWithoutTracksInput[]
    connectOrCreate?: invoice_itemsCreateOrConnectWithoutTracksInput | invoice_itemsCreateOrConnectWithoutTracksInput[]
    createMany?: invoice_itemsCreateManyTracksInputEnvelope
    connect?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
  }

  export type playlist_trackUncheckedCreateNestedManyWithoutTracksInput = {
    create?: XOR<playlist_trackCreateWithoutTracksInput, playlist_trackUncheckedCreateWithoutTracksInput> | playlist_trackCreateWithoutTracksInput[] | playlist_trackUncheckedCreateWithoutTracksInput[]
    connectOrCreate?: playlist_trackCreateOrConnectWithoutTracksInput | playlist_trackCreateOrConnectWithoutTracksInput[]
    createMany?: playlist_trackCreateManyTracksInputEnvelope
    connect?: playlist_trackWhereUniqueInput | playlist_trackWhereUniqueInput[]
  }

  export type invoice_itemsUpdateManyWithoutTracksNestedInput = {
    create?: XOR<invoice_itemsCreateWithoutTracksInput, invoice_itemsUncheckedCreateWithoutTracksInput> | invoice_itemsCreateWithoutTracksInput[] | invoice_itemsUncheckedCreateWithoutTracksInput[]
    connectOrCreate?: invoice_itemsCreateOrConnectWithoutTracksInput | invoice_itemsCreateOrConnectWithoutTracksInput[]
    upsert?: invoice_itemsUpsertWithWhereUniqueWithoutTracksInput | invoice_itemsUpsertWithWhereUniqueWithoutTracksInput[]
    createMany?: invoice_itemsCreateManyTracksInputEnvelope
    set?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
    disconnect?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
    delete?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
    connect?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
    update?: invoice_itemsUpdateWithWhereUniqueWithoutTracksInput | invoice_itemsUpdateWithWhereUniqueWithoutTracksInput[]
    updateMany?: invoice_itemsUpdateManyWithWhereWithoutTracksInput | invoice_itemsUpdateManyWithWhereWithoutTracksInput[]
    deleteMany?: invoice_itemsScalarWhereInput | invoice_itemsScalarWhereInput[]
  }

  export type playlist_trackUpdateManyWithoutTracksNestedInput = {
    create?: XOR<playlist_trackCreateWithoutTracksInput, playlist_trackUncheckedCreateWithoutTracksInput> | playlist_trackCreateWithoutTracksInput[] | playlist_trackUncheckedCreateWithoutTracksInput[]
    connectOrCreate?: playlist_trackCreateOrConnectWithoutTracksInput | playlist_trackCreateOrConnectWithoutTracksInput[]
    upsert?: playlist_trackUpsertWithWhereUniqueWithoutTracksInput | playlist_trackUpsertWithWhereUniqueWithoutTracksInput[]
    createMany?: playlist_trackCreateManyTracksInputEnvelope
    set?: playlist_trackWhereUniqueInput | playlist_trackWhereUniqueInput[]
    disconnect?: playlist_trackWhereUniqueInput | playlist_trackWhereUniqueInput[]
    delete?: playlist_trackWhereUniqueInput | playlist_trackWhereUniqueInput[]
    connect?: playlist_trackWhereUniqueInput | playlist_trackWhereUniqueInput[]
    update?: playlist_trackUpdateWithWhereUniqueWithoutTracksInput | playlist_trackUpdateWithWhereUniqueWithoutTracksInput[]
    updateMany?: playlist_trackUpdateManyWithWhereWithoutTracksInput | playlist_trackUpdateManyWithWhereWithoutTracksInput[]
    deleteMany?: playlist_trackScalarWhereInput | playlist_trackScalarWhereInput[]
  }

  export type media_typesUpdateOneRequiredWithoutTracksNestedInput = {
    create?: XOR<media_typesCreateWithoutTracksInput, media_typesUncheckedCreateWithoutTracksInput>
    connectOrCreate?: media_typesCreateOrConnectWithoutTracksInput
    upsert?: media_typesUpsertWithoutTracksInput
    connect?: media_typesWhereUniqueInput
    update?: XOR<XOR<media_typesUpdateToOneWithWhereWithoutTracksInput, media_typesUpdateWithoutTracksInput>, media_typesUncheckedUpdateWithoutTracksInput>
  }

  export type genresUpdateOneWithoutTracksNestedInput = {
    create?: XOR<genresCreateWithoutTracksInput, genresUncheckedCreateWithoutTracksInput>
    connectOrCreate?: genresCreateOrConnectWithoutTracksInput
    upsert?: genresUpsertWithoutTracksInput
    disconnect?: genresWhereInput | boolean
    delete?: genresWhereInput | boolean
    connect?: genresWhereUniqueInput
    update?: XOR<XOR<genresUpdateToOneWithWhereWithoutTracksInput, genresUpdateWithoutTracksInput>, genresUncheckedUpdateWithoutTracksInput>
  }

  export type albumsUpdateOneWithoutTracksNestedInput = {
    create?: XOR<albumsCreateWithoutTracksInput, albumsUncheckedCreateWithoutTracksInput>
    connectOrCreate?: albumsCreateOrConnectWithoutTracksInput
    upsert?: albumsUpsertWithoutTracksInput
    disconnect?: albumsWhereInput | boolean
    delete?: albumsWhereInput | boolean
    connect?: albumsWhereUniqueInput
    update?: XOR<XOR<albumsUpdateToOneWithWhereWithoutTracksInput, albumsUpdateWithoutTracksInput>, albumsUncheckedUpdateWithoutTracksInput>
  }

  export type invoice_itemsUncheckedUpdateManyWithoutTracksNestedInput = {
    create?: XOR<invoice_itemsCreateWithoutTracksInput, invoice_itemsUncheckedCreateWithoutTracksInput> | invoice_itemsCreateWithoutTracksInput[] | invoice_itemsUncheckedCreateWithoutTracksInput[]
    connectOrCreate?: invoice_itemsCreateOrConnectWithoutTracksInput | invoice_itemsCreateOrConnectWithoutTracksInput[]
    upsert?: invoice_itemsUpsertWithWhereUniqueWithoutTracksInput | invoice_itemsUpsertWithWhereUniqueWithoutTracksInput[]
    createMany?: invoice_itemsCreateManyTracksInputEnvelope
    set?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
    disconnect?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
    delete?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
    connect?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
    update?: invoice_itemsUpdateWithWhereUniqueWithoutTracksInput | invoice_itemsUpdateWithWhereUniqueWithoutTracksInput[]
    updateMany?: invoice_itemsUpdateManyWithWhereWithoutTracksInput | invoice_itemsUpdateManyWithWhereWithoutTracksInput[]
    deleteMany?: invoice_itemsScalarWhereInput | invoice_itemsScalarWhereInput[]
  }

  export type playlist_trackUncheckedUpdateManyWithoutTracksNestedInput = {
    create?: XOR<playlist_trackCreateWithoutTracksInput, playlist_trackUncheckedCreateWithoutTracksInput> | playlist_trackCreateWithoutTracksInput[] | playlist_trackUncheckedCreateWithoutTracksInput[]
    connectOrCreate?: playlist_trackCreateOrConnectWithoutTracksInput | playlist_trackCreateOrConnectWithoutTracksInput[]
    upsert?: playlist_trackUpsertWithWhereUniqueWithoutTracksInput | playlist_trackUpsertWithWhereUniqueWithoutTracksInput[]
    createMany?: playlist_trackCreateManyTracksInputEnvelope
    set?: playlist_trackWhereUniqueInput | playlist_trackWhereUniqueInput[]
    disconnect?: playlist_trackWhereUniqueInput | playlist_trackWhereUniqueInput[]
    delete?: playlist_trackWhereUniqueInput | playlist_trackWhereUniqueInput[]
    connect?: playlist_trackWhereUniqueInput | playlist_trackWhereUniqueInput[]
    update?: playlist_trackUpdateWithWhereUniqueWithoutTracksInput | playlist_trackUpdateWithWhereUniqueWithoutTracksInput[]
    updateMany?: playlist_trackUpdateManyWithWhereWithoutTracksInput | playlist_trackUpdateManyWithWhereWithoutTracksInput[]
    deleteMany?: playlist_trackScalarWhereInput | playlist_trackScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type artistsCreateWithoutAlbumsInput = {
    Name?: string | null
  }

  export type artistsUncheckedCreateWithoutAlbumsInput = {
    ArtistId?: number
    Name?: string | null
  }

  export type artistsCreateOrConnectWithoutAlbumsInput = {
    where: artistsWhereUniqueInput
    create: XOR<artistsCreateWithoutAlbumsInput, artistsUncheckedCreateWithoutAlbumsInput>
  }

  export type tracksCreateWithoutAlbumsInput = {
    Name: string
    Composer?: string | null
    Milliseconds: number
    Bytes?: number | null
    UnitPrice: Decimal | DecimalJsLike | number | string
    invoice_items?: invoice_itemsCreateNestedManyWithoutTracksInput
    playlist_track?: playlist_trackCreateNestedManyWithoutTracksInput
    media_types: media_typesCreateNestedOneWithoutTracksInput
    genres?: genresCreateNestedOneWithoutTracksInput
  }

  export type tracksUncheckedCreateWithoutAlbumsInput = {
    TrackId?: number
    Name: string
    MediaTypeId: number
    GenreId?: number | null
    Composer?: string | null
    Milliseconds: number
    Bytes?: number | null
    UnitPrice: Decimal | DecimalJsLike | number | string
    invoice_items?: invoice_itemsUncheckedCreateNestedManyWithoutTracksInput
    playlist_track?: playlist_trackUncheckedCreateNestedManyWithoutTracksInput
  }

  export type tracksCreateOrConnectWithoutAlbumsInput = {
    where: tracksWhereUniqueInput
    create: XOR<tracksCreateWithoutAlbumsInput, tracksUncheckedCreateWithoutAlbumsInput>
  }

  export type tracksCreateManyAlbumsInputEnvelope = {
    data: tracksCreateManyAlbumsInput | tracksCreateManyAlbumsInput[]
  }

  export type artistsUpsertWithoutAlbumsInput = {
    update: XOR<artistsUpdateWithoutAlbumsInput, artistsUncheckedUpdateWithoutAlbumsInput>
    create: XOR<artistsCreateWithoutAlbumsInput, artistsUncheckedCreateWithoutAlbumsInput>
    where?: artistsWhereInput
  }

  export type artistsUpdateToOneWithWhereWithoutAlbumsInput = {
    where?: artistsWhereInput
    data: XOR<artistsUpdateWithoutAlbumsInput, artistsUncheckedUpdateWithoutAlbumsInput>
  }

  export type artistsUpdateWithoutAlbumsInput = {
    Name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type artistsUncheckedUpdateWithoutAlbumsInput = {
    ArtistId?: IntFieldUpdateOperationsInput | number
    Name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tracksUpsertWithWhereUniqueWithoutAlbumsInput = {
    where: tracksWhereUniqueInput
    update: XOR<tracksUpdateWithoutAlbumsInput, tracksUncheckedUpdateWithoutAlbumsInput>
    create: XOR<tracksCreateWithoutAlbumsInput, tracksUncheckedCreateWithoutAlbumsInput>
  }

  export type tracksUpdateWithWhereUniqueWithoutAlbumsInput = {
    where: tracksWhereUniqueInput
    data: XOR<tracksUpdateWithoutAlbumsInput, tracksUncheckedUpdateWithoutAlbumsInput>
  }

  export type tracksUpdateManyWithWhereWithoutAlbumsInput = {
    where: tracksScalarWhereInput
    data: XOR<tracksUpdateManyMutationInput, tracksUncheckedUpdateManyWithoutAlbumsInput>
  }

  export type tracksScalarWhereInput = {
    AND?: tracksScalarWhereInput | tracksScalarWhereInput[]
    OR?: tracksScalarWhereInput[]
    NOT?: tracksScalarWhereInput | tracksScalarWhereInput[]
    TrackId?: IntFilter<"tracks"> | number
    Name?: StringFilter<"tracks"> | string
    AlbumId?: IntNullableFilter<"tracks"> | number | null
    MediaTypeId?: IntFilter<"tracks"> | number
    GenreId?: IntNullableFilter<"tracks"> | number | null
    Composer?: StringNullableFilter<"tracks"> | string | null
    Milliseconds?: IntFilter<"tracks"> | number
    Bytes?: IntNullableFilter<"tracks"> | number | null
    UnitPrice?: DecimalFilter<"tracks"> | Decimal | DecimalJsLike | number | string
  }

  export type albumsCreateWithoutArtistsInput = {
    Title: string
    tracks?: tracksCreateNestedManyWithoutAlbumsInput
  }

  export type albumsUncheckedCreateWithoutArtistsInput = {
    AlbumId?: number
    Title: string
    tracks?: tracksUncheckedCreateNestedManyWithoutAlbumsInput
  }

  export type albumsCreateOrConnectWithoutArtistsInput = {
    where: albumsWhereUniqueInput
    create: XOR<albumsCreateWithoutArtistsInput, albumsUncheckedCreateWithoutArtistsInput>
  }

  export type albumsCreateManyArtistsInputEnvelope = {
    data: albumsCreateManyArtistsInput | albumsCreateManyArtistsInput[]
  }

  export type albumsUpsertWithWhereUniqueWithoutArtistsInput = {
    where: albumsWhereUniqueInput
    update: XOR<albumsUpdateWithoutArtistsInput, albumsUncheckedUpdateWithoutArtistsInput>
    create: XOR<albumsCreateWithoutArtistsInput, albumsUncheckedCreateWithoutArtistsInput>
  }

  export type albumsUpdateWithWhereUniqueWithoutArtistsInput = {
    where: albumsWhereUniqueInput
    data: XOR<albumsUpdateWithoutArtistsInput, albumsUncheckedUpdateWithoutArtistsInput>
  }

  export type albumsUpdateManyWithWhereWithoutArtistsInput = {
    where: albumsScalarWhereInput
    data: XOR<albumsUpdateManyMutationInput, albumsUncheckedUpdateManyWithoutArtistsInput>
  }

  export type albumsScalarWhereInput = {
    AND?: albumsScalarWhereInput | albumsScalarWhereInput[]
    OR?: albumsScalarWhereInput[]
    NOT?: albumsScalarWhereInput | albumsScalarWhereInput[]
    AlbumId?: IntFilter<"albums"> | number
    Title?: StringFilter<"albums"> | string
    ArtistId?: IntFilter<"albums"> | number
  }

  export type employeesCreateWithoutCustomersInput = {
    LastName: string
    FirstName: string
    ImageURL?: string
    Title?: string | null
    BirthDate?: Date | string | null
    HireDate?: Date | string | null
    Address?: string | null
    City?: string | null
    State?: string | null
    Country?: string | null
    PostalCode?: string | null
    Phone?: string | null
    Fax?: string | null
    Email?: string | null
    employees?: employeesCreateNestedOneWithoutOther_employeesInput
    other_employees?: employeesCreateNestedManyWithoutEmployeesInput
  }

  export type employeesUncheckedCreateWithoutCustomersInput = {
    EmployeeId?: number
    LastName: string
    FirstName: string
    ImageURL?: string
    Title?: string | null
    ReportsTo?: number | null
    BirthDate?: Date | string | null
    HireDate?: Date | string | null
    Address?: string | null
    City?: string | null
    State?: string | null
    Country?: string | null
    PostalCode?: string | null
    Phone?: string | null
    Fax?: string | null
    Email?: string | null
    other_employees?: employeesUncheckedCreateNestedManyWithoutEmployeesInput
  }

  export type employeesCreateOrConnectWithoutCustomersInput = {
    where: employeesWhereUniqueInput
    create: XOR<employeesCreateWithoutCustomersInput, employeesUncheckedCreateWithoutCustomersInput>
  }

  export type invoicesCreateWithoutCustomersInput = {
    InvoiceDate: Date | string
    BillingAddress?: string | null
    BillingCity?: string | null
    BillingState?: string | null
    BillingCountry?: string | null
    BillingPostalCode?: string | null
    Total: Decimal | DecimalJsLike | number | string
    invoice_items?: invoice_itemsCreateNestedManyWithoutInvoicesInput
  }

  export type invoicesUncheckedCreateWithoutCustomersInput = {
    InvoiceId?: number
    InvoiceDate: Date | string
    BillingAddress?: string | null
    BillingCity?: string | null
    BillingState?: string | null
    BillingCountry?: string | null
    BillingPostalCode?: string | null
    Total: Decimal | DecimalJsLike | number | string
    invoice_items?: invoice_itemsUncheckedCreateNestedManyWithoutInvoicesInput
  }

  export type invoicesCreateOrConnectWithoutCustomersInput = {
    where: invoicesWhereUniqueInput
    create: XOR<invoicesCreateWithoutCustomersInput, invoicesUncheckedCreateWithoutCustomersInput>
  }

  export type invoicesCreateManyCustomersInputEnvelope = {
    data: invoicesCreateManyCustomersInput | invoicesCreateManyCustomersInput[]
  }

  export type employeesUpsertWithoutCustomersInput = {
    update: XOR<employeesUpdateWithoutCustomersInput, employeesUncheckedUpdateWithoutCustomersInput>
    create: XOR<employeesCreateWithoutCustomersInput, employeesUncheckedCreateWithoutCustomersInput>
    where?: employeesWhereInput
  }

  export type employeesUpdateToOneWithWhereWithoutCustomersInput = {
    where?: employeesWhereInput
    data: XOR<employeesUpdateWithoutCustomersInput, employeesUncheckedUpdateWithoutCustomersInput>
  }

  export type employeesUpdateWithoutCustomersInput = {
    LastName?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    ImageURL?: StringFieldUpdateOperationsInput | string
    Title?: NullableStringFieldUpdateOperationsInput | string | null
    BirthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    HireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    State?: NullableStringFieldUpdateOperationsInput | string | null
    Country?: NullableStringFieldUpdateOperationsInput | string | null
    PostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Fax?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    employees?: employeesUpdateOneWithoutOther_employeesNestedInput
    other_employees?: employeesUpdateManyWithoutEmployeesNestedInput
  }

  export type employeesUncheckedUpdateWithoutCustomersInput = {
    EmployeeId?: IntFieldUpdateOperationsInput | number
    LastName?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    ImageURL?: StringFieldUpdateOperationsInput | string
    Title?: NullableStringFieldUpdateOperationsInput | string | null
    ReportsTo?: NullableIntFieldUpdateOperationsInput | number | null
    BirthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    HireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    State?: NullableStringFieldUpdateOperationsInput | string | null
    Country?: NullableStringFieldUpdateOperationsInput | string | null
    PostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Fax?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    other_employees?: employeesUncheckedUpdateManyWithoutEmployeesNestedInput
  }

  export type invoicesUpsertWithWhereUniqueWithoutCustomersInput = {
    where: invoicesWhereUniqueInput
    update: XOR<invoicesUpdateWithoutCustomersInput, invoicesUncheckedUpdateWithoutCustomersInput>
    create: XOR<invoicesCreateWithoutCustomersInput, invoicesUncheckedCreateWithoutCustomersInput>
  }

  export type invoicesUpdateWithWhereUniqueWithoutCustomersInput = {
    where: invoicesWhereUniqueInput
    data: XOR<invoicesUpdateWithoutCustomersInput, invoicesUncheckedUpdateWithoutCustomersInput>
  }

  export type invoicesUpdateManyWithWhereWithoutCustomersInput = {
    where: invoicesScalarWhereInput
    data: XOR<invoicesUpdateManyMutationInput, invoicesUncheckedUpdateManyWithoutCustomersInput>
  }

  export type invoicesScalarWhereInput = {
    AND?: invoicesScalarWhereInput | invoicesScalarWhereInput[]
    OR?: invoicesScalarWhereInput[]
    NOT?: invoicesScalarWhereInput | invoicesScalarWhereInput[]
    InvoiceId?: IntFilter<"invoices"> | number
    CustomerId?: IntFilter<"invoices"> | number
    InvoiceDate?: DateTimeFilter<"invoices"> | Date | string
    BillingAddress?: StringNullableFilter<"invoices"> | string | null
    BillingCity?: StringNullableFilter<"invoices"> | string | null
    BillingState?: StringNullableFilter<"invoices"> | string | null
    BillingCountry?: StringNullableFilter<"invoices"> | string | null
    BillingPostalCode?: StringNullableFilter<"invoices"> | string | null
    Total?: DecimalFilter<"invoices"> | Decimal | DecimalJsLike | number | string
  }

  export type customersCreateWithoutEmployeesInput = {
    FirstName: string
    LastName: string
    ImageURL?: string
    Company?: string | null
    Address?: string | null
    City?: string | null
    State?: string | null
    Country?: string | null
    PostalCode?: string | null
    Phone?: string | null
    Fax?: string | null
    Email: string
    invoices?: invoicesCreateNestedManyWithoutCustomersInput
  }

  export type customersUncheckedCreateWithoutEmployeesInput = {
    CustomerId?: number
    FirstName: string
    LastName: string
    ImageURL?: string
    Company?: string | null
    Address?: string | null
    City?: string | null
    State?: string | null
    Country?: string | null
    PostalCode?: string | null
    Phone?: string | null
    Fax?: string | null
    Email: string
    invoices?: invoicesUncheckedCreateNestedManyWithoutCustomersInput
  }

  export type customersCreateOrConnectWithoutEmployeesInput = {
    where: customersWhereUniqueInput
    create: XOR<customersCreateWithoutEmployeesInput, customersUncheckedCreateWithoutEmployeesInput>
  }

  export type customersCreateManyEmployeesInputEnvelope = {
    data: customersCreateManyEmployeesInput | customersCreateManyEmployeesInput[]
  }

  export type employeesCreateWithoutOther_employeesInput = {
    LastName: string
    FirstName: string
    ImageURL?: string
    Title?: string | null
    BirthDate?: Date | string | null
    HireDate?: Date | string | null
    Address?: string | null
    City?: string | null
    State?: string | null
    Country?: string | null
    PostalCode?: string | null
    Phone?: string | null
    Fax?: string | null
    Email?: string | null
    customers?: customersCreateNestedManyWithoutEmployeesInput
    employees?: employeesCreateNestedOneWithoutOther_employeesInput
  }

  export type employeesUncheckedCreateWithoutOther_employeesInput = {
    EmployeeId?: number
    LastName: string
    FirstName: string
    ImageURL?: string
    Title?: string | null
    ReportsTo?: number | null
    BirthDate?: Date | string | null
    HireDate?: Date | string | null
    Address?: string | null
    City?: string | null
    State?: string | null
    Country?: string | null
    PostalCode?: string | null
    Phone?: string | null
    Fax?: string | null
    Email?: string | null
    customers?: customersUncheckedCreateNestedManyWithoutEmployeesInput
  }

  export type employeesCreateOrConnectWithoutOther_employeesInput = {
    where: employeesWhereUniqueInput
    create: XOR<employeesCreateWithoutOther_employeesInput, employeesUncheckedCreateWithoutOther_employeesInput>
  }

  export type employeesCreateWithoutEmployeesInput = {
    LastName: string
    FirstName: string
    ImageURL?: string
    Title?: string | null
    BirthDate?: Date | string | null
    HireDate?: Date | string | null
    Address?: string | null
    City?: string | null
    State?: string | null
    Country?: string | null
    PostalCode?: string | null
    Phone?: string | null
    Fax?: string | null
    Email?: string | null
    customers?: customersCreateNestedManyWithoutEmployeesInput
    other_employees?: employeesCreateNestedManyWithoutEmployeesInput
  }

  export type employeesUncheckedCreateWithoutEmployeesInput = {
    EmployeeId?: number
    LastName: string
    FirstName: string
    ImageURL?: string
    Title?: string | null
    BirthDate?: Date | string | null
    HireDate?: Date | string | null
    Address?: string | null
    City?: string | null
    State?: string | null
    Country?: string | null
    PostalCode?: string | null
    Phone?: string | null
    Fax?: string | null
    Email?: string | null
    customers?: customersUncheckedCreateNestedManyWithoutEmployeesInput
    other_employees?: employeesUncheckedCreateNestedManyWithoutEmployeesInput
  }

  export type employeesCreateOrConnectWithoutEmployeesInput = {
    where: employeesWhereUniqueInput
    create: XOR<employeesCreateWithoutEmployeesInput, employeesUncheckedCreateWithoutEmployeesInput>
  }

  export type employeesCreateManyEmployeesInputEnvelope = {
    data: employeesCreateManyEmployeesInput | employeesCreateManyEmployeesInput[]
  }

  export type customersUpsertWithWhereUniqueWithoutEmployeesInput = {
    where: customersWhereUniqueInput
    update: XOR<customersUpdateWithoutEmployeesInput, customersUncheckedUpdateWithoutEmployeesInput>
    create: XOR<customersCreateWithoutEmployeesInput, customersUncheckedCreateWithoutEmployeesInput>
  }

  export type customersUpdateWithWhereUniqueWithoutEmployeesInput = {
    where: customersWhereUniqueInput
    data: XOR<customersUpdateWithoutEmployeesInput, customersUncheckedUpdateWithoutEmployeesInput>
  }

  export type customersUpdateManyWithWhereWithoutEmployeesInput = {
    where: customersScalarWhereInput
    data: XOR<customersUpdateManyMutationInput, customersUncheckedUpdateManyWithoutEmployeesInput>
  }

  export type customersScalarWhereInput = {
    AND?: customersScalarWhereInput | customersScalarWhereInput[]
    OR?: customersScalarWhereInput[]
    NOT?: customersScalarWhereInput | customersScalarWhereInput[]
    CustomerId?: IntFilter<"customers"> | number
    FirstName?: StringFilter<"customers"> | string
    LastName?: StringFilter<"customers"> | string
    ImageURL?: StringFilter<"customers"> | string
    Company?: StringNullableFilter<"customers"> | string | null
    Address?: StringNullableFilter<"customers"> | string | null
    City?: StringNullableFilter<"customers"> | string | null
    State?: StringNullableFilter<"customers"> | string | null
    Country?: StringNullableFilter<"customers"> | string | null
    PostalCode?: StringNullableFilter<"customers"> | string | null
    Phone?: StringNullableFilter<"customers"> | string | null
    Fax?: StringNullableFilter<"customers"> | string | null
    Email?: StringFilter<"customers"> | string
    SupportRepId?: IntNullableFilter<"customers"> | number | null
  }

  export type employeesUpsertWithoutOther_employeesInput = {
    update: XOR<employeesUpdateWithoutOther_employeesInput, employeesUncheckedUpdateWithoutOther_employeesInput>
    create: XOR<employeesCreateWithoutOther_employeesInput, employeesUncheckedCreateWithoutOther_employeesInput>
    where?: employeesWhereInput
  }

  export type employeesUpdateToOneWithWhereWithoutOther_employeesInput = {
    where?: employeesWhereInput
    data: XOR<employeesUpdateWithoutOther_employeesInput, employeesUncheckedUpdateWithoutOther_employeesInput>
  }

  export type employeesUpdateWithoutOther_employeesInput = {
    LastName?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    ImageURL?: StringFieldUpdateOperationsInput | string
    Title?: NullableStringFieldUpdateOperationsInput | string | null
    BirthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    HireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    State?: NullableStringFieldUpdateOperationsInput | string | null
    Country?: NullableStringFieldUpdateOperationsInput | string | null
    PostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Fax?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    customers?: customersUpdateManyWithoutEmployeesNestedInput
    employees?: employeesUpdateOneWithoutOther_employeesNestedInput
  }

  export type employeesUncheckedUpdateWithoutOther_employeesInput = {
    EmployeeId?: IntFieldUpdateOperationsInput | number
    LastName?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    ImageURL?: StringFieldUpdateOperationsInput | string
    Title?: NullableStringFieldUpdateOperationsInput | string | null
    ReportsTo?: NullableIntFieldUpdateOperationsInput | number | null
    BirthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    HireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    State?: NullableStringFieldUpdateOperationsInput | string | null
    Country?: NullableStringFieldUpdateOperationsInput | string | null
    PostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Fax?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    customers?: customersUncheckedUpdateManyWithoutEmployeesNestedInput
  }

  export type employeesUpsertWithWhereUniqueWithoutEmployeesInput = {
    where: employeesWhereUniqueInput
    update: XOR<employeesUpdateWithoutEmployeesInput, employeesUncheckedUpdateWithoutEmployeesInput>
    create: XOR<employeesCreateWithoutEmployeesInput, employeesUncheckedCreateWithoutEmployeesInput>
  }

  export type employeesUpdateWithWhereUniqueWithoutEmployeesInput = {
    where: employeesWhereUniqueInput
    data: XOR<employeesUpdateWithoutEmployeesInput, employeesUncheckedUpdateWithoutEmployeesInput>
  }

  export type employeesUpdateManyWithWhereWithoutEmployeesInput = {
    where: employeesScalarWhereInput
    data: XOR<employeesUpdateManyMutationInput, employeesUncheckedUpdateManyWithoutEmployeesInput>
  }

  export type employeesScalarWhereInput = {
    AND?: employeesScalarWhereInput | employeesScalarWhereInput[]
    OR?: employeesScalarWhereInput[]
    NOT?: employeesScalarWhereInput | employeesScalarWhereInput[]
    EmployeeId?: IntFilter<"employees"> | number
    LastName?: StringFilter<"employees"> | string
    FirstName?: StringFilter<"employees"> | string
    ImageURL?: StringFilter<"employees"> | string
    Title?: StringNullableFilter<"employees"> | string | null
    ReportsTo?: IntNullableFilter<"employees"> | number | null
    BirthDate?: DateTimeNullableFilter<"employees"> | Date | string | null
    HireDate?: DateTimeNullableFilter<"employees"> | Date | string | null
    Address?: StringNullableFilter<"employees"> | string | null
    City?: StringNullableFilter<"employees"> | string | null
    State?: StringNullableFilter<"employees"> | string | null
    Country?: StringNullableFilter<"employees"> | string | null
    PostalCode?: StringNullableFilter<"employees"> | string | null
    Phone?: StringNullableFilter<"employees"> | string | null
    Fax?: StringNullableFilter<"employees"> | string | null
    Email?: StringNullableFilter<"employees"> | string | null
  }

  export type tracksCreateWithoutGenresInput = {
    Name: string
    Composer?: string | null
    Milliseconds: number
    Bytes?: number | null
    UnitPrice: Decimal | DecimalJsLike | number | string
    invoice_items?: invoice_itemsCreateNestedManyWithoutTracksInput
    playlist_track?: playlist_trackCreateNestedManyWithoutTracksInput
    media_types: media_typesCreateNestedOneWithoutTracksInput
    albums?: albumsCreateNestedOneWithoutTracksInput
  }

  export type tracksUncheckedCreateWithoutGenresInput = {
    TrackId?: number
    Name: string
    AlbumId?: number | null
    MediaTypeId: number
    Composer?: string | null
    Milliseconds: number
    Bytes?: number | null
    UnitPrice: Decimal | DecimalJsLike | number | string
    invoice_items?: invoice_itemsUncheckedCreateNestedManyWithoutTracksInput
    playlist_track?: playlist_trackUncheckedCreateNestedManyWithoutTracksInput
  }

  export type tracksCreateOrConnectWithoutGenresInput = {
    where: tracksWhereUniqueInput
    create: XOR<tracksCreateWithoutGenresInput, tracksUncheckedCreateWithoutGenresInput>
  }

  export type tracksCreateManyGenresInputEnvelope = {
    data: tracksCreateManyGenresInput | tracksCreateManyGenresInput[]
  }

  export type tracksUpsertWithWhereUniqueWithoutGenresInput = {
    where: tracksWhereUniqueInput
    update: XOR<tracksUpdateWithoutGenresInput, tracksUncheckedUpdateWithoutGenresInput>
    create: XOR<tracksCreateWithoutGenresInput, tracksUncheckedCreateWithoutGenresInput>
  }

  export type tracksUpdateWithWhereUniqueWithoutGenresInput = {
    where: tracksWhereUniqueInput
    data: XOR<tracksUpdateWithoutGenresInput, tracksUncheckedUpdateWithoutGenresInput>
  }

  export type tracksUpdateManyWithWhereWithoutGenresInput = {
    where: tracksScalarWhereInput
    data: XOR<tracksUpdateManyMutationInput, tracksUncheckedUpdateManyWithoutGenresInput>
  }

  export type tracksCreateWithoutInvoice_itemsInput = {
    Name: string
    Composer?: string | null
    Milliseconds: number
    Bytes?: number | null
    UnitPrice: Decimal | DecimalJsLike | number | string
    playlist_track?: playlist_trackCreateNestedManyWithoutTracksInput
    media_types: media_typesCreateNestedOneWithoutTracksInput
    genres?: genresCreateNestedOneWithoutTracksInput
    albums?: albumsCreateNestedOneWithoutTracksInput
  }

  export type tracksUncheckedCreateWithoutInvoice_itemsInput = {
    TrackId?: number
    Name: string
    AlbumId?: number | null
    MediaTypeId: number
    GenreId?: number | null
    Composer?: string | null
    Milliseconds: number
    Bytes?: number | null
    UnitPrice: Decimal | DecimalJsLike | number | string
    playlist_track?: playlist_trackUncheckedCreateNestedManyWithoutTracksInput
  }

  export type tracksCreateOrConnectWithoutInvoice_itemsInput = {
    where: tracksWhereUniqueInput
    create: XOR<tracksCreateWithoutInvoice_itemsInput, tracksUncheckedCreateWithoutInvoice_itemsInput>
  }

  export type invoicesCreateWithoutInvoice_itemsInput = {
    InvoiceDate: Date | string
    BillingAddress?: string | null
    BillingCity?: string | null
    BillingState?: string | null
    BillingCountry?: string | null
    BillingPostalCode?: string | null
    Total: Decimal | DecimalJsLike | number | string
    customers: customersCreateNestedOneWithoutInvoicesInput
  }

  export type invoicesUncheckedCreateWithoutInvoice_itemsInput = {
    InvoiceId?: number
    CustomerId: number
    InvoiceDate: Date | string
    BillingAddress?: string | null
    BillingCity?: string | null
    BillingState?: string | null
    BillingCountry?: string | null
    BillingPostalCode?: string | null
    Total: Decimal | DecimalJsLike | number | string
  }

  export type invoicesCreateOrConnectWithoutInvoice_itemsInput = {
    where: invoicesWhereUniqueInput
    create: XOR<invoicesCreateWithoutInvoice_itemsInput, invoicesUncheckedCreateWithoutInvoice_itemsInput>
  }

  export type tracksUpsertWithoutInvoice_itemsInput = {
    update: XOR<tracksUpdateWithoutInvoice_itemsInput, tracksUncheckedUpdateWithoutInvoice_itemsInput>
    create: XOR<tracksCreateWithoutInvoice_itemsInput, tracksUncheckedCreateWithoutInvoice_itemsInput>
    where?: tracksWhereInput
  }

  export type tracksUpdateToOneWithWhereWithoutInvoice_itemsInput = {
    where?: tracksWhereInput
    data: XOR<tracksUpdateWithoutInvoice_itemsInput, tracksUncheckedUpdateWithoutInvoice_itemsInput>
  }

  export type tracksUpdateWithoutInvoice_itemsInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Composer?: NullableStringFieldUpdateOperationsInput | string | null
    Milliseconds?: IntFieldUpdateOperationsInput | number
    Bytes?: NullableIntFieldUpdateOperationsInput | number | null
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    playlist_track?: playlist_trackUpdateManyWithoutTracksNestedInput
    media_types?: media_typesUpdateOneRequiredWithoutTracksNestedInput
    genres?: genresUpdateOneWithoutTracksNestedInput
    albums?: albumsUpdateOneWithoutTracksNestedInput
  }

  export type tracksUncheckedUpdateWithoutInvoice_itemsInput = {
    TrackId?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    AlbumId?: NullableIntFieldUpdateOperationsInput | number | null
    MediaTypeId?: IntFieldUpdateOperationsInput | number
    GenreId?: NullableIntFieldUpdateOperationsInput | number | null
    Composer?: NullableStringFieldUpdateOperationsInput | string | null
    Milliseconds?: IntFieldUpdateOperationsInput | number
    Bytes?: NullableIntFieldUpdateOperationsInput | number | null
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    playlist_track?: playlist_trackUncheckedUpdateManyWithoutTracksNestedInput
  }

  export type invoicesUpsertWithoutInvoice_itemsInput = {
    update: XOR<invoicesUpdateWithoutInvoice_itemsInput, invoicesUncheckedUpdateWithoutInvoice_itemsInput>
    create: XOR<invoicesCreateWithoutInvoice_itemsInput, invoicesUncheckedCreateWithoutInvoice_itemsInput>
    where?: invoicesWhereInput
  }

  export type invoicesUpdateToOneWithWhereWithoutInvoice_itemsInput = {
    where?: invoicesWhereInput
    data: XOR<invoicesUpdateWithoutInvoice_itemsInput, invoicesUncheckedUpdateWithoutInvoice_itemsInput>
  }

  export type invoicesUpdateWithoutInvoice_itemsInput = {
    InvoiceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    BillingAddress?: NullableStringFieldUpdateOperationsInput | string | null
    BillingCity?: NullableStringFieldUpdateOperationsInput | string | null
    BillingState?: NullableStringFieldUpdateOperationsInput | string | null
    BillingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    BillingPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    customers?: customersUpdateOneRequiredWithoutInvoicesNestedInput
  }

  export type invoicesUncheckedUpdateWithoutInvoice_itemsInput = {
    InvoiceId?: IntFieldUpdateOperationsInput | number
    CustomerId?: IntFieldUpdateOperationsInput | number
    InvoiceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    BillingAddress?: NullableStringFieldUpdateOperationsInput | string | null
    BillingCity?: NullableStringFieldUpdateOperationsInput | string | null
    BillingState?: NullableStringFieldUpdateOperationsInput | string | null
    BillingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    BillingPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type invoice_itemsCreateWithoutInvoicesInput = {
    UnitPrice: Decimal | DecimalJsLike | number | string
    Quantity: number
    tracks: tracksCreateNestedOneWithoutInvoice_itemsInput
  }

  export type invoice_itemsUncheckedCreateWithoutInvoicesInput = {
    InvoiceLineId?: number
    TrackId: number
    UnitPrice: Decimal | DecimalJsLike | number | string
    Quantity: number
  }

  export type invoice_itemsCreateOrConnectWithoutInvoicesInput = {
    where: invoice_itemsWhereUniqueInput
    create: XOR<invoice_itemsCreateWithoutInvoicesInput, invoice_itemsUncheckedCreateWithoutInvoicesInput>
  }

  export type invoice_itemsCreateManyInvoicesInputEnvelope = {
    data: invoice_itemsCreateManyInvoicesInput | invoice_itemsCreateManyInvoicesInput[]
  }

  export type customersCreateWithoutInvoicesInput = {
    FirstName: string
    LastName: string
    ImageURL?: string
    Company?: string | null
    Address?: string | null
    City?: string | null
    State?: string | null
    Country?: string | null
    PostalCode?: string | null
    Phone?: string | null
    Fax?: string | null
    Email: string
    employees?: employeesCreateNestedOneWithoutCustomersInput
  }

  export type customersUncheckedCreateWithoutInvoicesInput = {
    CustomerId?: number
    FirstName: string
    LastName: string
    ImageURL?: string
    Company?: string | null
    Address?: string | null
    City?: string | null
    State?: string | null
    Country?: string | null
    PostalCode?: string | null
    Phone?: string | null
    Fax?: string | null
    Email: string
    SupportRepId?: number | null
  }

  export type customersCreateOrConnectWithoutInvoicesInput = {
    where: customersWhereUniqueInput
    create: XOR<customersCreateWithoutInvoicesInput, customersUncheckedCreateWithoutInvoicesInput>
  }

  export type invoice_itemsUpsertWithWhereUniqueWithoutInvoicesInput = {
    where: invoice_itemsWhereUniqueInput
    update: XOR<invoice_itemsUpdateWithoutInvoicesInput, invoice_itemsUncheckedUpdateWithoutInvoicesInput>
    create: XOR<invoice_itemsCreateWithoutInvoicesInput, invoice_itemsUncheckedCreateWithoutInvoicesInput>
  }

  export type invoice_itemsUpdateWithWhereUniqueWithoutInvoicesInput = {
    where: invoice_itemsWhereUniqueInput
    data: XOR<invoice_itemsUpdateWithoutInvoicesInput, invoice_itemsUncheckedUpdateWithoutInvoicesInput>
  }

  export type invoice_itemsUpdateManyWithWhereWithoutInvoicesInput = {
    where: invoice_itemsScalarWhereInput
    data: XOR<invoice_itemsUpdateManyMutationInput, invoice_itemsUncheckedUpdateManyWithoutInvoicesInput>
  }

  export type invoice_itemsScalarWhereInput = {
    AND?: invoice_itemsScalarWhereInput | invoice_itemsScalarWhereInput[]
    OR?: invoice_itemsScalarWhereInput[]
    NOT?: invoice_itemsScalarWhereInput | invoice_itemsScalarWhereInput[]
    InvoiceLineId?: IntFilter<"invoice_items"> | number
    InvoiceId?: IntFilter<"invoice_items"> | number
    TrackId?: IntFilter<"invoice_items"> | number
    UnitPrice?: DecimalFilter<"invoice_items"> | Decimal | DecimalJsLike | number | string
    Quantity?: IntFilter<"invoice_items"> | number
  }

  export type customersUpsertWithoutInvoicesInput = {
    update: XOR<customersUpdateWithoutInvoicesInput, customersUncheckedUpdateWithoutInvoicesInput>
    create: XOR<customersCreateWithoutInvoicesInput, customersUncheckedCreateWithoutInvoicesInput>
    where?: customersWhereInput
  }

  export type customersUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: customersWhereInput
    data: XOR<customersUpdateWithoutInvoicesInput, customersUncheckedUpdateWithoutInvoicesInput>
  }

  export type customersUpdateWithoutInvoicesInput = {
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    ImageURL?: StringFieldUpdateOperationsInput | string
    Company?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    State?: NullableStringFieldUpdateOperationsInput | string | null
    Country?: NullableStringFieldUpdateOperationsInput | string | null
    PostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Fax?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: StringFieldUpdateOperationsInput | string
    employees?: employeesUpdateOneWithoutCustomersNestedInput
  }

  export type customersUncheckedUpdateWithoutInvoicesInput = {
    CustomerId?: IntFieldUpdateOperationsInput | number
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    ImageURL?: StringFieldUpdateOperationsInput | string
    Company?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    State?: NullableStringFieldUpdateOperationsInput | string | null
    Country?: NullableStringFieldUpdateOperationsInput | string | null
    PostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Fax?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: StringFieldUpdateOperationsInput | string
    SupportRepId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type tracksCreateWithoutMedia_typesInput = {
    Name: string
    Composer?: string | null
    Milliseconds: number
    Bytes?: number | null
    UnitPrice: Decimal | DecimalJsLike | number | string
    invoice_items?: invoice_itemsCreateNestedManyWithoutTracksInput
    playlist_track?: playlist_trackCreateNestedManyWithoutTracksInput
    genres?: genresCreateNestedOneWithoutTracksInput
    albums?: albumsCreateNestedOneWithoutTracksInput
  }

  export type tracksUncheckedCreateWithoutMedia_typesInput = {
    TrackId?: number
    Name: string
    AlbumId?: number | null
    GenreId?: number | null
    Composer?: string | null
    Milliseconds: number
    Bytes?: number | null
    UnitPrice: Decimal | DecimalJsLike | number | string
    invoice_items?: invoice_itemsUncheckedCreateNestedManyWithoutTracksInput
    playlist_track?: playlist_trackUncheckedCreateNestedManyWithoutTracksInput
  }

  export type tracksCreateOrConnectWithoutMedia_typesInput = {
    where: tracksWhereUniqueInput
    create: XOR<tracksCreateWithoutMedia_typesInput, tracksUncheckedCreateWithoutMedia_typesInput>
  }

  export type tracksCreateManyMedia_typesInputEnvelope = {
    data: tracksCreateManyMedia_typesInput | tracksCreateManyMedia_typesInput[]
  }

  export type tracksUpsertWithWhereUniqueWithoutMedia_typesInput = {
    where: tracksWhereUniqueInput
    update: XOR<tracksUpdateWithoutMedia_typesInput, tracksUncheckedUpdateWithoutMedia_typesInput>
    create: XOR<tracksCreateWithoutMedia_typesInput, tracksUncheckedCreateWithoutMedia_typesInput>
  }

  export type tracksUpdateWithWhereUniqueWithoutMedia_typesInput = {
    where: tracksWhereUniqueInput
    data: XOR<tracksUpdateWithoutMedia_typesInput, tracksUncheckedUpdateWithoutMedia_typesInput>
  }

  export type tracksUpdateManyWithWhereWithoutMedia_typesInput = {
    where: tracksScalarWhereInput
    data: XOR<tracksUpdateManyMutationInput, tracksUncheckedUpdateManyWithoutMedia_typesInput>
  }

  export type tracksCreateWithoutPlaylist_trackInput = {
    Name: string
    Composer?: string | null
    Milliseconds: number
    Bytes?: number | null
    UnitPrice: Decimal | DecimalJsLike | number | string
    invoice_items?: invoice_itemsCreateNestedManyWithoutTracksInput
    media_types: media_typesCreateNestedOneWithoutTracksInput
    genres?: genresCreateNestedOneWithoutTracksInput
    albums?: albumsCreateNestedOneWithoutTracksInput
  }

  export type tracksUncheckedCreateWithoutPlaylist_trackInput = {
    TrackId?: number
    Name: string
    AlbumId?: number | null
    MediaTypeId: number
    GenreId?: number | null
    Composer?: string | null
    Milliseconds: number
    Bytes?: number | null
    UnitPrice: Decimal | DecimalJsLike | number | string
    invoice_items?: invoice_itemsUncheckedCreateNestedManyWithoutTracksInput
  }

  export type tracksCreateOrConnectWithoutPlaylist_trackInput = {
    where: tracksWhereUniqueInput
    create: XOR<tracksCreateWithoutPlaylist_trackInput, tracksUncheckedCreateWithoutPlaylist_trackInput>
  }

  export type playlistsCreateWithoutPlaylist_trackInput = {
    Name?: string | null
  }

  export type playlistsUncheckedCreateWithoutPlaylist_trackInput = {
    PlaylistId?: number
    Name?: string | null
  }

  export type playlistsCreateOrConnectWithoutPlaylist_trackInput = {
    where: playlistsWhereUniqueInput
    create: XOR<playlistsCreateWithoutPlaylist_trackInput, playlistsUncheckedCreateWithoutPlaylist_trackInput>
  }

  export type tracksUpsertWithoutPlaylist_trackInput = {
    update: XOR<tracksUpdateWithoutPlaylist_trackInput, tracksUncheckedUpdateWithoutPlaylist_trackInput>
    create: XOR<tracksCreateWithoutPlaylist_trackInput, tracksUncheckedCreateWithoutPlaylist_trackInput>
    where?: tracksWhereInput
  }

  export type tracksUpdateToOneWithWhereWithoutPlaylist_trackInput = {
    where?: tracksWhereInput
    data: XOR<tracksUpdateWithoutPlaylist_trackInput, tracksUncheckedUpdateWithoutPlaylist_trackInput>
  }

  export type tracksUpdateWithoutPlaylist_trackInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Composer?: NullableStringFieldUpdateOperationsInput | string | null
    Milliseconds?: IntFieldUpdateOperationsInput | number
    Bytes?: NullableIntFieldUpdateOperationsInput | number | null
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    invoice_items?: invoice_itemsUpdateManyWithoutTracksNestedInput
    media_types?: media_typesUpdateOneRequiredWithoutTracksNestedInput
    genres?: genresUpdateOneWithoutTracksNestedInput
    albums?: albumsUpdateOneWithoutTracksNestedInput
  }

  export type tracksUncheckedUpdateWithoutPlaylist_trackInput = {
    TrackId?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    AlbumId?: NullableIntFieldUpdateOperationsInput | number | null
    MediaTypeId?: IntFieldUpdateOperationsInput | number
    GenreId?: NullableIntFieldUpdateOperationsInput | number | null
    Composer?: NullableStringFieldUpdateOperationsInput | string | null
    Milliseconds?: IntFieldUpdateOperationsInput | number
    Bytes?: NullableIntFieldUpdateOperationsInput | number | null
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    invoice_items?: invoice_itemsUncheckedUpdateManyWithoutTracksNestedInput
  }

  export type playlistsUpsertWithoutPlaylist_trackInput = {
    update: XOR<playlistsUpdateWithoutPlaylist_trackInput, playlistsUncheckedUpdateWithoutPlaylist_trackInput>
    create: XOR<playlistsCreateWithoutPlaylist_trackInput, playlistsUncheckedCreateWithoutPlaylist_trackInput>
    where?: playlistsWhereInput
  }

  export type playlistsUpdateToOneWithWhereWithoutPlaylist_trackInput = {
    where?: playlistsWhereInput
    data: XOR<playlistsUpdateWithoutPlaylist_trackInput, playlistsUncheckedUpdateWithoutPlaylist_trackInput>
  }

  export type playlistsUpdateWithoutPlaylist_trackInput = {
    Name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type playlistsUncheckedUpdateWithoutPlaylist_trackInput = {
    PlaylistId?: IntFieldUpdateOperationsInput | number
    Name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type playlist_trackCreateWithoutPlaylistsInput = {
    tracks: tracksCreateNestedOneWithoutPlaylist_trackInput
  }

  export type playlist_trackUncheckedCreateWithoutPlaylistsInput = {
    TrackId: number
  }

  export type playlist_trackCreateOrConnectWithoutPlaylistsInput = {
    where: playlist_trackWhereUniqueInput
    create: XOR<playlist_trackCreateWithoutPlaylistsInput, playlist_trackUncheckedCreateWithoutPlaylistsInput>
  }

  export type playlist_trackCreateManyPlaylistsInputEnvelope = {
    data: playlist_trackCreateManyPlaylistsInput | playlist_trackCreateManyPlaylistsInput[]
  }

  export type playlist_trackUpsertWithWhereUniqueWithoutPlaylistsInput = {
    where: playlist_trackWhereUniqueInput
    update: XOR<playlist_trackUpdateWithoutPlaylistsInput, playlist_trackUncheckedUpdateWithoutPlaylistsInput>
    create: XOR<playlist_trackCreateWithoutPlaylistsInput, playlist_trackUncheckedCreateWithoutPlaylistsInput>
  }

  export type playlist_trackUpdateWithWhereUniqueWithoutPlaylistsInput = {
    where: playlist_trackWhereUniqueInput
    data: XOR<playlist_trackUpdateWithoutPlaylistsInput, playlist_trackUncheckedUpdateWithoutPlaylistsInput>
  }

  export type playlist_trackUpdateManyWithWhereWithoutPlaylistsInput = {
    where: playlist_trackScalarWhereInput
    data: XOR<playlist_trackUpdateManyMutationInput, playlist_trackUncheckedUpdateManyWithoutPlaylistsInput>
  }

  export type playlist_trackScalarWhereInput = {
    AND?: playlist_trackScalarWhereInput | playlist_trackScalarWhereInput[]
    OR?: playlist_trackScalarWhereInput[]
    NOT?: playlist_trackScalarWhereInput | playlist_trackScalarWhereInput[]
    PlaylistId?: IntFilter<"playlist_track"> | number
    TrackId?: IntFilter<"playlist_track"> | number
  }

  export type invoice_itemsCreateWithoutTracksInput = {
    UnitPrice: Decimal | DecimalJsLike | number | string
    Quantity: number
    invoices: invoicesCreateNestedOneWithoutInvoice_itemsInput
  }

  export type invoice_itemsUncheckedCreateWithoutTracksInput = {
    InvoiceLineId?: number
    InvoiceId: number
    UnitPrice: Decimal | DecimalJsLike | number | string
    Quantity: number
  }

  export type invoice_itemsCreateOrConnectWithoutTracksInput = {
    where: invoice_itemsWhereUniqueInput
    create: XOR<invoice_itemsCreateWithoutTracksInput, invoice_itemsUncheckedCreateWithoutTracksInput>
  }

  export type invoice_itemsCreateManyTracksInputEnvelope = {
    data: invoice_itemsCreateManyTracksInput | invoice_itemsCreateManyTracksInput[]
  }

  export type playlist_trackCreateWithoutTracksInput = {
    playlists: playlistsCreateNestedOneWithoutPlaylist_trackInput
  }

  export type playlist_trackUncheckedCreateWithoutTracksInput = {
    PlaylistId: number
  }

  export type playlist_trackCreateOrConnectWithoutTracksInput = {
    where: playlist_trackWhereUniqueInput
    create: XOR<playlist_trackCreateWithoutTracksInput, playlist_trackUncheckedCreateWithoutTracksInput>
  }

  export type playlist_trackCreateManyTracksInputEnvelope = {
    data: playlist_trackCreateManyTracksInput | playlist_trackCreateManyTracksInput[]
  }

  export type media_typesCreateWithoutTracksInput = {
    Name?: string | null
  }

  export type media_typesUncheckedCreateWithoutTracksInput = {
    MediaTypeId?: number
    Name?: string | null
  }

  export type media_typesCreateOrConnectWithoutTracksInput = {
    where: media_typesWhereUniqueInput
    create: XOR<media_typesCreateWithoutTracksInput, media_typesUncheckedCreateWithoutTracksInput>
  }

  export type genresCreateWithoutTracksInput = {
    Name?: string | null
  }

  export type genresUncheckedCreateWithoutTracksInput = {
    GenreId?: number
    Name?: string | null
  }

  export type genresCreateOrConnectWithoutTracksInput = {
    where: genresWhereUniqueInput
    create: XOR<genresCreateWithoutTracksInput, genresUncheckedCreateWithoutTracksInput>
  }

  export type albumsCreateWithoutTracksInput = {
    Title: string
    artists: artistsCreateNestedOneWithoutAlbumsInput
  }

  export type albumsUncheckedCreateWithoutTracksInput = {
    AlbumId?: number
    Title: string
    ArtistId: number
  }

  export type albumsCreateOrConnectWithoutTracksInput = {
    where: albumsWhereUniqueInput
    create: XOR<albumsCreateWithoutTracksInput, albumsUncheckedCreateWithoutTracksInput>
  }

  export type invoice_itemsUpsertWithWhereUniqueWithoutTracksInput = {
    where: invoice_itemsWhereUniqueInput
    update: XOR<invoice_itemsUpdateWithoutTracksInput, invoice_itemsUncheckedUpdateWithoutTracksInput>
    create: XOR<invoice_itemsCreateWithoutTracksInput, invoice_itemsUncheckedCreateWithoutTracksInput>
  }

  export type invoice_itemsUpdateWithWhereUniqueWithoutTracksInput = {
    where: invoice_itemsWhereUniqueInput
    data: XOR<invoice_itemsUpdateWithoutTracksInput, invoice_itemsUncheckedUpdateWithoutTracksInput>
  }

  export type invoice_itemsUpdateManyWithWhereWithoutTracksInput = {
    where: invoice_itemsScalarWhereInput
    data: XOR<invoice_itemsUpdateManyMutationInput, invoice_itemsUncheckedUpdateManyWithoutTracksInput>
  }

  export type playlist_trackUpsertWithWhereUniqueWithoutTracksInput = {
    where: playlist_trackWhereUniqueInput
    update: XOR<playlist_trackUpdateWithoutTracksInput, playlist_trackUncheckedUpdateWithoutTracksInput>
    create: XOR<playlist_trackCreateWithoutTracksInput, playlist_trackUncheckedCreateWithoutTracksInput>
  }

  export type playlist_trackUpdateWithWhereUniqueWithoutTracksInput = {
    where: playlist_trackWhereUniqueInput
    data: XOR<playlist_trackUpdateWithoutTracksInput, playlist_trackUncheckedUpdateWithoutTracksInput>
  }

  export type playlist_trackUpdateManyWithWhereWithoutTracksInput = {
    where: playlist_trackScalarWhereInput
    data: XOR<playlist_trackUpdateManyMutationInput, playlist_trackUncheckedUpdateManyWithoutTracksInput>
  }

  export type media_typesUpsertWithoutTracksInput = {
    update: XOR<media_typesUpdateWithoutTracksInput, media_typesUncheckedUpdateWithoutTracksInput>
    create: XOR<media_typesCreateWithoutTracksInput, media_typesUncheckedCreateWithoutTracksInput>
    where?: media_typesWhereInput
  }

  export type media_typesUpdateToOneWithWhereWithoutTracksInput = {
    where?: media_typesWhereInput
    data: XOR<media_typesUpdateWithoutTracksInput, media_typesUncheckedUpdateWithoutTracksInput>
  }

  export type media_typesUpdateWithoutTracksInput = {
    Name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type media_typesUncheckedUpdateWithoutTracksInput = {
    MediaTypeId?: IntFieldUpdateOperationsInput | number
    Name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type genresUpsertWithoutTracksInput = {
    update: XOR<genresUpdateWithoutTracksInput, genresUncheckedUpdateWithoutTracksInput>
    create: XOR<genresCreateWithoutTracksInput, genresUncheckedCreateWithoutTracksInput>
    where?: genresWhereInput
  }

  export type genresUpdateToOneWithWhereWithoutTracksInput = {
    where?: genresWhereInput
    data: XOR<genresUpdateWithoutTracksInput, genresUncheckedUpdateWithoutTracksInput>
  }

  export type genresUpdateWithoutTracksInput = {
    Name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type genresUncheckedUpdateWithoutTracksInput = {
    GenreId?: IntFieldUpdateOperationsInput | number
    Name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type albumsUpsertWithoutTracksInput = {
    update: XOR<albumsUpdateWithoutTracksInput, albumsUncheckedUpdateWithoutTracksInput>
    create: XOR<albumsCreateWithoutTracksInput, albumsUncheckedCreateWithoutTracksInput>
    where?: albumsWhereInput
  }

  export type albumsUpdateToOneWithWhereWithoutTracksInput = {
    where?: albumsWhereInput
    data: XOR<albumsUpdateWithoutTracksInput, albumsUncheckedUpdateWithoutTracksInput>
  }

  export type albumsUpdateWithoutTracksInput = {
    Title?: StringFieldUpdateOperationsInput | string
    artists?: artistsUpdateOneRequiredWithoutAlbumsNestedInput
  }

  export type albumsUncheckedUpdateWithoutTracksInput = {
    AlbumId?: IntFieldUpdateOperationsInput | number
    Title?: StringFieldUpdateOperationsInput | string
    ArtistId?: IntFieldUpdateOperationsInput | number
  }

  export type tracksCreateManyAlbumsInput = {
    TrackId?: number
    Name: string
    MediaTypeId: number
    GenreId?: number | null
    Composer?: string | null
    Milliseconds: number
    Bytes?: number | null
    UnitPrice: Decimal | DecimalJsLike | number | string
  }

  export type tracksUpdateWithoutAlbumsInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Composer?: NullableStringFieldUpdateOperationsInput | string | null
    Milliseconds?: IntFieldUpdateOperationsInput | number
    Bytes?: NullableIntFieldUpdateOperationsInput | number | null
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    invoice_items?: invoice_itemsUpdateManyWithoutTracksNestedInput
    playlist_track?: playlist_trackUpdateManyWithoutTracksNestedInput
    media_types?: media_typesUpdateOneRequiredWithoutTracksNestedInput
    genres?: genresUpdateOneWithoutTracksNestedInput
  }

  export type tracksUncheckedUpdateWithoutAlbumsInput = {
    TrackId?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    MediaTypeId?: IntFieldUpdateOperationsInput | number
    GenreId?: NullableIntFieldUpdateOperationsInput | number | null
    Composer?: NullableStringFieldUpdateOperationsInput | string | null
    Milliseconds?: IntFieldUpdateOperationsInput | number
    Bytes?: NullableIntFieldUpdateOperationsInput | number | null
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    invoice_items?: invoice_itemsUncheckedUpdateManyWithoutTracksNestedInput
    playlist_track?: playlist_trackUncheckedUpdateManyWithoutTracksNestedInput
  }

  export type tracksUncheckedUpdateManyWithoutAlbumsInput = {
    TrackId?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    MediaTypeId?: IntFieldUpdateOperationsInput | number
    GenreId?: NullableIntFieldUpdateOperationsInput | number | null
    Composer?: NullableStringFieldUpdateOperationsInput | string | null
    Milliseconds?: IntFieldUpdateOperationsInput | number
    Bytes?: NullableIntFieldUpdateOperationsInput | number | null
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type albumsCreateManyArtistsInput = {
    AlbumId?: number
    Title: string
  }

  export type albumsUpdateWithoutArtistsInput = {
    Title?: StringFieldUpdateOperationsInput | string
    tracks?: tracksUpdateManyWithoutAlbumsNestedInput
  }

  export type albumsUncheckedUpdateWithoutArtistsInput = {
    AlbumId?: IntFieldUpdateOperationsInput | number
    Title?: StringFieldUpdateOperationsInput | string
    tracks?: tracksUncheckedUpdateManyWithoutAlbumsNestedInput
  }

  export type albumsUncheckedUpdateManyWithoutArtistsInput = {
    AlbumId?: IntFieldUpdateOperationsInput | number
    Title?: StringFieldUpdateOperationsInput | string
  }

  export type invoicesCreateManyCustomersInput = {
    InvoiceId?: number
    InvoiceDate: Date | string
    BillingAddress?: string | null
    BillingCity?: string | null
    BillingState?: string | null
    BillingCountry?: string | null
    BillingPostalCode?: string | null
    Total: Decimal | DecimalJsLike | number | string
  }

  export type invoicesUpdateWithoutCustomersInput = {
    InvoiceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    BillingAddress?: NullableStringFieldUpdateOperationsInput | string | null
    BillingCity?: NullableStringFieldUpdateOperationsInput | string | null
    BillingState?: NullableStringFieldUpdateOperationsInput | string | null
    BillingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    BillingPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    invoice_items?: invoice_itemsUpdateManyWithoutInvoicesNestedInput
  }

  export type invoicesUncheckedUpdateWithoutCustomersInput = {
    InvoiceId?: IntFieldUpdateOperationsInput | number
    InvoiceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    BillingAddress?: NullableStringFieldUpdateOperationsInput | string | null
    BillingCity?: NullableStringFieldUpdateOperationsInput | string | null
    BillingState?: NullableStringFieldUpdateOperationsInput | string | null
    BillingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    BillingPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    invoice_items?: invoice_itemsUncheckedUpdateManyWithoutInvoicesNestedInput
  }

  export type invoicesUncheckedUpdateManyWithoutCustomersInput = {
    InvoiceId?: IntFieldUpdateOperationsInput | number
    InvoiceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    BillingAddress?: NullableStringFieldUpdateOperationsInput | string | null
    BillingCity?: NullableStringFieldUpdateOperationsInput | string | null
    BillingState?: NullableStringFieldUpdateOperationsInput | string | null
    BillingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    BillingPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type customersCreateManyEmployeesInput = {
    CustomerId?: number
    FirstName: string
    LastName: string
    ImageURL?: string
    Company?: string | null
    Address?: string | null
    City?: string | null
    State?: string | null
    Country?: string | null
    PostalCode?: string | null
    Phone?: string | null
    Fax?: string | null
    Email: string
  }

  export type employeesCreateManyEmployeesInput = {
    EmployeeId?: number
    LastName: string
    FirstName: string
    ImageURL?: string
    Title?: string | null
    BirthDate?: Date | string | null
    HireDate?: Date | string | null
    Address?: string | null
    City?: string | null
    State?: string | null
    Country?: string | null
    PostalCode?: string | null
    Phone?: string | null
    Fax?: string | null
    Email?: string | null
  }

  export type customersUpdateWithoutEmployeesInput = {
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    ImageURL?: StringFieldUpdateOperationsInput | string
    Company?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    State?: NullableStringFieldUpdateOperationsInput | string | null
    Country?: NullableStringFieldUpdateOperationsInput | string | null
    PostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Fax?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: StringFieldUpdateOperationsInput | string
    invoices?: invoicesUpdateManyWithoutCustomersNestedInput
  }

  export type customersUncheckedUpdateWithoutEmployeesInput = {
    CustomerId?: IntFieldUpdateOperationsInput | number
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    ImageURL?: StringFieldUpdateOperationsInput | string
    Company?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    State?: NullableStringFieldUpdateOperationsInput | string | null
    Country?: NullableStringFieldUpdateOperationsInput | string | null
    PostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Fax?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: StringFieldUpdateOperationsInput | string
    invoices?: invoicesUncheckedUpdateManyWithoutCustomersNestedInput
  }

  export type customersUncheckedUpdateManyWithoutEmployeesInput = {
    CustomerId?: IntFieldUpdateOperationsInput | number
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    ImageURL?: StringFieldUpdateOperationsInput | string
    Company?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    State?: NullableStringFieldUpdateOperationsInput | string | null
    Country?: NullableStringFieldUpdateOperationsInput | string | null
    PostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Fax?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: StringFieldUpdateOperationsInput | string
  }

  export type employeesUpdateWithoutEmployeesInput = {
    LastName?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    ImageURL?: StringFieldUpdateOperationsInput | string
    Title?: NullableStringFieldUpdateOperationsInput | string | null
    BirthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    HireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    State?: NullableStringFieldUpdateOperationsInput | string | null
    Country?: NullableStringFieldUpdateOperationsInput | string | null
    PostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Fax?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    customers?: customersUpdateManyWithoutEmployeesNestedInput
    other_employees?: employeesUpdateManyWithoutEmployeesNestedInput
  }

  export type employeesUncheckedUpdateWithoutEmployeesInput = {
    EmployeeId?: IntFieldUpdateOperationsInput | number
    LastName?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    ImageURL?: StringFieldUpdateOperationsInput | string
    Title?: NullableStringFieldUpdateOperationsInput | string | null
    BirthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    HireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    State?: NullableStringFieldUpdateOperationsInput | string | null
    Country?: NullableStringFieldUpdateOperationsInput | string | null
    PostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Fax?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    customers?: customersUncheckedUpdateManyWithoutEmployeesNestedInput
    other_employees?: employeesUncheckedUpdateManyWithoutEmployeesNestedInput
  }

  export type employeesUncheckedUpdateManyWithoutEmployeesInput = {
    EmployeeId?: IntFieldUpdateOperationsInput | number
    LastName?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    ImageURL?: StringFieldUpdateOperationsInput | string
    Title?: NullableStringFieldUpdateOperationsInput | string | null
    BirthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    HireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    State?: NullableStringFieldUpdateOperationsInput | string | null
    Country?: NullableStringFieldUpdateOperationsInput | string | null
    PostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Fax?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tracksCreateManyGenresInput = {
    TrackId?: number
    Name: string
    AlbumId?: number | null
    MediaTypeId: number
    Composer?: string | null
    Milliseconds: number
    Bytes?: number | null
    UnitPrice: Decimal | DecimalJsLike | number | string
  }

  export type tracksUpdateWithoutGenresInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Composer?: NullableStringFieldUpdateOperationsInput | string | null
    Milliseconds?: IntFieldUpdateOperationsInput | number
    Bytes?: NullableIntFieldUpdateOperationsInput | number | null
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    invoice_items?: invoice_itemsUpdateManyWithoutTracksNestedInput
    playlist_track?: playlist_trackUpdateManyWithoutTracksNestedInput
    media_types?: media_typesUpdateOneRequiredWithoutTracksNestedInput
    albums?: albumsUpdateOneWithoutTracksNestedInput
  }

  export type tracksUncheckedUpdateWithoutGenresInput = {
    TrackId?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    AlbumId?: NullableIntFieldUpdateOperationsInput | number | null
    MediaTypeId?: IntFieldUpdateOperationsInput | number
    Composer?: NullableStringFieldUpdateOperationsInput | string | null
    Milliseconds?: IntFieldUpdateOperationsInput | number
    Bytes?: NullableIntFieldUpdateOperationsInput | number | null
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    invoice_items?: invoice_itemsUncheckedUpdateManyWithoutTracksNestedInput
    playlist_track?: playlist_trackUncheckedUpdateManyWithoutTracksNestedInput
  }

  export type tracksUncheckedUpdateManyWithoutGenresInput = {
    TrackId?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    AlbumId?: NullableIntFieldUpdateOperationsInput | number | null
    MediaTypeId?: IntFieldUpdateOperationsInput | number
    Composer?: NullableStringFieldUpdateOperationsInput | string | null
    Milliseconds?: IntFieldUpdateOperationsInput | number
    Bytes?: NullableIntFieldUpdateOperationsInput | number | null
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type invoice_itemsCreateManyInvoicesInput = {
    InvoiceLineId?: number
    TrackId: number
    UnitPrice: Decimal | DecimalJsLike | number | string
    Quantity: number
  }

  export type invoice_itemsUpdateWithoutInvoicesInput = {
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Quantity?: IntFieldUpdateOperationsInput | number
    tracks?: tracksUpdateOneRequiredWithoutInvoice_itemsNestedInput
  }

  export type invoice_itemsUncheckedUpdateWithoutInvoicesInput = {
    InvoiceLineId?: IntFieldUpdateOperationsInput | number
    TrackId?: IntFieldUpdateOperationsInput | number
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Quantity?: IntFieldUpdateOperationsInput | number
  }

  export type invoice_itemsUncheckedUpdateManyWithoutInvoicesInput = {
    InvoiceLineId?: IntFieldUpdateOperationsInput | number
    TrackId?: IntFieldUpdateOperationsInput | number
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Quantity?: IntFieldUpdateOperationsInput | number
  }

  export type tracksCreateManyMedia_typesInput = {
    TrackId?: number
    Name: string
    AlbumId?: number | null
    GenreId?: number | null
    Composer?: string | null
    Milliseconds: number
    Bytes?: number | null
    UnitPrice: Decimal | DecimalJsLike | number | string
  }

  export type tracksUpdateWithoutMedia_typesInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Composer?: NullableStringFieldUpdateOperationsInput | string | null
    Milliseconds?: IntFieldUpdateOperationsInput | number
    Bytes?: NullableIntFieldUpdateOperationsInput | number | null
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    invoice_items?: invoice_itemsUpdateManyWithoutTracksNestedInput
    playlist_track?: playlist_trackUpdateManyWithoutTracksNestedInput
    genres?: genresUpdateOneWithoutTracksNestedInput
    albums?: albumsUpdateOneWithoutTracksNestedInput
  }

  export type tracksUncheckedUpdateWithoutMedia_typesInput = {
    TrackId?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    AlbumId?: NullableIntFieldUpdateOperationsInput | number | null
    GenreId?: NullableIntFieldUpdateOperationsInput | number | null
    Composer?: NullableStringFieldUpdateOperationsInput | string | null
    Milliseconds?: IntFieldUpdateOperationsInput | number
    Bytes?: NullableIntFieldUpdateOperationsInput | number | null
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    invoice_items?: invoice_itemsUncheckedUpdateManyWithoutTracksNestedInput
    playlist_track?: playlist_trackUncheckedUpdateManyWithoutTracksNestedInput
  }

  export type tracksUncheckedUpdateManyWithoutMedia_typesInput = {
    TrackId?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    AlbumId?: NullableIntFieldUpdateOperationsInput | number | null
    GenreId?: NullableIntFieldUpdateOperationsInput | number | null
    Composer?: NullableStringFieldUpdateOperationsInput | string | null
    Milliseconds?: IntFieldUpdateOperationsInput | number
    Bytes?: NullableIntFieldUpdateOperationsInput | number | null
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type playlist_trackCreateManyPlaylistsInput = {
    TrackId: number
  }

  export type playlist_trackUpdateWithoutPlaylistsInput = {
    tracks?: tracksUpdateOneRequiredWithoutPlaylist_trackNestedInput
  }

  export type playlist_trackUncheckedUpdateWithoutPlaylistsInput = {
    TrackId?: IntFieldUpdateOperationsInput | number
  }

  export type playlist_trackUncheckedUpdateManyWithoutPlaylistsInput = {
    TrackId?: IntFieldUpdateOperationsInput | number
  }

  export type invoice_itemsCreateManyTracksInput = {
    InvoiceLineId?: number
    InvoiceId: number
    UnitPrice: Decimal | DecimalJsLike | number | string
    Quantity: number
  }

  export type playlist_trackCreateManyTracksInput = {
    PlaylistId: number
  }

  export type invoice_itemsUpdateWithoutTracksInput = {
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Quantity?: IntFieldUpdateOperationsInput | number
    invoices?: invoicesUpdateOneRequiredWithoutInvoice_itemsNestedInput
  }

  export type invoice_itemsUncheckedUpdateWithoutTracksInput = {
    InvoiceLineId?: IntFieldUpdateOperationsInput | number
    InvoiceId?: IntFieldUpdateOperationsInput | number
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Quantity?: IntFieldUpdateOperationsInput | number
  }

  export type invoice_itemsUncheckedUpdateManyWithoutTracksInput = {
    InvoiceLineId?: IntFieldUpdateOperationsInput | number
    InvoiceId?: IntFieldUpdateOperationsInput | number
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Quantity?: IntFieldUpdateOperationsInput | number
  }

  export type playlist_trackUpdateWithoutTracksInput = {
    playlists?: playlistsUpdateOneRequiredWithoutPlaylist_trackNestedInput
  }

  export type playlist_trackUncheckedUpdateWithoutTracksInput = {
    PlaylistId?: IntFieldUpdateOperationsInput | number
  }

  export type playlist_trackUncheckedUpdateManyWithoutTracksInput = {
    PlaylistId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use AlbumsCountOutputTypeDefaultArgs instead
     */
    export type AlbumsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AlbumsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ArtistsCountOutputTypeDefaultArgs instead
     */
    export type ArtistsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ArtistsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CustomersCountOutputTypeDefaultArgs instead
     */
    export type CustomersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CustomersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EmployeesCountOutputTypeDefaultArgs instead
     */
    export type EmployeesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EmployeesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GenresCountOutputTypeDefaultArgs instead
     */
    export type GenresCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GenresCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InvoicesCountOutputTypeDefaultArgs instead
     */
    export type InvoicesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InvoicesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Media_typesCountOutputTypeDefaultArgs instead
     */
    export type Media_typesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Media_typesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlaylistsCountOutputTypeDefaultArgs instead
     */
    export type PlaylistsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlaylistsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TracksCountOutputTypeDefaultArgs instead
     */
    export type TracksCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TracksCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use albumsDefaultArgs instead
     */
    export type albumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = albumsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use artistsDefaultArgs instead
     */
    export type artistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = artistsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use customersDefaultArgs instead
     */
    export type customersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = customersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use employeesDefaultArgs instead
     */
    export type employeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = employeesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use genresDefaultArgs instead
     */
    export type genresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = genresDefaultArgs<ExtArgs>
    /**
     * @deprecated Use invoice_itemsDefaultArgs instead
     */
    export type invoice_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = invoice_itemsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use invoicesDefaultArgs instead
     */
    export type invoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = invoicesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use media_typesDefaultArgs instead
     */
    export type media_typesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = media_typesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use playlist_trackDefaultArgs instead
     */
    export type playlist_trackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = playlist_trackDefaultArgs<ExtArgs>
    /**
     * @deprecated Use playlistsDefaultArgs instead
     */
    export type playlistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = playlistsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use tracksDefaultArgs instead
     */
    export type tracksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = tracksDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}