const dom = require("../../dom")

class WebComponent {
    constructor(tagName, html) {
        this.tagName = tagName

        customElements.define(tagName, class extends HTMLElement {
            constructor() {
                super()

                this.attachShadow({mode: 'open'})
                    .appendChild( html )
            }
        })
    }
}

module.exports = new WebComponent(
    "app-header",
    <b style="color:yellow">Hello</b>
)