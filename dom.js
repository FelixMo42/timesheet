module.exports = (tag, attrs, ...children) => {
    let tagName = tag;

    if ( typeof tag != "WebComponent" ) {
        tagName = tag.tagName
    }

    let element = document.createElement( tagName )

    for (let child of children) {
        if ( typeof child != "object" ) {
            element.appendChild( document.createTextNode(child) )
        } else {
            element.appendChild( child )
        }
    }

    Object.assign(element, attrs)
    
    return element
}