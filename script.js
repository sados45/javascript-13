//___________MAP-FILTER-REDUCE_________________-

// biz bunlarla array icine müdahale ediyoruz. 

//MAP ile foreach te oldugu gibi array icinde döndürüyoruz. ayrica map döndürdügü gübü yeni bir array ortaya koyuyor.
/*
//örnegin;

const arr= [1,4,6,9,12,56]

const mapped= arr.map((element, index, array) => {
    //console.log('element: ${element}, index: ${index}, array: ${array}')

   // return element**3 // yukarida yazili olan array sayilarinin küpünü aldik. 
    //bunu söylede yazabiliriz. 
    return 'index: ${index}, ${element **3}'
})
console.log(arr)
console.log(mapped) //biz bir map calismasi yaptik. ama sonuc yine ayri bir array oldu
// biz yukaridaki verdigimiz degerler üzerinde arrayda, küpünü alarak map özelligini kullanarak, yeni bir arrayi elde ettik. foreach e benziyor. ama yeni bir array sunuyor. map arraylerle calisiyor. 
// ________________________________________________________________________________
*/

const DATA = [

    {
    url: "img1.jpeg", 
    title : "Title 1",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
    url: "img2.jpeg", 
    title : "Title 2",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
    url: "img3.jpeg", 
    title : "Title 3",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
    url: "img4.jpeg", 
    title : "Title 4",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
    url: "img5.jpeg", 
    title : "Title 5",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
]



    const container= document.querySelector(".container");

    DATA.map (el =>{

        const newDiv= document.createElement("div")
        newDiv.setAttribute("class", "card")
        newDiv.style.width= "18rem"
        newDiv.style.margin="2vh 0"


        const img= document.createElement("img")
        img.setAttribute("src", './images/${el.url}')
        src="./images/img1.jpg"
        img.setAttribute("class", "card-img-top")

        const innerDiv = document.createElement("div")
        innerDiv.setAttribute("class", "card-body")

        const head= document.createElement("h5")
        head.setAttribute ("class", "card-title")
        head.textContent = el.title

        const prg= document.createElement ("p")
        prg.setAttribute("class", "card-text")
        prg.textContent= el.description

        const btn= document.createElement ("a")
        btn.setAttribute("class", "btn btn-primary")
        btn.textContent= "Go somewhere"

        innerDiv.appendChild(head)
        innerDiv.appendChild(prg)
        innerDiv.appendChild(btn)

        newDiv.appendChild(img)
        newDiv.appendChild(innerDiv)
        
        container.appendChild(newDiv)

    })//Html de div icinde bulunanlari en icten en disa dogru append ederek olusturduk. 

    //burada map ile büyük veriler ileride geldiginde map ile isi düzenlemeyi ogrenmek gerekiyor. cunku aradan bilgileri secip düzenlemede ise yarayacak. 
