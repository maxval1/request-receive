import { AbstractPlugin } from "@/AbstractPlugin";
declare class RequestHandler {
    private plugins;
    registerPlugin(plugin: AbstractPlugin): void;
    sendRequestToPlugins(sender: string, requestData: string): void;
}
export { RequestHandler };
//# sourceMappingURL=index.d.ts.map