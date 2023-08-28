type callback = (payload: any) => any;

class Core {
    private plugins: any[] = [];
    private events: Record<string, callback[]> = {};

    registerPlugins(...plugins: any) {
        plugins.forEach(plugin => {
            this.plugins.push(plugin);
            plugin.init(this);
        });
    }

    listen(event: string, callback: callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    }

    emit(event: string, payload: any): any[] {
        const handlers = this.events[event];
        if (handlers) {
            return handlers.map(handler => handler(payload));
        }
        return [];
    }
}

export const __CORE__ = new Core();

