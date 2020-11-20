import AbstractView from "./AbstractView.js"

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Add Movie");
    }

    async getHTML() {
        return `         
           <h1 class="text-center">Movies</h1>
           <section>
               <a href="#" class="btn btn-warning ">Add Movie</a>
               <form class="search float-right">
                   <label>Search: </label>
                   <input type="text">
                   <input type="submit" class="btn btn-info" value="Search">
               </form>
           </section>
        `
    }
}
         
         
         
         
         
