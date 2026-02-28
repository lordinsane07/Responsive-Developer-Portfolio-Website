const fs = require('fs');
const path = require('path');

const reactIconsSiPath = path.join(__dirname, '..', 'node_modules', 'react-icons', 'si', 'index.js');
const reactIconsFaPath = path.join(__dirname, '..', 'node_modules', 'react-icons', 'fa6', 'index.js');
const reactIconsTbPath = path.join(__dirname, '..', 'node_modules', 'react-icons', 'tb', 'index.js');

try {
    const si = require('react-icons/si');
    const fa = require('react-icons/fa6');
    const tb = require('react-icons/tb');

    const check = (name) => {
        return !!si[name] || !!fa[name] || !!tb[name];
    };

    const icons = [
        'SiCplusplus', 'SiJavascript', 'SiTypescript', 'SiPython', 'SiDart', 'SiC',
        'SiReact', 'SiNextdotjs', 'SiTailwindcss', 'SiNodedotjs', 'SiExpress',
        'SiSocketdotio', 'SiFlutter', 'SiTensorflow', 'SiPytorch', 'SiScikitlearn',
        'SiPandas', 'SiNumpy', 'SiMongodb', 'SiPostgresql', 'SiMysql', 'SiFirebase',
        'SiDocker', 'SiGit', 'SiPostman', 'SiPowerbi', 'SiJupyter', 'SiCloudinary',
        'SiXgboost'
    ];

    icons.forEach(i => console.log(`${i}: ${check(i)}`));
} catch (e) {
    console.log('Error:', e.message);
}
