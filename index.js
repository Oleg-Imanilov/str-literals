const template = (tpl, values) => tpl.replace(/\${(.*?)}/g, (_, g) => values[g.trim()]);
