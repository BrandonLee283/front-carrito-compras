import celular1 from '../Assets/celular2.png';
import celular2 from '../Assets/celular3.png';
import celular3 from '../Assets/celular4.png';
import celular4 from '../Assets/celular5.png';
import celular5 from '../Assets/celular1.png';

import laptop1 from '../Assets/laptop1.png';
import laptop2 from '../Assets/laptop2.png';
import laptop3 from '../Assets/laptop3.png';
import laptop4 from '../Assets/laptop4.png';
import laptop5 from '../Assets/laptop5.png';

import tv1 from '../Assets/tv1.png';
import tv2 from '../Assets/tv2.png';
import tv3 from '../Assets/tv3.png';
import tv4 from '../Assets/tv4.png';
import tv5 from '../Assets/tv5.png';


import audifonos1 from '../Assets/audifonos1.png';
import audifonos2 from '../Assets/audifonos2.png';
import audifonos3 from '../Assets/audifonos3.png';
import audifonos4 from '../Assets/audifonos4.png';
import audifonos5 from '../Assets/audifonos5.png';


import camara1 from '../Assets/camara1.png';
import camara2 from '../Assets/camara2.png';
import camara3 from '../Assets/camara3.png';
import camara4 from '../Assets/camara4.png';
import camara5 from '../Assets/camara5.png';


const categorias = ['Telefonia','Portatiles','Pantallas','Audifonos','Camaras']

const productosData = [];
productosData.push({ID: 0, nombre: 'Samsung S21 Ultra', precio: 26999, img: celular1, categoria: categorias[0] });
productosData.push({ID: 1, nombre: 'Pixel 6 Pro', precio: 18999, img: celular2, categoria: categorias[0] });
productosData.push({ID: 2, nombre: 'OnePlus 9 Pro', precio: 21999, img: celular3, categoria: categorias[0] });
productosData.push({ID: 3, nombre: 'Xiaomi Mi 11', precio: 26999, img: celular4, categoria: categorias[0] });
productosData.push({ID: 4, nombre: 'iPhone 13 Pro', precio: 24299, img: celular5, categoria: categorias[0] });

productosData.push({ID: 5, nombre: 'MacBook Pro', precio: 27999, img: laptop1, categoria: categorias[1] });
productosData.push({ID: 6, nombre: 'Dell XPS 15', precio: 26999, img: laptop2, categoria: categorias[1] });
productosData.push({ID: 7, nombre: 'HP Spectre x360', precio: 23999, img: laptop3, categoria: categorias[1] });
productosData.push({ID: 8, nombre: 'Lenovo ThinkPad', precio: 27999, img: laptop4, categoria: categorias[1] });
productosData.push({ID: 9, nombre: 'Asus ROG Zephyrus G14 ', precio: 26999, img: laptop5, categoria: categorias[1] });

productosData.push({ID: 10, nombre: 'LG OLED C1', precio: 34999, img: tv1, categoria: categorias[2] });
productosData.push({ID: 11, nombre: 'Samsung QLED', precio: 29999, img: tv2, categoria: categorias[2] });
productosData.push({ID: 12, nombre: 'Sony BRAVIA XR', precio: 49999, img: tv3, categoria: categorias[2] });
productosData.push({ID: 13, nombre: 'TCL 6-Series', precio: 13999, img: tv4, categoria: categorias[2] });
productosData.push({ID: 14, nombre: 'Vizio OLED 4K TV', precio: 34999, img: tv5, categoria: categorias[2] });

productosData.push({ID: 15, nombre: 'Apple AirPods Pro', precio: 5499, img: audifonos1, categoria: categorias[3] });
productosData.push({ID: 16, nombre: 'Sony WH', precio: 5999, img: audifonos2, categoria: categorias[3] });
productosData.push({ID: 17, nombre: 'Bose QuietComfort', precio: 5999, img: audifonos3, categoria: categorias[3] });
productosData.push({ID: 18, nombre: 'Jabra Elite 85t', precio: 3999, img: audifonos4, categoria: categorias[3] });
productosData.push({ID: 19, nombre: 'Sennheiser Momentum True 2', precio: 4999, img: audifonos5, categoria: categorias[3] });

productosData.push({ID: 20, nombre: 'Canon EOS R5', precio: 103999, img: camara1, categoria: categorias[4] });
productosData.push({ID: 21, nombre: 'Sony Alpha A7 III', precio: 41999, img: camara2, categoria: categorias[4] });
productosData.push({ID: 22, nombre: 'Nikon Z6 II ', precio: 41999, img: camara3, categoria: categorias[4] });
productosData.push({ID: 23, nombre: 'Fujifilm X-T4', precio: 39999, img: camara4, categoria: categorias[4] });
productosData.push({ID: 24, nombre: 'Panasonic Lumix', precio: 2999, img: camara5, categoria: categorias[4] });


export {productosData}