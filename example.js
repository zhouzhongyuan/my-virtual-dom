var element = {
    tagName: 'ul',
    props: {
        id: 'list',
    },
    children: [
        {tagName:'li', props:{class: 'item'}, children:["Item 1"]},
        {tagName:'li', props:{class: 'item'}, children:["Item 2"]},
        {tagName:'li', props:{class: 'item'}, children:["Item 3"]},
    ]
}

// 对应的html是：
/*
 <ul id='list'>
 <li class='item'>Item 1</li>
 <li class='item'>Item 2</li>
 <li class='item'>Item 3</li>
 </ul>
 */
import el from './element';
var ul = el(
    'ul',{id:'list'},
    [
        el('li', {class: 'item'}, ['Item 1']),
        el('li', {class: 'item'}, ['Item 2']),
        el('li', {class: 'item'}, ['Item 3'])
    ]
);
var ulRoot = ul.render();
document.body.appendChild(ulRoot);