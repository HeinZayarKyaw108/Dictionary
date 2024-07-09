const formEvent = document.querySelector("#form");
const userInput = document.querySelector("#user_input");
const dictionaryTitle = document.querySelector("#dictionary_word");
const phonetic =document.querySelector("#dictionary_phonetic");
const playButton = document.querySelector("#play_button");
const dictionary_sound =document.querySelector("#audio");
const listItem = document.querySelectorAll("li"); 
const arrayItems = Array.from(listItem); 

//const listItems = document.querySelectorAll("li"); 
//const arrayItem = Array.from(listItems); 
//const sourceUrls =document.querySelectorAll("#source_li id")
const noun = document.querySelector("#part_of_speech_noun");
const verb = document.querySelector("#part_of_speech_verb");
//const synonyms_title = document.querySelector("#synonymsTitle")
const synonym = document.querySelector("#synonyms")
const source = document.querySelector("#source_li_id")
//const darkmode = document.querySelector("#click")


formEvent.addEventListener("submit",async(event)=>{
    event.preventDefault();
    const api = `https://api.dictionaryapi.dev/api/v2/entries/en/${userInput.value}`
    const fetchValue = await fetch(api);
    const responseData = await fetchValue.json();
    //console.log(responseData)
    responseData.map((currentValue,index)=>{
      //console.log(responseData)
        dictionaryTitle.innerHTML = currentValue.word;
        phonetic.textContent = currentValue.phonetic
    })
    const audiosound =false;
    responseData.map((currentValue,index)=>{
        currentValue.phonetics.map((items,index)=>{
          playButton.addEventListener("click",()=>{
            if(!audiosound && items.audio === ""){
                console.log("Audio empty");
                dictionary_sound.src="";
              }
              else{
                dictionary_sound.src =items.audio;
                dictionary_sound.play();
              }
          })
        })
        responseData.map((currentValue,index)=>{
          currentValue.meanings.map((item,index)=>{
            item.definitions.map((defi,defindex)=>{
             arrayItems.map((items,index)=>{
              if(index === defindex){
                items.textContent = defi.definition
              }
             })
          })
        })


       
        responseData.map((currentValue,index)=>{ 
            currentValue.meanings.map((items,index)=>{ 
                if(items.partOfSpeech ==="noun"){
                  noun.textContent = items.partOfSpeech
                }
                else {
                  noun.textContent = items.partOfSpeech
                }

            })
        })
        responseData.map((item,index)=>{
          item.meanings.map((item,index)=>{
            console.log(item.partOfSpeech)
          
          })
        })
       responseData.map((item,index)=>{
        item.meanings.map((currentValue,index)=>{
          currentValue.synonyms.map((syn,synindex)=>{
             //console.log(syn)
            synonym.textContent = syn
            })
            })
           
          })
          })
          responseData.map((currentValue,index)=>{
            currentValue.sourceUrls.map((item,index)=>{
            source.textContent=item
              //console.log(item)
            })
           
          })
        
          })
        })
        
        
