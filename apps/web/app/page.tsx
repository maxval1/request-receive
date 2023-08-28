import React from "react";
import {__CORE__} from "../core/core";
import {_shopifyPlugin} from "../plugins/shopify";
import {_brizyPlugin} from "../plugins/brizy";

__CORE__.registerPlugins(_shopifyPlugin, _brizyPlugin);

// Fetch single collection by `collectionId` from Brizy Storage
const brizySingleCollection = __CORE__.emit("fetchBrizyCollectionById", {id: 5});

// Fetch collections from all storages by `collectionName`
const collectionsByName = __CORE__.emit("fetchCollectionsByName", {collectionName: "posts"});

// Fetch all collections from all storages
const collections = __CORE__.emit("fetchCollections", {});

export default function Page(): JSX.Element {
    return (
        <div>
            <p>fetchBrizyCollectionById event</p>
            {
                JSON.stringify(brizySingleCollection)
            }
            <p style={{marginTop: 100}}>fetchCollectionsByName event</p>
            {
                JSON.stringify(collectionsByName)
            }
            <p style={{marginTop: 100}}>fetchCollections event</p>
            {
                JSON.stringify(collections)
            }
        </div>
    );
}
