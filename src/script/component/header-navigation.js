class HeaderNavigation extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {

        this.innerHTML = `
        <div class="row navi">
            <div class="p-4" id="container-icon">
                <svg class="rotating filter-white" id="virus-icon" x="0px" y="0px" width="100" viewBox="0 0 28.4 28.4"
                    xml:space="preserve" class="sc-AxgMl iRruVi app-logo">
                    <g>
                        <path
                            d="M14.7,7.8c-3.5,0-6.4,2.9-6.4,6.4s2.9,6.4,6.4,6.4s6.4-2.9,6.4-6.4S18.2,7.8,14.7,7.8z M14.7,19.5c-3,0-5.4-2.4-5.4-5.4 s2.4-5.4,5.4-5.4s5.4,2.4,5.4,5.4S17.6,19.5,14.7,19.5z">
                        </path>
                        <path
                            d="M26.4,12.5c-0.7,0-1.3,0.5-1.6,1.1H23c-0.1-1.9-0.9-3.7-2.1-5l1.3-1.3c0.2,0.1,0.5,0.2,0.7,0.2c0.4,0,0.8-0.2,1.2-0.5 c0.6-0.6,0.6-1.7,0-2.3c-0.6-0.6-1.7-0.6-2.3,0c-0.5,0.5-0.6,1.3-0.3,1.9l-1.3,1.3c-1.4-1.2-3.1-2-5-2.1V4c0.7-0.2,1.1-0.8,1.1-1.6 c0-0.9-0.7-1.6-1.6-1.6S13,1.5,13,2.4c0,0.7,0.5,1.3,1.1,1.6v1.8c-1.9,0.1-3.7,0.9-5,2.1L7.9,6.6C8.2,6,8.1,5.2,7.6,4.7 c-0.6-0.6-1.7-0.6-2.3,0C4.6,5.3,4.6,6.4,5.2,7C5.6,7.3,6,7.5,6.4,7.5c0.3,0,0.5-0.1,0.7-0.2l1.3,1.3c-1.2,1.4-2,3.1-2.1,5H4.5 C4.3,13,3.7,12.5,3,12.5c-0.9,0-1.6,0.7-1.6,1.6c0,0.9,0.7,1.6,1.6,1.6c0.7,0,1.3-0.5,1.6-1.1h1.8c0.1,1.9,0.9,3.7,2.1,5L7.1,21 c-0.6-0.3-1.4-0.2-1.9,0.3c-0.6,0.6-0.6,1.7,0,2.3c0.3,0.3,0.7,0.5,1.2,0.5s0.8-0.2,1.2-0.5c0.5-0.5,0.6-1.3,0.3-1.9l1.3-1.3 c1.4,1.2,3.1,2,5,2.1v1.8c-0.7,0.2-1.1,0.8-1.1,1.6c0,0.9,0.7,1.6,1.6,1.6s1.6-0.7,1.6-1.6c0-0.7-0.5-1.3-1.1-1.6v-1.8 c1.9-0.1,3.7-0.9,5-2.1l1.3,1.3c-0.1,0.2-0.2,0.5-0.2,0.7c0,0.4,0.2,0.8,0.5,1.2c0.3,0.3,0.7,0.5,1.2,0.5s0.8-0.2,1.2-0.5 c0.3-0.3,0.5-0.7,0.5-1.2s-0.2-0.9-0.5-1.2c-0.5-0.5-1.3-0.6-1.9-0.3l-1.3-1.3c1.2-1.4,2-3.1,2.1-5h1.8c0.2,0.7,0.8,1.1,1.6,1.1 c0.9,0,1.6-0.7,1.6-1.6C28,13.2,27.3,12.5,26.4,12.5z M22.5,5.4c0.1-0.1,0.3-0.2,0.5-0.2s0.3,0.1,0.5,0.2c0.2,0.2,0.2,0.7,0,0.9 c-0.2,0.2-0.7,0.2-0.9,0C22.3,6.1,22.3,5.7,22.5,5.4z M14.7,1.8c0.4,0,0.6,0.3,0.6,0.6S15,3.1,14.7,3.1S14,2.8,14,2.4 S14.3,1.8,14.7,1.8z M5.9,6.3c-0.2-0.2-0.2-0.7,0-0.9c0.1-0.1,0.3-0.2,0.5-0.2c0.2,0,0.3,0.1,0.5,0.2c0.2,0.2,0.2,0.7,0,0.9 C6.6,6.6,6.2,6.6,5.9,6.3z M3,14.8c-0.4,0-0.6-0.3-0.6-0.6s0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6S3.3,14.8,3,14.8z M6.9,22.9 c-0.3,0.2-0.7,0.2-0.9,0c-0.2-0.2-0.2-0.7,0-0.9c0.2-0.2,0.7-0.3,0.9,0C7.1,22.2,7.1,22.6,6.9,22.9z M14.7,26.5 c-0.4,0-0.6-0.3-0.6-0.6s0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6S15,26.5,14.7,26.5z M23.4,22c0.1,0.1,0.2,0.3,0.2,0.5s-0.1,0.3-0.2,0.5 c-0.2,0.2-0.7,0.2-0.9,0c-0.1-0.1-0.2-0.3-0.2-0.5s0.1-0.3,0.2-0.5c0.1-0.1,0.3-0.2,0.5-0.2S23.3,21.9,23.4,22z M14.7,21.5 c-4,0-7.3-3.3-7.3-7.3s3.3-7.3,7.3-7.3s7.3,3.3,7.3,7.3S18.7,21.5,14.7,21.5z M26.4,14.8c-0.4,0-0.6-0.3-0.6-0.6s0.3-0.6,0.6-0.6 s0.6,0.3,0.6,0.6S26.7,14.8,26.4,14.8z">
                        </path>
                    </g>
                </svg>
            </div>
            <div class="p-4">
                <div id="title">
                    <div class="header" style="margin-top: 10px;">Coronavirus (COVID-19) Outbreak</div>
                    <div class="row">
                        <p class="col-sm-8">Latest Update <span id="lastUpdate"></span></p>
                    </div>
                </div>
                <div data-v-ea1dc9d2="" class="spacer"></div>
            </div>
        </div>
        `;
    }
}

customElements.define("header-navigation", HeaderNavigation);