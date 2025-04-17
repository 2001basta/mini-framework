export default render

function renderElement(tagName, attrs, children) {
    const elem = document.createElement(tagName)
    for (const [k, v] of Object.entries(attrs)) {
        if (k.startsWith('on')) {
            const eventType = k.slice(2).toLowerCase();
            elem[`on${eventType}`] = v;
            continue
        }
        elem.setAttribute(k, v)
    }
    for (let child of children) {

        const childelem = render(child)
        elem.appendChild(childelem)
    }
    return elem
}

function render(vNode) {
    if (typeof (vNode) == "string") {
        return document.createTextNode(vNode)
    }
    return renderElement(vNode.tagName, vNode.attrs, vNode.children)
}