import render from "./render"
export default diff
function diff(oldApp, newApp){
    if (typeof newApp === 'undefined'){
        return (node)=>{
            node.remove()
            return newApp
        }
    }
    if (typeof newApp ==="string" || typeof oldApp === "string"){
        if (newApp != oldApp){
            return (node)=> {
                const renderNod= render(newApp)
                node.replaceWith(renderNod)
                return renderNod
            }
        }
        return (node)=> undefined
    }
    if (oldApp.tagName != newApp.tagName){
        return (node)=> {
            const renderNod= render(newApp)
            node.replaceWith(renderNod)
            return renderNod
        }
    }
    const changAttr = difAttrs(oldApp.attrs,newApp.attrs)
    // const changChild = difChildrens(oldApp.children,newApp.children)
    return (node)=>{
        changAttr(node)
        return render(newApp)
    }
}

function difAttrs(oldAttrs, newAttrs){
    const funcs = []
   
    for (const k in oldAttrs){
        if (!(k in newAttrs))
        funcs.push(
            (node)=>{
                node.removeAttribute(k)
                return node
            }
        )
    }
    
    for (const [k,v] of Object.entries(newAttrs)){
        funcs.push(
            (node)=>{
                node.setAttribute(k,v)
                return node
            }
        )
    }
    return (node)=>{
        for (let func of funcs){
            func(node)
        }
    }
}

function difChildrens(oldChild, newChild){
    const funcs = []
    for (let x in oldChild){
        if (!(newChild[x])){
            funcs.push((node)=> {
                const renderNod= render(newChild[x])
                node.removeChild(renderNod)
                return node
            })
        }
    }
}