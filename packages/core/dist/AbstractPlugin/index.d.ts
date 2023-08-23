import { RequestHandler } from "@/RequestHandler";
declare class AbstractPlugin {
    name: string;
    requestHandler: RequestHandler | null;
    subscribedMessages: Set<string>;
    constructor(name: string);
    setRequestHandler(requestHandler: RequestHandler): void;
    subscribeToMessage(message: string): void;
    sendResponseToSender(sender: string, response: string): void;
    sendToOtherPlugin(targetPlugin: string, message: string): void;
    receiveMessage(sender: string, message: string): void;
    respondToMessage(sender: string, message: string): void;
}
export { AbstractPlugin };
//# sourceMappingURL=index.d.ts.map