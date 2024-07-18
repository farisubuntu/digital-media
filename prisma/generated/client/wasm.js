
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.16.2
 * Query Engine version: 393aa359c9ad4a4bb28630fb5613f9c281cde053
 */
Prisma.prismaVersion = {
  client: "5.16.2",
  engine: "393aa359c9ad4a4bb28630fb5613f9c281cde053"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  Serializable: 'Serializable'
});

exports.Prisma.AlbumScalarFieldEnum = {
  AlbumId: 'AlbumId',
  Title: 'Title',
  ArtistId: 'ArtistId'
};

exports.Prisma.ArtistScalarFieldEnum = {
  ArtistId: 'ArtistId',
  Name: 'Name'
};

exports.Prisma.CustomerScalarFieldEnum = {
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

exports.Prisma.EmployeeScalarFieldEnum = {
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

exports.Prisma.GenreScalarFieldEnum = {
  GenreId: 'GenreId',
  Name: 'Name'
};

exports.Prisma.Invice_ItemScalarFieldEnum = {
  InvoiceLineId: 'InvoiceLineId',
  InvoiceId: 'InvoiceId',
  TrackId: 'TrackId',
  UnitPrice: 'UnitPrice',
  Quantity: 'Quantity'
};

exports.Prisma.InvoiceScalarFieldEnum = {
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

exports.Prisma.Media_TypeScalarFieldEnum = {
  MediaTypeId: 'MediaTypeId',
  Name: 'Name'
};

exports.Prisma.PlaylistScalarFieldEnum = {
  PlaylistId: 'PlaylistId',
  Name: 'Name'
};

exports.Prisma.Playlist_TrackScalarFieldEnum = {
  PlaylistId: 'PlaylistId',
  TrackId: 'TrackId'
};

exports.Prisma.TrackScalarFieldEnum = {
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

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
