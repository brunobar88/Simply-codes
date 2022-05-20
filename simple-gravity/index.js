const ball = document.querySelector('.ball')

const acceleration = -3 * (9.8 ** (-3));

let timer;

const initialBallPosition = () => {
    const { bottom } = getComputedStyle(ball)

    return +bottom.replace('px', '')
}

const getNewBallPosition = (initialPosition, velocity, time) => {
    return initialPosition + velocity * time + 0.5 * acceleration * (time ** 2)
}

function reset() {
    clearInterval(timer);
    ball.style.bottom = '700px'
}

function start() {
    let velocity = 0
    let time = Date.now()

    timer = setInterval(() => {
        const currentTime = Date.now()
        const timeGap = currentTime - time
        time = currentTime
    
        const initialPosition = initialBallPosition()

        velocity += acceleration * timeGap

        if(initialPosition === 0) {
            if(velocity > -0.2) {
                velocity = 0
            } else {
                console.log('teste')
                velocity *= -1 * 0.7;
            }
        }
    
        const newPosition = getNewBallPosition(initialPosition, velocity, timeGap);
        
        ball.style.bottom = `${Math.max(newPosition, 0)}px`
    });
}