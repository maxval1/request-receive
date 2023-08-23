import { AbstractPlugin } from "@/AbstractPlugin";

class RequestHandler {
  private plugins: AbstractPlugin[] = [];

  registerPlugin(plugin: AbstractPlugin): void {
    this.plugins.push(plugin);
    plugin.setRequestHandler(this);
  }

  sendRequestToPlugins(sender: string, requestData: string): void {
    this.plugins.forEach((plugin) => {
      plugin.receiveMessage(sender, requestData);
    });
  }
}

export { RequestHandler };
