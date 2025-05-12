function volume_sphere() {
	event.preventDefault()
	const radius=document.getElementById('radius').value
	const r=parseFloat(radius)
	if(isNaN(r) || r<0) {
		document.getElementById('volume').value='NaN'
		return
	}
    const volume =4*Math.PI*Math.pow(r,3)/3
	const rounded=volume.toFixed(4)
	document.getElementById('volume').value=rounded//Write your code here
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
