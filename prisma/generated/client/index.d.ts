
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
 * Model Album
 * 
 */
export type Album = $Result.DefaultSelection<Prisma.$AlbumPayload>
/**
 * Model Artist
 * 
 */
export type Artist = $Result.DefaultSelection<Prisma.$ArtistPayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Employee
 * 
 */
export type Employee = $Result.DefaultSelection<Prisma.$EmployeePayload>
/**
 * Model Genre
 * 
 */
export type Genre = $Result.DefaultSelection<Prisma.$GenrePayload>
/**
 * Model Invice_Item
 * 
 */
export type Invice_Item = $Result.DefaultSelection<Prisma.$Invice_ItemPayload>
/**
 * Model Invoice
 * 
 */
export type Invoice = $Result.DefaultSelection<Prisma.$InvoicePayload>
/**
 * Model Media_Type
 * 
 */
export type Media_Type = $Result.DefaultSelection<Prisma.$Media_TypePayload>
/**
 * Model Playlist
 * 
 */
export type Playlist = $Result.DefaultSelection<Prisma.$PlaylistPayload>
/**
 * Model Playlist_Track
 * 
 */
export type Playlist_Track = $Result.DefaultSelection<Prisma.$Playlist_TrackPayload>
/**
 * Model Track
 * 
 */
export type Track = $Result.DefaultSelection<Prisma.$TrackPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Albums
 * const albums = await prisma.album.findMany()
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
   * const albums = await prisma.album.findMany()
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
   * `prisma.album`: Exposes CRUD operations for the **Album** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Albums
    * const albums = await prisma.album.findMany()
    * ```
    */
  get album(): Prisma.AlbumDelegate<ExtArgs>;

  /**
   * `prisma.artist`: Exposes CRUD operations for the **Artist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Artists
    * const artists = await prisma.artist.findMany()
    * ```
    */
  get artist(): Prisma.ArtistDelegate<ExtArgs>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs>;

  /**
   * `prisma.employee`: Exposes CRUD operations for the **Employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.EmployeeDelegate<ExtArgs>;

  /**
   * `prisma.genre`: Exposes CRUD operations for the **Genre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Genres
    * const genres = await prisma.genre.findMany()
    * ```
    */
  get genre(): Prisma.GenreDelegate<ExtArgs>;

  /**
   * `prisma.invice_Item`: Exposes CRUD operations for the **Invice_Item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invice_Items
    * const invice_Items = await prisma.invice_Item.findMany()
    * ```
    */
  get invice_Item(): Prisma.Invice_ItemDelegate<ExtArgs>;

  /**
   * `prisma.invoice`: Exposes CRUD operations for the **Invoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoices
    * const invoices = await prisma.invoice.findMany()
    * ```
    */
  get invoice(): Prisma.InvoiceDelegate<ExtArgs>;

  /**
   * `prisma.media_Type`: Exposes CRUD operations for the **Media_Type** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Media_Types
    * const media_Types = await prisma.media_Type.findMany()
    * ```
    */
  get media_Type(): Prisma.Media_TypeDelegate<ExtArgs>;

  /**
   * `prisma.playlist`: Exposes CRUD operations for the **Playlist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Playlists
    * const playlists = await prisma.playlist.findMany()
    * ```
    */
  get playlist(): Prisma.PlaylistDelegate<ExtArgs>;

  /**
   * `prisma.playlist_Track`: Exposes CRUD operations for the **Playlist_Track** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Playlist_Tracks
    * const playlist_Tracks = await prisma.playlist_Track.findMany()
    * ```
    */
  get playlist_Track(): Prisma.Playlist_TrackDelegate<ExtArgs>;

  /**
   * `prisma.track`: Exposes CRUD operations for the **Track** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tracks
    * const tracks = await prisma.track.findMany()
    * ```
    */
  get track(): Prisma.TrackDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.16.2
   * Query Engine version: 393aa359c9ad4a4bb28630fb5613f9c281cde053
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
    Album: 'Album',
    Artist: 'Artist',
    Customer: 'Customer',
    Employee: 'Employee',
    Genre: 'Genre',
    Invice_Item: 'Invice_Item',
    Invoice: 'Invoice',
    Media_Type: 'Media_Type',
    Playlist: 'Playlist',
    Playlist_Track: 'Playlist_Track',
    Track: 'Track'
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
      modelProps: "album" | "artist" | "customer" | "employee" | "genre" | "invice_Item" | "invoice" | "media_Type" | "playlist" | "playlist_Track" | "track"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Album: {
        payload: Prisma.$AlbumPayload<ExtArgs>
        fields: Prisma.AlbumFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlbumFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlbumFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          findFirst: {
            args: Prisma.AlbumFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlbumFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          findMany: {
            args: Prisma.AlbumFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>[]
          }
          create: {
            args: Prisma.AlbumCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          createMany: {
            args: Prisma.AlbumCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlbumCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>[]
          }
          delete: {
            args: Prisma.AlbumDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          update: {
            args: Prisma.AlbumUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          deleteMany: {
            args: Prisma.AlbumDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlbumUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AlbumUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          aggregate: {
            args: Prisma.AlbumAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlbum>
          }
          groupBy: {
            args: Prisma.AlbumGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlbumGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlbumCountArgs<ExtArgs>
            result: $Utils.Optional<AlbumCountAggregateOutputType> | number
          }
        }
      }
      Artist: {
        payload: Prisma.$ArtistPayload<ExtArgs>
        fields: Prisma.ArtistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArtistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArtistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          findFirst: {
            args: Prisma.ArtistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArtistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          findMany: {
            args: Prisma.ArtistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>[]
          }
          create: {
            args: Prisma.ArtistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          createMany: {
            args: Prisma.ArtistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArtistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>[]
          }
          delete: {
            args: Prisma.ArtistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          update: {
            args: Prisma.ArtistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          deleteMany: {
            args: Prisma.ArtistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArtistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ArtistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          aggregate: {
            args: Prisma.ArtistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArtist>
          }
          groupBy: {
            args: Prisma.ArtistGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArtistGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArtistCountArgs<ExtArgs>
            result: $Utils.Optional<ArtistCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Employee: {
        payload: Prisma.$EmployeePayload<ExtArgs>
        fields: Prisma.EmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findFirst: {
            args: Prisma.EmployeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findMany: {
            args: Prisma.EmployeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          create: {
            args: Prisma.EmployeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          createMany: {
            args: Prisma.EmployeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          delete: {
            args: Prisma.EmployeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          update: {
            args: Prisma.EmployeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          deleteMany: {
            args: Prisma.EmployeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EmployeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployee>
          }
          groupBy: {
            args: Prisma.EmployeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number
          }
        }
      }
      Genre: {
        payload: Prisma.$GenrePayload<ExtArgs>
        fields: Prisma.GenreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GenreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GenreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          findFirst: {
            args: Prisma.GenreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GenreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          findMany: {
            args: Prisma.GenreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>[]
          }
          create: {
            args: Prisma.GenreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          createMany: {
            args: Prisma.GenreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GenreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>[]
          }
          delete: {
            args: Prisma.GenreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          update: {
            args: Prisma.GenreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          deleteMany: {
            args: Prisma.GenreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GenreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GenreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          aggregate: {
            args: Prisma.GenreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGenre>
          }
          groupBy: {
            args: Prisma.GenreGroupByArgs<ExtArgs>
            result: $Utils.Optional<GenreGroupByOutputType>[]
          }
          count: {
            args: Prisma.GenreCountArgs<ExtArgs>
            result: $Utils.Optional<GenreCountAggregateOutputType> | number
          }
        }
      }
      Invice_Item: {
        payload: Prisma.$Invice_ItemPayload<ExtArgs>
        fields: Prisma.Invice_ItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Invice_ItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Invice_ItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Invice_ItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Invice_ItemPayload>
          }
          findFirst: {
            args: Prisma.Invice_ItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Invice_ItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Invice_ItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Invice_ItemPayload>
          }
          findMany: {
            args: Prisma.Invice_ItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Invice_ItemPayload>[]
          }
          create: {
            args: Prisma.Invice_ItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Invice_ItemPayload>
          }
          createMany: {
            args: Prisma.Invice_ItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Invice_ItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Invice_ItemPayload>[]
          }
          delete: {
            args: Prisma.Invice_ItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Invice_ItemPayload>
          }
          update: {
            args: Prisma.Invice_ItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Invice_ItemPayload>
          }
          deleteMany: {
            args: Prisma.Invice_ItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Invice_ItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Invice_ItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Invice_ItemPayload>
          }
          aggregate: {
            args: Prisma.Invice_ItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvice_Item>
          }
          groupBy: {
            args: Prisma.Invice_ItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<Invice_ItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.Invice_ItemCountArgs<ExtArgs>
            result: $Utils.Optional<Invice_ItemCountAggregateOutputType> | number
          }
        }
      }
      Invoice: {
        payload: Prisma.$InvoicePayload<ExtArgs>
        fields: Prisma.InvoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvoiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvoiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findFirst: {
            args: Prisma.InvoiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvoiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findMany: {
            args: Prisma.InvoiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          create: {
            args: Prisma.InvoiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          createMany: {
            args: Prisma.InvoiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvoiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          delete: {
            args: Prisma.InvoiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          update: {
            args: Prisma.InvoiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          deleteMany: {
            args: Prisma.InvoiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvoiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InvoiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          aggregate: {
            args: Prisma.InvoiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoice>
          }
          groupBy: {
            args: Prisma.InvoiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvoiceCountArgs<ExtArgs>
            result: $Utils.Optional<InvoiceCountAggregateOutputType> | number
          }
        }
      }
      Media_Type: {
        payload: Prisma.$Media_TypePayload<ExtArgs>
        fields: Prisma.Media_TypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Media_TypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Media_TypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Media_TypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Media_TypePayload>
          }
          findFirst: {
            args: Prisma.Media_TypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Media_TypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Media_TypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Media_TypePayload>
          }
          findMany: {
            args: Prisma.Media_TypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Media_TypePayload>[]
          }
          create: {
            args: Prisma.Media_TypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Media_TypePayload>
          }
          createMany: {
            args: Prisma.Media_TypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Media_TypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Media_TypePayload>[]
          }
          delete: {
            args: Prisma.Media_TypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Media_TypePayload>
          }
          update: {
            args: Prisma.Media_TypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Media_TypePayload>
          }
          deleteMany: {
            args: Prisma.Media_TypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Media_TypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Media_TypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Media_TypePayload>
          }
          aggregate: {
            args: Prisma.Media_TypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedia_Type>
          }
          groupBy: {
            args: Prisma.Media_TypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<Media_TypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.Media_TypeCountArgs<ExtArgs>
            result: $Utils.Optional<Media_TypeCountAggregateOutputType> | number
          }
        }
      }
      Playlist: {
        payload: Prisma.$PlaylistPayload<ExtArgs>
        fields: Prisma.PlaylistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlaylistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlaylistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          findFirst: {
            args: Prisma.PlaylistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlaylistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          findMany: {
            args: Prisma.PlaylistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>[]
          }
          create: {
            args: Prisma.PlaylistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          createMany: {
            args: Prisma.PlaylistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlaylistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>[]
          }
          delete: {
            args: Prisma.PlaylistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          update: {
            args: Prisma.PlaylistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          deleteMany: {
            args: Prisma.PlaylistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlaylistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PlaylistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          aggregate: {
            args: Prisma.PlaylistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlaylist>
          }
          groupBy: {
            args: Prisma.PlaylistGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlaylistGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlaylistCountArgs<ExtArgs>
            result: $Utils.Optional<PlaylistCountAggregateOutputType> | number
          }
        }
      }
      Playlist_Track: {
        payload: Prisma.$Playlist_TrackPayload<ExtArgs>
        fields: Prisma.Playlist_TrackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Playlist_TrackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Playlist_TrackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Playlist_TrackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Playlist_TrackPayload>
          }
          findFirst: {
            args: Prisma.Playlist_TrackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Playlist_TrackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Playlist_TrackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Playlist_TrackPayload>
          }
          findMany: {
            args: Prisma.Playlist_TrackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Playlist_TrackPayload>[]
          }
          create: {
            args: Prisma.Playlist_TrackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Playlist_TrackPayload>
          }
          createMany: {
            args: Prisma.Playlist_TrackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Playlist_TrackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Playlist_TrackPayload>[]
          }
          delete: {
            args: Prisma.Playlist_TrackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Playlist_TrackPayload>
          }
          update: {
            args: Prisma.Playlist_TrackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Playlist_TrackPayload>
          }
          deleteMany: {
            args: Prisma.Playlist_TrackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Playlist_TrackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Playlist_TrackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Playlist_TrackPayload>
          }
          aggregate: {
            args: Prisma.Playlist_TrackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlaylist_Track>
          }
          groupBy: {
            args: Prisma.Playlist_TrackGroupByArgs<ExtArgs>
            result: $Utils.Optional<Playlist_TrackGroupByOutputType>[]
          }
          count: {
            args: Prisma.Playlist_TrackCountArgs<ExtArgs>
            result: $Utils.Optional<Playlist_TrackCountAggregateOutputType> | number
          }
        }
      }
      Track: {
        payload: Prisma.$TrackPayload<ExtArgs>
        fields: Prisma.TrackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>
          }
          findFirst: {
            args: Prisma.TrackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>
          }
          findMany: {
            args: Prisma.TrackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>[]
          }
          create: {
            args: Prisma.TrackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>
          }
          createMany: {
            args: Prisma.TrackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TrackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>[]
          }
          delete: {
            args: Prisma.TrackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>
          }
          update: {
            args: Prisma.TrackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>
          }
          deleteMany: {
            args: Prisma.TrackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TrackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>
          }
          aggregate: {
            args: Prisma.TrackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrack>
          }
          groupBy: {
            args: Prisma.TrackGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrackGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrackCountArgs<ExtArgs>
            result: $Utils.Optional<TrackCountAggregateOutputType> | number
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
   * Count Type AlbumCountOutputType
   */

  export type AlbumCountOutputType = {
    Track: number
  }

  export type AlbumCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Track?: boolean | AlbumCountOutputTypeCountTrackArgs
  }

  // Custom InputTypes
  /**
   * AlbumCountOutputType without action
   */
  export type AlbumCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumCountOutputType
     */
    select?: AlbumCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AlbumCountOutputType without action
   */
  export type AlbumCountOutputTypeCountTrackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackWhereInput
  }


  /**
   * Count Type ArtistCountOutputType
   */

  export type ArtistCountOutputType = {
    Album: number
  }

  export type ArtistCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Album?: boolean | ArtistCountOutputTypeCountAlbumArgs
  }

  // Custom InputTypes
  /**
   * ArtistCountOutputType without action
   */
  export type ArtistCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistCountOutputType
     */
    select?: ArtistCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArtistCountOutputType without action
   */
  export type ArtistCountOutputTypeCountAlbumArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlbumWhereInput
  }


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    Invoice: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Invoice?: boolean | CustomerCountOutputTypeCountInvoiceArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountInvoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
  }


  /**
   * Count Type EmployeeCountOutputType
   */

  export type EmployeeCountOutputType = {
    Customer: number
    other_Employee: number
  }

  export type EmployeeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Customer?: boolean | EmployeeCountOutputTypeCountCustomerArgs
    other_Employee?: boolean | EmployeeCountOutputTypeCountOther_EmployeeArgs
  }

  // Custom InputTypes
  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCountOutputType
     */
    select?: EmployeeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountCustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountOther_EmployeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
  }


  /**
   * Count Type GenreCountOutputType
   */

  export type GenreCountOutputType = {
    Track: number
  }

  export type GenreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Track?: boolean | GenreCountOutputTypeCountTrackArgs
  }

  // Custom InputTypes
  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenreCountOutputType
     */
    select?: GenreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeCountTrackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackWhereInput
  }


  /**
   * Count Type InvoiceCountOutputType
   */

  export type InvoiceCountOutputType = {
    Invice_Item: number
  }

  export type InvoiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Invice_Item?: boolean | InvoiceCountOutputTypeCountInvice_ItemArgs
  }

  // Custom InputTypes
  /**
   * InvoiceCountOutputType without action
   */
  export type InvoiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceCountOutputType
     */
    select?: InvoiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InvoiceCountOutputType without action
   */
  export type InvoiceCountOutputTypeCountInvice_ItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Invice_ItemWhereInput
  }


  /**
   * Count Type Media_TypeCountOutputType
   */

  export type Media_TypeCountOutputType = {
    Track: number
  }

  export type Media_TypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Track?: boolean | Media_TypeCountOutputTypeCountTrackArgs
  }

  // Custom InputTypes
  /**
   * Media_TypeCountOutputType without action
   */
  export type Media_TypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media_TypeCountOutputType
     */
    select?: Media_TypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Media_TypeCountOutputType without action
   */
  export type Media_TypeCountOutputTypeCountTrackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackWhereInput
  }


  /**
   * Count Type PlaylistCountOutputType
   */

  export type PlaylistCountOutputType = {
    Playlist_Track: number
  }

  export type PlaylistCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Playlist_Track?: boolean | PlaylistCountOutputTypeCountPlaylist_TrackArgs
  }

  // Custom InputTypes
  /**
   * PlaylistCountOutputType without action
   */
  export type PlaylistCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistCountOutputType
     */
    select?: PlaylistCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlaylistCountOutputType without action
   */
  export type PlaylistCountOutputTypeCountPlaylist_TrackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Playlist_TrackWhereInput
  }


  /**
   * Count Type TrackCountOutputType
   */

  export type TrackCountOutputType = {
    Invice_Item: number
    Playlist_Track: number
  }

  export type TrackCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Invice_Item?: boolean | TrackCountOutputTypeCountInvice_ItemArgs
    Playlist_Track?: boolean | TrackCountOutputTypeCountPlaylist_TrackArgs
  }

  // Custom InputTypes
  /**
   * TrackCountOutputType without action
   */
  export type TrackCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackCountOutputType
     */
    select?: TrackCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TrackCountOutputType without action
   */
  export type TrackCountOutputTypeCountInvice_ItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Invice_ItemWhereInput
  }

  /**
   * TrackCountOutputType without action
   */
  export type TrackCountOutputTypeCountPlaylist_TrackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Playlist_TrackWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Album
   */

  export type AggregateAlbum = {
    _count: AlbumCountAggregateOutputType | null
    _avg: AlbumAvgAggregateOutputType | null
    _sum: AlbumSumAggregateOutputType | null
    _min: AlbumMinAggregateOutputType | null
    _max: AlbumMaxAggregateOutputType | null
  }

  export type AlbumAvgAggregateOutputType = {
    AlbumId: number | null
    ArtistId: number | null
  }

  export type AlbumSumAggregateOutputType = {
    AlbumId: number | null
    ArtistId: number | null
  }

  export type AlbumMinAggregateOutputType = {
    AlbumId: number | null
    Title: string | null
    ArtistId: number | null
  }

  export type AlbumMaxAggregateOutputType = {
    AlbumId: number | null
    Title: string | null
    ArtistId: number | null
  }

  export type AlbumCountAggregateOutputType = {
    AlbumId: number
    Title: number
    ArtistId: number
    _all: number
  }


  export type AlbumAvgAggregateInputType = {
    AlbumId?: true
    ArtistId?: true
  }

  export type AlbumSumAggregateInputType = {
    AlbumId?: true
    ArtistId?: true
  }

  export type AlbumMinAggregateInputType = {
    AlbumId?: true
    Title?: true
    ArtistId?: true
  }

  export type AlbumMaxAggregateInputType = {
    AlbumId?: true
    Title?: true
    ArtistId?: true
  }

  export type AlbumCountAggregateInputType = {
    AlbumId?: true
    Title?: true
    ArtistId?: true
    _all?: true
  }

  export type AlbumAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Album to aggregate.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Albums
    **/
    _count?: true | AlbumCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlbumAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlbumSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlbumMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlbumMaxAggregateInputType
  }

  export type GetAlbumAggregateType<T extends AlbumAggregateArgs> = {
        [P in keyof T & keyof AggregateAlbum]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlbum[P]>
      : GetScalarType<T[P], AggregateAlbum[P]>
  }




  export type AlbumGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlbumWhereInput
    orderBy?: AlbumOrderByWithAggregationInput | AlbumOrderByWithAggregationInput[]
    by: AlbumScalarFieldEnum[] | AlbumScalarFieldEnum
    having?: AlbumScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlbumCountAggregateInputType | true
    _avg?: AlbumAvgAggregateInputType
    _sum?: AlbumSumAggregateInputType
    _min?: AlbumMinAggregateInputType
    _max?: AlbumMaxAggregateInputType
  }

  export type AlbumGroupByOutputType = {
    AlbumId: number
    Title: string
    ArtistId: number
    _count: AlbumCountAggregateOutputType | null
    _avg: AlbumAvgAggregateOutputType | null
    _sum: AlbumSumAggregateOutputType | null
    _min: AlbumMinAggregateOutputType | null
    _max: AlbumMaxAggregateOutputType | null
  }

  type GetAlbumGroupByPayload<T extends AlbumGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlbumGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlbumGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlbumGroupByOutputType[P]>
            : GetScalarType<T[P], AlbumGroupByOutputType[P]>
        }
      >
    >


  export type AlbumSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    AlbumId?: boolean
    Title?: boolean
    ArtistId?: boolean
    Artist?: boolean | ArtistDefaultArgs<ExtArgs>
    Track?: boolean | Album$TrackArgs<ExtArgs>
    _count?: boolean | AlbumCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["album"]>

  export type AlbumSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    AlbumId?: boolean
    Title?: boolean
    ArtistId?: boolean
    Artist?: boolean | ArtistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["album"]>

  export type AlbumSelectScalar = {
    AlbumId?: boolean
    Title?: boolean
    ArtistId?: boolean
  }

  export type AlbumInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Artist?: boolean | ArtistDefaultArgs<ExtArgs>
    Track?: boolean | Album$TrackArgs<ExtArgs>
    _count?: boolean | AlbumCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AlbumIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Artist?: boolean | ArtistDefaultArgs<ExtArgs>
  }

  export type $AlbumPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Album"
    objects: {
      Artist: Prisma.$ArtistPayload<ExtArgs>
      Track: Prisma.$TrackPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      AlbumId: number
      Title: string
      ArtistId: number
    }, ExtArgs["result"]["album"]>
    composites: {}
  }

  type AlbumGetPayload<S extends boolean | null | undefined | AlbumDefaultArgs> = $Result.GetResult<Prisma.$AlbumPayload, S>

  type AlbumCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AlbumFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AlbumCountAggregateInputType | true
    }

  export interface AlbumDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Album'], meta: { name: 'Album' } }
    /**
     * Find zero or one Album that matches the filter.
     * @param {AlbumFindUniqueArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlbumFindUniqueArgs>(args: SelectSubset<T, AlbumFindUniqueArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Album that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AlbumFindUniqueOrThrowArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlbumFindUniqueOrThrowArgs>(args: SelectSubset<T, AlbumFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Album that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumFindFirstArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlbumFindFirstArgs>(args?: SelectSubset<T, AlbumFindFirstArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Album that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumFindFirstOrThrowArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlbumFindFirstOrThrowArgs>(args?: SelectSubset<T, AlbumFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Albums that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Albums
     * const albums = await prisma.album.findMany()
     * 
     * // Get first 10 Albums
     * const albums = await prisma.album.findMany({ take: 10 })
     * 
     * // Only select the `AlbumId`
     * const albumWithAlbumIdOnly = await prisma.album.findMany({ select: { AlbumId: true } })
     * 
     */
    findMany<T extends AlbumFindManyArgs>(args?: SelectSubset<T, AlbumFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Album.
     * @param {AlbumCreateArgs} args - Arguments to create a Album.
     * @example
     * // Create one Album
     * const Album = await prisma.album.create({
     *   data: {
     *     // ... data to create a Album
     *   }
     * })
     * 
     */
    create<T extends AlbumCreateArgs>(args: SelectSubset<T, AlbumCreateArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Albums.
     * @param {AlbumCreateManyArgs} args - Arguments to create many Albums.
     * @example
     * // Create many Albums
     * const album = await prisma.album.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlbumCreateManyArgs>(args?: SelectSubset<T, AlbumCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Albums and returns the data saved in the database.
     * @param {AlbumCreateManyAndReturnArgs} args - Arguments to create many Albums.
     * @example
     * // Create many Albums
     * const album = await prisma.album.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Albums and only return the `AlbumId`
     * const albumWithAlbumIdOnly = await prisma.album.createManyAndReturn({ 
     *   select: { AlbumId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlbumCreateManyAndReturnArgs>(args?: SelectSubset<T, AlbumCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Album.
     * @param {AlbumDeleteArgs} args - Arguments to delete one Album.
     * @example
     * // Delete one Album
     * const Album = await prisma.album.delete({
     *   where: {
     *     // ... filter to delete one Album
     *   }
     * })
     * 
     */
    delete<T extends AlbumDeleteArgs>(args: SelectSubset<T, AlbumDeleteArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Album.
     * @param {AlbumUpdateArgs} args - Arguments to update one Album.
     * @example
     * // Update one Album
     * const album = await prisma.album.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlbumUpdateArgs>(args: SelectSubset<T, AlbumUpdateArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Albums.
     * @param {AlbumDeleteManyArgs} args - Arguments to filter Albums to delete.
     * @example
     * // Delete a few Albums
     * const { count } = await prisma.album.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlbumDeleteManyArgs>(args?: SelectSubset<T, AlbumDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Albums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Albums
     * const album = await prisma.album.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlbumUpdateManyArgs>(args: SelectSubset<T, AlbumUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Album.
     * @param {AlbumUpsertArgs} args - Arguments to update or create a Album.
     * @example
     * // Update or create a Album
     * const album = await prisma.album.upsert({
     *   create: {
     *     // ... data to create a Album
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Album we want to update
     *   }
     * })
     */
    upsert<T extends AlbumUpsertArgs>(args: SelectSubset<T, AlbumUpsertArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Albums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumCountArgs} args - Arguments to filter Albums to count.
     * @example
     * // Count the number of Albums
     * const count = await prisma.album.count({
     *   where: {
     *     // ... the filter for the Albums we want to count
     *   }
     * })
    **/
    count<T extends AlbumCountArgs>(
      args?: Subset<T, AlbumCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlbumCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Album.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlbumAggregateArgs>(args: Subset<T, AlbumAggregateArgs>): Prisma.PrismaPromise<GetAlbumAggregateType<T>>

    /**
     * Group by Album.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumGroupByArgs} args - Group by arguments.
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
      T extends AlbumGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlbumGroupByArgs['orderBy'] }
        : { orderBy?: AlbumGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlbumGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlbumGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Album model
   */
  readonly fields: AlbumFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Album.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlbumClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Artist<T extends ArtistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArtistDefaultArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    Track<T extends Album$TrackArgs<ExtArgs> = {}>(args?: Subset<T, Album$TrackArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Album model
   */ 
  interface AlbumFieldRefs {
    readonly AlbumId: FieldRef<"Album", 'Int'>
    readonly Title: FieldRef<"Album", 'String'>
    readonly ArtistId: FieldRef<"Album", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Album findUnique
   */
  export type AlbumFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where: AlbumWhereUniqueInput
  }

  /**
   * Album findUniqueOrThrow
   */
  export type AlbumFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where: AlbumWhereUniqueInput
  }

  /**
   * Album findFirst
   */
  export type AlbumFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Albums.
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Albums.
     */
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }

  /**
   * Album findFirstOrThrow
   */
  export type AlbumFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Albums.
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Albums.
     */
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }

  /**
   * Album findMany
   */
  export type AlbumFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Albums to fetch.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Albums.
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }

  /**
   * Album create
   */
  export type AlbumCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * The data needed to create a Album.
     */
    data: XOR<AlbumCreateInput, AlbumUncheckedCreateInput>
  }

  /**
   * Album createMany
   */
  export type AlbumCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Albums.
     */
    data: AlbumCreateManyInput | AlbumCreateManyInput[]
  }

  /**
   * Album createManyAndReturn
   */
  export type AlbumCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Albums.
     */
    data: AlbumCreateManyInput | AlbumCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Album update
   */
  export type AlbumUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * The data needed to update a Album.
     */
    data: XOR<AlbumUpdateInput, AlbumUncheckedUpdateInput>
    /**
     * Choose, which Album to update.
     */
    where: AlbumWhereUniqueInput
  }

  /**
   * Album updateMany
   */
  export type AlbumUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Albums.
     */
    data: XOR<AlbumUpdateManyMutationInput, AlbumUncheckedUpdateManyInput>
    /**
     * Filter which Albums to update
     */
    where?: AlbumWhereInput
  }

  /**
   * Album upsert
   */
  export type AlbumUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * The filter to search for the Album to update in case it exists.
     */
    where: AlbumWhereUniqueInput
    /**
     * In case the Album found by the `where` argument doesn't exist, create a new Album with this data.
     */
    create: XOR<AlbumCreateInput, AlbumUncheckedCreateInput>
    /**
     * In case the Album was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlbumUpdateInput, AlbumUncheckedUpdateInput>
  }

  /**
   * Album delete
   */
  export type AlbumDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter which Album to delete.
     */
    where: AlbumWhereUniqueInput
  }

  /**
   * Album deleteMany
   */
  export type AlbumDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Albums to delete
     */
    where?: AlbumWhereInput
  }

  /**
   * Album.Track
   */
  export type Album$TrackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    where?: TrackWhereInput
    orderBy?: TrackOrderByWithRelationInput | TrackOrderByWithRelationInput[]
    cursor?: TrackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrackScalarFieldEnum | TrackScalarFieldEnum[]
  }

  /**
   * Album without action
   */
  export type AlbumDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
  }


  /**
   * Model Artist
   */

  export type AggregateArtist = {
    _count: ArtistCountAggregateOutputType | null
    _avg: ArtistAvgAggregateOutputType | null
    _sum: ArtistSumAggregateOutputType | null
    _min: ArtistMinAggregateOutputType | null
    _max: ArtistMaxAggregateOutputType | null
  }

  export type ArtistAvgAggregateOutputType = {
    ArtistId: number | null
  }

  export type ArtistSumAggregateOutputType = {
    ArtistId: number | null
  }

  export type ArtistMinAggregateOutputType = {
    ArtistId: number | null
    Name: string | null
  }

  export type ArtistMaxAggregateOutputType = {
    ArtistId: number | null
    Name: string | null
  }

  export type ArtistCountAggregateOutputType = {
    ArtistId: number
    Name: number
    _all: number
  }


  export type ArtistAvgAggregateInputType = {
    ArtistId?: true
  }

  export type ArtistSumAggregateInputType = {
    ArtistId?: true
  }

  export type ArtistMinAggregateInputType = {
    ArtistId?: true
    Name?: true
  }

  export type ArtistMaxAggregateInputType = {
    ArtistId?: true
    Name?: true
  }

  export type ArtistCountAggregateInputType = {
    ArtistId?: true
    Name?: true
    _all?: true
  }

  export type ArtistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artist to aggregate.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Artists
    **/
    _count?: true | ArtistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArtistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArtistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArtistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArtistMaxAggregateInputType
  }

  export type GetArtistAggregateType<T extends ArtistAggregateArgs> = {
        [P in keyof T & keyof AggregateArtist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtist[P]>
      : GetScalarType<T[P], AggregateArtist[P]>
  }




  export type ArtistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtistWhereInput
    orderBy?: ArtistOrderByWithAggregationInput | ArtistOrderByWithAggregationInput[]
    by: ArtistScalarFieldEnum[] | ArtistScalarFieldEnum
    having?: ArtistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArtistCountAggregateInputType | true
    _avg?: ArtistAvgAggregateInputType
    _sum?: ArtistSumAggregateInputType
    _min?: ArtistMinAggregateInputType
    _max?: ArtistMaxAggregateInputType
  }

  export type ArtistGroupByOutputType = {
    ArtistId: number
    Name: string | null
    _count: ArtistCountAggregateOutputType | null
    _avg: ArtistAvgAggregateOutputType | null
    _sum: ArtistSumAggregateOutputType | null
    _min: ArtistMinAggregateOutputType | null
    _max: ArtistMaxAggregateOutputType | null
  }

  type GetArtistGroupByPayload<T extends ArtistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArtistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArtistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtistGroupByOutputType[P]>
            : GetScalarType<T[P], ArtistGroupByOutputType[P]>
        }
      >
    >


  export type ArtistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ArtistId?: boolean
    Name?: boolean
    Album?: boolean | Artist$AlbumArgs<ExtArgs>
    _count?: boolean | ArtistCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artist"]>

  export type ArtistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ArtistId?: boolean
    Name?: boolean
  }, ExtArgs["result"]["artist"]>

  export type ArtistSelectScalar = {
    ArtistId?: boolean
    Name?: boolean
  }

  export type ArtistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Album?: boolean | Artist$AlbumArgs<ExtArgs>
    _count?: boolean | ArtistCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ArtistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ArtistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Artist"
    objects: {
      Album: Prisma.$AlbumPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ArtistId: number
      Name: string | null
    }, ExtArgs["result"]["artist"]>
    composites: {}
  }

  type ArtistGetPayload<S extends boolean | null | undefined | ArtistDefaultArgs> = $Result.GetResult<Prisma.$ArtistPayload, S>

  type ArtistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ArtistFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ArtistCountAggregateInputType | true
    }

  export interface ArtistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Artist'], meta: { name: 'Artist' } }
    /**
     * Find zero or one Artist that matches the filter.
     * @param {ArtistFindUniqueArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArtistFindUniqueArgs>(args: SelectSubset<T, ArtistFindUniqueArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Artist that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ArtistFindUniqueOrThrowArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArtistFindUniqueOrThrowArgs>(args: SelectSubset<T, ArtistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Artist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindFirstArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArtistFindFirstArgs>(args?: SelectSubset<T, ArtistFindFirstArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Artist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindFirstOrThrowArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArtistFindFirstOrThrowArgs>(args?: SelectSubset<T, ArtistFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Artists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Artists
     * const artists = await prisma.artist.findMany()
     * 
     * // Get first 10 Artists
     * const artists = await prisma.artist.findMany({ take: 10 })
     * 
     * // Only select the `ArtistId`
     * const artistWithArtistIdOnly = await prisma.artist.findMany({ select: { ArtistId: true } })
     * 
     */
    findMany<T extends ArtistFindManyArgs>(args?: SelectSubset<T, ArtistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Artist.
     * @param {ArtistCreateArgs} args - Arguments to create a Artist.
     * @example
     * // Create one Artist
     * const Artist = await prisma.artist.create({
     *   data: {
     *     // ... data to create a Artist
     *   }
     * })
     * 
     */
    create<T extends ArtistCreateArgs>(args: SelectSubset<T, ArtistCreateArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Artists.
     * @param {ArtistCreateManyArgs} args - Arguments to create many Artists.
     * @example
     * // Create many Artists
     * const artist = await prisma.artist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArtistCreateManyArgs>(args?: SelectSubset<T, ArtistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Artists and returns the data saved in the database.
     * @param {ArtistCreateManyAndReturnArgs} args - Arguments to create many Artists.
     * @example
     * // Create many Artists
     * const artist = await prisma.artist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Artists and only return the `ArtistId`
     * const artistWithArtistIdOnly = await prisma.artist.createManyAndReturn({ 
     *   select: { ArtistId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArtistCreateManyAndReturnArgs>(args?: SelectSubset<T, ArtistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Artist.
     * @param {ArtistDeleteArgs} args - Arguments to delete one Artist.
     * @example
     * // Delete one Artist
     * const Artist = await prisma.artist.delete({
     *   where: {
     *     // ... filter to delete one Artist
     *   }
     * })
     * 
     */
    delete<T extends ArtistDeleteArgs>(args: SelectSubset<T, ArtistDeleteArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Artist.
     * @param {ArtistUpdateArgs} args - Arguments to update one Artist.
     * @example
     * // Update one Artist
     * const artist = await prisma.artist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArtistUpdateArgs>(args: SelectSubset<T, ArtistUpdateArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Artists.
     * @param {ArtistDeleteManyArgs} args - Arguments to filter Artists to delete.
     * @example
     * // Delete a few Artists
     * const { count } = await prisma.artist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArtistDeleteManyArgs>(args?: SelectSubset<T, ArtistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Artists
     * const artist = await prisma.artist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArtistUpdateManyArgs>(args: SelectSubset<T, ArtistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Artist.
     * @param {ArtistUpsertArgs} args - Arguments to update or create a Artist.
     * @example
     * // Update or create a Artist
     * const artist = await prisma.artist.upsert({
     *   create: {
     *     // ... data to create a Artist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Artist we want to update
     *   }
     * })
     */
    upsert<T extends ArtistUpsertArgs>(args: SelectSubset<T, ArtistUpsertArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistCountArgs} args - Arguments to filter Artists to count.
     * @example
     * // Count the number of Artists
     * const count = await prisma.artist.count({
     *   where: {
     *     // ... the filter for the Artists we want to count
     *   }
     * })
    **/
    count<T extends ArtistCountArgs>(
      args?: Subset<T, ArtistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Artist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArtistAggregateArgs>(args: Subset<T, ArtistAggregateArgs>): Prisma.PrismaPromise<GetArtistAggregateType<T>>

    /**
     * Group by Artist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistGroupByArgs} args - Group by arguments.
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
      T extends ArtistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArtistGroupByArgs['orderBy'] }
        : { orderBy?: ArtistGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArtistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Artist model
   */
  readonly fields: ArtistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Artist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArtistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Album<T extends Artist$AlbumArgs<ExtArgs> = {}>(args?: Subset<T, Artist$AlbumArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Artist model
   */ 
  interface ArtistFieldRefs {
    readonly ArtistId: FieldRef<"Artist", 'Int'>
    readonly Name: FieldRef<"Artist", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Artist findUnique
   */
  export type ArtistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where: ArtistWhereUniqueInput
  }

  /**
   * Artist findUniqueOrThrow
   */
  export type ArtistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where: ArtistWhereUniqueInput
  }

  /**
   * Artist findFirst
   */
  export type ArtistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artists.
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artists.
     */
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }

  /**
   * Artist findFirstOrThrow
   */
  export type ArtistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artists.
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artists.
     */
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }

  /**
   * Artist findMany
   */
  export type ArtistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artists to fetch.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Artists.
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }

  /**
   * Artist create
   */
  export type ArtistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * The data needed to create a Artist.
     */
    data?: XOR<ArtistCreateInput, ArtistUncheckedCreateInput>
  }

  /**
   * Artist createMany
   */
  export type ArtistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Artists.
     */
    data: ArtistCreateManyInput | ArtistCreateManyInput[]
  }

  /**
   * Artist createManyAndReturn
   */
  export type ArtistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Artists.
     */
    data: ArtistCreateManyInput | ArtistCreateManyInput[]
  }

  /**
   * Artist update
   */
  export type ArtistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * The data needed to update a Artist.
     */
    data: XOR<ArtistUpdateInput, ArtistUncheckedUpdateInput>
    /**
     * Choose, which Artist to update.
     */
    where: ArtistWhereUniqueInput
  }

  /**
   * Artist updateMany
   */
  export type ArtistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Artists.
     */
    data: XOR<ArtistUpdateManyMutationInput, ArtistUncheckedUpdateManyInput>
    /**
     * Filter which Artists to update
     */
    where?: ArtistWhereInput
  }

  /**
   * Artist upsert
   */
  export type ArtistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * The filter to search for the Artist to update in case it exists.
     */
    where: ArtistWhereUniqueInput
    /**
     * In case the Artist found by the `where` argument doesn't exist, create a new Artist with this data.
     */
    create: XOR<ArtistCreateInput, ArtistUncheckedCreateInput>
    /**
     * In case the Artist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArtistUpdateInput, ArtistUncheckedUpdateInput>
  }

  /**
   * Artist delete
   */
  export type ArtistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter which Artist to delete.
     */
    where: ArtistWhereUniqueInput
  }

  /**
   * Artist deleteMany
   */
  export type ArtistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artists to delete
     */
    where?: ArtistWhereInput
  }

  /**
   * Artist.Album
   */
  export type Artist$AlbumArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    where?: AlbumWhereInput
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    cursor?: AlbumWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }

  /**
   * Artist without action
   */
  export type ArtistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    CustomerId: number | null
    SupportRepId: number | null
  }

  export type CustomerSumAggregateOutputType = {
    CustomerId: number | null
    SupportRepId: number | null
  }

  export type CustomerMinAggregateOutputType = {
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

  export type CustomerMaxAggregateOutputType = {
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

  export type CustomerCountAggregateOutputType = {
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


  export type CustomerAvgAggregateInputType = {
    CustomerId?: true
    SupportRepId?: true
  }

  export type CustomerSumAggregateInputType = {
    CustomerId?: true
    SupportRepId?: true
  }

  export type CustomerMinAggregateInputType = {
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

  export type CustomerMaxAggregateInputType = {
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

  export type CustomerCountAggregateInputType = {
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

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
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
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
    Employee?: boolean | Customer$EmployeeArgs<ExtArgs>
    Invoice?: boolean | Customer$InvoiceArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
    Employee?: boolean | Customer$EmployeeArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
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

  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Employee?: boolean | Customer$EmployeeArgs<ExtArgs>
    Invoice?: boolean | Customer$InvoiceArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Employee?: boolean | Customer$EmployeeArgs<ExtArgs>
  }

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      Employee: Prisma.$EmployeePayload<ExtArgs> | null
      Invoice: Prisma.$InvoicePayload<ExtArgs>[]
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
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `CustomerId`
     * const customerWithCustomerIdOnly = await prisma.customer.findMany({ select: { CustomerId: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `CustomerId`
     * const customerWithCustomerIdOnly = await prisma.customer.createManyAndReturn({ 
     *   select: { CustomerId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
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
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Employee<T extends Customer$EmployeeArgs<ExtArgs> = {}>(args?: Subset<T, Customer$EmployeeArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    Invoice<T extends Customer$InvoiceArgs<ExtArgs> = {}>(args?: Subset<T, Customer$InvoiceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Customer model
   */ 
  interface CustomerFieldRefs {
    readonly CustomerId: FieldRef<"Customer", 'Int'>
    readonly FirstName: FieldRef<"Customer", 'String'>
    readonly LastName: FieldRef<"Customer", 'String'>
    readonly ImageURL: FieldRef<"Customer", 'String'>
    readonly Company: FieldRef<"Customer", 'String'>
    readonly Address: FieldRef<"Customer", 'String'>
    readonly City: FieldRef<"Customer", 'String'>
    readonly State: FieldRef<"Customer", 'String'>
    readonly Country: FieldRef<"Customer", 'String'>
    readonly PostalCode: FieldRef<"Customer", 'String'>
    readonly Phone: FieldRef<"Customer", 'String'>
    readonly Fax: FieldRef<"Customer", 'String'>
    readonly Email: FieldRef<"Customer", 'String'>
    readonly SupportRepId: FieldRef<"Customer", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
  }

  /**
   * Customer.Employee
   */
  export type Customer$EmployeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
  }

  /**
   * Customer.Invoice
   */
  export type Customer$InvoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    cursor?: InvoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model Employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeAvgAggregateOutputType = {
    EmployeeId: number | null
    ReportsTo: number | null
  }

  export type EmployeeSumAggregateOutputType = {
    EmployeeId: number | null
    ReportsTo: number | null
  }

  export type EmployeeMinAggregateOutputType = {
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

  export type EmployeeMaxAggregateOutputType = {
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

  export type EmployeeCountAggregateOutputType = {
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


  export type EmployeeAvgAggregateInputType = {
    EmployeeId?: true
    ReportsTo?: true
  }

  export type EmployeeSumAggregateInputType = {
    EmployeeId?: true
    ReportsTo?: true
  }

  export type EmployeeMinAggregateInputType = {
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

  export type EmployeeMaxAggregateInputType = {
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

  export type EmployeeCountAggregateInputType = {
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

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employee to aggregate.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }




  export type EmployeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithAggregationInput | EmployeeOrderByWithAggregationInput[]
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum
    having?: EmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _avg?: EmployeeAvgAggregateInputType
    _sum?: EmployeeSumAggregateInputType
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }

  export type EmployeeGroupByOutputType = {
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
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
    Customer?: boolean | Employee$CustomerArgs<ExtArgs>
    Employee?: boolean | Employee$EmployeeArgs<ExtArgs>
    other_Employee?: boolean | Employee$other_EmployeeArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
    Employee?: boolean | Employee$EmployeeArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectScalar = {
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

  export type EmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Customer?: boolean | Employee$CustomerArgs<ExtArgs>
    Employee?: boolean | Employee$EmployeeArgs<ExtArgs>
    other_Employee?: boolean | Employee$other_EmployeeArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmployeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Employee?: boolean | Employee$EmployeeArgs<ExtArgs>
  }

  export type $EmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employee"
    objects: {
      Customer: Prisma.$CustomerPayload<ExtArgs>[]
      Employee: Prisma.$EmployeePayload<ExtArgs> | null
      other_Employee: Prisma.$EmployeePayload<ExtArgs>[]
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
    }, ExtArgs["result"]["employee"]>
    composites: {}
  }

  type EmployeeGetPayload<S extends boolean | null | undefined | EmployeeDefaultArgs> = $Result.GetResult<Prisma.$EmployeePayload, S>

  type EmployeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EmployeeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EmployeeCountAggregateInputType | true
    }

  export interface EmployeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employee'], meta: { name: 'Employee' } }
    /**
     * Find zero or one Employee that matches the filter.
     * @param {EmployeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeFindUniqueArgs>(args: SelectSubset<T, EmployeeFindUniqueArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Employee that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EmployeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeFindFirstArgs>(args?: SelectSubset<T, EmployeeFindFirstArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `EmployeeId`
     * const employeeWithEmployeeIdOnly = await prisma.employee.findMany({ select: { EmployeeId: true } })
     * 
     */
    findMany<T extends EmployeeFindManyArgs>(args?: SelectSubset<T, EmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Employee.
     * @param {EmployeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
     */
    create<T extends EmployeeCreateArgs>(args: SelectSubset<T, EmployeeCreateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Employees.
     * @param {EmployeeCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeCreateManyArgs>(args?: SelectSubset<T, EmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Employees and returns the data saved in the database.
     * @param {EmployeeCreateManyAndReturnArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Employees and only return the `EmployeeId`
     * const employeeWithEmployeeIdOnly = await prisma.employee.createManyAndReturn({ 
     *   select: { EmployeeId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeeCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Employee.
     * @param {EmployeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
     */
    delete<T extends EmployeeDeleteArgs>(args: SelectSubset<T, EmployeeDeleteArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Employee.
     * @param {EmployeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeUpdateArgs>(args: SelectSubset<T, EmployeeUpdateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Employees.
     * @param {EmployeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeDeleteManyArgs>(args?: SelectSubset<T, EmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeUpdateManyArgs>(args: SelectSubset<T, EmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Employee.
     * @param {EmployeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeUpsertArgs>(args: SelectSubset<T, EmployeeUpsertArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeeCountArgs>(
      args?: Subset<T, EmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeGroupByArgs} args - Group by arguments.
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
      T extends EmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employee model
   */
  readonly fields: EmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Customer<T extends Employee$CustomerArgs<ExtArgs> = {}>(args?: Subset<T, Employee$CustomerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany"> | Null>
    Employee<T extends Employee$EmployeeArgs<ExtArgs> = {}>(args?: Subset<T, Employee$EmployeeArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    other_Employee<T extends Employee$other_EmployeeArgs<ExtArgs> = {}>(args?: Subset<T, Employee$other_EmployeeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Employee model
   */ 
  interface EmployeeFieldRefs {
    readonly EmployeeId: FieldRef<"Employee", 'Int'>
    readonly LastName: FieldRef<"Employee", 'String'>
    readonly FirstName: FieldRef<"Employee", 'String'>
    readonly ImageURL: FieldRef<"Employee", 'String'>
    readonly Title: FieldRef<"Employee", 'String'>
    readonly ReportsTo: FieldRef<"Employee", 'Int'>
    readonly BirthDate: FieldRef<"Employee", 'DateTime'>
    readonly HireDate: FieldRef<"Employee", 'DateTime'>
    readonly Address: FieldRef<"Employee", 'String'>
    readonly City: FieldRef<"Employee", 'String'>
    readonly State: FieldRef<"Employee", 'String'>
    readonly Country: FieldRef<"Employee", 'String'>
    readonly PostalCode: FieldRef<"Employee", 'String'>
    readonly Phone: FieldRef<"Employee", 'String'>
    readonly Fax: FieldRef<"Employee", 'String'>
    readonly Email: FieldRef<"Employee", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Employee findUnique
   */
  export type EmployeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findUniqueOrThrow
   */
  export type EmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findFirst
   */
  export type EmployeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findFirstOrThrow
   */
  export type EmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findMany
   */
  export type EmployeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee create
   */
  export type EmployeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to create a Employee.
     */
    data: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
  }

  /**
   * Employee createMany
   */
  export type EmployeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
  }

  /**
   * Employee createManyAndReturn
   */
  export type EmployeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employee update
   */
  export type EmployeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to update a Employee.
     */
    data: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
    /**
     * Choose, which Employee to update.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee updateMany
   */
  export type EmployeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
  }

  /**
   * Employee upsert
   */
  export type EmployeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The filter to search for the Employee to update in case it exists.
     */
    where: EmployeeWhereUniqueInput
    /**
     * In case the Employee found by the `where` argument doesn't exist, create a new Employee with this data.
     */
    create: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
    /**
     * In case the Employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
  }

  /**
   * Employee delete
   */
  export type EmployeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter which Employee to delete.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee deleteMany
   */
  export type EmployeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeeWhereInput
  }

  /**
   * Employee.Customer
   */
  export type Employee$CustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    cursor?: CustomerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Employee.Employee
   */
  export type Employee$EmployeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
  }

  /**
   * Employee.other_Employee
   */
  export type Employee$other_EmployeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    cursor?: EmployeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee without action
   */
  export type EmployeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
  }


  /**
   * Model Genre
   */

  export type AggregateGenre = {
    _count: GenreCountAggregateOutputType | null
    _avg: GenreAvgAggregateOutputType | null
    _sum: GenreSumAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  export type GenreAvgAggregateOutputType = {
    GenreId: number | null
  }

  export type GenreSumAggregateOutputType = {
    GenreId: number | null
  }

  export type GenreMinAggregateOutputType = {
    GenreId: number | null
    Name: string | null
  }

  export type GenreMaxAggregateOutputType = {
    GenreId: number | null
    Name: string | null
  }

  export type GenreCountAggregateOutputType = {
    GenreId: number
    Name: number
    _all: number
  }


  export type GenreAvgAggregateInputType = {
    GenreId?: true
  }

  export type GenreSumAggregateInputType = {
    GenreId?: true
  }

  export type GenreMinAggregateInputType = {
    GenreId?: true
    Name?: true
  }

  export type GenreMaxAggregateInputType = {
    GenreId?: true
    Name?: true
  }

  export type GenreCountAggregateInputType = {
    GenreId?: true
    Name?: true
    _all?: true
  }

  export type GenreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genre to aggregate.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Genres
    **/
    _count?: true | GenreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GenreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GenreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenreMaxAggregateInputType
  }

  export type GetGenreAggregateType<T extends GenreAggregateArgs> = {
        [P in keyof T & keyof AggregateGenre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenre[P]>
      : GetScalarType<T[P], AggregateGenre[P]>
  }




  export type GenreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenreWhereInput
    orderBy?: GenreOrderByWithAggregationInput | GenreOrderByWithAggregationInput[]
    by: GenreScalarFieldEnum[] | GenreScalarFieldEnum
    having?: GenreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenreCountAggregateInputType | true
    _avg?: GenreAvgAggregateInputType
    _sum?: GenreSumAggregateInputType
    _min?: GenreMinAggregateInputType
    _max?: GenreMaxAggregateInputType
  }

  export type GenreGroupByOutputType = {
    GenreId: number
    Name: string | null
    _count: GenreCountAggregateOutputType | null
    _avg: GenreAvgAggregateOutputType | null
    _sum: GenreSumAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  type GetGenreGroupByPayload<T extends GenreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GenreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GenreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenreGroupByOutputType[P]>
            : GetScalarType<T[P], GenreGroupByOutputType[P]>
        }
      >
    >


  export type GenreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    GenreId?: boolean
    Name?: boolean
    Track?: boolean | Genre$TrackArgs<ExtArgs>
    _count?: boolean | GenreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["genre"]>

  export type GenreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    GenreId?: boolean
    Name?: boolean
  }, ExtArgs["result"]["genre"]>

  export type GenreSelectScalar = {
    GenreId?: boolean
    Name?: boolean
  }

  export type GenreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Track?: boolean | Genre$TrackArgs<ExtArgs>
    _count?: boolean | GenreCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GenreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GenrePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Genre"
    objects: {
      Track: Prisma.$TrackPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      GenreId: number
      Name: string | null
    }, ExtArgs["result"]["genre"]>
    composites: {}
  }

  type GenreGetPayload<S extends boolean | null | undefined | GenreDefaultArgs> = $Result.GetResult<Prisma.$GenrePayload, S>

  type GenreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GenreFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GenreCountAggregateInputType | true
    }

  export interface GenreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Genre'], meta: { name: 'Genre' } }
    /**
     * Find zero or one Genre that matches the filter.
     * @param {GenreFindUniqueArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GenreFindUniqueArgs>(args: SelectSubset<T, GenreFindUniqueArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Genre that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {GenreFindUniqueOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GenreFindUniqueOrThrowArgs>(args: SelectSubset<T, GenreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Genre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindFirstArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GenreFindFirstArgs>(args?: SelectSubset<T, GenreFindFirstArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Genre that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindFirstOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GenreFindFirstOrThrowArgs>(args?: SelectSubset<T, GenreFindFirstOrThrowArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Genres
     * const genres = await prisma.genre.findMany()
     * 
     * // Get first 10 Genres
     * const genres = await prisma.genre.findMany({ take: 10 })
     * 
     * // Only select the `GenreId`
     * const genreWithGenreIdOnly = await prisma.genre.findMany({ select: { GenreId: true } })
     * 
     */
    findMany<T extends GenreFindManyArgs>(args?: SelectSubset<T, GenreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Genre.
     * @param {GenreCreateArgs} args - Arguments to create a Genre.
     * @example
     * // Create one Genre
     * const Genre = await prisma.genre.create({
     *   data: {
     *     // ... data to create a Genre
     *   }
     * })
     * 
     */
    create<T extends GenreCreateArgs>(args: SelectSubset<T, GenreCreateArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Genres.
     * @param {GenreCreateManyArgs} args - Arguments to create many Genres.
     * @example
     * // Create many Genres
     * const genre = await prisma.genre.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GenreCreateManyArgs>(args?: SelectSubset<T, GenreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Genres and returns the data saved in the database.
     * @param {GenreCreateManyAndReturnArgs} args - Arguments to create many Genres.
     * @example
     * // Create many Genres
     * const genre = await prisma.genre.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Genres and only return the `GenreId`
     * const genreWithGenreIdOnly = await prisma.genre.createManyAndReturn({ 
     *   select: { GenreId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GenreCreateManyAndReturnArgs>(args?: SelectSubset<T, GenreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Genre.
     * @param {GenreDeleteArgs} args - Arguments to delete one Genre.
     * @example
     * // Delete one Genre
     * const Genre = await prisma.genre.delete({
     *   where: {
     *     // ... filter to delete one Genre
     *   }
     * })
     * 
     */
    delete<T extends GenreDeleteArgs>(args: SelectSubset<T, GenreDeleteArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Genre.
     * @param {GenreUpdateArgs} args - Arguments to update one Genre.
     * @example
     * // Update one Genre
     * const genre = await prisma.genre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GenreUpdateArgs>(args: SelectSubset<T, GenreUpdateArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Genres.
     * @param {GenreDeleteManyArgs} args - Arguments to filter Genres to delete.
     * @example
     * // Delete a few Genres
     * const { count } = await prisma.genre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GenreDeleteManyArgs>(args?: SelectSubset<T, GenreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Genres
     * const genre = await prisma.genre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GenreUpdateManyArgs>(args: SelectSubset<T, GenreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Genre.
     * @param {GenreUpsertArgs} args - Arguments to update or create a Genre.
     * @example
     * // Update or create a Genre
     * const genre = await prisma.genre.upsert({
     *   create: {
     *     // ... data to create a Genre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Genre we want to update
     *   }
     * })
     */
    upsert<T extends GenreUpsertArgs>(args: SelectSubset<T, GenreUpsertArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreCountArgs} args - Arguments to filter Genres to count.
     * @example
     * // Count the number of Genres
     * const count = await prisma.genre.count({
     *   where: {
     *     // ... the filter for the Genres we want to count
     *   }
     * })
    **/
    count<T extends GenreCountArgs>(
      args?: Subset<T, GenreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GenreAggregateArgs>(args: Subset<T, GenreAggregateArgs>): Prisma.PrismaPromise<GetGenreAggregateType<T>>

    /**
     * Group by Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreGroupByArgs} args - Group by arguments.
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
      T extends GenreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GenreGroupByArgs['orderBy'] }
        : { orderBy?: GenreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GenreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Genre model
   */
  readonly fields: GenreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Genre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GenreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Track<T extends Genre$TrackArgs<ExtArgs> = {}>(args?: Subset<T, Genre$TrackArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Genre model
   */ 
  interface GenreFieldRefs {
    readonly GenreId: FieldRef<"Genre", 'Int'>
    readonly Name: FieldRef<"Genre", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Genre findUnique
   */
  export type GenreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre findUniqueOrThrow
   */
  export type GenreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre findFirst
   */
  export type GenreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre findFirstOrThrow
   */
  export type GenreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre findMany
   */
  export type GenreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genres to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre create
   */
  export type GenreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The data needed to create a Genre.
     */
    data?: XOR<GenreCreateInput, GenreUncheckedCreateInput>
  }

  /**
   * Genre createMany
   */
  export type GenreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Genres.
     */
    data: GenreCreateManyInput | GenreCreateManyInput[]
  }

  /**
   * Genre createManyAndReturn
   */
  export type GenreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Genres.
     */
    data: GenreCreateManyInput | GenreCreateManyInput[]
  }

  /**
   * Genre update
   */
  export type GenreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The data needed to update a Genre.
     */
    data: XOR<GenreUpdateInput, GenreUncheckedUpdateInput>
    /**
     * Choose, which Genre to update.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre updateMany
   */
  export type GenreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Genres.
     */
    data: XOR<GenreUpdateManyMutationInput, GenreUncheckedUpdateManyInput>
    /**
     * Filter which Genres to update
     */
    where?: GenreWhereInput
  }

  /**
   * Genre upsert
   */
  export type GenreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The filter to search for the Genre to update in case it exists.
     */
    where: GenreWhereUniqueInput
    /**
     * In case the Genre found by the `where` argument doesn't exist, create a new Genre with this data.
     */
    create: XOR<GenreCreateInput, GenreUncheckedCreateInput>
    /**
     * In case the Genre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GenreUpdateInput, GenreUncheckedUpdateInput>
  }

  /**
   * Genre delete
   */
  export type GenreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter which Genre to delete.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre deleteMany
   */
  export type GenreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genres to delete
     */
    where?: GenreWhereInput
  }

  /**
   * Genre.Track
   */
  export type Genre$TrackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    where?: TrackWhereInput
    orderBy?: TrackOrderByWithRelationInput | TrackOrderByWithRelationInput[]
    cursor?: TrackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrackScalarFieldEnum | TrackScalarFieldEnum[]
  }

  /**
   * Genre without action
   */
  export type GenreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
  }


  /**
   * Model Invice_Item
   */

  export type AggregateInvice_Item = {
    _count: Invice_ItemCountAggregateOutputType | null
    _avg: Invice_ItemAvgAggregateOutputType | null
    _sum: Invice_ItemSumAggregateOutputType | null
    _min: Invice_ItemMinAggregateOutputType | null
    _max: Invice_ItemMaxAggregateOutputType | null
  }

  export type Invice_ItemAvgAggregateOutputType = {
    InvoiceLineId: number | null
    InvoiceId: number | null
    TrackId: number | null
    UnitPrice: Decimal | null
    Quantity: number | null
  }

  export type Invice_ItemSumAggregateOutputType = {
    InvoiceLineId: number | null
    InvoiceId: number | null
    TrackId: number | null
    UnitPrice: Decimal | null
    Quantity: number | null
  }

  export type Invice_ItemMinAggregateOutputType = {
    InvoiceLineId: number | null
    InvoiceId: number | null
    TrackId: number | null
    UnitPrice: Decimal | null
    Quantity: number | null
  }

  export type Invice_ItemMaxAggregateOutputType = {
    InvoiceLineId: number | null
    InvoiceId: number | null
    TrackId: number | null
    UnitPrice: Decimal | null
    Quantity: number | null
  }

  export type Invice_ItemCountAggregateOutputType = {
    InvoiceLineId: number
    InvoiceId: number
    TrackId: number
    UnitPrice: number
    Quantity: number
    _all: number
  }


  export type Invice_ItemAvgAggregateInputType = {
    InvoiceLineId?: true
    InvoiceId?: true
    TrackId?: true
    UnitPrice?: true
    Quantity?: true
  }

  export type Invice_ItemSumAggregateInputType = {
    InvoiceLineId?: true
    InvoiceId?: true
    TrackId?: true
    UnitPrice?: true
    Quantity?: true
  }

  export type Invice_ItemMinAggregateInputType = {
    InvoiceLineId?: true
    InvoiceId?: true
    TrackId?: true
    UnitPrice?: true
    Quantity?: true
  }

  export type Invice_ItemMaxAggregateInputType = {
    InvoiceLineId?: true
    InvoiceId?: true
    TrackId?: true
    UnitPrice?: true
    Quantity?: true
  }

  export type Invice_ItemCountAggregateInputType = {
    InvoiceLineId?: true
    InvoiceId?: true
    TrackId?: true
    UnitPrice?: true
    Quantity?: true
    _all?: true
  }

  export type Invice_ItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invice_Item to aggregate.
     */
    where?: Invice_ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invice_Items to fetch.
     */
    orderBy?: Invice_ItemOrderByWithRelationInput | Invice_ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Invice_ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invice_Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invice_Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invice_Items
    **/
    _count?: true | Invice_ItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Invice_ItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Invice_ItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Invice_ItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Invice_ItemMaxAggregateInputType
  }

  export type GetInvice_ItemAggregateType<T extends Invice_ItemAggregateArgs> = {
        [P in keyof T & keyof AggregateInvice_Item]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvice_Item[P]>
      : GetScalarType<T[P], AggregateInvice_Item[P]>
  }




  export type Invice_ItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Invice_ItemWhereInput
    orderBy?: Invice_ItemOrderByWithAggregationInput | Invice_ItemOrderByWithAggregationInput[]
    by: Invice_ItemScalarFieldEnum[] | Invice_ItemScalarFieldEnum
    having?: Invice_ItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Invice_ItemCountAggregateInputType | true
    _avg?: Invice_ItemAvgAggregateInputType
    _sum?: Invice_ItemSumAggregateInputType
    _min?: Invice_ItemMinAggregateInputType
    _max?: Invice_ItemMaxAggregateInputType
  }

  export type Invice_ItemGroupByOutputType = {
    InvoiceLineId: number
    InvoiceId: number
    TrackId: number
    UnitPrice: Decimal
    Quantity: number
    _count: Invice_ItemCountAggregateOutputType | null
    _avg: Invice_ItemAvgAggregateOutputType | null
    _sum: Invice_ItemSumAggregateOutputType | null
    _min: Invice_ItemMinAggregateOutputType | null
    _max: Invice_ItemMaxAggregateOutputType | null
  }

  type GetInvice_ItemGroupByPayload<T extends Invice_ItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Invice_ItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Invice_ItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Invice_ItemGroupByOutputType[P]>
            : GetScalarType<T[P], Invice_ItemGroupByOutputType[P]>
        }
      >
    >


  export type Invice_ItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    InvoiceLineId?: boolean
    InvoiceId?: boolean
    TrackId?: boolean
    UnitPrice?: boolean
    Quantity?: boolean
    Track?: boolean | TrackDefaultArgs<ExtArgs>
    Invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invice_Item"]>

  export type Invice_ItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    InvoiceLineId?: boolean
    InvoiceId?: boolean
    TrackId?: boolean
    UnitPrice?: boolean
    Quantity?: boolean
    Track?: boolean | TrackDefaultArgs<ExtArgs>
    Invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invice_Item"]>

  export type Invice_ItemSelectScalar = {
    InvoiceLineId?: boolean
    InvoiceId?: boolean
    TrackId?: boolean
    UnitPrice?: boolean
    Quantity?: boolean
  }

  export type Invice_ItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Track?: boolean | TrackDefaultArgs<ExtArgs>
    Invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }
  export type Invice_ItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Track?: boolean | TrackDefaultArgs<ExtArgs>
    Invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }

  export type $Invice_ItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invice_Item"
    objects: {
      Track: Prisma.$TrackPayload<ExtArgs>
      Invoice: Prisma.$InvoicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      InvoiceLineId: number
      InvoiceId: number
      TrackId: number
      UnitPrice: Prisma.Decimal
      Quantity: number
    }, ExtArgs["result"]["invice_Item"]>
    composites: {}
  }

  type Invice_ItemGetPayload<S extends boolean | null | undefined | Invice_ItemDefaultArgs> = $Result.GetResult<Prisma.$Invice_ItemPayload, S>

  type Invice_ItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Invice_ItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Invice_ItemCountAggregateInputType | true
    }

  export interface Invice_ItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invice_Item'], meta: { name: 'Invice_Item' } }
    /**
     * Find zero or one Invice_Item that matches the filter.
     * @param {Invice_ItemFindUniqueArgs} args - Arguments to find a Invice_Item
     * @example
     * // Get one Invice_Item
     * const invice_Item = await prisma.invice_Item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Invice_ItemFindUniqueArgs>(args: SelectSubset<T, Invice_ItemFindUniqueArgs<ExtArgs>>): Prisma__Invice_ItemClient<$Result.GetResult<Prisma.$Invice_ItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Invice_Item that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {Invice_ItemFindUniqueOrThrowArgs} args - Arguments to find a Invice_Item
     * @example
     * // Get one Invice_Item
     * const invice_Item = await prisma.invice_Item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Invice_ItemFindUniqueOrThrowArgs>(args: SelectSubset<T, Invice_ItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Invice_ItemClient<$Result.GetResult<Prisma.$Invice_ItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Invice_Item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Invice_ItemFindFirstArgs} args - Arguments to find a Invice_Item
     * @example
     * // Get one Invice_Item
     * const invice_Item = await prisma.invice_Item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Invice_ItemFindFirstArgs>(args?: SelectSubset<T, Invice_ItemFindFirstArgs<ExtArgs>>): Prisma__Invice_ItemClient<$Result.GetResult<Prisma.$Invice_ItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Invice_Item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Invice_ItemFindFirstOrThrowArgs} args - Arguments to find a Invice_Item
     * @example
     * // Get one Invice_Item
     * const invice_Item = await prisma.invice_Item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Invice_ItemFindFirstOrThrowArgs>(args?: SelectSubset<T, Invice_ItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__Invice_ItemClient<$Result.GetResult<Prisma.$Invice_ItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Invice_Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Invice_ItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invice_Items
     * const invice_Items = await prisma.invice_Item.findMany()
     * 
     * // Get first 10 Invice_Items
     * const invice_Items = await prisma.invice_Item.findMany({ take: 10 })
     * 
     * // Only select the `InvoiceLineId`
     * const invice_ItemWithInvoiceLineIdOnly = await prisma.invice_Item.findMany({ select: { InvoiceLineId: true } })
     * 
     */
    findMany<T extends Invice_ItemFindManyArgs>(args?: SelectSubset<T, Invice_ItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Invice_ItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Invice_Item.
     * @param {Invice_ItemCreateArgs} args - Arguments to create a Invice_Item.
     * @example
     * // Create one Invice_Item
     * const Invice_Item = await prisma.invice_Item.create({
     *   data: {
     *     // ... data to create a Invice_Item
     *   }
     * })
     * 
     */
    create<T extends Invice_ItemCreateArgs>(args: SelectSubset<T, Invice_ItemCreateArgs<ExtArgs>>): Prisma__Invice_ItemClient<$Result.GetResult<Prisma.$Invice_ItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Invice_Items.
     * @param {Invice_ItemCreateManyArgs} args - Arguments to create many Invice_Items.
     * @example
     * // Create many Invice_Items
     * const invice_Item = await prisma.invice_Item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Invice_ItemCreateManyArgs>(args?: SelectSubset<T, Invice_ItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invice_Items and returns the data saved in the database.
     * @param {Invice_ItemCreateManyAndReturnArgs} args - Arguments to create many Invice_Items.
     * @example
     * // Create many Invice_Items
     * const invice_Item = await prisma.invice_Item.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invice_Items and only return the `InvoiceLineId`
     * const invice_ItemWithInvoiceLineIdOnly = await prisma.invice_Item.createManyAndReturn({ 
     *   select: { InvoiceLineId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Invice_ItemCreateManyAndReturnArgs>(args?: SelectSubset<T, Invice_ItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Invice_ItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Invice_Item.
     * @param {Invice_ItemDeleteArgs} args - Arguments to delete one Invice_Item.
     * @example
     * // Delete one Invice_Item
     * const Invice_Item = await prisma.invice_Item.delete({
     *   where: {
     *     // ... filter to delete one Invice_Item
     *   }
     * })
     * 
     */
    delete<T extends Invice_ItemDeleteArgs>(args: SelectSubset<T, Invice_ItemDeleteArgs<ExtArgs>>): Prisma__Invice_ItemClient<$Result.GetResult<Prisma.$Invice_ItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Invice_Item.
     * @param {Invice_ItemUpdateArgs} args - Arguments to update one Invice_Item.
     * @example
     * // Update one Invice_Item
     * const invice_Item = await prisma.invice_Item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Invice_ItemUpdateArgs>(args: SelectSubset<T, Invice_ItemUpdateArgs<ExtArgs>>): Prisma__Invice_ItemClient<$Result.GetResult<Prisma.$Invice_ItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Invice_Items.
     * @param {Invice_ItemDeleteManyArgs} args - Arguments to filter Invice_Items to delete.
     * @example
     * // Delete a few Invice_Items
     * const { count } = await prisma.invice_Item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Invice_ItemDeleteManyArgs>(args?: SelectSubset<T, Invice_ItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invice_Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Invice_ItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invice_Items
     * const invice_Item = await prisma.invice_Item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Invice_ItemUpdateManyArgs>(args: SelectSubset<T, Invice_ItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Invice_Item.
     * @param {Invice_ItemUpsertArgs} args - Arguments to update or create a Invice_Item.
     * @example
     * // Update or create a Invice_Item
     * const invice_Item = await prisma.invice_Item.upsert({
     *   create: {
     *     // ... data to create a Invice_Item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invice_Item we want to update
     *   }
     * })
     */
    upsert<T extends Invice_ItemUpsertArgs>(args: SelectSubset<T, Invice_ItemUpsertArgs<ExtArgs>>): Prisma__Invice_ItemClient<$Result.GetResult<Prisma.$Invice_ItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Invice_Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Invice_ItemCountArgs} args - Arguments to filter Invice_Items to count.
     * @example
     * // Count the number of Invice_Items
     * const count = await prisma.invice_Item.count({
     *   where: {
     *     // ... the filter for the Invice_Items we want to count
     *   }
     * })
    **/
    count<T extends Invice_ItemCountArgs>(
      args?: Subset<T, Invice_ItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Invice_ItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invice_Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Invice_ItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Invice_ItemAggregateArgs>(args: Subset<T, Invice_ItemAggregateArgs>): Prisma.PrismaPromise<GetInvice_ItemAggregateType<T>>

    /**
     * Group by Invice_Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Invice_ItemGroupByArgs} args - Group by arguments.
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
      T extends Invice_ItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Invice_ItemGroupByArgs['orderBy'] }
        : { orderBy?: Invice_ItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Invice_ItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvice_ItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invice_Item model
   */
  readonly fields: Invice_ItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invice_Item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Invice_ItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Track<T extends TrackDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TrackDefaultArgs<ExtArgs>>): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    Invoice<T extends InvoiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InvoiceDefaultArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Invice_Item model
   */ 
  interface Invice_ItemFieldRefs {
    readonly InvoiceLineId: FieldRef<"Invice_Item", 'Int'>
    readonly InvoiceId: FieldRef<"Invice_Item", 'Int'>
    readonly TrackId: FieldRef<"Invice_Item", 'Int'>
    readonly UnitPrice: FieldRef<"Invice_Item", 'Decimal'>
    readonly Quantity: FieldRef<"Invice_Item", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Invice_Item findUnique
   */
  export type Invice_ItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invice_Item
     */
    select?: Invice_ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Invice_ItemInclude<ExtArgs> | null
    /**
     * Filter, which Invice_Item to fetch.
     */
    where: Invice_ItemWhereUniqueInput
  }

  /**
   * Invice_Item findUniqueOrThrow
   */
  export type Invice_ItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invice_Item
     */
    select?: Invice_ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Invice_ItemInclude<ExtArgs> | null
    /**
     * Filter, which Invice_Item to fetch.
     */
    where: Invice_ItemWhereUniqueInput
  }

  /**
   * Invice_Item findFirst
   */
  export type Invice_ItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invice_Item
     */
    select?: Invice_ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Invice_ItemInclude<ExtArgs> | null
    /**
     * Filter, which Invice_Item to fetch.
     */
    where?: Invice_ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invice_Items to fetch.
     */
    orderBy?: Invice_ItemOrderByWithRelationInput | Invice_ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invice_Items.
     */
    cursor?: Invice_ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invice_Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invice_Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invice_Items.
     */
    distinct?: Invice_ItemScalarFieldEnum | Invice_ItemScalarFieldEnum[]
  }

  /**
   * Invice_Item findFirstOrThrow
   */
  export type Invice_ItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invice_Item
     */
    select?: Invice_ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Invice_ItemInclude<ExtArgs> | null
    /**
     * Filter, which Invice_Item to fetch.
     */
    where?: Invice_ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invice_Items to fetch.
     */
    orderBy?: Invice_ItemOrderByWithRelationInput | Invice_ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invice_Items.
     */
    cursor?: Invice_ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invice_Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invice_Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invice_Items.
     */
    distinct?: Invice_ItemScalarFieldEnum | Invice_ItemScalarFieldEnum[]
  }

  /**
   * Invice_Item findMany
   */
  export type Invice_ItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invice_Item
     */
    select?: Invice_ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Invice_ItemInclude<ExtArgs> | null
    /**
     * Filter, which Invice_Items to fetch.
     */
    where?: Invice_ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invice_Items to fetch.
     */
    orderBy?: Invice_ItemOrderByWithRelationInput | Invice_ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invice_Items.
     */
    cursor?: Invice_ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invice_Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invice_Items.
     */
    skip?: number
    distinct?: Invice_ItemScalarFieldEnum | Invice_ItemScalarFieldEnum[]
  }

  /**
   * Invice_Item create
   */
  export type Invice_ItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invice_Item
     */
    select?: Invice_ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Invice_ItemInclude<ExtArgs> | null
    /**
     * The data needed to create a Invice_Item.
     */
    data: XOR<Invice_ItemCreateInput, Invice_ItemUncheckedCreateInput>
  }

  /**
   * Invice_Item createMany
   */
  export type Invice_ItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invice_Items.
     */
    data: Invice_ItemCreateManyInput | Invice_ItemCreateManyInput[]
  }

  /**
   * Invice_Item createManyAndReturn
   */
  export type Invice_ItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invice_Item
     */
    select?: Invice_ItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Invice_Items.
     */
    data: Invice_ItemCreateManyInput | Invice_ItemCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Invice_ItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invice_Item update
   */
  export type Invice_ItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invice_Item
     */
    select?: Invice_ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Invice_ItemInclude<ExtArgs> | null
    /**
     * The data needed to update a Invice_Item.
     */
    data: XOR<Invice_ItemUpdateInput, Invice_ItemUncheckedUpdateInput>
    /**
     * Choose, which Invice_Item to update.
     */
    where: Invice_ItemWhereUniqueInput
  }

  /**
   * Invice_Item updateMany
   */
  export type Invice_ItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invice_Items.
     */
    data: XOR<Invice_ItemUpdateManyMutationInput, Invice_ItemUncheckedUpdateManyInput>
    /**
     * Filter which Invice_Items to update
     */
    where?: Invice_ItemWhereInput
  }

  /**
   * Invice_Item upsert
   */
  export type Invice_ItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invice_Item
     */
    select?: Invice_ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Invice_ItemInclude<ExtArgs> | null
    /**
     * The filter to search for the Invice_Item to update in case it exists.
     */
    where: Invice_ItemWhereUniqueInput
    /**
     * In case the Invice_Item found by the `where` argument doesn't exist, create a new Invice_Item with this data.
     */
    create: XOR<Invice_ItemCreateInput, Invice_ItemUncheckedCreateInput>
    /**
     * In case the Invice_Item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Invice_ItemUpdateInput, Invice_ItemUncheckedUpdateInput>
  }

  /**
   * Invice_Item delete
   */
  export type Invice_ItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invice_Item
     */
    select?: Invice_ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Invice_ItemInclude<ExtArgs> | null
    /**
     * Filter which Invice_Item to delete.
     */
    where: Invice_ItemWhereUniqueInput
  }

  /**
   * Invice_Item deleteMany
   */
  export type Invice_ItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invice_Items to delete
     */
    where?: Invice_ItemWhereInput
  }

  /**
   * Invice_Item without action
   */
  export type Invice_ItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invice_Item
     */
    select?: Invice_ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Invice_ItemInclude<ExtArgs> | null
  }


  /**
   * Model Invoice
   */

  export type AggregateInvoice = {
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  export type InvoiceAvgAggregateOutputType = {
    InvoiceId: number | null
    CustomerId: number | null
    Total: Decimal | null
  }

  export type InvoiceSumAggregateOutputType = {
    InvoiceId: number | null
    CustomerId: number | null
    Total: Decimal | null
  }

  export type InvoiceMinAggregateOutputType = {
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

  export type InvoiceMaxAggregateOutputType = {
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

  export type InvoiceCountAggregateOutputType = {
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


  export type InvoiceAvgAggregateInputType = {
    InvoiceId?: true
    CustomerId?: true
    Total?: true
  }

  export type InvoiceSumAggregateInputType = {
    InvoiceId?: true
    CustomerId?: true
    Total?: true
  }

  export type InvoiceMinAggregateInputType = {
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

  export type InvoiceMaxAggregateInputType = {
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

  export type InvoiceCountAggregateInputType = {
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

  export type InvoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoice to aggregate.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invoices
    **/
    _count?: true | InvoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoiceMaxAggregateInputType
  }

  export type GetInvoiceAggregateType<T extends InvoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoice[P]>
      : GetScalarType<T[P], AggregateInvoice[P]>
  }




  export type InvoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithAggregationInput | InvoiceOrderByWithAggregationInput[]
    by: InvoiceScalarFieldEnum[] | InvoiceScalarFieldEnum
    having?: InvoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoiceCountAggregateInputType | true
    _avg?: InvoiceAvgAggregateInputType
    _sum?: InvoiceSumAggregateInputType
    _min?: InvoiceMinAggregateInputType
    _max?: InvoiceMaxAggregateInputType
  }

  export type InvoiceGroupByOutputType = {
    InvoiceId: number
    CustomerId: number
    InvoiceDate: Date
    BillingAddress: string | null
    BillingCity: string | null
    BillingState: string | null
    BillingCountry: string | null
    BillingPostalCode: string | null
    Total: Decimal
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  type GetInvoiceGroupByPayload<T extends InvoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
            : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
        }
      >
    >


  export type InvoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    InvoiceId?: boolean
    CustomerId?: boolean
    InvoiceDate?: boolean
    BillingAddress?: boolean
    BillingCity?: boolean
    BillingState?: boolean
    BillingCountry?: boolean
    BillingPostalCode?: boolean
    Total?: boolean
    Invice_Item?: boolean | Invoice$Invice_ItemArgs<ExtArgs>
    Customer?: boolean | CustomerDefaultArgs<ExtArgs>
    _count?: boolean | InvoiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    InvoiceId?: boolean
    CustomerId?: boolean
    InvoiceDate?: boolean
    BillingAddress?: boolean
    BillingCity?: boolean
    BillingState?: boolean
    BillingCountry?: boolean
    BillingPostalCode?: boolean
    Total?: boolean
    Customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectScalar = {
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

  export type InvoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Invice_Item?: boolean | Invoice$Invice_ItemArgs<ExtArgs>
    Customer?: boolean | CustomerDefaultArgs<ExtArgs>
    _count?: boolean | InvoiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InvoiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $InvoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invoice"
    objects: {
      Invice_Item: Prisma.$Invice_ItemPayload<ExtArgs>[]
      Customer: Prisma.$CustomerPayload<ExtArgs>
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
    }, ExtArgs["result"]["invoice"]>
    composites: {}
  }

  type InvoiceGetPayload<S extends boolean | null | undefined | InvoiceDefaultArgs> = $Result.GetResult<Prisma.$InvoicePayload, S>

  type InvoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InvoiceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InvoiceCountAggregateInputType | true
    }

  export interface InvoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invoice'], meta: { name: 'Invoice' } }
    /**
     * Find zero or one Invoice that matches the filter.
     * @param {InvoiceFindUniqueArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvoiceFindUniqueArgs>(args: SelectSubset<T, InvoiceFindUniqueArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Invoice that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {InvoiceFindUniqueOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvoiceFindUniqueOrThrowArgs>(args: SelectSubset<T, InvoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Invoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvoiceFindFirstArgs>(args?: SelectSubset<T, InvoiceFindFirstArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Invoice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvoiceFindFirstOrThrowArgs>(args?: SelectSubset<T, InvoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoices
     * const invoices = await prisma.invoice.findMany()
     * 
     * // Get first 10 Invoices
     * const invoices = await prisma.invoice.findMany({ take: 10 })
     * 
     * // Only select the `InvoiceId`
     * const invoiceWithInvoiceIdOnly = await prisma.invoice.findMany({ select: { InvoiceId: true } })
     * 
     */
    findMany<T extends InvoiceFindManyArgs>(args?: SelectSubset<T, InvoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Invoice.
     * @param {InvoiceCreateArgs} args - Arguments to create a Invoice.
     * @example
     * // Create one Invoice
     * const Invoice = await prisma.invoice.create({
     *   data: {
     *     // ... data to create a Invoice
     *   }
     * })
     * 
     */
    create<T extends InvoiceCreateArgs>(args: SelectSubset<T, InvoiceCreateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Invoices.
     * @param {InvoiceCreateManyArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvoiceCreateManyArgs>(args?: SelectSubset<T, InvoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invoices and returns the data saved in the database.
     * @param {InvoiceCreateManyAndReturnArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invoices and only return the `InvoiceId`
     * const invoiceWithInvoiceIdOnly = await prisma.invoice.createManyAndReturn({ 
     *   select: { InvoiceId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvoiceCreateManyAndReturnArgs>(args?: SelectSubset<T, InvoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Invoice.
     * @param {InvoiceDeleteArgs} args - Arguments to delete one Invoice.
     * @example
     * // Delete one Invoice
     * const Invoice = await prisma.invoice.delete({
     *   where: {
     *     // ... filter to delete one Invoice
     *   }
     * })
     * 
     */
    delete<T extends InvoiceDeleteArgs>(args: SelectSubset<T, InvoiceDeleteArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Invoice.
     * @param {InvoiceUpdateArgs} args - Arguments to update one Invoice.
     * @example
     * // Update one Invoice
     * const invoice = await prisma.invoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvoiceUpdateArgs>(args: SelectSubset<T, InvoiceUpdateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Invoices.
     * @param {InvoiceDeleteManyArgs} args - Arguments to filter Invoices to delete.
     * @example
     * // Delete a few Invoices
     * const { count } = await prisma.invoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvoiceDeleteManyArgs>(args?: SelectSubset<T, InvoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvoiceUpdateManyArgs>(args: SelectSubset<T, InvoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Invoice.
     * @param {InvoiceUpsertArgs} args - Arguments to update or create a Invoice.
     * @example
     * // Update or create a Invoice
     * const invoice = await prisma.invoice.upsert({
     *   create: {
     *     // ... data to create a Invoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoice we want to update
     *   }
     * })
     */
    upsert<T extends InvoiceUpsertArgs>(args: SelectSubset<T, InvoiceUpsertArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceCountArgs} args - Arguments to filter Invoices to count.
     * @example
     * // Count the number of Invoices
     * const count = await prisma.invoice.count({
     *   where: {
     *     // ... the filter for the Invoices we want to count
     *   }
     * })
    **/
    count<T extends InvoiceCountArgs>(
      args?: Subset<T, InvoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvoiceAggregateArgs>(args: Subset<T, InvoiceAggregateArgs>): Prisma.PrismaPromise<GetInvoiceAggregateType<T>>

    /**
     * Group by Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceGroupByArgs} args - Group by arguments.
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
      T extends InvoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvoiceGroupByArgs['orderBy'] }
        : { orderBy?: InvoiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InvoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invoice model
   */
  readonly fields: InvoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Invice_Item<T extends Invoice$Invice_ItemArgs<ExtArgs> = {}>(args?: Subset<T, Invoice$Invice_ItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Invice_ItemPayload<ExtArgs>, T, "findMany"> | Null>
    Customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Invoice model
   */ 
  interface InvoiceFieldRefs {
    readonly InvoiceId: FieldRef<"Invoice", 'Int'>
    readonly CustomerId: FieldRef<"Invoice", 'Int'>
    readonly InvoiceDate: FieldRef<"Invoice", 'DateTime'>
    readonly BillingAddress: FieldRef<"Invoice", 'String'>
    readonly BillingCity: FieldRef<"Invoice", 'String'>
    readonly BillingState: FieldRef<"Invoice", 'String'>
    readonly BillingCountry: FieldRef<"Invoice", 'String'>
    readonly BillingPostalCode: FieldRef<"Invoice", 'String'>
    readonly Total: FieldRef<"Invoice", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * Invoice findUnique
   */
  export type InvoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findUniqueOrThrow
   */
  export type InvoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findFirst
   */
  export type InvoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findFirstOrThrow
   */
  export type InvoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findMany
   */
  export type InvoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoices to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice create
   */
  export type InvoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Invoice.
     */
    data: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
  }

  /**
   * Invoice createMany
   */
  export type InvoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
  }

  /**
   * Invoice createManyAndReturn
   */
  export type InvoiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invoice update
   */
  export type InvoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Invoice.
     */
    data: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
    /**
     * Choose, which Invoice to update.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice updateMany
   */
  export type InvoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
  }

  /**
   * Invoice upsert
   */
  export type InvoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Invoice to update in case it exists.
     */
    where: InvoiceWhereUniqueInput
    /**
     * In case the Invoice found by the `where` argument doesn't exist, create a new Invoice with this data.
     */
    create: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
    /**
     * In case the Invoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
  }

  /**
   * Invoice delete
   */
  export type InvoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter which Invoice to delete.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice deleteMany
   */
  export type InvoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoices to delete
     */
    where?: InvoiceWhereInput
  }

  /**
   * Invoice.Invice_Item
   */
  export type Invoice$Invice_ItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invice_Item
     */
    select?: Invice_ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Invice_ItemInclude<ExtArgs> | null
    where?: Invice_ItemWhereInput
    orderBy?: Invice_ItemOrderByWithRelationInput | Invice_ItemOrderByWithRelationInput[]
    cursor?: Invice_ItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Invice_ItemScalarFieldEnum | Invice_ItemScalarFieldEnum[]
  }

  /**
   * Invoice without action
   */
  export type InvoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
  }


  /**
   * Model Media_Type
   */

  export type AggregateMedia_Type = {
    _count: Media_TypeCountAggregateOutputType | null
    _avg: Media_TypeAvgAggregateOutputType | null
    _sum: Media_TypeSumAggregateOutputType | null
    _min: Media_TypeMinAggregateOutputType | null
    _max: Media_TypeMaxAggregateOutputType | null
  }

  export type Media_TypeAvgAggregateOutputType = {
    MediaTypeId: number | null
  }

  export type Media_TypeSumAggregateOutputType = {
    MediaTypeId: number | null
  }

  export type Media_TypeMinAggregateOutputType = {
    MediaTypeId: number | null
    Name: string | null
  }

  export type Media_TypeMaxAggregateOutputType = {
    MediaTypeId: number | null
    Name: string | null
  }

  export type Media_TypeCountAggregateOutputType = {
    MediaTypeId: number
    Name: number
    _all: number
  }


  export type Media_TypeAvgAggregateInputType = {
    MediaTypeId?: true
  }

  export type Media_TypeSumAggregateInputType = {
    MediaTypeId?: true
  }

  export type Media_TypeMinAggregateInputType = {
    MediaTypeId?: true
    Name?: true
  }

  export type Media_TypeMaxAggregateInputType = {
    MediaTypeId?: true
    Name?: true
  }

  export type Media_TypeCountAggregateInputType = {
    MediaTypeId?: true
    Name?: true
    _all?: true
  }

  export type Media_TypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Media_Type to aggregate.
     */
    where?: Media_TypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media_Types to fetch.
     */
    orderBy?: Media_TypeOrderByWithRelationInput | Media_TypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Media_TypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media_Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media_Types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Media_Types
    **/
    _count?: true | Media_TypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Media_TypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Media_TypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Media_TypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Media_TypeMaxAggregateInputType
  }

  export type GetMedia_TypeAggregateType<T extends Media_TypeAggregateArgs> = {
        [P in keyof T & keyof AggregateMedia_Type]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedia_Type[P]>
      : GetScalarType<T[P], AggregateMedia_Type[P]>
  }




  export type Media_TypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Media_TypeWhereInput
    orderBy?: Media_TypeOrderByWithAggregationInput | Media_TypeOrderByWithAggregationInput[]
    by: Media_TypeScalarFieldEnum[] | Media_TypeScalarFieldEnum
    having?: Media_TypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Media_TypeCountAggregateInputType | true
    _avg?: Media_TypeAvgAggregateInputType
    _sum?: Media_TypeSumAggregateInputType
    _min?: Media_TypeMinAggregateInputType
    _max?: Media_TypeMaxAggregateInputType
  }

  export type Media_TypeGroupByOutputType = {
    MediaTypeId: number
    Name: string | null
    _count: Media_TypeCountAggregateOutputType | null
    _avg: Media_TypeAvgAggregateOutputType | null
    _sum: Media_TypeSumAggregateOutputType | null
    _min: Media_TypeMinAggregateOutputType | null
    _max: Media_TypeMaxAggregateOutputType | null
  }

  type GetMedia_TypeGroupByPayload<T extends Media_TypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Media_TypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Media_TypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Media_TypeGroupByOutputType[P]>
            : GetScalarType<T[P], Media_TypeGroupByOutputType[P]>
        }
      >
    >


  export type Media_TypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MediaTypeId?: boolean
    Name?: boolean
    Track?: boolean | Media_Type$TrackArgs<ExtArgs>
    _count?: boolean | Media_TypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["media_Type"]>

  export type Media_TypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MediaTypeId?: boolean
    Name?: boolean
  }, ExtArgs["result"]["media_Type"]>

  export type Media_TypeSelectScalar = {
    MediaTypeId?: boolean
    Name?: boolean
  }

  export type Media_TypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Track?: boolean | Media_Type$TrackArgs<ExtArgs>
    _count?: boolean | Media_TypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type Media_TypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $Media_TypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Media_Type"
    objects: {
      Track: Prisma.$TrackPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      MediaTypeId: number
      Name: string | null
    }, ExtArgs["result"]["media_Type"]>
    composites: {}
  }

  type Media_TypeGetPayload<S extends boolean | null | undefined | Media_TypeDefaultArgs> = $Result.GetResult<Prisma.$Media_TypePayload, S>

  type Media_TypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Media_TypeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Media_TypeCountAggregateInputType | true
    }

  export interface Media_TypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Media_Type'], meta: { name: 'Media_Type' } }
    /**
     * Find zero or one Media_Type that matches the filter.
     * @param {Media_TypeFindUniqueArgs} args - Arguments to find a Media_Type
     * @example
     * // Get one Media_Type
     * const media_Type = await prisma.media_Type.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Media_TypeFindUniqueArgs>(args: SelectSubset<T, Media_TypeFindUniqueArgs<ExtArgs>>): Prisma__Media_TypeClient<$Result.GetResult<Prisma.$Media_TypePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Media_Type that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {Media_TypeFindUniqueOrThrowArgs} args - Arguments to find a Media_Type
     * @example
     * // Get one Media_Type
     * const media_Type = await prisma.media_Type.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Media_TypeFindUniqueOrThrowArgs>(args: SelectSubset<T, Media_TypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Media_TypeClient<$Result.GetResult<Prisma.$Media_TypePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Media_Type that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Media_TypeFindFirstArgs} args - Arguments to find a Media_Type
     * @example
     * // Get one Media_Type
     * const media_Type = await prisma.media_Type.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Media_TypeFindFirstArgs>(args?: SelectSubset<T, Media_TypeFindFirstArgs<ExtArgs>>): Prisma__Media_TypeClient<$Result.GetResult<Prisma.$Media_TypePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Media_Type that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Media_TypeFindFirstOrThrowArgs} args - Arguments to find a Media_Type
     * @example
     * // Get one Media_Type
     * const media_Type = await prisma.media_Type.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Media_TypeFindFirstOrThrowArgs>(args?: SelectSubset<T, Media_TypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__Media_TypeClient<$Result.GetResult<Prisma.$Media_TypePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Media_Types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Media_TypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Media_Types
     * const media_Types = await prisma.media_Type.findMany()
     * 
     * // Get first 10 Media_Types
     * const media_Types = await prisma.media_Type.findMany({ take: 10 })
     * 
     * // Only select the `MediaTypeId`
     * const media_TypeWithMediaTypeIdOnly = await prisma.media_Type.findMany({ select: { MediaTypeId: true } })
     * 
     */
    findMany<T extends Media_TypeFindManyArgs>(args?: SelectSubset<T, Media_TypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Media_TypePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Media_Type.
     * @param {Media_TypeCreateArgs} args - Arguments to create a Media_Type.
     * @example
     * // Create one Media_Type
     * const Media_Type = await prisma.media_Type.create({
     *   data: {
     *     // ... data to create a Media_Type
     *   }
     * })
     * 
     */
    create<T extends Media_TypeCreateArgs>(args: SelectSubset<T, Media_TypeCreateArgs<ExtArgs>>): Prisma__Media_TypeClient<$Result.GetResult<Prisma.$Media_TypePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Media_Types.
     * @param {Media_TypeCreateManyArgs} args - Arguments to create many Media_Types.
     * @example
     * // Create many Media_Types
     * const media_Type = await prisma.media_Type.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Media_TypeCreateManyArgs>(args?: SelectSubset<T, Media_TypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Media_Types and returns the data saved in the database.
     * @param {Media_TypeCreateManyAndReturnArgs} args - Arguments to create many Media_Types.
     * @example
     * // Create many Media_Types
     * const media_Type = await prisma.media_Type.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Media_Types and only return the `MediaTypeId`
     * const media_TypeWithMediaTypeIdOnly = await prisma.media_Type.createManyAndReturn({ 
     *   select: { MediaTypeId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Media_TypeCreateManyAndReturnArgs>(args?: SelectSubset<T, Media_TypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Media_TypePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Media_Type.
     * @param {Media_TypeDeleteArgs} args - Arguments to delete one Media_Type.
     * @example
     * // Delete one Media_Type
     * const Media_Type = await prisma.media_Type.delete({
     *   where: {
     *     // ... filter to delete one Media_Type
     *   }
     * })
     * 
     */
    delete<T extends Media_TypeDeleteArgs>(args: SelectSubset<T, Media_TypeDeleteArgs<ExtArgs>>): Prisma__Media_TypeClient<$Result.GetResult<Prisma.$Media_TypePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Media_Type.
     * @param {Media_TypeUpdateArgs} args - Arguments to update one Media_Type.
     * @example
     * // Update one Media_Type
     * const media_Type = await prisma.media_Type.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Media_TypeUpdateArgs>(args: SelectSubset<T, Media_TypeUpdateArgs<ExtArgs>>): Prisma__Media_TypeClient<$Result.GetResult<Prisma.$Media_TypePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Media_Types.
     * @param {Media_TypeDeleteManyArgs} args - Arguments to filter Media_Types to delete.
     * @example
     * // Delete a few Media_Types
     * const { count } = await prisma.media_Type.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Media_TypeDeleteManyArgs>(args?: SelectSubset<T, Media_TypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Media_Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Media_TypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Media_Types
     * const media_Type = await prisma.media_Type.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Media_TypeUpdateManyArgs>(args: SelectSubset<T, Media_TypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Media_Type.
     * @param {Media_TypeUpsertArgs} args - Arguments to update or create a Media_Type.
     * @example
     * // Update or create a Media_Type
     * const media_Type = await prisma.media_Type.upsert({
     *   create: {
     *     // ... data to create a Media_Type
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Media_Type we want to update
     *   }
     * })
     */
    upsert<T extends Media_TypeUpsertArgs>(args: SelectSubset<T, Media_TypeUpsertArgs<ExtArgs>>): Prisma__Media_TypeClient<$Result.GetResult<Prisma.$Media_TypePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Media_Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Media_TypeCountArgs} args - Arguments to filter Media_Types to count.
     * @example
     * // Count the number of Media_Types
     * const count = await prisma.media_Type.count({
     *   where: {
     *     // ... the filter for the Media_Types we want to count
     *   }
     * })
    **/
    count<T extends Media_TypeCountArgs>(
      args?: Subset<T, Media_TypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Media_TypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Media_Type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Media_TypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Media_TypeAggregateArgs>(args: Subset<T, Media_TypeAggregateArgs>): Prisma.PrismaPromise<GetMedia_TypeAggregateType<T>>

    /**
     * Group by Media_Type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Media_TypeGroupByArgs} args - Group by arguments.
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
      T extends Media_TypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Media_TypeGroupByArgs['orderBy'] }
        : { orderBy?: Media_TypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Media_TypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedia_TypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Media_Type model
   */
  readonly fields: Media_TypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Media_Type.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Media_TypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Track<T extends Media_Type$TrackArgs<ExtArgs> = {}>(args?: Subset<T, Media_Type$TrackArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Media_Type model
   */ 
  interface Media_TypeFieldRefs {
    readonly MediaTypeId: FieldRef<"Media_Type", 'Int'>
    readonly Name: FieldRef<"Media_Type", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Media_Type findUnique
   */
  export type Media_TypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media_Type
     */
    select?: Media_TypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Media_TypeInclude<ExtArgs> | null
    /**
     * Filter, which Media_Type to fetch.
     */
    where: Media_TypeWhereUniqueInput
  }

  /**
   * Media_Type findUniqueOrThrow
   */
  export type Media_TypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media_Type
     */
    select?: Media_TypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Media_TypeInclude<ExtArgs> | null
    /**
     * Filter, which Media_Type to fetch.
     */
    where: Media_TypeWhereUniqueInput
  }

  /**
   * Media_Type findFirst
   */
  export type Media_TypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media_Type
     */
    select?: Media_TypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Media_TypeInclude<ExtArgs> | null
    /**
     * Filter, which Media_Type to fetch.
     */
    where?: Media_TypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media_Types to fetch.
     */
    orderBy?: Media_TypeOrderByWithRelationInput | Media_TypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Media_Types.
     */
    cursor?: Media_TypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media_Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media_Types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Media_Types.
     */
    distinct?: Media_TypeScalarFieldEnum | Media_TypeScalarFieldEnum[]
  }

  /**
   * Media_Type findFirstOrThrow
   */
  export type Media_TypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media_Type
     */
    select?: Media_TypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Media_TypeInclude<ExtArgs> | null
    /**
     * Filter, which Media_Type to fetch.
     */
    where?: Media_TypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media_Types to fetch.
     */
    orderBy?: Media_TypeOrderByWithRelationInput | Media_TypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Media_Types.
     */
    cursor?: Media_TypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media_Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media_Types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Media_Types.
     */
    distinct?: Media_TypeScalarFieldEnum | Media_TypeScalarFieldEnum[]
  }

  /**
   * Media_Type findMany
   */
  export type Media_TypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media_Type
     */
    select?: Media_TypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Media_TypeInclude<ExtArgs> | null
    /**
     * Filter, which Media_Types to fetch.
     */
    where?: Media_TypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media_Types to fetch.
     */
    orderBy?: Media_TypeOrderByWithRelationInput | Media_TypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Media_Types.
     */
    cursor?: Media_TypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media_Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media_Types.
     */
    skip?: number
    distinct?: Media_TypeScalarFieldEnum | Media_TypeScalarFieldEnum[]
  }

  /**
   * Media_Type create
   */
  export type Media_TypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media_Type
     */
    select?: Media_TypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Media_TypeInclude<ExtArgs> | null
    /**
     * The data needed to create a Media_Type.
     */
    data?: XOR<Media_TypeCreateInput, Media_TypeUncheckedCreateInput>
  }

  /**
   * Media_Type createMany
   */
  export type Media_TypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Media_Types.
     */
    data: Media_TypeCreateManyInput | Media_TypeCreateManyInput[]
  }

  /**
   * Media_Type createManyAndReturn
   */
  export type Media_TypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media_Type
     */
    select?: Media_TypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Media_Types.
     */
    data: Media_TypeCreateManyInput | Media_TypeCreateManyInput[]
  }

  /**
   * Media_Type update
   */
  export type Media_TypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media_Type
     */
    select?: Media_TypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Media_TypeInclude<ExtArgs> | null
    /**
     * The data needed to update a Media_Type.
     */
    data: XOR<Media_TypeUpdateInput, Media_TypeUncheckedUpdateInput>
    /**
     * Choose, which Media_Type to update.
     */
    where: Media_TypeWhereUniqueInput
  }

  /**
   * Media_Type updateMany
   */
  export type Media_TypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Media_Types.
     */
    data: XOR<Media_TypeUpdateManyMutationInput, Media_TypeUncheckedUpdateManyInput>
    /**
     * Filter which Media_Types to update
     */
    where?: Media_TypeWhereInput
  }

  /**
   * Media_Type upsert
   */
  export type Media_TypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media_Type
     */
    select?: Media_TypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Media_TypeInclude<ExtArgs> | null
    /**
     * The filter to search for the Media_Type to update in case it exists.
     */
    where: Media_TypeWhereUniqueInput
    /**
     * In case the Media_Type found by the `where` argument doesn't exist, create a new Media_Type with this data.
     */
    create: XOR<Media_TypeCreateInput, Media_TypeUncheckedCreateInput>
    /**
     * In case the Media_Type was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Media_TypeUpdateInput, Media_TypeUncheckedUpdateInput>
  }

  /**
   * Media_Type delete
   */
  export type Media_TypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media_Type
     */
    select?: Media_TypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Media_TypeInclude<ExtArgs> | null
    /**
     * Filter which Media_Type to delete.
     */
    where: Media_TypeWhereUniqueInput
  }

  /**
   * Media_Type deleteMany
   */
  export type Media_TypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Media_Types to delete
     */
    where?: Media_TypeWhereInput
  }

  /**
   * Media_Type.Track
   */
  export type Media_Type$TrackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    where?: TrackWhereInput
    orderBy?: TrackOrderByWithRelationInput | TrackOrderByWithRelationInput[]
    cursor?: TrackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrackScalarFieldEnum | TrackScalarFieldEnum[]
  }

  /**
   * Media_Type without action
   */
  export type Media_TypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media_Type
     */
    select?: Media_TypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Media_TypeInclude<ExtArgs> | null
  }


  /**
   * Model Playlist
   */

  export type AggregatePlaylist = {
    _count: PlaylistCountAggregateOutputType | null
    _avg: PlaylistAvgAggregateOutputType | null
    _sum: PlaylistSumAggregateOutputType | null
    _min: PlaylistMinAggregateOutputType | null
    _max: PlaylistMaxAggregateOutputType | null
  }

  export type PlaylistAvgAggregateOutputType = {
    PlaylistId: number | null
  }

  export type PlaylistSumAggregateOutputType = {
    PlaylistId: number | null
  }

  export type PlaylistMinAggregateOutputType = {
    PlaylistId: number | null
    Name: string | null
  }

  export type PlaylistMaxAggregateOutputType = {
    PlaylistId: number | null
    Name: string | null
  }

  export type PlaylistCountAggregateOutputType = {
    PlaylistId: number
    Name: number
    _all: number
  }


  export type PlaylistAvgAggregateInputType = {
    PlaylistId?: true
  }

  export type PlaylistSumAggregateInputType = {
    PlaylistId?: true
  }

  export type PlaylistMinAggregateInputType = {
    PlaylistId?: true
    Name?: true
  }

  export type PlaylistMaxAggregateInputType = {
    PlaylistId?: true
    Name?: true
  }

  export type PlaylistCountAggregateInputType = {
    PlaylistId?: true
    Name?: true
    _all?: true
  }

  export type PlaylistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Playlist to aggregate.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Playlists
    **/
    _count?: true | PlaylistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlaylistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlaylistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlaylistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlaylistMaxAggregateInputType
  }

  export type GetPlaylistAggregateType<T extends PlaylistAggregateArgs> = {
        [P in keyof T & keyof AggregatePlaylist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlaylist[P]>
      : GetScalarType<T[P], AggregatePlaylist[P]>
  }




  export type PlaylistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistWhereInput
    orderBy?: PlaylistOrderByWithAggregationInput | PlaylistOrderByWithAggregationInput[]
    by: PlaylistScalarFieldEnum[] | PlaylistScalarFieldEnum
    having?: PlaylistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlaylistCountAggregateInputType | true
    _avg?: PlaylistAvgAggregateInputType
    _sum?: PlaylistSumAggregateInputType
    _min?: PlaylistMinAggregateInputType
    _max?: PlaylistMaxAggregateInputType
  }

  export type PlaylistGroupByOutputType = {
    PlaylistId: number
    Name: string | null
    _count: PlaylistCountAggregateOutputType | null
    _avg: PlaylistAvgAggregateOutputType | null
    _sum: PlaylistSumAggregateOutputType | null
    _min: PlaylistMinAggregateOutputType | null
    _max: PlaylistMaxAggregateOutputType | null
  }

  type GetPlaylistGroupByPayload<T extends PlaylistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlaylistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlaylistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlaylistGroupByOutputType[P]>
            : GetScalarType<T[P], PlaylistGroupByOutputType[P]>
        }
      >
    >


  export type PlaylistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    PlaylistId?: boolean
    Name?: boolean
    Playlist_Track?: boolean | Playlist$Playlist_TrackArgs<ExtArgs>
    _count?: boolean | PlaylistCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlist"]>

  export type PlaylistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    PlaylistId?: boolean
    Name?: boolean
  }, ExtArgs["result"]["playlist"]>

  export type PlaylistSelectScalar = {
    PlaylistId?: boolean
    Name?: boolean
  }

  export type PlaylistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Playlist_Track?: boolean | Playlist$Playlist_TrackArgs<ExtArgs>
    _count?: boolean | PlaylistCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlaylistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PlaylistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Playlist"
    objects: {
      Playlist_Track: Prisma.$Playlist_TrackPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      PlaylistId: number
      Name: string | null
    }, ExtArgs["result"]["playlist"]>
    composites: {}
  }

  type PlaylistGetPayload<S extends boolean | null | undefined | PlaylistDefaultArgs> = $Result.GetResult<Prisma.$PlaylistPayload, S>

  type PlaylistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PlaylistFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PlaylistCountAggregateInputType | true
    }

  export interface PlaylistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Playlist'], meta: { name: 'Playlist' } }
    /**
     * Find zero or one Playlist that matches the filter.
     * @param {PlaylistFindUniqueArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlaylistFindUniqueArgs>(args: SelectSubset<T, PlaylistFindUniqueArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Playlist that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PlaylistFindUniqueOrThrowArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlaylistFindUniqueOrThrowArgs>(args: SelectSubset<T, PlaylistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Playlist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistFindFirstArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlaylistFindFirstArgs>(args?: SelectSubset<T, PlaylistFindFirstArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Playlist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistFindFirstOrThrowArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlaylistFindFirstOrThrowArgs>(args?: SelectSubset<T, PlaylistFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Playlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Playlists
     * const playlists = await prisma.playlist.findMany()
     * 
     * // Get first 10 Playlists
     * const playlists = await prisma.playlist.findMany({ take: 10 })
     * 
     * // Only select the `PlaylistId`
     * const playlistWithPlaylistIdOnly = await prisma.playlist.findMany({ select: { PlaylistId: true } })
     * 
     */
    findMany<T extends PlaylistFindManyArgs>(args?: SelectSubset<T, PlaylistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Playlist.
     * @param {PlaylistCreateArgs} args - Arguments to create a Playlist.
     * @example
     * // Create one Playlist
     * const Playlist = await prisma.playlist.create({
     *   data: {
     *     // ... data to create a Playlist
     *   }
     * })
     * 
     */
    create<T extends PlaylistCreateArgs>(args: SelectSubset<T, PlaylistCreateArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Playlists.
     * @param {PlaylistCreateManyArgs} args - Arguments to create many Playlists.
     * @example
     * // Create many Playlists
     * const playlist = await prisma.playlist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlaylistCreateManyArgs>(args?: SelectSubset<T, PlaylistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Playlists and returns the data saved in the database.
     * @param {PlaylistCreateManyAndReturnArgs} args - Arguments to create many Playlists.
     * @example
     * // Create many Playlists
     * const playlist = await prisma.playlist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Playlists and only return the `PlaylistId`
     * const playlistWithPlaylistIdOnly = await prisma.playlist.createManyAndReturn({ 
     *   select: { PlaylistId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlaylistCreateManyAndReturnArgs>(args?: SelectSubset<T, PlaylistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Playlist.
     * @param {PlaylistDeleteArgs} args - Arguments to delete one Playlist.
     * @example
     * // Delete one Playlist
     * const Playlist = await prisma.playlist.delete({
     *   where: {
     *     // ... filter to delete one Playlist
     *   }
     * })
     * 
     */
    delete<T extends PlaylistDeleteArgs>(args: SelectSubset<T, PlaylistDeleteArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Playlist.
     * @param {PlaylistUpdateArgs} args - Arguments to update one Playlist.
     * @example
     * // Update one Playlist
     * const playlist = await prisma.playlist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlaylistUpdateArgs>(args: SelectSubset<T, PlaylistUpdateArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Playlists.
     * @param {PlaylistDeleteManyArgs} args - Arguments to filter Playlists to delete.
     * @example
     * // Delete a few Playlists
     * const { count } = await prisma.playlist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlaylistDeleteManyArgs>(args?: SelectSubset<T, PlaylistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Playlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Playlists
     * const playlist = await prisma.playlist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlaylistUpdateManyArgs>(args: SelectSubset<T, PlaylistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Playlist.
     * @param {PlaylistUpsertArgs} args - Arguments to update or create a Playlist.
     * @example
     * // Update or create a Playlist
     * const playlist = await prisma.playlist.upsert({
     *   create: {
     *     // ... data to create a Playlist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Playlist we want to update
     *   }
     * })
     */
    upsert<T extends PlaylistUpsertArgs>(args: SelectSubset<T, PlaylistUpsertArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Playlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistCountArgs} args - Arguments to filter Playlists to count.
     * @example
     * // Count the number of Playlists
     * const count = await prisma.playlist.count({
     *   where: {
     *     // ... the filter for the Playlists we want to count
     *   }
     * })
    **/
    count<T extends PlaylistCountArgs>(
      args?: Subset<T, PlaylistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlaylistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Playlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlaylistAggregateArgs>(args: Subset<T, PlaylistAggregateArgs>): Prisma.PrismaPromise<GetPlaylistAggregateType<T>>

    /**
     * Group by Playlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistGroupByArgs} args - Group by arguments.
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
      T extends PlaylistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlaylistGroupByArgs['orderBy'] }
        : { orderBy?: PlaylistGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlaylistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlaylistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Playlist model
   */
  readonly fields: PlaylistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Playlist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlaylistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Playlist_Track<T extends Playlist$Playlist_TrackArgs<ExtArgs> = {}>(args?: Subset<T, Playlist$Playlist_TrackArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Playlist_TrackPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Playlist model
   */ 
  interface PlaylistFieldRefs {
    readonly PlaylistId: FieldRef<"Playlist", 'Int'>
    readonly Name: FieldRef<"Playlist", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Playlist findUnique
   */
  export type PlaylistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where: PlaylistWhereUniqueInput
  }

  /**
   * Playlist findUniqueOrThrow
   */
  export type PlaylistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where: PlaylistWhereUniqueInput
  }

  /**
   * Playlist findFirst
   */
  export type PlaylistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Playlists.
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Playlists.
     */
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * Playlist findFirstOrThrow
   */
  export type PlaylistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Playlists.
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Playlists.
     */
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * Playlist findMany
   */
  export type PlaylistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlists to fetch.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Playlists.
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * Playlist create
   */
  export type PlaylistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * The data needed to create a Playlist.
     */
    data?: XOR<PlaylistCreateInput, PlaylistUncheckedCreateInput>
  }

  /**
   * Playlist createMany
   */
  export type PlaylistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Playlists.
     */
    data: PlaylistCreateManyInput | PlaylistCreateManyInput[]
  }

  /**
   * Playlist createManyAndReturn
   */
  export type PlaylistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Playlists.
     */
    data: PlaylistCreateManyInput | PlaylistCreateManyInput[]
  }

  /**
   * Playlist update
   */
  export type PlaylistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * The data needed to update a Playlist.
     */
    data: XOR<PlaylistUpdateInput, PlaylistUncheckedUpdateInput>
    /**
     * Choose, which Playlist to update.
     */
    where: PlaylistWhereUniqueInput
  }

  /**
   * Playlist updateMany
   */
  export type PlaylistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Playlists.
     */
    data: XOR<PlaylistUpdateManyMutationInput, PlaylistUncheckedUpdateManyInput>
    /**
     * Filter which Playlists to update
     */
    where?: PlaylistWhereInput
  }

  /**
   * Playlist upsert
   */
  export type PlaylistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * The filter to search for the Playlist to update in case it exists.
     */
    where: PlaylistWhereUniqueInput
    /**
     * In case the Playlist found by the `where` argument doesn't exist, create a new Playlist with this data.
     */
    create: XOR<PlaylistCreateInput, PlaylistUncheckedCreateInput>
    /**
     * In case the Playlist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlaylistUpdateInput, PlaylistUncheckedUpdateInput>
  }

  /**
   * Playlist delete
   */
  export type PlaylistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter which Playlist to delete.
     */
    where: PlaylistWhereUniqueInput
  }

  /**
   * Playlist deleteMany
   */
  export type PlaylistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Playlists to delete
     */
    where?: PlaylistWhereInput
  }

  /**
   * Playlist.Playlist_Track
   */
  export type Playlist$Playlist_TrackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist_Track
     */
    select?: Playlist_TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Playlist_TrackInclude<ExtArgs> | null
    where?: Playlist_TrackWhereInput
    orderBy?: Playlist_TrackOrderByWithRelationInput | Playlist_TrackOrderByWithRelationInput[]
    cursor?: Playlist_TrackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Playlist_TrackScalarFieldEnum | Playlist_TrackScalarFieldEnum[]
  }

  /**
   * Playlist without action
   */
  export type PlaylistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
  }


  /**
   * Model Playlist_Track
   */

  export type AggregatePlaylist_Track = {
    _count: Playlist_TrackCountAggregateOutputType | null
    _avg: Playlist_TrackAvgAggregateOutputType | null
    _sum: Playlist_TrackSumAggregateOutputType | null
    _min: Playlist_TrackMinAggregateOutputType | null
    _max: Playlist_TrackMaxAggregateOutputType | null
  }

  export type Playlist_TrackAvgAggregateOutputType = {
    PlaylistId: number | null
    TrackId: number | null
  }

  export type Playlist_TrackSumAggregateOutputType = {
    PlaylistId: number | null
    TrackId: number | null
  }

  export type Playlist_TrackMinAggregateOutputType = {
    PlaylistId: number | null
    TrackId: number | null
  }

  export type Playlist_TrackMaxAggregateOutputType = {
    PlaylistId: number | null
    TrackId: number | null
  }

  export type Playlist_TrackCountAggregateOutputType = {
    PlaylistId: number
    TrackId: number
    _all: number
  }


  export type Playlist_TrackAvgAggregateInputType = {
    PlaylistId?: true
    TrackId?: true
  }

  export type Playlist_TrackSumAggregateInputType = {
    PlaylistId?: true
    TrackId?: true
  }

  export type Playlist_TrackMinAggregateInputType = {
    PlaylistId?: true
    TrackId?: true
  }

  export type Playlist_TrackMaxAggregateInputType = {
    PlaylistId?: true
    TrackId?: true
  }

  export type Playlist_TrackCountAggregateInputType = {
    PlaylistId?: true
    TrackId?: true
    _all?: true
  }

  export type Playlist_TrackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Playlist_Track to aggregate.
     */
    where?: Playlist_TrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlist_Tracks to fetch.
     */
    orderBy?: Playlist_TrackOrderByWithRelationInput | Playlist_TrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Playlist_TrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlist_Tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlist_Tracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Playlist_Tracks
    **/
    _count?: true | Playlist_TrackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Playlist_TrackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Playlist_TrackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Playlist_TrackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Playlist_TrackMaxAggregateInputType
  }

  export type GetPlaylist_TrackAggregateType<T extends Playlist_TrackAggregateArgs> = {
        [P in keyof T & keyof AggregatePlaylist_Track]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlaylist_Track[P]>
      : GetScalarType<T[P], AggregatePlaylist_Track[P]>
  }




  export type Playlist_TrackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Playlist_TrackWhereInput
    orderBy?: Playlist_TrackOrderByWithAggregationInput | Playlist_TrackOrderByWithAggregationInput[]
    by: Playlist_TrackScalarFieldEnum[] | Playlist_TrackScalarFieldEnum
    having?: Playlist_TrackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Playlist_TrackCountAggregateInputType | true
    _avg?: Playlist_TrackAvgAggregateInputType
    _sum?: Playlist_TrackSumAggregateInputType
    _min?: Playlist_TrackMinAggregateInputType
    _max?: Playlist_TrackMaxAggregateInputType
  }

  export type Playlist_TrackGroupByOutputType = {
    PlaylistId: number
    TrackId: number
    _count: Playlist_TrackCountAggregateOutputType | null
    _avg: Playlist_TrackAvgAggregateOutputType | null
    _sum: Playlist_TrackSumAggregateOutputType | null
    _min: Playlist_TrackMinAggregateOutputType | null
    _max: Playlist_TrackMaxAggregateOutputType | null
  }

  type GetPlaylist_TrackGroupByPayload<T extends Playlist_TrackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Playlist_TrackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Playlist_TrackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Playlist_TrackGroupByOutputType[P]>
            : GetScalarType<T[P], Playlist_TrackGroupByOutputType[P]>
        }
      >
    >


  export type Playlist_TrackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    PlaylistId?: boolean
    TrackId?: boolean
    Playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
    Track?: boolean | TrackDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlist_Track"]>

  export type Playlist_TrackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    PlaylistId?: boolean
    TrackId?: boolean
    Playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
    Track?: boolean | TrackDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlist_Track"]>

  export type Playlist_TrackSelectScalar = {
    PlaylistId?: boolean
    TrackId?: boolean
  }

  export type Playlist_TrackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
    Track?: boolean | TrackDefaultArgs<ExtArgs>
  }
  export type Playlist_TrackIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
    Track?: boolean | TrackDefaultArgs<ExtArgs>
  }

  export type $Playlist_TrackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Playlist_Track"
    objects: {
      Playlist: Prisma.$PlaylistPayload<ExtArgs>
      Track: Prisma.$TrackPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      PlaylistId: number
      TrackId: number
    }, ExtArgs["result"]["playlist_Track"]>
    composites: {}
  }

  type Playlist_TrackGetPayload<S extends boolean | null | undefined | Playlist_TrackDefaultArgs> = $Result.GetResult<Prisma.$Playlist_TrackPayload, S>

  type Playlist_TrackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Playlist_TrackFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Playlist_TrackCountAggregateInputType | true
    }

  export interface Playlist_TrackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Playlist_Track'], meta: { name: 'Playlist_Track' } }
    /**
     * Find zero or one Playlist_Track that matches the filter.
     * @param {Playlist_TrackFindUniqueArgs} args - Arguments to find a Playlist_Track
     * @example
     * // Get one Playlist_Track
     * const playlist_Track = await prisma.playlist_Track.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Playlist_TrackFindUniqueArgs>(args: SelectSubset<T, Playlist_TrackFindUniqueArgs<ExtArgs>>): Prisma__Playlist_TrackClient<$Result.GetResult<Prisma.$Playlist_TrackPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Playlist_Track that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {Playlist_TrackFindUniqueOrThrowArgs} args - Arguments to find a Playlist_Track
     * @example
     * // Get one Playlist_Track
     * const playlist_Track = await prisma.playlist_Track.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Playlist_TrackFindUniqueOrThrowArgs>(args: SelectSubset<T, Playlist_TrackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Playlist_TrackClient<$Result.GetResult<Prisma.$Playlist_TrackPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Playlist_Track that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Playlist_TrackFindFirstArgs} args - Arguments to find a Playlist_Track
     * @example
     * // Get one Playlist_Track
     * const playlist_Track = await prisma.playlist_Track.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Playlist_TrackFindFirstArgs>(args?: SelectSubset<T, Playlist_TrackFindFirstArgs<ExtArgs>>): Prisma__Playlist_TrackClient<$Result.GetResult<Prisma.$Playlist_TrackPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Playlist_Track that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Playlist_TrackFindFirstOrThrowArgs} args - Arguments to find a Playlist_Track
     * @example
     * // Get one Playlist_Track
     * const playlist_Track = await prisma.playlist_Track.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Playlist_TrackFindFirstOrThrowArgs>(args?: SelectSubset<T, Playlist_TrackFindFirstOrThrowArgs<ExtArgs>>): Prisma__Playlist_TrackClient<$Result.GetResult<Prisma.$Playlist_TrackPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Playlist_Tracks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Playlist_TrackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Playlist_Tracks
     * const playlist_Tracks = await prisma.playlist_Track.findMany()
     * 
     * // Get first 10 Playlist_Tracks
     * const playlist_Tracks = await prisma.playlist_Track.findMany({ take: 10 })
     * 
     * // Only select the `PlaylistId`
     * const playlist_TrackWithPlaylistIdOnly = await prisma.playlist_Track.findMany({ select: { PlaylistId: true } })
     * 
     */
    findMany<T extends Playlist_TrackFindManyArgs>(args?: SelectSubset<T, Playlist_TrackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Playlist_TrackPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Playlist_Track.
     * @param {Playlist_TrackCreateArgs} args - Arguments to create a Playlist_Track.
     * @example
     * // Create one Playlist_Track
     * const Playlist_Track = await prisma.playlist_Track.create({
     *   data: {
     *     // ... data to create a Playlist_Track
     *   }
     * })
     * 
     */
    create<T extends Playlist_TrackCreateArgs>(args: SelectSubset<T, Playlist_TrackCreateArgs<ExtArgs>>): Prisma__Playlist_TrackClient<$Result.GetResult<Prisma.$Playlist_TrackPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Playlist_Tracks.
     * @param {Playlist_TrackCreateManyArgs} args - Arguments to create many Playlist_Tracks.
     * @example
     * // Create many Playlist_Tracks
     * const playlist_Track = await prisma.playlist_Track.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Playlist_TrackCreateManyArgs>(args?: SelectSubset<T, Playlist_TrackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Playlist_Tracks and returns the data saved in the database.
     * @param {Playlist_TrackCreateManyAndReturnArgs} args - Arguments to create many Playlist_Tracks.
     * @example
     * // Create many Playlist_Tracks
     * const playlist_Track = await prisma.playlist_Track.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Playlist_Tracks and only return the `PlaylistId`
     * const playlist_TrackWithPlaylistIdOnly = await prisma.playlist_Track.createManyAndReturn({ 
     *   select: { PlaylistId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Playlist_TrackCreateManyAndReturnArgs>(args?: SelectSubset<T, Playlist_TrackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Playlist_TrackPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Playlist_Track.
     * @param {Playlist_TrackDeleteArgs} args - Arguments to delete one Playlist_Track.
     * @example
     * // Delete one Playlist_Track
     * const Playlist_Track = await prisma.playlist_Track.delete({
     *   where: {
     *     // ... filter to delete one Playlist_Track
     *   }
     * })
     * 
     */
    delete<T extends Playlist_TrackDeleteArgs>(args: SelectSubset<T, Playlist_TrackDeleteArgs<ExtArgs>>): Prisma__Playlist_TrackClient<$Result.GetResult<Prisma.$Playlist_TrackPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Playlist_Track.
     * @param {Playlist_TrackUpdateArgs} args - Arguments to update one Playlist_Track.
     * @example
     * // Update one Playlist_Track
     * const playlist_Track = await prisma.playlist_Track.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Playlist_TrackUpdateArgs>(args: SelectSubset<T, Playlist_TrackUpdateArgs<ExtArgs>>): Prisma__Playlist_TrackClient<$Result.GetResult<Prisma.$Playlist_TrackPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Playlist_Tracks.
     * @param {Playlist_TrackDeleteManyArgs} args - Arguments to filter Playlist_Tracks to delete.
     * @example
     * // Delete a few Playlist_Tracks
     * const { count } = await prisma.playlist_Track.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Playlist_TrackDeleteManyArgs>(args?: SelectSubset<T, Playlist_TrackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Playlist_Tracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Playlist_TrackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Playlist_Tracks
     * const playlist_Track = await prisma.playlist_Track.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Playlist_TrackUpdateManyArgs>(args: SelectSubset<T, Playlist_TrackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Playlist_Track.
     * @param {Playlist_TrackUpsertArgs} args - Arguments to update or create a Playlist_Track.
     * @example
     * // Update or create a Playlist_Track
     * const playlist_Track = await prisma.playlist_Track.upsert({
     *   create: {
     *     // ... data to create a Playlist_Track
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Playlist_Track we want to update
     *   }
     * })
     */
    upsert<T extends Playlist_TrackUpsertArgs>(args: SelectSubset<T, Playlist_TrackUpsertArgs<ExtArgs>>): Prisma__Playlist_TrackClient<$Result.GetResult<Prisma.$Playlist_TrackPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Playlist_Tracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Playlist_TrackCountArgs} args - Arguments to filter Playlist_Tracks to count.
     * @example
     * // Count the number of Playlist_Tracks
     * const count = await prisma.playlist_Track.count({
     *   where: {
     *     // ... the filter for the Playlist_Tracks we want to count
     *   }
     * })
    **/
    count<T extends Playlist_TrackCountArgs>(
      args?: Subset<T, Playlist_TrackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Playlist_TrackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Playlist_Track.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Playlist_TrackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Playlist_TrackAggregateArgs>(args: Subset<T, Playlist_TrackAggregateArgs>): Prisma.PrismaPromise<GetPlaylist_TrackAggregateType<T>>

    /**
     * Group by Playlist_Track.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Playlist_TrackGroupByArgs} args - Group by arguments.
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
      T extends Playlist_TrackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Playlist_TrackGroupByArgs['orderBy'] }
        : { orderBy?: Playlist_TrackGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Playlist_TrackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlaylist_TrackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Playlist_Track model
   */
  readonly fields: Playlist_TrackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Playlist_Track.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Playlist_TrackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Playlist<T extends PlaylistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlaylistDefaultArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    Track<T extends TrackDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TrackDefaultArgs<ExtArgs>>): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Playlist_Track model
   */ 
  interface Playlist_TrackFieldRefs {
    readonly PlaylistId: FieldRef<"Playlist_Track", 'Int'>
    readonly TrackId: FieldRef<"Playlist_Track", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Playlist_Track findUnique
   */
  export type Playlist_TrackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist_Track
     */
    select?: Playlist_TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Playlist_TrackInclude<ExtArgs> | null
    /**
     * Filter, which Playlist_Track to fetch.
     */
    where: Playlist_TrackWhereUniqueInput
  }

  /**
   * Playlist_Track findUniqueOrThrow
   */
  export type Playlist_TrackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist_Track
     */
    select?: Playlist_TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Playlist_TrackInclude<ExtArgs> | null
    /**
     * Filter, which Playlist_Track to fetch.
     */
    where: Playlist_TrackWhereUniqueInput
  }

  /**
   * Playlist_Track findFirst
   */
  export type Playlist_TrackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist_Track
     */
    select?: Playlist_TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Playlist_TrackInclude<ExtArgs> | null
    /**
     * Filter, which Playlist_Track to fetch.
     */
    where?: Playlist_TrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlist_Tracks to fetch.
     */
    orderBy?: Playlist_TrackOrderByWithRelationInput | Playlist_TrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Playlist_Tracks.
     */
    cursor?: Playlist_TrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlist_Tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlist_Tracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Playlist_Tracks.
     */
    distinct?: Playlist_TrackScalarFieldEnum | Playlist_TrackScalarFieldEnum[]
  }

  /**
   * Playlist_Track findFirstOrThrow
   */
  export type Playlist_TrackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist_Track
     */
    select?: Playlist_TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Playlist_TrackInclude<ExtArgs> | null
    /**
     * Filter, which Playlist_Track to fetch.
     */
    where?: Playlist_TrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlist_Tracks to fetch.
     */
    orderBy?: Playlist_TrackOrderByWithRelationInput | Playlist_TrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Playlist_Tracks.
     */
    cursor?: Playlist_TrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlist_Tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlist_Tracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Playlist_Tracks.
     */
    distinct?: Playlist_TrackScalarFieldEnum | Playlist_TrackScalarFieldEnum[]
  }

  /**
   * Playlist_Track findMany
   */
  export type Playlist_TrackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist_Track
     */
    select?: Playlist_TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Playlist_TrackInclude<ExtArgs> | null
    /**
     * Filter, which Playlist_Tracks to fetch.
     */
    where?: Playlist_TrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlist_Tracks to fetch.
     */
    orderBy?: Playlist_TrackOrderByWithRelationInput | Playlist_TrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Playlist_Tracks.
     */
    cursor?: Playlist_TrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlist_Tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlist_Tracks.
     */
    skip?: number
    distinct?: Playlist_TrackScalarFieldEnum | Playlist_TrackScalarFieldEnum[]
  }

  /**
   * Playlist_Track create
   */
  export type Playlist_TrackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist_Track
     */
    select?: Playlist_TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Playlist_TrackInclude<ExtArgs> | null
    /**
     * The data needed to create a Playlist_Track.
     */
    data: XOR<Playlist_TrackCreateInput, Playlist_TrackUncheckedCreateInput>
  }

  /**
   * Playlist_Track createMany
   */
  export type Playlist_TrackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Playlist_Tracks.
     */
    data: Playlist_TrackCreateManyInput | Playlist_TrackCreateManyInput[]
  }

  /**
   * Playlist_Track createManyAndReturn
   */
  export type Playlist_TrackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist_Track
     */
    select?: Playlist_TrackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Playlist_Tracks.
     */
    data: Playlist_TrackCreateManyInput | Playlist_TrackCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Playlist_TrackIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Playlist_Track update
   */
  export type Playlist_TrackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist_Track
     */
    select?: Playlist_TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Playlist_TrackInclude<ExtArgs> | null
    /**
     * The data needed to update a Playlist_Track.
     */
    data: XOR<Playlist_TrackUpdateInput, Playlist_TrackUncheckedUpdateInput>
    /**
     * Choose, which Playlist_Track to update.
     */
    where: Playlist_TrackWhereUniqueInput
  }

  /**
   * Playlist_Track updateMany
   */
  export type Playlist_TrackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Playlist_Tracks.
     */
    data: XOR<Playlist_TrackUpdateManyMutationInput, Playlist_TrackUncheckedUpdateManyInput>
    /**
     * Filter which Playlist_Tracks to update
     */
    where?: Playlist_TrackWhereInput
  }

  /**
   * Playlist_Track upsert
   */
  export type Playlist_TrackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist_Track
     */
    select?: Playlist_TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Playlist_TrackInclude<ExtArgs> | null
    /**
     * The filter to search for the Playlist_Track to update in case it exists.
     */
    where: Playlist_TrackWhereUniqueInput
    /**
     * In case the Playlist_Track found by the `where` argument doesn't exist, create a new Playlist_Track with this data.
     */
    create: XOR<Playlist_TrackCreateInput, Playlist_TrackUncheckedCreateInput>
    /**
     * In case the Playlist_Track was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Playlist_TrackUpdateInput, Playlist_TrackUncheckedUpdateInput>
  }

  /**
   * Playlist_Track delete
   */
  export type Playlist_TrackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist_Track
     */
    select?: Playlist_TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Playlist_TrackInclude<ExtArgs> | null
    /**
     * Filter which Playlist_Track to delete.
     */
    where: Playlist_TrackWhereUniqueInput
  }

  /**
   * Playlist_Track deleteMany
   */
  export type Playlist_TrackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Playlist_Tracks to delete
     */
    where?: Playlist_TrackWhereInput
  }

  /**
   * Playlist_Track without action
   */
  export type Playlist_TrackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist_Track
     */
    select?: Playlist_TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Playlist_TrackInclude<ExtArgs> | null
  }


  /**
   * Model Track
   */

  export type AggregateTrack = {
    _count: TrackCountAggregateOutputType | null
    _avg: TrackAvgAggregateOutputType | null
    _sum: TrackSumAggregateOutputType | null
    _min: TrackMinAggregateOutputType | null
    _max: TrackMaxAggregateOutputType | null
  }

  export type TrackAvgAggregateOutputType = {
    TrackId: number | null
    AlbumId: number | null
    MediaTypeId: number | null
    GenreId: number | null
    Milliseconds: number | null
    Bytes: number | null
    UnitPrice: Decimal | null
  }

  export type TrackSumAggregateOutputType = {
    TrackId: number | null
    AlbumId: number | null
    MediaTypeId: number | null
    GenreId: number | null
    Milliseconds: number | null
    Bytes: number | null
    UnitPrice: Decimal | null
  }

  export type TrackMinAggregateOutputType = {
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

  export type TrackMaxAggregateOutputType = {
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

  export type TrackCountAggregateOutputType = {
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


  export type TrackAvgAggregateInputType = {
    TrackId?: true
    AlbumId?: true
    MediaTypeId?: true
    GenreId?: true
    Milliseconds?: true
    Bytes?: true
    UnitPrice?: true
  }

  export type TrackSumAggregateInputType = {
    TrackId?: true
    AlbumId?: true
    MediaTypeId?: true
    GenreId?: true
    Milliseconds?: true
    Bytes?: true
    UnitPrice?: true
  }

  export type TrackMinAggregateInputType = {
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

  export type TrackMaxAggregateInputType = {
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

  export type TrackCountAggregateInputType = {
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

  export type TrackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Track to aggregate.
     */
    where?: TrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tracks to fetch.
     */
    orderBy?: TrackOrderByWithRelationInput | TrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tracks
    **/
    _count?: true | TrackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrackMaxAggregateInputType
  }

  export type GetTrackAggregateType<T extends TrackAggregateArgs> = {
        [P in keyof T & keyof AggregateTrack]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrack[P]>
      : GetScalarType<T[P], AggregateTrack[P]>
  }




  export type TrackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackWhereInput
    orderBy?: TrackOrderByWithAggregationInput | TrackOrderByWithAggregationInput[]
    by: TrackScalarFieldEnum[] | TrackScalarFieldEnum
    having?: TrackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrackCountAggregateInputType | true
    _avg?: TrackAvgAggregateInputType
    _sum?: TrackSumAggregateInputType
    _min?: TrackMinAggregateInputType
    _max?: TrackMaxAggregateInputType
  }

  export type TrackGroupByOutputType = {
    TrackId: number
    Name: string
    AlbumId: number | null
    MediaTypeId: number
    GenreId: number | null
    Composer: string | null
    Milliseconds: number
    Bytes: number | null
    UnitPrice: Decimal
    _count: TrackCountAggregateOutputType | null
    _avg: TrackAvgAggregateOutputType | null
    _sum: TrackSumAggregateOutputType | null
    _min: TrackMinAggregateOutputType | null
    _max: TrackMaxAggregateOutputType | null
  }

  type GetTrackGroupByPayload<T extends TrackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrackGroupByOutputType[P]>
            : GetScalarType<T[P], TrackGroupByOutputType[P]>
        }
      >
    >


  export type TrackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    TrackId?: boolean
    Name?: boolean
    AlbumId?: boolean
    MediaTypeId?: boolean
    GenreId?: boolean
    Composer?: boolean
    Milliseconds?: boolean
    Bytes?: boolean
    UnitPrice?: boolean
    Invice_Item?: boolean | Track$Invice_ItemArgs<ExtArgs>
    Playlist_Track?: boolean | Track$Playlist_TrackArgs<ExtArgs>
    Album?: boolean | Track$AlbumArgs<ExtArgs>
    Media_Type?: boolean | Media_TypeDefaultArgs<ExtArgs>
    Genre?: boolean | Track$GenreArgs<ExtArgs>
    _count?: boolean | TrackCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["track"]>

  export type TrackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    TrackId?: boolean
    Name?: boolean
    AlbumId?: boolean
    MediaTypeId?: boolean
    GenreId?: boolean
    Composer?: boolean
    Milliseconds?: boolean
    Bytes?: boolean
    UnitPrice?: boolean
    Album?: boolean | Track$AlbumArgs<ExtArgs>
    Media_Type?: boolean | Media_TypeDefaultArgs<ExtArgs>
    Genre?: boolean | Track$GenreArgs<ExtArgs>
  }, ExtArgs["result"]["track"]>

  export type TrackSelectScalar = {
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

  export type TrackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Invice_Item?: boolean | Track$Invice_ItemArgs<ExtArgs>
    Playlist_Track?: boolean | Track$Playlist_TrackArgs<ExtArgs>
    Album?: boolean | Track$AlbumArgs<ExtArgs>
    Media_Type?: boolean | Media_TypeDefaultArgs<ExtArgs>
    Genre?: boolean | Track$GenreArgs<ExtArgs>
    _count?: boolean | TrackCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TrackIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Album?: boolean | Track$AlbumArgs<ExtArgs>
    Media_Type?: boolean | Media_TypeDefaultArgs<ExtArgs>
    Genre?: boolean | Track$GenreArgs<ExtArgs>
  }

  export type $TrackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Track"
    objects: {
      Invice_Item: Prisma.$Invice_ItemPayload<ExtArgs>[]
      Playlist_Track: Prisma.$Playlist_TrackPayload<ExtArgs>[]
      Album: Prisma.$AlbumPayload<ExtArgs> | null
      Media_Type: Prisma.$Media_TypePayload<ExtArgs>
      Genre: Prisma.$GenrePayload<ExtArgs> | null
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
    }, ExtArgs["result"]["track"]>
    composites: {}
  }

  type TrackGetPayload<S extends boolean | null | undefined | TrackDefaultArgs> = $Result.GetResult<Prisma.$TrackPayload, S>

  type TrackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TrackFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TrackCountAggregateInputType | true
    }

  export interface TrackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Track'], meta: { name: 'Track' } }
    /**
     * Find zero or one Track that matches the filter.
     * @param {TrackFindUniqueArgs} args - Arguments to find a Track
     * @example
     * // Get one Track
     * const track = await prisma.track.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrackFindUniqueArgs>(args: SelectSubset<T, TrackFindUniqueArgs<ExtArgs>>): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Track that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TrackFindUniqueOrThrowArgs} args - Arguments to find a Track
     * @example
     * // Get one Track
     * const track = await prisma.track.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrackFindUniqueOrThrowArgs>(args: SelectSubset<T, TrackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Track that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackFindFirstArgs} args - Arguments to find a Track
     * @example
     * // Get one Track
     * const track = await prisma.track.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrackFindFirstArgs>(args?: SelectSubset<T, TrackFindFirstArgs<ExtArgs>>): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Track that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackFindFirstOrThrowArgs} args - Arguments to find a Track
     * @example
     * // Get one Track
     * const track = await prisma.track.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrackFindFirstOrThrowArgs>(args?: SelectSubset<T, TrackFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tracks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tracks
     * const tracks = await prisma.track.findMany()
     * 
     * // Get first 10 Tracks
     * const tracks = await prisma.track.findMany({ take: 10 })
     * 
     * // Only select the `TrackId`
     * const trackWithTrackIdOnly = await prisma.track.findMany({ select: { TrackId: true } })
     * 
     */
    findMany<T extends TrackFindManyArgs>(args?: SelectSubset<T, TrackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Track.
     * @param {TrackCreateArgs} args - Arguments to create a Track.
     * @example
     * // Create one Track
     * const Track = await prisma.track.create({
     *   data: {
     *     // ... data to create a Track
     *   }
     * })
     * 
     */
    create<T extends TrackCreateArgs>(args: SelectSubset<T, TrackCreateArgs<ExtArgs>>): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tracks.
     * @param {TrackCreateManyArgs} args - Arguments to create many Tracks.
     * @example
     * // Create many Tracks
     * const track = await prisma.track.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrackCreateManyArgs>(args?: SelectSubset<T, TrackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tracks and returns the data saved in the database.
     * @param {TrackCreateManyAndReturnArgs} args - Arguments to create many Tracks.
     * @example
     * // Create many Tracks
     * const track = await prisma.track.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tracks and only return the `TrackId`
     * const trackWithTrackIdOnly = await prisma.track.createManyAndReturn({ 
     *   select: { TrackId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TrackCreateManyAndReturnArgs>(args?: SelectSubset<T, TrackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Track.
     * @param {TrackDeleteArgs} args - Arguments to delete one Track.
     * @example
     * // Delete one Track
     * const Track = await prisma.track.delete({
     *   where: {
     *     // ... filter to delete one Track
     *   }
     * })
     * 
     */
    delete<T extends TrackDeleteArgs>(args: SelectSubset<T, TrackDeleteArgs<ExtArgs>>): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Track.
     * @param {TrackUpdateArgs} args - Arguments to update one Track.
     * @example
     * // Update one Track
     * const track = await prisma.track.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrackUpdateArgs>(args: SelectSubset<T, TrackUpdateArgs<ExtArgs>>): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tracks.
     * @param {TrackDeleteManyArgs} args - Arguments to filter Tracks to delete.
     * @example
     * // Delete a few Tracks
     * const { count } = await prisma.track.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrackDeleteManyArgs>(args?: SelectSubset<T, TrackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tracks
     * const track = await prisma.track.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrackUpdateManyArgs>(args: SelectSubset<T, TrackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Track.
     * @param {TrackUpsertArgs} args - Arguments to update or create a Track.
     * @example
     * // Update or create a Track
     * const track = await prisma.track.upsert({
     *   create: {
     *     // ... data to create a Track
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Track we want to update
     *   }
     * })
     */
    upsert<T extends TrackUpsertArgs>(args: SelectSubset<T, TrackUpsertArgs<ExtArgs>>): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackCountArgs} args - Arguments to filter Tracks to count.
     * @example
     * // Count the number of Tracks
     * const count = await prisma.track.count({
     *   where: {
     *     // ... the filter for the Tracks we want to count
     *   }
     * })
    **/
    count<T extends TrackCountArgs>(
      args?: Subset<T, TrackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Track.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TrackAggregateArgs>(args: Subset<T, TrackAggregateArgs>): Prisma.PrismaPromise<GetTrackAggregateType<T>>

    /**
     * Group by Track.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackGroupByArgs} args - Group by arguments.
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
      T extends TrackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrackGroupByArgs['orderBy'] }
        : { orderBy?: TrackGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TrackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Track model
   */
  readonly fields: TrackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Track.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Invice_Item<T extends Track$Invice_ItemArgs<ExtArgs> = {}>(args?: Subset<T, Track$Invice_ItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Invice_ItemPayload<ExtArgs>, T, "findMany"> | Null>
    Playlist_Track<T extends Track$Playlist_TrackArgs<ExtArgs> = {}>(args?: Subset<T, Track$Playlist_TrackArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Playlist_TrackPayload<ExtArgs>, T, "findMany"> | Null>
    Album<T extends Track$AlbumArgs<ExtArgs> = {}>(args?: Subset<T, Track$AlbumArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    Media_Type<T extends Media_TypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Media_TypeDefaultArgs<ExtArgs>>): Prisma__Media_TypeClient<$Result.GetResult<Prisma.$Media_TypePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    Genre<T extends Track$GenreArgs<ExtArgs> = {}>(args?: Subset<T, Track$GenreArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the Track model
   */ 
  interface TrackFieldRefs {
    readonly TrackId: FieldRef<"Track", 'Int'>
    readonly Name: FieldRef<"Track", 'String'>
    readonly AlbumId: FieldRef<"Track", 'Int'>
    readonly MediaTypeId: FieldRef<"Track", 'Int'>
    readonly GenreId: FieldRef<"Track", 'Int'>
    readonly Composer: FieldRef<"Track", 'String'>
    readonly Milliseconds: FieldRef<"Track", 'Int'>
    readonly Bytes: FieldRef<"Track", 'Int'>
    readonly UnitPrice: FieldRef<"Track", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * Track findUnique
   */
  export type TrackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * Filter, which Track to fetch.
     */
    where: TrackWhereUniqueInput
  }

  /**
   * Track findUniqueOrThrow
   */
  export type TrackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * Filter, which Track to fetch.
     */
    where: TrackWhereUniqueInput
  }

  /**
   * Track findFirst
   */
  export type TrackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * Filter, which Track to fetch.
     */
    where?: TrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tracks to fetch.
     */
    orderBy?: TrackOrderByWithRelationInput | TrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tracks.
     */
    cursor?: TrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tracks.
     */
    distinct?: TrackScalarFieldEnum | TrackScalarFieldEnum[]
  }

  /**
   * Track findFirstOrThrow
   */
  export type TrackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * Filter, which Track to fetch.
     */
    where?: TrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tracks to fetch.
     */
    orderBy?: TrackOrderByWithRelationInput | TrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tracks.
     */
    cursor?: TrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tracks.
     */
    distinct?: TrackScalarFieldEnum | TrackScalarFieldEnum[]
  }

  /**
   * Track findMany
   */
  export type TrackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * Filter, which Tracks to fetch.
     */
    where?: TrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tracks to fetch.
     */
    orderBy?: TrackOrderByWithRelationInput | TrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tracks.
     */
    cursor?: TrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tracks.
     */
    skip?: number
    distinct?: TrackScalarFieldEnum | TrackScalarFieldEnum[]
  }

  /**
   * Track create
   */
  export type TrackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * The data needed to create a Track.
     */
    data: XOR<TrackCreateInput, TrackUncheckedCreateInput>
  }

  /**
   * Track createMany
   */
  export type TrackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tracks.
     */
    data: TrackCreateManyInput | TrackCreateManyInput[]
  }

  /**
   * Track createManyAndReturn
   */
  export type TrackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Tracks.
     */
    data: TrackCreateManyInput | TrackCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Track update
   */
  export type TrackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * The data needed to update a Track.
     */
    data: XOR<TrackUpdateInput, TrackUncheckedUpdateInput>
    /**
     * Choose, which Track to update.
     */
    where: TrackWhereUniqueInput
  }

  /**
   * Track updateMany
   */
  export type TrackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tracks.
     */
    data: XOR<TrackUpdateManyMutationInput, TrackUncheckedUpdateManyInput>
    /**
     * Filter which Tracks to update
     */
    where?: TrackWhereInput
  }

  /**
   * Track upsert
   */
  export type TrackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * The filter to search for the Track to update in case it exists.
     */
    where: TrackWhereUniqueInput
    /**
     * In case the Track found by the `where` argument doesn't exist, create a new Track with this data.
     */
    create: XOR<TrackCreateInput, TrackUncheckedCreateInput>
    /**
     * In case the Track was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrackUpdateInput, TrackUncheckedUpdateInput>
  }

  /**
   * Track delete
   */
  export type TrackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * Filter which Track to delete.
     */
    where: TrackWhereUniqueInput
  }

  /**
   * Track deleteMany
   */
  export type TrackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tracks to delete
     */
    where?: TrackWhereInput
  }

  /**
   * Track.Invice_Item
   */
  export type Track$Invice_ItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invice_Item
     */
    select?: Invice_ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Invice_ItemInclude<ExtArgs> | null
    where?: Invice_ItemWhereInput
    orderBy?: Invice_ItemOrderByWithRelationInput | Invice_ItemOrderByWithRelationInput[]
    cursor?: Invice_ItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Invice_ItemScalarFieldEnum | Invice_ItemScalarFieldEnum[]
  }

  /**
   * Track.Playlist_Track
   */
  export type Track$Playlist_TrackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist_Track
     */
    select?: Playlist_TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Playlist_TrackInclude<ExtArgs> | null
    where?: Playlist_TrackWhereInput
    orderBy?: Playlist_TrackOrderByWithRelationInput | Playlist_TrackOrderByWithRelationInput[]
    cursor?: Playlist_TrackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Playlist_TrackScalarFieldEnum | Playlist_TrackScalarFieldEnum[]
  }

  /**
   * Track.Album
   */
  export type Track$AlbumArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    where?: AlbumWhereInput
  }

  /**
   * Track.Genre
   */
  export type Track$GenreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    where?: GenreWhereInput
  }

  /**
   * Track without action
   */
  export type TrackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AlbumScalarFieldEnum: {
    AlbumId: 'AlbumId',
    Title: 'Title',
    ArtistId: 'ArtistId'
  };

  export type AlbumScalarFieldEnum = (typeof AlbumScalarFieldEnum)[keyof typeof AlbumScalarFieldEnum]


  export const ArtistScalarFieldEnum: {
    ArtistId: 'ArtistId',
    Name: 'Name'
  };

  export type ArtistScalarFieldEnum = (typeof ArtistScalarFieldEnum)[keyof typeof ArtistScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
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

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const EmployeeScalarFieldEnum: {
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

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const GenreScalarFieldEnum: {
    GenreId: 'GenreId',
    Name: 'Name'
  };

  export type GenreScalarFieldEnum = (typeof GenreScalarFieldEnum)[keyof typeof GenreScalarFieldEnum]


  export const Invice_ItemScalarFieldEnum: {
    InvoiceLineId: 'InvoiceLineId',
    InvoiceId: 'InvoiceId',
    TrackId: 'TrackId',
    UnitPrice: 'UnitPrice',
    Quantity: 'Quantity'
  };

  export type Invice_ItemScalarFieldEnum = (typeof Invice_ItemScalarFieldEnum)[keyof typeof Invice_ItemScalarFieldEnum]


  export const InvoiceScalarFieldEnum: {
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

  export type InvoiceScalarFieldEnum = (typeof InvoiceScalarFieldEnum)[keyof typeof InvoiceScalarFieldEnum]


  export const Media_TypeScalarFieldEnum: {
    MediaTypeId: 'MediaTypeId',
    Name: 'Name'
  };

  export type Media_TypeScalarFieldEnum = (typeof Media_TypeScalarFieldEnum)[keyof typeof Media_TypeScalarFieldEnum]


  export const PlaylistScalarFieldEnum: {
    PlaylistId: 'PlaylistId',
    Name: 'Name'
  };

  export type PlaylistScalarFieldEnum = (typeof PlaylistScalarFieldEnum)[keyof typeof PlaylistScalarFieldEnum]


  export const Playlist_TrackScalarFieldEnum: {
    PlaylistId: 'PlaylistId',
    TrackId: 'TrackId'
  };

  export type Playlist_TrackScalarFieldEnum = (typeof Playlist_TrackScalarFieldEnum)[keyof typeof Playlist_TrackScalarFieldEnum]


  export const TrackScalarFieldEnum: {
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

  export type TrackScalarFieldEnum = (typeof TrackScalarFieldEnum)[keyof typeof TrackScalarFieldEnum]


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


  export type AlbumWhereInput = {
    AND?: AlbumWhereInput | AlbumWhereInput[]
    OR?: AlbumWhereInput[]
    NOT?: AlbumWhereInput | AlbumWhereInput[]
    AlbumId?: IntFilter<"Album"> | number
    Title?: StringFilter<"Album"> | string
    ArtistId?: IntFilter<"Album"> | number
    Artist?: XOR<ArtistRelationFilter, ArtistWhereInput>
    Track?: TrackListRelationFilter
  }

  export type AlbumOrderByWithRelationInput = {
    AlbumId?: SortOrder
    Title?: SortOrder
    ArtistId?: SortOrder
    Artist?: ArtistOrderByWithRelationInput
    Track?: TrackOrderByRelationAggregateInput
  }

  export type AlbumWhereUniqueInput = Prisma.AtLeast<{
    AlbumId?: number
    AND?: AlbumWhereInput | AlbumWhereInput[]
    OR?: AlbumWhereInput[]
    NOT?: AlbumWhereInput | AlbumWhereInput[]
    Title?: StringFilter<"Album"> | string
    ArtistId?: IntFilter<"Album"> | number
    Artist?: XOR<ArtistRelationFilter, ArtistWhereInput>
    Track?: TrackListRelationFilter
  }, "AlbumId">

  export type AlbumOrderByWithAggregationInput = {
    AlbumId?: SortOrder
    Title?: SortOrder
    ArtistId?: SortOrder
    _count?: AlbumCountOrderByAggregateInput
    _avg?: AlbumAvgOrderByAggregateInput
    _max?: AlbumMaxOrderByAggregateInput
    _min?: AlbumMinOrderByAggregateInput
    _sum?: AlbumSumOrderByAggregateInput
  }

  export type AlbumScalarWhereWithAggregatesInput = {
    AND?: AlbumScalarWhereWithAggregatesInput | AlbumScalarWhereWithAggregatesInput[]
    OR?: AlbumScalarWhereWithAggregatesInput[]
    NOT?: AlbumScalarWhereWithAggregatesInput | AlbumScalarWhereWithAggregatesInput[]
    AlbumId?: IntWithAggregatesFilter<"Album"> | number
    Title?: StringWithAggregatesFilter<"Album"> | string
    ArtistId?: IntWithAggregatesFilter<"Album"> | number
  }

  export type ArtistWhereInput = {
    AND?: ArtistWhereInput | ArtistWhereInput[]
    OR?: ArtistWhereInput[]
    NOT?: ArtistWhereInput | ArtistWhereInput[]
    ArtistId?: IntFilter<"Artist"> | number
    Name?: StringNullableFilter<"Artist"> | string | null
    Album?: AlbumListRelationFilter
  }

  export type ArtistOrderByWithRelationInput = {
    ArtistId?: SortOrder
    Name?: SortOrderInput | SortOrder
    Album?: AlbumOrderByRelationAggregateInput
  }

  export type ArtistWhereUniqueInput = Prisma.AtLeast<{
    ArtistId?: number
    AND?: ArtistWhereInput | ArtistWhereInput[]
    OR?: ArtistWhereInput[]
    NOT?: ArtistWhereInput | ArtistWhereInput[]
    Name?: StringNullableFilter<"Artist"> | string | null
    Album?: AlbumListRelationFilter
  }, "ArtistId">

  export type ArtistOrderByWithAggregationInput = {
    ArtistId?: SortOrder
    Name?: SortOrderInput | SortOrder
    _count?: ArtistCountOrderByAggregateInput
    _avg?: ArtistAvgOrderByAggregateInput
    _max?: ArtistMaxOrderByAggregateInput
    _min?: ArtistMinOrderByAggregateInput
    _sum?: ArtistSumOrderByAggregateInput
  }

  export type ArtistScalarWhereWithAggregatesInput = {
    AND?: ArtistScalarWhereWithAggregatesInput | ArtistScalarWhereWithAggregatesInput[]
    OR?: ArtistScalarWhereWithAggregatesInput[]
    NOT?: ArtistScalarWhereWithAggregatesInput | ArtistScalarWhereWithAggregatesInput[]
    ArtistId?: IntWithAggregatesFilter<"Artist"> | number
    Name?: StringNullableWithAggregatesFilter<"Artist"> | string | null
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    CustomerId?: IntFilter<"Customer"> | number
    FirstName?: StringFilter<"Customer"> | string
    LastName?: StringFilter<"Customer"> | string
    ImageURL?: StringFilter<"Customer"> | string
    Company?: StringNullableFilter<"Customer"> | string | null
    Address?: StringNullableFilter<"Customer"> | string | null
    City?: StringNullableFilter<"Customer"> | string | null
    State?: StringNullableFilter<"Customer"> | string | null
    Country?: StringNullableFilter<"Customer"> | string | null
    PostalCode?: StringNullableFilter<"Customer"> | string | null
    Phone?: StringNullableFilter<"Customer"> | string | null
    Fax?: StringNullableFilter<"Customer"> | string | null
    Email?: StringFilter<"Customer"> | string
    SupportRepId?: IntNullableFilter<"Customer"> | number | null
    Employee?: XOR<EmployeeNullableRelationFilter, EmployeeWhereInput> | null
    Invoice?: InvoiceListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
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
    Employee?: EmployeeOrderByWithRelationInput
    Invoice?: InvoiceOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    CustomerId?: number
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    FirstName?: StringFilter<"Customer"> | string
    LastName?: StringFilter<"Customer"> | string
    ImageURL?: StringFilter<"Customer"> | string
    Company?: StringNullableFilter<"Customer"> | string | null
    Address?: StringNullableFilter<"Customer"> | string | null
    City?: StringNullableFilter<"Customer"> | string | null
    State?: StringNullableFilter<"Customer"> | string | null
    Country?: StringNullableFilter<"Customer"> | string | null
    PostalCode?: StringNullableFilter<"Customer"> | string | null
    Phone?: StringNullableFilter<"Customer"> | string | null
    Fax?: StringNullableFilter<"Customer"> | string | null
    Email?: StringFilter<"Customer"> | string
    SupportRepId?: IntNullableFilter<"Customer"> | number | null
    Employee?: XOR<EmployeeNullableRelationFilter, EmployeeWhereInput> | null
    Invoice?: InvoiceListRelationFilter
  }, "CustomerId">

  export type CustomerOrderByWithAggregationInput = {
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
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    CustomerId?: IntWithAggregatesFilter<"Customer"> | number
    FirstName?: StringWithAggregatesFilter<"Customer"> | string
    LastName?: StringWithAggregatesFilter<"Customer"> | string
    ImageURL?: StringWithAggregatesFilter<"Customer"> | string
    Company?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    Address?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    City?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    State?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    Country?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    PostalCode?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    Phone?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    Fax?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    Email?: StringWithAggregatesFilter<"Customer"> | string
    SupportRepId?: IntNullableWithAggregatesFilter<"Customer"> | number | null
  }

  export type EmployeeWhereInput = {
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    EmployeeId?: IntFilter<"Employee"> | number
    LastName?: StringFilter<"Employee"> | string
    FirstName?: StringFilter<"Employee"> | string
    ImageURL?: StringFilter<"Employee"> | string
    Title?: StringNullableFilter<"Employee"> | string | null
    ReportsTo?: IntNullableFilter<"Employee"> | number | null
    BirthDate?: DateTimeNullableFilter<"Employee"> | Date | string | null
    HireDate?: DateTimeNullableFilter<"Employee"> | Date | string | null
    Address?: StringNullableFilter<"Employee"> | string | null
    City?: StringNullableFilter<"Employee"> | string | null
    State?: StringNullableFilter<"Employee"> | string | null
    Country?: StringNullableFilter<"Employee"> | string | null
    PostalCode?: StringNullableFilter<"Employee"> | string | null
    Phone?: StringNullableFilter<"Employee"> | string | null
    Fax?: StringNullableFilter<"Employee"> | string | null
    Email?: StringNullableFilter<"Employee"> | string | null
    Customer?: CustomerListRelationFilter
    Employee?: XOR<EmployeeNullableRelationFilter, EmployeeWhereInput> | null
    other_Employee?: EmployeeListRelationFilter
  }

  export type EmployeeOrderByWithRelationInput = {
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
    Customer?: CustomerOrderByRelationAggregateInput
    Employee?: EmployeeOrderByWithRelationInput
    other_Employee?: EmployeeOrderByRelationAggregateInput
  }

  export type EmployeeWhereUniqueInput = Prisma.AtLeast<{
    EmployeeId?: number
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    LastName?: StringFilter<"Employee"> | string
    FirstName?: StringFilter<"Employee"> | string
    ImageURL?: StringFilter<"Employee"> | string
    Title?: StringNullableFilter<"Employee"> | string | null
    ReportsTo?: IntNullableFilter<"Employee"> | number | null
    BirthDate?: DateTimeNullableFilter<"Employee"> | Date | string | null
    HireDate?: DateTimeNullableFilter<"Employee"> | Date | string | null
    Address?: StringNullableFilter<"Employee"> | string | null
    City?: StringNullableFilter<"Employee"> | string | null
    State?: StringNullableFilter<"Employee"> | string | null
    Country?: StringNullableFilter<"Employee"> | string | null
    PostalCode?: StringNullableFilter<"Employee"> | string | null
    Phone?: StringNullableFilter<"Employee"> | string | null
    Fax?: StringNullableFilter<"Employee"> | string | null
    Email?: StringNullableFilter<"Employee"> | string | null
    Customer?: CustomerListRelationFilter
    Employee?: XOR<EmployeeNullableRelationFilter, EmployeeWhereInput> | null
    other_Employee?: EmployeeListRelationFilter
  }, "EmployeeId">

  export type EmployeeOrderByWithAggregationInput = {
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
    _count?: EmployeeCountOrderByAggregateInput
    _avg?: EmployeeAvgOrderByAggregateInput
    _max?: EmployeeMaxOrderByAggregateInput
    _min?: EmployeeMinOrderByAggregateInput
    _sum?: EmployeeSumOrderByAggregateInput
  }

  export type EmployeeScalarWhereWithAggregatesInput = {
    AND?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    OR?: EmployeeScalarWhereWithAggregatesInput[]
    NOT?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    EmployeeId?: IntWithAggregatesFilter<"Employee"> | number
    LastName?: StringWithAggregatesFilter<"Employee"> | string
    FirstName?: StringWithAggregatesFilter<"Employee"> | string
    ImageURL?: StringWithAggregatesFilter<"Employee"> | string
    Title?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    ReportsTo?: IntNullableWithAggregatesFilter<"Employee"> | number | null
    BirthDate?: DateTimeNullableWithAggregatesFilter<"Employee"> | Date | string | null
    HireDate?: DateTimeNullableWithAggregatesFilter<"Employee"> | Date | string | null
    Address?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    City?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    State?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    Country?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    PostalCode?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    Phone?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    Fax?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    Email?: StringNullableWithAggregatesFilter<"Employee"> | string | null
  }

  export type GenreWhereInput = {
    AND?: GenreWhereInput | GenreWhereInput[]
    OR?: GenreWhereInput[]
    NOT?: GenreWhereInput | GenreWhereInput[]
    GenreId?: IntFilter<"Genre"> | number
    Name?: StringNullableFilter<"Genre"> | string | null
    Track?: TrackListRelationFilter
  }

  export type GenreOrderByWithRelationInput = {
    GenreId?: SortOrder
    Name?: SortOrderInput | SortOrder
    Track?: TrackOrderByRelationAggregateInput
  }

  export type GenreWhereUniqueInput = Prisma.AtLeast<{
    GenreId?: number
    AND?: GenreWhereInput | GenreWhereInput[]
    OR?: GenreWhereInput[]
    NOT?: GenreWhereInput | GenreWhereInput[]
    Name?: StringNullableFilter<"Genre"> | string | null
    Track?: TrackListRelationFilter
  }, "GenreId">

  export type GenreOrderByWithAggregationInput = {
    GenreId?: SortOrder
    Name?: SortOrderInput | SortOrder
    _count?: GenreCountOrderByAggregateInput
    _avg?: GenreAvgOrderByAggregateInput
    _max?: GenreMaxOrderByAggregateInput
    _min?: GenreMinOrderByAggregateInput
    _sum?: GenreSumOrderByAggregateInput
  }

  export type GenreScalarWhereWithAggregatesInput = {
    AND?: GenreScalarWhereWithAggregatesInput | GenreScalarWhereWithAggregatesInput[]
    OR?: GenreScalarWhereWithAggregatesInput[]
    NOT?: GenreScalarWhereWithAggregatesInput | GenreScalarWhereWithAggregatesInput[]
    GenreId?: IntWithAggregatesFilter<"Genre"> | number
    Name?: StringNullableWithAggregatesFilter<"Genre"> | string | null
  }

  export type Invice_ItemWhereInput = {
    AND?: Invice_ItemWhereInput | Invice_ItemWhereInput[]
    OR?: Invice_ItemWhereInput[]
    NOT?: Invice_ItemWhereInput | Invice_ItemWhereInput[]
    InvoiceLineId?: IntFilter<"Invice_Item"> | number
    InvoiceId?: IntFilter<"Invice_Item"> | number
    TrackId?: IntFilter<"Invice_Item"> | number
    UnitPrice?: DecimalFilter<"Invice_Item"> | Decimal | DecimalJsLike | number | string
    Quantity?: IntFilter<"Invice_Item"> | number
    Track?: XOR<TrackRelationFilter, TrackWhereInput>
    Invoice?: XOR<InvoiceRelationFilter, InvoiceWhereInput>
  }

  export type Invice_ItemOrderByWithRelationInput = {
    InvoiceLineId?: SortOrder
    InvoiceId?: SortOrder
    TrackId?: SortOrder
    UnitPrice?: SortOrder
    Quantity?: SortOrder
    Track?: TrackOrderByWithRelationInput
    Invoice?: InvoiceOrderByWithRelationInput
  }

  export type Invice_ItemWhereUniqueInput = Prisma.AtLeast<{
    InvoiceLineId?: number
    AND?: Invice_ItemWhereInput | Invice_ItemWhereInput[]
    OR?: Invice_ItemWhereInput[]
    NOT?: Invice_ItemWhereInput | Invice_ItemWhereInput[]
    InvoiceId?: IntFilter<"Invice_Item"> | number
    TrackId?: IntFilter<"Invice_Item"> | number
    UnitPrice?: DecimalFilter<"Invice_Item"> | Decimal | DecimalJsLike | number | string
    Quantity?: IntFilter<"Invice_Item"> | number
    Track?: XOR<TrackRelationFilter, TrackWhereInput>
    Invoice?: XOR<InvoiceRelationFilter, InvoiceWhereInput>
  }, "InvoiceLineId">

  export type Invice_ItemOrderByWithAggregationInput = {
    InvoiceLineId?: SortOrder
    InvoiceId?: SortOrder
    TrackId?: SortOrder
    UnitPrice?: SortOrder
    Quantity?: SortOrder
    _count?: Invice_ItemCountOrderByAggregateInput
    _avg?: Invice_ItemAvgOrderByAggregateInput
    _max?: Invice_ItemMaxOrderByAggregateInput
    _min?: Invice_ItemMinOrderByAggregateInput
    _sum?: Invice_ItemSumOrderByAggregateInput
  }

  export type Invice_ItemScalarWhereWithAggregatesInput = {
    AND?: Invice_ItemScalarWhereWithAggregatesInput | Invice_ItemScalarWhereWithAggregatesInput[]
    OR?: Invice_ItemScalarWhereWithAggregatesInput[]
    NOT?: Invice_ItemScalarWhereWithAggregatesInput | Invice_ItemScalarWhereWithAggregatesInput[]
    InvoiceLineId?: IntWithAggregatesFilter<"Invice_Item"> | number
    InvoiceId?: IntWithAggregatesFilter<"Invice_Item"> | number
    TrackId?: IntWithAggregatesFilter<"Invice_Item"> | number
    UnitPrice?: DecimalWithAggregatesFilter<"Invice_Item"> | Decimal | DecimalJsLike | number | string
    Quantity?: IntWithAggregatesFilter<"Invice_Item"> | number
  }

  export type InvoiceWhereInput = {
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    InvoiceId?: IntFilter<"Invoice"> | number
    CustomerId?: IntFilter<"Invoice"> | number
    InvoiceDate?: DateTimeFilter<"Invoice"> | Date | string
    BillingAddress?: StringNullableFilter<"Invoice"> | string | null
    BillingCity?: StringNullableFilter<"Invoice"> | string | null
    BillingState?: StringNullableFilter<"Invoice"> | string | null
    BillingCountry?: StringNullableFilter<"Invoice"> | string | null
    BillingPostalCode?: StringNullableFilter<"Invoice"> | string | null
    Total?: DecimalFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    Invice_Item?: Invice_ItemListRelationFilter
    Customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
  }

  export type InvoiceOrderByWithRelationInput = {
    InvoiceId?: SortOrder
    CustomerId?: SortOrder
    InvoiceDate?: SortOrder
    BillingAddress?: SortOrderInput | SortOrder
    BillingCity?: SortOrderInput | SortOrder
    BillingState?: SortOrderInput | SortOrder
    BillingCountry?: SortOrderInput | SortOrder
    BillingPostalCode?: SortOrderInput | SortOrder
    Total?: SortOrder
    Invice_Item?: Invice_ItemOrderByRelationAggregateInput
    Customer?: CustomerOrderByWithRelationInput
  }

  export type InvoiceWhereUniqueInput = Prisma.AtLeast<{
    InvoiceId?: number
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    CustomerId?: IntFilter<"Invoice"> | number
    InvoiceDate?: DateTimeFilter<"Invoice"> | Date | string
    BillingAddress?: StringNullableFilter<"Invoice"> | string | null
    BillingCity?: StringNullableFilter<"Invoice"> | string | null
    BillingState?: StringNullableFilter<"Invoice"> | string | null
    BillingCountry?: StringNullableFilter<"Invoice"> | string | null
    BillingPostalCode?: StringNullableFilter<"Invoice"> | string | null
    Total?: DecimalFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    Invice_Item?: Invice_ItemListRelationFilter
    Customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
  }, "InvoiceId">

  export type InvoiceOrderByWithAggregationInput = {
    InvoiceId?: SortOrder
    CustomerId?: SortOrder
    InvoiceDate?: SortOrder
    BillingAddress?: SortOrderInput | SortOrder
    BillingCity?: SortOrderInput | SortOrder
    BillingState?: SortOrderInput | SortOrder
    BillingCountry?: SortOrderInput | SortOrder
    BillingPostalCode?: SortOrderInput | SortOrder
    Total?: SortOrder
    _count?: InvoiceCountOrderByAggregateInput
    _avg?: InvoiceAvgOrderByAggregateInput
    _max?: InvoiceMaxOrderByAggregateInput
    _min?: InvoiceMinOrderByAggregateInput
    _sum?: InvoiceSumOrderByAggregateInput
  }

  export type InvoiceScalarWhereWithAggregatesInput = {
    AND?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    OR?: InvoiceScalarWhereWithAggregatesInput[]
    NOT?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    InvoiceId?: IntWithAggregatesFilter<"Invoice"> | number
    CustomerId?: IntWithAggregatesFilter<"Invoice"> | number
    InvoiceDate?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
    BillingAddress?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    BillingCity?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    BillingState?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    BillingCountry?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    BillingPostalCode?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    Total?: DecimalWithAggregatesFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
  }

  export type Media_TypeWhereInput = {
    AND?: Media_TypeWhereInput | Media_TypeWhereInput[]
    OR?: Media_TypeWhereInput[]
    NOT?: Media_TypeWhereInput | Media_TypeWhereInput[]
    MediaTypeId?: IntFilter<"Media_Type"> | number
    Name?: StringNullableFilter<"Media_Type"> | string | null
    Track?: TrackListRelationFilter
  }

  export type Media_TypeOrderByWithRelationInput = {
    MediaTypeId?: SortOrder
    Name?: SortOrderInput | SortOrder
    Track?: TrackOrderByRelationAggregateInput
  }

  export type Media_TypeWhereUniqueInput = Prisma.AtLeast<{
    MediaTypeId?: number
    AND?: Media_TypeWhereInput | Media_TypeWhereInput[]
    OR?: Media_TypeWhereInput[]
    NOT?: Media_TypeWhereInput | Media_TypeWhereInput[]
    Name?: StringNullableFilter<"Media_Type"> | string | null
    Track?: TrackListRelationFilter
  }, "MediaTypeId">

  export type Media_TypeOrderByWithAggregationInput = {
    MediaTypeId?: SortOrder
    Name?: SortOrderInput | SortOrder
    _count?: Media_TypeCountOrderByAggregateInput
    _avg?: Media_TypeAvgOrderByAggregateInput
    _max?: Media_TypeMaxOrderByAggregateInput
    _min?: Media_TypeMinOrderByAggregateInput
    _sum?: Media_TypeSumOrderByAggregateInput
  }

  export type Media_TypeScalarWhereWithAggregatesInput = {
    AND?: Media_TypeScalarWhereWithAggregatesInput | Media_TypeScalarWhereWithAggregatesInput[]
    OR?: Media_TypeScalarWhereWithAggregatesInput[]
    NOT?: Media_TypeScalarWhereWithAggregatesInput | Media_TypeScalarWhereWithAggregatesInput[]
    MediaTypeId?: IntWithAggregatesFilter<"Media_Type"> | number
    Name?: StringNullableWithAggregatesFilter<"Media_Type"> | string | null
  }

  export type PlaylistWhereInput = {
    AND?: PlaylistWhereInput | PlaylistWhereInput[]
    OR?: PlaylistWhereInput[]
    NOT?: PlaylistWhereInput | PlaylistWhereInput[]
    PlaylistId?: IntFilter<"Playlist"> | number
    Name?: StringNullableFilter<"Playlist"> | string | null
    Playlist_Track?: Playlist_TrackListRelationFilter
  }

  export type PlaylistOrderByWithRelationInput = {
    PlaylistId?: SortOrder
    Name?: SortOrderInput | SortOrder
    Playlist_Track?: Playlist_TrackOrderByRelationAggregateInput
  }

  export type PlaylistWhereUniqueInput = Prisma.AtLeast<{
    PlaylistId?: number
    AND?: PlaylistWhereInput | PlaylistWhereInput[]
    OR?: PlaylistWhereInput[]
    NOT?: PlaylistWhereInput | PlaylistWhereInput[]
    Name?: StringNullableFilter<"Playlist"> | string | null
    Playlist_Track?: Playlist_TrackListRelationFilter
  }, "PlaylistId">

  export type PlaylistOrderByWithAggregationInput = {
    PlaylistId?: SortOrder
    Name?: SortOrderInput | SortOrder
    _count?: PlaylistCountOrderByAggregateInput
    _avg?: PlaylistAvgOrderByAggregateInput
    _max?: PlaylistMaxOrderByAggregateInput
    _min?: PlaylistMinOrderByAggregateInput
    _sum?: PlaylistSumOrderByAggregateInput
  }

  export type PlaylistScalarWhereWithAggregatesInput = {
    AND?: PlaylistScalarWhereWithAggregatesInput | PlaylistScalarWhereWithAggregatesInput[]
    OR?: PlaylistScalarWhereWithAggregatesInput[]
    NOT?: PlaylistScalarWhereWithAggregatesInput | PlaylistScalarWhereWithAggregatesInput[]
    PlaylistId?: IntWithAggregatesFilter<"Playlist"> | number
    Name?: StringNullableWithAggregatesFilter<"Playlist"> | string | null
  }

  export type Playlist_TrackWhereInput = {
    AND?: Playlist_TrackWhereInput | Playlist_TrackWhereInput[]
    OR?: Playlist_TrackWhereInput[]
    NOT?: Playlist_TrackWhereInput | Playlist_TrackWhereInput[]
    PlaylistId?: IntFilter<"Playlist_Track"> | number
    TrackId?: IntFilter<"Playlist_Track"> | number
    Playlist?: XOR<PlaylistRelationFilter, PlaylistWhereInput>
    Track?: XOR<TrackRelationFilter, TrackWhereInput>
  }

  export type Playlist_TrackOrderByWithRelationInput = {
    PlaylistId?: SortOrder
    TrackId?: SortOrder
    Playlist?: PlaylistOrderByWithRelationInput
    Track?: TrackOrderByWithRelationInput
  }

  export type Playlist_TrackWhereUniqueInput = Prisma.AtLeast<{
    PlaylistId_TrackId?: Playlist_TrackPlaylistIdTrackIdCompoundUniqueInput
    AND?: Playlist_TrackWhereInput | Playlist_TrackWhereInput[]
    OR?: Playlist_TrackWhereInput[]
    NOT?: Playlist_TrackWhereInput | Playlist_TrackWhereInput[]
    PlaylistId?: IntFilter<"Playlist_Track"> | number
    TrackId?: IntFilter<"Playlist_Track"> | number
    Playlist?: XOR<PlaylistRelationFilter, PlaylistWhereInput>
    Track?: XOR<TrackRelationFilter, TrackWhereInput>
  }, "PlaylistId_TrackId">

  export type Playlist_TrackOrderByWithAggregationInput = {
    PlaylistId?: SortOrder
    TrackId?: SortOrder
    _count?: Playlist_TrackCountOrderByAggregateInput
    _avg?: Playlist_TrackAvgOrderByAggregateInput
    _max?: Playlist_TrackMaxOrderByAggregateInput
    _min?: Playlist_TrackMinOrderByAggregateInput
    _sum?: Playlist_TrackSumOrderByAggregateInput
  }

  export type Playlist_TrackScalarWhereWithAggregatesInput = {
    AND?: Playlist_TrackScalarWhereWithAggregatesInput | Playlist_TrackScalarWhereWithAggregatesInput[]
    OR?: Playlist_TrackScalarWhereWithAggregatesInput[]
    NOT?: Playlist_TrackScalarWhereWithAggregatesInput | Playlist_TrackScalarWhereWithAggregatesInput[]
    PlaylistId?: IntWithAggregatesFilter<"Playlist_Track"> | number
    TrackId?: IntWithAggregatesFilter<"Playlist_Track"> | number
  }

  export type TrackWhereInput = {
    AND?: TrackWhereInput | TrackWhereInput[]
    OR?: TrackWhereInput[]
    NOT?: TrackWhereInput | TrackWhereInput[]
    TrackId?: IntFilter<"Track"> | number
    Name?: StringFilter<"Track"> | string
    AlbumId?: IntNullableFilter<"Track"> | number | null
    MediaTypeId?: IntFilter<"Track"> | number
    GenreId?: IntNullableFilter<"Track"> | number | null
    Composer?: StringNullableFilter<"Track"> | string | null
    Milliseconds?: IntFilter<"Track"> | number
    Bytes?: IntNullableFilter<"Track"> | number | null
    UnitPrice?: DecimalFilter<"Track"> | Decimal | DecimalJsLike | number | string
    Invice_Item?: Invice_ItemListRelationFilter
    Playlist_Track?: Playlist_TrackListRelationFilter
    Album?: XOR<AlbumNullableRelationFilter, AlbumWhereInput> | null
    Media_Type?: XOR<Media_TypeRelationFilter, Media_TypeWhereInput>
    Genre?: XOR<GenreNullableRelationFilter, GenreWhereInput> | null
  }

  export type TrackOrderByWithRelationInput = {
    TrackId?: SortOrder
    Name?: SortOrder
    AlbumId?: SortOrderInput | SortOrder
    MediaTypeId?: SortOrder
    GenreId?: SortOrderInput | SortOrder
    Composer?: SortOrderInput | SortOrder
    Milliseconds?: SortOrder
    Bytes?: SortOrderInput | SortOrder
    UnitPrice?: SortOrder
    Invice_Item?: Invice_ItemOrderByRelationAggregateInput
    Playlist_Track?: Playlist_TrackOrderByRelationAggregateInput
    Album?: AlbumOrderByWithRelationInput
    Media_Type?: Media_TypeOrderByWithRelationInput
    Genre?: GenreOrderByWithRelationInput
  }

  export type TrackWhereUniqueInput = Prisma.AtLeast<{
    TrackId?: number
    AND?: TrackWhereInput | TrackWhereInput[]
    OR?: TrackWhereInput[]
    NOT?: TrackWhereInput | TrackWhereInput[]
    Name?: StringFilter<"Track"> | string
    AlbumId?: IntNullableFilter<"Track"> | number | null
    MediaTypeId?: IntFilter<"Track"> | number
    GenreId?: IntNullableFilter<"Track"> | number | null
    Composer?: StringNullableFilter<"Track"> | string | null
    Milliseconds?: IntFilter<"Track"> | number
    Bytes?: IntNullableFilter<"Track"> | number | null
    UnitPrice?: DecimalFilter<"Track"> | Decimal | DecimalJsLike | number | string
    Invice_Item?: Invice_ItemListRelationFilter
    Playlist_Track?: Playlist_TrackListRelationFilter
    Album?: XOR<AlbumNullableRelationFilter, AlbumWhereInput> | null
    Media_Type?: XOR<Media_TypeRelationFilter, Media_TypeWhereInput>
    Genre?: XOR<GenreNullableRelationFilter, GenreWhereInput> | null
  }, "TrackId">

  export type TrackOrderByWithAggregationInput = {
    TrackId?: SortOrder
    Name?: SortOrder
    AlbumId?: SortOrderInput | SortOrder
    MediaTypeId?: SortOrder
    GenreId?: SortOrderInput | SortOrder
    Composer?: SortOrderInput | SortOrder
    Milliseconds?: SortOrder
    Bytes?: SortOrderInput | SortOrder
    UnitPrice?: SortOrder
    _count?: TrackCountOrderByAggregateInput
    _avg?: TrackAvgOrderByAggregateInput
    _max?: TrackMaxOrderByAggregateInput
    _min?: TrackMinOrderByAggregateInput
    _sum?: TrackSumOrderByAggregateInput
  }

  export type TrackScalarWhereWithAggregatesInput = {
    AND?: TrackScalarWhereWithAggregatesInput | TrackScalarWhereWithAggregatesInput[]
    OR?: TrackScalarWhereWithAggregatesInput[]
    NOT?: TrackScalarWhereWithAggregatesInput | TrackScalarWhereWithAggregatesInput[]
    TrackId?: IntWithAggregatesFilter<"Track"> | number
    Name?: StringWithAggregatesFilter<"Track"> | string
    AlbumId?: IntNullableWithAggregatesFilter<"Track"> | number | null
    MediaTypeId?: IntWithAggregatesFilter<"Track"> | number
    GenreId?: IntNullableWithAggregatesFilter<"Track"> | number | null
    Composer?: StringNullableWithAggregatesFilter<"Track"> | string | null
    Milliseconds?: IntWithAggregatesFilter<"Track"> | number
    Bytes?: IntNullableWithAggregatesFilter<"Track"> | number | null
    UnitPrice?: DecimalWithAggregatesFilter<"Track"> | Decimal | DecimalJsLike | number | string
  }

  export type AlbumCreateInput = {
    Title: string
    Artist: ArtistCreateNestedOneWithoutAlbumInput
    Track?: TrackCreateNestedManyWithoutAlbumInput
  }

  export type AlbumUncheckedCreateInput = {
    AlbumId?: number
    Title: string
    ArtistId: number
    Track?: TrackUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type AlbumUpdateInput = {
    Title?: StringFieldUpdateOperationsInput | string
    Artist?: ArtistUpdateOneRequiredWithoutAlbumNestedInput
    Track?: TrackUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateInput = {
    AlbumId?: IntFieldUpdateOperationsInput | number
    Title?: StringFieldUpdateOperationsInput | string
    ArtistId?: IntFieldUpdateOperationsInput | number
    Track?: TrackUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumCreateManyInput = {
    AlbumId?: number
    Title: string
    ArtistId: number
  }

  export type AlbumUpdateManyMutationInput = {
    Title?: StringFieldUpdateOperationsInput | string
  }

  export type AlbumUncheckedUpdateManyInput = {
    AlbumId?: IntFieldUpdateOperationsInput | number
    Title?: StringFieldUpdateOperationsInput | string
    ArtistId?: IntFieldUpdateOperationsInput | number
  }

  export type ArtistCreateInput = {
    Name?: string | null
    Album?: AlbumCreateNestedManyWithoutArtistInput
  }

  export type ArtistUncheckedCreateInput = {
    ArtistId?: number
    Name?: string | null
    Album?: AlbumUncheckedCreateNestedManyWithoutArtistInput
  }

  export type ArtistUpdateInput = {
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Album?: AlbumUpdateManyWithoutArtistNestedInput
  }

  export type ArtistUncheckedUpdateInput = {
    ArtistId?: IntFieldUpdateOperationsInput | number
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Album?: AlbumUncheckedUpdateManyWithoutArtistNestedInput
  }

  export type ArtistCreateManyInput = {
    ArtistId?: number
    Name?: string | null
  }

  export type ArtistUpdateManyMutationInput = {
    Name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ArtistUncheckedUpdateManyInput = {
    ArtistId?: IntFieldUpdateOperationsInput | number
    Name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CustomerCreateInput = {
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
    Employee?: EmployeeCreateNestedOneWithoutCustomerInput
    Invoice?: InvoiceCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
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
    Invoice?: InvoiceUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
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
    Employee?: EmployeeUpdateOneWithoutCustomerNestedInput
    Invoice?: InvoiceUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
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
    Invoice?: InvoiceUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
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

  export type CustomerUpdateManyMutationInput = {
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

  export type CustomerUncheckedUpdateManyInput = {
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

  export type EmployeeCreateInput = {
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
    Customer?: CustomerCreateNestedManyWithoutEmployeeInput
    Employee?: EmployeeCreateNestedOneWithoutOther_EmployeeInput
    other_Employee?: EmployeeCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateInput = {
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
    Customer?: CustomerUncheckedCreateNestedManyWithoutEmployeeInput
    other_Employee?: EmployeeUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUpdateInput = {
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
    Customer?: CustomerUpdateManyWithoutEmployeeNestedInput
    Employee?: EmployeeUpdateOneWithoutOther_EmployeeNestedInput
    other_Employee?: EmployeeUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateInput = {
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
    Customer?: CustomerUncheckedUpdateManyWithoutEmployeeNestedInput
    other_Employee?: EmployeeUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeCreateManyInput = {
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

  export type EmployeeUpdateManyMutationInput = {
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

  export type EmployeeUncheckedUpdateManyInput = {
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

  export type GenreCreateInput = {
    Name?: string | null
    Track?: TrackCreateNestedManyWithoutGenreInput
  }

  export type GenreUncheckedCreateInput = {
    GenreId?: number
    Name?: string | null
    Track?: TrackUncheckedCreateNestedManyWithoutGenreInput
  }

  export type GenreUpdateInput = {
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Track?: TrackUpdateManyWithoutGenreNestedInput
  }

  export type GenreUncheckedUpdateInput = {
    GenreId?: IntFieldUpdateOperationsInput | number
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Track?: TrackUncheckedUpdateManyWithoutGenreNestedInput
  }

  export type GenreCreateManyInput = {
    GenreId?: number
    Name?: string | null
  }

  export type GenreUpdateManyMutationInput = {
    Name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GenreUncheckedUpdateManyInput = {
    GenreId?: IntFieldUpdateOperationsInput | number
    Name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Invice_ItemCreateInput = {
    UnitPrice: Decimal | DecimalJsLike | number | string
    Quantity: number
    Track: TrackCreateNestedOneWithoutInvice_ItemInput
    Invoice: InvoiceCreateNestedOneWithoutInvice_ItemInput
  }

  export type Invice_ItemUncheckedCreateInput = {
    InvoiceLineId?: number
    InvoiceId: number
    TrackId: number
    UnitPrice: Decimal | DecimalJsLike | number | string
    Quantity: number
  }

  export type Invice_ItemUpdateInput = {
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Quantity?: IntFieldUpdateOperationsInput | number
    Track?: TrackUpdateOneRequiredWithoutInvice_ItemNestedInput
    Invoice?: InvoiceUpdateOneRequiredWithoutInvice_ItemNestedInput
  }

  export type Invice_ItemUncheckedUpdateInput = {
    InvoiceLineId?: IntFieldUpdateOperationsInput | number
    InvoiceId?: IntFieldUpdateOperationsInput | number
    TrackId?: IntFieldUpdateOperationsInput | number
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Quantity?: IntFieldUpdateOperationsInput | number
  }

  export type Invice_ItemCreateManyInput = {
    InvoiceLineId?: number
    InvoiceId: number
    TrackId: number
    UnitPrice: Decimal | DecimalJsLike | number | string
    Quantity: number
  }

  export type Invice_ItemUpdateManyMutationInput = {
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Quantity?: IntFieldUpdateOperationsInput | number
  }

  export type Invice_ItemUncheckedUpdateManyInput = {
    InvoiceLineId?: IntFieldUpdateOperationsInput | number
    InvoiceId?: IntFieldUpdateOperationsInput | number
    TrackId?: IntFieldUpdateOperationsInput | number
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Quantity?: IntFieldUpdateOperationsInput | number
  }

  export type InvoiceCreateInput = {
    InvoiceDate: Date | string
    BillingAddress?: string | null
    BillingCity?: string | null
    BillingState?: string | null
    BillingCountry?: string | null
    BillingPostalCode?: string | null
    Total: Decimal | DecimalJsLike | number | string
    Invice_Item?: Invice_ItemCreateNestedManyWithoutInvoiceInput
    Customer: CustomerCreateNestedOneWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateInput = {
    InvoiceId?: number
    CustomerId: number
    InvoiceDate: Date | string
    BillingAddress?: string | null
    BillingCity?: string | null
    BillingState?: string | null
    BillingCountry?: string | null
    BillingPostalCode?: string | null
    Total: Decimal | DecimalJsLike | number | string
    Invice_Item?: Invice_ItemUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUpdateInput = {
    InvoiceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    BillingAddress?: NullableStringFieldUpdateOperationsInput | string | null
    BillingCity?: NullableStringFieldUpdateOperationsInput | string | null
    BillingState?: NullableStringFieldUpdateOperationsInput | string | null
    BillingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    BillingPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Invice_Item?: Invice_ItemUpdateManyWithoutInvoiceNestedInput
    Customer?: CustomerUpdateOneRequiredWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateInput = {
    InvoiceId?: IntFieldUpdateOperationsInput | number
    CustomerId?: IntFieldUpdateOperationsInput | number
    InvoiceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    BillingAddress?: NullableStringFieldUpdateOperationsInput | string | null
    BillingCity?: NullableStringFieldUpdateOperationsInput | string | null
    BillingState?: NullableStringFieldUpdateOperationsInput | string | null
    BillingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    BillingPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Invice_Item?: Invice_ItemUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceCreateManyInput = {
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

  export type InvoiceUpdateManyMutationInput = {
    InvoiceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    BillingAddress?: NullableStringFieldUpdateOperationsInput | string | null
    BillingCity?: NullableStringFieldUpdateOperationsInput | string | null
    BillingState?: NullableStringFieldUpdateOperationsInput | string | null
    BillingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    BillingPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type InvoiceUncheckedUpdateManyInput = {
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

  export type Media_TypeCreateInput = {
    Name?: string | null
    Track?: TrackCreateNestedManyWithoutMedia_TypeInput
  }

  export type Media_TypeUncheckedCreateInput = {
    MediaTypeId?: number
    Name?: string | null
    Track?: TrackUncheckedCreateNestedManyWithoutMedia_TypeInput
  }

  export type Media_TypeUpdateInput = {
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Track?: TrackUpdateManyWithoutMedia_TypeNestedInput
  }

  export type Media_TypeUncheckedUpdateInput = {
    MediaTypeId?: IntFieldUpdateOperationsInput | number
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Track?: TrackUncheckedUpdateManyWithoutMedia_TypeNestedInput
  }

  export type Media_TypeCreateManyInput = {
    MediaTypeId?: number
    Name?: string | null
  }

  export type Media_TypeUpdateManyMutationInput = {
    Name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Media_TypeUncheckedUpdateManyInput = {
    MediaTypeId?: IntFieldUpdateOperationsInput | number
    Name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlaylistCreateInput = {
    Name?: string | null
    Playlist_Track?: Playlist_TrackCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistUncheckedCreateInput = {
    PlaylistId?: number
    Name?: string | null
    Playlist_Track?: Playlist_TrackUncheckedCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistUpdateInput = {
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Playlist_Track?: Playlist_TrackUpdateManyWithoutPlaylistNestedInput
  }

  export type PlaylistUncheckedUpdateInput = {
    PlaylistId?: IntFieldUpdateOperationsInput | number
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Playlist_Track?: Playlist_TrackUncheckedUpdateManyWithoutPlaylistNestedInput
  }

  export type PlaylistCreateManyInput = {
    PlaylistId?: number
    Name?: string | null
  }

  export type PlaylistUpdateManyMutationInput = {
    Name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlaylistUncheckedUpdateManyInput = {
    PlaylistId?: IntFieldUpdateOperationsInput | number
    Name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Playlist_TrackCreateInput = {
    Playlist: PlaylistCreateNestedOneWithoutPlaylist_TrackInput
    Track: TrackCreateNestedOneWithoutPlaylist_TrackInput
  }

  export type Playlist_TrackUncheckedCreateInput = {
    PlaylistId: number
    TrackId: number
  }

  export type Playlist_TrackUpdateInput = {
    Playlist?: PlaylistUpdateOneRequiredWithoutPlaylist_TrackNestedInput
    Track?: TrackUpdateOneRequiredWithoutPlaylist_TrackNestedInput
  }

  export type Playlist_TrackUncheckedUpdateInput = {
    PlaylistId?: IntFieldUpdateOperationsInput | number
    TrackId?: IntFieldUpdateOperationsInput | number
  }

  export type Playlist_TrackCreateManyInput = {
    PlaylistId: number
    TrackId: number
  }

  export type Playlist_TrackUpdateManyMutationInput = {

  }

  export type Playlist_TrackUncheckedUpdateManyInput = {
    PlaylistId?: IntFieldUpdateOperationsInput | number
    TrackId?: IntFieldUpdateOperationsInput | number
  }

  export type TrackCreateInput = {
    Name: string
    Composer?: string | null
    Milliseconds: number
    Bytes?: number | null
    UnitPrice: Decimal | DecimalJsLike | number | string
    Invice_Item?: Invice_ItemCreateNestedManyWithoutTrackInput
    Playlist_Track?: Playlist_TrackCreateNestedManyWithoutTrackInput
    Album?: AlbumCreateNestedOneWithoutTrackInput
    Media_Type: Media_TypeCreateNestedOneWithoutTrackInput
    Genre?: GenreCreateNestedOneWithoutTrackInput
  }

  export type TrackUncheckedCreateInput = {
    TrackId?: number
    Name: string
    AlbumId?: number | null
    MediaTypeId: number
    GenreId?: number | null
    Composer?: string | null
    Milliseconds: number
    Bytes?: number | null
    UnitPrice: Decimal | DecimalJsLike | number | string
    Invice_Item?: Invice_ItemUncheckedCreateNestedManyWithoutTrackInput
    Playlist_Track?: Playlist_TrackUncheckedCreateNestedManyWithoutTrackInput
  }

  export type TrackUpdateInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Composer?: NullableStringFieldUpdateOperationsInput | string | null
    Milliseconds?: IntFieldUpdateOperationsInput | number
    Bytes?: NullableIntFieldUpdateOperationsInput | number | null
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Invice_Item?: Invice_ItemUpdateManyWithoutTrackNestedInput
    Playlist_Track?: Playlist_TrackUpdateManyWithoutTrackNestedInput
    Album?: AlbumUpdateOneWithoutTrackNestedInput
    Media_Type?: Media_TypeUpdateOneRequiredWithoutTrackNestedInput
    Genre?: GenreUpdateOneWithoutTrackNestedInput
  }

  export type TrackUncheckedUpdateInput = {
    TrackId?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    AlbumId?: NullableIntFieldUpdateOperationsInput | number | null
    MediaTypeId?: IntFieldUpdateOperationsInput | number
    GenreId?: NullableIntFieldUpdateOperationsInput | number | null
    Composer?: NullableStringFieldUpdateOperationsInput | string | null
    Milliseconds?: IntFieldUpdateOperationsInput | number
    Bytes?: NullableIntFieldUpdateOperationsInput | number | null
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Invice_Item?: Invice_ItemUncheckedUpdateManyWithoutTrackNestedInput
    Playlist_Track?: Playlist_TrackUncheckedUpdateManyWithoutTrackNestedInput
  }

  export type TrackCreateManyInput = {
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

  export type TrackUpdateManyMutationInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Composer?: NullableStringFieldUpdateOperationsInput | string | null
    Milliseconds?: IntFieldUpdateOperationsInput | number
    Bytes?: NullableIntFieldUpdateOperationsInput | number | null
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type TrackUncheckedUpdateManyInput = {
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

  export type ArtistRelationFilter = {
    is?: ArtistWhereInput
    isNot?: ArtistWhereInput
  }

  export type TrackListRelationFilter = {
    every?: TrackWhereInput
    some?: TrackWhereInput
    none?: TrackWhereInput
  }

  export type TrackOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlbumCountOrderByAggregateInput = {
    AlbumId?: SortOrder
    Title?: SortOrder
    ArtistId?: SortOrder
  }

  export type AlbumAvgOrderByAggregateInput = {
    AlbumId?: SortOrder
    ArtistId?: SortOrder
  }

  export type AlbumMaxOrderByAggregateInput = {
    AlbumId?: SortOrder
    Title?: SortOrder
    ArtistId?: SortOrder
  }

  export type AlbumMinOrderByAggregateInput = {
    AlbumId?: SortOrder
    Title?: SortOrder
    ArtistId?: SortOrder
  }

  export type AlbumSumOrderByAggregateInput = {
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

  export type AlbumListRelationFilter = {
    every?: AlbumWhereInput
    some?: AlbumWhereInput
    none?: AlbumWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AlbumOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArtistCountOrderByAggregateInput = {
    ArtistId?: SortOrder
    Name?: SortOrder
  }

  export type ArtistAvgOrderByAggregateInput = {
    ArtistId?: SortOrder
  }

  export type ArtistMaxOrderByAggregateInput = {
    ArtistId?: SortOrder
    Name?: SortOrder
  }

  export type ArtistMinOrderByAggregateInput = {
    ArtistId?: SortOrder
    Name?: SortOrder
  }

  export type ArtistSumOrderByAggregateInput = {
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

  export type EmployeeNullableRelationFilter = {
    is?: EmployeeWhereInput | null
    isNot?: EmployeeWhereInput | null
  }

  export type InvoiceListRelationFilter = {
    every?: InvoiceWhereInput
    some?: InvoiceWhereInput
    none?: InvoiceWhereInput
  }

  export type InvoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
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

  export type CustomerAvgOrderByAggregateInput = {
    CustomerId?: SortOrder
    SupportRepId?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
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

  export type CustomerMinOrderByAggregateInput = {
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

  export type CustomerSumOrderByAggregateInput = {
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

  export type CustomerListRelationFilter = {
    every?: CustomerWhereInput
    some?: CustomerWhereInput
    none?: CustomerWhereInput
  }

  export type EmployeeListRelationFilter = {
    every?: EmployeeWhereInput
    some?: EmployeeWhereInput
    none?: EmployeeWhereInput
  }

  export type CustomerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeeCountOrderByAggregateInput = {
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

  export type EmployeeAvgOrderByAggregateInput = {
    EmployeeId?: SortOrder
    ReportsTo?: SortOrder
  }

  export type EmployeeMaxOrderByAggregateInput = {
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

  export type EmployeeMinOrderByAggregateInput = {
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

  export type EmployeeSumOrderByAggregateInput = {
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

  export type GenreCountOrderByAggregateInput = {
    GenreId?: SortOrder
    Name?: SortOrder
  }

  export type GenreAvgOrderByAggregateInput = {
    GenreId?: SortOrder
  }

  export type GenreMaxOrderByAggregateInput = {
    GenreId?: SortOrder
    Name?: SortOrder
  }

  export type GenreMinOrderByAggregateInput = {
    GenreId?: SortOrder
    Name?: SortOrder
  }

  export type GenreSumOrderByAggregateInput = {
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

  export type TrackRelationFilter = {
    is?: TrackWhereInput
    isNot?: TrackWhereInput
  }

  export type InvoiceRelationFilter = {
    is?: InvoiceWhereInput
    isNot?: InvoiceWhereInput
  }

  export type Invice_ItemCountOrderByAggregateInput = {
    InvoiceLineId?: SortOrder
    InvoiceId?: SortOrder
    TrackId?: SortOrder
    UnitPrice?: SortOrder
    Quantity?: SortOrder
  }

  export type Invice_ItemAvgOrderByAggregateInput = {
    InvoiceLineId?: SortOrder
    InvoiceId?: SortOrder
    TrackId?: SortOrder
    UnitPrice?: SortOrder
    Quantity?: SortOrder
  }

  export type Invice_ItemMaxOrderByAggregateInput = {
    InvoiceLineId?: SortOrder
    InvoiceId?: SortOrder
    TrackId?: SortOrder
    UnitPrice?: SortOrder
    Quantity?: SortOrder
  }

  export type Invice_ItemMinOrderByAggregateInput = {
    InvoiceLineId?: SortOrder
    InvoiceId?: SortOrder
    TrackId?: SortOrder
    UnitPrice?: SortOrder
    Quantity?: SortOrder
  }

  export type Invice_ItemSumOrderByAggregateInput = {
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

  export type Invice_ItemListRelationFilter = {
    every?: Invice_ItemWhereInput
    some?: Invice_ItemWhereInput
    none?: Invice_ItemWhereInput
  }

  export type CustomerRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type Invice_ItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InvoiceCountOrderByAggregateInput = {
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

  export type InvoiceAvgOrderByAggregateInput = {
    InvoiceId?: SortOrder
    CustomerId?: SortOrder
    Total?: SortOrder
  }

  export type InvoiceMaxOrderByAggregateInput = {
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

  export type InvoiceMinOrderByAggregateInput = {
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

  export type InvoiceSumOrderByAggregateInput = {
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

  export type Media_TypeCountOrderByAggregateInput = {
    MediaTypeId?: SortOrder
    Name?: SortOrder
  }

  export type Media_TypeAvgOrderByAggregateInput = {
    MediaTypeId?: SortOrder
  }

  export type Media_TypeMaxOrderByAggregateInput = {
    MediaTypeId?: SortOrder
    Name?: SortOrder
  }

  export type Media_TypeMinOrderByAggregateInput = {
    MediaTypeId?: SortOrder
    Name?: SortOrder
  }

  export type Media_TypeSumOrderByAggregateInput = {
    MediaTypeId?: SortOrder
  }

  export type Playlist_TrackListRelationFilter = {
    every?: Playlist_TrackWhereInput
    some?: Playlist_TrackWhereInput
    none?: Playlist_TrackWhereInput
  }

  export type Playlist_TrackOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlaylistCountOrderByAggregateInput = {
    PlaylistId?: SortOrder
    Name?: SortOrder
  }

  export type PlaylistAvgOrderByAggregateInput = {
    PlaylistId?: SortOrder
  }

  export type PlaylistMaxOrderByAggregateInput = {
    PlaylistId?: SortOrder
    Name?: SortOrder
  }

  export type PlaylistMinOrderByAggregateInput = {
    PlaylistId?: SortOrder
    Name?: SortOrder
  }

  export type PlaylistSumOrderByAggregateInput = {
    PlaylistId?: SortOrder
  }

  export type PlaylistRelationFilter = {
    is?: PlaylistWhereInput
    isNot?: PlaylistWhereInput
  }

  export type Playlist_TrackPlaylistIdTrackIdCompoundUniqueInput = {
    PlaylistId: number
    TrackId: number
  }

  export type Playlist_TrackCountOrderByAggregateInput = {
    PlaylistId?: SortOrder
    TrackId?: SortOrder
  }

  export type Playlist_TrackAvgOrderByAggregateInput = {
    PlaylistId?: SortOrder
    TrackId?: SortOrder
  }

  export type Playlist_TrackMaxOrderByAggregateInput = {
    PlaylistId?: SortOrder
    TrackId?: SortOrder
  }

  export type Playlist_TrackMinOrderByAggregateInput = {
    PlaylistId?: SortOrder
    TrackId?: SortOrder
  }

  export type Playlist_TrackSumOrderByAggregateInput = {
    PlaylistId?: SortOrder
    TrackId?: SortOrder
  }

  export type AlbumNullableRelationFilter = {
    is?: AlbumWhereInput | null
    isNot?: AlbumWhereInput | null
  }

  export type Media_TypeRelationFilter = {
    is?: Media_TypeWhereInput
    isNot?: Media_TypeWhereInput
  }

  export type GenreNullableRelationFilter = {
    is?: GenreWhereInput | null
    isNot?: GenreWhereInput | null
  }

  export type TrackCountOrderByAggregateInput = {
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

  export type TrackAvgOrderByAggregateInput = {
    TrackId?: SortOrder
    AlbumId?: SortOrder
    MediaTypeId?: SortOrder
    GenreId?: SortOrder
    Milliseconds?: SortOrder
    Bytes?: SortOrder
    UnitPrice?: SortOrder
  }

  export type TrackMaxOrderByAggregateInput = {
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

  export type TrackMinOrderByAggregateInput = {
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

  export type TrackSumOrderByAggregateInput = {
    TrackId?: SortOrder
    AlbumId?: SortOrder
    MediaTypeId?: SortOrder
    GenreId?: SortOrder
    Milliseconds?: SortOrder
    Bytes?: SortOrder
    UnitPrice?: SortOrder
  }

  export type ArtistCreateNestedOneWithoutAlbumInput = {
    create?: XOR<ArtistCreateWithoutAlbumInput, ArtistUncheckedCreateWithoutAlbumInput>
    connectOrCreate?: ArtistCreateOrConnectWithoutAlbumInput
    connect?: ArtistWhereUniqueInput
  }

  export type TrackCreateNestedManyWithoutAlbumInput = {
    create?: XOR<TrackCreateWithoutAlbumInput, TrackUncheckedCreateWithoutAlbumInput> | TrackCreateWithoutAlbumInput[] | TrackUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: TrackCreateOrConnectWithoutAlbumInput | TrackCreateOrConnectWithoutAlbumInput[]
    createMany?: TrackCreateManyAlbumInputEnvelope
    connect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
  }

  export type TrackUncheckedCreateNestedManyWithoutAlbumInput = {
    create?: XOR<TrackCreateWithoutAlbumInput, TrackUncheckedCreateWithoutAlbumInput> | TrackCreateWithoutAlbumInput[] | TrackUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: TrackCreateOrConnectWithoutAlbumInput | TrackCreateOrConnectWithoutAlbumInput[]
    createMany?: TrackCreateManyAlbumInputEnvelope
    connect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ArtistUpdateOneRequiredWithoutAlbumNestedInput = {
    create?: XOR<ArtistCreateWithoutAlbumInput, ArtistUncheckedCreateWithoutAlbumInput>
    connectOrCreate?: ArtistCreateOrConnectWithoutAlbumInput
    upsert?: ArtistUpsertWithoutAlbumInput
    connect?: ArtistWhereUniqueInput
    update?: XOR<XOR<ArtistUpdateToOneWithWhereWithoutAlbumInput, ArtistUpdateWithoutAlbumInput>, ArtistUncheckedUpdateWithoutAlbumInput>
  }

  export type TrackUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<TrackCreateWithoutAlbumInput, TrackUncheckedCreateWithoutAlbumInput> | TrackCreateWithoutAlbumInput[] | TrackUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: TrackCreateOrConnectWithoutAlbumInput | TrackCreateOrConnectWithoutAlbumInput[]
    upsert?: TrackUpsertWithWhereUniqueWithoutAlbumInput | TrackUpsertWithWhereUniqueWithoutAlbumInput[]
    createMany?: TrackCreateManyAlbumInputEnvelope
    set?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    disconnect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    delete?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    connect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    update?: TrackUpdateWithWhereUniqueWithoutAlbumInput | TrackUpdateWithWhereUniqueWithoutAlbumInput[]
    updateMany?: TrackUpdateManyWithWhereWithoutAlbumInput | TrackUpdateManyWithWhereWithoutAlbumInput[]
    deleteMany?: TrackScalarWhereInput | TrackScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TrackUncheckedUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<TrackCreateWithoutAlbumInput, TrackUncheckedCreateWithoutAlbumInput> | TrackCreateWithoutAlbumInput[] | TrackUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: TrackCreateOrConnectWithoutAlbumInput | TrackCreateOrConnectWithoutAlbumInput[]
    upsert?: TrackUpsertWithWhereUniqueWithoutAlbumInput | TrackUpsertWithWhereUniqueWithoutAlbumInput[]
    createMany?: TrackCreateManyAlbumInputEnvelope
    set?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    disconnect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    delete?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    connect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    update?: TrackUpdateWithWhereUniqueWithoutAlbumInput | TrackUpdateWithWhereUniqueWithoutAlbumInput[]
    updateMany?: TrackUpdateManyWithWhereWithoutAlbumInput | TrackUpdateManyWithWhereWithoutAlbumInput[]
    deleteMany?: TrackScalarWhereInput | TrackScalarWhereInput[]
  }

  export type AlbumCreateNestedManyWithoutArtistInput = {
    create?: XOR<AlbumCreateWithoutArtistInput, AlbumUncheckedCreateWithoutArtistInput> | AlbumCreateWithoutArtistInput[] | AlbumUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutArtistInput | AlbumCreateOrConnectWithoutArtistInput[]
    createMany?: AlbumCreateManyArtistInputEnvelope
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
  }

  export type AlbumUncheckedCreateNestedManyWithoutArtistInput = {
    create?: XOR<AlbumCreateWithoutArtistInput, AlbumUncheckedCreateWithoutArtistInput> | AlbumCreateWithoutArtistInput[] | AlbumUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutArtistInput | AlbumCreateOrConnectWithoutArtistInput[]
    createMany?: AlbumCreateManyArtistInputEnvelope
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type AlbumUpdateManyWithoutArtistNestedInput = {
    create?: XOR<AlbumCreateWithoutArtistInput, AlbumUncheckedCreateWithoutArtistInput> | AlbumCreateWithoutArtistInput[] | AlbumUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutArtistInput | AlbumCreateOrConnectWithoutArtistInput[]
    upsert?: AlbumUpsertWithWhereUniqueWithoutArtistInput | AlbumUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: AlbumCreateManyArtistInputEnvelope
    set?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    disconnect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    delete?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    update?: AlbumUpdateWithWhereUniqueWithoutArtistInput | AlbumUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: AlbumUpdateManyWithWhereWithoutArtistInput | AlbumUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
  }

  export type AlbumUncheckedUpdateManyWithoutArtistNestedInput = {
    create?: XOR<AlbumCreateWithoutArtistInput, AlbumUncheckedCreateWithoutArtistInput> | AlbumCreateWithoutArtistInput[] | AlbumUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutArtistInput | AlbumCreateOrConnectWithoutArtistInput[]
    upsert?: AlbumUpsertWithWhereUniqueWithoutArtistInput | AlbumUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: AlbumCreateManyArtistInputEnvelope
    set?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    disconnect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    delete?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    update?: AlbumUpdateWithWhereUniqueWithoutArtistInput | AlbumUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: AlbumUpdateManyWithWhereWithoutArtistInput | AlbumUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
  }

  export type EmployeeCreateNestedOneWithoutCustomerInput = {
    create?: XOR<EmployeeCreateWithoutCustomerInput, EmployeeUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutCustomerInput
    connect?: EmployeeWhereUniqueInput
  }

  export type InvoiceCreateNestedManyWithoutCustomerInput = {
    create?: XOR<InvoiceCreateWithoutCustomerInput, InvoiceUncheckedCreateWithoutCustomerInput> | InvoiceCreateWithoutCustomerInput[] | InvoiceUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutCustomerInput | InvoiceCreateOrConnectWithoutCustomerInput[]
    createMany?: InvoiceCreateManyCustomerInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type InvoiceUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<InvoiceCreateWithoutCustomerInput, InvoiceUncheckedCreateWithoutCustomerInput> | InvoiceCreateWithoutCustomerInput[] | InvoiceUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutCustomerInput | InvoiceCreateOrConnectWithoutCustomerInput[]
    createMany?: InvoiceCreateManyCustomerInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type EmployeeUpdateOneWithoutCustomerNestedInput = {
    create?: XOR<EmployeeCreateWithoutCustomerInput, EmployeeUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutCustomerInput
    upsert?: EmployeeUpsertWithoutCustomerInput
    disconnect?: EmployeeWhereInput | boolean
    delete?: EmployeeWhereInput | boolean
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutCustomerInput, EmployeeUpdateWithoutCustomerInput>, EmployeeUncheckedUpdateWithoutCustomerInput>
  }

  export type InvoiceUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<InvoiceCreateWithoutCustomerInput, InvoiceUncheckedCreateWithoutCustomerInput> | InvoiceCreateWithoutCustomerInput[] | InvoiceUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutCustomerInput | InvoiceCreateOrConnectWithoutCustomerInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutCustomerInput | InvoiceUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: InvoiceCreateManyCustomerInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutCustomerInput | InvoiceUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutCustomerInput | InvoiceUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type InvoiceUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<InvoiceCreateWithoutCustomerInput, InvoiceUncheckedCreateWithoutCustomerInput> | InvoiceCreateWithoutCustomerInput[] | InvoiceUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutCustomerInput | InvoiceCreateOrConnectWithoutCustomerInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutCustomerInput | InvoiceUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: InvoiceCreateManyCustomerInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutCustomerInput | InvoiceUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutCustomerInput | InvoiceUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type CustomerCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<CustomerCreateWithoutEmployeeInput, CustomerUncheckedCreateWithoutEmployeeInput> | CustomerCreateWithoutEmployeeInput[] | CustomerUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutEmployeeInput | CustomerCreateOrConnectWithoutEmployeeInput[]
    createMany?: CustomerCreateManyEmployeeInputEnvelope
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
  }

  export type EmployeeCreateNestedOneWithoutOther_EmployeeInput = {
    create?: XOR<EmployeeCreateWithoutOther_EmployeeInput, EmployeeUncheckedCreateWithoutOther_EmployeeInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutOther_EmployeeInput
    connect?: EmployeeWhereUniqueInput
  }

  export type EmployeeCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<EmployeeCreateWithoutEmployeeInput, EmployeeUncheckedCreateWithoutEmployeeInput> | EmployeeCreateWithoutEmployeeInput[] | EmployeeUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutEmployeeInput | EmployeeCreateOrConnectWithoutEmployeeInput[]
    createMany?: EmployeeCreateManyEmployeeInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type CustomerUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<CustomerCreateWithoutEmployeeInput, CustomerUncheckedCreateWithoutEmployeeInput> | CustomerCreateWithoutEmployeeInput[] | CustomerUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutEmployeeInput | CustomerCreateOrConnectWithoutEmployeeInput[]
    createMany?: CustomerCreateManyEmployeeInputEnvelope
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
  }

  export type EmployeeUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<EmployeeCreateWithoutEmployeeInput, EmployeeUncheckedCreateWithoutEmployeeInput> | EmployeeCreateWithoutEmployeeInput[] | EmployeeUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutEmployeeInput | EmployeeCreateOrConnectWithoutEmployeeInput[]
    createMany?: EmployeeCreateManyEmployeeInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CustomerUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<CustomerCreateWithoutEmployeeInput, CustomerUncheckedCreateWithoutEmployeeInput> | CustomerCreateWithoutEmployeeInput[] | CustomerUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutEmployeeInput | CustomerCreateOrConnectWithoutEmployeeInput[]
    upsert?: CustomerUpsertWithWhereUniqueWithoutEmployeeInput | CustomerUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: CustomerCreateManyEmployeeInputEnvelope
    set?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    disconnect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    delete?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    update?: CustomerUpdateWithWhereUniqueWithoutEmployeeInput | CustomerUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: CustomerUpdateManyWithWhereWithoutEmployeeInput | CustomerUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
  }

  export type EmployeeUpdateOneWithoutOther_EmployeeNestedInput = {
    create?: XOR<EmployeeCreateWithoutOther_EmployeeInput, EmployeeUncheckedCreateWithoutOther_EmployeeInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutOther_EmployeeInput
    upsert?: EmployeeUpsertWithoutOther_EmployeeInput
    disconnect?: EmployeeWhereInput | boolean
    delete?: EmployeeWhereInput | boolean
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutOther_EmployeeInput, EmployeeUpdateWithoutOther_EmployeeInput>, EmployeeUncheckedUpdateWithoutOther_EmployeeInput>
  }

  export type EmployeeUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<EmployeeCreateWithoutEmployeeInput, EmployeeUncheckedCreateWithoutEmployeeInput> | EmployeeCreateWithoutEmployeeInput[] | EmployeeUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutEmployeeInput | EmployeeCreateOrConnectWithoutEmployeeInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutEmployeeInput | EmployeeUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: EmployeeCreateManyEmployeeInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutEmployeeInput | EmployeeUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutEmployeeInput | EmployeeUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type CustomerUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<CustomerCreateWithoutEmployeeInput, CustomerUncheckedCreateWithoutEmployeeInput> | CustomerCreateWithoutEmployeeInput[] | CustomerUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutEmployeeInput | CustomerCreateOrConnectWithoutEmployeeInput[]
    upsert?: CustomerUpsertWithWhereUniqueWithoutEmployeeInput | CustomerUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: CustomerCreateManyEmployeeInputEnvelope
    set?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    disconnect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    delete?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    update?: CustomerUpdateWithWhereUniqueWithoutEmployeeInput | CustomerUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: CustomerUpdateManyWithWhereWithoutEmployeeInput | CustomerUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
  }

  export type EmployeeUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<EmployeeCreateWithoutEmployeeInput, EmployeeUncheckedCreateWithoutEmployeeInput> | EmployeeCreateWithoutEmployeeInput[] | EmployeeUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutEmployeeInput | EmployeeCreateOrConnectWithoutEmployeeInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutEmployeeInput | EmployeeUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: EmployeeCreateManyEmployeeInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutEmployeeInput | EmployeeUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutEmployeeInput | EmployeeUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type TrackCreateNestedManyWithoutGenreInput = {
    create?: XOR<TrackCreateWithoutGenreInput, TrackUncheckedCreateWithoutGenreInput> | TrackCreateWithoutGenreInput[] | TrackUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: TrackCreateOrConnectWithoutGenreInput | TrackCreateOrConnectWithoutGenreInput[]
    createMany?: TrackCreateManyGenreInputEnvelope
    connect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
  }

  export type TrackUncheckedCreateNestedManyWithoutGenreInput = {
    create?: XOR<TrackCreateWithoutGenreInput, TrackUncheckedCreateWithoutGenreInput> | TrackCreateWithoutGenreInput[] | TrackUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: TrackCreateOrConnectWithoutGenreInput | TrackCreateOrConnectWithoutGenreInput[]
    createMany?: TrackCreateManyGenreInputEnvelope
    connect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
  }

  export type TrackUpdateManyWithoutGenreNestedInput = {
    create?: XOR<TrackCreateWithoutGenreInput, TrackUncheckedCreateWithoutGenreInput> | TrackCreateWithoutGenreInput[] | TrackUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: TrackCreateOrConnectWithoutGenreInput | TrackCreateOrConnectWithoutGenreInput[]
    upsert?: TrackUpsertWithWhereUniqueWithoutGenreInput | TrackUpsertWithWhereUniqueWithoutGenreInput[]
    createMany?: TrackCreateManyGenreInputEnvelope
    set?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    disconnect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    delete?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    connect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    update?: TrackUpdateWithWhereUniqueWithoutGenreInput | TrackUpdateWithWhereUniqueWithoutGenreInput[]
    updateMany?: TrackUpdateManyWithWhereWithoutGenreInput | TrackUpdateManyWithWhereWithoutGenreInput[]
    deleteMany?: TrackScalarWhereInput | TrackScalarWhereInput[]
  }

  export type TrackUncheckedUpdateManyWithoutGenreNestedInput = {
    create?: XOR<TrackCreateWithoutGenreInput, TrackUncheckedCreateWithoutGenreInput> | TrackCreateWithoutGenreInput[] | TrackUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: TrackCreateOrConnectWithoutGenreInput | TrackCreateOrConnectWithoutGenreInput[]
    upsert?: TrackUpsertWithWhereUniqueWithoutGenreInput | TrackUpsertWithWhereUniqueWithoutGenreInput[]
    createMany?: TrackCreateManyGenreInputEnvelope
    set?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    disconnect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    delete?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    connect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    update?: TrackUpdateWithWhereUniqueWithoutGenreInput | TrackUpdateWithWhereUniqueWithoutGenreInput[]
    updateMany?: TrackUpdateManyWithWhereWithoutGenreInput | TrackUpdateManyWithWhereWithoutGenreInput[]
    deleteMany?: TrackScalarWhereInput | TrackScalarWhereInput[]
  }

  export type TrackCreateNestedOneWithoutInvice_ItemInput = {
    create?: XOR<TrackCreateWithoutInvice_ItemInput, TrackUncheckedCreateWithoutInvice_ItemInput>
    connectOrCreate?: TrackCreateOrConnectWithoutInvice_ItemInput
    connect?: TrackWhereUniqueInput
  }

  export type InvoiceCreateNestedOneWithoutInvice_ItemInput = {
    create?: XOR<InvoiceCreateWithoutInvice_ItemInput, InvoiceUncheckedCreateWithoutInvice_ItemInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutInvice_ItemInput
    connect?: InvoiceWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type TrackUpdateOneRequiredWithoutInvice_ItemNestedInput = {
    create?: XOR<TrackCreateWithoutInvice_ItemInput, TrackUncheckedCreateWithoutInvice_ItemInput>
    connectOrCreate?: TrackCreateOrConnectWithoutInvice_ItemInput
    upsert?: TrackUpsertWithoutInvice_ItemInput
    connect?: TrackWhereUniqueInput
    update?: XOR<XOR<TrackUpdateToOneWithWhereWithoutInvice_ItemInput, TrackUpdateWithoutInvice_ItemInput>, TrackUncheckedUpdateWithoutInvice_ItemInput>
  }

  export type InvoiceUpdateOneRequiredWithoutInvice_ItemNestedInput = {
    create?: XOR<InvoiceCreateWithoutInvice_ItemInput, InvoiceUncheckedCreateWithoutInvice_ItemInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutInvice_ItemInput
    upsert?: InvoiceUpsertWithoutInvice_ItemInput
    connect?: InvoiceWhereUniqueInput
    update?: XOR<XOR<InvoiceUpdateToOneWithWhereWithoutInvice_ItemInput, InvoiceUpdateWithoutInvice_ItemInput>, InvoiceUncheckedUpdateWithoutInvice_ItemInput>
  }

  export type Invice_ItemCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<Invice_ItemCreateWithoutInvoiceInput, Invice_ItemUncheckedCreateWithoutInvoiceInput> | Invice_ItemCreateWithoutInvoiceInput[] | Invice_ItemUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: Invice_ItemCreateOrConnectWithoutInvoiceInput | Invice_ItemCreateOrConnectWithoutInvoiceInput[]
    createMany?: Invice_ItemCreateManyInvoiceInputEnvelope
    connect?: Invice_ItemWhereUniqueInput | Invice_ItemWhereUniqueInput[]
  }

  export type CustomerCreateNestedOneWithoutInvoiceInput = {
    create?: XOR<CustomerCreateWithoutInvoiceInput, CustomerUncheckedCreateWithoutInvoiceInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutInvoiceInput
    connect?: CustomerWhereUniqueInput
  }

  export type Invice_ItemUncheckedCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<Invice_ItemCreateWithoutInvoiceInput, Invice_ItemUncheckedCreateWithoutInvoiceInput> | Invice_ItemCreateWithoutInvoiceInput[] | Invice_ItemUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: Invice_ItemCreateOrConnectWithoutInvoiceInput | Invice_ItemCreateOrConnectWithoutInvoiceInput[]
    createMany?: Invice_ItemCreateManyInvoiceInputEnvelope
    connect?: Invice_ItemWhereUniqueInput | Invice_ItemWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type Invice_ItemUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<Invice_ItemCreateWithoutInvoiceInput, Invice_ItemUncheckedCreateWithoutInvoiceInput> | Invice_ItemCreateWithoutInvoiceInput[] | Invice_ItemUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: Invice_ItemCreateOrConnectWithoutInvoiceInput | Invice_ItemCreateOrConnectWithoutInvoiceInput[]
    upsert?: Invice_ItemUpsertWithWhereUniqueWithoutInvoiceInput | Invice_ItemUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: Invice_ItemCreateManyInvoiceInputEnvelope
    set?: Invice_ItemWhereUniqueInput | Invice_ItemWhereUniqueInput[]
    disconnect?: Invice_ItemWhereUniqueInput | Invice_ItemWhereUniqueInput[]
    delete?: Invice_ItemWhereUniqueInput | Invice_ItemWhereUniqueInput[]
    connect?: Invice_ItemWhereUniqueInput | Invice_ItemWhereUniqueInput[]
    update?: Invice_ItemUpdateWithWhereUniqueWithoutInvoiceInput | Invice_ItemUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: Invice_ItemUpdateManyWithWhereWithoutInvoiceInput | Invice_ItemUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: Invice_ItemScalarWhereInput | Invice_ItemScalarWhereInput[]
  }

  export type CustomerUpdateOneRequiredWithoutInvoiceNestedInput = {
    create?: XOR<CustomerCreateWithoutInvoiceInput, CustomerUncheckedCreateWithoutInvoiceInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutInvoiceInput
    upsert?: CustomerUpsertWithoutInvoiceInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutInvoiceInput, CustomerUpdateWithoutInvoiceInput>, CustomerUncheckedUpdateWithoutInvoiceInput>
  }

  export type Invice_ItemUncheckedUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<Invice_ItemCreateWithoutInvoiceInput, Invice_ItemUncheckedCreateWithoutInvoiceInput> | Invice_ItemCreateWithoutInvoiceInput[] | Invice_ItemUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: Invice_ItemCreateOrConnectWithoutInvoiceInput | Invice_ItemCreateOrConnectWithoutInvoiceInput[]
    upsert?: Invice_ItemUpsertWithWhereUniqueWithoutInvoiceInput | Invice_ItemUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: Invice_ItemCreateManyInvoiceInputEnvelope
    set?: Invice_ItemWhereUniqueInput | Invice_ItemWhereUniqueInput[]
    disconnect?: Invice_ItemWhereUniqueInput | Invice_ItemWhereUniqueInput[]
    delete?: Invice_ItemWhereUniqueInput | Invice_ItemWhereUniqueInput[]
    connect?: Invice_ItemWhereUniqueInput | Invice_ItemWhereUniqueInput[]
    update?: Invice_ItemUpdateWithWhereUniqueWithoutInvoiceInput | Invice_ItemUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: Invice_ItemUpdateManyWithWhereWithoutInvoiceInput | Invice_ItemUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: Invice_ItemScalarWhereInput | Invice_ItemScalarWhereInput[]
  }

  export type TrackCreateNestedManyWithoutMedia_TypeInput = {
    create?: XOR<TrackCreateWithoutMedia_TypeInput, TrackUncheckedCreateWithoutMedia_TypeInput> | TrackCreateWithoutMedia_TypeInput[] | TrackUncheckedCreateWithoutMedia_TypeInput[]
    connectOrCreate?: TrackCreateOrConnectWithoutMedia_TypeInput | TrackCreateOrConnectWithoutMedia_TypeInput[]
    createMany?: TrackCreateManyMedia_TypeInputEnvelope
    connect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
  }

  export type TrackUncheckedCreateNestedManyWithoutMedia_TypeInput = {
    create?: XOR<TrackCreateWithoutMedia_TypeInput, TrackUncheckedCreateWithoutMedia_TypeInput> | TrackCreateWithoutMedia_TypeInput[] | TrackUncheckedCreateWithoutMedia_TypeInput[]
    connectOrCreate?: TrackCreateOrConnectWithoutMedia_TypeInput | TrackCreateOrConnectWithoutMedia_TypeInput[]
    createMany?: TrackCreateManyMedia_TypeInputEnvelope
    connect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
  }

  export type TrackUpdateManyWithoutMedia_TypeNestedInput = {
    create?: XOR<TrackCreateWithoutMedia_TypeInput, TrackUncheckedCreateWithoutMedia_TypeInput> | TrackCreateWithoutMedia_TypeInput[] | TrackUncheckedCreateWithoutMedia_TypeInput[]
    connectOrCreate?: TrackCreateOrConnectWithoutMedia_TypeInput | TrackCreateOrConnectWithoutMedia_TypeInput[]
    upsert?: TrackUpsertWithWhereUniqueWithoutMedia_TypeInput | TrackUpsertWithWhereUniqueWithoutMedia_TypeInput[]
    createMany?: TrackCreateManyMedia_TypeInputEnvelope
    set?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    disconnect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    delete?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    connect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    update?: TrackUpdateWithWhereUniqueWithoutMedia_TypeInput | TrackUpdateWithWhereUniqueWithoutMedia_TypeInput[]
    updateMany?: TrackUpdateManyWithWhereWithoutMedia_TypeInput | TrackUpdateManyWithWhereWithoutMedia_TypeInput[]
    deleteMany?: TrackScalarWhereInput | TrackScalarWhereInput[]
  }

  export type TrackUncheckedUpdateManyWithoutMedia_TypeNestedInput = {
    create?: XOR<TrackCreateWithoutMedia_TypeInput, TrackUncheckedCreateWithoutMedia_TypeInput> | TrackCreateWithoutMedia_TypeInput[] | TrackUncheckedCreateWithoutMedia_TypeInput[]
    connectOrCreate?: TrackCreateOrConnectWithoutMedia_TypeInput | TrackCreateOrConnectWithoutMedia_TypeInput[]
    upsert?: TrackUpsertWithWhereUniqueWithoutMedia_TypeInput | TrackUpsertWithWhereUniqueWithoutMedia_TypeInput[]
    createMany?: TrackCreateManyMedia_TypeInputEnvelope
    set?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    disconnect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    delete?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    connect?: TrackWhereUniqueInput | TrackWhereUniqueInput[]
    update?: TrackUpdateWithWhereUniqueWithoutMedia_TypeInput | TrackUpdateWithWhereUniqueWithoutMedia_TypeInput[]
    updateMany?: TrackUpdateManyWithWhereWithoutMedia_TypeInput | TrackUpdateManyWithWhereWithoutMedia_TypeInput[]
    deleteMany?: TrackScalarWhereInput | TrackScalarWhereInput[]
  }

  export type Playlist_TrackCreateNestedManyWithoutPlaylistInput = {
    create?: XOR<Playlist_TrackCreateWithoutPlaylistInput, Playlist_TrackUncheckedCreateWithoutPlaylistInput> | Playlist_TrackCreateWithoutPlaylistInput[] | Playlist_TrackUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: Playlist_TrackCreateOrConnectWithoutPlaylistInput | Playlist_TrackCreateOrConnectWithoutPlaylistInput[]
    createMany?: Playlist_TrackCreateManyPlaylistInputEnvelope
    connect?: Playlist_TrackWhereUniqueInput | Playlist_TrackWhereUniqueInput[]
  }

  export type Playlist_TrackUncheckedCreateNestedManyWithoutPlaylistInput = {
    create?: XOR<Playlist_TrackCreateWithoutPlaylistInput, Playlist_TrackUncheckedCreateWithoutPlaylistInput> | Playlist_TrackCreateWithoutPlaylistInput[] | Playlist_TrackUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: Playlist_TrackCreateOrConnectWithoutPlaylistInput | Playlist_TrackCreateOrConnectWithoutPlaylistInput[]
    createMany?: Playlist_TrackCreateManyPlaylistInputEnvelope
    connect?: Playlist_TrackWhereUniqueInput | Playlist_TrackWhereUniqueInput[]
  }

  export type Playlist_TrackUpdateManyWithoutPlaylistNestedInput = {
    create?: XOR<Playlist_TrackCreateWithoutPlaylistInput, Playlist_TrackUncheckedCreateWithoutPlaylistInput> | Playlist_TrackCreateWithoutPlaylistInput[] | Playlist_TrackUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: Playlist_TrackCreateOrConnectWithoutPlaylistInput | Playlist_TrackCreateOrConnectWithoutPlaylistInput[]
    upsert?: Playlist_TrackUpsertWithWhereUniqueWithoutPlaylistInput | Playlist_TrackUpsertWithWhereUniqueWithoutPlaylistInput[]
    createMany?: Playlist_TrackCreateManyPlaylistInputEnvelope
    set?: Playlist_TrackWhereUniqueInput | Playlist_TrackWhereUniqueInput[]
    disconnect?: Playlist_TrackWhereUniqueInput | Playlist_TrackWhereUniqueInput[]
    delete?: Playlist_TrackWhereUniqueInput | Playlist_TrackWhereUniqueInput[]
    connect?: Playlist_TrackWhereUniqueInput | Playlist_TrackWhereUniqueInput[]
    update?: Playlist_TrackUpdateWithWhereUniqueWithoutPlaylistInput | Playlist_TrackUpdateWithWhereUniqueWithoutPlaylistInput[]
    updateMany?: Playlist_TrackUpdateManyWithWhereWithoutPlaylistInput | Playlist_TrackUpdateManyWithWhereWithoutPlaylistInput[]
    deleteMany?: Playlist_TrackScalarWhereInput | Playlist_TrackScalarWhereInput[]
  }

  export type Playlist_TrackUncheckedUpdateManyWithoutPlaylistNestedInput = {
    create?: XOR<Playlist_TrackCreateWithoutPlaylistInput, Playlist_TrackUncheckedCreateWithoutPlaylistInput> | Playlist_TrackCreateWithoutPlaylistInput[] | Playlist_TrackUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: Playlist_TrackCreateOrConnectWithoutPlaylistInput | Playlist_TrackCreateOrConnectWithoutPlaylistInput[]
    upsert?: Playlist_TrackUpsertWithWhereUniqueWithoutPlaylistInput | Playlist_TrackUpsertWithWhereUniqueWithoutPlaylistInput[]
    createMany?: Playlist_TrackCreateManyPlaylistInputEnvelope
    set?: Playlist_TrackWhereUniqueInput | Playlist_TrackWhereUniqueInput[]
    disconnect?: Playlist_TrackWhereUniqueInput | Playlist_TrackWhereUniqueInput[]
    delete?: Playlist_TrackWhereUniqueInput | Playlist_TrackWhereUniqueInput[]
    connect?: Playlist_TrackWhereUniqueInput | Playlist_TrackWhereUniqueInput[]
    update?: Playlist_TrackUpdateWithWhereUniqueWithoutPlaylistInput | Playlist_TrackUpdateWithWhereUniqueWithoutPlaylistInput[]
    updateMany?: Playlist_TrackUpdateManyWithWhereWithoutPlaylistInput | Playlist_TrackUpdateManyWithWhereWithoutPlaylistInput[]
    deleteMany?: Playlist_TrackScalarWhereInput | Playlist_TrackScalarWhereInput[]
  }

  export type PlaylistCreateNestedOneWithoutPlaylist_TrackInput = {
    create?: XOR<PlaylistCreateWithoutPlaylist_TrackInput, PlaylistUncheckedCreateWithoutPlaylist_TrackInput>
    connectOrCreate?: PlaylistCreateOrConnectWithoutPlaylist_TrackInput
    connect?: PlaylistWhereUniqueInput
  }

  export type TrackCreateNestedOneWithoutPlaylist_TrackInput = {
    create?: XOR<TrackCreateWithoutPlaylist_TrackInput, TrackUncheckedCreateWithoutPlaylist_TrackInput>
    connectOrCreate?: TrackCreateOrConnectWithoutPlaylist_TrackInput
    connect?: TrackWhereUniqueInput
  }

  export type PlaylistUpdateOneRequiredWithoutPlaylist_TrackNestedInput = {
    create?: XOR<PlaylistCreateWithoutPlaylist_TrackInput, PlaylistUncheckedCreateWithoutPlaylist_TrackInput>
    connectOrCreate?: PlaylistCreateOrConnectWithoutPlaylist_TrackInput
    upsert?: PlaylistUpsertWithoutPlaylist_TrackInput
    connect?: PlaylistWhereUniqueInput
    update?: XOR<XOR<PlaylistUpdateToOneWithWhereWithoutPlaylist_TrackInput, PlaylistUpdateWithoutPlaylist_TrackInput>, PlaylistUncheckedUpdateWithoutPlaylist_TrackInput>
  }

  export type TrackUpdateOneRequiredWithoutPlaylist_TrackNestedInput = {
    create?: XOR<TrackCreateWithoutPlaylist_TrackInput, TrackUncheckedCreateWithoutPlaylist_TrackInput>
    connectOrCreate?: TrackCreateOrConnectWithoutPlaylist_TrackInput
    upsert?: TrackUpsertWithoutPlaylist_TrackInput
    connect?: TrackWhereUniqueInput
    update?: XOR<XOR<TrackUpdateToOneWithWhereWithoutPlaylist_TrackInput, TrackUpdateWithoutPlaylist_TrackInput>, TrackUncheckedUpdateWithoutPlaylist_TrackInput>
  }

  export type Invice_ItemCreateNestedManyWithoutTrackInput = {
    create?: XOR<Invice_ItemCreateWithoutTrackInput, Invice_ItemUncheckedCreateWithoutTrackInput> | Invice_ItemCreateWithoutTrackInput[] | Invice_ItemUncheckedCreateWithoutTrackInput[]
    connectOrCreate?: Invice_ItemCreateOrConnectWithoutTrackInput | Invice_ItemCreateOrConnectWithoutTrackInput[]
    createMany?: Invice_ItemCreateManyTrackInputEnvelope
    connect?: Invice_ItemWhereUniqueInput | Invice_ItemWhereUniqueInput[]
  }

  export type Playlist_TrackCreateNestedManyWithoutTrackInput = {
    create?: XOR<Playlist_TrackCreateWithoutTrackInput, Playlist_TrackUncheckedCreateWithoutTrackInput> | Playlist_TrackCreateWithoutTrackInput[] | Playlist_TrackUncheckedCreateWithoutTrackInput[]
    connectOrCreate?: Playlist_TrackCreateOrConnectWithoutTrackInput | Playlist_TrackCreateOrConnectWithoutTrackInput[]
    createMany?: Playlist_TrackCreateManyTrackInputEnvelope
    connect?: Playlist_TrackWhereUniqueInput | Playlist_TrackWhereUniqueInput[]
  }

  export type AlbumCreateNestedOneWithoutTrackInput = {
    create?: XOR<AlbumCreateWithoutTrackInput, AlbumUncheckedCreateWithoutTrackInput>
    connectOrCreate?: AlbumCreateOrConnectWithoutTrackInput
    connect?: AlbumWhereUniqueInput
  }

  export type Media_TypeCreateNestedOneWithoutTrackInput = {
    create?: XOR<Media_TypeCreateWithoutTrackInput, Media_TypeUncheckedCreateWithoutTrackInput>
    connectOrCreate?: Media_TypeCreateOrConnectWithoutTrackInput
    connect?: Media_TypeWhereUniqueInput
  }

  export type GenreCreateNestedOneWithoutTrackInput = {
    create?: XOR<GenreCreateWithoutTrackInput, GenreUncheckedCreateWithoutTrackInput>
    connectOrCreate?: GenreCreateOrConnectWithoutTrackInput
    connect?: GenreWhereUniqueInput
  }

  export type Invice_ItemUncheckedCreateNestedManyWithoutTrackInput = {
    create?: XOR<Invice_ItemCreateWithoutTrackInput, Invice_ItemUncheckedCreateWithoutTrackInput> | Invice_ItemCreateWithoutTrackInput[] | Invice_ItemUncheckedCreateWithoutTrackInput[]
    connectOrCreate?: Invice_ItemCreateOrConnectWithoutTrackInput | Invice_ItemCreateOrConnectWithoutTrackInput[]
    createMany?: Invice_ItemCreateManyTrackInputEnvelope
    connect?: Invice_ItemWhereUniqueInput | Invice_ItemWhereUniqueInput[]
  }

  export type Playlist_TrackUncheckedCreateNestedManyWithoutTrackInput = {
    create?: XOR<Playlist_TrackCreateWithoutTrackInput, Playlist_TrackUncheckedCreateWithoutTrackInput> | Playlist_TrackCreateWithoutTrackInput[] | Playlist_TrackUncheckedCreateWithoutTrackInput[]
    connectOrCreate?: Playlist_TrackCreateOrConnectWithoutTrackInput | Playlist_TrackCreateOrConnectWithoutTrackInput[]
    createMany?: Playlist_TrackCreateManyTrackInputEnvelope
    connect?: Playlist_TrackWhereUniqueInput | Playlist_TrackWhereUniqueInput[]
  }

  export type Invice_ItemUpdateManyWithoutTrackNestedInput = {
    create?: XOR<Invice_ItemCreateWithoutTrackInput, Invice_ItemUncheckedCreateWithoutTrackInput> | Invice_ItemCreateWithoutTrackInput[] | Invice_ItemUncheckedCreateWithoutTrackInput[]
    connectOrCreate?: Invice_ItemCreateOrConnectWithoutTrackInput | Invice_ItemCreateOrConnectWithoutTrackInput[]
    upsert?: Invice_ItemUpsertWithWhereUniqueWithoutTrackInput | Invice_ItemUpsertWithWhereUniqueWithoutTrackInput[]
    createMany?: Invice_ItemCreateManyTrackInputEnvelope
    set?: Invice_ItemWhereUniqueInput | Invice_ItemWhereUniqueInput[]
    disconnect?: Invice_ItemWhereUniqueInput | Invice_ItemWhereUniqueInput[]
    delete?: Invice_ItemWhereUniqueInput | Invice_ItemWhereUniqueInput[]
    connect?: Invice_ItemWhereUniqueInput | Invice_ItemWhereUniqueInput[]
    update?: Invice_ItemUpdateWithWhereUniqueWithoutTrackInput | Invice_ItemUpdateWithWhereUniqueWithoutTrackInput[]
    updateMany?: Invice_ItemUpdateManyWithWhereWithoutTrackInput | Invice_ItemUpdateManyWithWhereWithoutTrackInput[]
    deleteMany?: Invice_ItemScalarWhereInput | Invice_ItemScalarWhereInput[]
  }

  export type Playlist_TrackUpdateManyWithoutTrackNestedInput = {
    create?: XOR<Playlist_TrackCreateWithoutTrackInput, Playlist_TrackUncheckedCreateWithoutTrackInput> | Playlist_TrackCreateWithoutTrackInput[] | Playlist_TrackUncheckedCreateWithoutTrackInput[]
    connectOrCreate?: Playlist_TrackCreateOrConnectWithoutTrackInput | Playlist_TrackCreateOrConnectWithoutTrackInput[]
    upsert?: Playlist_TrackUpsertWithWhereUniqueWithoutTrackInput | Playlist_TrackUpsertWithWhereUniqueWithoutTrackInput[]
    createMany?: Playlist_TrackCreateManyTrackInputEnvelope
    set?: Playlist_TrackWhereUniqueInput | Playlist_TrackWhereUniqueInput[]
    disconnect?: Playlist_TrackWhereUniqueInput | Playlist_TrackWhereUniqueInput[]
    delete?: Playlist_TrackWhereUniqueInput | Playlist_TrackWhereUniqueInput[]
    connect?: Playlist_TrackWhereUniqueInput | Playlist_TrackWhereUniqueInput[]
    update?: Playlist_TrackUpdateWithWhereUniqueWithoutTrackInput | Playlist_TrackUpdateWithWhereUniqueWithoutTrackInput[]
    updateMany?: Playlist_TrackUpdateManyWithWhereWithoutTrackInput | Playlist_TrackUpdateManyWithWhereWithoutTrackInput[]
    deleteMany?: Playlist_TrackScalarWhereInput | Playlist_TrackScalarWhereInput[]
  }

  export type AlbumUpdateOneWithoutTrackNestedInput = {
    create?: XOR<AlbumCreateWithoutTrackInput, AlbumUncheckedCreateWithoutTrackInput>
    connectOrCreate?: AlbumCreateOrConnectWithoutTrackInput
    upsert?: AlbumUpsertWithoutTrackInput
    disconnect?: AlbumWhereInput | boolean
    delete?: AlbumWhereInput | boolean
    connect?: AlbumWhereUniqueInput
    update?: XOR<XOR<AlbumUpdateToOneWithWhereWithoutTrackInput, AlbumUpdateWithoutTrackInput>, AlbumUncheckedUpdateWithoutTrackInput>
  }

  export type Media_TypeUpdateOneRequiredWithoutTrackNestedInput = {
    create?: XOR<Media_TypeCreateWithoutTrackInput, Media_TypeUncheckedCreateWithoutTrackInput>
    connectOrCreate?: Media_TypeCreateOrConnectWithoutTrackInput
    upsert?: Media_TypeUpsertWithoutTrackInput
    connect?: Media_TypeWhereUniqueInput
    update?: XOR<XOR<Media_TypeUpdateToOneWithWhereWithoutTrackInput, Media_TypeUpdateWithoutTrackInput>, Media_TypeUncheckedUpdateWithoutTrackInput>
  }

  export type GenreUpdateOneWithoutTrackNestedInput = {
    create?: XOR<GenreCreateWithoutTrackInput, GenreUncheckedCreateWithoutTrackInput>
    connectOrCreate?: GenreCreateOrConnectWithoutTrackInput
    upsert?: GenreUpsertWithoutTrackInput
    disconnect?: GenreWhereInput | boolean
    delete?: GenreWhereInput | boolean
    connect?: GenreWhereUniqueInput
    update?: XOR<XOR<GenreUpdateToOneWithWhereWithoutTrackInput, GenreUpdateWithoutTrackInput>, GenreUncheckedUpdateWithoutTrackInput>
  }

  export type Invice_ItemUncheckedUpdateManyWithoutTrackNestedInput = {
    create?: XOR<Invice_ItemCreateWithoutTrackInput, Invice_ItemUncheckedCreateWithoutTrackInput> | Invice_ItemCreateWithoutTrackInput[] | Invice_ItemUncheckedCreateWithoutTrackInput[]
    connectOrCreate?: Invice_ItemCreateOrConnectWithoutTrackInput | Invice_ItemCreateOrConnectWithoutTrackInput[]
    upsert?: Invice_ItemUpsertWithWhereUniqueWithoutTrackInput | Invice_ItemUpsertWithWhereUniqueWithoutTrackInput[]
    createMany?: Invice_ItemCreateManyTrackInputEnvelope
    set?: Invice_ItemWhereUniqueInput | Invice_ItemWhereUniqueInput[]
    disconnect?: Invice_ItemWhereUniqueInput | Invice_ItemWhereUniqueInput[]
    delete?: Invice_ItemWhereUniqueInput | Invice_ItemWhereUniqueInput[]
    connect?: Invice_ItemWhereUniqueInput | Invice_ItemWhereUniqueInput[]
    update?: Invice_ItemUpdateWithWhereUniqueWithoutTrackInput | Invice_ItemUpdateWithWhereUniqueWithoutTrackInput[]
    updateMany?: Invice_ItemUpdateManyWithWhereWithoutTrackInput | Invice_ItemUpdateManyWithWhereWithoutTrackInput[]
    deleteMany?: Invice_ItemScalarWhereInput | Invice_ItemScalarWhereInput[]
  }

  export type Playlist_TrackUncheckedUpdateManyWithoutTrackNestedInput = {
    create?: XOR<Playlist_TrackCreateWithoutTrackInput, Playlist_TrackUncheckedCreateWithoutTrackInput> | Playlist_TrackCreateWithoutTrackInput[] | Playlist_TrackUncheckedCreateWithoutTrackInput[]
    connectOrCreate?: Playlist_TrackCreateOrConnectWithoutTrackInput | Playlist_TrackCreateOrConnectWithoutTrackInput[]
    upsert?: Playlist_TrackUpsertWithWhereUniqueWithoutTrackInput | Playlist_TrackUpsertWithWhereUniqueWithoutTrackInput[]
    createMany?: Playlist_TrackCreateManyTrackInputEnvelope
    set?: Playlist_TrackWhereUniqueInput | Playlist_TrackWhereUniqueInput[]
    disconnect?: Playlist_TrackWhereUniqueInput | Playlist_TrackWhereUniqueInput[]
    delete?: Playlist_TrackWhereUniqueInput | Playlist_TrackWhereUniqueInput[]
    connect?: Playlist_TrackWhereUniqueInput | Playlist_TrackWhereUniqueInput[]
    update?: Playlist_TrackUpdateWithWhereUniqueWithoutTrackInput | Playlist_TrackUpdateWithWhereUniqueWithoutTrackInput[]
    updateMany?: Playlist_TrackUpdateManyWithWhereWithoutTrackInput | Playlist_TrackUpdateManyWithWhereWithoutTrackInput[]
    deleteMany?: Playlist_TrackScalarWhereInput | Playlist_TrackScalarWhereInput[]
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

  export type ArtistCreateWithoutAlbumInput = {
    Name?: string | null
  }

  export type ArtistUncheckedCreateWithoutAlbumInput = {
    ArtistId?: number
    Name?: string | null
  }

  export type ArtistCreateOrConnectWithoutAlbumInput = {
    where: ArtistWhereUniqueInput
    create: XOR<ArtistCreateWithoutAlbumInput, ArtistUncheckedCreateWithoutAlbumInput>
  }

  export type TrackCreateWithoutAlbumInput = {
    Name: string
    Composer?: string | null
    Milliseconds: number
    Bytes?: number | null
    UnitPrice: Decimal | DecimalJsLike | number | string
    Invice_Item?: Invice_ItemCreateNestedManyWithoutTrackInput
    Playlist_Track?: Playlist_TrackCreateNestedManyWithoutTrackInput
    Media_Type: Media_TypeCreateNestedOneWithoutTrackInput
    Genre?: GenreCreateNestedOneWithoutTrackInput
  }

  export type TrackUncheckedCreateWithoutAlbumInput = {
    TrackId?: number
    Name: string
    MediaTypeId: number
    GenreId?: number | null
    Composer?: string | null
    Milliseconds: number
    Bytes?: number | null
    UnitPrice: Decimal | DecimalJsLike | number | string
    Invice_Item?: Invice_ItemUncheckedCreateNestedManyWithoutTrackInput
    Playlist_Track?: Playlist_TrackUncheckedCreateNestedManyWithoutTrackInput
  }

  export type TrackCreateOrConnectWithoutAlbumInput = {
    where: TrackWhereUniqueInput
    create: XOR<TrackCreateWithoutAlbumInput, TrackUncheckedCreateWithoutAlbumInput>
  }

  export type TrackCreateManyAlbumInputEnvelope = {
    data: TrackCreateManyAlbumInput | TrackCreateManyAlbumInput[]
  }

  export type ArtistUpsertWithoutAlbumInput = {
    update: XOR<ArtistUpdateWithoutAlbumInput, ArtistUncheckedUpdateWithoutAlbumInput>
    create: XOR<ArtistCreateWithoutAlbumInput, ArtistUncheckedCreateWithoutAlbumInput>
    where?: ArtistWhereInput
  }

  export type ArtistUpdateToOneWithWhereWithoutAlbumInput = {
    where?: ArtistWhereInput
    data: XOR<ArtistUpdateWithoutAlbumInput, ArtistUncheckedUpdateWithoutAlbumInput>
  }

  export type ArtistUpdateWithoutAlbumInput = {
    Name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ArtistUncheckedUpdateWithoutAlbumInput = {
    ArtistId?: IntFieldUpdateOperationsInput | number
    Name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TrackUpsertWithWhereUniqueWithoutAlbumInput = {
    where: TrackWhereUniqueInput
    update: XOR<TrackUpdateWithoutAlbumInput, TrackUncheckedUpdateWithoutAlbumInput>
    create: XOR<TrackCreateWithoutAlbumInput, TrackUncheckedCreateWithoutAlbumInput>
  }

  export type TrackUpdateWithWhereUniqueWithoutAlbumInput = {
    where: TrackWhereUniqueInput
    data: XOR<TrackUpdateWithoutAlbumInput, TrackUncheckedUpdateWithoutAlbumInput>
  }

  export type TrackUpdateManyWithWhereWithoutAlbumInput = {
    where: TrackScalarWhereInput
    data: XOR<TrackUpdateManyMutationInput, TrackUncheckedUpdateManyWithoutAlbumInput>
  }

  export type TrackScalarWhereInput = {
    AND?: TrackScalarWhereInput | TrackScalarWhereInput[]
    OR?: TrackScalarWhereInput[]
    NOT?: TrackScalarWhereInput | TrackScalarWhereInput[]
    TrackId?: IntFilter<"Track"> | number
    Name?: StringFilter<"Track"> | string
    AlbumId?: IntNullableFilter<"Track"> | number | null
    MediaTypeId?: IntFilter<"Track"> | number
    GenreId?: IntNullableFilter<"Track"> | number | null
    Composer?: StringNullableFilter<"Track"> | string | null
    Milliseconds?: IntFilter<"Track"> | number
    Bytes?: IntNullableFilter<"Track"> | number | null
    UnitPrice?: DecimalFilter<"Track"> | Decimal | DecimalJsLike | number | string
  }

  export type AlbumCreateWithoutArtistInput = {
    Title: string
    Track?: TrackCreateNestedManyWithoutAlbumInput
  }

  export type AlbumUncheckedCreateWithoutArtistInput = {
    AlbumId?: number
    Title: string
    Track?: TrackUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type AlbumCreateOrConnectWithoutArtistInput = {
    where: AlbumWhereUniqueInput
    create: XOR<AlbumCreateWithoutArtistInput, AlbumUncheckedCreateWithoutArtistInput>
  }

  export type AlbumCreateManyArtistInputEnvelope = {
    data: AlbumCreateManyArtistInput | AlbumCreateManyArtistInput[]
  }

  export type AlbumUpsertWithWhereUniqueWithoutArtistInput = {
    where: AlbumWhereUniqueInput
    update: XOR<AlbumUpdateWithoutArtistInput, AlbumUncheckedUpdateWithoutArtistInput>
    create: XOR<AlbumCreateWithoutArtistInput, AlbumUncheckedCreateWithoutArtistInput>
  }

  export type AlbumUpdateWithWhereUniqueWithoutArtistInput = {
    where: AlbumWhereUniqueInput
    data: XOR<AlbumUpdateWithoutArtistInput, AlbumUncheckedUpdateWithoutArtistInput>
  }

  export type AlbumUpdateManyWithWhereWithoutArtistInput = {
    where: AlbumScalarWhereInput
    data: XOR<AlbumUpdateManyMutationInput, AlbumUncheckedUpdateManyWithoutArtistInput>
  }

  export type AlbumScalarWhereInput = {
    AND?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
    OR?: AlbumScalarWhereInput[]
    NOT?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
    AlbumId?: IntFilter<"Album"> | number
    Title?: StringFilter<"Album"> | string
    ArtistId?: IntFilter<"Album"> | number
  }

  export type EmployeeCreateWithoutCustomerInput = {
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
    Employee?: EmployeeCreateNestedOneWithoutOther_EmployeeInput
    other_Employee?: EmployeeCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutCustomerInput = {
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
    other_Employee?: EmployeeUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutCustomerInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutCustomerInput, EmployeeUncheckedCreateWithoutCustomerInput>
  }

  export type InvoiceCreateWithoutCustomerInput = {
    InvoiceDate: Date | string
    BillingAddress?: string | null
    BillingCity?: string | null
    BillingState?: string | null
    BillingCountry?: string | null
    BillingPostalCode?: string | null
    Total: Decimal | DecimalJsLike | number | string
    Invice_Item?: Invice_ItemCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateWithoutCustomerInput = {
    InvoiceId?: number
    InvoiceDate: Date | string
    BillingAddress?: string | null
    BillingCity?: string | null
    BillingState?: string | null
    BillingCountry?: string | null
    BillingPostalCode?: string | null
    Total: Decimal | DecimalJsLike | number | string
    Invice_Item?: Invice_ItemUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceCreateOrConnectWithoutCustomerInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutCustomerInput, InvoiceUncheckedCreateWithoutCustomerInput>
  }

  export type InvoiceCreateManyCustomerInputEnvelope = {
    data: InvoiceCreateManyCustomerInput | InvoiceCreateManyCustomerInput[]
  }

  export type EmployeeUpsertWithoutCustomerInput = {
    update: XOR<EmployeeUpdateWithoutCustomerInput, EmployeeUncheckedUpdateWithoutCustomerInput>
    create: XOR<EmployeeCreateWithoutCustomerInput, EmployeeUncheckedCreateWithoutCustomerInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutCustomerInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutCustomerInput, EmployeeUncheckedUpdateWithoutCustomerInput>
  }

  export type EmployeeUpdateWithoutCustomerInput = {
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
    Employee?: EmployeeUpdateOneWithoutOther_EmployeeNestedInput
    other_Employee?: EmployeeUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutCustomerInput = {
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
    other_Employee?: EmployeeUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type InvoiceUpsertWithWhereUniqueWithoutCustomerInput = {
    where: InvoiceWhereUniqueInput
    update: XOR<InvoiceUpdateWithoutCustomerInput, InvoiceUncheckedUpdateWithoutCustomerInput>
    create: XOR<InvoiceCreateWithoutCustomerInput, InvoiceUncheckedCreateWithoutCustomerInput>
  }

  export type InvoiceUpdateWithWhereUniqueWithoutCustomerInput = {
    where: InvoiceWhereUniqueInput
    data: XOR<InvoiceUpdateWithoutCustomerInput, InvoiceUncheckedUpdateWithoutCustomerInput>
  }

  export type InvoiceUpdateManyWithWhereWithoutCustomerInput = {
    where: InvoiceScalarWhereInput
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyWithoutCustomerInput>
  }

  export type InvoiceScalarWhereInput = {
    AND?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    OR?: InvoiceScalarWhereInput[]
    NOT?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    InvoiceId?: IntFilter<"Invoice"> | number
    CustomerId?: IntFilter<"Invoice"> | number
    InvoiceDate?: DateTimeFilter<"Invoice"> | Date | string
    BillingAddress?: StringNullableFilter<"Invoice"> | string | null
    BillingCity?: StringNullableFilter<"Invoice"> | string | null
    BillingState?: StringNullableFilter<"Invoice"> | string | null
    BillingCountry?: StringNullableFilter<"Invoice"> | string | null
    BillingPostalCode?: StringNullableFilter<"Invoice"> | string | null
    Total?: DecimalFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
  }

  export type CustomerCreateWithoutEmployeeInput = {
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
    Invoice?: InvoiceCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutEmployeeInput = {
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
    Invoice?: InvoiceUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutEmployeeInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutEmployeeInput, CustomerUncheckedCreateWithoutEmployeeInput>
  }

  export type CustomerCreateManyEmployeeInputEnvelope = {
    data: CustomerCreateManyEmployeeInput | CustomerCreateManyEmployeeInput[]
  }

  export type EmployeeCreateWithoutOther_EmployeeInput = {
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
    Customer?: CustomerCreateNestedManyWithoutEmployeeInput
    Employee?: EmployeeCreateNestedOneWithoutOther_EmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutOther_EmployeeInput = {
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
    Customer?: CustomerUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutOther_EmployeeInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutOther_EmployeeInput, EmployeeUncheckedCreateWithoutOther_EmployeeInput>
  }

  export type EmployeeCreateWithoutEmployeeInput = {
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
    Customer?: CustomerCreateNestedManyWithoutEmployeeInput
    other_Employee?: EmployeeCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutEmployeeInput = {
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
    Customer?: CustomerUncheckedCreateNestedManyWithoutEmployeeInput
    other_Employee?: EmployeeUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutEmployeeInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutEmployeeInput, EmployeeUncheckedCreateWithoutEmployeeInput>
  }

  export type EmployeeCreateManyEmployeeInputEnvelope = {
    data: EmployeeCreateManyEmployeeInput | EmployeeCreateManyEmployeeInput[]
  }

  export type CustomerUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: CustomerWhereUniqueInput
    update: XOR<CustomerUpdateWithoutEmployeeInput, CustomerUncheckedUpdateWithoutEmployeeInput>
    create: XOR<CustomerCreateWithoutEmployeeInput, CustomerUncheckedCreateWithoutEmployeeInput>
  }

  export type CustomerUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: CustomerWhereUniqueInput
    data: XOR<CustomerUpdateWithoutEmployeeInput, CustomerUncheckedUpdateWithoutEmployeeInput>
  }

  export type CustomerUpdateManyWithWhereWithoutEmployeeInput = {
    where: CustomerScalarWhereInput
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type CustomerScalarWhereInput = {
    AND?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
    OR?: CustomerScalarWhereInput[]
    NOT?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
    CustomerId?: IntFilter<"Customer"> | number
    FirstName?: StringFilter<"Customer"> | string
    LastName?: StringFilter<"Customer"> | string
    ImageURL?: StringFilter<"Customer"> | string
    Company?: StringNullableFilter<"Customer"> | string | null
    Address?: StringNullableFilter<"Customer"> | string | null
    City?: StringNullableFilter<"Customer"> | string | null
    State?: StringNullableFilter<"Customer"> | string | null
    Country?: StringNullableFilter<"Customer"> | string | null
    PostalCode?: StringNullableFilter<"Customer"> | string | null
    Phone?: StringNullableFilter<"Customer"> | string | null
    Fax?: StringNullableFilter<"Customer"> | string | null
    Email?: StringFilter<"Customer"> | string
    SupportRepId?: IntNullableFilter<"Customer"> | number | null
  }

  export type EmployeeUpsertWithoutOther_EmployeeInput = {
    update: XOR<EmployeeUpdateWithoutOther_EmployeeInput, EmployeeUncheckedUpdateWithoutOther_EmployeeInput>
    create: XOR<EmployeeCreateWithoutOther_EmployeeInput, EmployeeUncheckedCreateWithoutOther_EmployeeInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutOther_EmployeeInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutOther_EmployeeInput, EmployeeUncheckedUpdateWithoutOther_EmployeeInput>
  }

  export type EmployeeUpdateWithoutOther_EmployeeInput = {
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
    Customer?: CustomerUpdateManyWithoutEmployeeNestedInput
    Employee?: EmployeeUpdateOneWithoutOther_EmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutOther_EmployeeInput = {
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
    Customer?: CustomerUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: EmployeeWhereUniqueInput
    update: XOR<EmployeeUpdateWithoutEmployeeInput, EmployeeUncheckedUpdateWithoutEmployeeInput>
    create: XOR<EmployeeCreateWithoutEmployeeInput, EmployeeUncheckedCreateWithoutEmployeeInput>
  }

  export type EmployeeUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: EmployeeWhereUniqueInput
    data: XOR<EmployeeUpdateWithoutEmployeeInput, EmployeeUncheckedUpdateWithoutEmployeeInput>
  }

  export type EmployeeUpdateManyWithWhereWithoutEmployeeInput = {
    where: EmployeeScalarWhereInput
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type EmployeeScalarWhereInput = {
    AND?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
    OR?: EmployeeScalarWhereInput[]
    NOT?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
    EmployeeId?: IntFilter<"Employee"> | number
    LastName?: StringFilter<"Employee"> | string
    FirstName?: StringFilter<"Employee"> | string
    ImageURL?: StringFilter<"Employee"> | string
    Title?: StringNullableFilter<"Employee"> | string | null
    ReportsTo?: IntNullableFilter<"Employee"> | number | null
    BirthDate?: DateTimeNullableFilter<"Employee"> | Date | string | null
    HireDate?: DateTimeNullableFilter<"Employee"> | Date | string | null
    Address?: StringNullableFilter<"Employee"> | string | null
    City?: StringNullableFilter<"Employee"> | string | null
    State?: StringNullableFilter<"Employee"> | string | null
    Country?: StringNullableFilter<"Employee"> | string | null
    PostalCode?: StringNullableFilter<"Employee"> | string | null
    Phone?: StringNullableFilter<"Employee"> | string | null
    Fax?: StringNullableFilter<"Employee"> | string | null
    Email?: StringNullableFilter<"Employee"> | string | null
  }

  export type TrackCreateWithoutGenreInput = {
    Name: string
    Composer?: string | null
    Milliseconds: number
    Bytes?: number | null
    UnitPrice: Decimal | DecimalJsLike | number | string
    Invice_Item?: Invice_ItemCreateNestedManyWithoutTrackInput
    Playlist_Track?: Playlist_TrackCreateNestedManyWithoutTrackInput
    Album?: AlbumCreateNestedOneWithoutTrackInput
    Media_Type: Media_TypeCreateNestedOneWithoutTrackInput
  }

  export type TrackUncheckedCreateWithoutGenreInput = {
    TrackId?: number
    Name: string
    AlbumId?: number | null
    MediaTypeId: number
    Composer?: string | null
    Milliseconds: number
    Bytes?: number | null
    UnitPrice: Decimal | DecimalJsLike | number | string
    Invice_Item?: Invice_ItemUncheckedCreateNestedManyWithoutTrackInput
    Playlist_Track?: Playlist_TrackUncheckedCreateNestedManyWithoutTrackInput
  }

  export type TrackCreateOrConnectWithoutGenreInput = {
    where: TrackWhereUniqueInput
    create: XOR<TrackCreateWithoutGenreInput, TrackUncheckedCreateWithoutGenreInput>
  }

  export type TrackCreateManyGenreInputEnvelope = {
    data: TrackCreateManyGenreInput | TrackCreateManyGenreInput[]
  }

  export type TrackUpsertWithWhereUniqueWithoutGenreInput = {
    where: TrackWhereUniqueInput
    update: XOR<TrackUpdateWithoutGenreInput, TrackUncheckedUpdateWithoutGenreInput>
    create: XOR<TrackCreateWithoutGenreInput, TrackUncheckedCreateWithoutGenreInput>
  }

  export type TrackUpdateWithWhereUniqueWithoutGenreInput = {
    where: TrackWhereUniqueInput
    data: XOR<TrackUpdateWithoutGenreInput, TrackUncheckedUpdateWithoutGenreInput>
  }

  export type TrackUpdateManyWithWhereWithoutGenreInput = {
    where: TrackScalarWhereInput
    data: XOR<TrackUpdateManyMutationInput, TrackUncheckedUpdateManyWithoutGenreInput>
  }

  export type TrackCreateWithoutInvice_ItemInput = {
    Name: string
    Composer?: string | null
    Milliseconds: number
    Bytes?: number | null
    UnitPrice: Decimal | DecimalJsLike | number | string
    Playlist_Track?: Playlist_TrackCreateNestedManyWithoutTrackInput
    Album?: AlbumCreateNestedOneWithoutTrackInput
    Media_Type: Media_TypeCreateNestedOneWithoutTrackInput
    Genre?: GenreCreateNestedOneWithoutTrackInput
  }

  export type TrackUncheckedCreateWithoutInvice_ItemInput = {
    TrackId?: number
    Name: string
    AlbumId?: number | null
    MediaTypeId: number
    GenreId?: number | null
    Composer?: string | null
    Milliseconds: number
    Bytes?: number | null
    UnitPrice: Decimal | DecimalJsLike | number | string
    Playlist_Track?: Playlist_TrackUncheckedCreateNestedManyWithoutTrackInput
  }

  export type TrackCreateOrConnectWithoutInvice_ItemInput = {
    where: TrackWhereUniqueInput
    create: XOR<TrackCreateWithoutInvice_ItemInput, TrackUncheckedCreateWithoutInvice_ItemInput>
  }

  export type InvoiceCreateWithoutInvice_ItemInput = {
    InvoiceDate: Date | string
    BillingAddress?: string | null
    BillingCity?: string | null
    BillingState?: string | null
    BillingCountry?: string | null
    BillingPostalCode?: string | null
    Total: Decimal | DecimalJsLike | number | string
    Customer: CustomerCreateNestedOneWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateWithoutInvice_ItemInput = {
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

  export type InvoiceCreateOrConnectWithoutInvice_ItemInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutInvice_ItemInput, InvoiceUncheckedCreateWithoutInvice_ItemInput>
  }

  export type TrackUpsertWithoutInvice_ItemInput = {
    update: XOR<TrackUpdateWithoutInvice_ItemInput, TrackUncheckedUpdateWithoutInvice_ItemInput>
    create: XOR<TrackCreateWithoutInvice_ItemInput, TrackUncheckedCreateWithoutInvice_ItemInput>
    where?: TrackWhereInput
  }

  export type TrackUpdateToOneWithWhereWithoutInvice_ItemInput = {
    where?: TrackWhereInput
    data: XOR<TrackUpdateWithoutInvice_ItemInput, TrackUncheckedUpdateWithoutInvice_ItemInput>
  }

  export type TrackUpdateWithoutInvice_ItemInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Composer?: NullableStringFieldUpdateOperationsInput | string | null
    Milliseconds?: IntFieldUpdateOperationsInput | number
    Bytes?: NullableIntFieldUpdateOperationsInput | number | null
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Playlist_Track?: Playlist_TrackUpdateManyWithoutTrackNestedInput
    Album?: AlbumUpdateOneWithoutTrackNestedInput
    Media_Type?: Media_TypeUpdateOneRequiredWithoutTrackNestedInput
    Genre?: GenreUpdateOneWithoutTrackNestedInput
  }

  export type TrackUncheckedUpdateWithoutInvice_ItemInput = {
    TrackId?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    AlbumId?: NullableIntFieldUpdateOperationsInput | number | null
    MediaTypeId?: IntFieldUpdateOperationsInput | number
    GenreId?: NullableIntFieldUpdateOperationsInput | number | null
    Composer?: NullableStringFieldUpdateOperationsInput | string | null
    Milliseconds?: IntFieldUpdateOperationsInput | number
    Bytes?: NullableIntFieldUpdateOperationsInput | number | null
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Playlist_Track?: Playlist_TrackUncheckedUpdateManyWithoutTrackNestedInput
  }

  export type InvoiceUpsertWithoutInvice_ItemInput = {
    update: XOR<InvoiceUpdateWithoutInvice_ItemInput, InvoiceUncheckedUpdateWithoutInvice_ItemInput>
    create: XOR<InvoiceCreateWithoutInvice_ItemInput, InvoiceUncheckedCreateWithoutInvice_ItemInput>
    where?: InvoiceWhereInput
  }

  export type InvoiceUpdateToOneWithWhereWithoutInvice_ItemInput = {
    where?: InvoiceWhereInput
    data: XOR<InvoiceUpdateWithoutInvice_ItemInput, InvoiceUncheckedUpdateWithoutInvice_ItemInput>
  }

  export type InvoiceUpdateWithoutInvice_ItemInput = {
    InvoiceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    BillingAddress?: NullableStringFieldUpdateOperationsInput | string | null
    BillingCity?: NullableStringFieldUpdateOperationsInput | string | null
    BillingState?: NullableStringFieldUpdateOperationsInput | string | null
    BillingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    BillingPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Customer?: CustomerUpdateOneRequiredWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutInvice_ItemInput = {
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

  export type Invice_ItemCreateWithoutInvoiceInput = {
    UnitPrice: Decimal | DecimalJsLike | number | string
    Quantity: number
    Track: TrackCreateNestedOneWithoutInvice_ItemInput
  }

  export type Invice_ItemUncheckedCreateWithoutInvoiceInput = {
    InvoiceLineId?: number
    TrackId: number
    UnitPrice: Decimal | DecimalJsLike | number | string
    Quantity: number
  }

  export type Invice_ItemCreateOrConnectWithoutInvoiceInput = {
    where: Invice_ItemWhereUniqueInput
    create: XOR<Invice_ItemCreateWithoutInvoiceInput, Invice_ItemUncheckedCreateWithoutInvoiceInput>
  }

  export type Invice_ItemCreateManyInvoiceInputEnvelope = {
    data: Invice_ItemCreateManyInvoiceInput | Invice_ItemCreateManyInvoiceInput[]
  }

  export type CustomerCreateWithoutInvoiceInput = {
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
    Employee?: EmployeeCreateNestedOneWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutInvoiceInput = {
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

  export type CustomerCreateOrConnectWithoutInvoiceInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutInvoiceInput, CustomerUncheckedCreateWithoutInvoiceInput>
  }

  export type Invice_ItemUpsertWithWhereUniqueWithoutInvoiceInput = {
    where: Invice_ItemWhereUniqueInput
    update: XOR<Invice_ItemUpdateWithoutInvoiceInput, Invice_ItemUncheckedUpdateWithoutInvoiceInput>
    create: XOR<Invice_ItemCreateWithoutInvoiceInput, Invice_ItemUncheckedCreateWithoutInvoiceInput>
  }

  export type Invice_ItemUpdateWithWhereUniqueWithoutInvoiceInput = {
    where: Invice_ItemWhereUniqueInput
    data: XOR<Invice_ItemUpdateWithoutInvoiceInput, Invice_ItemUncheckedUpdateWithoutInvoiceInput>
  }

  export type Invice_ItemUpdateManyWithWhereWithoutInvoiceInput = {
    where: Invice_ItemScalarWhereInput
    data: XOR<Invice_ItemUpdateManyMutationInput, Invice_ItemUncheckedUpdateManyWithoutInvoiceInput>
  }

  export type Invice_ItemScalarWhereInput = {
    AND?: Invice_ItemScalarWhereInput | Invice_ItemScalarWhereInput[]
    OR?: Invice_ItemScalarWhereInput[]
    NOT?: Invice_ItemScalarWhereInput | Invice_ItemScalarWhereInput[]
    InvoiceLineId?: IntFilter<"Invice_Item"> | number
    InvoiceId?: IntFilter<"Invice_Item"> | number
    TrackId?: IntFilter<"Invice_Item"> | number
    UnitPrice?: DecimalFilter<"Invice_Item"> | Decimal | DecimalJsLike | number | string
    Quantity?: IntFilter<"Invice_Item"> | number
  }

  export type CustomerUpsertWithoutInvoiceInput = {
    update: XOR<CustomerUpdateWithoutInvoiceInput, CustomerUncheckedUpdateWithoutInvoiceInput>
    create: XOR<CustomerCreateWithoutInvoiceInput, CustomerUncheckedCreateWithoutInvoiceInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutInvoiceInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutInvoiceInput, CustomerUncheckedUpdateWithoutInvoiceInput>
  }

  export type CustomerUpdateWithoutInvoiceInput = {
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
    Employee?: EmployeeUpdateOneWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutInvoiceInput = {
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

  export type TrackCreateWithoutMedia_TypeInput = {
    Name: string
    Composer?: string | null
    Milliseconds: number
    Bytes?: number | null
    UnitPrice: Decimal | DecimalJsLike | number | string
    Invice_Item?: Invice_ItemCreateNestedManyWithoutTrackInput
    Playlist_Track?: Playlist_TrackCreateNestedManyWithoutTrackInput
    Album?: AlbumCreateNestedOneWithoutTrackInput
    Genre?: GenreCreateNestedOneWithoutTrackInput
  }

  export type TrackUncheckedCreateWithoutMedia_TypeInput = {
    TrackId?: number
    Name: string
    AlbumId?: number | null
    GenreId?: number | null
    Composer?: string | null
    Milliseconds: number
    Bytes?: number | null
    UnitPrice: Decimal | DecimalJsLike | number | string
    Invice_Item?: Invice_ItemUncheckedCreateNestedManyWithoutTrackInput
    Playlist_Track?: Playlist_TrackUncheckedCreateNestedManyWithoutTrackInput
  }

  export type TrackCreateOrConnectWithoutMedia_TypeInput = {
    where: TrackWhereUniqueInput
    create: XOR<TrackCreateWithoutMedia_TypeInput, TrackUncheckedCreateWithoutMedia_TypeInput>
  }

  export type TrackCreateManyMedia_TypeInputEnvelope = {
    data: TrackCreateManyMedia_TypeInput | TrackCreateManyMedia_TypeInput[]
  }

  export type TrackUpsertWithWhereUniqueWithoutMedia_TypeInput = {
    where: TrackWhereUniqueInput
    update: XOR<TrackUpdateWithoutMedia_TypeInput, TrackUncheckedUpdateWithoutMedia_TypeInput>
    create: XOR<TrackCreateWithoutMedia_TypeInput, TrackUncheckedCreateWithoutMedia_TypeInput>
  }

  export type TrackUpdateWithWhereUniqueWithoutMedia_TypeInput = {
    where: TrackWhereUniqueInput
    data: XOR<TrackUpdateWithoutMedia_TypeInput, TrackUncheckedUpdateWithoutMedia_TypeInput>
  }

  export type TrackUpdateManyWithWhereWithoutMedia_TypeInput = {
    where: TrackScalarWhereInput
    data: XOR<TrackUpdateManyMutationInput, TrackUncheckedUpdateManyWithoutMedia_TypeInput>
  }

  export type Playlist_TrackCreateWithoutPlaylistInput = {
    Track: TrackCreateNestedOneWithoutPlaylist_TrackInput
  }

  export type Playlist_TrackUncheckedCreateWithoutPlaylistInput = {
    TrackId: number
  }

  export type Playlist_TrackCreateOrConnectWithoutPlaylistInput = {
    where: Playlist_TrackWhereUniqueInput
    create: XOR<Playlist_TrackCreateWithoutPlaylistInput, Playlist_TrackUncheckedCreateWithoutPlaylistInput>
  }

  export type Playlist_TrackCreateManyPlaylistInputEnvelope = {
    data: Playlist_TrackCreateManyPlaylistInput | Playlist_TrackCreateManyPlaylistInput[]
  }

  export type Playlist_TrackUpsertWithWhereUniqueWithoutPlaylistInput = {
    where: Playlist_TrackWhereUniqueInput
    update: XOR<Playlist_TrackUpdateWithoutPlaylistInput, Playlist_TrackUncheckedUpdateWithoutPlaylistInput>
    create: XOR<Playlist_TrackCreateWithoutPlaylistInput, Playlist_TrackUncheckedCreateWithoutPlaylistInput>
  }

  export type Playlist_TrackUpdateWithWhereUniqueWithoutPlaylistInput = {
    where: Playlist_TrackWhereUniqueInput
    data: XOR<Playlist_TrackUpdateWithoutPlaylistInput, Playlist_TrackUncheckedUpdateWithoutPlaylistInput>
  }

  export type Playlist_TrackUpdateManyWithWhereWithoutPlaylistInput = {
    where: Playlist_TrackScalarWhereInput
    data: XOR<Playlist_TrackUpdateManyMutationInput, Playlist_TrackUncheckedUpdateManyWithoutPlaylistInput>
  }

  export type Playlist_TrackScalarWhereInput = {
    AND?: Playlist_TrackScalarWhereInput | Playlist_TrackScalarWhereInput[]
    OR?: Playlist_TrackScalarWhereInput[]
    NOT?: Playlist_TrackScalarWhereInput | Playlist_TrackScalarWhereInput[]
    PlaylistId?: IntFilter<"Playlist_Track"> | number
    TrackId?: IntFilter<"Playlist_Track"> | number
  }

  export type PlaylistCreateWithoutPlaylist_TrackInput = {
    Name?: string | null
  }

  export type PlaylistUncheckedCreateWithoutPlaylist_TrackInput = {
    PlaylistId?: number
    Name?: string | null
  }

  export type PlaylistCreateOrConnectWithoutPlaylist_TrackInput = {
    where: PlaylistWhereUniqueInput
    create: XOR<PlaylistCreateWithoutPlaylist_TrackInput, PlaylistUncheckedCreateWithoutPlaylist_TrackInput>
  }

  export type TrackCreateWithoutPlaylist_TrackInput = {
    Name: string
    Composer?: string | null
    Milliseconds: number
    Bytes?: number | null
    UnitPrice: Decimal | DecimalJsLike | number | string
    Invice_Item?: Invice_ItemCreateNestedManyWithoutTrackInput
    Album?: AlbumCreateNestedOneWithoutTrackInput
    Media_Type: Media_TypeCreateNestedOneWithoutTrackInput
    Genre?: GenreCreateNestedOneWithoutTrackInput
  }

  export type TrackUncheckedCreateWithoutPlaylist_TrackInput = {
    TrackId?: number
    Name: string
    AlbumId?: number | null
    MediaTypeId: number
    GenreId?: number | null
    Composer?: string | null
    Milliseconds: number
    Bytes?: number | null
    UnitPrice: Decimal | DecimalJsLike | number | string
    Invice_Item?: Invice_ItemUncheckedCreateNestedManyWithoutTrackInput
  }

  export type TrackCreateOrConnectWithoutPlaylist_TrackInput = {
    where: TrackWhereUniqueInput
    create: XOR<TrackCreateWithoutPlaylist_TrackInput, TrackUncheckedCreateWithoutPlaylist_TrackInput>
  }

  export type PlaylistUpsertWithoutPlaylist_TrackInput = {
    update: XOR<PlaylistUpdateWithoutPlaylist_TrackInput, PlaylistUncheckedUpdateWithoutPlaylist_TrackInput>
    create: XOR<PlaylistCreateWithoutPlaylist_TrackInput, PlaylistUncheckedCreateWithoutPlaylist_TrackInput>
    where?: PlaylistWhereInput
  }

  export type PlaylistUpdateToOneWithWhereWithoutPlaylist_TrackInput = {
    where?: PlaylistWhereInput
    data: XOR<PlaylistUpdateWithoutPlaylist_TrackInput, PlaylistUncheckedUpdateWithoutPlaylist_TrackInput>
  }

  export type PlaylistUpdateWithoutPlaylist_TrackInput = {
    Name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlaylistUncheckedUpdateWithoutPlaylist_TrackInput = {
    PlaylistId?: IntFieldUpdateOperationsInput | number
    Name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TrackUpsertWithoutPlaylist_TrackInput = {
    update: XOR<TrackUpdateWithoutPlaylist_TrackInput, TrackUncheckedUpdateWithoutPlaylist_TrackInput>
    create: XOR<TrackCreateWithoutPlaylist_TrackInput, TrackUncheckedCreateWithoutPlaylist_TrackInput>
    where?: TrackWhereInput
  }

  export type TrackUpdateToOneWithWhereWithoutPlaylist_TrackInput = {
    where?: TrackWhereInput
    data: XOR<TrackUpdateWithoutPlaylist_TrackInput, TrackUncheckedUpdateWithoutPlaylist_TrackInput>
  }

  export type TrackUpdateWithoutPlaylist_TrackInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Composer?: NullableStringFieldUpdateOperationsInput | string | null
    Milliseconds?: IntFieldUpdateOperationsInput | number
    Bytes?: NullableIntFieldUpdateOperationsInput | number | null
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Invice_Item?: Invice_ItemUpdateManyWithoutTrackNestedInput
    Album?: AlbumUpdateOneWithoutTrackNestedInput
    Media_Type?: Media_TypeUpdateOneRequiredWithoutTrackNestedInput
    Genre?: GenreUpdateOneWithoutTrackNestedInput
  }

  export type TrackUncheckedUpdateWithoutPlaylist_TrackInput = {
    TrackId?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    AlbumId?: NullableIntFieldUpdateOperationsInput | number | null
    MediaTypeId?: IntFieldUpdateOperationsInput | number
    GenreId?: NullableIntFieldUpdateOperationsInput | number | null
    Composer?: NullableStringFieldUpdateOperationsInput | string | null
    Milliseconds?: IntFieldUpdateOperationsInput | number
    Bytes?: NullableIntFieldUpdateOperationsInput | number | null
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Invice_Item?: Invice_ItemUncheckedUpdateManyWithoutTrackNestedInput
  }

  export type Invice_ItemCreateWithoutTrackInput = {
    UnitPrice: Decimal | DecimalJsLike | number | string
    Quantity: number
    Invoice: InvoiceCreateNestedOneWithoutInvice_ItemInput
  }

  export type Invice_ItemUncheckedCreateWithoutTrackInput = {
    InvoiceLineId?: number
    InvoiceId: number
    UnitPrice: Decimal | DecimalJsLike | number | string
    Quantity: number
  }

  export type Invice_ItemCreateOrConnectWithoutTrackInput = {
    where: Invice_ItemWhereUniqueInput
    create: XOR<Invice_ItemCreateWithoutTrackInput, Invice_ItemUncheckedCreateWithoutTrackInput>
  }

  export type Invice_ItemCreateManyTrackInputEnvelope = {
    data: Invice_ItemCreateManyTrackInput | Invice_ItemCreateManyTrackInput[]
  }

  export type Playlist_TrackCreateWithoutTrackInput = {
    Playlist: PlaylistCreateNestedOneWithoutPlaylist_TrackInput
  }

  export type Playlist_TrackUncheckedCreateWithoutTrackInput = {
    PlaylistId: number
  }

  export type Playlist_TrackCreateOrConnectWithoutTrackInput = {
    where: Playlist_TrackWhereUniqueInput
    create: XOR<Playlist_TrackCreateWithoutTrackInput, Playlist_TrackUncheckedCreateWithoutTrackInput>
  }

  export type Playlist_TrackCreateManyTrackInputEnvelope = {
    data: Playlist_TrackCreateManyTrackInput | Playlist_TrackCreateManyTrackInput[]
  }

  export type AlbumCreateWithoutTrackInput = {
    Title: string
    Artist: ArtistCreateNestedOneWithoutAlbumInput
  }

  export type AlbumUncheckedCreateWithoutTrackInput = {
    AlbumId?: number
    Title: string
    ArtistId: number
  }

  export type AlbumCreateOrConnectWithoutTrackInput = {
    where: AlbumWhereUniqueInput
    create: XOR<AlbumCreateWithoutTrackInput, AlbumUncheckedCreateWithoutTrackInput>
  }

  export type Media_TypeCreateWithoutTrackInput = {
    Name?: string | null
  }

  export type Media_TypeUncheckedCreateWithoutTrackInput = {
    MediaTypeId?: number
    Name?: string | null
  }

  export type Media_TypeCreateOrConnectWithoutTrackInput = {
    where: Media_TypeWhereUniqueInput
    create: XOR<Media_TypeCreateWithoutTrackInput, Media_TypeUncheckedCreateWithoutTrackInput>
  }

  export type GenreCreateWithoutTrackInput = {
    Name?: string | null
  }

  export type GenreUncheckedCreateWithoutTrackInput = {
    GenreId?: number
    Name?: string | null
  }

  export type GenreCreateOrConnectWithoutTrackInput = {
    where: GenreWhereUniqueInput
    create: XOR<GenreCreateWithoutTrackInput, GenreUncheckedCreateWithoutTrackInput>
  }

  export type Invice_ItemUpsertWithWhereUniqueWithoutTrackInput = {
    where: Invice_ItemWhereUniqueInput
    update: XOR<Invice_ItemUpdateWithoutTrackInput, Invice_ItemUncheckedUpdateWithoutTrackInput>
    create: XOR<Invice_ItemCreateWithoutTrackInput, Invice_ItemUncheckedCreateWithoutTrackInput>
  }

  export type Invice_ItemUpdateWithWhereUniqueWithoutTrackInput = {
    where: Invice_ItemWhereUniqueInput
    data: XOR<Invice_ItemUpdateWithoutTrackInput, Invice_ItemUncheckedUpdateWithoutTrackInput>
  }

  export type Invice_ItemUpdateManyWithWhereWithoutTrackInput = {
    where: Invice_ItemScalarWhereInput
    data: XOR<Invice_ItemUpdateManyMutationInput, Invice_ItemUncheckedUpdateManyWithoutTrackInput>
  }

  export type Playlist_TrackUpsertWithWhereUniqueWithoutTrackInput = {
    where: Playlist_TrackWhereUniqueInput
    update: XOR<Playlist_TrackUpdateWithoutTrackInput, Playlist_TrackUncheckedUpdateWithoutTrackInput>
    create: XOR<Playlist_TrackCreateWithoutTrackInput, Playlist_TrackUncheckedCreateWithoutTrackInput>
  }

  export type Playlist_TrackUpdateWithWhereUniqueWithoutTrackInput = {
    where: Playlist_TrackWhereUniqueInput
    data: XOR<Playlist_TrackUpdateWithoutTrackInput, Playlist_TrackUncheckedUpdateWithoutTrackInput>
  }

  export type Playlist_TrackUpdateManyWithWhereWithoutTrackInput = {
    where: Playlist_TrackScalarWhereInput
    data: XOR<Playlist_TrackUpdateManyMutationInput, Playlist_TrackUncheckedUpdateManyWithoutTrackInput>
  }

  export type AlbumUpsertWithoutTrackInput = {
    update: XOR<AlbumUpdateWithoutTrackInput, AlbumUncheckedUpdateWithoutTrackInput>
    create: XOR<AlbumCreateWithoutTrackInput, AlbumUncheckedCreateWithoutTrackInput>
    where?: AlbumWhereInput
  }

  export type AlbumUpdateToOneWithWhereWithoutTrackInput = {
    where?: AlbumWhereInput
    data: XOR<AlbumUpdateWithoutTrackInput, AlbumUncheckedUpdateWithoutTrackInput>
  }

  export type AlbumUpdateWithoutTrackInput = {
    Title?: StringFieldUpdateOperationsInput | string
    Artist?: ArtistUpdateOneRequiredWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateWithoutTrackInput = {
    AlbumId?: IntFieldUpdateOperationsInput | number
    Title?: StringFieldUpdateOperationsInput | string
    ArtistId?: IntFieldUpdateOperationsInput | number
  }

  export type Media_TypeUpsertWithoutTrackInput = {
    update: XOR<Media_TypeUpdateWithoutTrackInput, Media_TypeUncheckedUpdateWithoutTrackInput>
    create: XOR<Media_TypeCreateWithoutTrackInput, Media_TypeUncheckedCreateWithoutTrackInput>
    where?: Media_TypeWhereInput
  }

  export type Media_TypeUpdateToOneWithWhereWithoutTrackInput = {
    where?: Media_TypeWhereInput
    data: XOR<Media_TypeUpdateWithoutTrackInput, Media_TypeUncheckedUpdateWithoutTrackInput>
  }

  export type Media_TypeUpdateWithoutTrackInput = {
    Name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Media_TypeUncheckedUpdateWithoutTrackInput = {
    MediaTypeId?: IntFieldUpdateOperationsInput | number
    Name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GenreUpsertWithoutTrackInput = {
    update: XOR<GenreUpdateWithoutTrackInput, GenreUncheckedUpdateWithoutTrackInput>
    create: XOR<GenreCreateWithoutTrackInput, GenreUncheckedCreateWithoutTrackInput>
    where?: GenreWhereInput
  }

  export type GenreUpdateToOneWithWhereWithoutTrackInput = {
    where?: GenreWhereInput
    data: XOR<GenreUpdateWithoutTrackInput, GenreUncheckedUpdateWithoutTrackInput>
  }

  export type GenreUpdateWithoutTrackInput = {
    Name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GenreUncheckedUpdateWithoutTrackInput = {
    GenreId?: IntFieldUpdateOperationsInput | number
    Name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TrackCreateManyAlbumInput = {
    TrackId?: number
    Name: string
    MediaTypeId: number
    GenreId?: number | null
    Composer?: string | null
    Milliseconds: number
    Bytes?: number | null
    UnitPrice: Decimal | DecimalJsLike | number | string
  }

  export type TrackUpdateWithoutAlbumInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Composer?: NullableStringFieldUpdateOperationsInput | string | null
    Milliseconds?: IntFieldUpdateOperationsInput | number
    Bytes?: NullableIntFieldUpdateOperationsInput | number | null
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Invice_Item?: Invice_ItemUpdateManyWithoutTrackNestedInput
    Playlist_Track?: Playlist_TrackUpdateManyWithoutTrackNestedInput
    Media_Type?: Media_TypeUpdateOneRequiredWithoutTrackNestedInput
    Genre?: GenreUpdateOneWithoutTrackNestedInput
  }

  export type TrackUncheckedUpdateWithoutAlbumInput = {
    TrackId?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    MediaTypeId?: IntFieldUpdateOperationsInput | number
    GenreId?: NullableIntFieldUpdateOperationsInput | number | null
    Composer?: NullableStringFieldUpdateOperationsInput | string | null
    Milliseconds?: IntFieldUpdateOperationsInput | number
    Bytes?: NullableIntFieldUpdateOperationsInput | number | null
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Invice_Item?: Invice_ItemUncheckedUpdateManyWithoutTrackNestedInput
    Playlist_Track?: Playlist_TrackUncheckedUpdateManyWithoutTrackNestedInput
  }

  export type TrackUncheckedUpdateManyWithoutAlbumInput = {
    TrackId?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    MediaTypeId?: IntFieldUpdateOperationsInput | number
    GenreId?: NullableIntFieldUpdateOperationsInput | number | null
    Composer?: NullableStringFieldUpdateOperationsInput | string | null
    Milliseconds?: IntFieldUpdateOperationsInput | number
    Bytes?: NullableIntFieldUpdateOperationsInput | number | null
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type AlbumCreateManyArtistInput = {
    AlbumId?: number
    Title: string
  }

  export type AlbumUpdateWithoutArtistInput = {
    Title?: StringFieldUpdateOperationsInput | string
    Track?: TrackUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateWithoutArtistInput = {
    AlbumId?: IntFieldUpdateOperationsInput | number
    Title?: StringFieldUpdateOperationsInput | string
    Track?: TrackUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateManyWithoutArtistInput = {
    AlbumId?: IntFieldUpdateOperationsInput | number
    Title?: StringFieldUpdateOperationsInput | string
  }

  export type InvoiceCreateManyCustomerInput = {
    InvoiceId?: number
    InvoiceDate: Date | string
    BillingAddress?: string | null
    BillingCity?: string | null
    BillingState?: string | null
    BillingCountry?: string | null
    BillingPostalCode?: string | null
    Total: Decimal | DecimalJsLike | number | string
  }

  export type InvoiceUpdateWithoutCustomerInput = {
    InvoiceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    BillingAddress?: NullableStringFieldUpdateOperationsInput | string | null
    BillingCity?: NullableStringFieldUpdateOperationsInput | string | null
    BillingState?: NullableStringFieldUpdateOperationsInput | string | null
    BillingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    BillingPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Invice_Item?: Invice_ItemUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutCustomerInput = {
    InvoiceId?: IntFieldUpdateOperationsInput | number
    InvoiceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    BillingAddress?: NullableStringFieldUpdateOperationsInput | string | null
    BillingCity?: NullableStringFieldUpdateOperationsInput | string | null
    BillingState?: NullableStringFieldUpdateOperationsInput | string | null
    BillingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    BillingPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Invice_Item?: Invice_ItemUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateManyWithoutCustomerInput = {
    InvoiceId?: IntFieldUpdateOperationsInput | number
    InvoiceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    BillingAddress?: NullableStringFieldUpdateOperationsInput | string | null
    BillingCity?: NullableStringFieldUpdateOperationsInput | string | null
    BillingState?: NullableStringFieldUpdateOperationsInput | string | null
    BillingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    BillingPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    Total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type CustomerCreateManyEmployeeInput = {
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

  export type EmployeeCreateManyEmployeeInput = {
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

  export type CustomerUpdateWithoutEmployeeInput = {
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
    Invoice?: InvoiceUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutEmployeeInput = {
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
    Invoice?: InvoiceUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateManyWithoutEmployeeInput = {
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

  export type EmployeeUpdateWithoutEmployeeInput = {
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
    Customer?: CustomerUpdateManyWithoutEmployeeNestedInput
    other_Employee?: EmployeeUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutEmployeeInput = {
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
    Customer?: CustomerUncheckedUpdateManyWithoutEmployeeNestedInput
    other_Employee?: EmployeeUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateManyWithoutEmployeeInput = {
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

  export type TrackCreateManyGenreInput = {
    TrackId?: number
    Name: string
    AlbumId?: number | null
    MediaTypeId: number
    Composer?: string | null
    Milliseconds: number
    Bytes?: number | null
    UnitPrice: Decimal | DecimalJsLike | number | string
  }

  export type TrackUpdateWithoutGenreInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Composer?: NullableStringFieldUpdateOperationsInput | string | null
    Milliseconds?: IntFieldUpdateOperationsInput | number
    Bytes?: NullableIntFieldUpdateOperationsInput | number | null
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Invice_Item?: Invice_ItemUpdateManyWithoutTrackNestedInput
    Playlist_Track?: Playlist_TrackUpdateManyWithoutTrackNestedInput
    Album?: AlbumUpdateOneWithoutTrackNestedInput
    Media_Type?: Media_TypeUpdateOneRequiredWithoutTrackNestedInput
  }

  export type TrackUncheckedUpdateWithoutGenreInput = {
    TrackId?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    AlbumId?: NullableIntFieldUpdateOperationsInput | number | null
    MediaTypeId?: IntFieldUpdateOperationsInput | number
    Composer?: NullableStringFieldUpdateOperationsInput | string | null
    Milliseconds?: IntFieldUpdateOperationsInput | number
    Bytes?: NullableIntFieldUpdateOperationsInput | number | null
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Invice_Item?: Invice_ItemUncheckedUpdateManyWithoutTrackNestedInput
    Playlist_Track?: Playlist_TrackUncheckedUpdateManyWithoutTrackNestedInput
  }

  export type TrackUncheckedUpdateManyWithoutGenreInput = {
    TrackId?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    AlbumId?: NullableIntFieldUpdateOperationsInput | number | null
    MediaTypeId?: IntFieldUpdateOperationsInput | number
    Composer?: NullableStringFieldUpdateOperationsInput | string | null
    Milliseconds?: IntFieldUpdateOperationsInput | number
    Bytes?: NullableIntFieldUpdateOperationsInput | number | null
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type Invice_ItemCreateManyInvoiceInput = {
    InvoiceLineId?: number
    TrackId: number
    UnitPrice: Decimal | DecimalJsLike | number | string
    Quantity: number
  }

  export type Invice_ItemUpdateWithoutInvoiceInput = {
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Quantity?: IntFieldUpdateOperationsInput | number
    Track?: TrackUpdateOneRequiredWithoutInvice_ItemNestedInput
  }

  export type Invice_ItemUncheckedUpdateWithoutInvoiceInput = {
    InvoiceLineId?: IntFieldUpdateOperationsInput | number
    TrackId?: IntFieldUpdateOperationsInput | number
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Quantity?: IntFieldUpdateOperationsInput | number
  }

  export type Invice_ItemUncheckedUpdateManyWithoutInvoiceInput = {
    InvoiceLineId?: IntFieldUpdateOperationsInput | number
    TrackId?: IntFieldUpdateOperationsInput | number
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Quantity?: IntFieldUpdateOperationsInput | number
  }

  export type TrackCreateManyMedia_TypeInput = {
    TrackId?: number
    Name: string
    AlbumId?: number | null
    GenreId?: number | null
    Composer?: string | null
    Milliseconds: number
    Bytes?: number | null
    UnitPrice: Decimal | DecimalJsLike | number | string
  }

  export type TrackUpdateWithoutMedia_TypeInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Composer?: NullableStringFieldUpdateOperationsInput | string | null
    Milliseconds?: IntFieldUpdateOperationsInput | number
    Bytes?: NullableIntFieldUpdateOperationsInput | number | null
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Invice_Item?: Invice_ItemUpdateManyWithoutTrackNestedInput
    Playlist_Track?: Playlist_TrackUpdateManyWithoutTrackNestedInput
    Album?: AlbumUpdateOneWithoutTrackNestedInput
    Genre?: GenreUpdateOneWithoutTrackNestedInput
  }

  export type TrackUncheckedUpdateWithoutMedia_TypeInput = {
    TrackId?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    AlbumId?: NullableIntFieldUpdateOperationsInput | number | null
    GenreId?: NullableIntFieldUpdateOperationsInput | number | null
    Composer?: NullableStringFieldUpdateOperationsInput | string | null
    Milliseconds?: IntFieldUpdateOperationsInput | number
    Bytes?: NullableIntFieldUpdateOperationsInput | number | null
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Invice_Item?: Invice_ItemUncheckedUpdateManyWithoutTrackNestedInput
    Playlist_Track?: Playlist_TrackUncheckedUpdateManyWithoutTrackNestedInput
  }

  export type TrackUncheckedUpdateManyWithoutMedia_TypeInput = {
    TrackId?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    AlbumId?: NullableIntFieldUpdateOperationsInput | number | null
    GenreId?: NullableIntFieldUpdateOperationsInput | number | null
    Composer?: NullableStringFieldUpdateOperationsInput | string | null
    Milliseconds?: IntFieldUpdateOperationsInput | number
    Bytes?: NullableIntFieldUpdateOperationsInput | number | null
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type Playlist_TrackCreateManyPlaylistInput = {
    TrackId: number
  }

  export type Playlist_TrackUpdateWithoutPlaylistInput = {
    Track?: TrackUpdateOneRequiredWithoutPlaylist_TrackNestedInput
  }

  export type Playlist_TrackUncheckedUpdateWithoutPlaylistInput = {
    TrackId?: IntFieldUpdateOperationsInput | number
  }

  export type Playlist_TrackUncheckedUpdateManyWithoutPlaylistInput = {
    TrackId?: IntFieldUpdateOperationsInput | number
  }

  export type Invice_ItemCreateManyTrackInput = {
    InvoiceLineId?: number
    InvoiceId: number
    UnitPrice: Decimal | DecimalJsLike | number | string
    Quantity: number
  }

  export type Playlist_TrackCreateManyTrackInput = {
    PlaylistId: number
  }

  export type Invice_ItemUpdateWithoutTrackInput = {
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Quantity?: IntFieldUpdateOperationsInput | number
    Invoice?: InvoiceUpdateOneRequiredWithoutInvice_ItemNestedInput
  }

  export type Invice_ItemUncheckedUpdateWithoutTrackInput = {
    InvoiceLineId?: IntFieldUpdateOperationsInput | number
    InvoiceId?: IntFieldUpdateOperationsInput | number
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Quantity?: IntFieldUpdateOperationsInput | number
  }

  export type Invice_ItemUncheckedUpdateManyWithoutTrackInput = {
    InvoiceLineId?: IntFieldUpdateOperationsInput | number
    InvoiceId?: IntFieldUpdateOperationsInput | number
    UnitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Quantity?: IntFieldUpdateOperationsInput | number
  }

  export type Playlist_TrackUpdateWithoutTrackInput = {
    Playlist?: PlaylistUpdateOneRequiredWithoutPlaylist_TrackNestedInput
  }

  export type Playlist_TrackUncheckedUpdateWithoutTrackInput = {
    PlaylistId?: IntFieldUpdateOperationsInput | number
  }

  export type Playlist_TrackUncheckedUpdateManyWithoutTrackInput = {
    PlaylistId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use AlbumCountOutputTypeDefaultArgs instead
     */
    export type AlbumCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AlbumCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ArtistCountOutputTypeDefaultArgs instead
     */
    export type ArtistCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ArtistCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CustomerCountOutputTypeDefaultArgs instead
     */
    export type CustomerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CustomerCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EmployeeCountOutputTypeDefaultArgs instead
     */
    export type EmployeeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EmployeeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GenreCountOutputTypeDefaultArgs instead
     */
    export type GenreCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GenreCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InvoiceCountOutputTypeDefaultArgs instead
     */
    export type InvoiceCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InvoiceCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Media_TypeCountOutputTypeDefaultArgs instead
     */
    export type Media_TypeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Media_TypeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlaylistCountOutputTypeDefaultArgs instead
     */
    export type PlaylistCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlaylistCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TrackCountOutputTypeDefaultArgs instead
     */
    export type TrackCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TrackCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AlbumDefaultArgs instead
     */
    export type AlbumArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AlbumDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ArtistDefaultArgs instead
     */
    export type ArtistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ArtistDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CustomerDefaultArgs instead
     */
    export type CustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CustomerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EmployeeDefaultArgs instead
     */
    export type EmployeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EmployeeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GenreDefaultArgs instead
     */
    export type GenreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GenreDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Invice_ItemDefaultArgs instead
     */
    export type Invice_ItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Invice_ItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InvoiceDefaultArgs instead
     */
    export type InvoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InvoiceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Media_TypeDefaultArgs instead
     */
    export type Media_TypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Media_TypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlaylistDefaultArgs instead
     */
    export type PlaylistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlaylistDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Playlist_TrackDefaultArgs instead
     */
    export type Playlist_TrackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Playlist_TrackDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TrackDefaultArgs instead
     */
    export type TrackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TrackDefaultArgs<ExtArgs>

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