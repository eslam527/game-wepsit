  export class Ui{
    constructor(){};
     displayGmes(catogryData) {
        let gameBox = ``
        for(let i = 0 ; i< catogryData.length; i++){
            gameBox +=`
                          <div class="col-sm-12 col-md-4 col-lg-3 p-2 crd"  data-id="${catogryData[i].id}">
                <div class="gameBody border rounded border-secondary ">
                  <div class="gameImg p-2">
                    <img src=" ${catogryData[i].thumbnail}" class="w-100 border object-fit-cover  rounded-top border-secondary" alt=" ${catogryData[i].title}" />
                  </div>
                  <div class="gameInfo text-white py-2">
                    <div class="name-cost d-flex justify-content-between align-items-baseline p-2">
                      <h3 class="h6 name mb-0"> ${catogryData[i].title.split(2)}</h3>
                      <div class="cost btn btn-info text-white">free</div>
                    </div>
                    <div class="gameDesc text-center overflow-hidden " 
                      <p class="lead">${catogryData[i].short_description.split(" ", 3)}.</p>
                    </div>
                    <hr>
                    <div class="gamyType text-white d-flex justify-content-between px-2">
                      <div class="btn bg-secondary text-white Category"> ${catogryData[i].genre}</div>
                      <div class="btn bg-secondary text-white Platform"> ${catogryData[i].platform.split('',5)}..</div>
                    </div>
                  </div>
                </div>
                </div>
            `
        }
        document.getElementById('gameBody').innerHTML=gameBox


    }

    displayDitails(Data){
        const deti =`<div class="col-sm-12 col-md-4">
              <div class="gameImage">
                <div class="inner">
                  <h2 class="text-white">Details Game</h2>

                  <img src="${Data.thumbnail}" class="w-100" alt=" ${Data.title}" />
                </div>
              </div>
            </div>



            <div class="col-sm-12 col-md-8">
              <div class="gameDitals text-white">
                <h2 class=""><span>Title:</span> ${Data.title}</h2>
                <ul class="details">
                  <li class="mb-2">
                    <span>Category :</span
                    ><span class="mx-2 p-0 btn-info btn fw-bold">${Data.genre}</span>
                  </li>
                  <li class="mb-2">
                    <span>Platform :</span
                    ><span class="mx-2 p-0 btn-info btn fw-bold"
                      > ${Data.platform}</span
                    >
                  </li>
                  <li>
                    <span class="">Status :</span
                    ><span class="mx-2 p-0 btn-info btn fw-bold">Live</span>
                  </li>
                </ul>
                <p class="small">${Data.description}</p>
                <a href=${Data.game_url}" class="btn btn-dark border border-warning" target="_blank">show game</a>
              </div>
            </div>
        `
        document.getElementById('details').innerHTML =deti
    }
    
}
