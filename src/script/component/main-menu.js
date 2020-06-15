class MainMenu extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div id="right-area">
                <div class="header mb-3">Search for Country's Data Update</div>

                <select name="country" id="country" class="form-control mb-3" style="width: 50%;margin-left: 25%;">
                    <option value="Indonesi">Indonesia</option>
                </select>

                <div class="card bg-light mb-3" style="height: 600px;">
                    <div class="card-body">
                        <h5 class="card-title">Light card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("main-menu", MainMenu);