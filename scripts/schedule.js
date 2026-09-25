// Importy the JSON formatted data
import { sessions } from "../data/schedule.mjs";
//console.log(sessions)

const destination = document.querySelector("#schedule-here")

sessions.forEach(item => {
    //console.log(item)
    console.log(item.time)
    console.log(item.session)
    console.log(item.description)
    //console.log(item.speaker.name)
    //console.log(item.speaker.title)
    //console.log(item.speaker.photo_url)

    const row = document.createElement('tr')

    //first column
    const time = document.createElement('td')
    time.innerHTML =`<p class="time">${item.time}</p>`

    //second column
    const topic = document.createElement('td')
    topic.innerHTML =`<p class="session">${item.session}</p> <p>${item.description}</p>`

    //third column
    const speaker = document.createElement('td')
        if (item.speaker === null) {
            console.log('no speaker')
        } else {
            speaker.innerHTML=`
            <p class="name">${item.speaker.name}</p>
            <img src="images/${item.speaker.photo_url}">
            <p class=desc">${item.speaker.title}</p>
            `
        }


    row.appendChild(time)
    row.appendChild(topic)
    row.appendChild(speaker)

    destination.appendChild(row)
})
