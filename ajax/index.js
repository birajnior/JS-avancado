const loadData = () => {
    const xhr = new XMLHttpRequest()
    xhr.open("GET", "https://api.github.com/users/birajnior")
    xhr.send(null)
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            const res = JSON.parse(xhr.responseText)

            const name = res.name
            const avatarURL = res.avatar_url
            const followers = res.followers
            const publicRepos = res.public_repos

            //console.log(name, avatarURL, followers, publicRepos);

            const avatarEl = document.createElement("img")
            avatarEl.setAttribute("width", "128")
            avatarEl.setAttribute("src", avatarURL)

            const nameEl = document.createElement("h1")
            nameEl.innerText = name

            const followersEl = document.createElement("h3")
            followersEl.innerText = `Followers: ${followers}`

            const publicReposEl = document.createElement("h3")
            publicReposEl.innerText = `Public_repos: ${publicRepos}`

            document.body.appendChild(avatarEl)
            document.body.appendChild(nameEl)
            document.body.appendChild(followersEl)
            document.body.appendChild(publicReposEl)
        }
    }
}

const buttonEl = document.querySelector("button")
buttonEl.addEventListener("click", loadData)
