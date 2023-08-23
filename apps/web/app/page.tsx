import { RequestHandler } from "core";
import { PluginB } from "plugin_b";
import { PluginA } from "plugin_a";

const requestHandler = new RequestHandler();

const pluginB = new PluginB();
requestHandler.registerPlugin(pluginB);

// Sending a message from Plugin A
const messageFromA = "Hello from Plugin A";
requestHandler.sendRequestToPlugins("PluginA", messageFromA);

export default function Page(): JSX.Element {
  return <h1>Hello</h1>;
}
