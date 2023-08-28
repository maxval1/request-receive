import {__CORE__} from "../../core/core";

class ShopifyPlugin {

    constructor() {
        this.init = this.init.bind(this);
    }

    init() {
        __CORE__.listen("fetchCollectionsByName", ({ collectionName }) => {
            const collection = {
                collectionName,
                collectionId: 7,
                collectionData: {}
            };

            return collection;
        });

        __CORE__.listen("fetchCollections", () => {
            const collections = [
                {
                    collectionName: "posts",
                    collectionId: 7,
                    collectionData: {}
                },
                {
                    collectionName: "products",
                    collectionId: 31,
                    collectionData: {}
                }
            ];

            return collections;
        });
    }
}

const _shopifyPlugin = new ShopifyPlugin();
export { _shopifyPlugin };
