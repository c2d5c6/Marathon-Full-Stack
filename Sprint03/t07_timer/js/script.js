class Timer {
    constructor(title, delay, stopCount) {
        this.title = title
        this.delay = delay
        this.stopCount = stopCount
    }
    
    start() {
        console.log(`Timer ${this.title} started (delay=${this.delay},  stopCount=${this.stopCount}})`)
        this.timer = setInterval(() => this.tick(), this.delay)
    }
    tick() {
        this.stopCount--
        console.log(`Timer ${this.title} Tick! | cycles left${this.stopCount}`)
        if (this.stopCount === 0)
            this.stop()
    }
    stop() {
        clearInterval(this.timer)
        console.log(`Timer ${this.title} stopped`)
    }
}

function runTimer(id, delay, counter) {
    new Timer(id, delay, counter).start()
}

runTimer("Bleep", 1000, 5);
/*
Console output:

Timer Bleep started (delay=1000,  stopCount=5)
Timer Bleep Tick! | cycles left 4
Timer Bleep Tick! | cycles left 3
Timer Bleep Tick! | cycles left 2
Timer Bleep Tick! | cycles left 1
Timer Bleep Tick! | cycles left 0
Timer Bleep stopped
*/