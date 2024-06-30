import { Ui } from "./ui.module.js";

export class Ditels{
    constructor(id){
        this.closeBtn =document.querySelector('.close').addEventListener('click',()=>{
            document.querySelector('.details').classList.add('d-none');
            document.querySelector('.gameSsection').classList.remove('d-none')
            this.loading =document.querySelector('.looder');

        })
        this.getAplDetals(id)
    }
   


    async getAplDetals(id){
        // this.loading.classList.remove('d-none')

    const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '89c596cef3msh51cb0f6ed18573ep19419ajsnba5c8719923a',
		'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
	}
};
	const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
    
	const result = await api.json();
    // this.loading.classList.remove('d-none')
    console.log(result);
    new Ui().displayDitails(result)
}
}