import { RequestHandler } from "@/RequestHandler";

class AbstractPlugin {
  name: string;
  requestHandler: RequestHandler | null = null;
  subscribedMessages: Set<string> = new Set();

  constructor(name: string) {
    this.name = name;
  }

  setRequestHandler(requestHandler: RequestHandler): void {
    this.requestHandler = requestHandler;
  }

  subscribeToMessage(message: string): void {
    this.subscribedMessages.add(message);
  }

  sendResponseToSender(sender: string, response: string): void {
    console.log(`Sending response from ${this.name} to ${sender}: ${response}`);
    // Implement the actual response sending logic here
  }

  sendToOtherPlugin(targetPlugin: string, message: string): void {
    if (this.requestHandler) {
      this.requestHandler.sendRequestToPlugins(this.name, message);
    }
  }

  receiveMessage(sender: string, message: string): void {
    if (this.subscribedMessages.has(message)) {
      this.respondToMessage(sender, message);
    }
  }

  respondToMessage(sender: string, message: string): void {
    console.log(
      `${this.name} is responding to the message from ${sender}: ${message}`,
    );
    const response = `Response to ${message} from ${this.name}`;
    this.sendResponseToSender(sender, response);
  }
}

export { AbstractPlugin };
