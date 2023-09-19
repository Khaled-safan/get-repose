//id
//name
//watchers_count
//language
// let idRepo = document.querySelector(".id")
// let nameRepo = document.querySelector(".name")
// let watchersRepo = document.querySelector(".watchers_count")
// let language = document.querySelector(".language")



let inp =document.querySelector("#inp")
let btn =document.querySelector("#btn")
let container =document.querySelector(".container")
let content = document.querySelector(".content")
async function project(){

    const  apiLink = await fetch(`https://api.github.com/users/${inp.value}/repos`) 
    const data = await apiLink.json()

    content.innerHTML =""

    data.forEach((repos) => {
 
        let info = document.createElement("div")
        info.className ="info"
       content.appendChild(info)

        let divID = document.createElement("div")
         divID.className="idRepo"
         let id = document.createTextNode(repos.id)
         divID.append(id)
         info.appendChild(divID)
          
         content.appendChild(info)



         let nameRepo = document.createElement("div")
         nameRepo.className="name"
         let name = document.createTextNode(repos.name)
         nameRepo.append(name)
         info.appendChild(nameRepo)
         content.appendChild(info)



          
        let watchersCount= document.createElement("div")
        watchersCount.className="watchers_count"
        let watchers = document.createTextNode(repos.watchers_count)
        watchersCount.append(watchers)
        info.appendChild(watchersCount)
        content.appendChild(info)

        let language= document.createElement("div")
        language.className="language"
        let languageproject = document.createTextNode(repos.language)
        language.appendChild(languageproject)
        info.appendChild(language)
        content.appendChild(info)
        

        let link = document.createElement("a")
        let linkRepos = document.createTextNode("Visit")
         link.href = `https://github.com/${inp.value}/${repos.name}`
          link.appendChild(linkRepos)
          link.setAttribute("target","_blank")
          info.appendChild(link)
          content.appendChild(info)
    });
    inp.value =""
}

