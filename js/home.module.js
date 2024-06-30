import { Ui } from "./ui.module.js";
import { Ditels } from "./details.module.js";


export class Houme {
    
    
    constructor(){
       document.querySelectorAll('.nav-link').forEach(link=>{
        link.addEventListener('click',()=>{
            this.changeActivLinke(link)
            const catogry =link.getAttribute('data-catogry')


        })
       }) ;
       this.loading =document.querySelector('.looder');
       this.details =document.querySelector('.details');
       this.game =document.querySelector('.gameSsection')

       this.Ui = new Ui();

       this.getGameData("MMORPG")
    }

async changeActivLinke(link){
    document.querySelector('.nav-item  .active').classList.remove('active')
    link.classList.add('active')
    const catogry =link.getAttribute('data-catogry')
    this.getGameData(catogry)
    const catogryData =await this.getGameData(catogry)
    // console.log(catogryData);
}


// function name(params) {
    
// }

    async  getGameData(catogry) {
          this.loading.classList.remove('d-none')
        const opiton = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '89c596cef3msh51cb0f6ed18573ep19419ajsnba5c8719923a',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        
        }
        const apiUrl = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${catogry}`,opiton)
        const respons = await apiUrl.json();
        this.loading .classList.add('d-none')

        this.Ui.displayGmes(respons)
         
        document.querySelectorAll('.crd').forEach((card) =>{
            card.addEventListener('click',( )=>{
                this.details.classList.remove('d-none');
                this.game.classList.add('d-none')
                const details = new Ditels(card.dataset.id)
                
            })
        })


    }

}

