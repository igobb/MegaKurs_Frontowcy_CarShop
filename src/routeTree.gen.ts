/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
// import { Route as CreatorImport } from './routes/creator'
import { Route as IndexImport } from './routes/index'
// import { Route as OrderSummaryIndexImport } from './routes/orderSummary/index'
// import { Route as CreatorNewImport } from './routes/creator.new'
// import { Route as CreatorCatNameImport } from './routes/creator.$catName'
import { Route as CategoriesSteepIdImport } from './routes/categories/$steepId'
// import { Route as CreatorAddPartsCategoryImport } from './routes/creator.add-parts.$category'

// Create/Update Routes

// const CreatorRoute = CreatorImport.update({
//   id: '/creator',
//   path: '/creator',
//   getParentRoute: () => rootRoute,
// } as any)

const IndexRoute = IndexImport.update({
    id: '/',
    path: '/',
    getParentRoute: () => rootRoute,
} as any)

// const OrderSummaryIndexRoute = OrderSummaryIndexImport.update({
//   id: '/orderSummary/',
//   path: '/orderSummary/',
//   getParentRoute: () => rootRoute,
// } as any)

// const CreatorNewRoute = CreatorNewImport.update({
//   id: '/new',
//   path: '/new',
//   getParentRoute: () => CreatorRoute,
// } as any)

// const CreatorCatNameRoute = CreatorCatNameImport.update({
//   id: '/$catName',
//   path: '/$catName',
//   getParentRoute: () => CreatorRoute,
// } as any)

const CategoriesSteepIdRoute = CategoriesSteepIdImport.update({
  id: '/categories/$steepId',
  path: '/categories/$steepId',
  getParentRoute: () => rootRoute,
} as any)

// const CreatorAddPartsCategoryRoute = CreatorAddPartsCategoryImport.update({
//   id: '/add-parts/$category',
//   path: '/add-parts/$category',
//   getParentRoute: () => CreatorRoute,
// } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
    interface FileRoutesByPath {
        '/': {
            id: '/'
            path: '/'
            fullPath: '/'
            preLoaderRoute: typeof IndexImport
            parentRoute: typeof rootRoute
        }
        // '/creator': {
        //   id: '/creator'
        //   path: '/creator'
        //   fullPath: '/creator'
        //   preLoaderRoute: typeof CreatorImport
        //   parentRoute: typeof rootRoute
        // }
        '/categories/$steepId': {
          id: '/categories/$steepId'
          path: '/categories/$steepId'
          fullPath: '/categories/$steepId'
          preLoaderRoute: typeof CategoriesSteepIdImport
          parentRoute: typeof rootRoute
        }
        // '/creator/$catName': {
        //   id: '/creator/$catName'
        //   path: '/$catName'
        //   fullPath: '/creator/$catName'
        //   preLoaderRoute: typeof CreatorCatNameImport
        //   parentRoute: typeof CreatorImport
        // }
        // '/creator/new': {
        //   id: '/creator/new'
        //   path: '/new'
        //   fullPath: '/creator/new'
        //   preLoaderRoute: typeof CreatorNewImport
        //   parentRoute: typeof CreatorImport
        // }
        // '/orderSummary/': {
        //   id: '/orderSummary/'
        //   path: '/orderSummary'
        //   fullPath: '/orderSummary'
        //   preLoaderRoute: typeof OrderSummaryIndexImport
        //   parentRoute: typeof rootRoute
        // }
        // '/creator/add-parts/$category': {
        //   id: '/creator/add-parts/$category'
        //   path: '/add-parts/$category'
        //   fullPath: '/creator/add-parts/$category'
        //   preLoaderRoute: typeof CreatorAddPartsCategoryImport
        //   parentRoute: typeof CreatorImport
        // }
    }
}

// Create and export the route tree

// interface CreatorRouteChildren {
//   CreatorCatNameRoute: typeof CreatorCatNameRoute
//   CreatorNewRoute: typeof CreatorNewRoute
//   CreatorAddPartsCategoryRoute: typeof CreatorAddPartsCategoryRoute
// }

// const CreatorRouteChildren: CreatorRouteChildren = {
//   CreatorCatNameRoute: CreatorCatNameRoute,
//   CreatorNewRoute: CreatorNewRoute,
//   CreatorAddPartsCategoryRoute: CreatorAddPartsCategoryRoute,
// }

// const CreatorRouteWithChildren =
//   CreatorRoute._addFileChildren(CreatorRouteChildren)

export interface FileRoutesByFullPath {
    '/': typeof IndexRoute
    //   '/creator': typeof CreatorRouteWithChildren
      '/categories/$steepId': typeof CategoriesSteepIdRoute
    //   '/creator/$catName': typeof CreatorCatNameRoute
    //   '/creator/new': typeof CreatorNewRoute
    //   '/orderSummary': typeof OrderSummaryIndexRoute
    //   '/creator/add-parts/$category': typeof CreatorAddPartsCategoryRoute
}

export interface FileRoutesByTo {
    '/': typeof IndexRoute
    //   '/creator': typeof CreatorRouteWithChildren
      '/categories/$steepId': typeof CategoriesSteepIdRoute
    //   '/creator/$catName': typeof CreatorCatNameRoute
    //   '/creator/new': typeof CreatorNewRoute
    //   '/orderSummary': typeof OrderSummaryIndexRoute
    //   '/creator/add-parts/$category': typeof CreatorAddPartsCategoryRoute
}

export interface FileRoutesById {
    __root__: typeof rootRoute
    '/': typeof IndexRoute
    //   '/creator': typeof CreatorRouteWithChildren
      '/categories/$steepId': typeof CategoriesSteepIdRoute
    //   '/creator/$catName': typeof CreatorCatNameRoute
    //   '/creator/new': typeof CreatorNewRoute
    //   '/orderSummary/': typeof OrderSummaryIndexRoute
    //   '/creator/add-parts/$category': typeof CreatorAddPartsCategoryRoute
}

export interface FileRouteTypes {
    fileRoutesByFullPath: FileRoutesByFullPath
    fullPaths: '/'
    // | '/creator'
    | '/categories/$steepId'
    // | '/creator/$catName'
    // | '/creator/new'
    // | '/orderSummary'
    // | '/creator/add-parts/$category'
    fileRoutesByTo: FileRoutesByTo
    to: '/'
    // | '/creator'
    | '/categories/$steepId'
    // | '/creator/$catName'
    // | '/creator/new'
    // | '/orderSummary'
    // | '/creator/add-parts/$category'
    id: '__root__' | '/'
    // | '/creator'
    | '/categories/$steepId'
    // | '/creator/$catName'
    // | '/creator/new'
    // | '/orderSummary/'
    // | '/creator/add-parts/$category'
    fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
    IndexRoute: typeof IndexRoute
    //   CreatorRoute: typeof CreatorRouteWithChildren
      CategoriesSteepIdRoute: typeof CategoriesSteepIdRoute
    //   OrderSummaryIndexRoute: typeof OrderSummaryIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
    IndexRoute: IndexRoute,
    //   CreatorRoute: CreatorRouteWithChildren,
      CategoriesSteepIdRoute: CategoriesSteepIdRoute,
    //   OrderSummaryIndexRoute: OrderSummaryIndexRoute,
}

export const routeTree = rootRoute
    ._addFileChildren(rootRouteChildren)
    ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/creator",
        "/categories/$steepId",
        "/orderSummary/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/creator": {
      "filePath": "creator.tsx",
      "children": [
        "/creator/$catName",
        "/creator/new",
        "/creator/add-parts/$category"
      ]
    },
    "/categories/$steepId": {
      "filePath": "categories/$steepId.tsx"
    },
    "/creator/$catName": {
      "filePath": "creator.$catName.tsx",
      "parent": "/creator"
    },
    "/creator/new": {
      "filePath": "creator.new.tsx",
      "parent": "/creator"
    },
    "/orderSummary/": {
      "filePath": "orderSummary/index.tsx"
    },
    "/creator/add-parts/$category": {
      "filePath": "creator.add-parts.$category.tsx",
      "parent": "/creator"
    }
  }
}
ROUTE_MANIFEST_END */
