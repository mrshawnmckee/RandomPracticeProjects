document.querySelector("#startStream").addEventListener("click", async () => {
    try {
        // After getUserMedia, we must provide an object with contraints, in this case a request for video
        const stream = await navigator.mediaDevices.getUserMedia({video: true})
        const videoElement = document.querySelector("#videoElement")
        // setting the source object of the videoElement to be stream
        videoElement.srcObject = stream;
    } catch(err){
        console.log(err)
        document.querySelector("#errorText").textContent = err.message;
    }
})



// {audio: true} for microphone permissions
//To choose which camera/microphone instructions here: https://www.udemy.com/course/pro-javascript/learn/lecture/40763074#overview