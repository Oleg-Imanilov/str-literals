
const template = (tpl, values = {}) => {
    const regex = /\${(.*?)}/g
    return tpl.replace(regex, (_, g) => {
        let s = '(()=>{'
        Object.keys(values).forEach((k)=>{
            s += `const ${k} = ${JSON.stringify(values[k])};`
        })
        s += `return ${g}; })()`
        return eval(s)
    });
}

module.exports = template
