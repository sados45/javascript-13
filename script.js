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
/*
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

*/
    //______________________________-FILTER_________________________

    const numbers=[1, 12, 5, 8, 37, 86, 54, 33, 96]

    const filtered= numbers.filter(el => el % 2 ==0)
    console.log(filtered) //burada 2ye kalansiz bölünenleri siraladik filtre etmis olduk. normalde bu özellik olmasaydi if le bulmak icin ugrasacaktik. cok kullanacagimiz functionlardan biri olacak. 


    //diger örnek;

    const arr2= [1,2,3,3,5,5,5]

    function filterMoreThanOne(arr2){
       // return arr2.filter((el,i)=> el !=arr2[i+1]) //yan yana ise

       return arr2.filter((el,i) =>{
           console.log(el, i, arr2.indexOf(el))
                return arr2.indexOf(el)==i
    }
    )
}
   
    console.log(filterMoreThanOne(arr2)) //fitreleme esnasinda indexOf siralamyi yaparken 0 dan baslatarak yaptigi gibi birde tekrar eden sayi yada kelimelerden ilkinin sira sayisini verir. ikincisi yada ücüncü siradakilerin sadece ilkini görecegi icin sira sayilarinda ilk gördügünü verir. tekrari olanlari görmez. sira sqyilarinda. 



    //_______REDUCE________________________--


    //filter ve map de 3 deger yani parametre aliyor. REDUCE 4. yu de aliyor. 

    //arr.reduce((prevValue, currentValue,i,arr)) reduce bir önceki degeri de alarak 4 lemis oluyor. 

    const numbers2=[1, 12, 5, 8, 37, 86, 54, 33, 96]
    //herbir elemani topla ve bana sonucunu ver.

        const reduced= numbers2.reduce(function (prevValue, currentValue){

            console.log("prevValue: " + prevValue)
            console.log("currentValue: " + currentValue)
            return prevValue + currentValue
        },0)//burada baslangic degerini 0 vermmeizin sebebi 0 dan baslamasi, biz 15te verebilirdik. bize bali deger atamasi.

        // normalde reduce(function(prevValue,i arr) , initialValue) seklindedir. 
        console.log(reduced)