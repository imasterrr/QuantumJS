class QuantumEmitter {
    constructor() {
        this.listeners = {};
    }

    on(event, listener) {
        if (!this.listeners[event]) this.listeners[event] = [];
        this.listeners[event].push(listener);
    }

    off(event, listener) {
        if (!this.listeners[event]) return;
        this.listeners[event] = this.listeners[event].filter(l => l !== listener);
    }

    emit(event, data) {
        if (!this.listeners[event]) return;
        const delay = Math.random() * 1000;
        setTimeout(() => {
            this.listeners[event].forEach(listener => listener(data));
        }, delay);
    }
}

module.exports = QuantumEmitter;

if (require.main === module) {
    const emitter = new QuantumEmitter();
    emitter.on('quantumLeap', (data) => {
        console.log(`Quantum leap detected at position ${data.position}!`);
    });
    emitter.emit('quantumLeap', { position: 0 });
}
