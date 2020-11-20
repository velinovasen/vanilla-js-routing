import AbstractView from "./AbstractView.js"

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Movies")
    }

    async getHTML() {
        return `<div class=" mt-3 ">
        <div class="row d-flex d-wrap">
    
            <div class="card-deck d-flex justify-content-center">
    
                <div class="card mb-4">
                    <img class="card-img-top" src="https://pbs.twimg.com/media/ETINgKwWAAAyA4r.jpg" alt="Card image cap" width="400">
                    <div class="card-body">
                        <h4 class="card-title">Wonder Woman 1984</h4>
                    </div>
                    <div class="card-footer">
                        <a href="#/details/6lOxMFSMkML09wux6sAF"><button type="button" class="btn btn-info">Details</button></a>
                    </div>
    
                </div>
    
                <div class="card mb-4">
                    <img class="card-img-top" src="https://i.pinimg.com/originals/f2/a4/58/f2a458048757bc6914d559c9e4dc962a.jpg" alt="Card image cap" width="400">
                    <div class="card-body">
                        <h4 class="card-title">Top Gun 2</h4>
                    </div>
                    <div class="card-footer">
                        <a href="#/details/CUtL9j4qI0XVhn9kTUsx"><button type="button" class="btn btn-info">Details</button></a>
                    </div>
    
                </div>
    
                <div class="card mb-4">
                    <img class="card-img-top" src="https://miro.medium.com/max/735/1*akkAa2CcbKqHsvqVusF3-w.jpeg" alt="Card image cap" width="400">
                    <div class="card-body">
                        <h4 class="card-title">Black Widow</h4>
                    </div>
                    <div class="card-footer">
                        <a href="#/details/krPgQD6SWf39bM4x00co"><button type="button" class="btn btn-info">Details</button></a>
                    </div>
    
                </div>
    
            </div>
        </div>
    </div> `;
    }

}