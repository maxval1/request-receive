import { AbstractPlugin } from "core";

class PluginB extends AbstractPlugin {
  constructor() {
    super("PluginB");
    this.subscribeToMessage("Hello from Plugin A");
  }
}
export { PluginB };
