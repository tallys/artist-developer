// NAVIGATION

document.addEventListener(`keyup`, e => {
	if (e.ctrlKey && e.key === ` `) {
		e.preventDefault()

		const active = document.querySelector(`.demo-item.active`)
		active.classList.remove(`active`)

		const next = active.nextElementSibling || document.querySelector(`.demo-item`)
		next.classList.add(`active`)
		next.scrollIntoView()
	}
}, false)

// CLOCK DEMO (big thanks to wes bos and Javascript30 for the inspiration!🎉) https://github.com/wesbos/JavaScript30/tree/master/02%20-%20JS%20and%20CSS%20Clock)

const SECONDS_ON_FACE = 60
const MINUTES_ON_FACE = 60
const HOURS_ON_FACE = 12
const DEGS_IN_CIRCLE = 360
const DEGS_PER_MINUTE = DEGS_IN_CIRCLE / MINUTES_ON_FACE
const DEGS_PER_HOUR = DEGS_IN_CIRCLE / HOURS_ON_FACE

function renderClock(date) {
	const clock = document.querySelector(`.js--clock .clock`)
	const [hour, mins, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()]

	const secondsDegrees = ((seconds / SECONDS_ON_FACE) * DEGS_IN_CIRCLE) + 90
	const minsDegrees = ((mins / MINUTES_ON_FACE) * DEGS_IN_CIRCLE) + ((seconds / SECONDS_ON_FACE)*DEGS_PER_MINUTE) + 90
	const hourDegrees = ((hour / HOURS_ON_FACE) * DEGS_IN_CIRCLE) + ((mins / MINUTES_ON_FACE)*DEGS_PER_HOUR) + 90

	clock.querySelector(`.js--second-hand`).style.transform = `rotate(${secondsDegrees}deg)`
	clock.querySelector(`.js--min-hand`).style.transform = `rotate(${minsDegrees}deg)`
	clock.querySelector(`.js--hour-hand`).style.transform = `rotate(${hourDegrees}deg)`

	clock.style.setProperty(`--second-degrees`, secondsDegrees - 90)
}

setInterval(() => renderClock(new Date), 1000)
renderClock(new Date)
;
