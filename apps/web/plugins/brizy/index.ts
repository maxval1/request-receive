import {__CORE__} from "../../core/core";

class BrizyPlugin {

    constructor() {
        this.init = this.init.bind(this);
    }

    init() {
        __CORE__.listen("fetchCollectionsByName", ({ collectionName }) => {
            const collection = {
                collectionName,
                collectionId: 56,
                collectionData: {
                    posts: ["post1", "post2", "post3"]
                }
            };

            return collection;
        });

        __CORE__.listen("fetchBrizyCollectionById", ({ id }) => {
           const collection = {
               collectionId: id,
               collectionName: "products",
               collectionData: {
                   products: ["apples", "kiwi", "strawberry"]
               }
           };

           return collection;
        });

        __CORE__.listen("fetchCollections", () => {
            const collections = [
                {
                    collectionName: "categories",
                    collectionId: 4,
                    collectionData: {}
                },
                {
                    collectionName: "services",
                    collectionId: 69,
                    collectionData: {}
                }
            ];

            return collections;
        });
    }

}

const _brizyPlugin = new BrizyPlugin();
export { _brizyPlugin };
