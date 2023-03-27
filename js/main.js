
document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
    const choice = document.querySelector('input').value
    const url = `https://meowfacts.herokuapp.com/?count=${choice}`

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(info => {
            console.log(info)
            //clear all the items in the list
            document.querySelector('ul').innerHTML = ""
           
            info.data.forEach(obj => {
                console.log(obj)
                //create an li
                const li = document.createElement('li')
                //add text to li
                li.textContent = obj
                //append the li to the ul
                document.querySelector('ul').appendChild(li)
            })
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}

