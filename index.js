
const template = (tpl, values) => {
    const regex = /\${(.*?)}/g
    return tpl.replace(regex, (_, g) => {
        let s = 'function _() {'
        Object.keys(values).forEach((k)=>{
            s += `const ${k} = ${JSON.stringify(values[k])};\n`
        })
        s += `return ${g}; } _()`
        return eval(s)
    });
}

module.exports = template
