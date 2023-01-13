// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from 'fs';
import path from 'path';


export default function handler(req, res) {
    // console.log('req', req);
    // console.log('window', window);
    //https://localhost:3000/assets/menu.csv 는 fs로 불러 올 수 없지만, axios를 써서는 불러 올 수 있다.
    //axios.get( 'https://localhost:3000/assets/menu.csv' );
    // const file = axios.get( 'https://localhost:3000/assets/menu.csv' );
    const file = fs.readFileSync(path.resolve('./assets/menu.csv'), 'utf-8');
    const rows = file.split('\n');
    const json = [];

    rows.forEach(row => {
        if(row === '') return;
        const item = row.split(',');
        json.push({
            name: item[0],
            price: parseInt(item[1], 10)
        })
    });
    // console.log(json);

    res.status(200).json(json);
    // setTimeout(() => res.status(200).json(json), 3000);

}