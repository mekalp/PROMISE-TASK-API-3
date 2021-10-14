let url=  "http://hp-api.herokuapp.com/api/characters"

let accessUrl= async ()=>{


    try{

      let resp= await fetch(url)
    //   console.log(resp)
      let convert = await resp.json()
    //   console.log(convert) 
    
      resData(convert)
    
      }catch(err){

       console.log(err)
    }

}

accessUrl()




function resData(ab){


    console.log(ab)

let container= document.querySelector(".container")

let row= document.createElement("div")
row.setAttribute("class","row align-items-center")

    ab.forEach(element => {

        console.log(element)


let column= createMyElement("div","col-sm-12 col-md-6 col-lg-4 col-xl-4" )

let card= createMyElement("div","card bg-light text-dark")
card.style="width: 18rem;"

let img= createMyElement("img","card-img-top")
img.src=element.image

let cardBody =createMyElement("div","card-body")


let h5Tag=createMyElement("h5","card-title")
h5Tag.innerHTML=element.name

let pTag=createMyElement("p","card-text")
pTag.innerHTML=element.house


cardBody.append(h5Tag,pTag)
card.append(img,cardBody)
column.append(card)
row.append(column)
container.append(column)

        // console.log(element.name)
        // console.log(element.gender)
        
    });

}

function createMyElement(elem,elemclass,elemid){

    let create= document.createElement(elem)
    create.setAttribute("class",elemclass)
    create.setAttribute("id",elemid)


    return create;


}






















