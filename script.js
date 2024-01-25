// Your script here.
const btn = document.getElementById('btn')
const input = document.getElementById('userInput')
const countDown = document.getElementById('countDown')
const endTime = document.getElementById('endTime')

btn.addEventListener('click', (e)=>{ 
	let time = input.value
	const timer = setInterval(()=>{
		countDown.innerText = time
		time=time-1
		if(time==-1) {
			clearInterval(timer)
			updateCurrentTime()
		}
	},1000)


	function updateCurrentTime() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;

  var strTime = hours + ':' + minutes + ' ' + ampm;

  endTime.innerText = strTime;
}
})